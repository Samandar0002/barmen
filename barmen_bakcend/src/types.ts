export namespace IDrinks {
  export interface ICategory {
    id: number;
    name: string;
    drinks: IDrink[];
  }

  export interface IDrink {
    id: number; // ✅
    image: string; // ✅
    size: string; // ✅
    name: string; // ✅
    type: string; // ✅
    brand: string; // ✅
    color: string[]; // ✅
    price: number; // ✅
    stock: number; // ✅
  }
}

export namespace IUser {
  export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
  }

  export interface IAdmin extends IUser {
    isAdmin: boolean;
  }
}
