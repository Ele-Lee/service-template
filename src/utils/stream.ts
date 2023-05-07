import { Transform, } from 'stream';
import fs from 'fs'

export function transform2Blob(transformStream: Transform) {
  return new Promise<Buffer>(async (resolve, reject) => {
    const chunks = []
    // let buffer = Buffer.alloc(0);
    for await (let chunk of transformStream) {
      chunks.push(chunk)
      // buffer = Buffer.concat([buffer, chunk])
    }
    resolve(Buffer.concat(chunks))
  })
}

export function read2buffer(path: string) {
  return new Promise<Buffer>((resolve, reject) => {
    // resolve(fs.readFileSync(path))
    fs.readFile(path, {}, (err, data) => {
      resolve(data)
    })
  })
}
