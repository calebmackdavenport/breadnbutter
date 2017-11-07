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

export function addRecipe(userid:number, name:string, preptime:number, cooktime:number, servingsize:number, servingyield: string, ingredients: string, directions: string, additionalinfo: string){
    return rows('AddRecipe', [userid, name, preptime, cooktime, servingsize, servingyield, ingredients, directions, additionalinfo])
}

export function deleteRecipe(id:number): Promise<void>{
    return empty('DeleteRecipe', [id]);
}