# 鹏飞 · 工作总览 Hub

一个纯静态的本地资料总览页，把调研文档按三条主线归类，可搜索、可按标签筛选。

## 三条主线

1. **平台接单**：Upwork / Fiverr / Freelancer 的开发需求分类、能力边界、Proposal 与项目模板库。
2. **长线需求**：Google Trends 关键词分析、AI 新需求发现、从老牌网站弱点找切入点。
3. **案例资讯**：X / Reddit / Product Hunt / HN 上的独立开发与 AI 接单赚钱案例（均未验证），附来源、账号与可抄打法。
   - 条目可加 `"has_evidence": true` 标记“带具体数字或截图”，页面显示徽章，并可勾选「只看带具体数字或截图」过滤。

## 本地打开

直接用浏览器打开 `index.html` 即可（数据在 `data.js`，无需服务器）。也可以：

```bash
python3 -m http.server 8000   # 然后访问 http://localhost:8000
```

## 维护

1. 在 `manifest.json` 的 `docs` 数组里追加一条：`id`、`track`（platform / longterm / cases）、`title`、`path`（Markdown 路径，绝对或相对本目录）、`tags`、`source`，案例可加 `has_evidence`。
2. 运行 `python3 build_data.py` 重新生成 `data.js`（路径不存在的条目会被跳过）。
3. 提交：`git add -A && git commit -m "更新资料" && git push`。

注：`path` 指向本仓库外的文件时，内容已嵌入 `data.js`，但原文件不在仓库中。
