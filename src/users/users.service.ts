import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    getAllUsers(): Promise<User[]> {
        return this.userRepository.find({})
    }

    createUser(newUser: Partial<User>): Promise<User> {
        const user = this.userRepository.create(newUser);
        return this.userRepository.save(user);
    }
}
