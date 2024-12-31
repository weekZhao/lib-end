import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 创建用户
  @Post('createUser')
  @HttpCode(200)
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  // 获取用户
  @Get('getUserInfo')
  @HttpCode(200)
  getUserInfo(@Req() request: Request): object {
    return this.userService.getUserInfo();
  }
}
