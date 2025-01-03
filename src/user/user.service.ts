import { Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';

import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../utils/constants';

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService) {}
  private users: any = [{ id: 1, username: 'admin', password: '123456' }];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((u: any)=> u.username === username && u.password ===password);
    if(user) {
      return { id: user.id, username: user.username };
    }
    return null;
  }

  async generateToken(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private user: User[] = [];
  createUser(user: User): void {
    this.user.push(user);
  }

  getUserInfo(): object {
    return {
      userName: 'zhangsan',
      userId: '1001',
      age: 20,
      gender: '1',
      email: 'zhangsan@163.com',
      phone: '13800000000',
      address: '北京市朝阳区',
    };
  }
}
