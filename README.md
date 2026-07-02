# 琴乐启蒙 AI 导师 · 乐谱驱动增强版

这是 Render 可部署版本。核心特性：

- 语音对话演示
- MusicXML / XML 乐谱导入
- 自动生成曲目画像
- 曲目卡本地保存
- 学生演奏上传 / 浏览器录音
- 音频质量检测
- 曲目匹配后再评分
- 学生版反馈、老师版反馈、Tomplay 练习建议

## 部署

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

Health Check Path:

```text
/health
```

## 说明

当前版本是浏览器端原型，音高/旋律匹配为粗略测评。正式逐音级别评估建议后续接入后端音频转 MIDI 或专业音频分析模块。
