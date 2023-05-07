import { MidwayConfig } from '@midwayjs/core';
import { getPrivateKey } from '../utils/token';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1683131793997_9544',
  koa: {
    port: 7001,
  },
  upload: {
    base64: false // 非必要不用字符串，减少消耗
  },
  jwt: {
    secret: getPrivateKey().toString(),
    expiresIn: '2d', // https://github.com/vercel/ms
  },
} as MidwayConfig;
