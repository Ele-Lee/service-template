
import { Processor, IProcessor, Context } from '@midwayjs/bull';
import { Inject, sleep } from '@midwayjs/core';
import { Job } from 'bull';

@Processor('sd', {
  removeOnComplete: true,  // 成功后移除任务记录，最多保留最近 3 条记录
  removeOnFail: true,     // 失败后移除任务记录
  stackTraceLimit: 1
}, {
  // limiter: { max: 2, duration: 0 }
})
// Stable Diffusion 请求
export class SdProcessor implements IProcessor {

  @Inject()
  ctx: Context;

  // @ts-ignore
  async execute(data: any, job: Job) {
    await sleep(2000)
    // job.progress(100)
    job.finished();
  }
}
