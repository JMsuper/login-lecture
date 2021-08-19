
// Http로 서버 띄우기
// const http = require("http");

// // req.url : "/" 루트 경로 뒤에 있는 것들을 가져온다.
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

//     if(req.url === "/"){
//         res.end("여기는 루트 입니다.");
//     }else if(req.url === "/login"){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });
// app.listen(3001, ()=>{
//     console.log("http로 가동된 서버입니다.");
// });

"use strict";

// express 사용

//모듈
//require("express") : express라는 모듈을 다운받아 준다.
const express = require("express");
//app이라는 변수에 express를 실행시켜준다.
const app = express();


// 라우팅, home폴더에 있는 자바스크립트를 읽어와줘
const home = require("./routes/home")

//앱 세팅
app.set("views","./views");
app.set("view engine","ejs");

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드.

module.exports = app;



// function(){} == ()=>{}

//실행 방법 : git bash에서 node app.js
// node는 v8엔진을 사용해서 js코드를 해석해 달라는 명령어 이다.

// express 다운로드하는 법 : npm install express --save

// Cannot GET / : 루트 경로를 찾을 수 없다는 뜻.