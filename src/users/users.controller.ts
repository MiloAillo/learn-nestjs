import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private readonly userService : UsersService) {}
    @Get() // GET users OR with param
    findAll(@Query('name') name?: string): any {
        return this.userService.findAll(name)
    }
}
