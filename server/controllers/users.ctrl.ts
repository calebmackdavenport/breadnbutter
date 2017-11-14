import * as express from 'express';
// import { router } from 'express';

import * as passport from 'passport';
import * as procedures from '../procedures/users.proc';
import * as auth from '../middleware/auth.mw';

const router = express.Router();

router.get('/', (req, res) => {
    procedures.all()
    .then((users)=> {
        console.log(users);
        res.send(users);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    procedures.read(req.body.id)
    .then((id)=> {
        console.log(id);
        res.send(id);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.post('/login', (req,res,next)=>{
    passport.authenticate('local', (err:any, user: models.IUser, info:any)=>{
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        if(!user) {
            res.status(401).send(info);
        }
        req.logIn(user, (err)=>{
            if(err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                delete user.password;
                res.send(user);
            }
        });
    }) (req, res, next);
});

router.get('/me', (req,res)=>{
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(()=> {
            req.logOut();
            res.sendStatus(204);
        });
    }
});

export default router;