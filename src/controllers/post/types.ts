import { User } from "../login/types";

export type Post = {
  rating: number;
  licencePlate: string;
  user: User;
};

/* 
 sample Post
 {
  "rating": 4,
  "licencePlate": "ABCD123",
  "user": {
      "username": "sk",
      "email": "sk@gmail.com"
  }
} */
