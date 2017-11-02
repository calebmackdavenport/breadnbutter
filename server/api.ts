import * as express from 'express';

import search from './controllers/search.ctrl';
import recipes from './controllers/recipes.ctrl';
import ingredients from './controllers/ingredients.ctrl';
<<<<<<< HEAD
import contact from './controllers/contact.ctrl';


=======
import contactForms from './controllers/contactform.ctrl';
>>>>>>> 023f2f0c9680d150f88cce7e96110f1576a0b68b
// import food2fork from './controllers/food2fork.ctrl';

let router = express.Router();

router 
    .use('/search', search)
    .use('/recipes', recipes)
    .use('/ingredients', ingredients)
<<<<<<< HEAD
    .use('/contact', contact)
=======
    .use('/contactforms', contactForms)
>>>>>>> 023f2f0c9680d150f88cce7e96110f1576a0b68b
    // .use('/food2fork', food2fork);

export default router;