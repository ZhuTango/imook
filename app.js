var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views');
app.set('view engine', 'jade');
app.listen(port);

console.log('imook started on port ' + port);

//index page
app.get('/', function(req,res){
  res.render('index',{
    title:'imooc 首页'      
  })
})

//dtail page
app.get('/movie/:id', function(req,res){
  res.render('index',{
    title:'imooc 详情页'      
  })
})

//admin page
app.get('/admin/movie', function(req,res){
  res.render('index',{
    title:'imooc 后台录入页'      
  })
})

//list page
app.get('/admin/list1', function(req,res){
  res.render('index',{
    title:'imooc 列表页'      
  })
})