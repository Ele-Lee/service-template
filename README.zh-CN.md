# my_midway_project

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [midway 文档][midway]。

### mysql@5.7
```sh
/usr/local/opt/mysql@5.7
```
### 设置sql存储大小
```
set global net_buffer_length=1000000;

set global max_allowed_packet=1000000000;
```

### 后台启动redis
https://www.jianshu.com/p/ee31bf50c986

### 本地开发
先启动mysql + redis
```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
```

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。


[midway]: https://midwayjs.org
