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

  @Post('/get_file_by_user')
  public async getFileInfoByUserId(@Body('user_id') user_id) {
    const res = await this.aiFileService.getFileByUserId(user_id);
    return res.map(item => pick(item, ['user_id', 'file']));
  }

  @Post('/get_file')
  @SetHeader({
    'Content-Type': 'application/force-download',
  })
  public async getFileImgByUserId(@Body('paint_id') paint_id) {
    this.ctx.set('Content-Disposition', `attachment;filename=${paint_id}.jpeg`)
    const res = await this.aiFileService.getFileByPaintId(paint_id);
    if (!res) {
      return {
        saved: false
      }
    }
    return { file: res.file, paint_id: res.paint_id, saved: true };
  }
}
