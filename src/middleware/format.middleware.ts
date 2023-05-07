import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const result = await next();
      return {
        code: 0,
        msg: 'OK',
        data: result,
      };
    };
  }

  // match(ctx) {
  //   return ctx.path.indexOf('/api') !== -1;
  // }

  ignore(ctx: Context): boolean {
    // 下面的路由将忽略此中间件
    return ctx.path.includes('_with');
  }
}
