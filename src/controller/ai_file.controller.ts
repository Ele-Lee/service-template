import { Controller, Post, Files, Fields, Inject, Body, Param, Get, SetHeader } from '@midwayjs/core';
// import { rename } from 'fs/promises';
// import { join } from 'path';
import { Context } from '@midwayjs/koa';
import { AiFileService } from '../service/ai_file.service';
import pick from 'lodash/pick';
@Controller('/file', { description: '文件管理' })
export class FileController {
  @Inject()
  ctx: Context;

  @Inject()
  aiFileService: AiFileService;

  @Post('/upload')
  public async upload(@Files() files, @Fields() fields) {
    await this.aiFileService.saveFileByUserId(files[0].data, 1);
    return { success: true };
  }

  @Post('/get_file')
  public async getFileInfoByUserId(@Body('id') id) {
    const res = await this.aiFileService.getFileByUserId(id);
    return res.map(item => pick(item, ['id', 'file']));
  }

  @Get('/get_file_with/:id')
  @SetHeader({
    'Content-Type': 'application/force-download',
  })
  public async getFileImgByUserId(@Param('id') id) {
    const res = await this.aiFileService.getFileByUserId(id);
    return res[0].file;
  }
}
