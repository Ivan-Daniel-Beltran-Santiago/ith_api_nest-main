import { User } from './../../Models/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users: User[] = []

    create( user : User ): void{
        this.Users.push(user)
    }

    getAll() : User[]{
        return this.Users
    }

    getByEmail(email : string) : User{
        return this.Users.find( (user) => user.email === email )
    }

    updateUserById(id: number, user: User): boolean {
        let user_index = this.Users.findIndex((user) => user.id === id);
        if (user_index !== -1) {
          //mantener los datos que no se van a actualizar
          this.Users[user_index] = {
            id: user.id ?? this.Users[user_index].id,
            username: user.username ?? this.Users[user_index].username,
            email: user.email ?? this.Users[user_index].email,
            cellphone: user.cellphone ?? this.Users[user_index].cellphone,
          };
          return true;
        }
        return false;
      }
}
