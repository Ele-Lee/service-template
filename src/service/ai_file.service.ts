import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import { AiFile } from '../entity/ai_file.entity';
import { Transform } from 'stream';
const { promisify } = require('util');
const concat = require('stream-concat');

class DuplexToBufferTransform extends Transform {
  buffer = Buffer.alloc(0);
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    this.buffer = Buffer.concat([this.buffer, chunk]);
    callback();
  }

  _flush(callback) {
    this.push(this.buffer);
    callback();
  }
}

@Provide()
export class AiFileService {
  @InjectEntityModel(AiFile)
  aiFileModel: Repository<AiFile>;

  public async saveFile(transform: Transform) {
    // const newFile = new AiFile();
    // // const file = await this.buffer2Blob(b);

    // newFile.id = 1;
    // newFile.file = b;
    // newFile.user = 1;
    // newFile.status = 1;
    // newFile.createdTime = new Date();
    // await this.aiFileModel.save(newFile);

    const res = await this.aiFileModel.findOne({
      where: {
        id: 1,
      },
    });
    // const fileReadStream = fs.createReadStream
    // fs.createReadStream(stream)
    // console.log('%celelee test:', 'color:#fff;background:#000', bufferData);
    // const b64string =
    //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAYBAMAAACrTaaDAAAAG1BMVEUAAACwcgCwdADELAj/AAD//f3Yclr/VVX84+G2DNL/AAAAA3RSTlMAVfceYwpwAAAAg0lEQVQoz93S0QmAIBAG4KsJoglyhgNpgAObQAcQN9AJavD0LtA36yWi//nj9+cQ2lATbPJ/NE4AwyJoi0TmELR6RL1faFAA8yTIOKIUBWmLGLygIrJjVER2jIrIjhFXcREj41JkxFXB1+GzqsOTq8ODxSeo/1x/+N0T9I/54V/wIjoBeTKRbz4eqlAAAAAASUVORK5CYII=';
    // res.file = Buffer.from(b64string, 'base64');
    try {
      const buffer = await this.buffer2Blob(transform);
      console.log('%celelee test:', 'color:#fff;background:#000', buffer);
      res.file = buffer;
      await this.aiFileModel.save(res);
    } catch (error) {
      console.log('%celelee test:', 'color:#fff;background:#000', error);
    }
  }

  private buffer2Blob(transformStream: Transform) {
    return new Promise<Buffer>((resolve, reject) => {
      // const transformStream = new Transform({
      //   transform(chunk, encoding, callback) {
      //     // 转换数据
      //     const upperCaseChunk = chunk.toString().toUpperCase();
      //     // 将转换后的数据推入流中
      //     this.push(upperCaseChunk);
      //     callback();
      //   }
      // });
      const bufferPromise = new Promise((resolve, reject) => {
        const _transformStream = new DuplexToBufferTransform({});
        transformStream.pipe(_transformStream);
        _transformStream.on('error', err => reject(err));
        _transformStream.on('finish', () => resolve(_transformStream.read()));
      });

      bufferPromise.then(resolve);
    });
  }
}

// const fs = require('fs');
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydb'
// });

// const transformData = getTransformData(); // 获取 Transform 类型数据

// const blobStream = connection.query('INSERT INTO mytable (data) VALUES (?)',
//   [new Buffer(0)],
//   function(err, result) {
//     if (err) throw err;

//     const updateStream = connection.query('UPDATE mytable SET data = ? WHERE id = ?', [blobStream, result.insertId]);

//     // 将 Transform 数据写入 blobStream
//     transformData.pipe(blobStream);

//     // 检查写入是否完成
//     updateStream.on('end', function() {
//       console.log('Data saved successfully');
//       connection.end();
//     });
//   });
