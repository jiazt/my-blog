## 说明

本站服务端采用 express + mongoDB 搭建, 客户端采用 Vue2 的服务端渲染搭建

主要功能包括: 管理员, 用户, 分类, 文章, 评论, 文章点赞

主要技术栈: express, mongoose, vue2, vue2-router, vuex, webpack, babel, eslint

---

```
配置文件: src/api/config-client.js (浏览器端)
api: api地址 (如果 api 服务器和网站服务器是同一个域名, 或者用了反向代理, 可以直接用省去域名的绝对路径, 如: /api/)
配置文件: src/api/config-server.js (服务器端)
api: api地址 (如果 api 服务器 和网站服务器在同一台主机, 可以用本地地址, 如: http://localhost:8080)
port: 启动端口
```

## 准备工作:

安装 NodeJS:
https://nodejs.org/zh-cn/

安装 Mongodb:
https://www.mongodb.com/download-center#community

在 server/config 文件夹下 创建 mpapp.js 文件
里面写入: (小程序登录用的)

```javascript
exports.apiId = ''
exports.secret = ''
```

```shell
# 安装依赖
$ npm install

# 或者
$ yarn
# 注意: 不要用 cnpm 安装依赖

# 开发模式
$ npm run dev

# 生产模式
$ npm run build

# 启动(需先运行 npm run build )
$ npm run start
```

首页
http://localhost:8080

登录
http://localhost:8080/backend

添加管理员
http://localhost:8080/api/backend

管理员添加成功后, 会自动生成 admin.lock 文件锁定, 如果需要继续添加, 请把该文件删除

## loadtest 测试

```
[Sat Jul 15 2017 10:53:43] INFO

[Sat Jul 15 2017 10:53:43] INFO Mean latency:        11.3 ms
[Sat Jul 15 2017 10:53:43] INFO
[Sat Jul 15 2017 10:53:43] INFO Percentage of the requests served within a certain time
[Sat Jul 15 2017 10:53:43] INFO   50%      8 ms
[Sat Jul 15 2017 10:53:43] INFO   90%      17 ms
[Sat Jul 15 2017 10:53:43] INFO   95%      27 ms
[Sat Jul 15 2017 10:53:43] INFO   99%      38 ms
[Sat Jul 15 2017 10:53:43] INFO  100%      438 ms (longest request)
```

# LICENSE

MIT
