import {row, rows, empty } from '../config/db';

export function getRecipes(): Promise<Array<models.IRecipe>> {
    return rows('GetAllRecipes');
}

export function getRecipe(id:number): Promise<models.IRecipe> {
    return row('GetSingleRecipe', [id]);
}

export function getUserRecipes(userid:number): Promise<Array<models.IRecipe>> {
    return rows('GetAllRecipesByUser', [userid]);
}

export function deleteRecipe(id:number): Promise<void>{
    return empty('DeleteRecipe', [id]);
} 