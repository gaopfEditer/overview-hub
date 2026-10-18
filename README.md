# 鹏飞 · Overview Hub

纯静态作战板：平台手册、案例分析、思路文档。可离线打开，也可部署到 GitHub Pages。

**在线：** https://gaopfEditer.github.io/overview-hub/

## 三个 Tab

1. **平台前端（CORE）** — 一张卡一个平台，固定四字段：
   - 权限需求清单
   - 操作路径
   - 注意事项
   - Google Trends 对应关键词  
   类型筛选：接单平台 / 作品展示 / 社区获客。覆盖 Upwork、Fiverr、Freelancer、Contra、Indie Hackers/HN、个人作品集站、本 Hub。
2. **案例分析** — 字段：来源、单子类型、操作思路、结果。含一张清晰标注的【示例结构】占位卡（非真实案例）。可用「全部 / 只看带具体数字或截图 / 无证据标记」筛选（`has_evidence`）。在 `manifest.json` 的 `cases` 里加任意新键，`build_data.py` 与前端会自动带上（schema 可扩展）。
3. **思路和文档区** — 能力边界、成长方向、项目推荐、技术清单，以及 Upwork 调研文档（标题预算、backlog、SMB 聚类、模板计划、晚间短名单等）。点击标题展开全文；平台卡/案例卡可通过 `related_docs` 跳转过来。仓库外 md 的展示路径会收成相对片段（不暴露本机绝对路径）。

## 本地打开

浏览器直接打开 `index.html`（数据在 `data.js`，无需服务器）。或：

```bash
python3 -m http.server 8000
# http://localhost:8000
```

`<base href="./">` 已设置，适配 GitHub Pages 项目路径 `/overview-hub/`。

## 维护

1. 编辑 `manifest.json`：
   - 平台 → `platforms[]`（含四字段与 `type`）
   - 案例 → `cases[]`（可加任意自定义字段）
   - 文档 → `docs[]`（`path` 指向 Markdown，绝对或相对本目录）
2. 运行 `python3 build_data.py` 重新生成 `data.js`（缺失 path 会跳过并打印）。
3. 提交并推送 `main`（触发 `.github/workflows/pages.yml`）。

```bash
git add -A && git commit -m "更新资料" && git push origin main
```

注：`path` 指向本仓库外的文件时，正文已嵌入 `data.js`，源文件不会出现在 Pages 产物里。

## 技术说明

- 离线单页：`index.html` + `data.js` + `manifest.json`
- 构建：`build_data.py`
- 部署：GitHub Actions → GitHub Pages
- 密钥：使用带 `repo` + `workflow` 的 token；**永远不要**把 token 写进仓库或打印到日志
