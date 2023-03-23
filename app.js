const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks.js");
const connectDb = require("./db/connect");
require("dotenv").config();

app.use(express.json());
// 静的なファイルを見る
app.use(express.static("./public"));

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);


// データベースと接続
const start = async () => {
  try{
    await connectDb(
      process.env.MONGO_URL
      );
      app.listen(PORT, (req, res) => {
        console.log("サーバーが起動しました。");
      });
  }catch(e){
    console.log(e);
  }
};

start();


