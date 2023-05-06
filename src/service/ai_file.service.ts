import { Inject, Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { AiFile } from '../entity/ai_file.entity';
import { Transform } from 'stream';
import { buffer2Blob } from '../utils/stream';
import { InjectQueue, BullQueue } from '@midwayjs/bull';

@Provide()
export class AiFileService {
  @InjectQueue('sd')
  sdQueue: BullQueue;

  @InjectEntityModel(AiFile)
  aiFileModel: Repository<AiFile>;

  public async sendForAiPaint(transform: Transform, user_id: number) {

    const job = await this.sdQueue?.runJob({ transform, user_id });

    // const progress = await job.progress();
    // const state = await job.getState();
    // job.queue.on('progress', async function (job, progress) {
    //   const state = await job.getState();
    //   console.log('%celelee test:', 'color:#fff;background:#00f', `${user_id} Job ${job.id} is ${progress}% ready! ${state}`);
    // });
    const paint_id = `${user_id}_${job.id}`
    job.queue.on('completed', (job) => {
      console.log('elelee test:', `${user_id} Job ${job.id} completed!`);
      job.remove();
      this.saveFile(transform, paint_id, user_id)
    });

    return paint_id
  }

  public async saveFile(transform: Transform, paint_id: string, user_id: number) {
    try {
      const newFile = new AiFile();
      newFile.paint_id = paint_id;
      newFile.user_id = user_id;
      newFile.status = 1;
      newFile.createdTime = new Date();
      await this.aiFileModel.save(newFile);
      const buffer = await buffer2Blob(transform);
      newFile.file = buffer;
      await this.aiFileModel.save(newFile);
    } catch (error) {
      console.log('%celelee test: err', 'color:#fff;background:#f00', error);
    }
  }

  public async getFileByUserId(userId: number) {
    const res = await this.aiFileModel.findBy({
      id: userId,
    });
    return res;
  }

  public async getFileByPaintId(paint_id: string) {
    const res = await this.aiFileModel.findOne({
      where: {
        paint_id
      }
    });
    return res;
  }
}
