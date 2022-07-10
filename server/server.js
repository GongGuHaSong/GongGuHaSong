const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const config = require("./config/key");

// application/x-www-form-urlendcoded 형식의 데이터를
// 가져와서 분석할 수 있도록
app.use(express.urlencoded({ extended: true }));
// application/json 타입의 데이터를
// 가져와서 분석할 수 있도록
app.use(express.json());

// 서버 연결 확인
app.listen(port, () => console.log(`Listening on port ${port}`));

// 데이터베이스 연결 확인
const mongoose = require("mongoose");
mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
