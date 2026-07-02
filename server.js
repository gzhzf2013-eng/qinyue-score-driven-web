const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// 健康检查，Render 用
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "qinyue score driven web running" });
});

// 让根路径显示首页
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 允许访问静态资源
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`琴乐启蒙 AI 导师服务已启动，端口：${PORT}`);
});
