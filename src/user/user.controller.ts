import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  // Get /user
  @Get()
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name:  'John Doe' },
      { id: 2, name: 'Jon jon' }
    ];
  
    if (name) {
      return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    }
    return users;
  }
}
