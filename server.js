// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// index.html をルート直下で返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 静的ファイルをルート直下から配信
app.use(express.static(__dirname));

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
