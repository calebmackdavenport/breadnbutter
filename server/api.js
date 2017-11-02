"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const search_ctrl_1 = require("./controllers/search.ctrl");
const recipes_ctrl_1 = require("./controllers/recipes.ctrl");
const ingredients_ctrl_1 = require("./controllers/ingredients.ctrl");
<<<<<<< HEAD
const contact_ctrl_1 = require("./controllers/contact.ctrl");
=======
const contactform_ctrl_1 = require("./controllers/contactform.ctrl");
>>>>>>> 023f2f0c9680d150f88cce7e96110f1576a0b68b
// import food2fork from './controllers/food2fork.ctrl';
let router = express.Router();
router
    .use('/search', search_ctrl_1.default)
    .use('/recipes', recipes_ctrl_1.default)
    .use('/ingredients', ingredients_ctrl_1.default)
<<<<<<< HEAD
    .use('/contact', contact_ctrl_1.default);
=======
    .use('/contactforms', contactform_ctrl_1.default);
>>>>>>> 023f2f0c9680d150f88cce7e96110f1576a0b68b
// .use('/food2fork', food2fork);
exports.default = router;
