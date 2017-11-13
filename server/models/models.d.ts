declare namespace models {
    interface IRecipe {
        id: number;
        userid: number;
        name: string;
        prepTime: number;
        cookTime: number;
        servingsize: number;
        servingyield: string;
        ingredients: string;
        directions: string;
        additionalinfo: string;
        imageurl: string;
    }

    interface IUser {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        password: string; 
        role: string;
    }

}
