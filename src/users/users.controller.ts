import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.entity';
import {CreateUserDto} from './create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    allUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createNewUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.userService.createUser(newUser);
    }
}
