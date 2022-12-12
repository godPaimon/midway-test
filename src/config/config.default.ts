import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1670830132729_628',
  koa: {
    port: 7001,
    http2: true,
  },
} as MidwayConfig;
