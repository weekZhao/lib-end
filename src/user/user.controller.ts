import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // 登录
  @Post('login')
  @HttpCode(200)
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.userService.validateUser(username, password);

    if (!user) {
      throw new HttpException('用户名或密码错误', HttpStatus.UNAUTHORIZED);
    }
    const token = await this.userService.generateToken(user);
    return { message: '登录成功', user, ...token };
  }

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
