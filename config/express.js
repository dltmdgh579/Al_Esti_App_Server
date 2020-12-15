module.exports = () => {
    const express = require('express');//express 모듈
    const db = require('./db'); //db.js 파일 모듈화
    const app = express();//express()메소드로 앱의 객체를 생성
    
    process.on('uncaughtException', (err) => {  //잡히지 않은 예외를 몽땅 처리하는 부분을 만듬. 이로인해 프로세스가 절대 죽지 않게함
      console.log(`Caught exception: ${err}`);
    });
    db.connect( (err) => { //db.js파일을 연결해 db와 연결
      if (err) { //연결 에러시
        console.log('Unable to connect to DB.');
        process.exit(1);
      }
    });
  
    app.set('db', db.get()); //앱에서 db를 설정
    return app;
  };