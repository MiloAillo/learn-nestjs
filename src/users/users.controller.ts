import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // GET users OR with param
    findAll(
        @Query('role') role?: 'admin' | 'user',
        @Query('age') age?: number
    ): string | [] {
        return role ? ` this is ${role} with ${age ?? `unknown`}` : []
    }

    @Get(':id') // GET users/:id
    findOne(@Param('id') id: number): {} {
        return { id }
    }

    @Patch(':id') // PATCH users/:id
    update(@Param('id') id: number, @Body() userUpdate: {} ) {
        return  { id, ...userUpdate }
    }

    @Post() // POST users
    create(@Body() user: {}): {} {
        return user
    }

    @Delete(':id') // DELETE users/:id
    delete(@Param('id') id: number) {
        return `${id} has been deleted!`
    }
}
