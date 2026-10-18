# Overview Hub 审计清单（2026-10-18 Asia/Shanghai）

线上：https://gaopfEditer.github.io/overview-hub/  
本地：`/workspace/hub`（与线上 data.js 一致，205496 bytes）

审计方式：curl 拉活页 + Playwright headless Chromium 点 Tab / 筛选 / 搜索 / 标签 / 展开 / 相关文档；对照 `index.html`、`data.js`、`manifest.json`、`docs/**`。

图例：`[ ]` 待修 · `[x]` 已修 · `[!]` 需用户内容、无法单靠代码补全

---

## 全局 / 布局

- [x] **移动端工具栏过高**：375px 宽下 sticky `.toolbar` 约 247px（Tab + 类型筛选 + 搜索换行），首屏几乎看不到卡片。表现：手机竖屏打开「平台前端」时，Upwork 卡只露出标题一截。
- [x] **文档卡无「可展开」提示**：思路和文档区默认只显示摘要，点击标题才出正文；标题旁无 chevron /「点击展开」文案，易被当成只有摘要。
- [x] **正文 Markdown 标题样式偏挤**：`.body h3` 默认 margin:0，多级标题粘在一起（能力边界展开后可见）。

## 平台前端

- [x] Tab / 类型筛选（全部·接单平台·作品展示·社区获客）可用（审计时已确认正常，无需改）。
- [x] 搜索、空状态「无匹配平台」、标签写入搜索框、外链「打开 ↗」、相关文档跳转并展开 — 正常。
- [x] 四字段（权限 / 路径 / 注意 / Trends）齐全；展开「完整手册」有正文 — 正常。
- [x] **展开手册缺少可见入口提示**：四字段常显，完整 md 藏在折叠里；标题可点但无 ▾ 提示（体验改进）。

## 案例分析

- [x] **缺少 `has_evidence` 筛选**：`docs/placeholder_cases.md` 写明应有「只看带具体数字或截图」，但 `renderCases` 里 `#filters` 被 `hidden`，无「全部 / 带证据」按钮。
- [x] **占位卡标题重复**：徽章 `【示例结构】` + 标题又以 `【示例结构】空模板…` 开头，桌面端看起来叠了两遍。
- [x] **占位卡需更明确「非真实案例」**：虽有徽章与「（待填）」字段，但缺少卡内醒目说明条；应保留占位卡且保证可展开、相关文档、搜索不坏。
- [x] **证据徽章文案过简**：现为 `📊 证据`，与文档描述「带具体数字或截图」不一致（实现筛选时一并改）。
- [!] **无真实案例内容**：仅 `case-example` 一张示例结构卡；真实接单案例需用户在 `manifest.json` 的 `cases` 追加，代码无法虚构。

## 思路和文档区

- [x] **meta 暴露本机绝对路径（严重）**：9/10 文档 meta 显示 `/workspace/dev-topics/...` 或 `/workspace/upwork/...`（例：能力边界 → `/workspace/dev-topics/01_capability_boundaries.md`）。对外 Pages 不应出现 box 路径。
- [x] 10 篇文档均可展开，Markdown 表格/链接渲染基本正常；相关文档从平台/案例跳入可用。
- [x] 搜索「能力边界」、标签点击 — 正常。

## 数据 / 构建 / 部署

- [x] **`build_data.py` 把绝对 path 原样写入 `data.js`**：即使前端掩饰，源码里仍泄露 `/workspace/...`；应在生成时改为对外展示路径（如 `dev-topics/01_....md`）。
- [x] **README**：若增加案例分析证据筛选 / 路径展示规则，需同步说明。
- [x] Pages Action（push main）与 `<base href="./">` — 现有配置正确，无需为本次审计改 workflow。

## 非缺陷（记录）

- 搜索「Upwork」命中全部 7 张平台卡：因各平台 `content`/字段互有提及，属全文搜索预期，不改。
- `docs/placeholder_cases.md` / `placeholder_longterm.md` 未挂进 manifest：属说明草稿，非死链。
- 案例资讯「长线需求」栏尚未产品化：仅说明 md，不在三 Tab 内，本次不扩 scope。


## 修复落地（本轮）

- `index.html`：路径脱敏、案例证据筛选、占位说明条、展开 chevron/提示、正文标题与移动端 CSS
- `build_data.py`：`public_path()` 写入相对展示路径
- `manifest.json`：示例案例标题去重 + summary
- `data.js`：重建
- `README.md`：同步 UX
