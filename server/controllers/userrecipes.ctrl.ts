import { Router } from 'express';
import * as procedures from '../procedures/userrecipes.proc';

const router = Router();


router.get('/', (req, res) => {
    procedures.getRecipes()
    .then((userRecipes) => {
        res.send(userRecipes);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {   
    procedures.addRecipe(req.body.userid, req.body.name, req.body.preptime, req.body.cooktime, req.body.servingsize, req.body.servingyield, req.body.ingredients, req.body.directions, req.body.additionalinfo)
    .then((response) => {
console.log(response);
        res.send(response);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    procedures.getRecipe(req.params.id)
    .then((userRecipe) => {
        res.send(userRecipe);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    procedures.deleteRecipe(req.params.id)
    .then(() => {
        res.sendStatus(204);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
});

export default router;
