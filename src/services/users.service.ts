import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './../dtos/users.dtos';

@Injectable()
export class UsersService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private couterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Brian Isaac',
      email: 'Carringtom19@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    console.log(payload);
    this.couterId = this.couterId + 1;
    const newUser = {
      id: this.couterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`User #${id} not found`);
    this.users.splice(index, 1);
    return id;
  }
}
