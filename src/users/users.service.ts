import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId });
    }

    async getAll(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async create(email: string, age: number): Promise<User> {
        return this.usersRepository.create({ userId: uuidv4(),email, age, favoriteFoods: [] });
    }

    async update(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }
}
