import * as express from 'express';
// import { router } from 'express';

// import * as passport from 'passport';
import * as procedures from '../procedures/users.proc';

const router = express.Router();

router.get('/', (req, res) => {
    procedures.all()
    .then((users) => {
        res.send(users);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
})

router.get('/:id', (req, res) => {
    procedures.read(req.params.id, req.body.firstname, req.body.lastname)
    .then((users) => {
        res.send(users);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

export default router;