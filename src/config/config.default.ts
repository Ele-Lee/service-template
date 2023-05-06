import { MidwayConfig } from '@midwayjs/core';
import { getPrivateKey } from '../utils/token';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1683131793997_9544',
  koa: {
    port: 7001,
  },
  upload: {
    mode: 'stream',
  },
  jwt: {
    secret: getPrivateKey().toString(), // fs.readFileSync('xxxxx.key')
    expiresIn: '2d', // https://github.com/vercel/ms
  },
} as MidwayConfig;
