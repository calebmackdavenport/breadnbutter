<<<<<<< HEAD
// TODO: get the procedures from Stinson
=======
import {row, rows, empty } from '../config/db';
>>>>>>> bcd74a947604148d425f2e40690cddea4b39624a

export function getRecipes(): Promise<Array<models.IRecipe>> {
    return rows('GetAllRecipes');
}

<<<<<<< HEAD
import { row, rows, empty } from '../config/db';

export function all(): Promise<Array<models.IRecipe>> {
    return rows(''); //GetAllUserRecipes
}

export function read(id: number): Promise<models.IRecipe> {
    return row('', [id]); //GetSingleUserRecipe
}

// export function create(): Promise<models.ICreateResponse> {
//     return row('', []); //AddUserRecipe
// }

export function destroy(id: number) {
    return empty('', [id]); //DeleteUserRecipe
=======
export function getRecipe(id:number): Promise<models.IRecipe> {
    return row('GetSingleRecipe', [id]);
}

export function getUserRecipes(userid:number): Promise<Array<models.IRecipe>> {
    return rows('GetAllRecipesByUser', [userid]);
}

export function addRecipe(userid:number, name:string, preptime:number, cooktime:number, servingsize:number, servingyield: string, ingredients: string, directions: string, additionalinfo: string){
    return rows('AddRecipe', [userid, name, preptime, cooktime, servingsize, servingyield, ingredients, directions, additionalinfo])
>>>>>>> bcd74a947604148d425f2e40690cddea4b39624a
}

export function deleteRecipe(id:number): Promise<void>{
    return empty('DeleteRecipe', [id]);
}