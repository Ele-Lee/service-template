import { Inject, Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { TypeORMDataSourceManager } from '@midwayjs/typeorm';
import { AiFile } from '../entity/ai_file.entity';
import { read2buffer, } from '../utils/stream';
import { InjectQueue, BullQueue } from '@midwayjs/bull';

@Provide()
export class AiFileService {
  @InjectQueue('sd')
  sdQueue: BullQueue;

  @Inject()
  dataSourceManager: TypeORMDataSourceManager;

  @InjectEntityModel(AiFile)
  aiFileModel: Repository<AiFile>;

  // dataSource: DataSource;
  constructor() {
    // TODO 事务
    // this.dataSource = this.dataSourceManager.getDataSource('default');
  }


  public async sendForAiPaint(path: string, user_id: number) {

    const paint_id = `${user_id}_${new Date().valueOf()}`
    const job = await this.sdQueue?.runJob({ path, user_id, paint_id });

    // const progress = await job.progress();
    // const state = await job.getState();
    // job.queue.on('progress', async function (job, progress) {
    //   const state = await job.getState();
    //   console.log('%celelee test:', 'color:#fff;background:#00f', `${user_id} Job ${job.id} is ${progress}% ready! ${state}`);
    // });
    job.queue.once('completed', async (curJob) => {
      console.log('elelee test:', `${user_id} Job ${curJob.id} completed! `);
      await curJob.discard();
      await curJob.remove();
      this.saveFile(path, paint_id, user_id)
    });

    return paint_id
  }

  public async saveFile(path: string, paint_id: string, user_id: number) {
    try {
      const newFile = new AiFile();
      newFile.paint_id = paint_id;
      newFile.user_id = user_id;
      newFile.status = 1;
      newFile.createdTime = new Date();
      newFile.file = await read2buffer(path);
      await this.aiFileModel.save(newFile);
    } catch (error) {
      console.log('%celelee test: err', 'color:#fff;background:#f00', error);
    }
  }

  public async getFileByUserId(userId: number) {
    const res = await this.aiFileModel.findBy({
      id: userId,
      status: 1
    });
    return res;
  }

  public async getFileByPaintId(paint_id: string) {
    const res = await this.aiFileModel.findOne({
      where: {
        paint_id,
        status: 1
      }
    });
    return res;
  }
}
