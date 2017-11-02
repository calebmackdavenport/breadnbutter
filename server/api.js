"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const search_ctrl_1 = require("./controllers/search.ctrl");
const recipes_ctrl_1 = require("./controllers/recipes.ctrl");
const ingredients_ctrl_1 = require("./controllers/ingredients.ctrl");
const contact_ctrl_1 = require("./controllers/contact.ctrl");
// import food2fork from './controllers/food2fork.ctrl';
let router = express.Router();
router
    .use('/search', search_ctrl_1.default)
    .use('/recipes', recipes_ctrl_1.default)
    .use('/ingredients', ingredients_ctrl_1.default)
    .use('/contact', contact_ctrl_1.default);
// .use('/food2fork', food2fork);
exports.default = router;
