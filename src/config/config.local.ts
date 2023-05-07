import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1683131793997_9544',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'n7nvsgkbvmoxgv8w315bkj',
        database: 'e1e1ee',
        synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,
        // 或者扫描形式
        entities: ['**/entity/*.entity{.ts,.js}'],
        dateStrings: true,
      },
    },
  },
  bull: {
    // 默认的队列配置
    defaultQueueOptions: {
      redis: `redis://127.0.0.1:6379`,
    }
  },
} as MidwayConfig;
