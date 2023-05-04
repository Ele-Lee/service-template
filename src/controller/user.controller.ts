import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/all')
  async getUsers() {
    const user = await this.userService.getAll();
    return { success: true, message: 'OK', data: user };
  }
}
