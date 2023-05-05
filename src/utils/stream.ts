import { Transform } from 'stream';

class DuplexToBufferTransform extends Transform {
  buffer = Buffer.alloc(0);
  constructor(options = {}) {
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

export function buffer2Blob(transformStream: Transform) {
  const bufferPromise = new Promise<Buffer>((resolve, reject) => {
    const _transformStream = new DuplexToBufferTransform();
    transformStream.pipe(_transformStream);
    _transformStream.on('error', err => reject(err));
    _transformStream.on('finish', () => resolve(_transformStream.read()));
  });

  return bufferPromise;
}
