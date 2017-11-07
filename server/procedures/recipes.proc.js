"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function getRecipes() {
    return db_1.rows('GetAllRecipes');
}
exports.getRecipes = getRecipes;
function getRecipe(id) {
    return db_1.row('GetSingleRecipe', [id]);
}
exports.getRecipe = getRecipe;
function getUserRecipes(userid) {
    return db_1.rows('GetAllRecipesByUser', [userid]);
}
exports.getUserRecipes = getUserRecipes;
function deleteRecipe(id) {
    return db_1.empty('DeleteRecipe', [id]);
}
exports.deleteRecipe = deleteRecipe;
