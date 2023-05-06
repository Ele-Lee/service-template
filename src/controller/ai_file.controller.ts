import { Controller, Post, Files, Fields, Inject, Body, Param, Get, SetHeader } from '@midwayjs/core';
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
    const paint_id = await this.aiFileService.sendForAiPaint(files[0].data, fields.user_id);
    return { paint_id };
  }

  @Post('/get_file')
  public async getFileInfoByUserId(@Body('id') id) {
    const res = await this.aiFileService.getFileByUserId(id);
    return res.map(item => pick(item, ['id', 'file']));
  }

  @Get('/get_file_with/:patin_id')
  @SetHeader({
    'Content-Type': 'application/force-download',
  })
  public async getFileImgByUserId(@Param('patin_id') patin_id) {
    this.ctx.set('Content-Disposition', `attachment;filename=${patin_id}.jpeg`)
    const res = await this.aiFileService.getFileByPaintId(patin_id);
    return res.file;
  }
}
