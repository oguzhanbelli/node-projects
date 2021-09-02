const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if(ctx.url === "/"){
    ctx.body = '<h1> INDEX SAYFASINA HOSGELDINIZ </h1>';
  }else if(ctx.url === "/about"){
    ctx.body = '<h1> ABOUT SAYFASINA HOSGELDINIZ </h1>';
  }else if(ctx.url === "/contact"){
    ctx.body = '<h1> CONTACT SAYFASINA HOSGELDINIZ </h1>';
  }else{
    ctx.body = '<h1> 404 SAYFA BULUNAMADI </h1>';
  }

});

const port = 3000;

app.listen(port,()=>[
    console.log(`Sunucu port ${port}'de başladı`)
]);