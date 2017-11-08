import { row, rows, empty } from '../config/db';

export function all(): Promise<Array<models.IUser>> {
    return rows('GetUsers');
}

export function read(id: number, firstname: string, lastname: string): Promise<models.IUser> {
    return row('GetUser', [id, firstname, lastname]);
}

export function create(email: string, firstname: string, lastname: string, hash: string) {
    return row('AddUser', [email, firstname, lastname, hash]);
}

export function allrecipesbyuser(userid: number): Promise<models.IUser> {
    return row('GetAllRecipesByUser', [userid]);
}



