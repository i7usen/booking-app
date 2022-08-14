export interface IHotel {
    name: string;
    type: string;
    city: string;
    address: string;
    distance: string;
    photo: string[];
    desc: string;
    rating: number;
    rooms: string[];
    cheapestPrice: number;
    featured: boolean;
}

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    _doc?: any;
}
