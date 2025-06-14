import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private user = [
  { name: 'Mischiko', age: 19 },
  { name: 'Tedd', age: 21 },
  { name: 'Fred', age: 15 }
]

    findAll(name?: string): any {
        if (name) {
        return name ? this.user.find(person => person.name === name) : 'Unable to find user based on your information'
        } else {
            return this.user
        }
    }
}
