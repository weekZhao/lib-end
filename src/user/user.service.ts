import { Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';

@Injectable()
export class UserService {
  private readonly user: User[] = [];

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
