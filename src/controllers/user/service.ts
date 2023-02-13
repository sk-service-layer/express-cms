import admin from '../../firebaseConfig';
import { User } from './types';

export async function signUp(credentials: User): Promise<any> {
    
    if(credentials.email && credentials.password){
        const user = admin.auth().createUser({
            email: credentials.email,
            password: credentials.password
        });
        return user;
    }else{
        throw new Error('Credentials not provided');
    }
}
