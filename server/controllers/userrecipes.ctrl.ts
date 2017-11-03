// import { Router } from 'express';
// import * as procedures from '../procedures/userrecipes.proc';

// const router = Router();


// router.get('/', (req, res) => {
//     procedures.all()
//     .then((userrecipes) => {
//         res.send(userrecipes);
//     }).catch((e) => {
//         console.log(e);
//         res.sendStatus(500);
//     });
// });

// router.post('/', (req, res) => {   //what are the field names in the datbase table ??
//     procedures.create(req.body.name)
//     .then((response) => {
//         res.send(response);
//     }).catch((e) => {
//         console.log(e);
//         res.sendStatus(500);
//     });
// });

// router.get('/:id', (req, res) => {
//     procedures.read(req.params.id)
//     .then((userrecipe) => {
//         res.send(userrecipe);
//     }).catch((e) => {
//         console.log(e);
//         res.sendStatus(500);
//     });
// });

// router.delete('/:id', (req, res) => {
//     procedures.destroy(req.params.id)
//     .then(() => {
//         res.sendStatus(204);
//     }).catch((e) => {
//         console.log(e);
//         res.sendStatus(500);
//     });
// });

// export default router;