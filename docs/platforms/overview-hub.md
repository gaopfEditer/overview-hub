# Overview Hub（本站 · GitHub Pages）

对内作战板：平台手册、案例分析、思路文档。对外也可作为「系统化接单」的轻量证明。

**仓库：** https://github.com/gaopfEditer/overview-hub  
**Pages：** https://gaopfEditer.github.io/overview-hub/

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| GitHub 账号 gaopfEditer | 写权限到 overview-hub | 推送内容 |
| `GITHUB_TOKEN` 或 PAT | **repo + workflow** | 本地 push；触发 Pages Action |
| GitHub Pages | 源 = GitHub Actions | 发布静态站 |
| Actions 权限 | workflows 可写 | `.github/workflows/pages.yml` |

缺 `workflow` scope 时：**推送改不了 workflow 文件，Pages 可能不更新**。

## 操作路径

1. 本地改 `/workspace/hub`：`manifest.json` 增删卡片 → `python3 build_data.py` → 预览 `index.html`
2. `git add -A && git commit && git push origin main`
3. Actions：Deploy GitHub Pages → 等 build+deploy 绿
4. 打开 https://gaopfEditer.github.io/overview-hub/ 硬刷新验证三 Tab
5. 平台卡/案例卡里用 `related_docs` 链到第三 Tab 文档

## 注意事项

- **单页离线**：`data.js` 内嵌正文；仓库外 path 的源文件不会进 Pages，只嵌内容。
- **`<base href="./">`**：保证项目页路径 `/overview-hub/` 下资源正确。
- **密钥**：永不把 token 写进仓库或 README。
- **China access**：github.io 偶发慢；可本地打开 `index.html` 离线用。

## Google Trends / 需求研究关键词

**EN：** `freelance ops playbook`, `upwork workflow documentation`, `github pages portfolio hub`

**CN：** `接单 作战手册`, `Upwork 知识库`, `GitHub Pages 静态站`

交叉：本仓 README、三条 Tab 全部卡片。
