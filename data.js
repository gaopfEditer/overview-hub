window.HUB_DATA = {
sections: [{"id": "platforms", "name": "平台前端", "desc": "接单 / 展示 / 社区获客平台作战手册：权限、路径、注意、Trends 关键词"}, {"id": "cases", "name": "案例分析", "desc": "真实或示例接单案例：来源、单子类型、操作思路、结果（schema 可随 manifest 扩展）"}, {"id": "docs", "name": "思路和文档区", "desc": "能力边界、成长方向、项目推荐、技术清单与 Upwork 调研文档"}],
platform_types: [{"id": "freelance", "name": "接单平台"}, {"id": "showcase", "name": "作品展示"}, {"id": "community", "name": "社区获客"}],
platform_field_labels: {"permissions": "权限需求清单", "access_path": "操作路径", "caveats": "注意事项", "trends_keywords": "Google Trends 对应关键词"},
platforms: [
{"id": "upwork", "type": "freelance", "title": "Upwork", "url": "https://www.upwork.com/", "summary": "主战场。AI Integration + 工作流/API 自动化；副业（修站、爬虫）放 Project Catalog。2026-10-19 公开复筛仍 NO_GOOD_JOBS，盯新帖个位数提案。", "permissions": "① Freelancer 账号 + **政府 ID 验证**\n② **Billing method**（买 Connects 必需）\n③ 收款：Payoneer / Wise / 银行\n④ Project Catalog 卖家权限（挂副业）\n⑤ 消息推送（UTC+8 快回面试）", "access_path": "1. 登录 Find Work\n2. 建 Saved Searches（n8n/Zapier、AI integration、Playwright/scraping、Next+Supabase+Stripe、self-hosted）\n3. 筛预算 ≥$150–300，跳过 $10–100\n4. 对照 titles_budgets / screened 短名单\n5. 买 Connects → 英文短 Proposal + demo 链接\n6. 面试 → Fixed milestone 或 Hourly 规则\n7. 交付源码+README+bugfix 窗", "caveats": "Connects 消耗快；CF/验证码勿用脚本硬闯；China 可访问但注意 US Only 单；Specialized Profiles 已取消；n8n 类常 50+ 提案，靠「写真代码+自托管 demo」差异化；未验证 ID/Billing = 无法投标。", "trends_keywords": "EN: AI automation freelancer, n8n automation, Zapier alternative n8n, AI chatbot for website, web scraping Playwright, Next.js Supabase Stripe fix, API integration, self-hosted automation, document OCR LLM\nCN: Upwork 接单 AI 自动化, n8n 工作流接单, Playwright 爬虫 接单, Lovable 修站", "related_docs": ["doc-titles", "doc-backlog", "doc-smb", "doc-screened", "doc-cap", "doc-live", "doc-pulse-1019", "doc-longtail", "doc-radar-brief"], "tags": ["Upwork", "接单平台", "Connects", "主战场"], "path": "docs/platforms/upwork.md", "date": "2026-10-19 09:08", "content": `# Upwork 操作手册

鹏飞主战场。定位：**AI Integration + Workflow/API Automation**（主）+ 修完 Lovable/Cursor/Bolt 应用、爬虫/Playwright（副，放 Project Catalog）。

Profile：https://www.upwork.com/freelancers/~01c29e20dd0d9fb0f8

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| Upwork Freelancer 账号 | 已验证 ID（身份证/护照） | 投标、收付款前置 |
| Billing method | 信用卡或本地支付方式 | **购买 Connects** 必需 |
| Tax / 收款信息 | Payoneer / Wise / 本地银行（按地区） | 提现 |
| Agency 或 Solo | Solo 即可 | 当前一人作战 |
| Project Catalog 卖家 | 开通 Catalog | 放副业务（修站、爬虫）不稀释主定位 |
| 可选：Upwork Messages 桌面/手机推送 | 开通知 | 面试消息要快回（UTC+8） |

未完成 ID 验证 + Billing → **不能买 Connects，等于不能投付费单**。

## 操作路径

1. **登录** → https://www.upwork.com/ → Find Work
2. **Saved Searches**：建 3–5 条保存搜索，例如  
   - \`n8n OR Zapier OR Make automation\`  
   - \`AI integration OR chatbot OR RAG\`  
   - \`Playwright OR web scraping OR "fix scraper"\`  
   - \`Next.js Supabase Stripe\`（修 AI 生成站）  
   - \`self-hosted OR Docker automation\`
3. **筛选**：Budget ≥ $150–300；跳过 $10–100 低价卷；优先「修复 / 稳定 / 自托管 / 支付 webhook / scrape→API」
4. **读 Job** → 对照 \`upwork_titles_budgets.md\` / 当晚 \`screened_*.md\` 决定是否投
5. **买 Connects**（通常 16–20+/单）→ 写 Proposal（英文短句、贴相关 demo 链接）→ Submit
6. **面试**：文字优先；要视频则准备 45–60s 自我介绍字幕
7. **合同**：Fixed 优先写清 milestone；Hourly 开 Time Tracker 规则先谈清
8. **交付**：源码 + 短 README + 约定天数 bugfix；客户留评

**日常节奏建议**：早/午硬筛（提案少 + 预算够）→ 晚间按技能契合补短名单（见 \`screened_2026-10-14_evening.md\`）。

## 注意事项

- **Connects**：每天限额、热门单消耗高；没 Billing 买不了。
- **Rate limit / 风控**：短时间大量打开 apply 页、复制粘贴同质 Proposal 易触发限制；人工节奏投。
- **Captcha / Cloudflare**：类目页、部分 apply URL 对自动化极不友好；**用浏览器人工**，不要指望脚本绕过。
- **China access**：平台可访问，但部分雇主标 US Only / 要求本地时区 overlapping；提案里写清 UTC+8 回复窗口。
- **ID verify**：必须；与收款名一致。
- **Specialized Profiles**：2026-05-28 已取消 → **一个主 Profile + Catalog 挂副业**。
- **竞争**：n8n/Zapier 类常 50+ 提案；差异化靠「写真代码 + Docker/自托管 + 已有 demo 链接」。
- **跳过信号**：预算 <$100、只要拖拽 no-code、要 US 公民、范围极大却 fixed $200。

## Google Trends / 需求研究关键词

**EN：** \`AI automation freelancer\`, \`n8n automation\`, \`Zapier alternative n8n\`, \`AI chatbot for website\`, \`web scraping Playwright\`, \`Next.js Supabase Stripe fix\`, \`API integration developer\`, \`self-hosted automation\`, \`document OCR LLM\`, \`lead generation scraper\`

**CN（研究用，客户多为英文）：** \`Upwork 接单 AI 自动化\`, \`n8n 工作流接单\`, \`海外 SMB 自动化需求\`, \`Playwright 爬虫 接单\`, \`Lovable 修站\`

交叉文档：\`upwork_titles_budgets.md\`、\`requirements_backlog.md\`、\`smb_demand_clusters.md\`、\`profile_draft.md\`。

## 最近脉搏

见文档区 **Upwork 市场脉搏 2026-10-19**（\`docs/notes/upwork_pulse_2026-10-19.md\`）：QUALIFIED=0、近失表与跳过模式。交叉：Freelancer 竞标观察、长尾方向笔记。
`},
{"id": "fiverr", "type": "freelance", "title": "Fiverr", "url": "https://www.fiverr.com/", "summary": "产品化 Gig：把 n8n/AI 小交付与修站打成 Basic/Standard/Premium，补 Upwork 定制单。", "permissions": "① Seller 账号（邮箱+手机）\n② **ID 验证**（提现）\n③ 提现渠道（如 Payoneer）\n④ Programming & Tech / AI 类目\n⑤ 可选 Seller Plus（放量后再开）", "access_path": "1. Switching to Selling\n2. 建 1–2 个主 Gig（n8n/AI automation；Fix AI web app）\n3. 写清三档交付物与修改次数\n4. 封面/视频 + 链到 portfolio 模板\n5. 标签对齐买家搜索词\n6. 开 Buyer requests → 24h 内回复\n7. 完成求评，控取消率", "caveats": "过低价伤定位；写死范围防修订地狱；API Key 由买家提供；完成率/响应时间影响算法；导流站外支付须守 ToS；国内注意提现合规。", "trends_keywords": "EN: n8n automation fiverr, zapier setup, AI chatbot fiverr, chatgpt integration, web scraping service, make.com scenario\nCN: Fiverr 卖自动化, Fiverr Gig n8n, 海外小企业 AI 聊天机器人", "related_docs": ["doc-smb", "doc-tplplan", "doc-live"], "tags": ["Fiverr", "接单平台", "Gig"], "path": "docs/platforms/fiverr.md", "date": "2026-10-17 18:50", "content": `# Fiverr 操作手册

产品化 Gig 市场。适合把已验证的小交付打成套餐（Basic / Standard / Premium），与 Upwork 的「定制合同」互补。

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| Fiverr Seller 账号 | Email + 手机验证 | 上架 Gig |
| ID verification | 政府证件 | 提现、部分类目门槛 |
| Payment / 提现方式 | Payoneer 等 | 收款 |
| Seller Plus（可选）| 付费 | 分析、更强曝光（量起来再开） |
| Gig 类目权限 | Programming & Tech / AI Services | 选准类目避免错投 |

## 操作路径

1. **注册/登录** → https://www.fiverr.com/ → Switching to Selling
2. **选类目**：Programming & Tech → 子类如 AI Development、Chatbots、Automation Tools；或 Data → Web Scraping
3. **创建 Gig**（建议先 1–2 个主 Gig，不要铺太多）：
   - **AI / n8n automation setup**（对接 CRM/Sheets/Slack）
   - **Fix & finish AI-generated web app**（Next/Supabase/Stripe）
   - （可选）**Playwright scraper + Google Sheets export**
4. 填 **3 档套餐**：明确交付物、修改次数、工期；加 FAQ（范围外收费）
5. **封面图 + 视频** + 作品集链到 portfolio / 模板站
6. **SEO 标题/标签**：对齐买家搜索词（见关键词）
7. 上架 → 开 **Buyer requests** 抢相关定制 → 消息 24h 内回复
8. 完成后求 Review；纠纷走 Resolution Center，留书面范围

## 注意事项

- **定价**：高评软件 Gig 起步中位约 $100 档常见；真实项目常 $200–$5,000。过低（$5–$20）伤定位。
- **修订地狱**：套餐写死「含 N 次修改 / 不含源码或含源码」；自动化类务必写「第三方 API Key 由买家提供」。
- **China access**：可访问；注意支付/提现合规与税务自行申报。
- **算法**：完成率、响应时间、取消率影响曝光；宁可不接也不要取消。
- **与 Upwork 关系**：Fiverr 适合标准化小单引流；大定制仍导 Upwork/站外合同（遵守平台 ToS，勿引导站外支付违规）。
- **趋势参考**：Fiverr BTI 显示 n8n AI automation、AI 相关搜索增速高——Gig 标题可跟，但不编造数据。

## Google Trends / 需求研究关键词

**EN：** \`n8n automation fiverr\`, \`zapier setup\`, \`AI chatbot fiverr\`, \`chatgpt integration\`, \`web scraping service\`, \`fix wordpress site\`, \`shopify automation\`, \`make.com scenario\`

**CN：** \`Fiverr 卖自动化\`, \`Fiverr Gig n8n\`, \`海外小企业 AI 聊天机器人\`

交叉：\`smb_demand_clusters.md\`（Fiverr BTI / Gig 抽样段落）、模板站链接。
`},
{"id": "freelancer", "type": "freelance", "title": "Freelancer.com", "url": "https://www.freelancer.com/", "summary": "竞标制补充池。预算中位偏低，适合小修复/练提案，非主收入。", "permissions": "① 账号 + Email\n② KYC/ID（提现）\n③ Bid credits（每日免费标有限）\n④ Milestone 托管理解", "access_path": "1. Browse → n8n / API / scraping / automation\n2. 选描述清、有支付验证的 Fixed 单\n3. 短提案：复述问题 + 3 步 + 价期\n4. Place Bid（省免费标）\n5. 等 Milestone 拨款再开工\n6. 交付→放款→互评", "caveats": "低价卷严重；拒站外先聊诈骗；Bid 别浪费在白嫖帖；精力优先级低于 Upwork。", "trends_keywords": "EN: freelancer.com automation, hire n8n developer, web scraping freelancer, API integration project\nCN: Freelancer 竞标, 海外众包 自动化", "related_docs": ["doc-smb", "doc-backlog", "doc-freelancer-bids", "doc-pulse-1019", "doc-radar-brief"], "tags": ["Freelancer", "接单平台", "竞标"], "path": "docs/platforms/freelancer.md", "date": "2026-10-17 18:50", "content": `# Freelancer.com 操作手册

竞标制项目市场。预算中位偏低、竞标人数多，适合捡「修复/小集成」或练英文提案，不作为主收入依赖。

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| Freelancer 账号 | Email 验证 | 浏览、投标 |
| ID / KYC | 按国家要求 | 提现、部分项目 |
| Bid credits / Preferred | 免费每日标数有限；付费加标 | 投标配额 |
| Milestone / 托管 | 买家拨款 | 开工前确认资金 |
| Exam / 技能测试（可选）| 徽章 | 略增信任，非必须 |

## 操作路径

1. 登录 https://www.freelancer.com/
2. Browse projects → 关键词：\`n8n\`, \`API integration\`, \`web scraping\`, \`Next.js\`, \`automation\`
3. 过滤：Fixed Price、预算可读、描述具体、有支付验证的买家
4. 写 **短提案**（问题复述 + 3 步方案 + 价与工期）→ Place Bid（注意每日免费标）
5. 中标后等 **Milestone 拨款** 再开工
6. 交付 → 请求放款 → 评价

## 注意事项

- **低价卷**：大量 $30–$250 单；对照 \`smb_demand_clusters.md\` Freelancer 快照（Automation 中位约 $140）决定值不值得。
- **Bid 配额**：别把免费标浪费在描述不清/要源码白嫖的帖。
- **China access**：可访问；注意时差与竞标话术避免机器感。
- **骗局**：先要私人邮箱/Telegram 且不走托管 → 拒绝。
- **定位**：可当 Upwork 溢出池；主精力仍放 Upwork + 作品集。

## Google Trends / 需求研究关键词

**EN：** \`freelancer.com automation\`, \`hire n8n developer\`, \`web scraping freelancer\`, \`API integration project\`, \`wordpress fix freelancer\`

**CN：** \`Freelancer 竞标\`, \`海外众包 自动化\`

交叉：\`smb_demand_clusters.md\` [FL-DEMAND] 段。
`},
{"id": "contra", "type": "freelance", "title": "Contra（补充）", "url": "https://contra.com/", "summary": "无佣金独立承包商网络。流量小，作补充展示与被动询盘。", "permissions": "① Contra 账号与完整 Profile\n② 收款绑定（平台支持的方式）\n③ Services / Portfolio 公开\n④ 可选连 X/LinkedIn", "access_path": "1. 完善 Independent profile\n2. 添加 AI automation / Fix web app 等 Services\n3. 上传真实 demo 截图（不编造营收）\n4. 链接挂到个人站与 README\n5. 询盘 → 书面报价 → 走 Contra 付款", "caveats": "流量有限，每周看消息即可；定价对齐 Upwork；确认国内收款是否可用，不行则仅展示。", "trends_keywords": "EN: Contra freelance, no commission freelance, AI automation contractor\nCN: Contra 平台, 无佣金 自由职业", "related_docs": ["doc-live", "doc-tplplan"], "tags": ["Contra", "接单平台", "补充"], "path": "docs/platforms/contra.md", "date": "2026-10-17 18:50", "content": `# Contra（补充渠道）

无佣金、偏独立承包商网络。流量小于 Upwork，适合作为 **补充展示 + 被动询盘**，不替代主战场。

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| Contra 账号 | Email + 资料完善 | 发布服务/作品 |
| 收款（Stripe 等平台支持方式）| 绑定 | 收项目款（无传统「平台抽成」叙事） |
| Portfolio / Services | 公开页 | 展示 AI automation、修站等服务 |
| 可选：社交账号连接 | X / LinkedIn | 导入信任背书 |

## 操作路径

1. 注册 https://contra.com/ → 完善 Independent profile
2. 添加 Services：如「AI workflow automation」「Fix AI-generated web apps」
3. 上传 3–5 个案例截图（来自 portfolio 模板，勿编造客户名/营收）
4. 分享公开链接到个人站 / GitHub README / IH 帖
5. 有询盘 → 书面报价 → 合同与付款走 Contra 流程

## 注意事项

- **流量小**：不要每天刷；资料齐全即可，每周检查消息。
- **定价**：对齐 Upwork 时薪/项目价，避免 Contra 过低冲击主定位。
- **China access**：需确认登录与收款是否顺畅；若收款受限则只当展示页。
- **合规**：仍要自己处理税务与合同条款。

## Google Trends / 需求研究关键词

**EN：** \`Contra freelance\`, \`hire independent developer\`, \`no commission freelance platform\`, \`AI automation contractor\`

**CN：** \`Contra 平台\`, \`无佣金 自由职业\`

交叉：个人作品集站、本 Hub。
`},
{"id": "indie-hn", "type": "community", "title": "Indie Hackers / HN", "url": "https://www.indiehackers.com/", "summary": "轻量社区获客：练需求语言、Show 模板、价值评论，少硬广。", "permissions": "① IH 账号 + bio\n② HN 账号（一点 karma）\n③ 作品集 Contact/邮箱\n④ 可选 X", "access_path": "1. IH 完善「帮 SMB 做 n8n/代码自动化」bio\n2. 参与自动化/AI 帖，贡献干货再链 portfolio\n3. HN 跟 Ask/Show；有实质 demo 再 Show HN\n4. 私信转化到邮件或 Upwork\n5. 痛点词记入 backlog", "caveats": "反感硬广；IH 有 CF；时间盒每周 1–2h；不要当接单大厅刷。", "trends_keywords": "EN: indie hacker automation, solo founder AI tools, Ask HN freelance, show HN scraper, SMB no-code limits\nCN: 独立开发 获客, Indie Hackers 自动化, HN 展示项目", "related_docs": ["doc-smb", "doc-growth", "doc-live"], "tags": ["Indie Hackers", "HN", "社区获客"], "path": "docs/platforms/indie-hn.md", "date": "2026-10-17 18:50", "content": `# Indie Hackers / Hacker News（轻量获客）

社区获客，不是接单大厅。目标：**露出专业度、收集需求语言、偶尔引到作品集/邮箱**。投入时间有限。

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| Indie Hackers 账号 | 注册 + 完整 bio | 发帖/评论 |
| HN（Y Combinator）账号 | 注册，积累一点 karma | Show HN / 评论 |
| 公开邮箱或联系页 | portfolio 站 Contact | 转化私聊 |
| （可选）X 账号 | 同步讨论 | 扩大曝光 |

## 操作路径

1. **IH**：https://www.indiehackers.com/ → 完善「I help SMBs automate with n8n/code」类 bio  
   - 参与自动化 / AI 落地帖：贡献可操作建议，文末自然链到 portfolio  
   - 少发硬广；可发「构建公开模板」进度帖
2. **HN**：https://news.ycombinator.com/  
   - 刷 Ask HN / Show HN 里与 scraping、automation、AI wrappers 相关帖  
   - 有实质 demo 时再 Show HN（模板站或开源小工具）  
   - 评论讲技术取舍，不贴「雇我」
3. 有人私信/回帖要帮忙 → 转到邮件或 Upwork 合同（按对方习惯）

## 注意事项

- **反感销售**：HN/IH 对纯广告极狠；价值先行。
- **Cloudflare**：IH 部分页对 bot 不友好 → 人工浏览器。
- **China access**：HN 一般可访问；IH 偶发慢/验证码。
- **时间盒**：每周固定 1–2 小时，避免刷帖成瘾。
- **需求语言**：把帖子里的痛点词记入 \`requirements_backlog.md\` / Trends 词表。

## Google Trends / 需求研究关键词

**EN：** \`indie hacker automation\`, \`solo founder AI tools\`, \`build in public n8n\`, \`Ask HN freelance\`, \`show HN scraper\`, \`SMB no-code limits\`

**CN：** \`独立开发 获客\`, \`Indie Hackers 自动化\`, \`HN 展示项目\`

交叉：\`smb_demand_clusters.md\` [IH-AUTO][IH-HIRE]、作品集站。
`},
{"id": "portfolio", "type": "showcase", "title": "个人作品集站", "url": "https://portfolio-site-orpin-three-91.vercel.app", "summary": "对外销售页。Proposal/Gig 最终落地看可运行模板 demo。", "permissions": "① Vercel 部署权限\n② GitHub 源码仓写权限\n③ 各 tpl-* 模板项目\n④ 可选自定义域与分析", "access_path": "1. 打开作品集核对定位文案\n2. 服务卡链到 tpl-landing / form-to-sheet / booking / launch-audit\n3. 改仓 → push → Vercel Ready → 硬刷新\n4. Proposal 只贴与职位相关的 demo\n5. Contact 与回复预期（UTC+8）保持有效", "caveats": "禁止假客户/假营收；标明 demo template；国内访问 Vercel 可能慢，可备截图或 Pages 镜像。", "trends_keywords": "EN: freelancer portfolio, automation developer portfolio, n8n demo, SaaS landing waitlist, launch audit\nCN: 自由职业者 作品集, 自动化 案例演示, 接单 作品站", "related_docs": ["doc-live", "doc-tplplan", "doc-proj"], "tags": ["作品集", "Vercel", "作品展示"], "path": "docs/platforms/portfolio.md", "date": "2026-10-17 18:50", "content": `# 个人作品集站（Portfolio）

线上门面。所有平台 Proposal / Gig / 社区帖最终应能点到这里看 **可运行 demo**。

**生产地址：** https://portfolio-site-orpin-three-91.vercel.app

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| Vercel 账号 | 登录 + 项目部署权限 | 托管前端 |
| GitHub 仓库权限 | 对应 portfolio 源码仓 | 推送触发部署 |
| 域名（可选）| DNS | 自定义域 |
| 模板站 Vercel 项目 | 各 tpl-* 部署 | Landing/Form/Booking/Audit 演示 |
| 分析（可选）| 隐私友好分析 | 看哪张服务卡被点 |

## 操作路径

1. 打开作品集 → 确认首页定位与 Upwork Overview 一致（AI automation + 全栈）
2. **服务卡** 链到在线模板：
   - Landing + Waitlist → https://tpl-landing-waitlist.vercel.app
   - Form → Sheet → https://tpl-form-to-sheet.vercel.app
   - Booking Calendar → https://tpl-booking-calendar.vercel.app
   - Launch Audit Report → https://tpl-launch-audit-report.vercel.app
3. 更新案例截图时：本地改仓 → push → 等 Vercel Ready → 硬刷新验证
4. Proposal 里只贴 **相关** 模板链接（价格监控单 → Price Watch；修站单 → Launch Audit）
5. Contact / 日历链接保持有效；UTC+8 回复预期写清

## 注意事项

- **禁止编造**：不写假客户名、假营收、假「3x 速度」类口号（见 profile_draft）。
- **Demo 标注**：标明 Portfolio demo template；免费档无付费 API 也能跑。
- **China access**：Vercel 域名在国内可能慢；必要时加 GitHub Pages 镜像或截图备份。
- **与 Hub 分工**：Portfolio = 对外销售页；本 Overview Hub = 对内作战手册。

## Google Trends / 需求研究关键词

**EN：** \`freelancer portfolio examples\`, \`automation developer portfolio\`, \`n8n demo\`, \`SaaS landing waitlist\`, \`launch audit report\`

**CN：** \`自由职业者 作品集\`, \`自动化 案例演示\`, \`接单 作品站\`

交叉：\`docs/live_templates.md\`、\`templates_plan.md\`、\`portfolio_entries.md\`。
`},
{"id": "overview-hub", "type": "showcase", "title": "Overview Hub（本站）", "url": "https://gaopfEditer.github.io/overview-hub/", "summary": "对内作战板（也可对外展示系统化能力）：平台手册 + 案例 + 文档。", "permissions": "① GitHub 写权限 gaopfEditer/overview-hub\n② PAT：**repo + workflow**\n③ Pages = GitHub Actions\n④ Actions 可运行 workflows", "access_path": "1. 改 manifest → python3 build_data.py\n2. 本地打开 index.html 预览\n3. commit & push main\n4. 等 Pages Action 绿\n5. 打开 github.io/overview-hub/ 验证三 Tab", "caveats": "缺 workflow scope 推不了 Action；token 永不入库；data.js 内嵌外链 md；base href 必须为 ./", "trends_keywords": "EN: freelance ops playbook, upwork knowledge base, github pages hub\nCN: 接单 作战手册, Upwork 知识库, GitHub Pages 静态站", "related_docs": ["doc-cap", "doc-growth", "doc-tech"], "tags": ["GitHub Pages", "本站", "作品展示"], "path": "docs/platforms/overview-hub.md", "date": "2026-10-17 18:50", "content": `# Overview Hub（本站 · GitHub Pages）

对内作战板：平台手册、案例分析、思路文档。对外也可作为「系统化接单」的轻量证明。

**仓库：** https://github.com/gaopfEditer/overview-hub  
**Pages：** https://gaopfEditer.github.io/overview-hub/

## 权限需求清单

| 账号/权限 | 级别 | 用途 |
|---|---|---|
| GitHub 账号 gaopfEditer | 写权限到 overview-hub | 推送内容 |
| \`GITHUB_TOKEN\` 或 PAT | **repo + workflow** | 本地 push；触发 Pages Action |
| GitHub Pages | 源 = GitHub Actions | 发布静态站 |
| Actions 权限 | workflows 可写 | \`.github/workflows/pages.yml\` |

缺 \`workflow\` scope 时：**推送改不了 workflow 文件，Pages 可能不更新**。

## 操作路径

1. 本地改 \`/workspace/hub\`：\`manifest.json\` 增删卡片 → \`python3 build_data.py\` → 预览 \`index.html\`
2. \`git add -A && git commit && git push origin main\`
3. Actions：Deploy GitHub Pages → 等 build+deploy 绿
4. 打开 https://gaopfEditer.github.io/overview-hub/ 硬刷新验证三 Tab
5. 平台卡/案例卡里用 \`related_docs\` 链到第三 Tab 文档

## 注意事项

- **单页离线**：\`data.js\` 内嵌正文；仓库外 path 的源文件不会进 Pages，只嵌内容。
- **\`<base href="./">\`**：保证项目页路径 \`/overview-hub/\` 下资源正确。
- **密钥**：永不把 token 写进仓库或 README。
- **China access**：github.io 偶发慢；可本地打开 \`index.html\` 离线用。

## Google Trends / 需求研究关键词

**EN：** \`freelance ops playbook\`, \`upwork workflow documentation\`, \`github pages portfolio hub\`

**CN：** \`接单 作战手册\`, \`Upwork 知识库\`, \`GitHub Pages 静态站\`

交叉：本仓 README、三条 Tab 全部卡片。
`},
],
cases: [
{"id": "case-example", "title": "空模板（新增案例请复制）", "is_template": true, "summary": "占位卡：示例结构，不是真实接单案例。字段均为「待填」说明，复制后在 manifest.json 追加真实条目。", "tags": ["示例结构", "占位"], "related_docs": ["doc-screened", "doc-titles", "doc-live"], "path": "docs/cases/example_structure.md", "source": "", "has_evidence": false, "date": "2026-10-17 18:50", "fields": {"来源": "（待填）平台 + URL / 职位 ID", "单子类型": "（待填）如 n8n 修复 / AI Chatbot / 爬虫管道 / 修 Next+Stripe", "操作思路": "（待填）筛选理由 → 匹配 demo → 提案要点 → milestone 切分", "结果": "（待填）未投 / 已投 / 面试 / 中标 / 完成 / 放弃 + 原因"}, "来源": "（待填）平台 + URL / 职位 ID", "单子类型": "（待填）如 n8n 修复 / AI Chatbot / 爬虫管道 / 修 Next+Stripe", "操作思路": "（待填）筛选理由 → 匹配 demo → 提案要点 → milestone 切分", "结果": "（待填）未投 / 已投 / 面试 / 中标 / 完成 / 放弃 + 原因", "content": `# 【示例结构】案例分析卡片（占位）

> 这是 **【示例结构】** 空模板，不是真实案例。新增案例时复制本结构，在 \`manifest.json\` 的 \`cases\` 数组追加一条；\`build_data.py\` 会把条目上的**任意新字段**自动带进 \`data.js\`，前端按字段名渲染（无需改死 schema）。

## 固定建议字段

| 字段 | 含义 | 示例（待填） |
|---|---|---|
| **来源** | 平台 + 链接/职位 ID | Upwork apply URL / Fiverr Buyer request / 私域 |
| **单子类型** | 需求分类 | n8n 修复 · AI 聊天机器人 · 爬虫管道 · 修 Next/Stripe 站 … |
| **操作思路** | 如何筛选、提案、交付 | 关键词 → 匹配 demo → 提案要点 → milestone |
| **结果** | 结局 | 未投 / 已投待回复 / 面试 / 中标 / 完成评价 / 放弃及原因 |

## 可选扩展字段（自动生效）

在 manifest 该 case 对象上增加任意键即可，例如：

- \`budget\`：预算
- \`proposal_count\`：提案数
- \`matched_demo\`：使用的模板链接
- \`related_docs\`：文档 id 列表
- \`has_evidence\`：是否带截图/数字
- \`date\`：记录日期

## 填写注意

- 收入与结果不编造；未验证信息标明「未验证」。
- 可在 \`path\` 指向一篇更长的 Markdown 作为正文展开。
`},
{"id": "case-skip-ai-marketplace-1018", "title": "跳过：Full Stack AI Marketplace $1500", "is_template": false, "summary": "近失：栈可打但 $1500 做从零市场站偏紧，提案 15–20，新客户无 spend。", "tags": ["Upwork", "跳过", "全栈", "近失"], "related_docs": ["doc-pulse-1019", "doc-titles", "doc-screened"], "path": "docs/cases/skip_ai_marketplace_2026-10-18.md", "source": "https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer_~022111818917446620252/", "has_evidence": true, "date": "2026-10-19 09:00", "fields": {"来源": "Upwork ~022111818917446620252（2026-10-18）", "单子类型": "全栈 / Next+Nest AI 服务市场（从零）", "操作思路": "页核验：$1500 Fixed · 提案 15–20 · China OK · 新客户无 spend → 近失不投", "结果": "放弃 — 预算相对范围偏低 + 提案贴天花板 + 新客户"}, "来源": "Upwork ~022111818917446620252（2026-10-18）", "单子类型": "全栈 / Next+Nest AI 服务市场（从零）", "操作思路": "页核验：$1500 Fixed · 提案 15–20 · China OK · 新客户无 spend → 近失不投", "结果": "放弃 — 预算相对范围偏低 + 提案贴天花板 + 新客户", "content": `# 跳过案例 · Full Stack AI Marketplace（AWS）

- **日期：** 2026-10-18 发布 / 2026-10-19 复核
- **来源：** Upwork apply \`~022111818917446620252\`
- **预算：** $1,500 Fixed（页核验）
- **提案：** 15–20；面试中 3
- **地理：** China 在 applicantLocationRequirements
- **客户：** India，Member since Oct 18, 2026（新号；payment/spend 未展示）
- **栈：** Next.js / NestJS + AI chat matching

## 为何跳过

提案已贴天花板；从零「AI 服务市场」相对 $1,500 偏低；新客户无历史 spend。记为近失，不作 QUALIFIED。

## 可复用话术点（若同类预算上调再看）

复述：AWS 部署边界、AI matching 数据源、里程碑（鉴权→撮合 MVP→上线）。
`},
{"id": "case-skip-fmora-1018", "title": "跳过：FMora AI/Integration 50+ 提案", "is_template": false, "summary": "栈极贴但 50+ 提案、时薪未公示；提醒盯新帖个位数窗口。", "tags": ["Upwork", "跳过", "AI集成", "近失"], "related_docs": ["doc-pulse-1019", "doc-longtail", "doc-cap"], "path": "docs/cases/skip_fmora_integration_2026-10-18.md", "source": "https://www.upwork.com/freelance-jobs/apply/Senior-Full-Stack-Integration-Developer_~022111829338610990521/", "has_evidence": true, "date": "2026-10-19 09:00", "fields": {"来源": "Upwork ~022111829338610990521（2026-10-18）", "单子类型": "AI Integration / LLM tool-calling + 全栈", "操作思路": "栈高度贴合主定位；提案 50+ 且时薪未标 → 不 QUALIFIED，记入 Saved Search 样本", "结果": "放弃 — 提案爆炸 + 时薪未核验（栈仍作入口参考）"}, "来源": "Upwork ~022111829338610990521（2026-10-18）", "单子类型": "AI Integration / LLM tool-calling + 全栈", "操作思路": "栈高度贴合主定位；提案 50+ 且时薪未标 → 不 QUALIFIED，记入 Saved Search 样本", "结果": "放弃 — 提案爆炸 + 时薪未核验（栈仍作入口参考）", "content": `# 跳过案例 · Senior AI / Integration（FMora CAFM）

- **日期：** 2026-10-18 发布 / 2026-10-19 复核
- **来源：** Upwork apply \`~022111829338610990521\`
- **预算：** Hourly，页上**未标** $/hr
- **提案：** 50+
- **地理：** China OK；客户 UK Essex，约 $14K spent
- **栈：** React/Next + LLM tool-calling + 集成 — **主定位高度贴合**

## 为何跳过

栈贴合但提案已 50+，且时薪无法页核验 → 不进 QUALIFIED。同类「集成+Agent」仍是 Saved Search 重点；要盯**新帖、提案个位数**窗口。
`},
],
case_field_order: ["来源", "单子类型", "操作思路", "结果"],
docs: [
{"id": "doc-cap", "title": "能力边界", "theme": "能力与判断", "date": "2026-10-17 18:50", "summary": "接单前判断工具：各端输入输出、资源上限与报价前必问清单。", "tags": ["能力边界", "报价", "开发"], "source": "", "path": "dev-topics/01_capability_boundaries.md", "related_docs": [], "content": `# 软件开发专题：各端能力边界

> 适用对象：鹏飞（全栈 ~10 年，Vue / React / NestJS / Python / Docker；接海外中小企业的网站、全栈、AI Agent 单）。
> 用法：不是知识清单，而是**接单前的判断工具**。每接一个新需求，先用文末的「能力边界卡」过一遍，再报价。

---

## 0. 主线：所有端都是同一件事

> **每个平台 = 系统给你的输入/输出通道 + 在有限资源上做存储和展示。**

拆开就是四个问题，后面每一端都按这四个问题看：

| 问题 | 要判断的东西 |
|---|---|
| 输入从哪来 | 键鼠/触屏/麦克风/摄像头/串口/USB/网络请求/文件/传感器 |
| 输出到哪去 | 屏幕/扬声器/打印机/设备控制/文件/网络响应/通知 |
| 数据存哪、谁是权威 | 本地文件、浏览器存储、手机沙盒、服务器数据库——**权威数据只能有一份** |
| 资源上限 | CPU/GPU/内存/电量/带宽/存储配额/并发连接/平台审核与权限 |

判断一个需求"能不能做、要多少钱"，本质是：**它要的输入输出通道，这一端系统给不给？资源够不够？不给的话谁来补（后端/原生壳/第三方 SDK）？**

---

## 1. 桌面端（Windows / macOS / Linux）

### 1.1 边界在哪
- **硬边界**：OS API、CPU/GPU、内存、外设。桌面是权限最大的端，几乎没有"做不到"，只有"成本多高"。
- **能力来源**：系统 API + 第三方/底层库（C/C++ 库、驱动 SDK、FFmpeg、OpenCV、ONNX Runtime 等）。用 Electron / Tauri / Qt / .NET / Python 只是换一层壳，真正的能力都来自底层库。
- **输入输出的本质**：
  - 输入 = 物理信号 → 数字（麦克风采样、摄像头帧、扫码枪、传感器、串口数据）。
  - 输出 = 数字 → 物理（屏幕、声音、打印、控制 PLC/电机/继电器）。
- **纯软件部分**其实就三块：**交互 + 图表/可视化 + 算法**。这三块你已经会，难点不在这里。
- **外设部分**：必须依赖厂商的集成文档/SDK/协议说明（串口协议、USB HID、厂商 DLL）。**没有文档 = 不可估价**。

### 1.2 长期运行崩溃：几乎都是资源没释放
桌面程序（尤其 7×24 运行的工控、收银、监控类）跑几天崩，最常见原因是**泄漏**，不是逻辑错误。要释放的不只是内存：

- 内存（缓存无上限、事件监听未解绑、闭包持有大对象）
- 句柄：文件句柄、GDI/User 句柄（Windows 上有每进程上限）、socket
- 线程/定时器（创建了不回收、线程池耗尽）
- GPU 上下文、纹理、显存
- 文件锁（异常退出后锁没释放，下次启动打不开）
- 设备会话（串口/摄像头/USB 打开后没关，下次"设备被占用"）

**排查工具**：
- Windows：WER（Windows Error Reporting）+ 本地 dump（LocalDumps 注册表项），任务管理器/Process Explorer 看句柄数、GDI 对象数趋势。
- macOS：Crash Reporter 日志、Instruments（Leaks / Allocations）。
- Linux：core dump（\`ulimit -c\`、\`coredumpctl\`）、\`valgrind\`、\`/proc/<pid>/fd\` 看句柄增长。
- Electron：主进程/渲染进程分别看内存，\`crashReporter\` 模块收集 minidump。

**原则**：谁打开谁关闭；所有资源有明确生命周期；长跑程序加"资源计数监控 + 定期自检 + 看门狗重启"。

### 1.3 接单时常见坑 / 报价时要问的问题
**常见坑**
- 客户说"就是个小工具"，结果要接扫码枪 + 打印小票 + 读称重秤，每个外设都是一份未知文档。
- 只在开发机测过，客户现场是老 Windows、无管理员权限、杀毒软件拦截。
- 安装包签名：Windows 无代码签名会触发 SmartScreen 警告；macOS 需公证（notarization），需要 Apple Developer 账号——谁出钱谁注册要先说清。
- 自动更新、离线运行、多台机器数据同步——每一项都是独立工作量。

**报价前问**
1. 目标系统和版本？用户有没有管理员权限？
2. 接哪些外设？型号？有没有 SDK/协议文档？能否寄样机或远程到现场机器？
3. 是否 7×24 运行？崩溃后要求自动恢复吗？
4. 数据存本地还是要同步到服务器？离线多久要可用？
5. 安装、签名、自动更新由谁负责？证书谁买？

---

## 2. Web 端（浏览器）

### 2.1 边界在哪
- **硬边界：浏览器沙盒。** 你拿到的一切能力都是浏览器"借给你"的，并且要用户授权、要 HTTPS、要用户手势触发。
- **现在能做的远超以前**（具体支持度以 caniuse / MDN 为准，接单前查目标浏览器）：
  - 展示：DOM/CSS、Canvas 2D、WebGL、WebGPU（3D、可视化、浏览器内推理）
  - 计算：WebAssembly（把 C/C++/Rust 库搬进浏览器）、Web Worker
  - 媒体：WebCodecs（帧级编解码）、ffmpeg.wasm（浏览器内转码，慢且吃内存，适合小文件）、MediaRecorder、WebRTC
  - 文件：File System Access API（主要 Chromium 系支持）、OPFS（Origin Private File System）
  - 外设：WebUSB / WebSerial / WebHID / WebBluetooth（主要 Chromium 系，Safari/Firefox 基本不支持）
  - 离线/安装：PWA、Service Worker、IndexedDB
- **安全机制**：同源策略、CORS（跨域由**服务端**决定放行）、CSP（限制脚本来源，防 XSS）、Cookie 的 SameSite/HttpOnly/Secure。

### 2.2 判断规则
- **重计算、长任务、需要密钥、需要可信结果 → 放后端。** 浏览器里的一切都可被用户查看和篡改，API Key 绝不能放前端。
- **权限敏感（支付、改数据、发邮件）→ 后端校验。** 前端校验只是体验，不是安全。
- **浏览器存储不是权威数据。** localStorage/IndexedDB 可能被清理（尤其 Safari 对长期未访问站点的存储清理策略），只当缓存。
- **跨浏览器差异**：Safari（含 iOS 上所有浏览器内核）往往是短板，外设类 API 基本只能承诺 Chrome/Edge。

### 2.3 接单时常见坑 / 报价时要问的问题
**常见坑**
- "网页上直接连打印机/读卡器"——WebUSB/WebSerial 只在 Chromium，iOS 完全不行，可能要退回到本地桥接程序。
- 客户想要"浏览器里处理 2GB 视频"——ffmpeg.wasm 能跑但体验差，应该上传后端转码。
- 第三方嵌入（iframe、第三方 Cookie）被浏览器策略限制，登录态丢失。
- CORS 报错客户以为是前端 bug，其实要改对方服务器配置——而对方服务器不归客户管。
- SEO 要求被忽略：纯 SPA 做营销站，后期要改 SSR/SSG。

**报价前问**
1. 目标浏览器和设备？必须支持 iOS Safari 吗？
2. 需要哪些硬件或本地文件能力？能接受"只支持 Chrome/Edge"吗？
3. 需要 SEO 吗？内容由谁维护（要不要 CMS）？
4. 调用的第三方 API 是否允许跨域？有没有现成后端？
5. 是否有合规要求（GDPR Cookie 提示、无障碍 WCAG）？

---

## 3. 后端

### 3.1 边界在哪
后端的使命是：**稳定的数据服务 + 唯一的权威数据 + 可信的权限判断。** 资源上限是 CPU/内存/数据库连接数/带宽/第三方 API 配额/钱。

核心能力清单（按"出问题会多痛"排序）：
- **认证与授权**：Session 或 Token（JWT 要考虑吊销）、OAuth 2.0 / OIDC 接第三方登录、RBAC（必要时 ABAC）。
- **数据隔离**：多租户必须每条查询带 tenant 条件，最好在数据库层兜底（如 Postgres RLS）。一次串数据 = 客户关系结束。
- **幂等**：支付回调、Webhook、重试请求必然重复到达，用幂等键（idempotency key）或唯一约束去重。
- **重试与超时**：所有外部调用设超时；重试用指数退避 + 抖动；不幂等的操作不能盲目重试。
- **队列**：慢任务、第三方调用、发邮件、AI 调用都进队列（BullMQ / Celery / RQ / SQS），失败进死信队列。
- **高并发**：缓存（Redis）、连接池、限流、读写分离——SMB 项目多数到不了这一步，别过度设计。
- **可观测性**：结构化日志 + 指标 + 链路追踪（OpenTelemetry），错误上报（Sentry）。没有它，线上问题只能靠猜。

### 3.2 判断规则
- 先问"权威数据在哪"，再设计其他。
- 能用托管服务（Supabase、Neon、云数据库、托管队列）就别自己运维，SMB 客户付不起运维。
- 任何"同步调用第三方并等结果"的设计，都要问：对方挂了/慢了怎么办？

### 3.3 接单时常见坑 / 报价时要问的问题
**常见坑**
- 对接的第三方 API 文档过时、限流很严、沙箱环境和生产行为不一致。
- 客户的"简单后台"其实要多角色权限 + 审计日志 + 数据导出。
- 迁移老系统数据：脏数据清洗的工作量常常超过开发本身。
- 上线后没人运维：证书过期、磁盘满、数据库没备份。

**报价前问**
1. 预期用户量和峰值？有没有多租户？
2. 要对接哪些第三方（支付、CRM、ERP、邮件）？有无沙箱和文档？
3. 有没有老数据要迁移？量多大、格式？
4. 部署在哪？谁付云费用？上线后谁维护、要不要包月运维？
5. 备份、审计日志、数据保留期有要求吗？

---

## 4. 移动端（Android / iOS）

### 4.1 边界在哪
和桌面类似（系统 API + 外设 + 本地存储），但多了几道**系统强加的约束**：
- **电量**：系统主动限制耗电行为（Android Doze/App Standby，iOS 后台执行限制）。
- **后台限制**：后台任务随时被杀；长时间任务要用前台服务（Android 新版本要求声明前台服务类型）或系统调度（WorkManager / BGTaskScheduler）。"后台一直定位/一直录音"基本是审核与系统的雷区。
- **生命周期**：应用随时被暂停、回收、恢复，状态必须可保存可恢复。
- **运行时权限**：相机、定位、通知、蓝牙等需用户逐项授权，用户可随时撤销。
- **碎片化**（Android 尤甚）：OEM 定制系统会额外杀后台、改通知行为，屏幕尺寸和系统版本跨度大。
- **商店审核**：Google Play / App Store 有政策、隐私标签、目标 API 版本要求，审核周期和被拒风险要算进工期。

### 4.2 判断规则
- 先问"一定要原生 App 吗"——很多 SMB 需求用响应式网站或 PWA 就够（注意 iOS 上 PWA 能力受限）。
- 跨平台（React Native / Flutter / Capacitor）适合你的技术栈；涉及深度外设、后台常驻时，要预留原生模块开发成本。
- 推送、深链接、应用内购买，各是一块独立工作量。

### 4.3 接单时常见坑 / 报价时要问的问题
**常见坑**
- 客户没有开发者账号，或账号要用公司主体注册（耗时）。
- 审核被拒（隐私政策缺失、账号删除功能缺失、内购规则）。
- "后台持续上传位置/实时同步"在部分国产或定制 Android 上被系统杀掉，客户以为是 bug。
- 测试设备不足：只在一台手机上测过。

**报价前问**
1. 必须上架吗？iOS 和 Android 都要？开发者账号由谁持有？
2. 需要哪些权限和后台能力？能否接受系统限制？
3. 目标设备范围？是否有特定行业设备（PDA、扫码手持机）？
4. 推送、登录、支付、内购需要哪些？
5. 后续发版和审核由谁负责？

---

## 5. 结论：还剩什么值得做

- 过去十五年，各端的**能力空白基本被填满了**：浏览器能做 3D 和编解码，手机有完整传感器，后端有成熟云服务。"能不能做"已经很少是问题。
- AI 是新的增量，但它本身也会被快速迭代——今天的"套个 API 做个聊天框"，明天就是平台自带功能。**追某个 AI 工具本身不构成长期价值。**
- 剩下真正值钱、且不会被快速替代的是：
  1. **让系统稳定、快速、安全、可维护**——资源管理、权限、幂等、可观测、可恢复。
  2. **AI 集成层**——把模型能力安全、可控、可审计地接进客户已有的业务系统和数据。
- 这两件事恰好都依赖"懂各端边界"：知道哪个能力在哪一端、哪里会失败、失败了谁兜底。

> 对接单的意义：报价时你卖的不是"会 React"，而是"我提前知道这个需求会在哪里出问题"。

---

## 6. 能力边界卡（每个新单都填一张）

复制下面模板，接单沟通阶段填完。填不出来的格子 = 要问客户的问题 = 报价里的风险项。

\`\`\`markdown
## 能力边界卡：<项目名 / 客户>

日期：
来源：Fiverr / Freelancer / 直客

### 1. 形态
- [ ] 桌面  [ ] Web  [ ] 移动  [ ] 后端  [ ] AI Agent 组件
- 为什么是这个形态（能否降级为更便宜的形态，如 App → PWA）：

### 2. 输入输出通道
- 输入（用户操作 / 文件 / 外设 / 第三方 API / Webhook / 语音图像）：
- 输出（页面 / 文件 / 通知 / 邮件 / 设备控制 / 写入第三方系统）：
- 哪些通道这一端系统不直接给？由谁补（后端 / 原生模块 / 本地桥接）：

### 3. 权威数据在哪
- 唯一权威数据源（我们的 DB / 客户 CRM / 第三方 SaaS）：
- 其他地方的数据都是缓存吗？同步方向和冲突规则：

### 4. 资源上限
- 设备 / 浏览器 / 系统版本范围：
- 数据量、文件大小、并发、峰值：
- 第三方 API 配额与费用、AI token 预算：
- 托管预算（谁付云费用 / 每月上限）：

### 5. 外设 / 第三方文档
- 清单（型号 / 服务名 / 版本）：
- 文档是否齐全？有无沙箱？能否拿到样机或测试账号：
- 无文档项 → 单独报价或按小时计：

### 6. 权限与安全
- 用户角色与权限：
- 认证方式（Session / OAuth / OIDC / SSO）：
- 密钥存放位置（绝不在前端）：
- 个人数据 / 合规（GDPR 等）、数据隔离要求：

### 7. 失败与恢复
- 第三方挂了 / 慢了怎么办：
- 重复请求 / 重试是否幂等：
- 出错时用户看到什么？谁收到告警：
- 备份与回滚方案：

### 8. 长期运行风险
- 是否 7×24？需要哪些资源释放与监控（内存/句柄/连接/设备会话）：
- 证书、依赖、平台政策（商店审核、浏览器策略、API 版本）变化风险：
- 上线后的维护归属与报价（包月 / 按次）：

### 结论
- 可行性：可做 / 有条件可做 / 不接
- 主要风险 Top 3：
- 报价结构：固定部分 + 风险部分（按小时）+ 维护
\`\`\`

---

## 7. 速查：需求 → 该放哪一端

| 需求 | 默认放哪 | 理由 |
|---|---|---|
| 调用 AI 模型 / 第三方付费 API | 后端 | 密钥安全、限流、计费 |
| 大文件转码、PDF 生成、批量处理 | 后端队列 | 浏览器内存和时长不可控 |
| 小图片压缩、预览、简单剪裁 | 前端 | 省带宽，体验好 |
| 权限判断 | 后端（前端只做显示） | 前端可被篡改 |
| 读写本地硬件（打印机、串口） | 桌面 / 本地桥接；仅限 Chromium 时可试 Web API | 浏览器支持不一致 |
| 离线可用 | PWA / 桌面 / 移动 | 视离线时长和数据量 |
| 长时间后台任务 | 后端 worker | 移动端和浏览器后台都会被限制 |
| 多租户数据 | 后端 + 数据库层隔离 | 一次串数据就是事故 |
`},
{"id": "doc-growth", "title": "Web 全栈 / Agent 成长方向", "theme": "成长路径", "date": "2026-10-17 18:50", "summary": "Web 全栈与 Agent 方向的能力进阶与接单映射。", "tags": ["全栈", "Agent", "成长"], "source": "", "path": "dev-topics/02_web_fullstack_agent_growth.md", "related_docs": [], "content": `# 网站 + 全栈 + Agent 能力提升路线

> 对象：鹏飞（全栈 ~10 年；Vue / React / NestJS / Python / Docker；海外 SMB 自由职业）。
> 每节结构：**为什么重要 / 要达到的标准（可自测）/ 练手项目 / 对应能接的单**。

---

## 核心判断

- **不要再学更多框架。** 方向是：把传统全栈能力延伸到**生产级 Agent 系统**。
- 2026 年，"套一层 API 的聊天框"几乎没有溢价——客户自己用现成工具就能做。值钱的是 Agent **可靠、可控、可观测、成本可控**。
- 全栈背景是优势而不是包袱：Agent 落地的难点恰好是你熟的东西——**状态、权限、API、数据流、UX**。模型只是其中一个会出错的依赖。
- 卖点的表述方式：不是"我会 LangChain"，而是"我做的 Agent 能审批、能追踪、能回放、预算可控、出错能恢复"。

---

## 1. 全栈底座

### 为什么重要
Agent 的输出要进入真实系统（CRM、数据库、邮件）。类型不安全、状态混乱、权限过大，一个模型幻觉就能变成一次数据事故。底座决定 Agent 能不能上生产。

### 要达到的标准（可自测）
- **TypeScript 端到端**：前端、API、工具定义、数据库层共享类型；改一个字段，编译器能指出所有受影响处。
- **结构化输出**：用 Zod / JSON Schema 约束模型输出；校验失败有明确处理（重试一次带错误信息 → 仍失败则降级或转人工），而不是 \`JSON.parse\` 碰运气。
- **Next.js App Router 流式 UI**：
  - 能用 Vercel AI SDK 实现流式文本 + 工具调用；
  - **工具结果渐进渲染**（工具执行中显示状态卡片，完成后渲染结构化结果，而不是一坨文本）；
  - **Human-in-the-loop**：危险工具调用暂停，在 UI 显示"批准/拒绝/修改参数"，批准后继续同一次运行；
  - **乐观更新**：用户操作先反映在 UI，失败回滚并提示。
- **Postgres + pgvector**：业务数据和向量在同一个库；会建合适的索引（HNSW 等），会用 metadata 过滤 + 向量检索组合查询。
- **会话/用户状态**：分清用户会话、对话线程、Agent 运行（run）三种实体，各有表和生命周期。
- **Agent 身份与权限范围**：Agent 以"代表某用户"或"服务账号"身份行动，每次调用携带 scope；Agent 永远不比发起它的用户权限更大。
- **缓存与队列**：长任务进队列（BullMQ / Celery 等），前端通过流或轮询看进度；重复请求命中缓存。
- **OAuth / OIDC + 最小权限**：能实现第三方授权（如 Google / HubSpot），token 加密存储、自动刷新，只申请需要的 scope。

### 练手项目
**"带审批的 AI 助手"骨架**：Next.js + Postgres(pgvector) + Vercel AI SDK。用户登录（OIDC）→ 对话 → Agent 调用 2 个工具（查询订单、创建退款草稿）→ 创建退款需在 UI 中批准 → 写库。所有表有 user_id，所有工具校验权限。

### 对应能接的单
- "给我的 SaaS / 网站加 AI 助手"（嵌入现有产品）
- Next.js 网站 + AI 功能（内容生成、智能搜索）
- 已有 AI 原型（Bolt/Lovable/v0 生成的）改造成可上线版本

---

## 2. Agent 核心工程

### 2.1 工具设计（Tool Design）

**为什么重要**：Agent 的能力和风险都来自工具。模型选错工具、传错参数，多数是工具设计的问题。

**标准**
- 每个工具：清晰的名称和描述（写给模型看的文档）、严格的输入 schema、明确的输出结构。
- 有**超时、重试策略、幂等键**；写操作必须幂等（重复调用不产生两笔退款）。
- **结构化错误**：返回 \`{error_code, message, retryable, hint}\`，让模型能据此自我修正，而不是抛堆栈。
- **权限 scope**：读/写分离；工具只拿到完成任务所需的最小权限。
- 工具数量克制：同一 Agent 工具过多会降低选择准确率，按任务分组。

### 2.2 编排（Orchestration）

**为什么重要**：过度复杂的编排是 Agent 项目失败的常见原因——难调试、难估价。

**标准**
- 先用**单 Agent + ReAct 循环**（思考 → 调工具 → 观察）解决问题，并设循环上限。
- 当流程有明确分支、审批节点、需要断点恢复时，再上 **LangGraph 风格的状态图**（节点、边、共享状态、checkpoint）。
- **避免过早多 Agent**：只有当子任务确实需要不同工具集/上下文隔离，且单 Agent 已被证明不够时才拆。能说清"为什么要拆"。
- 能把一个流程画成状态图，并指出哪些节点是确定性代码、哪些需要模型。**能用代码做的就别交给模型。**

### 2.3 记忆与状态（Memory / State）

**为什么重要**：把所有东西塞进上下文 = 贵、慢、不可控。

**四类东西要分开存、分开管：**

| 类型 | 是什么 | 存哪 | 生命周期 |
|---|---|---|---|
| 执行状态 | 当前 run 走到哪一步、工具结果、待审批项 | checkpoint 表 | 一次运行 |
| 会话上下文 | 当前对话的消息历史（需截断/摘要） | messages 表 | 一个线程 |
| 长期记忆 | 用户偏好、事实（需可查看、可删除） | memory 表 + 向量 | 跨会话 |
| RAG 知识 | 客户文档、产品资料 | 向量 + 全文索引 | 随文档更新 |

**标准**：能说清每条进入 prompt 的信息来自哪一类；用户能删除自己的长期记忆。

### 2.4 RAG 工程

**为什么重要**：SMB 最常见的需求就是"基于我的资料回答问题"，而多数 RAG demo 在真实文档上效果很差。

**标准**
- **分块（chunking）**：按文档结构（标题、段落、表格）切，而不是固定字数；保留来源和章节元数据。
- **混合检索**：向量 + 关键词（BM25 / Postgres 全文检索），产品型号、编号类查询靠关键词。
- **重排（rerank）**：召回多一些，再用 reranker 精选。
- **时效（staleness）**：文档更新后增量重建索引；回答带来源和更新时间；过期内容可下线。
- **检索评估**：有一份"问题 → 应命中文档"的标注集，能算 recall@k / 命中率；改分块或模型后先跑评估再上线。
- 检索不到时诚实回答"不知道"并转人工。

### 2.5 MCP（Model Context Protocol）

**为什么重要**：MCP 让一个系统写一次就能被多种 AI 客户端（IDE、桌面助手、自建 Agent）使用。把客户已有系统"暴露给 AI"是一个清晰可卖的服务。

**标准**
- 能用官方 SDK（TypeScript / Python）写一个 MCP server，提供 tools、resources，必要时 prompts。
- 支持本地（stdio）和远程（HTTP 传输）两种部署；远程版本有认证（OAuth）和按用户的权限。
- 工具设计遵循 2.1 的要求；写操作有确认机制；有日志。
- 能把一个现有 REST API / 数据库安全地包装成 MCP server，而不是直接暴露整库。

### 练手项目（本节）
**"产品文档 RAG + 订单查询 Agent"**：混合检索 + rerank + 引用来源；订单工具带结构化错误；对话状态、长期记忆分表存；再把订单系统包装成 MCP server，在 Claude Desktop / Cursor 等客户端中调用。

### 对应能接的单
- 知识库客服机器人（基于客户网站、PDF、帮助中心）
- "让我的内部系统能被 AI 使用"（MCP server 开发）
- 已有 RAG 效果差、要求优化

---

## 3. 生产化

### 3.1 评估（Evals）

**为什么重要**：没有评估，每次改 prompt 或换模型都是赌博；也无法向客户证明效果。

**标准**
- **离线评估集**：至少几十条真实场景用例（输入 + 期望结果/判定规则），覆盖正常、边界、恶意输入。
- 指标：**任务成功率、工具调用准确率（选对工具 + 参数正确）、幻觉/无依据回答率、单任务成本、延迟**。
- 判定方式：能用规则判的用规则；主观项用 LLM-as-judge，并人工抽检校准。
- **线上监控**：采样真实对话打分、收集用户反馈（👍/👎）、失败用例回流到离线集。
- 改动上线前跑回归，指标下降就不发布。

### 3.2 可观测性（Observability）

**为什么重要**：客户说"它昨天乱回答了"，你必须能找到那一次运行并复现。

**标准**
- 每次运行有完整 trace：每一步（step）、所用模型、prompt、工具调用与结果、token 数、耗时、命中的策略（如被拦截、被要求审批）。
- 工具：LangSmith / Langfuse（可自托管，适合注重隐私的客户）/ OpenTelemetry（接入已有监控体系）。
- trace 可按用户、会话、错误类型检索；敏感数据在记录前脱敏。
- 有面向客户的简版看板：使用量、成功率、成本。

### 3.3 成本与延迟

**为什么重要**：SMB 对每月账单非常敏感，一个死循环可能烧掉一个月预算。

**标准**
- **模型路由**：简单任务（分类、提取）用小模型，复杂推理用大模型；能说出每条路由的理由和评估结果。
- **Token 预算**：每次运行、每用户、每租户设上限；超限降级或停止。
- **按用户限流**：防滥用和刷接口。
- **缓存**：embedding 缓存（同内容不重复算）、相同查询结果缓存、利用模型提供方的 prompt caching。
- **循环上限**：最大步数、最大工具调用次数、最长运行时间。
- 延迟：流式输出、并行工具调用、首字延迟可测量。

### 3.4 安全护栏（Guardrails）

**为什么重要**：Agent 能"做事"，就能"做错事"。Prompt injection 无法被完全消除，只能靠架构限制损害。

**标准**
- **最小权限工具**：Agent 能调用的工具就是它的权限边界；危险能力不给就不会被滥用。
- **危险操作 HITL**：付款、删除、对外发邮件、批量修改——一律人工批准。
- **防循环**：步数上限 + 重复调用检测。
- **防 prompt injection**：把检索内容、网页、邮件、工具返回都视为不可信数据；不可信内容不能直接触发写操作；敏感操作前重新确认用户意图。
- **防越权**：工具在服务端按当前用户身份校验，而不是信任模型传来的 user_id。
- 参考 OWASP Top 10 for LLM Applications 及 OWASP 关于 agentic 应用威胁的指南，做一份项目威胁清单。

### 3.5 失败处理与恢复

**为什么重要**：模型超时、工具 500、限流 429、输出格式错误都是常态，不是例外。

**标准**
- **Checkpoint**：每步执行后持久化状态；进程重启、部署更新后可从断点继续。
- **可恢复运行**：等待人工审批的运行可以挂起数小时/数天再恢复，不占进程。
- **降级（fallback）**：主模型失败 → 备用模型/提供方；检索失败 → 告知用户并转人工；工具不可用 → 返回结构化错误让 Agent 换路径。
- **死信队列**：多次重试仍失败的任务进入死信，告警并可手动重放。
- **幂等重试**：重试只针对 \`retryable\` 错误，写操作带幂等键，保证"至少一次执行"不会变成"重复执行"。
- **补偿**：多步写操作中途失败时，有撤销或标记待人工处理的机制。
- **用户可见**：失败时用户看到明确状态（"已转人工，预计 X 内回复"），而不是无限转圈。

### 练手项目（本节）
给第 2 节项目加：Langfuse trace、30 条以上离线评估集 + 一键跑分脚本、token 预算与循环上限、退款工具 HITL、一个故意注入攻击的测试文档，以及"杀掉 worker 后运行能恢复"的演示。

### 对应能接的单
- "我的 AI 功能太贵/太慢/不稳定，帮我优化"
- AI 功能上线前的安全与质量审查
- 给已有 Agent 加监控、评估和成本看板

---

## 4. 补充能力

### 4.1 AI 生成代码的审查与 QA
- **为什么重要**：越来越多客户拿着 AI 工具生成的代码来找人"修好上线"。这是持续的需求来源。
- **标准**：能快速审出常见问题——密钥在前端、无权限校验、SQL 注入、无错误处理、N+1 查询、依赖过期或不存在的包；为关键路径补测试（单元 + Playwright E2E）；自己用 AI 写代码时同样走 review + 测试流程。
- **练手**：拿一个 AI 生成的开源全栈项目，写一份审查报告 + 修复 PR。
- **能接的单**：AI 原型代码审计、"Lovable/Bolt 项目上线支持"。

### 4.2 部署：Serverless/Edge vs 长运行 Worker
- **为什么重要**：Agent 运行时间长、要等待审批、要重试，和 serverless 函数的执行时长限制天然冲突。
- **标准**：
  - Vercel / edge 适合：页面、流式聊天接口、短工具调用。
  - 长运行 worker（Docker 部署到 Fly.io / Railway / Render / 云主机，或托管的持久化工作流服务）适合：多步 Agent、批处理、索引构建、定时任务。
  - 能设计"前端在 Vercel + Agent worker 独立部署 + 队列连接 + 状态在 Postgres"的架构，并解释取舍。
  - 能估算并向客户说明每月托管费用。
- **能接的单**：AI 应用部署与迁移、从原型到生产的架构改造。

### 4.3 SMB 客户的数据隐私
- **为什么重要**：海外客户（尤其欧盟）关心数据去向；处理好是加分项，处理不好是法律风险。
- **标准**：
  - 能说明数据流向：哪些数据发给了哪家模型提供方、是否被用于训练（查阅并引用提供方当前政策）、保留多久。
  - 支持 PII 脱敏（发送模型前、写入日志前）。
  - 多租户数据隔离（Postgres RLS 或严格的 tenant 过滤），向量检索同样隔离。
  - 用户数据可导出、可删除；trace 和日志有保留期。
  - 必要时提供自托管选项（自托管 Langfuse、本地/私有部署模型）。
- **能接的单**：注重隐私的行业客户（诊所、律所、财务），GDPR 相关改造。

---

## 5. 90 天计划（映射到可售卖的作品集）

> 每个 demo 都要有：线上可访问地址 + 2 分钟录屏 + README（架构图、评估结果、成本说明）。这些直接作为 Fiverr Gig / Freelancer 投标的作品。

| 周 | 里程碑 | 产出 |
|---|---|---|
| 1–2 | **底座**：Next.js App Router + AI SDK + Postgres/pgvector + OIDC 登录；流式 UI、工具结果卡片、HITL 批准组件 | 可复用的 starter 仓库（之后每个 demo 都基于它） |
| 3–4 | **Demo 1：带审批的客服分诊 Agent**：读取工单/邮件 → 分类、摘要、起草回复 → 人工批准后写入 CRM（HubSpot 免费版等）；工具幂等、结构化错误 | 线上 demo + 录屏 |
| 5–6 | **Demo 2：RAG 知识库机器人 + 评估看板**：混合检索 + rerank + 引用；离线评估集与跑分；看板显示成功率、命中率、成本、延迟 | 线上 demo + 评估报告 |
| 7–8 | **Demo 3：业务系统 MCP server**：把一个简单的库存/预约/订单系统包装为远程 MCP server（OAuth + 权限 + 日志），演示在主流 MCP 客户端中调用 | 开源仓库 + 录屏 |
| 9–10 | **Demo 4：n8n + 自定义代码自动化，全链路 trace**：n8n 负责触发与集成，复杂逻辑由自建 Agent 服务处理（HTTP 节点调用），全链路接 Langfuse/OTel；失败进死信并告警 | 录屏 + 架构图 |
| 11 | **生产化加固**：给 Demo 1–2 加 token 预算、限流、循环上限、prompt injection 测试、worker 崩溃恢复演示 | "可靠性"专题录屏 |
| 12 | **包装与上架**：写 3–4 个 Gig（见下）、作品集页面、案例文章；整理报价模板和「能力边界卡」 | 上架的 Gig + 作品集网站 |
| 13 | **复盘**：根据询单情况调整方向，补最被问到的能力 | 下一个 90 天计划 |

**可上架的 Gig 方向（示例）**
- 「为你的业务搭建带人工审批的 AI 客服 Agent，接入你的 CRM」
- 「基于你的文档构建 RAG 知识库机器人，附效果评估报告」
- 「把你的业务系统做成 MCP server，让 AI 助手直接调用」
- 「AI 自动化工作流（n8n + 自定义代码），可监控、可追踪」
- 「AI 生成代码 / 原型的审查、修复与生产部署」

**节奏建议**：每天固定时段推进，不影响在手项目；每个 demo 结束当周就更新作品集，不要等 90 天后一起包装。

---

## 6. 自测清单

逐条打勾。没打勾的就是下一步要补的地方。

### 全栈底座
- [ ] 前后端和工具定义共享 TypeScript 类型，模型输出全部经 Zod/JSON Schema 校验
- [ ] 能实现流式 UI + 工具结果渐进渲染 + HITL 批准后继续运行
- [ ] 会话、线程、run 三类实体分开建模
- [ ] Agent 以用户身份 + scope 行动，权限在服务端校验
- [ ] 能接入 OAuth/OIDC，token 加密存储并自动刷新
- [ ] 长任务进队列，前端可见进度

### Agent 核心工程
- [ ] 每个工具有 schema、超时、重试策略、幂等键、结构化错误
- [ ] 能说清当前项目为什么用（或不用）状态图、为什么不用多 Agent
- [ ] 执行状态 / 会话上下文 / 长期记忆 / RAG 分开存储
- [ ] RAG 有混合检索、rerank、来源引用、增量更新和检索评估集
- [ ] 写过并部署过一个带认证的远程 MCP server

### 生产化
- [ ] 有离线评估集，改动前后跑回归对比
- [ ] 线上采样监控：成功率、工具准确率、幻觉、成本、延迟
- [ ] 任意一次运行可通过 trace 定位到每一步和 token 消耗
- [ ] 有模型路由、token 预算、用户限流、embedding 缓存、循环上限
- [ ] 危险操作全部 HITL；不可信内容不能直接触发写操作
- [ ] 做过 prompt injection 测试并有对应防护
- [ ] worker 崩溃后运行可从 checkpoint 恢复；失败任务进死信可重放
- [ ] 有主模型失败时的降级路径

### 补充能力
- [ ] 能在 1–2 小时内给一份 AI 生成代码的审查报告
- [ ] 能解释某个项目为什么部分放 Vercel、部分放长运行 worker，并估算月费用
- [ ] 能向客户画出数据流向图，说明哪些数据去了哪家提供方
- [ ] 支持 PII 脱敏、租户隔离（含向量检索）、数据导出与删除

### 接单与作品集
- [ ] 至少 3 个线上可演示的 demo，每个附录屏和 README
- [ ] 每个 demo README 包含架构图、评估结果、成本说明
- [ ] 已上架对应 Gig，报价模板里包含维护和风险项
- [ ] 每个新单都先填「能力边界卡」（见 \`01_capability_boundaries.md\`）
`},
{"id": "doc-proj", "title": "项目推荐", "theme": "项目与作品", "date": "2026-10-17 18:50", "summary": "适合练手与挂作品集的项目推荐。", "tags": ["项目", "推荐", "作品集"], "source": "", "path": "dev-topics/03_project_recommendations.md", "related_docs": [], "content": `# 03 · 项目推荐：按 ROI 排序的 12 个可落地项目（鹏飞版）

> 适用对象：鹏飞（Python / Docker / FRP / 爬虫与内部接口逆向 / Playwright·Puppeteer·CDP / 油猴与浏览器扩展 / 支付网关对接 / 多账号 token 轮换 / 会话保活 / 限流故障转移 / Cursor·Codex·Claude Code / 全栈 Web + AI Agent）
> 客户画像：Fiverr / Freelancer / Upwork 上的海外中小企业（SMB）和独立创始人
> 编写日期：2026-10-14
> 说明：\`01_capability_boundaries.md\` 目前不存在，本文使用下面第 0 节的"能力边界框架"作为引用基准，并为每一节分配编号（如 \`S4\`、\`W2\`），后续项目中直接引用。若之后补写 01 文档，建议沿用同一编号体系。
> 本文**不含任何编造的统计数据**；价格档位均为"建议定价"，需按你所在平台的同类 gig 实际报价校准。

---

## 0. 能力边界框架（引用基准）

**核心模型**：任何平台 = 系统给定的输入/输出 + 在有限资源上的存储/展示。做项目之前先问三件事：输入从哪来（谁给、什么格式、是否被允许拿）、输出到哪去（谁消费、是否有官方通道）、资源上限在哪（内存、CPU、配额、电量、平台规则）。

### D · 桌面端
| 编号 | 边界 | 关键问题 |
|---|---|---|
| D1 | OS / CPU / GPU / 内存 / 外设 | 能用多少资源？是否需要 GPU（本地模型推理）？跨平台差异（Win/mac 权限、签名、公证） |
| D2 | 第三方与底层库 | 依赖 native 库（ffmpeg、whisper.cpp、OpenCV、驱动 SDK）时的打包与授权 |
| D3 | 信号 I/O | 声音→数字（麦克风、ASR）、数字→物理（打印机、串口、PLC、扫码枪） |
| D4 | 纯软件交互 / 图表 / 算法 | 本地 UI、数据可视化、离线算法，不依赖外部服务 |
| D5 | 外设集成文档 | 厂商 SDK/协议文档是否齐全，是否能拿到测试硬件 |
| D6 | 长时间运行故障 | 内存泄漏、文件句柄/Socket 泄漏、线程/协程堆积、日志撑爆磁盘 |

### W · Web 端
| 编号 | 边界 | 关键问题 |
|---|---|---|
| W1 | 浏览器沙箱 | 跨域（CORS）、存储配额、扩展 MV3 Service Worker 生命周期、无法直接访问文件系统/硬件 |
| W2 | Canvas / WebGL / WASM / ffmpeg.wasm | 能在前端做多重的计算？内存上限、主线程阻塞、Web Worker |
| W3 | 重活交给后端 | 爬取、长任务、LLM 调用、密钥保管一律放后端，前端只做展示与轻交互 |

### S · 后端
| 编号 | 边界 | 关键问题 |
|---|---|---|
| S1 | 稳定数据 | Schema、迁移、备份、单一事实来源 |
| S2 | 并发 | 竞态、锁、连接池、外部 API 限流 |
| S3 | 鉴权 / 会话 | 登录、RBAC、OAuth、token 刷新、会话保活 |
| S4 | 隔离 | 多租户数据隔离、密钥隔离、沙箱执行 |
| S5 | 幂等 | Webhook 重放、重复提交、重试不重复扣款/重复发邮件 |
| S6 | 队列 | 异步任务、重试、死信、定时任务 |
| S7 | 可观测性 | 日志、指标、告警、追踪、错误上报 |

### A · Android
| 编号 | 边界 | 关键问题 |
|---|---|---|
| A1 | 生命周期 | Activity/Process 随时被杀，状态恢复 |
| A2 | 后台限制 | Doze、后台执行限制、前台服务类型声明 |
| A3 | 权限 | 运行时权限、敏感权限审核（短信、无障碍、通话记录） |
| A4 | 电量 | 唤醒锁、轮询频率、厂商省电策略 |

---

## 1. 选题原则与 ROI 评估口径

**ROI 定性口径**（不是统计数据，是排序依据）：
1. **需求确定性**：是否落在已知 SMB 需求簇——获客与建站、自动化（表单→CRM/邮件/n8n）、降低客服负担、店铺运营工具（Shopify、库存/价格监控）、救援半成品 Lovable/Bolt/Cursor 应用。
2. **技能匹配度**：能否直接复用你已有能力，越少学新东西越好。
3. **交付周期**：1–2 周内借助 AI 编码出 MVP。
4. **复用性**：做一次能否变成模板反复卖，或演化为订阅产品。
5. **合规风险**：越依赖"灰色抓取"，风险越高、排序越靠后。

**合规红线（全文适用）**：
- 不绕过反爬/验证码/机器人检测（Cloudflare Turnstile、reCAPTCHA、hCaptcha 等）去访问明确禁止自动化的网站。
- 优先使用官方 API（Shopify Admin API、Google Places API、Stripe API、HubSpot API 等）。
- 爬取公开页面时：遵守 robots.txt 与站点 ToS、低频率、标识 UA、不抓个人敏感数据、不登录他人账号。
- 多账号 / token 轮换只用于**客户自己合法拥有**的账号或密钥（例如一个组织的多个 API key 做容灾），不用于规避平台对单账号的配额或封禁。
- 浏览器自动化只用于**客户自己的账号和自己的后台**（RPA），并提醒客户确认目标平台条款是否允许。
- 涉及邮件外联：遵守 CAN-SPAM / GDPR / 当地反垃圾邮件法规，提供退订。
- Fiverr / Upwork 等平台：不在站外收款、不在首次沟通前索要联系方式，遵守平台沟通规则，否则可能封号。

**标签说明**：
- **[接单模板]**：可做成标准化 gig 反复接单，给出建议 gig 标题与价格档位。
- **[产品化]**：可做成 SaaS / 插件 / 模板包售卖，给出目标用户与变现方式。

---

## 2. 项目清单（按 ROI 从高到低）

### #1 Lovable / Bolt / Cursor 半成品应用救援与上线 【接单模板】

**映射边界**：S1（数据模型修复）、S3（鉴权）、S4（多租户隔离 / Supabase RLS）、S5（支付幂等）、S7（可观测性）、W3（把前端里的密钥与重逻辑挪回后端）

**为什么排第一**：AI 生成的应用常卡在"能演示但不能上线"的最后 20%：鉴权漏洞、前端暴露密钥、RLS 未开、支付回调不可靠、部署失败。这正好是你全栈 + 支付 + Docker 的强项，而且完全不涉及抓取合规风险。

**实现大纲（标准化救援流程，做成你自己的工具包）**：
\`\`\`
rescue-kit/
├── audit/
│   ├── scan_secrets.py        # 扫描前端 bundle 与仓库中的 API key（gitleaks/trufflehog 封装）
│   ├── check_supabase_rls.py  # 连接 Supabase，列出未开启 RLS 的表、过宽的 policy
│   ├── check_env.py           # 对比 .env.example / 部署平台变量缺失
│   └── report_template.md     # 输出给客户的体检报告模板
├── fixes/
│   ├── auth/                  # Supabase Auth / Clerk / NextAuth 标准接入片段
│   ├── stripe_webhook/        # 带签名校验 + 幂等表的 webhook 处理器
│   └── edge_functions/        # 把前端直调第三方 API 的逻辑迁移到服务端
├── deploy/
│   ├── Dockerfile.next        # Next.js standalone 镜像
│   ├── vercel.json / fly.toml
│   └── github-actions-ci.yml  # lint + typecheck + build
└── observability/
    └── sentry_setup.md        # Sentry + 结构化日志接入
\`\`\`
**数据流**：客户给仓库访问权限 → \`audit/*\` 跑出体检报告（问题分级：阻断上线 / 安全 / 体验）→ 与客户确认修复范围 → 分支修复并提 PR → CI 通过 → 部署到客户账号下的 Vercel/Fly/Railway → 交付报告与回滚说明。

**技术栈**：Next.js / React + Vite、Supabase（Postgres、Auth、RLS、Edge Functions）、Stripe、Docker、GitHub Actions、Sentry；工具侧 Python + gitleaks。

**MVP（1–2 周）**：
- 第 1–3 天：写 \`scan_secrets\`、\`check_supabase_rls\`、\`check_env\` 三个脚本 + 报告模板。
- 第 4–6 天：准备 Stripe webhook 幂等处理、Supabase Auth 接入两个可复用修复片段。
- 第 7–10 天：自己用 Lovable/Bolt 生成 1–2 个有典型问题的 demo 应用，完整走一遍救援流程，录屏做 gig 作品集（before/after）。

**接单模板**：
- 建议 gig 标题：\`I will fix, secure and deploy your Lovable, Bolt or Cursor app\`
- 建议价格档位：
  - Basic（体检报告 + 修 1–2 个阻断问题）：$80–150
  - Standard（鉴权/RLS/环境变量修复 + 部署上线）：$250–450
  - Premium（含支付集成、CI、Sentry、7 天维护）：$600–1200

**主要风险**：
- 范围蔓延：半成品往往问题无底洞，必须先卖"体检报告"再报价修复。
- 客户账号权限：只在客户自己的 Supabase/Vercel 账号操作，用协作者邀请而非索要密码。
- 代码所有权与保密：交付时说明 IP 归属，不复用客户私有代码到作品集（只用自己的 demo）。

---

### #2 表单 → CRM / 邮件 / Slack 自动化（自托管 n8n）【接单模板 + 产品化】

**映射边界**：S5（Webhook 幂等，防重复建线索）、S6（队列与重试）、S3（OAuth 连接 CRM）、S7（失败告警）、S4（每个客户一个独立实例）

**实现大纲**：
\`\`\`
架构：
[Typeform / Tally / Webflow / WordPress 表单 / Calendly]
        │ webhook
        ▼
[n8n (Docker, 客户 VPS 或你托管)] ──► 去重节点（按 email + 表单ID 做幂等键，存 Postgres）
        │
        ├─► 线索富化（可选：Clearbit/Hunter/Apollo 官方 API）
        ├─► LLM 分类节点（意向打分、行业、紧急程度 → JSON）
        ├─► CRM 写入（HubSpot / Pipedrive / GoHighLevel / Airtable 官方 API）
        ├─► 邮件（Resend / Postmark / Gmail API 自动回复）
        └─► Slack / Telegram 通知销售
失败分支 → Error Workflow → Slack 告警 + 写入 failed_events 表，支持手动重放
\`\`\`
**关键模块**：
- \`docker-compose.yml\`：n8n + Postgres + Caddy（自动 HTTPS）；如客户内网无公网 IP，用 FRP 暴露 webhook 入口。
- \`workflows/\`：可导出的 JSON 模板（lead-capture、appointment-followup、invoice-reminder）。
- \`dedupe\` 子工作流：幂等键表 \`processed_events(key, created_at)\`。
- \`error-handler\` 工作流：统一告警与重放。
- 交付文档：如何改字段映射、如何查看执行日志。

**技术栈**：n8n、Docker Compose、Postgres、Caddy、FRP（可选）、OpenAI/Claude API、HubSpot/Pipedrive/Airtable API。

**MVP（1 周）**：
- 搭好 \`docker-compose\` 一键部署脚本 + 3 个通用工作流模板（表单→CRM+邮件+Slack、预约→提醒、付款→发票邮件）。
- 录一个 3 分钟演示视频作 gig 封面。

**接单模板**：
- 建议 gig 标题：\`I will automate your lead forms into CRM, email and Slack with n8n\`
- 建议价格档位：Basic 单流程 $100–200 / Standard 3 流程 + 自托管部署 $300–600 / Premium 含 LLM 分类、错误告警、月度维护 $800+（维护可另收 $50–150/月）

**产品化**：
- 目标用户：不想付 Zapier 高阶套餐的小团队、代理公司（agency）。
- 变现：卖 n8n 工作流模板包（Gumroad / Lemon Squeezy，一次性）；或"托管 n8n + 模板"月订阅。

**主要风险**：
- n8n 的许可证为 Sustainable Use License，**把 n8n 本身作为托管服务转售给第三方需核对许可条款**；为客户在其自有服务器部署通常问题较小，托管转售前务必读清 license。
- 第三方 CRM API 限流与 OAuth token 过期（S3）：加刷新与告警。
- 邮件合规：自动回复只发给主动提交表单的人。

---

### #3 支付网关集成与 Webhook 可靠性改造 【接单模板】

**映射边界**：S5（幂等，核心）、S1（订单/订阅状态一致性）、S6（异步对账）、S3（客户门户鉴权）、S7（支付异常告警）

**实现大纲**：
\`\`\`
payments-service/ (FastAPI 或 Next.js Route Handlers)
├── providers/
│   ├── stripe.py        # Checkout Session / Billing / Customer Portal
│   ├── paypal.py        # Orders v2 / Subscriptions
│   └── lemonsqueezy.py  # 或 Paddle（Merchant of Record，帮客户处理税务）
├── webhooks/
│   ├── router.py        # 签名校验 → 写 webhook_events(event_id UNIQUE) → 入队
│   └── handlers.py      # checkout.completed / invoice.paid / subscription.updated ...
├── reconcile/
│   └── nightly.py       # 定时拉取 Provider 端数据与本地对账，差异告警
├── entitlements.py      # 根据订阅状态计算用户权限（单一事实来源）
└── tests/
    └── replay_fixtures/ # 用 stripe CLI 录制的事件重放测试
\`\`\`
**数据流**：用户付款 → Provider 回调 webhook → 校验签名 → 以 \`event_id\` 唯一约束写库（重复即跳过）→ 入队 → handler 更新 \`subscriptions\` / \`entitlements\` → 前端读取权限。夜间对账任务兜底漏单。

**技术栈**：Python FastAPI 或 Next.js、Postgres、Redis/RQ 或 Celery、Stripe CLI、Docker。

**MVP（1 周）**：Stripe Checkout + 订阅 + Customer Portal + 幂等 webhook + 对账脚本的模板仓库，附 Next.js 与 FastAPI 两种接入示例。

**接单模板**：
- 建议 gig 标题：\`I will integrate Stripe or PayPal payments and subscriptions into your web app\`
- 建议价格档位：Basic 一次性付款 $100–200 / Standard 订阅 + Portal + webhook $300–600 / Premium 多币种、优惠码、对账、迁移旧支付 $700–1500

**主要风险**：
- 金额与税务责任：明确你只负责技术实现，税务/合规由客户或 MoR（Paddle、Lemon Squeezy）处理。
- 只用测试模式开发，生产密钥由客户在自己平台配置，你不保存生产密钥。
- 高风险行业（成人、博彩、加密等）Stripe 可能拒绝，接单前确认客户业务是否符合支付服务商政策。

---

### #4 AI 客服助手：知识库问答 + 工单分流 + 人工接管 【接单模板 + 产品化】

**映射边界**：S1（知识库数据）、S4（每个客户的向量数据隔离）、S6（文档摄取队列）、S7（对话日志与质量评估）、W1（网站嵌入式聊天窗口的沙箱与跨域）、W3（LLM 调用在后端）

**实现大纲**：
\`\`\`
support-agent/
├── ingest/
│   ├── crawl_own_site.py   # 只抓取客户自己的网站/帮助中心（客户授权）
│   ├── loaders.py          # PDF、Notion、Google Docs、Shopify 商品（Admin API）
│   └── chunk_embed.py      # 分块 → embedding → pgvector
├── agent/
│   ├── retrieve.py         # 混合检索（BM25 + 向量）
│   ├── tools.py            # 查订单状态（Shopify/WooCommerce API）、创建工单
│   ├── guardrails.py       # 不确定时转人工；禁止承诺退款等敏感动作
│   └── prompts/
├── channels/
│   ├── web_widget/         # <script> 嵌入的聊天窗（iframe 隔离样式）
│   ├── email_inbound.py    # Postmark inbound / Gmail API
│   └── helpdesk.py         # Zendesk / Freshdesk / Crisp / Intercom API
├── admin/                  # Next.js 后台：对话记录、未解决问题、知识库更新
└── eval/
    └── golden_qa.jsonl     # 客户提供的常见问答，回归测试准确率
\`\`\`
**数据流**：客户文档 → 摄取队列 → pgvector；访客提问 → 检索 → LLM 生成带引用的回答 → 置信度低或命中敏感意图 → 创建工单并通知人工；所有对话入库用于复盘和补充知识库。

**技术栈**：Python（FastAPI）、Postgres + pgvector、Redis 队列、OpenAI/Claude API、Next.js 后台、Docker。

**MVP（2 周）**：网站嵌入聊天窗 + 文档摄取 + 带引用回答 + 转人工（发邮件/Slack）+ 简单后台查看对话；golden QA 20–50 条做回归。

**接单模板**：
- 建议 gig 标题：\`I will build an AI support chatbot trained on your docs with human handoff\`
- 建议价格档位：Basic 网站聊天窗 + 知识库 $200–400 / Standard 接入 Helpdesk + 订单查询 $500–900 / Premium 多渠道 + 评估后台 + 月度优化 $1000+

**产品化**：
- 目标用户：Shopify 小店、SaaS 独立创始人、服务类小公司。
- 变现：按月订阅（按会话量或知识库大小分档），一次性搭建费 + 月费模式。

**主要风险**：
- 幻觉导致错误承诺：强制引用来源 + 敏感意图（退款、法律、医疗）直接转人工。
- 隐私：对话中可能有个人信息，需数据保留策略，EU 客户注意 GDPR（DPA、数据删除）。
- LLM 成本失控：每租户设置月度 token 上限（S4 + S7）。

---

### #5 Shopify 店铺运营工具：库存预警 + 价格变动监控 【产品化 + 接单模板】

**映射边界**：S2（API 限流，Shopify 有调用速率限制）、S6（定时任务队列）、S1（价格/库存历史）、S3（Shopify OAuth 安装流程）、S4（多店铺隔离）、S7（告警）

**实现大纲**：
\`\`\`
shop-monitor/
├── shopify_app/
│   ├── oauth.py            # Shopify App 安装 / OAuth / session token
│   ├── webhooks.py         # inventory_levels/update、products/update、app/uninstalled
│   └── admin_graphql.py    # 用 GraphQL Admin API 拉库存与价格（带限流退避）
├── competitor/
│   ├── sources.py          # 竞品数据源：优先官方/授权渠道（如 Google Shopping 相关 API、商家自己提供的 feed）
│   ├── public_fetch.py     # 仅对允许抓取的公开页面做低频抓取（robots.txt 检查、频率限制、无登录、无验证码绕过）
│   └── normalize.py        # SKU 匹配、币种归一
├── rules/
│   └── engine.py           # 低库存阈值、竞品降价 > X%、断货预测（基于近 N 天销量线性估计）
├── notify/                 # 邮件 / Slack / Telegram 每日摘要 + 即时告警
└── web/                    # 嵌入 Shopify Admin 的 Polaris UI
\`\`\`
**数据流**：店铺安装 App → OAuth 拿 token → Webhook 实时接收库存变化 + 每日全量对账 → 规则引擎判断 → 通知；竞品价格按天低频更新写入 \`price_history\`。

**技术栈**：Shopify CLI + Remix 模板（Node）或 Python 后端 + Polaris 前端、Postgres、Redis/BullMQ 或 Celery、Docker。

**MVP（2 周）**：先只做"自家店"部分——库存低阈值预警 + 每日销售/库存摘要邮件（全部走官方 API，零合规风险）；竞品监控只支持"用户手动输入竞品 URL + robots 允许 + 每天 1 次"。

**产品化**：
- 目标用户：SKU 数量中等、没有专职运营的 Shopify 小店。
- 变现：Shopify App Store 订阅（免费档 + 付费档），或站外 SaaS 月费。

**接单模板**：
- 建议 gig 标题：\`I will build a custom Shopify inventory and price alert app\`
- 建议价格档位：Basic 库存预警脚本 $150–300 / Standard 自定义私有 App $400–800 / Premium 含竞品监控、仪表盘 $900+

**主要风险**：
- **竞品抓取是最大合规风险**：许多电商站 ToS 禁止自动抓取，并部署反爬；遇到禁止或验证码直接放弃该数据源，不绕过。产品宣传以"自家店铺运营"为主，竞品监控为辅。
- Shopify App 审核：需符合 App Store 要求（GDPR 强制 webhooks、计费 API 等），上架前预留审核时间。
- API 速率限制：GraphQL 成本计算 + 指数退避（S2）。

---

### #6 本地商家获客套件：官方数据源线索 + 网站体检报告 + 合规外联 【接单模板 + 产品化】

**映射边界**：S6（批量任务队列）、S2（API 配额）、S1（线索去重库）、W3（Lighthouse 等重任务在后端）、S7

**实现大纲**：
\`\`\`
leadgen-kit/
├── sources/
│   ├── google_places.py    # Google Places API（官方，按条款缓存与展示）
│   ├── yelp_fusion.py      # Yelp Fusion API（官方，注意其展示与缓存条款）
│   └── csv_import.py       # 客户已有名单
├── audit/
│   ├── lighthouse_runner.py  # Playwright + Lighthouse 对目标商家公开官网做性能/SEO/移动端体检
│   ├── tech_detect.py        # 识别建站平台、是否有 SSL、是否有预约/表单
│   └── report_pdf.py         # 生成一页式体检 PDF（作为外联的价值钩子）
├── enrich/
│   └── hunter_or_apollo.py   # 官方 API 查找公开商务邮箱（需客户自己的账号）
├── outreach/
│   ├── draft_llm.py          # LLM 基于体检结果写个性化开发信草稿
│   └── export.py             # 导出到 Instantly / Lemlist / HubSpot（发送由客户的工具完成，含退订）
└── dashboard/                # 简单的 Streamlit 或 Next.js 看板
\`\`\`
**数据流**：行业 + 城市 → 官方 API 拉商家列表 → 去重入库 → 对有官网的商家跑体检 → 生成 PDF 与开发信草稿 → 导出到客户的外联工具。

**技术栈**：Python、Playwright、Lighthouse CLI、Postgres、Celery/RQ、WeasyPrint、OpenAI/Claude API、Streamlit。

**MVP（1–1.5 周）**：Google Places + Lighthouse 体检 + PDF 报告 + CSV 导出 + LLM 开发信草稿。

**接单模板**：
- 建议 gig 标题：\`I will build a targeted local business lead list with website audit reports\`
- 建议价格档位：Basic 100 条线索 + 体检 $80–150 / Standard 500 条 + PDF 报告 + 开发信草稿 $250–450 / Premium 自动化系统交付（客户自用）$600–1200

**产品化**：
- 目标用户：卖建站/SEO 服务的小代理公司和自由职业者（"给做网站的人卖获客工具"）。
- 变现：按月订阅或按线索积分。

**主要风险**：
- **不抓取 LinkedIn、Google Maps 网页版等禁止抓取的平台**；只用官方 API，且遵守其缓存/存储/展示条款（Google Places 对数据存储有限制，需按条款处理）。
- 冷邮件合规：CAN-SPAM（美国）、GDPR / PECR（欧盟/英国对 B2B 外联有不同要求），提供退订，发送由客户账号完成。
- 不出售个人联系方式数据库，只做商家公开信息。

---

### #7 客户自有后台的浏览器 RPA（无 API 的老系统自动化）【接单模板】

**映射边界**：S3（会话保活、token 刷新——客户自己的账号）、S6（任务队列与重试）、S7（截图与失败追踪）、D6（长跑浏览器进程的内存/句柄泄漏）、S4（每客户凭据隔离）

**场景**：客户每天手动从供应商门户下载报表、在老 ERP 里录单、把订单从 A 系统搬到 B 系统，而这些系统没有 API。

**实现大纲**：
\`\`\`
rpa-runner/
├── flows/
│   └── supplier_portal_export.py  # Playwright 脚本：登录 → 导航 → 下载 → 解析
├── core/
│   ├── browser_pool.py      # 浏览器上下文池，定期回收（防 D6 泄漏）
│   ├── session_store.py     # storageState 加密存储，过期则重新登录（客户账号）
│   ├── secrets.py           # 凭据存 Vault / Docker secrets，不落明文
│   └── retry.py             # 指数退避 + 失败截图 + trace.zip
├── scheduler/               # APScheduler / Celery beat
├── outputs/                 # 写 Google Sheets / Airtable / 数据库 / 邮件
└── docker-compose.yml       # 带 Playwright 官方镜像
\`\`\`
**数据流**：定时触发 → 从会话库取客户自己的登录态 → 执行流程 → 产出文件/数据 → 写入目标系统 → 成功/失败通知；失败时保留 Playwright trace 方便排查。

**技术栈**：Python Playwright、Celery/APScheduler、Postgres、Docker、FRP（客户内网系统时）。

**MVP（1 周）**：通用 runner 框架 + 一个示例 flow（登录演示站点 → 导出 CSV → 写 Google Sheet）+ 失败截图告警。

**接单模板**：
- 建议 gig 标题：\`I will automate repetitive tasks in your web portal with Playwright\`
- 建议价格档位：Basic 单流程脚本 $100–250 / Standard 定时运行 + Docker 部署 + 告警 $300–600 / Premium 多流程 + 监控 + 维护 $700+

**主要风险**：
- 必须是**客户自己有权限的账号**，并请客户确认目标平台条款允许自动化；遇到验证码或"禁止自动化"的提示，与客户协商改走官方导出/API，不做绕过。
- 页面改版导致脚本失效：在报价中包含维护期，或按月收维护费。
- 凭据安全：签署保密说明，凭据加密存储、最小权限账号。

---

### #8 SMB 工作流浏览器扩展（Chrome MV3）【接单模板 + 产品化】

**映射边界**：W1（扩展沙箱、MV3 Service Worker 随时休眠、content script 隔离）、W3（LLM 与密钥放后端）、S3（扩展与后端的鉴权）、S4

**示例产品方向**（任选其一做 MVP）：
- Gmail / Outlook Web 侧边栏：一键把当前邮件联系人与内容存入 HubSpot / Pipedrive，并用 LLM 生成回复草稿。
- Shopify Admin 增强：在订单页一键生成售后回复、批量打标签（通过官方 Admin API，而不是篡改页面请求）。

**实现大纲**：
\`\`\`
extension/
├── manifest.json            # MV3，最小权限（只申请需要的 host_permissions）
├── background/sw.ts         # Service Worker：消息路由、调用你的后端；用 chrome.storage 持久化状态（SW 会被回收）
├── content/gmail.ts         # 读取当前打开邮件的 DOM（只读、用户主动触发）
├── sidepanel/               # React side panel UI
└── lib/api.ts               # 调后端（带用户 token）
backend/
├── auth/                    # 邮箱登录 / OAuth；扩展存短期 token
├── crm/                     # HubSpot/Pipedrive 官方 API
├── llm/                     # 草稿生成
└── billing/                 # 复用 #3 的 Stripe 模块
\`\`\`
**数据流**：用户点击按钮 → content script 读取当前页面结构化信息 → 发给 SW → SW 携带用户 token 调后端 → 后端调 CRM/LLM → 返回结果显示在侧边栏。

**技术栈**：TypeScript、Vite + CRXJS 或 WXT、React、FastAPI/Next.js 后端、Stripe。

**MVP（1.5–2 周）**：Gmail 侧边栏 + "存入 HubSpot" + "生成回复草稿" + 简单登录与免费额度。

**接单模板**：
- 建议 gig 标题：\`I will build a custom Chrome extension for your business workflow\`
- 建议价格档位：Basic 简单 content script / 油猴脚本 $80–200 / Standard 带后端与登录的 MV3 扩展 $400–800 / Premium 含支付、上架 Chrome Web Store $900+

**产品化**：
- 目标用户：用 Gmail + 轻量 CRM 的销售型独立创始人、小代理公司。
- 变现：Freemium + 月订阅（ExtensionPay 或自建 Stripe）。

**主要风险**：
- Chrome Web Store 审核：权限过宽、远程代码执行、隐私政策缺失会被拒或下架。
- Gmail 等页面 DOM 经常变动：选择器要有降级方案；涉及读取邮件内容需在隐私政策中写明。
- Google 对使用 Gmail 数据的应用有额外政策要求（若改用 Gmail API 的受限 scope 需要安全评估），MVP 尽量只读用户当前主动打开的页面内容。

---

### #9 LLM API 可靠性网关：多密钥容灾 + 限流故障转移 + 成本看板 【产品化 + 接单模板】

**映射边界**：S2（并发与限流）、S3（密钥管理）、S4（租户隔离与预算）、S5（重试幂等）、S6、S7（可观测性，核心）

**定位**：把你的"多账号 token 轮换、限流故障转移、会话保活"能力**合规化**——服务于客户**自己合法持有**的多个供应商 API key（如 OpenAI + Anthropic + 自托管模型），做故障转移与成本控制，而不是用多账号去规避单一供应商的配额。

**实现大纲**：
\`\`\`
llm-gateway/
├── proxy/
│   ├── openai_compat.py    # 对外暴露 OpenAI 兼容接口（/v1/chat/completions）
│   ├── router.py           # 按模型/成本/延迟/健康度路由
│   ├── failover.py         # 429/5xx/超时 → 熔断 → 切换到备用供应商
│   └── rate_limiter.py     # Redis 令牌桶：按租户、按 key 限流
├── keys/
│   └── vault.py            # 客户自有 key 加密存储（KMS/age），按项目隔离
├── budget/
│   └── guard.py            # 每租户/每项目月度预算，超额降级或拒绝
├── observability/
│   ├── usage_log.py        # 每次调用：模型、token、耗时、费用估算、状态码
│   └── dashboard/          # Grafana 或 Next.js 看板
└── docker-compose.yml      # gateway + Redis + Postgres + Grafana
\`\`\`
**数据流**：客户应用 → 网关（鉴权、限流、预算检查）→ 选择主供应商 → 失败则按策略切换备用 → 返回响应 → 写使用日志 → 看板与告警。

**技术栈**：Python FastAPI（流式 SSE 转发）或基于开源 LiteLLM 二次开发、Redis、Postgres、Grafana、Docker。

**MVP（1–1.5 周）**：基于 LiteLLM Proxy 做定制部署 + 预算告警 + 简洁成本看板（自研部分聚焦"看板 + 告警 + 一键部署"，不重复造轮子）。

**接单模板**：
- 建议 gig 标题：\`I will set up a self-hosted LLM gateway with fallback, rate limits and cost tracking\`
- 建议价格档位：Basic 部署 + 配置 $150–300 / Standard 含预算、看板 $400–700 / Premium 定制路由与 SSO $800+

**产品化**：
- 目标用户：在产品里重度调用 LLM 的独立创始人和小 SaaS 团队。
- 变现：开源核心 + 托管版订阅；或一次性部署服务费。

**主要风险**：
- **明确拒绝**"多个免费账号轮换薅额度""共享/转售 API key"类需求：违反主要供应商的使用条款，且可能被封号牵连客户。
- 竞争激烈（已有 LiteLLM、OpenRouter、Portkey 等开源/商业方案），差异化要放在"为 SMB 做好部署与运维"而不是重新做网关。
- 数据经过网关：注意日志脱敏，可选不记录 prompt 内容。

---

### #10 自托管基础设施套件：Docker + FRP + 监控 + 备份 【接单模板】

**映射边界**：S7（监控告警）、S1（备份与恢复）、S4（网络隔离）、S3（访问控制）、D6（长期运行服务的资源泄漏监控）

**场景**：客户在办公室 NAS / 小服务器上跑 n8n、内部工具、AI 模型，需要安全的外网访问、HTTPS、自动备份与宕机告警。

**实现大纲**：
\`\`\`
selfhost-kit/
├── frp/
│   ├── frps.toml           # 云端 VPS：token 鉴权、仅开放必要端口、TLS
│   └── frpc.toml           # 内网：按服务映射，敏感服务只走 stcp/xtcp 或 VPN
├── proxy/Caddyfile         # 自动 HTTPS + basic auth / SSO（Authelia 或 Cloudflare Access）
├── monitoring/
│   ├── uptime-kuma/        # 可用性监控
│   └── netdata 或 prometheus+grafana  # 资源监控：内存、句柄、磁盘
├── backup/
│   └── restic.sh           # 定时备份到 S3/B2，附恢复演练脚本
├── apps/                   # n8n、Postgres、Open WebUI 等 compose 片段
└── runbook.md              # 交付给客户的运维手册
\`\`\`
**数据流**：外网用户 → VPS(frps + Caddy, HTTPS, 鉴权) → FRP 隧道 → 内网服务；监控数据 → 告警（Telegram/Slack/邮件）；数据卷 → restic → 对象存储。

**技术栈**：Docker Compose、FRP、Caddy、Authelia / Cloudflare Tunnel（作为备选方案）、Uptime Kuma、restic。

**MVP（1 周）**：一键 \`bootstrap.sh\` + 模板化 compose + runbook；用自己的 VPS 演示。

**接单模板**：
- 建议 gig 标题：\`I will deploy your apps with Docker, secure remote access, monitoring and backups\`
- 建议价格档位：Basic 单服务部署 $80–150 / Standard 多服务 + HTTPS + 监控 $250–450 / Premium 含备份演练与月度维护 $500+

**主要风险**：
- 暴露内网服务的安全责任：默认加鉴权、不暴露数据库端口，写清交付边界与客户责任。
- 部分国家/机房对内网穿透与端口有政策或 ToS 限制，需选合规的 VPS 提供商。
- 该项目单价偏低，主要作为 #2、#4、#9 的追加销售（upsell）。

---

### #11 本地服务商「建站 + 预约 + AI 接待」一体化模板 【接单模板】

**映射边界**：W1/W2（静态站点性能、移动端）、W3（表单与 AI 在后端）、S5（预约防重复）、S3（后台登录）、S7

**实现大纲**：
\`\`\`
local-biz-template/
├── site/                   # Astro 或 Next.js 静态站：服务、价格、评价、FAQ、LocalBusiness Schema.org 结构化数据
├── booking/                # Cal.com 嵌入 或 自研：时间段锁定（唯一约束防双订）
├── forms/                  # 表单 → #2 的 n8n 工作流
├── chat/                   # 复用 #4 的网页聊天窗（FAQ + 引导预约）
├── payments/               # 复用 #3 的定金支付
└── cms/                    # Decap CMS / Sanity，让客户自己改文案
\`\`\`
**数据流**：访客 → 站点 → 预约/表单/聊天 → n8n 分发到 CRM、邮件确认、短信提醒（Twilio 官方 API，需客户号码与合规注册）。

**技术栈**：Astro/Next.js、Tailwind、Cal.com、Sanity/Decap、Vercel/Netlify、n8n。

**MVP（1 周）**：1 套行业模板（如：清洁、牙科、健身教练三选一）+ 一键换文案配置 + Lighthouse 高分。

**接单模板**：
- 建议 gig 标题：\`I will build a fast booking website with AI receptionist for your local business\`
- 建议价格档位：Basic 单页 + 表单 $150–300 / Standard 多页 + 预约 + CMS $400–800 / Premium 含 AI 接待、定金支付、SEO 基础 $900+

**主要风险**：
- 竞争最激烈的品类（大量 Wix/WordPress 卖家），必须靠"预约 + 自动化 + AI 接待"组合差异化，而非单纯建站。
- 短信（美国 A2P 10DLC 注册等）有合规注册流程，需客户配合。
- 医疗等行业涉及隐私法规（如美国 HIPAA），这类客户谨慎接或不碰病历数据。

---

### #12 隐私优先的本地语音转写 / 会议纪要桌面工具 【产品化】

**映射边界**：D1（CPU/GPU 与内存上限，本地模型推理）、D2（whisper.cpp / faster-whisper / ffmpeg 打包）、D3（声音→数字：麦克风/系统音频采集）、D4（纪要编辑与搜索 UI）、D6（长时间录音的内存与文件句柄）

**为什么排最后**：技术上最贴合"桌面能力边界"，但跨平台打包、音频采集权限、签名公证成本高，且已有成熟竞品；适合作为长期产品探索，而不是本周优先事项。

**实现大纲**：
\`\`\`
local-scribe/
├── app/ (Tauri + React)
│   ├── recorder/           # 麦克风采集；系统音频在 macOS 需虚拟声卡或 ScreenCaptureKit，Windows 用 WASAPI loopback
│   ├── transcribe/         # sidecar 调用 whisper.cpp（按硬件选模型大小，GPU 可选）
│   ├── summarize/          # 可选：本地 LLM（Ollama）或用户自带 API key
│   └── library/            # SQLite + FTS5 全文检索
├── chunking/               # 音频按 30s 分段流式处理，避免长录音占满内存（D6）
└── packaging/              # 代码签名、macOS 公证、自动更新
\`\`\`
**数据流**：音频采集 → 分段写入临时文件 → 转写 sidecar → 文本入 SQLite → 可选摘要 → 导出 Markdown / 推送到 Notion。

**技术栈**：Tauri（Rust + React）或 Electron、whisper.cpp、ffmpeg、SQLite、Ollama（可选）。

**MVP（2 周，偏紧）**：仅麦克风录音 + 本地转写 + 列表与搜索 + 导出 Markdown；只做一个平台（例如 macOS 或 Windows）。

**产品化**：
- 目标用户：对隐私敏感、不愿把录音上传云端的律师、咨询顾问、心理咨询师、记者。
- 变现：一次性买断（Gumroad / Lemon Squeezy）+ 付费升级。

**主要风险**：
- 录音同意：不同法域对录音需要一方或双方同意，产品内需明确提示用户自行取得同意。
- 平台签名/公证成本与时间；不同硬件性能差异大，需按硬件推荐模型。
- 竞品多，差异化要明确（纯本地、买断制、特定行业模板）。

---

### 附：为什么暂不推荐 Android 方向

Android 端（A1–A4）在 SMB 外包市场里需求点多集中在"做一个 App"，周期长、审核多；而你最擅长的自动化能力在 Android 上会撞到 A2（后台限制）、A3（无障碍/短信等敏感权限在 Google Play 审核严格）、A4（电量）。除非客户明确需要移动端，建议用 PWA 或响应式 Web 覆盖移动场景，把精力放在上面 12 个项目上。

---

## 3. 汇总表

| ROI 排名 | 项目 | 主要能力边界 | 标签 | MVP 周期 | 合规风险 | 可复用 / 追加销售关系 |
|---|---|---|---|---|---|---|
| 1 | Lovable/Bolt/Cursor 应用救援上线 | S1 S3 S4 S5 S7 W3 | 接单模板 | 1–1.5 周 | 低 | 引出 #3、#4、#10 |
| 2 | 表单→CRM/邮件 n8n 自动化 | S3 S4 S5 S6 S7 | 接单模板 + 产品化 | 1 周 | 低（注意 n8n 许可） | 被 #4、#11 复用 |
| 3 | 支付集成与 Webhook 可靠性 | S1 S3 S5 S6 S7 | 接单模板 | 1 周 | 低-中（支付政策） | 被 #1、#8、#11 复用 |
| 4 | AI 客服助手（知识库 + 转人工） | S1 S4 S6 S7 W1 W3 | 接单模板 + 产品化 | 2 周 | 中（隐私、幻觉） | 被 #11 复用 |
| 5 | Shopify 库存预警 + 价格监控 | S1 S2 S3 S4 S6 S7 | 产品化 + 接单模板 | 2 周 | 中（竞品抓取） | 可接 #4 订单查询 |
| 6 | 本地商家获客套件 | S1 S2 S6 S7 W3 | 接单模板 + 产品化 | 1–1.5 周 | 中（数据源条款、外联法规） | 给 #11 导流 |
| 7 | 客户自有后台浏览器 RPA | S3 S4 S6 S7 D6 | 接单模板 | 1 周 | 中（目标平台条款） | 配合 #10 部署 |
| 8 | SMB 工作流 Chrome 扩展 | W1 W3 S3 S4 | 接单模板 + 产品化 | 1.5–2 周 | 中（商店审核、Google 数据政策） | 复用 #3 计费 |
| 9 | LLM 可靠性网关 | S2 S3 S4 S5 S6 S7 | 产品化 + 接单模板 | 1–1.5 周 | 中（拒绝违规用法） | 支撑 #4 |
| 10 | 自托管基础设施套件 | S1 S3 S4 S7 D6 | 接单模板 | 1 周 | 低-中 | #2、#4、#9 的追加销售 |
| 11 | 本地服务商建站 + 预约 + AI 接待 | W1 W2 W3 S3 S5 S7 | 接单模板 | 1 周 | 低-中（短信、行业隐私） | 组合 #2 #3 #4 |
| 12 | 本地语音转写桌面工具 | D1 D2 D3 D4 D6 | 产品化 | 2 周（偏紧） | 中（录音同意） | 独立 |

---

## 4. 本周建议先启动的 3 个

### ① #1 应用救援（主力接单，现金流）
- **理由**：需求最确定、完全不涉及抓取合规、与你的全栈 + 支付 + Docker 技能高度重合，而且每单都能自然追加销售支付集成、部署和维护。
- **本周动作**：
  1. 周三–周四：写 \`scan_secrets\` / \`check_supabase_rls\` / \`check_env\` 三个审计脚本 + 报告模板。
  2. 周五：用 Lovable 或 Bolt 生成一个"带典型问题"的 demo，走完整救援流程，录 before/after 演示。
  3. 周末：在 Fiverr 发布 gig（3 档定价），在 Upwork 写对应 Specialized Profile 并开始投递"fix my Lovable/Bolt app"类岗位。

### ② #2 n8n 表单→CRM 自动化（第二条接单线 + 模板资产）
- **理由**：1 周内可交付、模板可反复卖；同时是 #4、#11 的底座，越早做越能复用。
- **本周动作**：
  1. 写好 \`docker-compose\`（n8n + Postgres + Caddy）一键部署脚本。
  2. 做 3 个工作流模板（含幂等去重与错误告警子流程），导出 JSON。
  3. 录 3 分钟演示视频，发布 gig；核对 n8n Sustainable Use License 后再决定是否提供托管版。

### ③ #5 Shopify 库存预警（产品化种子，只做"自家店"部分）
- **理由**：落在"店铺运营工具"需求簇，走 Shopify 官方 API 零抓取风险；同一套代码既能当私有 App 接单，也能逐步打磨成 App Store 订阅产品，积累长期资产。
- **本周动作**：
  1. 注册 Shopify Partner 账号，建开发商店，用 Shopify CLI 初始化 App。
  2. 完成 OAuth 安装 + \`inventory_levels/update\` webhook + 低库存阈值邮件告警。
  3. 竞品价格监控本周**不做**，留到 MVP 验证后再按合规原则（官方渠道优先、尊重 robots/ToS、遇验证码即停）评估。

> 节奏建议：①② 是"本周就能挂出去接单"的，③ 是"每天抽 1–2 小时持续推进"的产品线。接到 ①② 的订单后，把交付中沉淀的代码片段回收到各自的 kit 仓库，形成复利。
`},
{"id": "doc-tech", "title": "复杂技术清单（AI 开发参考）", "theme": "技术参考", "date": "2026-10-17 18:50", "summary": "按场景分组的复杂技术：用途、难点、AI 提示模板与常见坑。", "tags": ["技术清单", "AI辅助", "接单"], "source": "", "path": "dev-topics/04_complex_tech_checklist.md", "related_docs": [], "content": `# 04 · 复杂技术清单：接单开发时的 AI Prompt 速查（鹏飞版）

> 对象：鹏飞（技能见 \`03\`）。配套 \`01\`/\`02\`/\`03\`。本文是**开发中的 prompt 参考**，不是百科。
> 用法：对号入座 → 贴「AI 辅助」prompt 进 Cursor/Claude Code → 按「常见坑」验收。

## 合规红线（全文适用）

- **不**指导绕过第三方站点禁止的反爬 / 验证码 / 机器人检测。
- 抓取优先官方 API；公开页遵守 robots.txt、ToS、低频率、不抓 PII、不登录他人账号。
- 多 key / 多账号轮换仅用于**客户合法拥有**的密钥或账号（容灾/成本路由），不用于规避封禁或单账号配额。
- 浏览器 RPA 仅用于**客户自己的账号与后台**，并提醒核对平台条款。

---
## 1. 网站前后端
### 1.1 React / Vue 组件与状态
- **一句话用途**：可维护交互 UI（表单、列表、乐观更新）。
- **典型难点**
  - 服务端状态与本地 UI 状态混淆 → 重复请求 / stale。
  - 校验只做前端；大列表未分页/虚拟化。
- **AI 辅助怎么用**
\`\`\`text
[React|Vue] + [TanStack Query|Pinia]。功能：___。
给出：组件拆分与状态归属（server/local）、关键 hook/store 骨架、错误/loading UX。
不要新状态库。标出需我补的 API 契约。
\`\`\`
  - **常见坑**：多余全局 Context；无障碍缺失；示例把 API key 放前端。
### 1.2 Next.js App Router（SSR / SSG / 流式）
- **一句话用途**：营销站 SEO + SaaS；Agent 流式 UI（见 \`02\`）。
- **典型难点**
  - Server/Client 边界错 → 密钥进 client bundle。
  - 缓存策略与私有数据冲突；流式 + HITL 状态难同步。
- **AI 辅助怎么用**
\`\`\`text
Next.js App Router + TS。页面：___（SEO? 登录?）。
草拟 route、Server/Client 划分、数据获取位置、禁止进 client 的 env 清单 + 最小 page/layout 骨架。
\`\`\`
  - **常见坑**：默认全 \`'use client'\`；\`SECRET\` 用于 client；忽略 Safari 存储/第三方 cookie（\`01\`）。
### 1.3 FastAPI / Flask API
- **一句话用途**：权威业务逻辑与第三方唯一出口。
- **典型难点**
  - 同步阻塞拖垮 worker；超时/重试缺失。
  - Schema 与 DB 双份真相；错误形态不统一。
- **AI 辅助怎么用**
\`\`\`text
FastAPI 资源 ___：CRUD + 鉴权依赖。要求 Pydantic v2、统一错误
{code,message,retryable}、外部调用 timeout、写操作 Idempotency-Key。先骨架后实现。
\`\`\`
  - **常见坑**：全局可变单例当 DB；吞异常返回 200；硬编码密钥。
### 1.4 PostgreSQL（Schema / 迁移 / RLS）
- **一句话用途**：业务权威数据；多租户最后防线（\`01\` S4）。
- **典型难点**
  - 无备份就改 schema；租户过滤只在应用层。
  - N+1 / 缺索引；向量与业务策略无评估（\`02\`）。
- **AI 辅助怎么用**
\`\`\`text
Postgres 实体 ___，多租户 + RLS 草案。输出：表、索引、迁移步骤、
一条漏租户反例 SQL + 正确写法、回滚策略。
\`\`\`
  - **常见坑**：RLS 误用 \`current_setting\`；只有 upgrade；用可空 FK 当软删除万能药。
### 1.5 Redis（缓存 / 会话 / 限流 / 锁）
- **一句话用途**：加速读路径、分布式锁、令牌桶、短生命周期状态。
- **典型难点**
  - 与 DB 不一致；无 TTL；锁无过期或业务未完就过期。
  - 把 Redis 当权威金额/库存。
- **AI 辅助怎么用**
\`\`\`text
场景：___（缓存|会话|限流|锁）。画出 key/TTL/失效；Python 伪代码；
写明权威数据仍在 Postgres。
\`\`\`
  - **常见坑**：\`KEYS *\`；\`SETNX\` 无 token 释放；限流只按 IP。
### 1.6 Auth（Session / JWT / OIDC）
- **一句话用途**：证明身份与权限；Agent 权限 ≤ 用户（\`02\`）。
- **典型难点**
  - JWT 难吊销当长期会话；refresh 竞态；scope 过大；token 明文落库。
- **AI 辅助怎么用**
\`\`\`text
OIDC（Google）+ session cookie（HttpOnly/Secure/SameSite）。
给：回调、token 加密存储与刷新、RBAC 中间件、吊销后失效方案。禁止 refresh 进 localStorage。
\`\`\`
  - **常见坑**：JWT 默认 localStorage；忘 CSRF；信任客户端传入的 \`user_id\`。
### 1.7 前后端契约与类型共享
- **一句话用途**：改字段时类型/校验一起报警。
- **典型难点**：OpenAPI/Zod 漂移；日期/枚举/空值约定乱；Agent 工具 schema 另起一套。
- **AI 辅助怎么用**
\`\`\`text
已有 FastAPI OpenAPI。生成 TS Zod client，并列出最易漂移的约定
（datetime、money、enum、null vs 缺省）。
\`\`\`
  - **常见坑**：铺满 \`any\`；金额用 float；时区当本地时间。

---
## 2. 爬虫与 API 逆向（合规优先）
### 2.1 Playwright / Puppeteer（客户自有后台 RPA）
- **一句话用途**：客户自己后台的可靠点击流 / 导出 / 填表。
- **典型难点**：选择器脆弱；登录/2FA；无头差异；重试导致重复提交。
- **AI 辅助怎么用**
\`\`\`text
Playwright（Python）自动化客户自有后台：___。已有合法 storage_state。
给：稳定选择器、等待条件、幂等提交、失败截图/trace。不要建议绕过验证码/反机器人。
\`\`\`
  - **常见坑**：脆弱 XPath；迷信 \`networkidle\`；建议“过检测”——拒用，改官方 API/人工。
### 2.2 CDP 抓包与内部 API 梳理
- **一句话用途**：弄清页面真实 XHR，便于改稳定 HTTP（客户授权系统）。
- **典型难点**：签名/动态 token；分页游标；调试脚本误当生产。
- **AI 辅助怎么用**
\`\`\`text
CDP/HAR 摘要（已脱敏）：___。按资源分组、标鉴权头、推断分页、
httpx 复现骨架。仅客户授权/官方允许。标出需我实测的不确定点。
\`\`\`
  - **常见坑**：编造签名算法；cookie 写死进仓；忽略速率限制头。
### 2.3 官方 API 优先
- **一句话用途**：Shopify/Google/Stripe/HubSpot 等合规通道（\`03\`）。
- **典型难点**：OAuth、webhook 验签、版本废弃；GraphQL cost 限流。
- **AI 辅助怎么用**
\`\`\`text
对接 [Shopify Admin GraphQL|HubSpot]，数据 ___。
最小 scopes、分页、429 退避；官方做不到时的降级（人工导出/客户文件）。勿建议违规抓取。
\`\`\`
  - **常见坑**：scope 过大；不做 webhook+轮询对账；沙箱≠生产未提示。
### 2.4 公开页低频采集与止损
- **一句话用途**：robots/ToS 允许时的轻量监控；遇验证码即停。
- **典型难点**：条款/DOM 变更；误采 PII；「能抓」≠「能卖」。
- **AI 辅助怎么用**
\`\`\`text
每天 1 次抓公开页 ___。约束：robots、标识 UA、无登录、无验证码绕过。
给解析接口、变更检测、403/验证码立即停机+告警。
\`\`\`
  - **常见坑**：默认代理池/打码——删掉；忽略数据最小化。
### 2.5 清洗、去重与入库
- **一句话用途**：半结构化结果 → 可查询可对账表。
- **典型难点**：自然键不稳；重跑重复行；编码/时区。
- **AI 辅助怎么用**
\`\`\`text
原始 JSON：___。设计 Postgres 表 + 幂等 upsert 键、校验规则、死信表。
\`\`\`
  - **常见坑**：自增 id 当去重键；无冲突处理；整页 HTML 入库。
### 2.6 调度与运行环境
- **一句话用途**：定时、资源受限的浏览器任务、可观测。
- **典型难点**：容器缺字体；并发 OOM；时区。
- **AI 辅助怎么用**
\`\`\`text
Docker 跑 Playwright 定时任务，频率 ___，并发 ___。
compose、资源限制、死信重试、单任务浏览器生命周期。
\`\`\`
  - **常见坑**：无限重试；共享 profile 串号；无截图/trace。

---
## 3. 浏览器插件与油猴脚本
### 3.1 Tampermonkey / Userscript
- **一句话用途**：给客户常用站加快捷操作（导出/填表/高亮）。
- **典型难点**：\`@match\` 过宽；CSP/iframe；DOM 改版。
- **AI 辅助怎么用**
\`\`\`text
油猴：域名 ___，功能 ___。最小 @grant、防御性 selector、失败 toast。
勿远程恶意脚本、勿绕过付费墙。
\`\`\`
  - **常见坑**：滥用 \`unsafeWindow\`；硬编码 token；\`@match *://*/*\`。
### 3.2 Chrome Extension MV3
- **一句话用途**：可上架产品化增强（侧栏/批量/连自有后端）。
- **典型难点**：SW 生命周期短（\`01\` W1）；host permission 审核严。
- **AI 辅助怎么用**
\`\`\`text
MV3：content script 读客户自有后台表格 → 我的后端。
manifest（最小权限）、SW 消息流、auth（禁止永久密钥明文）。
\`\`\`
  - **常见坑**：仍写 MV2；SW 里 \`setInterval\` 保活；申请 \`<all_urls>\`。
### 3.3 Content Script 与页面隔离
- **一句话用途**：读 DOM 且不与页面 JS 互相污染。
- **典型难点**：isolated vs page world；SPA 路由重绑；listener 泄漏。
- **AI 辅助怎么用**
\`\`\`text
React SPA。路由变化后重绑。对比 MutationObserver vs history hook；
防重复注入；到 SW 的消息类型。
\`\`\`
  - **常见坑**：全局变量名冲突；不解绑 listener。
### 3.4 扩展 ↔ 后端安全通信
- **一句话用途**：敏感操作走后端；扩展只持短期会话。
- **典型难点**：CORS/扩展 origin；勿上传第三方站点密码/cookie。
- **AI 辅助怎么用**
\`\`\`text
扩展 OIDC 登录我的后端。token 存 chrome.storage.session、刷新流程、
「永不上传第三方站点密码」检查表。
\`\`\`
  - **常见坑**：refresh 打日志；建议读取任意站点 cookie。
### 3.5 Chrome Web Store 上架
- **一句话用途**：产品化；过审与隐私披露。
- **典型难点**：权限说明、单用途、禁止远程代码；演示账号不足。
- **AI 辅助怎么用**
\`\`\`text
权限 ___。起草 Store 隐私要点 + permission justification（英文）+ 常见拒审 checklist。
\`\`\`
  - **常见坑**：抄过时政策；描述与 host permission 不一致。

---
## 4. 桌面软件
### 4.1 Python GUI（PyQt / CustomTkinter）
- **一句话用途**：内网工具、工控面板、本地 Agent 壳。
- **典型难点**：UI 线程阻塞；信号泄漏；「小工具」变外设集成（\`01\` D）。
- **AI 辅助怎么用**
\`\`\`text
Python + [PyQt6|CustomTkinter]，功能 ___。
主线程/worker 划分、耗时任务队列、关闭时清理。禁止 UI 回调里直接网络请求。
\`\`\`
  - **常见坑**：主线程 sleep；退出未停线程池。
### 4.2 系统集成（托盘 / 自启 / 单例）
- **一句话用途**：常驻小助手、开机可用。
- **典型难点**：Win/mac 权限与签名；无管理员写注册表失败。
- **AI 辅助怎么用**
\`\`\`text
跨 Win/mac 托盘：可选自启、单实例。对比实现选项 + 失败时用户提示。
\`\`\`
  - **常见坑**：忽略 mac 公证；自启写成开发机绝对路径。
### 4.3 外设（串口 / 打印 / HID）
- **一句话用途**：扫码、小票、称重等本地 I/O。
- **典型难点**：无厂商文档不可估价（\`01\`）；句柄未关 → 设备占用。
- **AI 辅助怎么用**
\`\`\`text
串口协议摘要：___。打开/超时/重试/关闭生命周期、异常重置、无硬件模拟器；
列出须向客户索取的文档项。
\`\`\`
  - **常见坑**：编造波特率/校验；永不 \`close()\`。
### 4.4 语音 I/O（ASR / TTS）
- **一句话用途**：口令控制、朗读、客服辅助。
- **典型难点**：权限/格式/延迟；云 ASR 隐私费用；长跑泄漏（\`01\` D6）。
- **AI 辅助怎么用**
\`\`\`text
按键说话→ASR→本地函数→TTS。音频流必须可关；对比「仅本地模型 / 仅云 API」风险。
\`\`\`
  - **常见坑**：不关音频流；客户端明文 API key。
### 4.5 打包、更新与崩溃采集
- **一句话用途**：可安装、可升级、崩了有日志/dump。
- **典型难点**：杀软误报；更新通道安全；7×24 无资源监控。
- **AI 辅助怎么用**
\`\`\`text
PyInstaller Win 包 + 签名 URL 更新检查。目录结构、验签要点、崩溃落盘；提醒证书谁买。
\`\`\`
  - **常见坑**：HTTP 更新；整 venv 打包；无看门狗。

---
## 5. 安卓（轻量；默认优先 PWA，见 \`03\`）
### 5.1 Kotlin + 基础界面
- **一句话用途**：确需原生时的最小 App/壳。
- **典型难点**：配置变更丢状态；只测一机。
- **AI 辅助怎么用**
\`\`\`text
Kotlin + Compose 单屏：___。ViewModel 状态保存与错误 UI。
若 PWA 可替代先论证，再给原生。
\`\`\`
  - **常见坑**：忽略 configuration change；密钥进 apk。
### 5.2 生命周期与后台限制
- **一句话用途**：进程可被杀；勿承诺非法常驻（\`01\` A2）。
- **典型难点**：Doze、前台服务类型、厂商杀进程。
- **AI 辅助怎么用**
\`\`\`text
需求 ___（是否必须后台）。对比 WorkManager / Foreground Service / 改推送；给审核风险。
\`\`\`
  - **常见坑**：建议无限后台定位/录音 → 高拒审，应改产品。
### 5.3 权限与 Play 政策
- **一句话用途**：按需申请；过审。
- **典型难点**：短信/无障碍等极严；缺账号删除入口。
- **AI 辅助怎么用**
\`\`\`text
权限 ___。申请时机 UX + Play 风险表 + 隐私披露要点。
\`\`\`
  - **常见坑**：启动即申请全部；忽略账号删除要求。
### 5.4 WebView / 原生桥接
- **一句话用途**：Web 栈交付，少量能力走原生。
- **典型难点**：JS bridge 安全；相机/文件回调；深链接。
- **AI 辅助怎么用**
\`\`\`text
Capacitor/WebView：H5 调原生 ___。桥接接口、origin 校验、纯 H5 降级表。
\`\`\`
  - **常见坑**：对任意 URL \`eval\`；忽略分区存储。

---
## 6. AI 集成
### 6.1 LLM API 与结构化输出
- **一句话用途**：可靠调模型；schema 约束输出（\`02\`）。
- **典型难点**：JSON 偶发失败；429/超时；把模型当 DB。
- **AI 辅助怎么用**
\`\`\`text
Zod/JSON Schema 约束输出：___。校验失败→带错重试一次→降级；超时与 token 预算伪代码。
\`\`\`
  - **常见坑**：只 \`JSON.parse\`；无限重试；无评估乱调温度。
### 6.2 Prompt 工程
- **一句话用途**：稳定行为；工具描述写给模型看。
- **典型难点**：提示与代码两套；无版本/回归集。
- **AI 辅助怎么用**
\`\`\`text
任务 ___。起草 system prompt + 2 个工具 description/schema + 5 条易失败回归用例。
检索内容视为不可信。
\`\`\`
  - **常见坑**：又长又空；工具描述重叠导致选错。
### 6.3 RAG（分块 / 混合检索 / 引用）
- **一句话用途**：客户文档问答；可引用、可评估（\`02\`）。
- **典型难点**：定长切片打碎表格；只向量；无 stale。
- **AI 辅助怎么用**
\`\`\`text
语料 PDF/Help。按标题 chunk + metadata；Postgres 全文 + pgvector 混合；
回答带来源；最小评估集格式。不要编造准确率数字。
\`\`\`
  - **常见坑**：宣称无依据的准确率；无增量重建索引。
### 6.4 Agent 工具与编排
- **一句话用途**：调工具完成业务；危险操作 HITL。
- **典型难点**：工具过多；写操作无幂等；无步数上限。
- **AI 辅助怎么用**
\`\`\`text
单 Agent + ReAct，工具 ___（读写分离）。schema、结构化错误、循环上限、
退款 HITL 状态机。先论证为何不需要多 Agent。
\`\`\`
  - **常见坑**：一上来 Multi-Agent；信任模型传的 \`user_id\`；无 checkpoint。
### 6.5 向量库 / pgvector
- **一句话用途**：与业务库同库检索，少组件。
- **典型难点**：索引/过滤顺序；换 embedding 需全量重嵌。
- **AI 辅助怎么用**
\`\`\`text
Postgres + pgvector，表 ___，metadata filter + topK。schema、HNSW 注意点、embedding 版本字段。
\`\`\`
  - **常见坑**：忘维度；过滤在检索后致空召回；无用户数据删除路径。
### 6.6 可观测、成本与护栏
- **一句话用途**：可回放、可控预算、限损害（\`02\` §3）。
- **典型难点**：无 trace；死循环烧钱；prompt injection。
- **AI 辅助怎么用**
\`\`\`text
给 Agent 加：Langfuse/OTel 字段清单、每租户 token 预算、危险工具 HITL、3 条注入测试。
\`\`\`
  - **常见坑**：PII 全文进日志；预算只做客户端提示。
### 6.7 MCP Server 包装现有系统
- **一句话用途**：把 REST 安全暴露给 Cursor/Claude 等（\`02\`）。
- **典型难点**：远程认证；写操作确认；工具面过大。
- **AI 辅助怎么用**
\`\`\`text
订单只读 API → MCP server（Py/TS）。最小 tools、auth、审计字段。禁止任意 SQL。
\`\`\`
  - **常见坑**：任意 SQL tool；stdio 示例直接当生产远程。

---
## 7. 部署与运维
### 7.1 Docker / Compose
- **一句话用途**：可重复环境；SMB 单机常见交付。
- **典型难点**：卷权限；启动顺序；镜像过大。
- **AI 辅助怎么用**
\`\`\`text
web/worker/postgres/redis 生产 compose：健康检查、重启策略、密钥用 env、备份卷约定。密钥不进镜像。
\`\`\`
  - **常见坑**：\`latest\`；DB 端口裸奔公网；缺 \`shm\` 致 Playwright 崩。
### 7.2 FRP / 内网穿透
- **一句话用途**：无公网 IP 时暴露 webhook/管理端（\`03\`）。
- **典型难点**：无鉴权裸奔；证书/域名；出口政策。
- **AI 辅助怎么用**
\`\`\`text
内网收 Stripe/n8n webhook。frps/frpc 最小配置 + VPS Caddy HTTPS + 鉴权；列出暴露面风险。
\`\`\`
  - **常见坑**：无 token/allowlist；管理面板 \`0.0.0.0\`；忽略机房 ToS。
### 7.3 Nginx / Caddy
- **一句话用途**：TLS、路由、静态、上传限制。
- **典型难点**：SSE/WebSocket 被缓冲；413；错误回调缺 \`X-Forwarded-Proto\`。
- **AI 辅助怎么用**
\`\`\`text
反代 FastAPI + Next；路径 ___；需 WebSocket/SSE。Caddyfile 或 Nginx 片段：关错误缓冲、设上传上限。
\`\`\`
  - **常见坑**：缓冲掉流式；忘转发 proto。
### 7.4 CI/CD
- **一句话用途**：测→构建→部署可重复。
- **典型难点**：密钥进日志；无迁移；worker 旧进程残留。
- **AI 辅助怎么用**
\`\`\`text
GitHub Actions：测 Python → 镜像 → compose pull。secret 用法、迁移 job、失败回滚口头步骤。
\`\`\`
  - **常见坑**：echo 密码；跳过备份直接 migrate。
### 7.5 备份、监控、告警
- **一句话用途**：磁盘满/证书过期/容器挂之前知道。
- **典型难点**：只备 DB；告警风暴；从未演练恢复。
- **AI 辅助怎么用**
\`\`\`text
单 VPS：Postgres + 上传文件。restic/cron、Uptime Kuma 探针、磁盘>85% 告警、恢复演练检查表。
\`\`\`
  - **常见坑**：备份同盘；无恢复测试；告警邮箱即故障域。
### 7.6 HTTPS 与密钥轮换
- **一句话用途**：自动续期；泄露可轮换。
- **典型难点**：DNS 挑战；多域名；泄露后不知改哪些。
- **AI 辅助怎么用**
\`\`\`text
Caddy 自动 HTTPS + 列出本项目全部密钥（DB/JWT/第三方）的轮换步骤。
\`\`\`
  - **常见坑**：手工拷证书无续期；JWT 轮换无双密钥窗口。

---
## 8. 支付与多账号（合法密钥 / 自有账号）
### 8.1 支付网关（Stripe 等）
- **一句话用途**：一次性/订阅收款；税务可由 MoR（\`03\` #3）。
- **典型难点**：测/产混用；税费边角；高风险行业拒户。
- **AI 辅助怎么用**
\`\`\`text
Stripe Checkout + Customer Portal，商品 ___。服务端建 session、成功/取消 URL、env 清单；税务归客户/MoR。
\`\`\`
  - **常见坑**：前端算价并信任；secret 进 public env。
### 8.2 Webhook 验签与幂等
- **一句话用途**：支付状态以 webhook 为准；防重放（\`01\` S5）。
- **典型难点**：重试重复发货；事件乱序；本地收不到 webhook。
- **AI 辅助怎么用**
\`\`\`text
Stripe webhook：验签、event_id 去重表、「标记已付+开通权益」幂等事务；乱序事件处理表。
\`\`\`
  - **常见坑**：先业务后验签；金额字符串当唯一键；同步长任务堵回调。
### 8.3 订单状态机与对账
- **一句话用途**：业务状态与支付商一致，可纠偏。
- **典型难点**：只信前端 success 页；退款未建模。
- **AI 辅助怎么用**
\`\`\`text
状态 pending/paid/refunded/failed。状态机 + 每日 Stripe 对账 job + 差异告警字段。
\`\`\`
  - **常见坑**：随意跳状态；退款不减权益。
### 8.4 多 API Key 轮换（客户自有）
- **一句话用途**：多供应商/多 key 容灾与成本路由（\`03\` #9），非规避封禁。
- **典型难点**：密钥隔离审计；半失败双计费。
- **AI 辅助怎么用**
\`\`\`text
网关：租户自有 OpenAI+Anthropic key。选择策略、429/5xx 转移、按 key/租户 Redis 限流、使用日志。
禁止用于规避单平台 ToS。
\`\`\`
  - **常见坑**：多 key 逗号明文；转移无幂等键致双倍计费。
### 8.5 会话保活（自有账号）
- **一句话用途**：客户自有后台 OAuth/session 刷新，少人工重登。
- **典型难点**：refresh 竞态；吊销检测；加密存储。
- **AI 辅助怎么用**
\`\`\`text
加密存客户 refresh token。单飞刷新、失效告警、用户一键断开。仅客户授权账号。
\`\`\`
  - **常见坑**：明文 Redis；多 worker 同时 refresh；不处理 \`invalid_grant\`。
### 8.6 限流故障转移与降级
- **一句话用途**：429/配额用尽时切换或降级，不打挂主流程。
- **典型难点**：重试风暴；无用户可见降级；预算与限流冲突。
- **AI 辅助怎么用**
\`\`\`text
上游 429：指数退避+抖动、每租户熔断、备用切换条件、用户降级文案、「何时不要重试」清单。
\`\`\`
  - **常见坑**：固定 sleep 打爆对方；非幂等 POST 自动重放。

---
## 接单时优先查本清单的哪些组

| 客户说法 / 需求线索 | 先查 |
|---|---|
| Lovable/Bolt 半成品上线、SEO 站、SaaS CRUD | **1**；部署 **7**；登录/多租户加重 1.4–1.6 |
| 文档客服机器人 / Agent | **6**；底座 **1**；上线 **7** |
| 表单→CRM、n8n、内网 webhook | **7** + **1.3**；幂等 **8.2** |
| 支付/订阅/「付了没开通」 | **8**；状态权威 **1.4** |
| Shopify/官方 API、库存价格 | **2.3** + **8.6**；慎碰竞品灰抓 |
| 「自动操作我们公司后台」 | **2.1 / 2.2**（确认自有账号） |
| 浏览器插件 / 油猴 | **3**；要后端加 **1**+**7** |
| 本地工具、打印/串口、语音 | **4**；先确认外设文档（\`01\`） |
| 「做个 App」 | 先推 PWA/**1**；非必要再 **5**（见 \`03\` 暂缓 Android） |
| 多 key 容灾、LLM 网关、成本看板 | **8.4–8.6** + **6.6** |
| 只要 Docker/备份/监控 | **7** |

**自检**：鉴权 / 支付 / 多租户 / 爬虫 / 密钥代码，对照「常见坑」再提交。
`},
{"id": "doc-titles", "title": "Upwork 标题与预算", "theme": "Upwork 调研", "date": "2026-10-17 18:50", "summary": "职位标题 × 预算 × 竞争样本与优先投标 Top5。", "tags": ["Upwork", "预算", "标题"], "source": "", "path": "upwork/upwork_titles_budgets.md", "related_docs": [], "content": `# Upwork 职位标题 × 预算 × 竞争 参考表（建站 + 后端自动化）

- 更新：2026-10-14 21:50（UTC+8）；方法：WebFetch 公开类目页/apply 页 + 本目录既有笔记（requirements_backlog.md、checked_2026-10-14.txt）。未登录、未绕过 Cloudflare。
- 说明：预算均来自下列 URL 的公开样本（单条或少量样本，**不是统计均值**）。「提案数」带 ✅ 为页面实际显示；标「估」为按类目/预算/描述的定性估计。
- 拦截：/freelance-jobs/playwright/、/stripe/、/make-com/、/api-integration/、/payment-gateway-integration/、/hire/web-scraping-specialists/cost/ 返回 CF 验证页；/nextjs/、/web-application-development/ 404。故 Playwright/支付/Make 用相邻职位推断，hire/cost 指南未取到。
- 类目规模（页面自报样本数）：Full-Stack 3,432；Landing Page 1,246；Zapier 810；Web Scraping 307；Python Script 246。

## 职位表（按预算高→低）

| # | 常见职位标题 | 类别 | 典型需求点 | 预算（USD） | 竞争（提案数） | 鹏飞匹配 | 来源 |
|---|---|---|---|---|---|---|---|
| 1 | Senior Software Engineer (Full-stack, Next.js/Python) | 建站-全栈 | 长期合同、AWS/DevOps、多语言栈 | $6,000 fixed（常限美国） | 估 50+ | 低：US Only | [FS类目](https://www.upwork.com/freelance-jobs/full-stack-development/) |
| 2 | Voice/AI Agent + Booking + CRM Prototype | 自动化+AI | Retell/Vapi、Calendly、HubSpot | $1,500 列示 / 正文~$2,500 | ✅ 50+ | 中：契合但太卷 | [apply](https://www.upwork.com/freelance-jobs/apply/Voice-Agent-Specialist-Senior-Living-Sales-Appointment-Booking-Prototype_~022109694857514373182/) |
| 3 | Python AI outreach system on Ubuntu server | Python自动化 | 自托管、DNS/邮件、AI 生成外联 | $2,000 fixed | 估 20–50 | **高**：Python+Docker+部署 | [Python Script类目](https://www.upwork.com/freelance-jobs/python-script/) |
| 4 | AI Agents / Automation Overhaul (n8n) | 工作流自动化 | 多个 AI agent 接业务系统 | $1,500 fixed | 估 50+ | 中：范围大易被比价 | [n8n类目](https://www.upwork.com/freelance-jobs/n8n/) |
| 5 | n8n + Supabase + 3rd-party APIs Infrastructure | 工作流+API集成 | n8n、Supabase、MLS API、DocuSign、本地 LLM | $1,000 fixed | ✅ 50+（18 面试中） | 中：栈对但竞争极高 | [apply](https://www.upwork.com/freelance-jobs/apply/Build-Ferva-Homes-Automation-Infrastructure-n8n-Supabase-MLS-API-DocuSign-Local-LLM_~022109789162022651856/) |
| 6 | Automate Sales Policy & Dynamic Pricing | Python/数据 | 定价规则引擎、数据同步 | $1,000 fixed | 估 20–50 | 高：Python+数据处理 | [apply](https://www.upwork.com/freelance-jobs/apply/Automate-Sales-Policy-and-Dynamic-Pricing_~022099456786312275549/) |
| 7 | WordPress Directory / Membership Website | 公司网站 | 会员、目录、付费墙 | $1,000 fixed | ✅ 50+ | 低：WP 主场非强项 | [apply](https://www.upwork.com/freelance-jobs/apply/WordPress-Developer-Needed-Build-Professional-Expert-Directory-Membership-Website_~022107756115959841113/) |
| 8 | Security Audit / Fix Next.js + Supabase + Stripe app | Web app（前后端） | AI 生成代码清理、鉴权、Stripe webhook | $750 fixed | ✅ 20–50 | **高**：全栈+支付+审计 | [apply](https://www.upwork.com/freelance-jobs/apply/Security-audit-Next-Supabase-Stripe-app-built-with-Claude-Code-cleanup-work-follow_~022106797562165408139/) |
| 9 | AI Agent / RAG Engineer (Python API Integration) | 后端+AI | RAG、agent、Python API 集成 | $700 fixed | ✅ 50+ | 高匹配但卷 | [apply](https://www.upwork.com/freelance-jobs/apply/Engineer-Needed-for-Agent-RAG-Workflow-Automation-Python-API-Integration_~022107920443968482841/) |
| 10 | Real Estate Data Engineer: Listings Database & API | 数据抓取+API | 抓房源→DB→对外 API | $500 fixed | ✅ 20–50 | **高**：爬虫+API+Docker | [apply](https://www.upwork.com/freelance-jobs/apply/Real-Estate-Data-Engineer-Italian-Listings-Database-API-Bari-Pilot_~022108912455837304784/) |
| 11 | GHL Setup: Webhooks, AI Email Parser | 工作流/API集成 | Webhook、邮件解析、Node.js | $500 fixed | 估 20–50 | 中：需 GHL 熟悉度 | [Zapier类目](https://www.upwork.com/freelance-jobs/zapier/) |
| 12 | Lead Automation & AI Engineer (self-hosted scrape-to-score) | 抓取+自动化 | 自托管、抗封、抓取→AI 打分 | $350 fixed | 估 20–50 | **高**：自托管+爬虫+AI | [Web Scraping类目](https://www.upwork.com/freelance-jobs/web-scraping/) |
| 13 | AI Automation for Inquiries (Sheets + AI) | 工作流自动化 | 询盘分类、Sheets、自动回复 | $400 fixed | ✅ 50+ | 中：简单、卷 | [apply](https://www.upwork.com/freelance-jobs/apply/Automation-for-Carpentry-Inquiries_~022109970451600320481/) |
| 14 | n8n Workflow Automation Specialist | 工作流 | 搭建+维护 n8n、CRM | $300 fixed | 估 20–50 | 中：同质化 | [n8n类目](https://www.upwork.com/freelance-jobs/n8n/) |
| 15 | Retail Product Catalogue Extraction | 数据抓取 | 商品目录抓取、清洗、导出 | $300 fixed | 估 20–50 | **高**：已有 Price Watch 案例 | [apply](https://www.upwork.com/freelance-jobs/apply/Developer-with-Experience-Retail-Product-Catalogue-Extraction_~022105318608307945877/) |
| 16 | AI Chatbot for Booking (website) | Web+AI | 预约、站点聊天、表单 | $300 fixed | 估 20–50 | 高：SiteBot 案例 | [apply](https://www.upwork.com/freelance-jobs/apply/Chatbot-for-Car-Wash-Booking_~022107783867214287280/) |
| 17 | n8n Integration for CRM Sync (HubSpot↔Sheets↔internal API) | API集成 | 双向同步、去重、错误重试 | $250 fixed | 估 20–50 | 中高：API 活 | [n8n类目](https://www.upwork.com/freelance-jobs/n8n/) |
| 18 | Landing Page for Product/Membership Launch | 落地页 | 单页、等待列表表单、CRM | $250 fixed（类目另见 $25–60） | ✅ 20–50 | 中：低价卷 | [apply](https://www.upwork.com/freelance-jobs/apply/Wix-Studio-Landing-Page-for-Membership-Launch_~022104300027832654831/) |
| 19 | Scrape Contractor Emails from Websites | 数据抓取 | 名单→官网→邮箱 | $250 fixed | 估 20–50 | 中：偏数据录入 | [Web Scraping类目](https://www.upwork.com/freelance-jobs/web-scraping/) |
| 20 | Data Scraping Engineer – Repeatable Pipeline | 抓取+调度 | 定时任务、去重、存储 | $200 fixed | 估 20–50 | 高：Docker 定时爬虫 | [apply](https://www.upwork.com/freelance-jobs/apply/Data-Scraping-Engineer-Repeatable-Data-Collection-Pipeline_~022101790739299336473/) |
| 21 | n8n Scraper Stabilization (fix existing pipeline) | 浏览器自动化/抓取 | 修复被封/失效抓取 | $150 fixed | 估 10–20（修复类较少人投） | **高**：反爬/CDP 正好用上 | [n8n类目](https://www.upwork.com/freelance-jobs/n8n/) |
| 22 | Python Selenium Bot (.exe GUI) for Ads Manager | 浏览器自动化 | 稳定 bot、GUI 打包 | $150 fixed | 估 20–50 | 中：低价、平台风控 | [Python Script类目](https://www.upwork.com/freelance-jobs/python-script/) |
| 23 | Invoice Data Extraction (OCR + LLM) | Python+AI | OCR、LLM 结构化、长期 | $20–30/hr, 30+ hrs/wk | 估 20–50 | 高：Doc Extractor 案例；时薪偏低 | [apply](https://www.upwork.com/freelance-jobs/apply/Automation-Developer-for-Invoice-Data-Extraction-OCR-LLM_~022107411655627473241/) |
| 24 | Full-Stack Dev to Build AI Agent into SaaS (Next.js + Python) | Web app+AI | 在现有 SaaS 内嵌 agent | $30–55/hr | ✅ 50+ | 高匹配但卷 | [apply](https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer-Build-Agent-Into-Our-SaaS-Web-App-Next-Python-Node_~022109565404398276670/) |
| 25 | Python Developer for Real Estate Scraper (hourly, long-term) | 抓取 | 可扩展扫描工具、长期 | Hourly（未示金额），30+ hrs/wk, 6个月+ | 估 20–50 | **高**：长期爬虫 | [Web Scraping类目](https://www.upwork.com/freelance-jobs/web-scraping/) |

规律：大量 $10–$100 低价单（Angular 仪表盘 $20、Next.js+Supabase $20、RAG 聊天 $50 等，见 FS/n8n 类目页）应直接跳过；$300+ 且带「修复 / 稳定 / 自托管 / 支付 / 抓取→API」关键词的单竞争相对小、匹配高。

## ⭐ 优先投标 Top 5

1. ⭐ **Security Audit / Fix Next.js + Supabase + Stripe app**（$750，✅20–50）— 全栈+支付网关+安全，AI 生成代码修复类需求持续出现，对上 NoteFlow 案例。
2. ⭐ **Real Estate / Listings Data Engineer: DB + API**（$500，✅20–50）— 爬虫+内部 API 逆向+Docker 部署一条龙，能拿完整交付。
3. ⭐ **Python AI system on own server (self-hosted)**（$2,000，估20–50）— 预算最高的可做单型；Docker/FRP/部署是区分点。
4. ⭐ **Lead/Scrape-to-score self-hosted pipeline**（$350，估20–50）— “无 vendor lock-in + 抗封”正对 Playwright/CDP 技能，对上 Contractor Lead Engine。
5. ⭐ **Fix/Stabilize existing scraper (n8n/Python)**（$150，估10–20）— 预算小但竞争最低、交付快、易拿好评，常转长期维护（Retail Catalogue $300 同类）。
`},
{"id": "doc-backlog", "title": "需求 Backlog", "theme": "Upwork 调研", "date": "2026-10-17 18:50", "summary": "需求分类与待做/已覆盖条目积压。", "tags": ["需求分类", "Backlog"], "source": "", "path": "upwork/requirements_backlog.md", "related_docs": [], "content": `# 接单需求列表（维护用）

- Updated: 2026-10-09（Asia/Shanghai）
- How to maintain: 只增不删（废弃条目改状态为「搁置」并加一行备注）；status 取值：\`待做案例\` / \`已有案例\` / \`仅投标不建站\` / \`搁置\`
- 证据原则：不编造预算/提案数/引用；无公开来源写「待核实」；Upwork 公开页可能滞后且部分被 Cloudflare 拦截
- 研究窗口：2026-10-09；方法：WebSearch + WebFetch 职位页/论坛；curl 对 Upwork 目录页返回 **HTTP 403 Cloudflare challenge**（与既有 \`checked_2026-10-09.txt\` 一致）

## 使用说明

本表驱动「下一个作品集 Demo 做什么」与「Upwork 搜什么关键词」。排序优先：**高频 + 可演示 + 对得上他的服务卡**，其次才是票单价。

个人站服务卡对照：
1. **Workflow automation & AI integration** from $120
2. **Fix & launch your app** from $90
3. **Custom development & scraping** from $80

已有可演示项目：AI Document Extractor、AI App Launch Rescue（NoteFlow）、SiteBot、Retail Price & MAP Watch、Contractor Lead Engine。

## 已有案例对照

| Demo | 主服务卡 | 覆盖桶 | 一句话卖点 |
|------|----------|--------|------------|
| AI Document Extractor | (1) AI/自动化 | B | PDF/邮件 → 结构化表 + 提醒；n8n 可交付 |
| SiteBot（网站 AI 聊天） | (1) AI/自动化 | B / A 边缘 | 站点 FAQ RAG + 留资；可挂营销站 |
| NoteFlow（AI App Launch Rescue） | (2) Fix & launch | C | Lovable/Bolt/Cursor 类产物上线加固清单 |
| Retail Price & MAP Watch | (3) 定制/爬虫 | D | 竞品价/MAP 监控 + 告警（可离线沙盒） |
| Contractor Lead Engine | (3) 定制/爬虫 | D / B | 公开数据获客 + AI 打分 + CRM/表格出口 |

---

## A. 通用建站与内容社区（evergreen）

### A1. 高转化落地页 / Landing Page
- **需求名称**：Landing page for membership / product launch（等待列表 + 表单）
- **谁在买**：教练、健康会员、电商独立站、本地服务
- **痛点**：要一页讲清「即将上线的会员/产品」、醒目 Join waiting list、表单进 Contacts
- **信号来源**：
  - Upwork：$250 fixed；proposals 20–50；标题 *Wix Studio Landing Page for Membership Launch* — https://www.upwork.com/freelance-jobs/apply/Wix-Studio-Landing-Page-for-Membership-Launch_~022104300027832654831/
  - 类目页公开样本（多条 $25–$60 及 Shopify landing）— https://www.upwork.com/freelance-jobs/landing-pages/（页面写 sample of **1,246** Landing Page Design jobs；此为平台展示数字，非独立复算）
- **预估单价区间**：$250（该单 fixed）；类目页另见 $25–$60 低价单 → 区间很宽，投标时按范围拆价
- **适合作品集？** Y — Next.js/Astro 单页 + 表单 webhook → Sheets/邮件（避免绑死 Wix）
- **与现有案例关系**：NEW（可与 SiteBot 同页展示）
- **优先级**：P1
- **状态**：待做案例

### A2. 专业目录 / Expert Directory + Membership
- **需求名称**：Searchable professional directory + membership gating
- **谁在买**：行业协会、教练网络、本地服务聚合站
- **痛点**：个人资料页、筛选、注册审批、公开 vs 会员可见、对接 CRM webhook
- **信号来源**：Upwork $1,000 fixed；proposals 50+；*WordPress Developer Needed to Build Professional Expert Directory / Membership Website* — https://www.upwork.com/freelance-jobs/apply/WordPress-Developer-Needed-Build-Professional-Expert-Directory-Membership-Website_~022107756115959841113/
- **预估单价区间**：$1,000 fixed（该单）；后续可能 ongoing
- **适合作品集？** Y — Next.js + Supabase 假数据目录（离线可演示筛选/审批）
- **与现有案例关系**：NEW
- **优先级**：P0（高票 + 可演示 + 可挂「定制开发」）
- **状态**：待做案例

### A3. 预约/Booking + 支付
- **需求名称**：Booking workflow（选服务/时间/支付/确认）
- **谁在买**：交通、诊所、本地服务、课程
- **痛点**：不是「漂亮官网」，而是地图选点/计价/排期/支付一体
- **信号来源**：
  - Upwork 出租车预订（expert，$8–$10/hr 低价但需求完整）— https://www.upwork.com/freelance-jobs/apply/WordPress-Expert-for-Advanced-Taxi-Booking-System-Custom-PHP-Google-Maps-WooCommerce_~022106442567786565453/
  - Upwork *Build a responsive WordPress website with the booking and payment feature*（$15 fixed 占位，需求泛）— https://www.upwork.com/freelance-jobs/apply/Build-responsive-WordPress-website-with-the-booking-and-payment-feature_~022101788248004395289/
  - Upwork *AI Chatbot for Car Wash Booking* $300 fixed — https://www.upwork.com/freelance-jobs/apply/Chatbot-for-Car-Wash-Booking_~022107783867214287280/
- **预估单价区间**：单页预约 demo 待核实成交价；洗车聊天预订该单 $300；复杂 WP 预订常见 lowball 时薪
- **适合作品集？** Y — Cal.com/自建周历 + Stripe test mode（S–M）
- **与现有案例关系**：NEW（与 SiteBot「可预约」能力叠加 → 加强）
- **优先级**：P0
- **状态**：待做案例

### A4. Headless CMS 客户端可编辑站点（Sanity/Astro）
- **需求名称**：Marketing site + client-editable CMS
- **谁在买**：需要自己改文案的中小客户；不喜欢 WordPress 运维的开发者客户
- **痛点**：自托管 CMS 半夜挂掉还得你修；客户要能改字
- **信号来源**：r/webdev *Is self-hosting the headless CMS worth…* — https://www.reddit.com/r/webdev/comments/1t1fglb/is_selfhosting_the_headless_cms_worth_in_the/ （评论共识：简单客户站用 Sanity free tier；自托管是维护负债）
- **预估单价区间**：待核实（社区讨论，非 Upwork 报价）
- **适合作品集？** Y — Astro + Sanity 假工作室站（免费层）
- **与现有案例关系**：NEW
- **优先级**：P1
- **状态**：待做案例

### A5. Membership / 订阅内容站（Stripe 门禁）
- **需求名称**：Subscription membership blog / courses gate
- **谁在买**：内容创作者、课程卖家
- **痛点**：支付 webhook → 订阅状态 → 中间件门禁；避免客户端泄露付费内容
- **信号来源**：r/webdev *Which software stack… service subscription website* — https://www.reddit.com/r/webdev/comments/1rgomhj/which_software_stack_should_i_use_for_a_service/ （评论强调 Stripe webhooks + server-side gate）
- **预估单价区间**：待核实
- **适合作品集？** Y — Next.js + Stripe test + 假文章门禁
- **与现有案例关系**：NEW（与 C 桶 webhook 加固重叠）
- **优先级**：P1
- **状态**：待做案例

### A6. 多语言商店 / 多语言作品集
- **需求名称**：Polylang / WPML / i18n ecommerce or portfolio
- **谁在买**：跨境电商店主、多语市场个人品牌
- **痛点**：语言切换后 cart/checkout 301 回原文；工具页未翻译；SEO h1 重复
- **信号来源**：Upwork $10–$20/hr；*WooCommerce… Polylang (3 languages), wishlist* — https://www.upwork.com/freelance-jobs/apply/WooCommerce-work-custom-theme-product-templates-Polylang-languages-wishlist_~022104592198327423464/
- **预估单价区间**：$10–$20/hr（该单）；整站多语项目待核实
- **适合作品集？** Y（轻量）— Next.js \`next-intl\` 双语作品集；或仅投标 WP 多语不建站
- **与现有案例关系**：NEW
- **优先级**：P2（时薪偏低；可作「仅投标」）
- **状态**：仅投标不建站

### A7. 房地产 / 本地服务营销短站
- **需求名称**：Real estate / local service brochure site
- **谁在买**：中介、承包商、本地店主
- **痛点**：快速上线吸客站 + 表单线索
- **信号来源**：Upwork landing 类目样本 *Real Estate Website Build*（hourly）— https://www.upwork.com/freelance-jobs/landing-pages/
- **预估单价区间**：待核实（类目页未展示该条具体金额）
- **适合作品集？** 弱 — 与 A1 合并即可；单独做价值低
- **与现有案例关系**：NEW（可并入 A1 demo）
- **优先级**：P2
- **状态**：搁置（并入 A1）

### A8. Shopify 产品落地页（主题内）
- **需求名称**：Shopify Dawn theme landing page
- **谁在买**：已有 Shopify 的品牌方
- **痛点**：在现有主题里加一页高转化 LP，不是整站重做
- **信号来源**：类目页多条 Shopify Landing（hourly）— https://www.upwork.com/freelance-jobs/landing-pages/
- **预估单价区间**：待核实
- **适合作品集？** N（难免费托管完整 Shopify）→ 仅投标或做 Liquid 截图文档
- **与现有案例关系**：NEW
- **优先级**：P2
- **状态**：仅投标不建站

### A9. Membership 长期维护（WordPress）
- **需求名称**：Ongoing WP membership site features & fixes
- **谁在买**：已有会员站的美国小公司
- **痛点**：插件冲突、速度、SEO、结账插件；要 staging/backup
- **信号来源**：Upwork *Ongoing WordPress Developer… Membership Website*（搜索摘要预算约 $750 fixed task 模式）— https://www.upwork.com/freelance-jobs/apply/Ongoing-WordPress-Developer-Front-End-Designer-for-Membership-Website_~022106172395071678496/
- **预估单价区间**：摘要称 $750 fixed（请以职位页为准；本轮未完整 WebFetch 预算字段）→ **部分待核实**
- **适合作品集？** N — 维护型；用案例说明「能修会员站」即可
- **与现有案例关系**：NEW
- **优先级**：P2
- **状态**：仅投标不建站

### A10. 表单→CRM/表格（替代 Formspree 付费墙）
- **需求名称**：Static site form → Sheets / Slack / n8n（无后端）
- **谁在买**：用静态站/Astro/Next 的小商家；撞上 Formspree 免费限额
- **痛点**：Formspree Free = **50 submissions/mo**；Webhook/Zapier 需 Professional 档
- **信号来源**：官方定价 — https://formspree.io/plans
- **预估单价区间**：待核实；可挂服务卡 (1) from $120
- **适合作品集？** Y — Vercel serverless form API + Sheets（S）
- **与现有案例关系**：NEW（补「营销站后端胶水」）
- **优先级**：P0（小而勤、好演示、对接服务卡 1）
- **状态**：待做案例

### Keyword bank（A · Upwork 搜索）
\`landing page\`, \`membership website\`, \`directory website\`, \`booking system\`, \`Calendly\`, \`WordPress membership\`, \`headless CMS\`, \`Sanity\`, \`Astro\`, \`multi-language\`, \`Polylang\`, \`WPML\`, \`Shopify landing page\`, \`waitlist\`, \`Elementor\`, \`Wix Studio\`

---

## B. 可接入 AI 的软件流程（trendy）

### B1. RAG 知识库助手 + 引用 + 人工复核
- **需求名称**：Internal RAG chatbot with sources + human review
- **谁在买**：有内部 PDF/DOCX 的中小公司；客服/运营
- **痛点**：要「从文档答」+ **source references** + 不知道就说不知道；不要幻觉客服
- **信号来源**：Upwork $700 fixed；proposals 50+；*AI/ML Engineer… AI Agent, RAG & Workflow Automation* — https://www.upwork.com/freelance-jobs/apply/Engineer-Needed-for-Agent-RAG-Workflow-Automation-Python-API-Integration_~022107920443968482841/
- **预估单价区间**：$700 fixed（该单）；社区/二手综述常提更高 RAG 预算 → 二手未独立核实，不引用为事实
- **适合作品集？** Y — 加强 SiteBot：加 citation UI +「unsupported」路径
- **与现有案例关系**：加强（SiteBot）
- **优先级**：P0
- **状态**：已有案例（可迭代加强）

### B2. 支持请求分类 / Support triage → CRM
- **需求名称**：Classify support requests → route + CRM note (human approve write)
- **谁在买**：同上 RAG 单的买家类型；客服团队
- **痛点**：分类到固定类别、结构化输出、模糊的走人审；写 CRM 前要批准
- **信号来源**：同上 $700 职位 scope §2–4（分类 + CRM tool calling + n8n）
- **预估单价区间**：含于上单 $700；单独卖待核实
- **适合作品集？** Y — 假工单收件箱 + 分类标签 +「Approve to CRM」按钮
- **与现有案例关系**：NEW（可挂在 SiteBot 旁或独立 mini）
- **优先级**：P0
- **状态**：待做案例

### B3. PDF/发票 OCR+LLM 抽取 → DB + 复核 UI
- **需求名称**：Invoice/document extraction pipeline with review screen
- **谁在买**：批发/物流：每周大量供应商 PDF/手机拍照
- **痛点**：「不是去掉人审，是去掉打字」；低置信度要标红
- **信号来源**：Upwork $20–$30/hr，30+ hrs/week；*AI Automation Developer for Invoice Data Extraction (OCR + LLM)* — https://www.upwork.com/freelance-jobs/apply/Automation-Developer-for-Invoice-Data-Extraction-OCR-LLM_~022107411655627473241/
- **预估单价区间**：$20–$30/hr ongoing（该单）
- **适合作品集？** Y — 加强 Document Extractor：加 review UI + Postgres/SQLite
- **与现有案例关系**：加强
- **优先级**：P0
- **状态**：已有案例（迭代）

### B4. n8n / Zapier / Make 工作流（含自托管迁移）
- **需求名称**：Zapier→n8n migration；CRM lead capture/routing
- **谁在买**：已有 Zap 账单、要降本的运营；需要可靠错误处理的团队
- **痛点**：Zapier 任务费高；Make 大数据易慢；要「能写 code node」的人兜底
- **信号来源**：
  - 费率综述（引用 Upwork n8n expert 区间 $40–$100/hr；项目约 $200–$600 / $800–$2,500 / $3,000+）— https://affstudio.org/2026/08/17/how-much-n8n-freelancers-actually-earn-in-2026/
  - r/n8n 讨论摘要（搜索结果）：面包黄油是 lead capture/routing、support triage、CRM sync — https://www.reddit.com/r/n8n/comments/1uslr2a/new_to_n8n_what_are_people_actually_building_with/ （本轮 Reddit 正文被网络拦截，**正文引用未二次核实**）
- **预估单价区间**：$200–$600 简单；$800–$2,500 定制；$3,000+ 多系统（来源：AFFStudio 对 Upwork 指南的转述）
- **适合作品集？** Y — 导出可导入的 n8n workflow JSON + 录屏（免费）
- **与现有案例关系**：加强（Document Extractor 已有 n8n）
- **优先级**：P0
- **状态**：已有案例 / 待做案例（补「Zapier→n8n 迁移」专题页）

### B5. CRM 富化 / Lead scoring + 跟进草稿
- **需求名称**：CRM enrichment + AI lead score + draft follow-up
- **谁在买**：销售团队；嫌 Apollo/Clay 贵或不准
- **痛点**：数据陈旧/退信；复杂 ICP 要用多源；Clay 贵、学习曲线陡
- **信号来源**：
  - Reddit 帖：*Apollo vs Clay* — https://www.reddit.com/r/coldemail/comments/1r0ig7y/apollo_vs_clay_whats_your_actual_experience_been/ （本轮 JSON 抓取超时；仅保留帖子 URL 作为讨论存在证据，**不引用具体评论数字**）
  - 已有 Contractor Lead Engine 调研文档内部证据链 — \`/workspace/upwork/demo_requirements_scraper_leadgen.md\`
- **预估单价区间**：待核实（工具替代项目差异大）
- **适合作品集？** Y — 加强 Lead Engine：Sheets/HubSpot 出口 + 理由字段
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：已有案例

### B6. 网站/多渠道预约聊天机器人
- **需求名称**：Booking chatbot（web + WhatsApp）+ calendar
- **谁在买**：本地服务（洗车、诊所等）
- **痛点**：多渠道问价/改约；要人机交接
- **信号来源**：Upwork $300 fixed — https://www.upwork.com/freelance-jobs/apply/Chatbot-for-Car-Wash-Booking_~022107783867214287280/
- **预估单价区间**：$300 fixed（该单；proposals 50+）
- **适合作品集？** Y — SiteBot + 假日历 API（与 A3 合并更强）
- **与现有案例关系**：加强（SiteBot）
- **优先级**：P1
- **状态**：待做案例

### B7. AI Agent + 只读工具调用（防胡写）
- **需求名称**：Agent with tool calling；write actions require approval
- **谁在买**：要「智能」但怕 agent 乱写 CRM 的买家
- **痛点**：超时/失败不能编造结果；写操作要批准
- **信号来源**：同上 $700 RAG+Agent 职位 scope §3
- **预估单价区间**：见 B1
- **适合作品集？** Y — 加强 SiteBot/新 mini：tool panel + approve gate
- **与现有案例关系**：NEW/加强
- **优先级**：P1
- **状态**：待做案例

### B8. Stripe webhook 幂等自动化（n8n）
- **需求名称**：Payment webhook → entitlement；idempotent on retries
- **谁在买**：订阅产品、n8n 自动化收款流
- **痛点**：Stripe 重试导致重复扣费/重复发权益
- **信号来源**：n8n Community — https://community.n8n.io/t/stopping-duplicate-stripe-charges-in-n8n-webhook-retries-simple-idempotency-pattern/272743 （原文："Customer gets charged twice."）
- **预估单价区间**：待核实
- **适合作品集？** Y — n8n workflow 演示 Remove Duplicates / Idempotency-Key
- **与现有案例关系**：NEW（也服务卡 1+2）
- **优先级**：P1
- **状态**：待做案例

### B9. GoHighLevel / CRM 跟进自动化
- **需求名称**：GHL lead follow-up & appointment automation
- **谁在买**：代理商、本地服务营销方
- **痛点**：线索跟进、预约；大量同质 GHL 专家岗
- **信号来源**：既有扫描 \`checked_2026-10-09.txt\` 记录多条 GHL 岗（例：$5 fixed 占位、$10–$26/hr）— 文件内 URL；公开页竞争极烈
- **预估单价区间**：常见 lowball；待核实可成交价
- **适合作品集？** 弱 — GHL 难免费演示 → 仅投标或做「webhook→Sheets」通用版
- **与现有案例关系**：NEW
- **优先级**：P2
- **状态**：仅投标不建站

### B10. 邮件/文档到期提醒流水线
- **需求名称**：Expiry reminders from extracted docs（证书/发票）
- **谁在买**：保险、合规、财务运营
- **痛点**：抽完字段还要「到期提醒」，且提醒逻辑不要全交给 LLM
- **信号来源**：已有 Demo README 定位（portfolio_entries）+ B3 发票单「人审确认」
- **预估单价区间**：待核实
- **适合作品集？** 加强 Document Extractor 即可
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：已有案例

### Keyword bank（B · Upwork 搜索）
\`n8n\`, \`Zapier\`, \`Make.com\`, \`RAG chatbot\`, \`LangChain\`, \`OpenAI API\`, \`document extraction\`, \`OCR LLM\`, \`CRM automation\`, \`HubSpot\`, \`support triage\`, \`AI agent\`, \`workflow automation\`, \`voice AI\`, \`GoHighLevel\`, \`idempotency\`, \`Stripe webhook\`

---

## C. 修 Bug / 上线加固（常规 + 新潮）

### 常规

### C1. Auth / CORS / 环境变量上线失败
- **需求名称**：Production env + auth redirect + CORS fix
- **谁在买**：任何「本地好、线上挂」的 Next/Vite 应用主
- **痛点**：预览环境注入的变量导出后丢失；\`VITE_\`/\`NEXT_PUBLIC_\` 前缀；Auth 回调仍指向 preview
- **信号来源**：https://takeoverwork.com/guides/why-lovable-bolt-v0-apps-break-in-production （2026-10-02 更新；列 10 类常见失败）
- **预估单价区间**：竞品 Project Catalog Starter **$150**（见 C6）
- **适合作品集？** Y — NoteFlow 已覆盖；可加「故障手册」页
- **与现有案例关系**：加强
- **优先级**：P0
- **状态**：已有案例

### C2. Stripe/支付 webhook 签名与幂等
- **需求名称**：Fix payment webhooks（signature, live secret, idempotency）
- **谁在买**：已收款但会员未升级的 SaaS
- **痛点**：webhook 未部署/测活密钥错/未验签/非幂等
- **信号来源**：同上 takeoverwork §8；n8n 社区双重扣费帖（B8）
- **预估单价区间**：待核实；$150–$450 目录价可作参照（C6）
- **适合作品集？** Y — 假 Stripe CLI 事件回放 demo
- **与现有案例关系**：NEW/加强 NoteFlow
- **优先级**：P0
- **状态**：待做案例

### C3. SEO / a11y / 性能小修包
- **需求名称**：On-page SEO, a11y, Core Web Vitals patch
- **谁在买**：已上线营销站/商店
- **痛点**：双 h1、分类 SEO 脏、搜索 404、慢
- **信号来源**：Polylang/Woo 修复单含 SEO 项 — https://www.upwork.com/freelance-jobs/apply/WooCommerce-work-custom-theme-product-templates-Polylang-languages-wishlist_~022104592198327423464/
- **预估单价区间**：$10–$20/hr（该单）
- **适合作品集？** 弱 — checklist + Lighthouse 前后对比截图即可
- **与现有案例关系**：NEW
- **优先级**：P2
- **状态**：仅投标不建站

### C4. 部署/环境常规排障（Vercel build、依赖）
- **需求名称**：Fix failed Vercel/Netlify builds
- **谁在买**：前端/全栈个人项目
- **痛点**：native module、Node 版本、lockfile
- **信号来源**：better-sqlite3 on Vercel — https://github.com/vercel/vercel/issues/12040 ；Nuxt Content — https://github.com/nuxt/content/issues/3689
- **预估单价区间**：待核实
- **适合作品集？** Y — 「坏掉的 sqlite demo → 换成 Postgres/Turso」前后对比（加强 NoteFlow）
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：待做案例

### 新潮（AI 生成应用救援）

### C5. Lovable / Bolt / v0 / Cursor 应用生产救援
- **需求名称**：AI-generated app fix & deploy（RLS、secrets、migrations）
- **谁在买**：用 AI builder 做出 80% 的创始人
- **痛点**：原文竞品文案："works in preview, fails on Vercel"；Supabase RLS \`using (true)\`；密钥进前端
- **信号来源**：
  - https://takeoverwork.com/guides/why-lovable-bolt-v0-apps-break-in-production
  - https://kuberns.com/blogs/why-ai-built-apps-break-in-production/
- **预估单价区间**：Upwork Project Catalog **$150 / $300 / $450** — https://www.upwork.com/services/product/development-it-your-lovable-bolt-or-v0-app-fixed-and-deployed-2090396756907958426 ；个人站 from **$90**
- **适合作品集？** Y — NoteFlow 已是核心
- **与现有案例关系**：加强
- **优先级**：P0
- **状态**：已有案例

### C6. Claude Code / AI 写的 SaaS 安全审计（RLS + Stripe Connect）
- **需求名称**：Security audit of AI-built Next+Supabase+Stripe app
- **谁在买**：已上线、要扩量前怕翻车的 B2B
- **痛点**：RLS 过松、webhook 幂等、service role 滥用、AI 生成冗余代码
- **信号来源**：Upwork $750 fixed；proposals 20–50；8 interviewing — https://www.upwork.com/freelance-jobs/apply/Security-audit-Next-Supabase-Stripe-app-built-with-Claude-Code-cleanup-work-follow_~022106797562165408139/
- **预估单价区间**：$750 Phase 1 audit（该单）；Phase 2 cleanup 另约
- **适合作品集？** Y — 公开「故意有洞的 demo 应用」+ 审计报告模板（高信任）
- **与现有案例关系**：NEW（NoteFlow 升级为「审计报告」产品化）
- **优先级**：P0
- **状态**：待做案例

### C7. Supabase RLS / Auth 专项修复
- **需求名称**：Enable & harden RLS；fix login loops
- **谁在买**：Lovable/Bolt 导出用户
- **痛点**：anon key 可直查表；登录循环
- **信号来源**：takeoverwork §2–3
- **预估单价区间**：见 C5 目录价
- **适合作品集？** 并入 C6 故意漏洞 demo
- **与现有案例关系**：加强
- **优先级**：P0
- **状态**：待做案例（并入 C6）

### C8. better-sqlite3 / 本地 DB 在 serverless 上炸掉
- **需求名称**：Replace SQLite native module for Vercel/serverless
- **谁在买**：Cursor/本地原型直接部署的人
- **痛点**：\`Module did not self-register\`；glibc；pnpm native
- **信号来源**：https://github.com/nuxt/content/issues/3689 ；https://github.com/vercel/vercel/issues/12040
- **预估单价区间**：待核实
- **适合作品集？** Y — 短案例「红 build → 绿 deploy」
- **与现有案例关系**：加强 NoteFlow
- **优先级**：P1
- **状态**：待做案例

### C9. 数据库 migration 与预览库不一致
- **需求名称**：Sync Supabase migrations；fix schema drift
- **谁在买**：在 Dashboard 手改表的 AI 应用主
- **痛点**：新环境缺列；migration 与生产不一致
- **信号来源**：takeoverwork §9
- **预估单价区间**：待核实
- **适合作品集？** 并入 NoteFlow 检查清单
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：仅投标不建站（清单化即可）

### C10. 暴露密钥轮换 + 服务端化 API 调用
- **需求名称**：Move secrets server-side；rotate leaked keys
- **谁在买**：把 OpenAI/Stripe secret 写进前端的 AI 应用
- **痛点**：密钥一旦进浏览器即视为泄露
- **信号来源**：takeoverwork §4
- **预估单价区间**：待核实
- **适合作品集？** 并入 C6 审计 demo
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：待做案例（并入 C6）

### Keyword bank（C · Upwork 搜索）
\`Lovable\`, \`Bolt.new\`, \`v0\`, \`Cursor\`, \`fix deploy\`, \`Vercel\`, \`Supabase RLS\`, \`Stripe webhook\`, \`CORS\`, \`environment variables\`, \`Next.js bug fix\`, \`production ready\`, \`Claude Code\`, \`better-sqlite3\`, \`auth redirect\`, \`security audit\`

---

## D. 定制开发与爬虫（legal / public-data framing）

> **边界**：只做公开页面/官方开放数据；尊重 robots/ToS；不做登录撞库、付费墙绕过、验证码滥用、私有数据窃取。职位/客户要求违法时拒绝。

### D1. 竞品价格监控 + 告警（含 MAP 检测模块）
- **需求名称**：Competitor price / MAP watch with alerts
- **谁在买**：品牌、经销商、电商店主
- **痛点**：手工盯价累；要「有意义变化」才告警；跨店同款匹配难；SaaS 贵
- **信号来源**：
  - 既有职位表（A1–A13）汇总于 \`/workspace/upwork/demo_requirements_scraper_leadgen.md\`（例：Automate price monitoring $150；Playwright→Sheets $35；catalogue $300；business-for-sale monitor $200）
  - Prisync：MAP 锁在 **$399/mo** Platinum；API +20%；URL 变更需手维 — https://altosight.com/prisync-review/
- **预估单价区间**：Upwork 公开单常见 $150–$300 fixed 起（占位价常见）；SaaS 替代叙事按年费差报价
- **适合作品集？** Y — 已有 Retail Price & MAP Watch
- **与现有案例关系**：加强（告警降噪 + 匹配说明）
- **优先级**：P0
- **状态**：已有案例

### D2. 可重复数据管道（非一次性 scrape）
- **需求名称**：Repeatable collection：new/changed/inactive + provenance
- **谁在买**：数据/市场情报买方
- **痛点**："This is not a one-time scraping project"；要去重、来源追踪、失败可恢复
- **信号来源**：职位 URL（既有调研已抓）：https://www.upwork.com/freelance-jobs/apply/Data-Scraping-Engineer-Repeatable-Data-Collection-Pipeline_~022101790739299336473/ （本轮 WebFetch 遇 CF interstitial；预算 $200 等字段见既有笔记）
- **预估单价区间**：$200 fixed（既有笔记；本轮未复抓成功 → 标注依赖既有抓取）
- **适合作品集？** Y — 加强监控 demo 的「diff 运行」模式
- **与现有案例关系**：加强
- **优先级**：P0
- **状态**：已有案例

### D3. Playwright 动态站 → Google Sheets 日更
- **需求名称**：Playwright scraper + Sheets export (service account)
- **谁在买**：要进已有表格、不要自建后台的运营
- **痛点**：反爬、分页、每日干净 CSV 行
- **信号来源**：既有笔记职位 *Python Playwright Dynamic Scraper & Google Sheets Exporter* — https://www.upwork.com/freelance-jobs/apply/Python-Playwright-Dynamic-Scraper-Google-Sheets-Exporter_~022107436617600555241/
- **预估单价区间**：$35 fixed（既有笔记；可能占位）
- **适合作品集？** Y — 沙盒站 + Sheets 导出录屏
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：待做案例（小增强）

### D4. 公开目录/地图类线索采集（合规）
- **需求名称**：Public business directory / Maps-style lead list → CSV
- **谁在买**：本地获客团队
- **痛点**：要可筛选样本 + 去重；不要买脏库
- **信号来源**：既有 Lead Engine 调研（CSLB 官方公开 CSV 等）— \`demo_requirements_scraper_leadgen.md\`；搜索另见 realtor scraping 岗 URL（未本轮详抓）
- **预估单价区间**：待核实
- **适合作品集？** Y — 已有 Contractor Lead Engine
- **与现有案例关系**：加强
- **优先级**：P0
- **状态**：已有案例

### D5. 列表变更监控 + Telegram 仅新项告警
- **需求名称**：Listing monitor；alert only on new/unique items
- **谁在买**：房产/拍卖/二手监控买家
- **痛点**：重复告警噪音；要稳定常驻
- **信号来源**：既有笔记 *Web Scraping and Telegram Alert Automation* $50 — https://www.upwork.com/freelance-jobs/apply/Web-Scraping-and-Telegram-Alert-Automation_~022097987030090589789/
- **预估单价区间**：$50 fixed（既有笔记）
- **适合作品集？** 并入 D1 告警模块
- **与现有案例关系**：加强
- **优先级**：P1
- **状态**：已有案例（模块）

### D6. 零售全量目录抽取（无公开 API）
- **需求名称**：Retail product catalogue extraction（prices, packs, nutrition…）
- **谁在买**：欧洲零售情报/比价
- **痛点**：重复商品、缺字段、随时间变化；要可重复流程
- **信号来源**：既有笔记 $300 — https://www.upwork.com/freelance-jobs/apply/Developer-with-Experience-Retail-Product-Catalogue-Extraction_~022105318608307945877/
- **预估单价区间**：$300 fixed（既有笔记）
- **适合作品集？** 部分 — 沙盒目录即可，不必真站
- **与现有案例关系**：加强 D1
- **优先级**：P1
- **状态**：仅投标不建站 / 用 D1 投标

### D7. 领域规则报表（例：清仓价尾数）
- **需求名称**：Domain-rule analytics on scraped prices
- **谁在买**：零售分析
- **痛点**：价值在业务规则（如价格以 1 结尾=清仓），不在「会爬」
- **信号来源**：既有笔记 *Help Automate an analytic report* — https://www.upwork.com/freelance-jobs/apply/Web-Scraping-Help-Automate-analytic-report_~022105546845962767174/
- **预估单价区间**：hourly（既有笔记未固定价）
- **适合作品集？** Y — 在 MAP Watch 加「规则引擎」页
- **与现有案例关系**：NEW 模块
- **优先级**：P1
- **状态**：待做案例

### D8. 竞品价驱动动态定价公式对接
- **需求名称**：Feed competitor prices into pricing formula / ERP
- **谁在买**：分销商（例：牙科耗材）
- **痛点**：监控只是输入；要 KVI/CORE 分层与公式价
- **信号来源**：既有笔记 $1,000 — https://www.upwork.com/freelance-jobs/apply/Automate-Sales-Policy-and-Dynamic-Pricing_~022099456786312275549/
- **预估单价区间**：$1,000 fixed（既有笔记）
- **适合作品集？** 弱（ERP 难演示）→ 用假公式 + CSV 出口说明
- **与现有案例关系**：NEW
- **优先级**：P2
- **状态**：仅投标不建站

### D9. 公开 API / 半公开接口适配（合法）
- **需求名称**：Integrate public APIs；document rate limits；no auth bypass
- **谁在买**：要稳定管道的数据买家
- **痛点**：站点无官方 API 时用公开 HTML；有 API 则优先 API
- **信号来源**：行业实践 + D2/D6 职位表述（优先可维护管道）
- **预估单价区间**：待核实
- **适合作品集？** Y — README「API first / scrape fallback」决策树
- **与现有案例关系**：加强
- **优先级**：P2
- **状态**：仅投标不建站（文档化）

### D10. 运营看板（CSV→仪表盘）
- **需求名称**：Dashboard over scraped/monitored CSV feeds
- **谁在买**：不愿接复杂 API、每周丢 CSV 的卖家
- **痛点**：多渠道 CSV 汇总
- **信号来源**：既有笔记 Power BI multichannel 岗 — https://www.upwork.com/freelance-jobs/apply/Power-dashboard-for-multichannel_~022103128095703162024/
- **预估单价区间**：待核实
- **适合作品集？** Y — 轻量 Next 图表读静态 CSV（免费托管）
- **与现有案例关系**：NEW（可挂在 MAP Watch 前台）
- **优先级**：P1
- **状态**：待做案例

### Keyword bank（D · Upwork 搜索）
\`web scraping\`, \`Playwright\`, \`price monitoring\`, \`MAP compliance\`, \`Google Sheets\`, \`lead generation\`, \`data pipeline\`, \`product catalogue extraction\`, \`Telegram alert\`, \`Apify\`, \`BeautifulSoup\`, \`Puppeteer\`, \`competitor price\`, \`public data\`, \`CSV export\`

---

## 推荐优先做的案例（Top 5）

| # | 案例标题 | 为何现在做 | 工作量 | 强化哪张服务卡 |
|---|----------|------------|--------|----------------|
| 1 | **AI App Security & Launch Audit（漏洞沙盒 + 报告模板）** | Upwork 已有 $750 Claude Code 审计单；目录竞品 $150–$450；与 NoteFlow 同族但更高客单 | M | (2) Fix & launch |
| 2 | **Booking + FAQ Chatbot（SiteBot × 日历）** | $300 洗车预订聊天 + evergreen 预订需求；直接叠现有 SiteBot | M | (1) AI/自动化 + 沾 A |
| 3 | **Support Triage Agent（分类 → 批准写 CRM）** | $700 RAG+Agent 单把 triage/CRM 写进 scope；差异化「可批准写入」 | M | (1) AI/自动化 |
| 4 | **Static Form → Sheets/Slack（Formspree 替代）** | 官方 50 次/月免费墙清晰；S 工作量；承接落地页线索 | S | (1) AI/自动化 |
| 5 | **Price Watch：规则引擎 + Diff 运行说明** | 已有爬虫案例；Upwork/Prisync 痛点都在「有意义变化 / 匹配 / 贵」；强化即可投标 | S–M | (3) 定制/爬虫 |

---

## 暂不做 / 需谨慎

| 项 | 原因 |
|----|------|
| 绕过登录墙 / CAPTCHA 滥用 / 私有数据 | 违法或违 ToS；职位若要求则拒 |
| Upwork 自动投标/刷 Connects 机器人 | 平台风险；且自用监控≠代客违规刷量 |
| 完整 Shopify/GHL 深度插件托管 Demo | 难免费稳定演示；改为截图+投标话术 |
| 纯视觉设计/品牌重塑 | 非他的定位；机会成本高 |
| 极低价 $5–$15「整站预订」占位单 | Connects 浪费；除非邀请 |
| Voice AI 电话坐席全栈 | 托管/合规/号码成本高，超出免费 GitHub+Vercel 约束 |
| 「反向工程」被写成破解付费 API | 仅接受公开数据/官方 API 叙事 |
| Reddit 正文深度引用 | reddit.com 常 block；需快照或登录；未核实正文勿当报价依据 |

---

## 源访问阻塞记录（维护备忘）

| 源 | 状态（2026-10-09） |
|----|-------------------|
| Upwork 职位 apply URL | WebFetch **部分可读**（JSON-LD + Activity）；部分返回 CF “Enable JavaScript” |
| Upwork 搜索/类目 HTML via curl | **HTTP 403** Cloudflare challenge |
| Reddit 帖正文 | 常「blocked by network security」；可用标题/URL 或第三方快照 |
| Formspree / n8n community / GitHub issues / Prisync 评测站 | 可读 |
| 既有本地调研 | \`/workspace/upwork/demo_requirements_scraper_leadgen.md\`, \`checked_2026-10-09.txt\`, \`portfolio_entries.md\` |

---

## 变更日志

| 日期 | 变更 |
|------|------|
| 2026-10-09 | 初版：四桶需求 backlog + Top5 + 关键词库；基于公开 WebFetch/Search 与既有 upwork 调研笔记 |
| 2026-10-09 | 启动第一批通用模板 T1–T4（见 \`/workspace/upwork/templates_plan.md\`）；待建仓 \`portfolio-templates\` |
| 2026-10-09 | T1–T4 模板已合并 PR#1 并部署 Vercel 项目 tpl-landing-waitlist / tpl-form-to-sheet / tpl-booking-calendar / tpl-launch-audit-report |
`},
{"id": "doc-smb", "title": "中小企业需求聚类", "theme": "市场研究", "date": "2026-10-17 18:50", "summary": "海外 SMB 软件/开发支出聚集区与价格带出处。", "tags": ["SMB", "Fiverr", "Trends"], "source": "", "path": "upwork/smb_demand_clusters.md", "related_docs": [], "content": `# 海外 SMB / 个体户软件与开发支出聚集区（US/UK/AU/EU 自由职业市场）

> 调研日期：2026-10-11（Asia/Shanghai）  
> 范围：小企业、个体户、solo founder 在自由职业平台上的 **软件/开发相关** 花费聚集方向  
> 原则：**价格带仅写有出处的数字；无出处不编造预算**  
> 输出路径：\`/workspace/upwork/smb_demand_clusters.md\`

---

## 0. 数据来源与可达性

| 代号 | 来源 | 状态 / 说明 |
|---|---|---|
| **[FIVERR-BTI]** | Fiverr Business Trends Index 2026（新闻稿转载）https://www.marketscreener.com/news/businesses-race-to-hire-claude-code-specialists-as-demand-surges-938-ce7f5cdad98cfe21 ；官方页 https://www.fiverr.com/resources/guides/reports/business-trends-index-june-2026 | 官方页被 bot 墙拦截；数字以 MarketScreener 全文为准。比较窗口：2025-05–10 vs 2025-11–2026-04 |
| **[FIVERR-GIG]** | GigBuyerGuide 对 Fiverr Software Development 类目抽样 https://gigbuyerguide.com/hire/software-development/ | 2026-09-29 人工抽 37 个高评 Gig |
| **[FIVERR-N8N]** | remoteaitools 对 Fiverr n8n 卖家指南 https://remoteaitools.com/how-to-sell-n8n-automation-services-on-fiverr/ | 引用 Fiverr BTI；另给出其观察到的项目价区间（第三方，非 Fiverr 官方） |
| **[FIVERR-CAT]** | Fiverr Programming & Tech 类目页 https://www.fiverr.com/categories/programming-tech/ | 本机 fetch 被 PerimeterX 拦截；类目结构来自搜索摘要与公开描述 |
| **[UPWORK-IDS]** | Upwork In-Demand Skills 2026 https://www.upwork.com/research/in-demand-skills-2026 ；新闻稿 PDF https://investors.upwork.com/node/12681/pdf | 基于 2025 全年 US 需求侧已完成合同收入 |
| **[UPWORK-DEC]** | Upwork December Monthly Hiring Report https://www.upwork.com/press/releases/upwork-december-monthly-hiring-report-operational-roles-rise-as-businesses-brace-for-macro-uncertainty-in-2026 | SMB 运营岗招聘信号 |
| **[FL-DEMAND]** | engineeringrates 对 Freelancer.com 公开项目快照 https://engineeringrates.com/research/freelance-demand/ | 2026-03；29 类搜索 → 212 个去重项目 |
| **[FL-HIRE]** | Freelancer.com Software Development 招聘页 https://www.freelancer.com/hire/software-development | 用例描述（非量化） |
| **[REDWATER]** | Redwater「State of the Upwork」自动化市场 2026-08 https://upwork.redwaterrev.com/archive/2026-08 | Zapier/n8n/Make + CRM 职位量与时薪 |
| **[UPHUNT]** | UpHunt 工具轮换数据 https://uphunt.io/blog/where-upwork-work-went-2026 | 2025-01→2026-04，约 297 万职位 |
| **[VIBE]** | tryvibeworker WP/Shopify/Webflow 占比 https://tryvibeworker.com/blog/wordpress-vs-shopify-vs-webflow-upwork-jobs | 2026-09 Web 类职位标题提及率 |
| **[IH-AUTO]** | Indie Hackers：solo founder 自动化心智负担 https://www.indiehackers.com/post/the-real-cost-of-automation-for-solo-founders-ff981f1f72 | 定性痛点 |
| **[IH-HIRE]** | Indie Hackers：AI 原型做到 80% 后需要真人修上线（搜索摘要）https://www.indiehackers.com/post/freelance-hiring-sucks-is-there-a-better-way-tOJImNNiyAoxfy1Gdoqs | 本机全文被 Cloudflare 拦；仅用公开摘要中可核对的论断 |
| **[REDDIT-SMB]** | r/smallbusiness 自动化/建站讨论（搜索摘要）如 https://www.reddit.com/r/smallbusiness/comments/1nq5j7r/should_i_hire_a_freelancer_for_business_automation/ 、https://www.reddit.com/r/smallbusiness/comments/1jdz657/building_an_online_startup_advice_on_using/ | Reddit JSON/页面常被拦；主题来自搜索摘要 |
| **[HUZHAN]** | 互站任务大厅首页 https://task.huzhan.com/ （2026-10-11 抓取） | \`www.huzhan.com\` 与多数 \`/menu/@1_*\` 返回 **403**；首页可得。用户指定的 **menu 1_7** 未能打开，无法确认是否对应「软件」子类 |

**互站交叉核对说明：** 首页 meta 与列表标签显示任务类型以 **软件开发、网站开发、二次开发、数据采集、移动端开发** 为主；首页可见标签计数约：软件开发 14、移动端 6、网站开发 5、二次开发 5、数据采集 4（单页快照，非全站总量）。样例标题含：小程序/H5、PHP SaaS 二开、协议/采集、量化策略、短信/支付对接、修复未完成系统等。与海外 SMB「建站 + 二开 + 采集 + 自动化」有重叠，但互站样例中协议逆向、抢票、社交协议等偏站长/灰产向，**不宜直接当海外 SMB 需求镜像**。

---

## 1) Top 需求集群（SMB / Sole Prop 软件·开发支出）

以下 10 个集群按「海外 SMB 实际花钱意愿 × 平台证据密度」排列。价格带只写有出处的数字。

### 1. AI 集成 / LLM 功能嵌入现有业务
- **谁买：** 已有站点/CRM/内部流程的 SMB、想「把 AI 接到现有工具」的创始人  
- **典型单：** AI Integration、把 GPT/Claude 接到 CRM/工单/文档流程、RAG/抽取字段、AI chatbot  
- **价格带（有出处）：** Upwork Coding 增速 AI Integration **+178%**、AI Chatbot **+71%** [UPWORK-IDS]；Fiverr Programming & Tech 中 AI 相关搜索 **+94%** [FIVERR-BTI]；Redwater 自动化池中 OpenAI/GPT、Claude 提及量居前（平台集 534 / 507，重叠计数）[REDWATER]  
- **为何买：** 官方报告明确：增长来自「在现有工作中应用 AI」，而非纯造模型 [UPWORK-IDS]

### 2. 工作流自动化（n8n / Zapier / Make + 自定义代码）
- **谁买：** 人力少、工具碎片多的 SMB / solo（CRM、表格、邮件、Slack、发票之间手工搬运）  
- **典型单：** Form→CRM→Slack；Zapier→n8n 迁移；错误处理与重试；「半坏掉的自动化修好」  
- **价格带（有出处）：** Fiverr 搜索 **n8n AI automation +125%** [FIVERR-BTI]；GigBuyerGuide：高评软件 Gig 起步中位 **$100**（中间半区 $40–$195），真实项目常落在 **$200–$5,000**；层级示意 Basic **$200–$500** / Standard **$500–$2,000** / Premium **$2,000–$5,000** [FIVERR-GIG]；第三方指南写 Fiverr 上 AI/automation 项目常见约 **$75–$520**（非官方）[FIVERR-N8N]；Upwork 自动化样本中位时薪约 **$32.50**（2026-08）[REDWATER]；Freelancer.com 快照 Automation 固定价中位 **$140**（n=11）[FL-DEMAND]  
- **为何买：** Indie Hackers 反复提到：工具各管一截，创始人成了 glue，需要有人「端到端接好」[IH-AUTO]；Reddit SMB 讨论是否雇人做自动化时，共识是「先画流程、要文档、要可维护」[REDDIT-SMB]

### 3. 网站 / CMS 维护与改造（Shopify 升、WordPress 存量大）
- **谁买：** 本地店、电商、服务型小企业（已有站，要改版、修 bug、接支付/SEO）  
- **典型单：** Shopify 主题/App/集成；WordPress 修错、迁移、Woo 定制；落地页  
- **价格带（有出处）：** Upwork 2026-09 Web 职位标题中 Shopify **137/1000**、WordPress **125/1000**（约 1999 / 1824 条）[VIBE]；UpHunt：Shopify 月增约 **+385** 职位，WordPress 月减约 **-2162**（相对 2025-01）[UPHUNT]；Freelancer 热门竞标含 WordPress revamp、Woo 定制等，预算样例常见 **USD 30–250** 到 **CAD 25–50/hr** 等（见 [FL-DEMAND] 表）  
- **为何买：** SMB 多数已有站；花钱点是「改好/接好」而非从零造新产品 [VIBE][UPHUNT]

### 4. 电商站与店内自动化（Shopify / 订单 / 营销自动化）
- **谁买：** DTC、小电商、代理机构服务的店主  
- **典型单：** Shopify 定制、订单同步、弃购、库存/物流 webhook、电商管理运营岗（偏运营但常带集成）  
- **价格带（有出处）：** Upwork Customer Support 增速 **Ecommerce Management +130%** [UPWORK-IDS]；Coding Top10 含 Ecommerce Website Development [UPWORK-IDS]；Freelancer E-commerce 固定价中位 **$500**（n=5）[FL-DEMAND]  
- **为何买：** 店要开着赚钱；集成/自动化直接省人工 [UPWORK-IDS][VIBE]

### 5. AI 聊天机器人 / 客服与线索机器人
- **谁买：** 服务型 SMB、本地业务、SaaS 早期产品  
- **典型单：** 网站客服 bot、预约/线索资格筛选、WhatsApp/短信接待（常要接日历/CRM）  
- **价格带（有出处）：** AI Chatbot Development **+71%** [UPWORK-IDS]；Freelancer Chatbot 固定价中位 **$500**（n=5）[FL-DEMAND]；Fiverr AI voice agents 搜索 **+49%** [FIVERR-BTI]  
- **为何买：** 人工客服贵；「客户看得见」的 AI 应用增速甚至快过纯后端 [FIVERR-BTI]

### 6. 「修完 / 上线 / 接手」AI 或半成品 Web 应用（含 vibe coding 产物）
- **谁买：** 用 Lovable / Cursor / Replit / Claude Code 做到约 80% 的 founder；需要 auth、支付、稳定 DB、部署的人  
- **典型单：** Fix bug、完成 MVP、接 Stripe、上线生产、接手维护  
- **价格带（有出处）：** Fiverr Claude Code 专家搜索 **+938%**；vibe coding **+61%** [FIVERR-BTI]；Freelancer Bug fixes 固定价中位 **$140**（n=6）、MVP **$500**（n=7）、AI app **$500**（n=10）[FL-DEMAND]；IH 摘要：AI 易出 demo，难出可上线产品，才会雇人 [IH-HIRE]  
- **为何买：** 原型便宜，生产贵——这是 2026 最清晰的「开发支出新入口」之一 [FIVERR-BTI][IH-HIRE][UPHUNT]

### 7. 爬虫 / 数据采集 / 浏览器自动化
- **谁买：** 电商比价、线索收集、竞品监控、运营要批量数据的 SMB；部分营销代理  
- **典型单：** 站点/地图线索抓取、价格监控、Playwright 流程自动化、导入 CMS  
- **价格带（有出处）：** Upwork Coding Top10 含 **Scripting & Automation**；Data 类含 **Data Extraction** [UPWORK-IDS]；Freelancer Automation / Internal tool 固定价中位偏低（Automation **$140** n=11；Internal tool **$82** n=14）[FL-DEMAND]；GigBuyerGuide 明确 Software 类目覆盖 scrapers [FIVERR-GIG]  
- **为何买：** 数据录入贵；Reddit/创业帖常见「想自动抓再发社媒/入库」类诉求 [REDDIT-SMB]；互站「数据采集」亦高频出现 [HUZHAN]

### 8. API 集成与内部小工具（仪表盘、提醒、跨系统同步）
- **谁买：** 已有 2+ SaaS 的小团队；不愿买全套企业套件  
- **典型单：** API integration、dashboard、Google Sheets ops 层、提醒/到期追踪、PDF→表格  
- **价格带（有出处）：** Freelancer API integration 固定价中位 **$500**（n=6）；Dashboard **$450**（n=6）[FL-DEMAND]；Upwork Scripting & Automation 在 Coding Top10 [UPWORK-IDS]  
- **为何买：** 与集群 2 重叠，但更偏「写一点代码」而非纯 no-code；SMB 付的是「省时间」[IH-AUTO]

### 9. 全栈 / 小型 Web 应用与 MVP（定制但范围可控）
- **谁买：** 早期创业者、想做内部 SaaS 的个体；预算有限的产品试验  
- **典型单：** Full-stack、Next/React、小 CRM、会员站、管理后台  
- **价格带（有出处）：** Upwork Coding 需求量第一：**Full Stack Development** [UPWORK-IDS]；Freelancer Web app / MVP / SaaS 固定价中位多为 **$500**（各 n≈6–10）[FL-DEMAND]；Fiverr 软件类真实项目常 **$200–$5,000** [FIVERR-GIG]  
- **为何买：** 仍需人交付；但竞争极烈、低价单多，需挑「范围清晰」的单 [FL-DEMAND][UPWORK-IDS]

### 10. 运营向「人+软件」打包（VA/项目协调旁的轻技术）——旁支，非纯开发主战场
- **谁买：** 宏观不确定时收缩的 SMB（尤其 2025-12 报告）  
- **典型单：** Virtual assistance、project management、bookkeeping；常夹杂表格/简易自动化  
- **价格带（有出处）：** SMB 对 Project Management **+70% MoM**、VA **+18%**、Accounting **+9%**（2025-12）[UPWORK-DEC]  
- **为何买：** 先稳住执行，再谈大系统；对纯开发者是**线索入口**（客户常在 VA 流程上需要一点脚本），不是主产品线 [UPWORK-DEC]

---

## 2) 哪些适合 Fiverr Gig，哪些适合 Freelancer / Upwork 项目竞标

| 集群 | Fiverr（包装成 Gig / 套餐） | Freelancer.com（项目竞标） | Upwork（岗位/合同，作对照） |
|---|---|---|---|
| AI 集成 / Chatbot | **强**：固定套餐（单 bot、单集成）；起步价可见 [FIVERR-GIG] | **中**：Chatbot/AI app 有单，中位预算约 $500，竞标人数中等 [FL-DEMAND] | **强**：增长最快技能之一 [UPWORK-IDS] |
| n8n/Zapier 自动化 | **极强**：搜索 +125%；适合 Basic/Standard/Premium 三档 [FIVERR-BTI][FIVERR-N8N] | **中偏弱**：Automation 中位仅 $140 且竞标多 [FL-DEMAND] | **强**：Zapier/n8n 月千级职位量级 [REDWATER] |
| Shopify / WP 改站 | **强**：修 bug、小改版、主题包 | **强**：WP/PHP 竞标极多（见热门项目表）[FL-DEMAND] | **强**：体量最大的 Web 平台词 [VIBE] |
| 电商集成 | **中强**：单店集成包 | **中**：E-com 中位 $500 [FL-DEMAND] | **强** |
| 修完/上线 AI 半成品 | **中**：可做「Fix & launch AI app」Gig | **强**：Bug fix / MVP / AI app 搜索活跃 [FL-DEMAND] | **强**：Lovable/Cursor 相关职位在涨但绝对量仍小 [UPHUNT][VIBE] |
| 爬虫 / 浏览器自动化 | **中**：可做固定字段交付的 scraper Gig | **中**：内部工具/自动化预算偏低、竞标相对少一些（Internal tool 中位 bids 26）[FL-DEMAND] | **中强**：Scripting & Data Extraction [UPWORK-IDS] |
| 定制全栈 MVP | **弱–中**：范围易失控，Fiverr 固定价易扯皮 | **中**：有单但竞标激烈（Web app 中位 bids 64）[FL-DEMAND] | **强但拥挤**：Full Stack 需求第一 [UPWORK-IDS] |
| 大型 CRM/SaaS 从零 | **弱** | **有**：可见 SME CRM 招标（例 $250–750）https://www.freelancer.com/projects/crm/crm-application-development | **中**：范围大、适合分阶段 |

**简要规则：**
- **Fiverr**：结果可预定义、1–2 周内可验收、可截图/录屏证明 → Gig。  
- **Freelancer**：客户已写 brief、要比价竞标、预算常写死且偏低 → 项目标；适合 bugfix、明确集成、小 MVP。  
- **Upwork**（对照）：持续合同、时薪、多阶段 AI/自动化 → 更适合 Pengfei 主战场（与既有 \`niche_research.md\` 一致）。

---

## 3) 不建议追的方向（冷 / 过窄 / 结构下行）

| 方向 | 原因（有出处） |
|---|---|
| **纯 WordPress「从零建站」当主定位** | UpHunt：WP 月减约 2162；基础建站被 AI/模板吸收 [UPHUNT]。存量维修仍可接，但不宜当唯一品牌。 |
| **Webflow / Framer / Bubble 专家化** | 2026-05→09 在 Web 职位中的提及率下降（Webflow 23→15 /1000 等）[VIBE] |
| **仅 Lovable/vibe-coding、无生产交付** | Lovable 在 Upwork Web 职位中仍很小（2026-09 约 63 条）[VIBE]；客户要的是「上线」，不是再做一个 demo [IH-HIRE][FIVERR-BTI] |
| **纯 ML 研究 / 训练模型** | Freelancer ML 固定价中位仅 **$140**（n=10）且竞标相对少，偏实验单 [FL-DEMAND]；Upwork 增长在「AI 应用」不在造模型 [UPWORK-IDS] |
| **区块链 / 代币 / 泛 Web3** | Fiverr 类目有 Blockchain，但本次 SMB 证据源（Upwork Top10、Freelancer 软件快照、Reddit/IH）**未显示**其为 SMB 主支出；属投机向，跳过 |
| **游戏开发当 SMB 主线** | 与小企业日常营收工具弱相关；Freelancer/Upwork SMB 叙事不集中于此 |
| **PM 工具 only（Trello/Asana/ClickUp 配置）** | Redwater：Trello 等近乎个位数–低双位数职位，结构下行 [REDWATER] |
| **Excel/表格 only 无集成** | 长期走弱；「excellent」等子串还造成计数噪音 [REDWATER] |
| **互站上的协议逆向 / 抢票 / 社交协议灰区** | 互站首页可见大量此类标题 [HUZHAN]；与合规海外 SMB 市场不对齐，且平台与支付风险高——**不 chase** |
| **超低价全包「完整平台 $150」类** | 与 GigBuyerGuide / Freelancer 中位现实不符；范围必然溃败 [FIVERR-GIG][FL-DEMAND] |

---

## 4) 给 Pengfei 的 3 个推荐作品集 Demo / Gig

对齐技能：**AI 自动化、爬虫、修复/上线 AI 应用**（与现有 \`portfolio_entries.md\` 方向一致）。

### Demo / Gig A — AI 工作流自动化（主推 Fiverr Gig + Upwork Catalog）
- **标题方向：** \`n8n / API automation: CRM + Sheets + Slack + LLM extract\`  
- **交付物：** 1 条可运行工作流（表单/邮件 → 结构化字段 → Google Sheets/CRM → 提醒）；含错误处理与 60–90s 录屏  
- **对应集群：** 1、2、8  
- **证据：** n8n 搜索 +125% [FIVERR-BTI]；AI Integration +178% [UPWORK-IDS]；Fiverr 软件起步中位 $100、项目常 $200–$5k [FIVERR-GIG]  
- **可复用现有资产：** AI Document Extractor（PDF/邮件 → Sheets + n8n）— 见 \`portfolio_entries.md\`

### Demo / Gig B — 爬虫 / 监控小产品（Fiverr 固定字段包 + Upwork 提案）
- **标题方向：** \`Scrape & watch: leads or prices to Google Sheets + alerts\`  
- **交付物：** 明确字段表、去重、定时跑、失败告警；合法/ToS 友好的演示站  
- **对应集群：** 7、8  
- **证据：** Scripting & Automation / Data Extraction 在 Upwork Top 列表 [UPWORK-IDS]；Software 类目含 scrapers [FIVERR-GIG]；Freelancer 上 automation/internal tool 竞标相对不那么夸张 [FL-DEMAND]  
- **可复用现有资产：** Retail Price & MAP Watch / Contractor Lead Engine — 见 \`portfolio_entries.md\`

### Demo / Gig C — Fix & Launch AI App（主推 Upwork / Freelancer 项目，Fiverr 可做「audit + fix」套餐）
- **标题方向：** \`Fix & launch your Lovable / Cursor / Claude Code app (auth, DB, deploy)\`  
- **交付物：** 付费小审计清单 → 修阻塞 bug → 部署到客户云 → README；强调「从 80% demo 到可收款」  
- **对应集群：** 6、9  
- **证据：** Claude Code +938%、vibe coding +61% [FIVERR-BTI]；IH「AI 到生产墙」[IH-HIRE]；Freelancer Bug fix / MVP / AI app 有稳定搜索量 [FL-DEMAND]；UpHunt：新工具涨但客户仍要人补生产缝 [UPHUNT]  
- **可复用现有资产：** AI App Launch Rescue (NoteFlow) — 见 \`portfolio_entries.md\`

**组合逻辑：** A 吃增长最快的「AI+自动化」搜索；B 用文字即可成交、沟通负担低；C 卡位 2026 特有的「AI 半成品抢救」蓝海，避开纯从零建站红海。

---

## 5) 平台映射一览（速查）

\`\`\`
Fiverr Gig 优先：     自动化套餐 | Chatbot | WP/Shopify 小修 | 固定字段爬虫
Freelancer 竞标优先： Bugfix | 明确 API 集成 | 小 MVP | WP 改版
Upwork 主战场：       AI Integration | n8n/Zapier | 修完上线 | 多阶段爬虫/管道
不要主攻：           纯 WP 新站 | Webflow/Bubble | 纯 ML | 链上 | 互站灰协议
\`\`\`

---

## 6) 局限与诚实缺口

1. Fiverr 类目页与 BTI 官网对本机 IP **403/挑战页**；趋势数字依赖新闻稿转载与第三方导读。  
2. Reddit / 部分 Indie Hackers 正文常被拦，主题依赖搜索摘要，未逐帖核实评论区预算。  
3. Freelancer 价格为 **2026-03 公开标价中位**，且 USD 样本 n 较小；大量非 USD 标未换算 [FL-DEMAND]。  
4. 互站 **menu 1_7 未可达**；仅任务大厅首页交叉核对。  
5. 未发明任何「建议报价」——若某处未写数字，即表示公开源未给出可靠 SMB 预算。

---

## 7) 关键已有工作区文档

- \`/workspace/upwork/niche_research.md\` — Upwork 向细分量化（与本文互补；本文补 Fiverr/Freelancer/Reddit/IH/互站）  
- \`/workspace/upwork/portfolio_entries.md\` — 可直接映射到第 4 节三个 Demo
`},
{"id": "doc-tplplan", "title": "模板计划", "theme": "模板与交付", "date": "2026-10-17 18:50", "summary": "可复用高影响模板批次与验收标准。", "tags": ["模板", "Vercel"], "source": "", "path": "upwork/templates_plan.md", "related_docs": [], "content": `# 通用高影响模板计划（2026-10-09）

目标：先做可复用「模板」，不是完整定制业务。每个都能离线演示、免费部署（GitHub + Vercel）、挂到个人站服务卡上。

仓库建议（一个 monorepo）：\`gaopfEditer/portfolio-templates\`（Private 先建，做好再公开）

## 第一批（先做）

| ID | 模板 | 对应需求 | 服务卡 | 工作量 | Demo 形态 |
|----|------|----------|--------|--------|-----------|
| T1 | \`landing-waitlist\` | A1 + A10 | (1) | S | 高转化落地页 + 等待列表表单 → webhook（Sheets/Slack/邮件） |
| T2 | \`form-to-sheet\` | A10 / Top4 | (1) | S | 纯 API：静态站表单 POST → Google Sheets 行 + 可选 Slack；含假数据模式 |
| T3 | \`booking-calendar\` | A3 + B6 骨架 | (1)/(3) | M | 周历选时段 + 确认页（无真支付也可演示）；可后续挂 SiteBot |
| T4 | \`launch-audit-report\` | C5/C6 / Top1 | (2) | M | Before/After 漏洞沙盒 + 可打印审计报告页（升级 NoteFlow 叙事，独立模板） |

## 第二批（模板稳定后再做）

| ID | 模板 | 对应需求 | 说明 |
|----|------|----------|------|
| T5 | \`support-triage\` | B2 / Top3 | 工单分类 → 人工批准 → 写 CRM（假 CRM） |
| T6 | \`expert-directory\` | A2 | 可搜索专家目录 + 会员门禁假数据 |
| T7 | \`price-rules-diff\` | D1 / Top5 | 在现有 price-monitor 上加规则引擎说明页（也可 PR 进旧仓） |

## 统一约束

- 英文 UI 默认；可加简单 i18n 但不阻塞
- 标明 **Portfolio demo template**，不写客户名/评价/营收
- 不编造指标；截图放各包 \`docs/screenshots/\`
- 免费档：无付费 API 也能跑（mock / 假数据开关）
- 含 \`README.md\`（怎么跑、怎么改成客户项目）、\`vercel.json\` 或框架默认部署
- 不自行部署到用户 Vercel；写好配置，由协调者部署

## 验收（每个模板）

1. \`README\` 能 5 分钟本地跑通
2. 一条清晰演示路径（3–5 步）
3. 至少 1 张真实截图
4. 对应需求表条目状态改为「已有案例」或「模板已出」
`},
{"id": "doc-screened", "title": "晚间筛选短名单 2026-10-14", "theme": "Upwork 调研", "date": "2026-10-17 18:50", "summary": "按技能契合排序的可投开放单短名单（当日晚间）。", "tags": ["筛选", "短名单", "Upwork"], "source": "", "path": "upwork/screened_2026-10-14_evening.md", "related_docs": [], "content": `# Upwork 晚间筛选短名单 — 2026-10-14（UTC+8 约 22:30）

- **对象**：鹏飞（AI落地 / n8n·Zapier·Make+定制 / 爬虫管道 / Playwright·CDP / 后端API / 扩展 / 支付webhook / 自有账号会话保活）
- **方法**：本地笔记（\`checked_2026-10-14.txt\`、\`upwork_titles_budgets.md\`、\`requirements_backlog.md\`、\`sent_jobs.txt\`）→ WebFetch 公开类目页 → WebSearch 索引 apply URL → WebFetch JobPosting。**未登录、未投标、未绕过 Cloudflare**。
- **窗口偏好**：约近 7 天（以页面 \`datePosted\` 为准）；更早但强匹配者标「偏旧」。
- **说明**：提案数带 ✅ 为页面实测；「估」为定性估计。预算 USD。难度：低/中/高。排序 = 建议投标优先级（技能契合 × 可写性 × 竞争可打），**不是**「预算最高」。

今日早/午例行硬筛（提案&lt;~20 + ≥$300）QUALIFIED=0；本短名单按**技能契合**放宽，保留可投的真实开放单。

---

## 短名单（10 条，按优先级）

### 1. ⭐ n8n Automation Developer for United Rentals Scraper
- **URL**：https://www.upwork.com/freelance-jobs/apply/n8n-Automation-Developer-for-United-Rentals-Scraper_~022109823511161499480/
- **预算**：$150 fixed
- **提案**：✅ 20–50｜面试中 1｜客户昨日查看
- **发布**：2026-10-13 09:48 UTC+8（约 1 天）
- **难度**：中｜**竞争**：中偏低（面试仅 1，属「修现有管线」小众）
- **为何契合 / 是否优先**：**强烈优先**。现有栈即 n8n Cloud + Node Playwright（playwright-extra stealth）+ Cloudflare Tunnel；要稳定 batch / 修 530·1033 或迁低成本云，并保证图库完整——正对 Playwright/CDP、会话保活、自托管隧道。预算小但交付快、易拿五星；提案强调「sidecar 稳定性 + 重试/队列」而非重写。China OK。

### 2. ⭐ n8n Automation Build: Course Registration, Payments & Admin（Clinical Training Academy）
- **URL**：https://www.upwork.com/freelance-jobs/apply/n8n-Automation-Build-Course-Registration-Payments-Admin-for-Clinical-Training-Academy_~022109998575924600733/
- **预算**：Hourly，30+ hrs/周，6+ 月（公开页无美元时薪；需 **EUR 抬头纸正式报价**）
- **提案**：✅ 20–50｜面试 0
- **发布**：2026-10-13 21:23 UTC+8（约 1 天）
- **难度**：中高｜**竞争**：中（需公司抬头报价，过滤掉多数散户）
- **为何契合 / 是否优先**：**强烈优先**。WordPress 表单 → 人工筛选 → Stripe 分期 → GCal/Gmail → Xero 发票，全走 n8n——主服务卡 + **支付网关 webhook** 一条龙。注意：中间人代询价、可能 20 分钟短名单通话、写聊天偏好需权衡。China OK。

### 3. ⭐ n8n / Supabase Automation Developer – Jobber Reporting & KPI Dashboards
- **URL**：https://www.upwork.com/freelance-jobs/apply/n8n-Supabase-Automation-Developer-Jobber-Reporting-KPI-Dashboards_~022109010567400563221/
- **预算**：$1,500 fixed（可灵活；先付 $150–250 技术评估）
- **提案**：✅ 50+｜面试 3｜客户 **2 小时前**查看
- **发布**：2026-10-11 03:57 UTC+8（约 3–4 天）
- **难度**：中｜**竞争**：中高（提案多但面试尚少、客户仍在看）
- **为何契合 / 是否优先**：**优先**。Jobber GraphQL → Supabase → n8n 日报/周报 → Sheets/邮件；要求 OAuth/token、去重、对账——后端 API + 会话/令牌管理。提案答「是否用过 Jobber GraphQL」要诚实，可强调 n8n+Postgres 对账经验。China OK。后续 CallRail/QBO 有空间。

### 4. Real Estate Data Engineer: Italian Listings Database & API (Bari Pilot)
- **URL**：https://www.upwork.com/freelance-jobs/apply/Real-Estate-Data-Engineer-Italian-Listings-Database-API-Bari-Pilot_~022108912455837304784/
- **预算**：$500 fixed（试点；可谈维护/全国扩展）
- **提案**：✅ 20–50｜面试 0｜客户 4 天前查看（偏冷）
- **发布**：2026-10-10 21:28 UTC+8（约 4 天）
- **难度**：高｜**竞争**：中（规格严、面试 0，写深可突围）
- **为何契合**：官方 API 或合法抓取 → 自有 DB → 地理检索 API、去重、14 天质量报告——对上 Price Watch / 数据管道案例。须在提案写清合法来源与「usable listing」验收。China OK。**可投但非今晚第一支**（客户可能已淡）。

### 5. AI Cold Call Coach Integration（HubSpot + Claude + n8n + Slack）
- **URL**：https://www.upwork.com/freelance-jobs/apply/Cold-Call-Coach-Integration_~022109916232871104574/
- **预算**：Hourly（公开页无区间）；里程碑 1 小额验证 transcript
- **提案**：✅ 50+｜面试 9｜邀请 10｜客户昨日查看
- **发布**：2026-10-13 15:56 UTC+8（约 1 天）
- **难度**：中｜**竞争**：高
- **为何契合**：自托管 n8n + HubSpot 通话转录 → Claude 评分 → Sheets/Slack——AI落地 + 工作流。客户 UK、$2.1K spent、9 次雇佣，质量好。提案必须答「如何拉 HubSpot call transcripts」。China OK。**值得写，但 Connects 贵则排后于 1–3。**

### 6. Lead Automation & AI Engineer（自托管 scrape→score→CRM）
- **URL**：https://www.upwork.com/freelance-jobs/apply/Lead-Automation-Engineer_~022108700627641896244/
- **预算**：$350 fixed
- **提案**：✅ 20–50｜面试 7｜客户 4 天前查看
- **发布**：2026-10-10 07:26 UTC+8（约 4–5 天）
- **难度**：中高｜**竞争**：中高
- **为何契合**：无 vendor lock-in、浏览器自动化、n8n、抗封——对上 Contractor Lead Engine。Instagram 源需注意平台 ToS，提案写「客户自有账号 + 限速/会话保活」。China OK。客户偏冷，作备选。

### 7. Python | music outreach intelligence system
- **URL**：https://www.upwork.com/freelance-jobs/apply/Python-music-outreach-intelligence-system_~022109236205660696408/
- **预算**：$2,000 fixed
- **提案**：✅ 50+｜面试 5｜客户昨日查看
- **发布**：2026-10-11 18:54 UTC+8（约 3 天）
- **难度**：中高｜**竞争**：高
- **为何契合**：Ubuntu 自托管 + 本地 LLM + 线索研究/打分仪表盘——Python/Docker/部署区分点（titles_budgets Top 型）。经 Tailscale SSH、非 admin。需先读附件设计文档再报价。China OK。

### 8. Stripe Connect Developer — Next.js + Supabase Marketplace（FameUS）
- **URL**：https://www.upwork.com/freelance-jobs/apply/Stripe-Connect-Developer-Needed-Next-Supabase-Marketplace-App-Escrow-Gifting-Competitions_~022109213495109946676/
- **预算**：$1,500–$2,000 fixed（页标 $1,500）
- **提案**：✅ 50+｜面试 0
- **发布**：2026-10-11 17:24 UTC+8（约 3 天）
- **难度**：高｜**竞争**：高（要生产级 Connect 实绩 + NDA）
- **为何契合**：**支付网关 webhook**（托管押金、分账、纠纷、失败 payout、Supabase RLS）。仅当有可展示的 Connect/真实收款案例时投；否则跳过。China OK。

### 9. Build Ferva Homes AI Automation Infrastructure（n8n / Supabase / MLS API / DocuSign / Local LLM）
- **URL**：https://www.upwork.com/freelance-jobs/apply/Build-Ferva-Homes-Automation-Infrastructure-n8n-Supabase-MLS-API-DocuSign-Local-LLM_~022109789162022651856/
- **预算**：$1,000 fixed（首期审计+架构+Offer Engine MVP；正文承认全平台远超 $1k）
- **提案**：✅ 50+｜面试 **18**｜邀请 26
- **发布**：2026-10-13 07:31 UTC+8（约 1–2 天）
- **难度**：高｜**竞争**：极高
- **为何契合**：栈几乎全覆盖（n8n、API、限流重试、本地 LLM、禁止非法 MLS 抓取）。提案须以 **Ferva Automation** 开头并答 8 问。长期伙伴意向强，但 18 面试中胜率低——**仅 Connects 充裕时试一次**。China OK。

### 10. AI Voice Agent Specialist — Senior Living Sales & Appointment Booking Prototype
- **URL**：https://www.upwork.com/freelance-jobs/apply/Voice-Agent-Specialist-Senior-Living-Sales-Appointment-Booking-Prototype_~022109694857514373182/
- **预算**：页标 $1,500；正文约 **$2,500** fixed
- **提案**：✅ 50+｜面试 0｜客户 $606K spent / 67 hires（极强）
- **发布**：2026-10-13 01:17 UTC+8（约 2 天）
- **难度**：高｜**竞争**：高
- **为何契合**：Voice agent + 实时 Calendly + HubSpot/Sheets——AI落地 + CRM 集成。需有可演示通话/录音；纯 n8n 无 voice 经验则勿硬投。China OK。客户质量顶级，有相关作品则冲。

---

## 已拒绝 / 跳过摘要（近失与否决）

| 职位 | 原因 |
|------|------|
| ZipRecruiter 抓取 + AI 简历解析（$25–51/hr） | **US Only**；虽含会话 cookie/限速（自有账号）但地理不符 |
| Ai Agent for Browser Automation（$30–50/hr） | 申请地仅 Pakistan/India/US，**无中国** |
| Lead Qualification & Appointment Booking n8n（$25–47/hr） | 已 hire 1、提案 50+、强制个性化视频 |
| Real Estate Lead Follow-Up n8n+Claude | **$10** 低价占位，技能匹配但价不可做 |
| Playwright → Unbounce 一键导入（$500） | 已 **hire 1**；偏旧（10-05） |
| Security audit Next+Supabase+Stripe（$750） | 偏旧（10-04）、要 Loom + 与 US Central 重叠 4h；技能匹配可作近失备选 |
| Edron Agentic AI Pilot（$65–85/hr） | **US Only** + 提案 50+（早间近失已核实） |
| Claude MCP Expert（$20–50/hr） | 仅 Philippines/Poland |
| Lead Intake n8n/Make（$200） | US Only + 预算偏低 |
| Job Nimbus 自动化（$5–35/hr） | 地板 $5 + 提案 50+ |
| n8n CRM Sync（$250） | 低于习惯门槛 + 提案 50+ |
| Restaurant Menu Profit Audit（$100） | 低价 + 50+ |
| Carpentry Inquiries AI（$400） | 50+ + 全新客户 |
| AU B2B 抓取 ongoing | 要成品数据交付非定制管线；50+ |
| GHL 类 $10–$20 低价单、AI cartoon $80、HubSpot $10 等 | 低价/非主场 |
| Full-Stack AI Agents n8n SaaS apply | **已关闭** |
| \`/freelance-jobs/playwright/\` 等 | 404 或 CF 验证页，已跳过未绕过 |

**CF / 拦截备注**：curl 对 Upwork 常 403；本晚 WebFetch 类目与多数 apply 页可用。未使用代理/指纹浏览器/验证码绕过。

**sent_jobs**：今晚未追加；未投标、未私信客户。

---

## 待你确认后再写提案草稿

建议**最先起草**的 Top 3：

1. **United Rentals Scraper 稳定化**（技能最尖、面试少、可快速交付）  
2. **Clinical Training Academy n8n + Stripe/Xero**（主栈 + 支付 webhook；准备 EUR 抬头报价结构）  
3. **Jobber Reporting n8n/Supabase $1,500**（客户仍在活跃查看；先答 5 个申请题）

`},
{"id": "doc-live", "title": "在线模板与作品集链接", "theme": "模板与交付", "date": "2026-10-17 18:50", "summary": "已部署模板与作品集 URL，提案可直接引用。", "tags": ["模板", "作品集", "链接"], "source": "https://portfolio-site-orpin-three-91.vercel.app", "path": "docs/live_templates.md", "related_docs": [], "content": `# 在线模板与作品集

| 模板 | 用途 | 链接 |
|---|---|---|
| Landing + Waitlist | 落地页 + 等候名单收集 | https://tpl-landing-waitlist.vercel.app |
| Form → Sheet | 表单提交写入表格 | https://tpl-form-to-sheet.vercel.app |
| Booking Calendar | 预约日历 | https://tpl-booking-calendar.vercel.app |
| Launch Audit Report | 上线审计报告 | https://tpl-launch-audit-report.vercel.app |
| 作品集 Portfolio | 个人作品集站点 | https://portfolio-site-orpin-three-91.vercel.app |

用法：在 proposal 中直接贴对应模板链接作为 demo，证明可快速交付。
`},
{"id": "doc-pulse-1019", "title": "Upwork 市场脉搏 2026-10-19", "theme": "Upwork 调研", "date": "2026-10-19 09:00", "summary": "公开页复筛：QUALIFIED=0；近失表、跳过模式、入口词与低标方向。", "tags": ["Upwork", "筛选", "脉搏", "入口词"], "source": "", "path": "docs/notes/upwork_pulse_2026-10-19.md", "related_docs": ["doc-screened", "doc-titles", "doc-freelancer-bids"], "content": `# Upwork 市场脉搏 · 2026-10-19（Asia/Shanghai）

> 来源：\`checked_2026-10-19_morning.txt\` + 10-17/18 公开页复筛笔记。公开信息 only；QUALIFIED=0。

## 筛选口径（硬过滤）

- Fixed ≥ **$300** 或 Hourly ≥ **$25/hr**（页内可核验）
- Proposals 约 **&lt;20**
- China OK / worldwide；跳过 US-only、低价、模糊、站外收款、大额无偿测试

## 本轮结论

**NO_GOOD_JOBS** — 约 36h 窗口内无页核验全过的单。

### 近失（未达标，仅作方向感）

| 标题摘要 | 预算 | 提案 | 跳过主因 |
|---|---|---|---|
| Full Stack AI marketplace（Next/Nest） | $1,500 Fixed | 15–20 | 满天花板 + 从零市场站相对低价 + 新客户无 spend |
| Senior AI/Integration（FMora/CAFM） | Hourly 未标 | 50+ | 提案爆炸 + 时薪未核验（栈很贴） |
| Lovable 站继续开发上线 | Not Sure Hourly | 20–50 | 无时薪 + 提案偏多 |
| B.L.U.E. Marketplace 全栈/移动 | $16–$30/hr（文案另称 $25–$40） | 15–20 | **US-only** + 时薪地板偏低 |
| FB Lead → Zapier 邮件 | $100 Fixed | 50+ | 预算不足 + 卷 |

### 反复出现的跳过模式（10-16→19）

1. **n8n / Zapier / AI automation**：类目顶卡多数 Posted 2–3 天，提案常 **50+**，Fixed 常见 **$5–$10**
2. **「大系统 + 小预算」**：Outlook/QB/n8n 全家桶标 $500、10 周 SaaS 标 $1,500
3. **时薪不公示**：卡片/页无 $/hr → 无法 QUALIFIED
4. **Lovable/Bolt 接管**：有量，但常无预算或提案 20–50
5. **地理墙**：USA only 仍常见，直接划掉

## 仍值得盯的入口词

**主：** \`n8n\` · \`Zapier migration\` · \`Playwright\` · \`web scraping\` · \`API integration\` · \`self-hosted\` · \`Next.js Supabase Stripe\`  
**副（量/增速）：** \`Lovable\` · \`Chrome extension scraper\` · \`Shopify return\` / WISMO · \`Beds24\` guest messaging

## 低标 / 可打方向（对照 Freelancer 观察 + 长尾笔记）

- 避开：纯建站/Wix/Shopify 换皮、泛 AI chatbot、$&lt;100 拖拽自动化
- 优先：Docker/监控/失败重试的采集管线；Playwright+会话/表单；MV3 扩展；进现有系统的 RAG/Agent+审批；窄集成（WhatsApp/Odoo 等）
- 长尾产品向：Shopify 售后 Agent（WISMO+RMA+HITL）＞ Beds24 客信工单 ＞ 保修 Claim Agent

## 操作提醒

- 公开类目页可用；box \`curl\` 易吃 Cloudflare，勿当数据源
- \`playwright\` 类目 URL 现 **404**；用搜索词 \`playwright|scraping\` 替代
- 早/午硬筛提案少+预算够；晚间再按技能补短名单
`},
{"id": "doc-freelancer-bids", "title": "Freelancer 竞标观察与低标方向", "theme": "市场研究", "date": "2026-10-12", "summary": "高竞标血池 vs 相对可打方向；关键词与本周投单比例。", "tags": ["Freelancer", "低标", "筛单", "Playwright"], "source": "", "path": "docs/notes/freelancer_bid_patterns.md", "related_docs": ["doc-pulse-1019", "doc-smb", "doc-backlog"], "content": `# Freelancer 竞标观察（2026-10-12 公开列表抽样）

你举的例子：[Wix End-Lease Cleaning Site](https://www.freelancer.com/projects/wix/Wix-End-Lease-Cleaning-Site/details) —— 典型「模板站+报价计算器」，门槛低，容易变成百人竞标池。

## 高竞标（尽量别投 / 别当主战场）
- Wix / Shopify / WordPress「从零建站、换皮、电商小改」
- Logo / 短视频剪辑 / 社媒涨粉 / Facebook Ads 傻瓜单
- 纯数据录入、Lead list、$1–4/hr 采集
- 「AI Chatbot / n8n 入门作业」类无业务边界单
- 一次性「爬个 CSV」且描述极短、无反爬/监控要求

## 相对少竞标、更值得盯（公开页里技术门槛更高）
按当前 \`jobs/web-scraping\`、\`jobs/python\` 等列表抽样归纳（非全站统计）：

1. **带部署/运维的采集系统**  
   例：云端定时爬 + 失败告警 + 万级 URL（Affordable Cloud Scraping…）  
   例：Wayfair Closeout 折扣排序、Coles/Woolworths 周更价格管线  
2. **Playwright/Selenium + 表单/会话自动化**（不是纯 CSV）  
   例：Python Website Automation Bot（表单提交+定时抽文本）  
3. **Telegram/监控类小系统 + 明确合规边界**  
   例：Slovak Police appointment monitor（要先验证可行性）  
4. **扩展/产品化 scraped 能力**（MV3 + 后台），搜 Chrome extension / bot 类常比 Wix 少人  
5. **生产向 AI 嵌入**（进已有系统、控费、非套壳）：RAG+工单、多 Outlook AI agent、文档→CSV 咨询流  
6. **垂直集成**：Odoo↔WhatsApp、Meta API、SaaS 文档自动化、WebRTC 全栈（描述长、技能栈窄）  
7. **遗留/专项工程**：Zerodha 行情调试、金融 ML 审计、印度语 STT 模型——竞标少但要真专长

## 怎么筛（实操）
开 [Projects](https://www.freelancer.com/projects) 或技能页后：
1. **跳过**标签只有 Website Design / Wix / Shopify / Logo / Social Media 且描述 <10 行  
2. **优先**描述里出现：Playwright、Selenium、Docker、Railway、proxy、retry、webhook、Manifest V3、Nest、FastAPI、SLA、monitoring  
3. **优先**预算显示几百美元以上、或 Hourly ≥$15 且任务非数据录入  
4. **优先** Posted <15–30 分钟、Bids 仍个位数时投（早标）  
5. 对「270 标」类：直接划掉，ROI 为负

## 和你匹配的投单关键词（搜索框）
\`Playwright\` · \`Chrome extension\` · \`Manifest\` · \`browser automation\` · \`Puppeteer\` · \`data pipeline\` · \`Docker scraper\` · \`NestJS\` · \`FastAPI\` · \`WhatsApp API\` · \`Odoo\` · \`price monitor\`

## 本周投单建议比例
- 70%：管道/RPA/扩展+后端/生产 AI 嵌入  
- 20%：中等全栈（有计费/多租户/集成，不是落地页）  
- 10% 以内：才碰通用建站（且预算够、描述专业）

## 实测竞标数（2026-10-12 公开页抽样）

你的例子：Wix End-Lease Cleaning = **286 标**（当天就爆）。同类 Wix 电商甚至到 **419**；WordPress/Shopify/通用官网常见 **150–500**。

| 类型 | 样例竞标 | 解读 |
|------|----------|------|
| Wix/WP/Shopify/Logo | 286–600 | 血池，别投 |
| 通用 SaaS/全栈 CRM | 300–470 | 也很卷 |
| 「Chrome 扩展」泛单 | ~194 | 标签稀缺但抢的人不少 |
| 点名 Playwright 的爬虫/自动化 | ~47–140 | 中等卷 |
| 扩展+Playwright 反代/自动化 | ~59 | 相对可打 |
| 小 n8n / Excel 自动化 | ~10–60 | 标少但客单常低 |
| 窄专项（固件/GIS/本地验证） | ~2–11 | 标少，要真专长 |

**修正认知：** 不是「Playwright/扩展标签少就没人」——池子小，但会投的人更集中，59–194 仍常见。真正「标很少」的多半是数据录入/Excel/$几块钱单，不值得你的时薪。

**实操：** 仍避开 Wix/建站血池；挑描述长、要 Docker/监控/会话/反代的工程单，在 **Bids <30、发帖几小时内** 用里程碑方案砸进去。EOF
`},
{"id": "doc-longtail", "title": "长尾方向 · 横切能力 · 另辟蹊径", "theme": "成长路径", "date": "2026-10-18", "summary": "避开大红词内卷；优先 Shopify 售后 Agent / Beds24 工单 / 保修 Claim。", "tags": ["长尾", "Shopify售后", "Beds24", "Agent"], "source": "", "path": "docs/notes/longtail_directions_2026-10-18.md", "related_docs": ["doc-radar-brief", "doc-smb", "doc-pulse-1019"], "content": `# 长尾方向 · 横切能力 · 另辟蹊径（2026-10-18）

> 来源：语音通话整理 + 当日调研 · Asia/Shanghai  
> 用途：后续主方向决策与**追加新想法**（文末有追加区）  
> 相关：AI 客服定价调研（同日）、requirement-trendradar 只读观察

---

## 0) 核心思路（另辟蹊径）

**问题：** 某个需求打开后提案列表动辄一两百、两三百条时，基本看不到你的提案。

**对策：**
- **另辟蹊径 / 岔开思路找需求**——优先难搜索的**长尾关键词 + 垂直工作流组合**，而不是「AI chatbot」「知识库客服」这类大红词。
- **避开**简单、单体、内卷需求（尤其纯知识库问答 / 通用 Chatbase 替代 / 网站挂件）。
- **优先综合型**：Agent + 知识库 + 工单/审批/渠道流转打包，卖「动作与审批流」，不卖「挂一个问答框」。
- 筛选口径（已入记忆）：短期看 **量大** 或 **增长快**；后期看 **少但高投入意愿**。

**定价锚点（同日调研，USD）：** 欧美 10–50 人 AI 客服约 $49–$299/月；纯问答 $29–$99；定制一次约 $200–$2,500；完整多渠道+转人工约 $700–$4,500。

---

## 1) 长尾方向评估（产品/接单双用）

### 结论：优先做什么

1. **优先：Shopify 售后综合 Agent**（主标签：**量大**）— WISMO + 退换货 RMA + Helpdesk 人工审批。  
2. **次选：Beds24 客信 + 维修/保洁工单**（主标签：**增长快**）。  
3. **后期：DTC 保修 Claim Agent**（主标签：**少但高投入意愿**）。  
4. **可复制但合规拖后腿：牙科 Intake + 保险 FAQ + 预约 + 前台工单**（量大；匹配度中）。

执行顺序：先用方向 1 接 2–3 个 HITL 售后项目 → 沉淀「Shopify + 一工单系统」模板 → 再探针 Beds24 或保修。

### 不建议碰

- 纯知识库问答 / 通用 Chatbase·Tidio 替代  
- 「全行业通用」网站 AI 客服挂件  
- 正面硬刚 Hostaway 原生 AI，或偏语音栈的 4S Service Advisor（不如 Beds24/Shopify 售后划算）

---

### 方向卡 1 · Shopify 售后综合 Agent（量大）

- **长尾词建议：** \`Shopify return exchange agent\` / \`Shopify LiveAgent AI order tracking handoff\` / \`WISMO + RMA intake agent\`
- **目标用户：** 欧美 Shopify DTC，约 5–50 人；已有 Gorgias / LiveAgent / Zendesk
- **变现：** 订阅 **$99–$299/月**；实施/定制 **$800–$2,500**；可先 Upwork 固定价 **$600–$1,500** 获客
- **MVP：** Agent + 政策/产品 KB + Shopify 只读查单 + 退换货表单写入 Helpdesk 工单 + 低风险自动回复 / 高风险人工审批  
  **不做：** 自动退款打款、无审批改单、多店铺/多语言全开、完整 Loop/AfterShip 写回（二期）
- **预估投入：** 约 **80–140h**
- **为何抗内卷：** 绑「Shopify + RMA + 具体工单系统 + HITL」，卖动作与审批流
- **匹配度：** 高
- **需求证据：**
  - [Upwork：Shopify + LiveAgent AI 客服自动化 Phase 1](https://www.upwork.com/freelance-jobs/apply/n8n-OpenAI-Developer-Needed-Customer-Service-Automation-for-Shopify-LiveAgent_~022105766498669521305/) — 读工单→KB→查 Shopify→草稿→人工审批；预算约 **$600–$1,000**
  - [Upwork：Order Tracking + KB + Human Handoff](https://www.upwork.com/freelance-jobs/apply/Customer-Support-Agent-Developer-Order-Tracking-Knowledge-Base-Human-Handoff_~022111481314968687339/)
  - [Indie Hackers：Fortuna](https://www.indiehackers.com/post/i-replaced-an-entire-customer-service-department-with-ai-heres-what-happened-in-the-first-two-weeks-eA7bTzhGgoHS9vggAzlc) — WISMO/退款占大量时间；退款须商家批准
  - 辅助：[Gorgias 退货自动化按次约 $0.85–$1.00](https://www.getmacha.com/blog/automate-returns-in-gorgias-with-ai)

---

### 方向卡 2 · Beds24 客信 + 维修工单（增长快）

- **长尾词建议：** \`Beds24 AI guest messaging\` / \`Beds24 maintenance ticket agent\` / \`PMS guest inbox autopilot\`
- **目标用户：** Beds24 技术型宿主 / 小型 PMC（5–80 套房），非 Hostaway 全家桶
- **变现：** **$15–$35/单元/月** 或套餐 **$149–$399/月**；实施 **$500–$2,000**
- **MVP：** Agent + 房源指南 KB + Beds24 读预订/消息 + 渠道回写草稿或自动发 + 维修/缺物→工单并升级人工  
  **不做：** 改价/限售、全渠道营销、复杂宿舍分配
- **预估投入：** 约 **120–200h**
- **匹配度：** 高
- **需求证据：**
  - [ProhostAI × Beds24（Early Access）](https://www.prohost.ai/integrations/beds24)
  - [TravelPal × Beds24](https://asktravelpal.com/integrations/beds24)
  - [Hostaway AI Guest Messaging](https://support.hostaway.com/hc/en-us/articles/16948038685851-Hostaway-AI-Guest-Messaging) / [Hostaway AI](https://www.hostaway.com/features/hostaway-ai/)
  - 辅助：[Chatwoot + 酒店客通架构类岗](https://www.upwork.com/freelance-jobs/apply/Senior-Integration-Architect-Chatwoot-for-Hospitality-Guest-Communication_~022097753847788785145/)

---

### 方向卡 3 · DTC Warranty Claim Agent（少但高投入意愿）

- **长尾词建议：** \`warranty claim AI agent Shopify\` / \`warranty photo evidence intake\` / \`post-purchase warranty portal agent\`
- **目标用户：** 电子/户外/家具等带保修的 Shopify 品牌，支持 3–30 人
- **变现：** 订阅 **$199–$499/月**；实施 **$1,500–$4,500**
- **MVP：** Agent + 保修政策/SKU KB + 订单校验 + 照片/描述采集 + 理赔状态机（eligible / need_info / escalate）+ 通知人工  
  **不做：** 自动大额打款、供应商索赔财务、全 CRM 替换
- **预估投入：** 约 **100–180h**
- **匹配度：** 高
- **需求证据：**
  - [Claimlane AI Claims](https://www.claimlane.com/product/ai)
  - [OpenAgent Warranty Support](https://openagent.work/use-cases/warranty-support)
  - Reddit 痛点：[Coros 保修](https://www.reddit.com/r/Coros/comments/1m3drt4/totally_ghosted_by_coros_warranty_claim_beware/) · [Oura 转不了人](https://www.reddit.com/r/ouraring/comments/1q5kov5/customer_support_nonexistent/)

---

### 方向卡 4 · 牙科 Intake + 账单 FAQ + 预约 + 前台工单（量大 · 匹配中）

- **长尾词建议：** \`dental patient intake chatbot\` / \`dental insurance billing FAQ agent\` / \`dentist n8n appointment agent\`
- **目标用户：** 欧美单体/小连锁牙科（1–5 诊所）
- **变现：** **$99–$249/月** + 实施 **$500–$2,000**
- **MVP：** Agent + FAQ KB + 新患 Intake + 日历预约 + 复杂账单/投诉→前台工单  
  **不做：** 真实理赔提交、Dentrix 等深度写回、无合规乱存 PHI
- **预估投入：** 约 **90–160h**（认真做 HIPAA 再 +40–80）
- **匹配度：** 中（技术高；合规与获客周期拖后腿）
- **需求证据：**
  - [Freelancer：牙医 n8n Chat Flow](https://www.freelancer.com/projects/chatbot/development-chat-flow-for-dentist) — 预算约 $250–$750，成交约 **$530**
  - [Freelancer：Dental Website AI Chatbot](https://www.freelancer.com/projects/ai-chatbot-development/dental-website-chatbot-integration)
  - [Dental chatbot 功能页](https://aisupportagent.io/dental-chatbot)

---

## 2) 跨领域共性复杂需求（横切能力）

> 这是**交付能力模式**，不是垂直产品点子；可与上一节组合（例如：Shopify 售后 = API 集成 + Webhook + 工作流 + 可选插件）。

### 最贴技能栈的 Top3

1. **抗反爬采集与无头浏览器流水线**  
2. **多系统 API / Webhook 对接（含 Shopify↔ERP/CRM）**  
3. **支付分账 / Stripe Connect + Webhook 对账**

另两项也很贴：**工作流编排（n8n Docker）**、**浏览器插件作为集成面**。

### 建议避开或后碰

企业 SAML/SCIM 深水、HIPAA/深 PCI 顾问式项目、**重前端视觉/Design System**、**纯 iOS/Android 原生**、游戏权威服/netcode。

### 话术

不要卖「会 Python」；卖「双向同步 + 对账报表」或「抗 bot 的监控型采集管道（Docker 交付）」；支付线单独包装 Connect 分账 + 幂等 webhook + 日对账。

### 排序表（频率主排 · 复杂度次排）

| # | 模式 | 频率 | 复杂度 | 匹配 | 变现信号（公开源，勿当全球公允价） |
|---|---|---|---|---|---|
| 1 | 工作流编排 / 自动化胶水 | 高 | 中→高 | 高 | ~$40/hr 中位；复杂自托管更高 |
| 2 | 抗反爬 / 无头采集流水线 | 高 | 高 | 高 | ~$20–80/hr；固定约 $100–600；管道 $200–1000+/月 |
| 3 | 多系统 API 集成 | 高 | 高 | 高 | 机构向 $49+/hr；$1.5k/1–3 周起（文档清） |
| 4 | Webhook 可靠处理 | 高 | 高 | 高 | $30–60/hr 档；常打包进集成 |
| 5 | 数据迁移 / ETL | 高 | 高 | 中 | 常见 $10–40/hr；专家按周 |
| 6 | OAuth / SSO / RBAC | 中→高 | 高 | 中 | 插件 OAuth 可做；企业 SAML 深 |
| 7 | Stripe Connect 分账 | 中 | 高 | 高 | 小修约 $300；完整模块常更高 |
| 8 | 浏览器插件集成面 | 中 | 中→高 | 高 | 简单 $0.5–2k；含支付/API $3–10k |
| 9 | WebSocket 实时鉴权 | 中 | 高 | 中 | 独立价弱 |
| 10 | 队列 / CDC 事件编排 | 中 | 高 | 中 | 常与 ERP/SSO 同现 |
| 11 | SaaS OAuth + 限流韧性 | 中 | 中→高 | 高 | 并入 API 集成 |
| 12 | 跨系统权限同步 | 低→中 | 高 | 低 | 公开价弱 |

**证据例：**
- [Upwork 爬虫岗](https://www.upwork.com/freelance-jobs/apply/Web-Scraping-Expert-Needed-for-Reliable-Data-Extraction-Automationd_~022104592296038802480/)
- [Freelancer Shopify↔ERP](https://www.freelancer.com/projects/shopify-site/shopify-api-integration-with-erp)
- [Stripe Connect 分账岗](https://www.upwork.com/freelance-jobs/apply/Stripe-Connect-Specialist-for-Payment-Splitting_~022111363835785154145/)
- [ExtensionFast 2026 报价](https://www.extensionfast.com/blog/hire-a-chrome-extension-developer)
- 岗量聚合参考：[Redwater Jul 2026](https://upwork.redwaterrev.com/archive/2026-07) · [DevSnipe 工作流](https://devsnipe.com/blog/workflow-automation-freelance-jobs-2026)

**可靠性套件（几乎总是同一套）：**  
鉴权 → 契约 → 入站（Webhook/队列）→ 幂等写入 → 重试/DLQ → 对账 → 可观测 → Docker 交付。

---

## 3) 两份材料怎么一起用

| 用法 | 做法 |
|---|---|
| 接单获客 | 用长尾词搜 Shopify 售后 / Beds24 / warranty；提案强调 HITL + 工单，不写「通用 chatbot」 |
| 能力包装 | 在提案里露出横切能力：API 同步、抗爬、Connect、插件、n8n |
| 产品化 | 方向 1 模板化后，再叠 Stripe/插件模块抬客单价 |
| 雷达/搜词 | 难搜组合词优先；大红词（AI chatbot）仅作对照，不作为主投词 |

---

## 追加区（新想法往下写）

<!-- 格式建议：YYYY-MM-DD · 一句话想法 · 可选链接 -->

- 
`},
{"id": "doc-radar-brief", "title": "需求雷达口径与短线优先", "theme": "市场研究", "date": "2026-10-18", "summary": "短线量大/增长快、后期高投入意愿；Chrome 扩展爬虫与 Lovable+Stripe 优先。", "tags": ["雷达", "筛选口径", "Lovable", "Chrome扩展"], "source": "", "path": "docs/notes/demand_radar_brief_2026-10-18.md", "related_docs": ["doc-longtail", "doc-freelancer-bids", "doc-tplplan"], "content": `# 通话笔记：需求雷达 · 筛选口径 · MVP（2026-10-18）

> 来源：语音通话整理 · Asia/Shanghai  
> 用途：后续查阅与**追加新想法**（文末有追加区）  
> 相关站：[requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/)

---

## 1) requirement-trendradar 定义口径

- **是什么：** 内部海外需求雷达（gaopfEditer），公开页展示 Freelancer 等开放帖 + 机会卡 / 周榜。
- **「站上实时需求」：** 以站点 **接单帖 / job_leads** 流水线为准（约每 4 小时 ingest），经双轨三关进入**推荐池**；先看「推荐 + Open」再人工决定是否投。
- **不是：** 不登录平台、**不自动投标**；雷达观察**不作接单验收**。
- **已知限制（通话当日）：**
  - Trends / 周榜常为 **demo / fixture**，只作灵感，不当实盘。
  - Fiverr Buyer Requests：**403 / 反bot**，站内跳过。
  - Contra 等多数未接入。
  - 机会卡含 PH 日榜 + 关键词壳；PH 新品多为「落不上」。

---

## 2) 长线 / 短线需求分法

| | **短线** | **长线** |
|---|---|---|
| 含义 | 实时接单帖，快速出手 | 赛道 / 趋势，找可做的 MVP 方向 |
| 主要源 | Freelancer（站内）、Upwork 等开放岗（站外补扫） | Trends、周榜、Product Hunt、社区扫描、机会卡赛道词 |
| 用法 | 有推荐或低竞争真帖再投；一期可验收 | 评估可行性 → MVP → 自动化路径；可慢不可假 |

**一句话：** 短线 = 跟帖变现；长线 = 选方向做透。

---

## 3) 需求筛选新口径（长期执行）

已写入记忆，后续评估 / 雷达 / 机会筛选一律按此：

1. **短期关注两类**
   - **需求量大的**
   - **增长快的**
2. **后期关注一类**
   - 数量可以少，但用户**愿意花时间**（**高投入意愿**）

---

## 4) 实时雷达最新数据（通话当日快照）

### 站内（\`published_at\` ≈ 2026-10-18 18:07 +08）

| 指标 | 数值 |
|---|---|
| 帖子总数 | **31** |
| 来源 | Freelancer **31**；Fiverr **0**；其它 **0** |
| 推荐数量 | **0**（相对更早一轮曾 **14 → 0**） |

→ **短线推荐池为空**；总量也偏少，且单一来源。

### 站外补扫（不改雷达仓 · 关键词变体 + 多源）

| 版本 | 约数 | 说明 |
|---|---|---|
| 通话中首次汇总 | **12–18** 条可跟真帖/信号 | 优先：**Chrome 扩展爬虫**、**Lovable 加固** |
| 同日更深补扫 | 去重约 **42** 条相关信号 | Upwork 22 / Freelancer 15 / 其它；Contra、Fiverr 仍扫不到 |

**优先方向（短线跟单话术）：** Chrome 扩展爬虫类开放帖；Lovable/Bolt → 生产 / Stripe 加固（Upwork 岗 + Catalog 侧面验证量大、增长快）。

---

## 5) 难度评估（按技能栈）

技能：Python、Docker、爬虫与 API 逆向、无头浏览器、浏览器插件、支付网关对接。

| 类型 | 难度 | 预估工时【估】 |
|---|---|---|
| Stripe 接 Lovable 落地页（一次性 Checkout） | 低 | **约 4–10h** |
| 简单 Chrome 扩展爬虫（读 DOM + 点击） | 低–中 | **约 6–14h** |
| 合计「好接」区间 | — | **约 4–16h** |
| Lovable 半成品全面加固（Auth/DB/Stripe） | 中 | 约 12–28h |
| BEDS24 / Hostify 等 OTA 对接 | 中高 | 约 24–48h+（预算与竞争常不匹配） |
| 大范围 SaaS 加固 / 订阅中台 / 企业 PMS | 高 | 40h–不可控 |

**接单顺序建议：** 先 Stripe×Lovable → 浅 Chrome 扩展 → 再中等加固；高提案数 OTA / 企业插件慎广投。

---

## 6) AI 提效判断

- **写代码 / 改模板 / 出选择器：** 可明显压缩；熟练时单功能可压到大约 **1–2 小时**量级（视范围）。
- **仍需人工：** Stripe 账号与密钥、真卡/测试验收、域名与 webhook 公网、**找付费用户 / 上架触达**、范围谈判与验收扯皮。
- **结论：** AI 加速交付，不替代「密钥、合规支付、获客」。

---

## 7) Lovable 加固 + Stripe MVP（已挂起）

**目标（最小）：** 只验证「有人肯为落地页加一层 Stripe 支付校验付钱」。  
不做：多语言、后台、复杂订阅。

**功能清单（摘要）：**
1. 英文落地页 + 标价 + Pay with Stripe  
2. Stripe **Checkout**（一次性 \`mode=payment\`）  
3. **Webhook** 验签（\`checkout.session.completed\`）  
4. Success / Cancel 页 + 交付包链接  
5. Docker / Python（FastAPI）部署形态  

**工时原估：** 约 **8–12h**。  

**代码位置：** \`/workspace/lovable-stripe-mvp\`  
**状态：已挂起**（2026-10-18）——本地页面与 Checkout/webhook 代码已齐；**卡在 Stripe 测试密钥**；等说「恢复」再继续。  
**不做：** 挂起期间不再开发。

---

## 8) 主 bot /「另一边」邮箱

- 默认收件人：**\`gaopftask@mail.grokbot.com\`**
- 说「发邮件给另一边 / 发给主 bot」时用此地址；**不再**用旧 editor 地址，也不再猜测其它地址。

---

## 9) 评估结论（行动口径）

1. **短线池子空**（站内推荐 0）→ 不要把站内推荐当搜投清单。  
2. **别硬投高提案数帖**（如 BEDS24 百人围标、预算过紧）→ 等邀约或砍一期，或改 Upwork 精准词。  
3. 站外已有 Lovable 加固 / 扩展爬虫 / 自动化长约等信号 → 短线跟 **Upwork Lovable→生产簇** 与 **低难扩展帖**；长线仍用 Trends 灵感 + 高投入意愿岗（如顾问 £3k、$8k SaaS）作后期。  
4. 扩雷达词表与 Upwork 源 → 需**代码侧**改 ingest；市场先导只评估、不改仓、不代投。

---

## 附录 A · 通话中其它已对齐事项（可选查阅）

- 本周实验配额（另线）：币圈 15h / 接单 15h / 副线 ≤5h；周一复盘。  
- 编码默认 Composer 2.5 Fast（省 token），除非另有要求。  
- 市场先导职责：主题筛选与可行性 / MVP；不改 requirement-trendradar 仓、不写最终帖、不代投。

---

## 追加区（新想法往下写）

<!-- 格式建议：YYYY-MM-DD · 一句话想法 · 可选链接 -->

- 

`},
]
};