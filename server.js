// 36917ff8adff709b93ed9c925af35c67

//Authentication 인증 
//Authorization 허가
// REST API : f5a600f54f327fe75f720881572afb77
// Redirect URI : http://localhost:8000/auth/kakao/callback
// Key : P7GAyuIufPnwOFUAPkQ99O9Db8xepm4v


const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
    express:app,
})
app.set('view engine', 'html')

app.get('/', (req,res)=>{
    res.render('index.html');
})

app.listen(8000,()=>{
    console.log(`server start port : 8000`)
})

const kakao={
    clientID : 'f5a600f54f327fe75f720881572afb77',
    clientSecret : 'P7GAyuIufPnwOFUAPkQ99O9Db8xepm4v',
    redirectUri: 'http://localhost:8000/kakao_callback'
}