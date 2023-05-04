import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class APIController {
  @Inject()
  ctx: Context;

  @Get('/')
  async getHello() {
    return 'hello';
  }
}
