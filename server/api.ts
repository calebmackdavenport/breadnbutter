import * as express from 'express';

import recipes from './controllers/recipes.ctrl';
// import ingredients from './controllers/ingredients.ctrl';
// import food2fork from './controllers/food2fork.ctrl';

let router = express.Router();

router 
    .use('/recipes', recipes);
    // .use('/ingredients', ingredients)
    // .use('/food2fork', food2fork);

export default router;