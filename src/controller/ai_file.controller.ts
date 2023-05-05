import { Controller, Post, Files, Fields, Inject, Context } from '@midwayjs/core';
// import { rename } from 'fs/promises';
// import { join } from 'path';
import { AiFileService } from '../service/ai_file.service';

@Controller('/file', { description: '文件管理' })
export class FileController {
  @Inject()
  ctx: Context;

  @Inject()
  aiFileService: AiFileService;

  @Post('/upload')
  public async upload(@Files() files, @Fields() fields) {
    // const result = await Promise.all(
    //   files.map(async file => {
    //     const filename = file.filename;
    //     // await rename(file.data, join(this.app.getAppDir(), 'public', filename));
    //     return `${proto || 'http'}://${host}/public/${filename}`;
    //   })
    // );

    this.aiFileService.saveFile(files[0].data);

    // await
    return { success: true };
  }
}
