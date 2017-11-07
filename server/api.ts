import * as express from 'express';

import search from './controllers/search.ctrl';
import recipes from './controllers/recipes.ctrl';
import ingredients from './controllers/ingredients.ctrl';
// import contactForms from './controllers/contactform.ctrl';
// import food2fork from './controllers/food2fork.ctrl';

let router = express.Router();

router 
    .use('/search', search)
    .use('/recipes', recipes)
    .use('/ingredients', ingredients)
    // .use('/contactforms', contactForms)
    // .use('/food2fork', food2fork);

export default router;