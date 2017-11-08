import * as express from 'express';

import search from './controllers/search.ctrl';
import recipes from './controllers/recipes.ctrl';
import ingredients from './controllers/ingredients.ctrl';
<<<<<<< HEAD
import users from './controllers/users.ctrl';
import contactForms from './controllers/contactform.ctrl';
=======
import userRecipes from './controllers/userrecipes.ctrl'; 
import contactForms from './controllers/contactform.ctrl';
import users from './controllers/users.ctrl';
>>>>>>> bcd74a947604148d425f2e40690cddea4b39624a
// import food2fork from './controllers/food2fork.ctrl';

let router = express.Router();

router 
    .use('/search', search)
    .use('/recipes', recipes)
    .use('/ingredients', ingredients)
<<<<<<< HEAD
    .use('/contactforms', contactForms)
    .use('/users', users);
=======
    .use('/userrecipes', userRecipes)
    .use('/contactforms', contactForms)
    .use('/users', users)
>>>>>>> bcd74a947604148d425f2e40690cddea4b39624a
    // .use('/food2fork', food2fork);

export default router;