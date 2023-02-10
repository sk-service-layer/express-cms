import { User } from "../login/types";

export type Post = {
    rating: number;
    licencePlate: string;
    user: User;
}