import * as express from 'express';
// import { router } from 'express';

import * as passport from 'passport';
import * as procedures from '../procedures/users.proc';
import * as auth from '../middleware/auth.mw';

const router = express.Router();

router.post('/login', (req,res,next)=>{
    passport.authenticate('local', (err:any, user: models.IUser, info:any)=>{
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        if(!user) {
            res.sendStatus(401).send(info);
        }
        req.logIn(user, (err)=>{
            if(err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(user);
            }
        });
    }) (req, res, next);
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(()=> {
            req.logOut();
            res.sendStatus(204);
        });
    }
});

router.get('/', auth.isLoggedIn, (req, res) => {
    procedures.all()
    .then((users) => {
        res.send(users);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.get('/me', (req,res)=>{
    res.send(req.user);
});

export default router;