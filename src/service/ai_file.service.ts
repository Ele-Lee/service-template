import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { AiFile } from '../entity/ai_file.entity';
import { Transform } from 'stream';
import { buffer2Blob } from '../utils/stream';

@Provide()
export class AiFileService {
  @InjectEntityModel(AiFile)
  aiFileModel: Repository<AiFile>;

  public async saveFileByUserId(transform: Transform, id: number) {
    try {
      const newFile = new AiFile();

      newFile.user = id;
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
}
