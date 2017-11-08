import * as express from 'express';

import search from './controllers/search.ctrl';
import recipes from './controllers/recipes.ctrl';
import ingredients from './controllers/ingredients.ctrl';
import userRecipes from './controllers/userrecipes.ctrl'; 
import contactForms from './controllers/contactform.ctrl';
import users from './controllers/users.ctrl';
// import food2fork from './controllers/food2fork.ctrl';

let router = express.Router();

router 
    .use('/search', search)
    .use('/recipes', recipes)
    .use('/ingredients', ingredients)
    .use('/userrecipes', userRecipes)
    .use('/contactforms', contactForms)
    .use('/users', users)
    // .use('/food2fork', food2fork);

export default router;