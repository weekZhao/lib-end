import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  // beforeEach(async () => {
  //   const user: TestingModule = await Test.createTestingModule({
  //     controllers: [UserController],
  //     providers: [UserService],
  //   }).compile();

  //   userController = user.get<UserController>(UserController);
  // });

  // describe('root', () => {
  //   it('user', () => {
  //     expect(userController.getUserInfo()).toBe({});
  //   });
  // });
});
