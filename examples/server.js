const Koa = require("koa");
const app = new Koa();

// const path = require('path')
// console.log(path.resolve(__dirname, './dist'))
// /Users/guoqzuo/Desktop/gitclone/zuo11.com/dist

app.use(require("koa-static")(__dirname + "/dist"));

app.listen(3002, () => {
  console.log("local server listen on 3002");
});
