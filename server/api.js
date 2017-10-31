"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const recipes_ctrl_1 = require("./controllers/recipes.ctrl");
// import ingredients from './controllers/ingredients.ctrl';
// import food2fork from './controllers/food2fork.ctrl';
let router = express.Router();
router
    .use('/recipes', recipes_ctrl_1.default);
// .use('/ingredients', ingredients)
// .use('/food2fork', food2fork);
exports.default = router;
