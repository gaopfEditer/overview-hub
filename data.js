window.HUB_DATA = {
sections: [{"id": "platforms", "name": "平台前端", "desc": "接单 / 展示 / 社区获客平台作战手册：权限、路径、注意、Trends 关键词"}, {"id": "cases", "name": "案例分析", "desc": "真实或示例接单案例：来源、单子类型、操作思路、结果（schema 可随 manifest 扩展）"}, {"id": "docs", "name": "思路和文档区", "desc": "能力边界、成长方向、项目推荐、技术清单与 Upwork 调研文档"}],
platform_types: [{"id": "freelance", "name": "接单平台"}, {"id": "showcase", "name": "作品展示"}, {"id": "community", "name": "社区获客"}],
platform_field_labels: {"permissions": "权限需求清单", "access_path": "操作路径", "caveats": "注意事项", "trends_keywords": "Google Trends 对应关键词"},
platforms: [
{"id": "upwork", "type": "freelance", "title": "Upwork", "url": "https://www.upwork.com/", "summary": "主战场。AI Integration + 工作流/API 自动化；副业（修站、爬虫）放 Project Catalog。2026-10-19 公开复筛仍 NO_GOOD_JOBS，盯新帖个位数提案。", "permissions": "① Freelancer 账号 + **政府 ID 验证**\n② **Billing method**（买 Connects 必需）\n③ 收款：Payoneer / Wise / 银行\n④ Project Catalog 卖家权限（挂副业）\n⑤ 消息推送（UTC+8 快回面试）", "access_path": "1. 登录 Find Work\n2. 建 Saved Searches（n8n/Zapier、AI integration、Playwright/scraping、Next+Supabase+Stripe、self-hosted）\n3. 筛预算 ≥$150–300，跳过 $10–100\n4. 对照 titles_budgets / screened 短名单\n5. 买 Connects → 英文短 Proposal + demo 链接\n6. 面试 → Fixed milestone 或 Hourly 规则\n7. 交付源码+README+bugfix 窗", "caveats": "Connects 消耗快；CF/验证码勿用脚本硬闯；China 可访问但注意 US Only 单；Specialized Profiles 已取消；n8n 类常 50+ 提案，靠「写真代码+自托管 demo」差异化；未验证 ID/Billing = 无法投标。", "trends_keywords": "EN: AI automation freelancer, n8n automation, Zapier alternative n8n, AI chatbot for website, web scraping Playwright, Next.js Supabase Stripe fix, API integration, self-hosted automation, document OCR LLM\nCN: Upwork 接单 AI 自动化, n8n 工作流接单, Playwright 爬虫 接单, Lovable 修站", "related_docs": ["doc-titles", "doc-backlog", "doc-smb", "doc-screened", "doc-cap", "doc-live", "doc-pulse-1019", "doc-longtail", "doc-radar-brief", "doc-radar-pulse-1019", "doc-screened-1019e", "doc-fl-samples-1020", "doc-radar-pulse-1021", "doc-fl-samples-1021", "doc-radar-pulse-1022", "doc-radar-pulse-1023", "doc-fl-samples-1023", "doc-fl-samples-1022"], "tags": ["Upwork", "接单平台", "Connects", "主战场"], "path": "docs/platforms/upwork.md", "date": "2026-10-23 16:15", "content": `# Upwork 操作手册

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
{"id": "fiverr", "type": "freelance", "title": "Fiverr", "url": "https://www.fiverr.com/", "summary": "产品化 Gig：把 n8n/AI 小交付与修站打成 Basic/Standard/Premium，补 Upwork 定制单。", "permissions": "① Seller 账号（邮箱+手机）\n② **ID 验证**（提现）\n③ 提现渠道（如 Payoneer）\n④ Programming & Tech / AI 类目\n⑤ 可选 Seller Plus（放量后再开）", "access_path": "1. Switching to Selling\n2. 建 1–2 个主 Gig（n8n/AI automation；Fix AI web app）\n3. 写清三档交付物与修改次数\n4. 封面/视频 + 链到 portfolio 模板\n5. 标签对齐买家搜索词\n6. 开 Buyer requests → 24h 内回复\n7. 完成求评，控取消率", "caveats": "过低价伤定位；写死范围防修订地狱；API Key 由买家提供；完成率/响应时间影响算法；导流站外支付须守 ToS；国内注意提现合规。", "trends_keywords": "EN: n8n automation fiverr, zapier setup, AI chatbot fiverr, chatgpt integration, web scraping service, make.com scenario\nCN: Fiverr 卖自动化, Fiverr Gig n8n, 海外小企业 AI 聊天机器人", "related_docs": ["doc-smb", "doc-tplplan", "doc-live"], "tags": ["Fiverr", "接单平台", "Gig"], "path": "docs/platforms/fiverr.md", "date": "2026-10-23 16:15", "content": `# Fiverr 操作手册

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
{"id": "freelancer", "type": "freelance", "title": "Freelancer.com", "url": "https://www.freelancer.com/", "summary": "竞标制补充池。2026-10-23 17:13 雷达 37/0（相对午后 11:55 的 31/0 帖数 +6、推荐仍空；新入 Next.js+Calendly+HubSpot score75/143 标、Professional Appointment Booking score67/126 标均红海不投；Office Agent 138；FORGEAI 50→69；Charleston 167→191；Beds24--5 仍不在前排）。手工 discover 09:11 入样 16（613→423）；T-FL×2（n8n-cms-seo / api-metric-dashboard）。预约线靠关键词日表+拒单规则+bz.a/smart.a 提案。", "permissions": "① 账号 + Email\n② KYC/ID（提现）\n③ Bid credits（每日免费标有限）\n④ Milestone 托管理解", "access_path": "1. Browse → n8n / API / scraping / automation\n2. 选描述清、有支付验证的 Fixed 单\n3. 短提案：复述问题 + 3 步 + 价期\n4. Place Bid（省免费标）\n5. 等 Milestone 拨款再开工\n6. 交付→放款→互评", "caveats": "低价卷严重；拒站外先聊诈骗；Bid 别浪费在白嫖帖；精力优先级低于 Upwork。", "trends_keywords": "EN: freelancer.com automation, hire n8n developer, web scraping freelancer, API integration project\nCN: Freelancer 竞标, 海外众包 自动化", "related_docs": ["doc-smb", "doc-backlog", "doc-freelancer-bids", "doc-pulse-1019", "doc-radar-brief", "doc-radar-pulse-1019", "doc-screened-1019e", "doc-radar-pulse-1020", "doc-fl-samples-1020", "doc-fl-templates", "doc-radar-pulse-1021", "doc-booking-map-1021", "doc-fl-samples-1021", "doc-radar-pulse-1022", "doc-booking-keywords-1021", "doc-booking-entry-1021", "doc-booking-acq-1021", "doc-booking-reject-1021", "doc-booking-seeds-1021", "doc-radar-pulse-1023", "doc-fl-samples-1023", "doc-fl-samples-1022"], "tags": ["Freelancer", "接单平台", "竞标"], "path": "docs/platforms/freelancer.md", "date": "2026-10-23 16:15", "content": `# Freelancer.com 操作手册

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
{"id": "contra", "type": "freelance", "title": "Contra（补充）", "url": "https://contra.com/", "summary": "无佣金独立承包商网络。流量小，作补充展示与被动询盘。", "permissions": "① Contra 账号与完整 Profile\n② 收款绑定（平台支持的方式）\n③ Services / Portfolio 公开\n④ 可选连 X/LinkedIn", "access_path": "1. 完善 Independent profile\n2. 添加 AI automation / Fix web app 等 Services\n3. 上传真实 demo 截图（不编造营收）\n4. 链接挂到个人站与 README\n5. 询盘 → 书面报价 → 走 Contra 付款", "caveats": "流量有限，每周看消息即可；定价对齐 Upwork；确认国内收款是否可用，不行则仅展示。", "trends_keywords": "EN: Contra freelance, no commission freelance, AI automation contractor\nCN: Contra 平台, 无佣金 自由职业", "related_docs": ["doc-live", "doc-tplplan"], "tags": ["Contra", "接单平台", "补充"], "path": "docs/platforms/contra.md", "date": "2026-10-23 16:15", "content": `# Contra（补充渠道）

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
{"id": "indie-hn", "type": "community", "title": "Indie Hackers / HN", "url": "https://www.indiehackers.com/", "summary": "轻量社区获客：练需求语言、Show 模板、价值评论，少硬广。", "permissions": "① IH 账号 + bio\n② HN 账号（一点 karma）\n③ 作品集 Contact/邮箱\n④ 可选 X", "access_path": "1. IH 完善「帮 SMB 做 n8n/代码自动化」bio\n2. 参与自动化/AI 帖，贡献干货再链 portfolio\n3. HN 跟 Ask/Show；有实质 demo 再 Show HN\n4. 私信转化到邮件或 Upwork\n5. 痛点词记入 backlog", "caveats": "反感硬广；IH 有 CF；时间盒每周 1–2h；不要当接单大厅刷。", "trends_keywords": "EN: indie hacker automation, solo founder AI tools, Ask HN freelance, show HN scraper, SMB no-code limits\nCN: 独立开发 获客, Indie Hackers 自动化, HN 展示项目", "related_docs": ["doc-smb", "doc-growth", "doc-live"], "tags": ["Indie Hackers", "HN", "社区获客"], "path": "docs/platforms/indie-hn.md", "date": "2026-10-23 16:15", "content": `# Indie Hackers / Hacker News（轻量获客）

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
{"id": "portfolio", "type": "showcase", "title": "个人作品集站", "url": "https://portfolio-site-orpin-three-91.vercel.app", "summary": "对外销售页。Proposal/Gig 最终落地看可运行模板 demo。", "permissions": "① Vercel 部署权限\n② GitHub 源码仓写权限\n③ 各 tpl-* 模板项目\n④ 可选自定义域与分析", "access_path": "1. 打开作品集核对定位文案\n2. 服务卡链到 tpl-landing / form-to-sheet / booking / launch-audit\n3. 改仓 → push → Vercel Ready → 硬刷新\n4. Proposal 只贴与职位相关的 demo\n5. Contact 与回复预期（UTC+8）保持有效", "caveats": "禁止假客户/假营收；标明 demo template；国内访问 Vercel 可能慢，可备截图或 Pages 镜像。", "trends_keywords": "EN: freelancer portfolio, automation developer portfolio, n8n demo, SaaS landing waitlist, launch audit\nCN: 自由职业者 作品集, 自动化 案例演示, 接单 作品站", "related_docs": ["doc-live", "doc-tplplan", "doc-proj", "doc-booking-map-1021"], "tags": ["作品集", "Vercel", "作品展示"], "path": "docs/platforms/portfolio.md", "date": "2026-10-23 16:15", "content": `# 个人作品集站（Portfolio）

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
{"id": "overview-hub", "type": "showcase", "title": "Overview Hub（本站）", "url": "https://gaopfEditer.github.io/overview-hub/", "summary": "对内作战板（也可对外展示系统化能力）：平台手册 + 案例 + 文档。", "permissions": "① GitHub 写权限 gaopfEditer/overview-hub\n② PAT：**repo + workflow**\n③ Pages = GitHub Actions\n④ Actions 可运行 workflows", "access_path": "1. 改 manifest → python3 build_data.py\n2. 本地打开 index.html 预览\n3. commit & push main\n4. 等 Pages Action 绿\n5. 打开 github.io/overview-hub/ 验证三 Tab", "caveats": "缺 workflow scope 推不了 Action；token 永不入库；data.js 内嵌外链 md；base href 必须为 ./", "trends_keywords": "EN: freelance ops playbook, upwork knowledge base, github pages hub\nCN: 接单 作战手册, Upwork 知识库, GitHub Pages 静态站", "related_docs": ["doc-cap", "doc-growth", "doc-tech"], "tags": ["GitHub Pages", "本站", "作品展示"], "path": "docs/platforms/overview-hub.md", "date": "2026-10-23 16:15", "content": `# Overview Hub（本站 · GitHub Pages）

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
{"id": "case-example", "title": "空模板（新增案例请复制）", "is_template": true, "summary": "占位卡：示例结构，不是真实接单案例。字段均为「待填」说明，复制后在 manifest.json 追加真实条目。", "tags": ["示例结构", "占位"], "related_docs": ["doc-screened", "doc-titles", "doc-live"], "path": "docs/cases/example_structure.md", "source": "", "has_evidence": false, "date": "2026-10-23 16:15", "fields": {"来源": "（待填）平台 + URL / 职位 ID", "单子类型": "（待填）如 n8n 修复 / AI Chatbot / 爬虫管道 / 修 Next+Stripe", "操作思路": "（待填）筛选理由 → 匹配 demo → 提案要点 → milestone 切分", "结果": "（待填）未投 / 已投 / 面试 / 中标 / 完成 / 放弃 + 原因"}, "来源": "（待填）平台 + URL / 职位 ID", "单子类型": "（待填）如 n8n 修复 / AI Chatbot / 爬虫管道 / 修 Next+Stripe", "操作思路": "（待填）筛选理由 → 匹配 demo → 提案要点 → milestone 切分", "结果": "（待填）未投 / 已投 / 面试 / 中标 / 完成 / 放弃 + 原因", "content": `# 【示例结构】案例分析卡片（占位）

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
{"id": "case-near-beds24-1019", "title": "近失：BEDS24 OTA（--5 再推·85标；人工始终不投）", "is_template": false, "summary": "近失：Beds24 OTA 系列（--3/--4/--5）雷达多次推荐但人工不投；2026-10-23 07:04 --5 仍淡出推荐池（昨傍晚 17:16 已淡出）。作 PMS/OTA 窄集成素材。", "tags": ["Freelancer", "Beds24", "近失", "竞争"], "related_docs": ["doc-radar-pulse-1019", "doc-longtail", "doc-freelancer-bids", "doc-radar-pulse-1020", "doc-radar-pulse-1021", "doc-booking-map-1021", "doc-radar-pulse-1022", "doc-radar-pulse-1023"], "path": "docs/cases/near_beds24_ota_2026-10-19.md", "source": "https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40780279", "has_evidence": true, "date": "2026-10-23 07:04", "fields": {}, "content": `# 近失：BEDS24 OTA Integration（Freelancer 系列）

## --4（雷达首次推荐 · 2026-10-21 07:01）

- **来源**：[Freelancer · fl-40778471](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40778471) · 雷达 \`job_leads\` **2026-10-21 07:01 +08**
- **预算**：\`$30–250\` Fixed · 投标 **98** · score 120 · \`recommend: true\`（竞争关备注「偏多，谨慎」）
- **筛选**：嵌入轨 · 命中 \`beds24\` · 关键词/预算/清晰/一期过
- **操作思路**：雷达虽推，人工仍不投（预算下沿 + Beds24 经验门槛 + 98 标非窗口）
- **结果**：未投；系列复帖确认长尾需求存在，适合做提案案例而非当前出价

## --4 午前复核（2026-10-21 10:35）

- **来源**：同 fl-40778471 · 雷达 \`job_leads\` **2026-10-21 10:35 +08**
- **预算**：仍 \`$30–250\` · 投标 **112**（早间 98）· score 75 · **\`recommend: false\`**（竞争关：投标过多 ≥100）
- **结果**：维持不投；早间「雷达推但仍不投」的人工判断已被下一刷印证。

## --3（前日复核）

- **来源**：[Freelancer · fl-40771845](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40771845) · 雷达 2026-10-20 **17:00** +08（118 标）；页面约 **36**
- **结论**：不投。雷达与页面投标数不一致时以更严数字作否决；预算/经验门槛不变。

> 2026-10-21 11:51 雷达复核：\`--4\` 仍 Open，投标 **121**（午前 112），\`recommend: false\`。继续作 OTA/PMS 窄集成素材，不投。

> 2026-10-21 17:00 雷达复核：\`--4\` 仍 Open，投标 **132**（午间 121），\`recommend: false\`。继续不投。

> 2026-10-22 07:05 雷达复核：\`--4\` **未再出现**在 \`job_leads\` 前排（昨傍晚仍 132 标）。维持不投；系列淡出公开推荐池。

> 2026-10-22 10:32 雷达复核：系列以 **[--5](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40780279)**（\`fl-40780279\`）重回推荐池 · \`$30–250\` · 投标 **79** · score 120 · \`recommend: true\`。人工仍不投（同 --4 门槛）；作 OTA/PMS 素材。

> 2026-10-22 11:51 雷达复核：[--5](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40780279) 仍推荐 · 投标 **85**（午前 79）· score 120。维持不投；标数爬升确认非冷启动窗口。
> 2026-10-22 17:16 雷达复核：\`--5\` **未再出现**在 \`job_leads\` 前排（午后仍推荐 · 85 标）。维持不投；系列再次淡出公开推荐池。

> 2026-10-23 07:04 雷达复核：\`--5\` 仍 **未再出现**在 \`job_leads\` 前排（昨傍晚 17:16 已淡出）。维持不投；系列继续淡出公开推荐池。
`},
{"id": "case-qual-elevenlabs-1019", "title": "近失：ElevenLabs n8n 语音管线（提案 8→117）", "is_template": false, "summary": "17:05 复核：仍 Open·117 标，维持降级不投。", "tags": ["Freelancer", "近失", "n8n", "Agent", "语音", "竞争"], "related_docs": ["doc-screened-1019e", "doc-freelancer-bids", "doc-radar-pulse-1020", "doc-fl-templates", "doc-fl-samples-1020"], "path": "docs/cases/qual_elevenlabs_n8n_2026-10-19.md", "source": "https://www.freelancer.com/projects/api/elevenlabs-voice-pipeline-fix-multi", "has_evidence": true, "date": "2026-10-20 17:05", "fields": {"来源": "Freelancer（2026-10-19 晚间 WebFetch 核验）", "单子类型": "n8n 修复 + 多 Agent 语音管线（ElevenLabs/STT/Polly/Azure）", "操作思路": "€250–750 · 曾 8 标现 117 · 低竞争失效 → 不投", "结果": "维持近失 — 抢标窗口已过"}, "来源": "Freelancer（2026-10-19 晚间 WebFetch 核验）", "单子类型": "n8n 修复 + 多 Agent 语音管线（ElevenLabs/STT/Polly/Azure）", "操作思路": "€250–750 · 曾 8 标现 117 · 低竞争失效 → 不投", "结果": "维持近失 — 抢标窗口已过", "content": `# 近失（曾合格）：ElevenLabs Voice Pipeline Fix & Multi-Agent Build（Freelancer）

- **来源**：[Freelancer · elevenlabs-voice-pipeline-fix-multi](https://www.freelancer.com/projects/api/elevenlabs-voice-pipeline-fix-multi) · 晚间放宽重评 2026-10-19 约 22:50 +08；**2026-10-20 ~17:05 复核**
- **预算**：€250–750 EUR（下沿约 $270）· 提案 **117**（晚间曾为 **8**）· 仍 Open，约 4 天截止
- **单子类型**：n8n 集成失败修复 + 多 Agent；API / DB / ElevenLabs + Google STT / Polly / Azure Speech
- **风险**：客户 Berlin，Member since 2026-10-17（新号无花费）；范围相对下沿偏紧；**竞争已红海**
- **操作思路**：原计划报 €400–550、三段里程碑；现提案远超 ≤30 门槛 → **本轮不投**
- **结果**：维持近失。印证：n8n/语音管线帖抢标极快，合格窗口以小时计。
`},
{"id": "case-qual-freight-leadgen-1019", "title": "近失（曾合格）：货代 AI 线索生成 Agent pilot（提案 10↔128）", "is_template": false, "summary": "17:05 页面 Open·128 标；15:01 的 10 标不可靠。降级观望/不投。", "tags": ["Freelancer", "近失", "线索生成", "WhatsApp", "Agent", "竞争"], "related_docs": ["doc-screened-1019e", "doc-agent-frameworks", "doc-radar-pulse-1020", "doc-fl-templates", "doc-fl-samples-1020"], "path": "docs/cases/qual_freight_leadgen_2026-10-19.md", "source": "https://www.freelancer.com/projects/ai-chatbot/lead-generation-agent-for-forwarding", "has_evidence": true, "date": "2026-10-20 17:05", "fields": {"来源": "Freelancer（2026-10-19 晚间 WebFetch 核验）", "单子类型": "n8n/Python + Claude API + WhatsApp Business + HubSpot/Zoho 线索发现与打分", "操作思路": "$250–750 · 本轮 128 标（15:01 曾见 10）· 低竞争失效 → 不投", "结果": "降级近失 — 提案数跳动，勿用单次低读数当窗口"}, "来源": "Freelancer（2026-10-19 晚间 WebFetch 核验）", "单子类型": "n8n/Python + Claude API + WhatsApp Business + HubSpot/Zoho 线索发现与打分", "操作思路": "$250–750 · 本轮 128 标（15:01 曾见 10）· 低竞争失效 → 不投", "结果": "降级近失 — 提案数跳动，勿用单次低读数当窗口", "content": `# 近失（曾合格）：AI lead generation agent for forwarding company — pilot（Freelancer）

- **来源**：[Freelancer · lead-generation-agent-for-forwarding](https://www.freelancer.com/projects/ai-chatbot/lead-generation-agent-for-forwarding) · 晚间放宽重评 2026-10-19 约 22:50 +08；**2026-10-20 ~17:05 复核**
- **预算**：$250–750 USD · 提案 **128**（本轮 WebFetch）· 仍 Open，约 4 天截止
- **说明**：15:01 曾见页面 **10** 标；本轮又回 **128**（与午后早期记录一致）。Freelancer 提案数会跳动，**以最新页面为准**，不可用单次低读数当合格窗口。
- **单子类型**：n8n 或 Python + Claude API + WhatsApp Business API + HubSpot/Zoho；2 周试点（线索发现 + enrichment/打分）
- **风险**：客户 Dubai，Member since 2026-10-17（新号）；UAE PDPL / WhatsApp opt-in；全量五阶段对预算偏大
- **操作思路**：原计划 Pilot $450–650；现提案远超 ≤30 → **本轮不投 / 观望**
- **结果**：降级近失。印证：货代/线索类帖竞争数字不稳定，投前必须当场复核提案数。
`},
],
case_field_order: ["来源", "单子类型", "操作思路", "结果"],
docs: [
{"id": "doc-cap", "title": "能力边界", "theme": "能力与判断", "date": "2026-10-23 16:15", "summary": "接单前判断工具：各端输入输出、资源上限与报价前必问清单。", "tags": ["能力边界", "报价", "开发"], "source": "", "path": "dev-topics/01_capability_boundaries.md", "related_docs": [], "content": `# 软件开发专题：各端能力边界

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
{"id": "doc-growth", "title": "Web 全栈 / Agent 成长方向", "theme": "成长路径", "date": "2026-10-23 16:15", "summary": "Web 全栈与 Agent 方向的能力进阶与接单映射。", "tags": ["全栈", "Agent", "成长"], "source": "", "path": "dev-topics/02_web_fullstack_agent_growth.md", "related_docs": [], "content": `# 网站 + 全栈 + Agent 能力提升路线

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
{"id": "doc-proj", "title": "项目推荐", "theme": "项目与作品", "date": "2026-10-23 16:15", "summary": "适合练手与挂作品集的项目推荐。", "tags": ["项目", "推荐", "作品集"], "source": "", "path": "dev-topics/03_project_recommendations.md", "related_docs": [], "content": `# 03 · 项目推荐：按 ROI 排序的 12 个可落地项目（鹏飞版）

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
{"id": "doc-tech", "title": "复杂技术清单（AI 开发参考）", "theme": "技术参考", "date": "2026-10-23 16:15", "summary": "按场景分组的复杂技术：用途、难点、AI 提示模板与常见坑。", "tags": ["技术清单", "AI辅助", "接单"], "source": "", "path": "dev-topics/04_complex_tech_checklist.md", "related_docs": [], "content": `# 04 · 复杂技术清单：接单开发时的 AI Prompt 速查（鹏飞版）

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
{"id": "doc-titles", "title": "Upwork 标题与预算", "theme": "Upwork 调研", "date": "2026-10-23 16:15", "summary": "职位标题 × 预算 × 竞争样本与优先投标 Top5。", "tags": ["Upwork", "预算", "标题"], "source": "", "path": "upwork/upwork_titles_budgets.md", "related_docs": [], "content": `# Upwork 职位标题 × 预算 × 竞争 参考表（建站 + 后端自动化）

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
{"id": "doc-backlog", "title": "需求 Backlog", "theme": "Upwork 调研", "date": "2026-10-23 16:15", "summary": "需求分类与待做/已覆盖条目积压。", "tags": ["需求分类", "Backlog"], "source": "", "path": "upwork/requirements_backlog.md", "related_docs": [], "content": `# 接单需求列表（维护用）

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
{"id": "doc-smb", "title": "中小企业需求聚类", "theme": "市场研究", "date": "2026-10-23 16:15", "summary": "海外 SMB 软件/开发支出聚集区与价格带出处。", "tags": ["SMB", "Fiverr", "Trends"], "source": "", "path": "upwork/smb_demand_clusters.md", "related_docs": [], "content": `# 海外 SMB / 个体户软件与开发支出聚集区（US/UK/AU/EU 自由职业市场）

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
{"id": "doc-tplplan", "title": "模板计划", "theme": "模板与交付", "date": "2026-10-23 16:15", "summary": "可复用高影响模板批次与验收标准。", "tags": ["模板", "Vercel"], "source": "", "path": "upwork/templates_plan.md", "related_docs": [], "content": `# 通用高影响模板计划（2026-10-09）

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
{"id": "doc-screened", "title": "晚间筛选短名单 2026-10-14", "theme": "Upwork 调研", "date": "2026-10-23 16:15", "summary": "按技能契合排序的可投开放单短名单（当日晚间）。", "tags": ["筛选", "短名单", "Upwork"], "source": "", "path": "upwork/screened_2026-10-14_evening.md", "related_docs": [], "content": `# Upwork 晚间筛选短名单 — 2026-10-14（UTC+8 约 22:30）

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
{"id": "doc-live", "title": "在线模板与作品集链接", "theme": "模板与交付", "date": "2026-10-23 16:15", "summary": "英文 T1–T4 Vercel + Portfolio；业务向 bz.a / smart.a 预约与内容一体演示。", "tags": ["模板", "作品集", "链接"], "source": "https://portfolio-site-orpin-three-91.vercel.app", "path": "docs/live_templates.md", "related_docs": ["doc-booking-map-1021"], "content": `# 在线模板与作品集

| 模板 | 用途 | 链接 |
|---|---|---|
| Landing + Waitlist | 落地页 + 等候名单收集 | https://tpl-landing-waitlist.vercel.app |
| Form → Sheet | 表单提交写入表格 | https://tpl-form-to-sheet.vercel.app |
| Booking Calendar | 预约日历（周历占坑） | https://tpl-booking-calendar.vercel.app |
| Launch Audit Report | 上线审计报告 | https://tpl-launch-audit-report.vercel.app |
| 作品集 Portfolio | 个人作品集站点 | https://portfolio-site-orpin-three-91.vercel.app |
| bz.a 预约业务站 | 访客浏览+动态字段+下单/Stripe 叙事 | https://bz.a.ezcoin.ink |
| smart.a 多客陪玩 | 内容/圈子 + 多服务者档期一体 | https://smart.a.ezcoin.ink |

用法：在 proposal 中直接贴对应模板链接作为 demo。预约/CMS 类单优先 T3 + bz.a + smart.a（详见 \`booking_content_requirements_map_2026-10-21\`）。
`},
{"id": "doc-pulse-1019", "title": "Upwork 市场脉搏 2026-10-19", "theme": "Upwork 调研", "date": "2026-10-19 09:00", "summary": "公开页复筛：QUALIFIED=0；近失表、跳过模式、入口词与低标方向。", "tags": ["Upwork", "筛选", "脉搏", "入口词"], "source": "", "path": "docs/notes/upwork_pulse_2026-10-19.md", "related_docs": ["doc-screened", "doc-titles", "doc-freelancer-bids", "doc-radar-pulse-1019"], "content": `# Upwork 市场脉搏 · 2026-10-19（Asia/Shanghai）

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
{"id": "doc-freelancer-bids", "title": "Freelancer 竞标观察与低标方向", "theme": "市场研究", "date": "2026-10-12", "summary": "高竞标血池 vs 相对可打方向；关键词与本周投单比例。", "tags": ["Freelancer", "低标", "筛单", "Playwright"], "source": "", "path": "docs/notes/freelancer_bid_patterns.md", "related_docs": ["doc-pulse-1019", "doc-smb", "doc-backlog", "doc-radar-pulse-1019"], "content": `# Freelancer 竞标观察（2026-10-12 公开列表抽样）

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
{"id": "doc-longtail", "title": "长尾方向 · 横切能力 · 另辟蹊径", "theme": "成长路径", "date": "2026-10-18", "summary": "避开大红词内卷；优先 Shopify 售后 Agent / Beds24 工单 / 保修 Claim。", "tags": ["长尾", "Shopify售后", "Beds24", "Agent"], "source": "", "path": "docs/notes/longtail_directions_2026-10-18.md", "related_docs": ["doc-radar-brief", "doc-smb", "doc-pulse-1019", "doc-radar-pulse-1019"], "content": `# 长尾方向 · 横切能力 · 另辟蹊径（2026-10-18）

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
{"id": "doc-radar-brief", "title": "需求雷达口径与短线优先", "theme": "市场研究", "date": "2026-10-18", "summary": "短线量大/增长快、后期高投入意愿；Chrome 扩展爬虫与 Lovable+Stripe 优先。", "tags": ["雷达", "筛选口径", "Lovable", "Chrome扩展"], "source": "", "path": "docs/notes/demand_radar_brief_2026-10-18.md", "related_docs": ["doc-longtail", "doc-freelancer-bids", "doc-tplplan", "doc-radar-pulse-1019"], "content": `# 通话笔记：需求雷达 · 筛选口径 · MVP（2026-10-18）

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
{"id": "doc-radar-pulse-1019", "title": "需求雷达脉搏 2026-10-19 晚间续刷（17:43）", "theme": "市场研究", "date": "2026-10-19 17:43", "summary": "17:43 雷达：33 帖 / 推荐 0；Beds24 近失仍 120 标；self-hosted 近失投标 133→157。短线不刷标。", "tags": ["雷达", "Freelancer", "Beds24", "脉搏"], "source": "", "path": "docs/notes/radar_pulse_2026-10-19.md", "related_docs": ["doc-radar-brief", "doc-longtail", "doc-pulse-1019", "doc-freelancer-bids"], "content": `# 需求雷达脉搏 · 2026-10-19 晚间续刷（Asia/Shanghai）

> 来源：线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\` + \`data/job_leads.json\`（\`published_at\` **2026-10-19 17:43 +08**；较同日 13:53 / 11:50 / 10:27 快照续刷）。公开 API only；推荐池仍空。

## 站内快照

| 指标 | 数值 |
|---|---|
| 帖子总数 | **33**（13:53 为 34；本轮 ingest \`fetched_projects=33\`） |
| 推荐数量 | **0**（连续为空） |
| Freelancer ingest | OK（18 queries → 33 projects） |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 **demo**（只作灵感） |

→ 短线推荐池仍空；量略回落到 33，过关单仍为 0。

## 最高分近失（未推荐）

| 标题 | 预算 | 投标 | 轨道/命中 | 卡关 |
|---|---|---|---|---|
| [BEDS24 OTA Integration Setup](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40771845) | $30–250 | **120** | 嵌入 · \`beds24\` | 竞争（≥100）；score 75 |
| WordPress & Blogspot Social Media Tools | $30–250 | **157**（13:53 为 133；11:50 为 115） | 加固 · \`self-hosted\` | 一期不清 + 竞争；score 67 |

其余多为关键词未命中的营销/建站/人力帖（Travel Copilot、Airbnb 风格站、Call Center、预约 Setter 等），不列入跟进。

## 对长尾的印证

- **Beds24** 同帖仍居最高分近失：关键词/预算/清晰/一期四关过，仅被投标量否决 → 与长尾笔记「Beds24 客信工单」同向；公开 Freelancer 池竞争仍凶，适合当**产品/案例方向**而非本轮必投。
- **self-hosted** 近失投标继续爬升（115→133→157），公开池更不宜硬刚。
- 入口词继续盯：\`beds24\` · \`self-hosted\` · OTA/PMS 窄集成；避开泛 chatbot / 纯建站血池。

## 操作

先看雷达「推荐 + Open」；本轮无推荐则不刷标。Upwork 侧见同日 \`upwork_pulse_2026-10-19\`（QUALIFIED=0；上午公开复筛后至晚间仍无新 checked 文件）。
`},
{"id": "doc-screened-1019e", "title": "晚间放宽重评 2026-10-19（QUALIFIED=2）", "theme": "Upwork 调研", "date": "2026-10-23 16:15", "summary": "新硬过滤下曾 Freelancer 2 单合格；2026-10-20 傍晚复核后均已降级：ElevenLabs 117 标、货代 pilot 128 标。Upwork 0。附 16 条近失。", "tags": ["Freelancer", "Upwork", "短名单", "放宽标准"], "source": "", "path": "upwork/screened_2026-10-19_evening.md", "related_docs": [], "content": `# 海外接单晚间筛选（放宽标准重评）— 2026-10-19（Asia/Shanghai 约 22:50）

- **对象**：鹏飞（AI 落地 / 自动化 / Playwright·CDP / 后端集成 / Agent·客服 / 修 bug·二次开发 / 全栈）
- **主渠道**：Fiverr + Freelancer；Upwork 次要
- **方法**：重评 \`checked_2026-10-19_morning.txt\` 近失 + 晚间扫到的候选；WebSearch + WebFetch 补核。**未登录、未投标、未绕 CF**。apply 详情晚间多 CF；能打开的页已核 Activity。
- **新硬过滤（本轮）**：
  - 提案 **≤30** 可进（**50+ 必跳**；「20 to 50」因上沿超 30 → **不进**）
  - 固价 **≥$200**（或等值外币下沿折合 ≥$200）
  - 时薪 **≥$20**；页面无时薪但客户有花费/支付验证且技能强匹配 → 可进，标「时薪未核验」
  - 新客户无花费：**可进**，必须标风险
  - 仍跳：对中国关闭（如 US-only）、过低预算、已关闭、范围相对预算**严重** lowball、提案 50+

## 结论先行

**QUALIFIED = 2**（均为 Freelancer；Upwork 本轮无通过新标准的 page-verified 单）

---

## QUALIFIED

### 1) ElevenLabs Voice Pipeline Fix & Multi-Agent Build
- **平台**：Freelancer  
- **链接**：https://www.freelancer.com/projects/api/elevenlabs-voice-pipeline-fix-multi  
- **预算**：€250–750 EUR（下沿约 $270，≥$200）  
- **提案数**：**8**（Open；Ends in 6 days）— WebFetch 核验  
- **适合理由**：n8n 修集成失败 + 多 Agent；API / DB / ElevenLabs + Google STT / Polly / Azure Speech —— 对齐自动化、后端集成、Agent。  
- **风险**：客户 Berlin；**Member since Oct 17, 2026（新号、无历史花费）**；范围「修管线 + 多 Agent」相对下沿偏紧。  
- **建议报价**：€400–550；先要现有 n8n 导出与失败 execution；里程碑：诊断修复 → 多 Agent 子流程 → 联调文档。

### 2) AI lead generation agent for my forwarding company — pilot
- **平台**：Freelancer  
- **链接**：https://www.freelancer.com/projects/ai-chatbot/lead-generation-agent-for-forwarding  
- **预算**：$250–750 USD  
- **提案数**：**10**（Open）— WebFetch 核验  
- **适合理由**：客户明确偏好 **n8n 或 Python + Claude API + WhatsApp Business API + HubSpot/Zoho**；先做 2 周试点（发现线索 +  enrichment/打分），后续 outreach / 入站 bot / CRM —— 与爬虫/数据、API、Agent 强匹配。  
- **风险**：客户 Dubai；**Member since Oct 17, 2026（新号）**；UAE PDPL / WhatsApp opt-in 合规要求；全量五阶段相对 $250–750 偏大，**务必锁死 pilot 范围**。  
- **建议报价**：Pilot（阶段 1–2）**$450–650**；全量另报；标书写清数据源、打分规则、客户自有账号所有权、月度 API 成本估算。

---

## 近失（放宽后仍不合格 / 未核验）

| # | 标题 | 链接 | 预算 | 提案 | 为何仍不入 |
|---|------|------|------|------|------------|
| A | Full Stack AI Service Marketplace (AWS) | https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer_~022111818917446620252/ | $1,500 Fixed | **现为 20 to 50**（早间曾 15–20） | 提案带上沿 >30；且完整 marketplace+支付+AI 对 $1500 **严重 lowball**；印度新客 |
| B | Building n8n automation services for businesses | https://www.upwork.com/freelance-jobs/apply/Building-n8n-automation-services-for-businesses_~022111241722805022037/ | $350 Fixed | **20 to 50** | 提案带不满足 ≤30；美新客 Oct 16 |
| C | Vapi Fix Legal Document Generation | https://www.upwork.com/freelance-jobs/apply/Vapi-Developer-Needed-Fix-Legal-Document-Generation-and-Email-Workflow_~022110914548059982947/ | $250 Fixed | **20 to 50** | 提案带；**applicantLocationRequirements=United States only**；已 Hires:1；客户 $1.2K spent |
| D | Weekly Stock & Price Web Scraper | https://www.freelancer.com/projects/python/weekly-stock-price-web-scraper | $250–750 | **230** | 技能极贴（登录门户+Playwright+Sheets）但提案远超 |
| E | Intelligent AI/ML Document Analysis & QA (RAG) | https://www.freelancer.com/projects/react-js/intelligent-document-analysis-platform | 文案 $1,500 / UI $250–750 | **259** | 技能贴合但红海；美新客 Oct 19 |
| F | AI Bot for eCommerce Data Enrichment | https://www.freelancer.com/projects/api/bot-for-ecommerce-data-enrichment | $250–750 | **44** | >30；爬虫+n8n 贴合 |
| G | Urgent Claude Agent Fix (claims) | https://www.upwork.com/freelance-jobs/apply/Urgent-Senior-Claude-Agent-Engineer-Quickly-Fix_~022109692402424104912/ | $300 Fixed | **50+**（搜索摘要） | 50+ |
| H | Looking for AI dev + Client Facing Meetings | nx/search 卡片（无可靠 apply） | Hourly **未核验** | **未核验** | 禁止编造；EST 强客户面销适配当心 |
| I | FMora Senior Full-Stack AI/Integration | https://www.upwork.com/freelance-jobs/apply/Senior-Full-Stack-Integration-Developer_~022111829338610990521/ | 时薪未列（客户 UK $14K spent） | **50+** | 50+ |
| J | B.L.U.E. Marketplace | https://www.upwork.com/freelance-jobs/apply/Senior-Full-Stack-Mobile-Engineer-Marketplace_~022111655805497725675/ | schema $16–30/hr | 15–20 | **US-only** |
| K | Lovable 二次开发上线 | https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer-Needed-Further-Develop-and-Launch-Website-Built-Lovable_~022111828589770370389/ | Not Sure Hourly | **20 to 50** | 提案带；无时薪且非强主技能 |
| L | FB Lead → Zapier emails | https://www.upwork.com/freelance-jobs/apply/Facebook-Lead-Form-Automated-Email-Setup-Google-Workspace-Zapier_~022111472155209072281/ | $100 | 50+ | <$200 + 50+ |
| M | Expert Linux Playwright Scraper | https://www.freelancer.com/projects/automation/expert-linux-playwright-web-scraper | ₹12.5k–37.5k | 87 / **已 Award** | 已关闭竞标 |
| N | AI Call Reception Service (SA) | https://www.freelancer.com/projects/ai-chatbot/call-reception-service | $250–750 | **165** | >30 |
| O | AI & Business Automation Expert | https://www.freelancer.com/projects/ai-automation/business-automation-expert | ₹12.5k–37.5k（约 $150–450） | **103** | >30；下沿可能 <$200 |
| P | AI Receptionist & Quotation | https://www.freelancer.com/projects/ai-chatbot/receptionist-quotation-automation | $30–250 | **189** | 下沿 <$200 + >30 |

**Fiverr**：Buyer Request 需卖家登录，本轮仍跳过。

## Upwork 可达性备注

- 部分 apply（如 Vapi、Chatbot Support）晚间可 WebFetch；多数仍 CF。
- 「20 to 50」一律按不满足 ≤30 处理，避免编造精确人数。

## RESULT

\`\`\`
QUALIFIED=2
1) ElevenLabs n8n voice pipeline — FL — €250-750 — 8 bids
2) Freight AI lead-gen pilot — FL — $250-750 — 10 bids
NO_UPWORK_QUALIFIED_UNDER_RELAXED_RULES
FILE=/workspace/upwork/screened_2026-10-19_evening.md
\`\`\`
`},
{"id": "doc-agent-frameworks", "title": "开源 AI Agent / 客服 Agent 技术调研（2026-10）", "theme": "技术参考", "date": "2026-10-23 16:15", "summary": "做网站客服 Agent 的选型：LangGraph 编排 + LlamaIndex/自建 RAG + Chatwoot 前台转接 + 自写 HTTP/DB tools；不建议 AutoGen/CrewAI/Rasa 作主栈。", "tags": ["Agent", "客服", "LangGraph", "Chatwoot", "RAG"], "source": "", "path": "agent_frameworks_2026-10.md", "related_docs": [], "content": `# 开源 AI Agent / 客服 Agent 技术调研（截至 2026-10）

> 调研日期：2026-10-19（Asia/Shanghai）  
> 用途：明天动手做「网站客服 Agent」的技术储备  
> 数据来源：GitHub API / 官方文档 / WebSearch；stars 与 pushed_at 均为当日核验，禁止当作永久数字。

---

## 结论先行（给决策用）

**明天做客服 Agent，优先组合：**

| 角色 | 主推荐 | 备选 |
|------|--------|------|
| Agent 编排 + tool calling + 可中断人工审批 | **LangGraph** | **OpenAI Agents SDK** 或 **PydanticAI** |
| RAG 知识库 | LlamaIndex（检索强）或自建向量库 + 简单 retrieve tool | Haystack / Dify 内置知识库 |
| 会话前台 + 人工转接 | **Chatwoot**（Captain / AgentBot） | Botpress；或自建 WebSocket 会话层 |
| 查单/改预订等业务动作 | 自己写 **HTTP/DB tools**（不要用浏览器去点后台） | — |

**不建议作为主栈：**  
Microsoft AutoGen（官方已引导迁移，新项目勿选）、CrewAI（角色协作型，单客服会话过重）、Rasa（NLU 时代遗产，LLM-first 客服不如直接 tool calling）、Browser-use/Skyvern（客服核心路径不应靠刷网页）、纯 Dify/FastGPT 若你要深度定制 tool/转接逻辑时后期会卡住（适合 MVP 演示）。

---

## 一、支持 LLM Tool Calling 的通用 Agent 框架

### 1. LangGraph

- **地址**：https://github.com/langchain-ai/langgraph  
  文档：https://docs.langchain.com/oss/python/langgraph/overview  
- **核心特点**：低层图编排（StateGraph / nodes / edges）；durable execution、checkpoint、**human-in-the-loop**、流式输出；可混合确定性业务步骤与 LLM 步骤；可与 LangChain 解耦使用。生态上还有更高层的 Deep Agents（规划/子 agent）。  
- **适用场景**：需要可控状态机的生产客服/工单流（FAQ → 查单 → 改预订 → 转人工）；长会话、可恢复、可审批。  
- **成熟度**：**生产可用**（Klarna 等公开案例；LangSmith 可观测）。学习曲线中等。  
- **社区活跃度**：约 **43.5k** stars；\`pushed_at\` **2026-10-19**（当日仍有 CLI release）；MIT。近期有 1.x 系列（含 type-safe streaming \`version="v2"\` 等变更，接入前看迁移说明）。

### 2. CrewAI

- **地址**：https://github.com/crewAIInc/crewAI · https://crewai.com  
- **核心特点**：角色扮演式多 agent（Crew / Task）；上手快、教程多；适合「调研员 + 写手 + 审核员」一类协作任务。  
- **适用场景**：内部自动化、内容/研究流水线；**不优先**作为单线程客服会话内核。  
- **成熟度**：可用但需踩坑（多 agent 易吵、成本与可控性变差）；企业有 AMP 商业层。  
- **社区活跃度**：约 **59.9k** stars；\`pushed_at\` **2026-10-19**；MIT。活跃度很高。

### 3. AutoGen / AG2 / Microsoft Agent Framework（重大变更必读）

| 项目 | 地址 | 状态简述 |
|------|------|----------|
| **microsoft/autogen** | https://github.com/microsoft/autogen | 官方 README 明确：**已归档、不再积极维护**；新用户应迁到 Microsoft Agent Framework。约 **61.5k** stars（历史光环大）。 |
| **AG2（社区）** | https://github.com/ag2ai/ag2 · https://ag2.ai | AutoGen 精神续作；v1 起协议驱动，Classic（\`autogen\` import）拆到 ag2-classic 维护模式。约 **5.0k** stars；\`pushed_at\` 2026-10-19。 |
| **Microsoft Agent Framework** | https://github.com/microsoft/agent-framework · https://aka.ms/agent-framework | AutoGen + Semantic Kernel **官方统一继任者**；Python/.NET；2026 已宣传 1.0。约 **14.2k** stars；\`pushed_at\` 2026-10-19。 |

- **适用场景**：微软栈 / Azure 企业多 agent；研究型多 agent 对话。  
- **成熟度**：Agent Framework → **生产可用（企业向）**；AG2 → 可用但生态小于 LangGraph；**新项目不要再选 microsoft/autogen**。  
- **迁移文档**：https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen/

### 4. OpenAI Agents SDK

- **地址**：Python https://github.com/openai/openai-agents-python · JS https://github.com/openai/openai-agents-js  
  文档：https://openai.github.io/openai-agents-python/  
- **核心特点**：轻量；Agents / Tools / **Handoffs** / Guardrails / Sessions / HITL / Tracing；号称 provider-agnostic（OpenAI + 100+ LLM）；有 Realtime/Voice、Sandbox agents。  
- **适用场景**：快速搭「客服主 agent + 查单子 agent handoff」；与 OpenAI 模型深度绑定团队最省事。  
- **成熟度**：**可用偏生产**（API 仍在 0.x，但迭代极快）；适合中小项目与 POC。  
- **社区活跃度**：约 **30.1k** stars；最新 release **v0.24.0（2026-10-15）**；\`pushed_at\` 2026-10-19；MIT。

### 5. 2025–2026 值得关注的替代

#### Semantic Kernel → 一并看 Agent Framework

- **地址**：https://github.com/microsoft/semantic-kernel · https://aka.ms/semantic-kernel  
- **特点**：.NET/Python/Java 插件与企业集成；Microsoft 正把重心并入 Agent Framework。约 **28.7k** stars，仍有推送（2026-10-19）。  
- **成熟度**：存量维稳可用；**新项目优先 Agent Framework**。

#### PydanticAI

- **地址**：https://github.com/pydantic/pydantic-ai · https://pydantic.dev/pydantic-ai  
- **特点**：端到端类型安全；与 Pydantic 生态一体；tool 参数校验强；durable execution / MCP / OpenTelemetry / Evals。约 **20.7k** stars；\`pushed_at\` 2026-10-19；MIT。  
- **适用**：Python 后端团队、要强 schema 的查单/改预订 tools。  
- **成熟度**：**可用偏生产**（类型与测试友好）；复杂图编排不如 LangGraph 直观。

#### Mastra

- **地址**：https://github.com/mastra-ai/mastra · https://mastra.ai  
- **特点**：**TypeScript 优先**；agents + graph workflows（then/branch/parallel）；memory、RAG、evals、MCP；suspend/resume 做人机协作。约 **28.9k** stars；\`pushed_at\` 2026-10-19。  
- **注意**：core 多为 Apache-2.0，但仓库 license 标注为 Other——**生产前核验 \`ee/\` 企业许可**。  
- **适用**：Next.js/Node 全栈客服；与 Stagehand 同属 TS 生态。  
- **成熟度**：可用但需踩坑（许可与商业层）。

#### LlamaIndex Workflows / Llama Agents

- **主仓**：https://github.com/run-llama/llama_index（约 **52.6k** stars）  
- **Agent/Workflows 仓**：https://github.com/run-llama/llama-agents（约 **460** stars，相对新）  
  文档：https://developers.llamaindex.ai  
- **特点**：事件驱动 async steps；文档/数据连接器强；AgentWorkflow + HITL 事件；RAG 血统深。  
- **适用**：知识库问答是主战场的客服；检索质量优先。  
- **成熟度**：LlamaIndex 本体生产级；独立 llama-agents 包仍偏新 → **可用但需踩坑**。

#### Haystack Agents

- **地址**：https://github.com/deepset-ai/haystack · https://haystack.deepset.ai  
  Agent 文档：https://docs.haystack.deepset.ai/docs/agent  
- **特点**：组件化 pipeline + Agent（tool calling）；检索/文档处理成熟；Apache-2.0。约 **26.8k** stars；\`pushed_at\` 2026-10-19。  
- **适用**：RAG-first、要可观测检索链路的客服/搜索助手。  
- **成熟度**：**生产可用**（检索侧）；多 agent 花活不如 LangGraph/CrewAI。

#### 产品侧：Dify / FastGPT（一句）

| 项目 | 地址 | stars（约） | 一句话 |
|------|------|-------------|--------|
| **Dify** | https://github.com/langgenius/dify · https://dify.ai | **158.9k** | 可视化 Agent/Workflow/RAG/LLMOps；自托管快；改底层逻辑受限。许可需看官方条款（非纯 MIT）。 |
| **FastGPT** | https://github.com/labring/FastGPT · https://fastgpt.io | **29.9k** | 知识库问答 + 可视化工作流；中文社区友好；适合国内快速上线 FAQ 机器人。 |

两者适合 **MVP / 业务同学可改流程**；深度自定义 tool + 复杂转接策略时，后面常要迁到代码框架。

---

## 二、专门面向客服 / 支持场景的开源项目

### 1. Chatwoot（前台 + 人工转接底座，强烈建议）

- **地址**：https://github.com/chatwoot/chatwoot · https://www.chatwoot.com  
  Captain：https://www.chatwoot.com/captain  
- **核心特点**：开源全渠道客服台（网页 Widget、邮件、社媒等）；**Captain** 可基于帮助中心/FAQ 自动答复并 **handoff 到人工**；另有 **Agent Bot API/Webhooks** 可接你自己的 LangGraph/OpenAI Agent。Copilot 辅助坐席。  
- **适用场景**：你要「网站客服 + 人工接管」——几乎是默认前台。  
- **成熟度**：**生产可用**（客服产品本身成熟；Captain 能力持续扩展，自托管需配模型 Key）。  
- **社区活跃度**：约 **38.0k** stars；\`pushed_at\` **2026-10-19**；许可为 Other（开源但有商业条款，上线前读 LICENSE）。

### 2. Botpress

- **地址**：https://github.com/botpress/botpress · https://botpress.com  
- **核心特点**：偏 LLM Agent / 对话构建的开源 hub；可对接渠道；可视化与集成较多。约 **15.0k** stars；最近 push 约 **2026-10-13**；MIT。  
- **适用**：对话流产品化、少写代码；与 Chatwoot 可并存（Botpress 偏 bot，Chatwoot 偏 desk）。  
- **成熟度**：可用；云与开源边界要分清。  
- **活跃度**：中等偏活跃。

### 3. Rasa

- **地址**：https://github.com/RasaHQ/rasa · https://rasa.com/docs/rasa/  
- **核心特点**：经典 NLU + 对话管理；意图/故事/规则；可接渠道。约 **21.4k** stars。  
- **注意**：\`pushed_at\` 约 **2026-07-24**，节奏明显慢于 LLM agent 新秀；默认分支仍在 3.6.x 线。  
- **适用**：存量 Rasa 项目、强意图可控对话；**新开 LLM 客服不推荐从 Rasa 起步**。  
- **成熟度**：生产级（传统 chatbot）；对「RAG + tool calling」新范式不友好。

### 4. ChatterMate（客服垂直、体量小）

- **地址**：https://github.com/chattermate/chattermate.chat · https://chattermate.chat  
- **核心特点**：自述为开源 AI 客服平台——**AI chatbot + human handoff**、Shopify/Slack、可视化工作流；Apache-2.0。约 **142** stars；\`pushed_at\` 2026-10-19。  
- **适用**：想要「一整套客服」且能接受小项目风险时试用。  
- **成熟度**：**早期实验 / 可用但需踩坑**；不要当作 Chatwoot 替代品硬上生产。

### 5. 自定义「RAG 客服栈」（行业常见落地形态）

没有单一明星仓能覆盖一切；成熟团队常见拆法：

\`\`\`
网站 Widget / Chatwoot
        │
   Agent 运行时（LangGraph 或 Agents SDK）
        ├─ retrieve_kb（向量库 / LlamaIndex / Haystack）
        ├─ get_order / update_booking（业务 API）
        └─ escalate_to_human（写回 Chatwoot / 工单）
\`\`\`

GitHub 上大量 \`customer-support-agent\` demo（LangGraph 教程向）stars 通常 <1k，**适合抄结构，不适合当产品底座**。选框架看第一节，选前台看 Chatwoot。

---

## 三、有浏览器自动化集成的 Agent 开源项目

> **对明天客服任务的定位**：查单/改预订应走 **官方 API / DB tool**。浏览器自动化只用于「没有 API 的遗留后台」「竞品巡检」「填表 RPA」，不要塞进客服主路径。

### 1. Browser-use

- **地址**：https://github.com/browser-use/browser-use · https://browser-use.com  
- **核心特点**：Python AI 浏览器 agent；CDP/Chromium；可接 MCP；另有 Cloud 托管。约 **118.5k** stars；最近 release 约 **0.13.x（2026-10 中旬）**；\`pushed_at\` 约 2026-10-17；MIT。  
- **适用**：探索式网页任务、自动化操作无 API 站点。  
- **成熟度**：**可用但需踩坑**（稳定性/反爬/成本）；社区最大。

### 2. Stagehand

- **地址**：https://github.com/browserbase/stagehand · https://stagehand.dev  
- **核心特点**：Playwright 风格的 **act / observe / extract**；TS 为主（亦有多语言）；与 Browserbase 云浏览器配合；可与 Mastra 等组合。约 **25.7k** stars；\`pushed_at\` 约 2026-10-18；MIT。  
- **适用**：要「可预测步骤」的网页自动化（比纯自主 agent 更可控）。  
- **成熟度**：**可用偏生产**（确定性工作流场景）。

### 3. Skyvern

- **地址**：https://github.com/Skyvern-AI/skyvern · https://www.skyvern.com  
- **核心特点**：视觉 + LLM 驱动浏览器工作流；适合表单多、DOM 烂的遗留系统；有 workflow 能力。约 **23.2k** stars；\`pushed_at\` 2026-10-19。  
- **许可**：**AGPL-3.0** —— 闭源商业产品嵌入前必须法务评估。  
- **成熟度**：可用但需踩坑（许可 + 视觉成本）。

### 4. 同类补充

| 项目 | 地址 | 说明 |
|------|------|------|
| **LaVague** | https://github.com/lavague-ai/LaVague | Selenium/Playwright Web Agent；约 **6.4k** stars；**最后 push 约 2025-01-21** → 活跃度明显下降，新项目慎选。 |
| Playwright / Selenium 自封装 | https://playwright.dev · https://www.selenium.dev | 自己在 agent tool 里调；客服场景通常不如直接 API。 |

---

## 四、明天做客服 Agent 的推荐组合

### 场景定义

**网站客服：RAG 知识库 + tool calling（查单 / 改预订）+ 人工转接。**

### 主栈（推荐动手）

\`\`\`
Chatwoot（Widget + 人工坐席台 + AgentBot/Webhook）
    └── LangGraph Agent
            ├── tool: retrieve_docs      → 向量库 / LlamaIndex
            ├── tool: get_order          → 订单 API
            ├── tool: update_booking     → 预订 API（写操作要确认/HITL）
            └── tool: handoff_human      → Chatwoot 转人工
\`\`\`

**为什么：**

1. **LangGraph** 的 interrupt/HITL 与「改预订需确认」「不确定就转人工」天然契合；状态可持久化。  
2. **Chatwoot** 解决客服产品 80% 的脏活（会话、坐席、渠道），避免自研 desk。  
3. **业务动作用 API tools**，延迟低、可审计、可回滚；别用 Browser-use 去点运营后台。  
4. RAG 可先用「分块 + embedding + 一个 retrieve tool」一天内跑通；检索差再换 LlamaIndex/Haystack。

**第一天最小切片建议：**

1. 本地起 Chatwoot 或先用简单 FastAPI WebSocket 会话（若 Chatwoot 部署拖时间）。  
2. LangGraph：\`FAQ retrieve → 无命中则拒答/转人工 → 有订单意图则 call get_order\`。  
3. 写操作（改预订）先做成 **需要人工 approve 的 interrupt**，不要第一天全自动。

### 备选栈

| 条件 | 选型 |
|------|------|
| 想最少代码、跟 OpenAI 模型 | **OpenAI Agents SDK**（handoffs + guardrails）+ Chatwoot |
| Python 类型洁癖、工具 schema 严 | **PydanticAI** + 自建会话层或 Chatwoot |
| 全员 TS / Next.js | **Mastra** + Chatwoot Widget（注意许可） |
| 非开发同学要拖拽 MVP | **Dify 或 FastGPT** 先演示；预留迁出到 LangGraph |
| Azure / .NET 企业 | **Microsoft Agent Framework** |

### 明确不建议

| 不建议 | 原因 |
|--------|------|
| **microsoft/autogen 新开项目** | 官方归档导向，继任者是 Agent Framework |
| **CrewAI 做单客服会话** | 多角色协作模型，会话可控性与成本差 |
| **Rasa 作为 LLM 客服起点** | 范式过时，维护节奏慢 |
| **Browser-use / Skyvern 进主路径** | 客服要 API；浏览器慢、脆、难审计；Skyvern 还有 AGPL |
| **只靠 Dify 长期扛复杂转接** | 演示快，深度定制与版本锁定风险高 |
| **ChatterMate 当生产唯一依赖** | stars 量级小，生态未验证 |

---

## 五、速查表（2026-10-19 核验）

| 项目 | URL | Stars 约 | 最近活跃信号 | 客服相关建议 |
|------|-----|----------|--------------|--------------|
| LangGraph | github.com/langchain-ai/langgraph | 43.5k | 当日 push | **主推荐编排** |
| CrewAI | github.com/crewAIInc/crewAI | 59.9k | 当日 push | 非客服首选 |
| OpenAI Agents SDK | github.com/openai/openai-agents-python | 30.1k | v0.24.0 / 10-15 | 轻量备选 |
| PydanticAI | github.com/pydantic/pydantic-ai | 20.7k | 当日 push | 类型安全备选 |
| Mastra | github.com/mastra-ai/mastra | 28.9k | 当日 push | TS 栈 |
| MS Agent Framework | github.com/microsoft/agent-framework | 14.2k | 当日 push | 微软栈继任 |
| AG2 | github.com/ag2ai/ag2 | 5.0k | 当日 push | 社区 AutoGen |
| AutoGen (MS) | github.com/microsoft/autogen | 61.5k | 官方引导迁移 | **勿新开** |
| Semantic Kernel | github.com/microsoft/semantic-kernel | 28.7k | 当日 push | 迁往 Agent Framework |
| LlamaIndex | github.com/run-llama/llama_index | 52.6k | 10-14 push | RAG 优选 |
| Haystack | github.com/deepset-ai/haystack | 26.8k | 当日 push | RAG/管线 |
| Dify | github.com/langgenius/dify | 158.9k | 当日 push | 产品侧 MVP |
| FastGPT | github.com/labring/FastGPT | 29.9k | 当日 push | 国内知识库 MVP |
| Chatwoot | github.com/chatwoot/chatwoot | 38.0k | 当日 push | **前台+转接** |
| Botpress | github.com/botpress/botpress | 15.0k | 10-13 push | 对话构建 |
| Rasa | github.com/RasaHQ/rasa | 21.4k | 2026-07 push | 不推荐新开 |
| ChatterMate | github.com/chattermate/chattermate.chat | 0.1k | 当日 push | 早期观察 |
| Browser-use | github.com/browser-use/browser-use | 118.5k | 10-17 push | 非客服主路径 |
| Stagehand | github.com/browserbase/stagehand | 25.7k | 10-18 push | 可控浏览器 RPA |
| Skyvern | github.com/Skyvern-AI/skyvern | 23.2k | 当日 push | AGPL，慎嵌产品 |
| LaVague | github.com/lavague-ai/LaVague | 6.4k | 2025-01 后停滞 | 慎选 |

---

## 六、参考链接（官方优先）

- LangGraph 概览：https://docs.langchain.com/oss/python/langgraph/overview  
- OpenAI Agents SDK：https://openai.github.io/openai-agents-python/  
- AutoGen → Agent Framework：https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen/  
- Chatwoot Captain：https://www.chatwoot.com/captain  
- PydanticAI：https://pydantic.dev/pydantic-ai  
- Mastra：https://mastra.ai  
- Haystack Agent：https://docs.haystack.deepset.ai/docs/agent  
- Browser-use：https://browser-use.com  
- Stagehand：https://stagehand.dev  
- Skyvern：https://www.skyvern.com  

---

*报告文件路径：\`/workspace/hub/agent_frameworks_2026-10.md\`*
`},
{"id": "doc-radar-pulse-1020", "title": "需求雷达脉搏 2026-10-20（17:00 + 傍晚复核）", "theme": "市场研究", "date": "2026-10-20 17:05", "summary": "雷达 33/0 @17:00；傍晚复核：ElevenLabs 117 维持近失；货代 128 标降级（15:01 的 10 不可靠）；Beds24 雷达 118/页 36 仍不投。", "tags": ["雷达", "Freelancer", "脉搏"], "source": "", "path": "docs/notes/radar_pulse_2026-10-20.md", "related_docs": ["doc-fl-samples-1020", "doc-fl-templates", "doc-screened-1019e", "doc-radar-brief", "doc-radar-pulse-1021"], "content": `# 需求雷达脉搏 · 2026-10-20（Asia/Shanghai；午后 12:01 + 晚后复核）

> 来源：线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`（\`published_at\` **2026-10-20 12:01 +08**，every_4h）。公开数据 only。午间 10:40 已记 30/0；本条为同日增量。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **32**（午间 10:40 为 30；早间 07:27 为 29；10-19 17:43 为 33） |
| 推荐数量 | **0**（继续为空） |
| Job ingest | OK（\`job_leads_run_id\` 20261020-120048-8312d4e0） |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo（只作灵感） |

→ 雷达推荐池仍空。人工侧（午间已入库、午后无新文件）：\`demand_samples_2026-10-20.md\`（discover，18 条）+ \`templates.md\` 新增 12 个 T-FL-*。可打合格单仍锚定 10-19 晚间 Freelancer **2 单**（见下「复核」）。

**雷达近失 / 观望（事实，来自 12:01 job_leads）**
- BEDS24 OTA Integration Setup -- 3：仍 Open，score 75，四关过、竞争关否决（投标 **118**，较午间 hub 记的 120 略降）→ **不推荐投**；长尾印证。
- Claude AI Integration Specialist：Open，$250–750，**84** 标；雷达关键词关未过，但已在 discover 技能贴合样本 → **仅观望**。
- Zenoti POS Setup for Spa：$1500–3000，135 标 → 非核心栈，跳过。

**合格单复核（可选 WebFetch，Asia/Shanghai 午后）**
- ElevenLabs Voice Pipeline：仍 **Open**，提案仍 **8** → 低竞争前提仍成立，投前再确认。
- 货代 leadgen pilot：仍 **Open**，提案已升至 **128**（晚间记 10）→ 原「低标合格」前提已失效；若未投则宜降级观望，勿当低竞争单。

**沉淀逻辑（今日，与午间同）**：① Workspace 连接器 + 垂直系统 API + 2～3 场景的「Claude 接管 SMB 运营」三件套；② 业务库→记账/ERP 同步骨架；③ 文档抽取必须带置信度阈值+复核队列；④ M365（Copilot Studio / Power Automate）竞争低于 OpenAI/n8n；⑤ Replit/Lovable 类 vibe-rescue 作稳定小单。

**动作**：优先 ElevenLabs（若仍 ≤30 标）→ 投；货代帖改观望；Beds24 / Zenoti 不投；M365 / Playwright QA demo 可排进作品集缺口。无新 Upwork 筛单文件（仍停在 10-19 晚间 NO_GOOD_JOBS）。


---

## 晚后复核（约 15:01 +08，WebFetch；雷达 meta 仍停在 12:01）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\` 仍为 **published_at 2026-10-20 12:01 +08**，job_leads **32 / 推荐 0**（every_4h，预计下一刷约 16:01）。本段为 Freelancer 页面复核，非新雷达 ingest。

| 帖 | 午后 hub 记 | 本轮页面 | 结论 |
|---|---|---|---|
| ElevenLabs n8n 语音管线 | Open · **8** 标 → 优先投 | 仍 Open · 提案 **117** | **低竞争前提失效** → 降级近失/不投 |
| 货代 AI leadgen pilot | 午后曾记 **128** 标 → 观望 | 仍 Open · 提案 **10**（页上相对时间像刷新；以本轮数字为准） | 仍可按低标锁 pilot 投；新客户+合规风险不变；投前再核一次 |
| BEDS24 OTA Integration | 雷达 12:01 · **118** 标 | Open · 提案 **36**（页上相对时间像刷新；预算仍 $30–250） | 竞争改善但仍预算偏低 + 强 Beds24 经验门槛 → **仍不投**，长尾素材 |

**动作**：ElevenLabs 从合格池移除；货代 pilot 若未投可仍跟（复核提案仍 ≤30）；Beds24 不投；雷达无新推荐时继续靠手工 discover / 模板沉淀。无新 Upwork 筛单文件。


---

## 傍晚复核（约 17:05 +08；雷达已刷 17:00）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-20 17:00:51 +08**，\`job_leads\` **33 / 推荐 0**（\`job_leads_run_id\` 20261020-170025-6c58ec08）。相对午后 12:01 的 32/0 仅 +1 帖，推荐池仍空。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **33**（12:01 为 32；10:40 为 30） |
| 推荐数量 | **0** |
| 嵌入轨近失 | BEDS24 仍 Open，雷达记投标 **118**（竞争关否决）；页面约 **36**（同 15:01） |

**雷达近失 / 观望（17:00 job_leads）**
- BEDS24 OTA Integration Setup -- 3：仍 Open，score 75，竞争关否决（雷达 **118**）→ **不投**。
- Claude AI Integration Specialist：$250–750，投标 **100**（午后曾记 84）→ 关键词关未过 + 红海 → **仅观望**。
- 本轮列表未见 Zenoti；大量 sales/booking 红海帖，无新增嵌入词命中可打单。

**合格单页面复核（WebFetch，Asia/Shanghai ~17:05）**
| 帖 | 15:01 hub 记 | 本轮页面 | 结论 |
|---|---|---|---|
| ElevenLabs n8n 语音管线 | Open · **117** → 已降级 | 仍 Open · **117** | 维持近失/不投 |
| 货代 AI leadgen pilot | Open · **10** → 可投（投前再核） | 仍 Open · **128** | **低竞争前提再次失效** → 降级近失/观望，勿当低标单 |
| BEDS24 OTA | 雷达 118 / 页 36 | 雷达 118 / 页 **36**（文案仍强卡 Beds24 经验；预算 $30–250） | **仍不投** |

**动作**：原 10-19 晚间 QUALIFIED 两单本轮均不宜再当「低标合格」；无新 Upwork 筛单文件；继续靠手工 discover / T-FL 模板沉淀。下一雷达约 21:00（every_4h）。
`},
{"id": "doc-fl-samples-1020", "title": "Freelancer 需求样本 2026-10-20（discover 18）", "theme": "市场研究", "date": "2026-10-20 09:10", "summary": "公开接口扫 228→近 36h 150，入样 18：Claude/GHL/ERP 打通、文档抽取+HITL、FAQ bot、M365、Playwright QA；低竞争亮点与 5 条可沉淀逻辑。", "tags": ["Freelancer", "discover", "样本", "低竞争", "n8n", "Playwright"], "source": "", "path": "freelancer/demand_samples_2026-10-20.md", "related_docs": ["doc-fl-templates", "doc-radar-pulse-1020", "doc-freelancer-bids", "doc-screened-1019e", "doc-fl-samples-1021"], "content": `# Freelancer 需求样本 — 2026-10-20（Asia/Shanghai）

> **模式**: discover（找需求，宽进）
> **扫描时间**: 约 09:10 Asia/Shanghai（2026-10-20）
> **来源**: Freelancer.com 公开项目接口（projects/active，18 个关键词：n8n、AI agent、chatbot、RAG、web scraping、playwright、selenium、browser automation、api integration、make/zapier、openai、LLM、bug fix python、fastapi、next.js、automation workflow、whatsapp bot、crm integration）
> **范围**: 去重 228 条，近 36 小时发布 150 条，人工挑出与能力相关的 18 条入样本
> **跳过**: Twitch Drops 复刻漏洞、多站点抢购 Checkout Bot、批量 WhatsApp/Telegram 账号供应、Gas Safe 名录抓取（站点有验证码）、交易/博彩类 bot、纯人工客服坐席
> **说明**: 提案数、预算为抓取时数值；INR 折美元按约 1 USD≈88 INR 粗算；**不代投**

## 汇总

| 项 | 值 |
|----|-----|
| 入样本 | **18**（均为 Open） |
| 高频类型 | 网站 FAQ/客服 bot（3）、文档抽取+人工复核（3）、业务系统打通/同步（4）、Agent/自动化运营（3） |
| 低竞争亮点（提案＜50） | Copilot Studio 客服、Playwright TS 测试、IT 求职自动投递、Telegram 会员 bot、Air-gapped RAG（线下德里） |

---

## 样本明细

| # | 需求 | 预算 | 提案 | 痛点一句话 | 交付物 | 技术暗示 | 竞争度 | 模板 |
|---|------|------|------|------------|--------|----------|--------|------|
| 1 | [Claude AI Integration Specialist](https://www.freelancer.com/projects/claude/Claude-Integration-Specialist-Project) | $250–750 固价 | 73 | 拉斯维加斯豪车接送公司（50+ 车）想让 Claude 接管报价、预订跟进 | Claude 接 Gmail/Calendar/Drive/Slack + 调度软件 Limo Anywhere；自动报价与跟进 | Claude API/MCP、Google Workspace API、Slack | 中 | T-FL-claude-ops-mcp（新） |
| 2 | [AI Agent Developer & Automation Engineer](https://www.freelancer.com/projects/automation/Agent-Developer-Automation-Engineer) | $25–50/hr | 117 | 中介替美国客户找人做技师外联、电话邮件、接单录入、报表 | 多个运营 Agent + n8n/Make 流 | Python/JS、LLM API、n8n、语音外呼 | 中偏红 | T-FL-lead-pilot / T-FL-voice-n8n |
| 3 | [Automate Database Data Entry](https://www.freelancer.com/projects/api-developmet/Automate-Database-Data-Entry) | $15–25/hr | 158 | 每天手工把业务库数据复制进记账系统 | MySQL/PG 定时抽取 → 科目映射 → 记账系统 API 过账 + 校验/重试/日志 | Python ETL、会计 API、cron/队列 | 红 | T-FL-db-to-accounting（新） |
| 4 | [Real-Time Bidirectional Integration with Cegid Primavera ERP](https://www.freelancer.com/projects/asp-net/Real-Time-Bidirectional-Integration-with) | €250–750 | 78 | 云端 AI 平台要实时操作客户本地 Windows 上的 ERP | 云端 Hub + 本地 Agent，双向同步与事件推送 | ASP.NET Core SignalR、C#、Ubuntu VPS | 中 | T-FL-cloud-local-agent（新） |
| 5 | [Full-Stack GHL & AI Integration](https://www.freelancer.com/projects/api/Full-Stack-GHL-Integration) | $100–380 | 137 | 客户系统散落，要统一到 GoHighLevel 并让 AI 打标签、触发营销 | GHL 与 CRM/邮件/电商双向同步 + AI 线索打标 + 自动序列 | GHL API/Webhook、OpenAI | 红；预算偏低 | T-FL-ghl-ai（新） |
| 6 | [GenAI Python Full Stack Developer](https://www.freelancer.com/projects/rest-api/GenAI-Python-Full-Stack-Developer) | ₹12.5k–37.5k（约 $140–430） | 85 | 邮件/文档里抽结构化数据，6 周 PoC | FastAPI + LLM 抽取 + RAG + 人工复核 + Graph 邮件接入 | FastAPI、PG、Redis/Celery、Docker、Azure、MS Graph | 中；价严重偏低 | T-FL-doc-extract-hitl（新） |
| 7 | [AI Agent for Efficient Cost Allocation](https://www.freelancer.com/projects/laravel/Agent-for-Efficient-Cost-Allocation) | $250–750 | 172 | 建筑造价模型把未计量项丢进“杂项”，要 AI 自动归类，准确率 95–98% | 文档解析 + 分配 Agent，接入现有生产模型 | Python、Laravel、LLM | 红；验收指标苛刻 | T-FL-doc-extract-hitl（新） |
| 8 | [Intelligent AI/ML Document Analysis & QA Platform](https://www.freelancer.com/projects/react-js/Intelligent-Document-Analysis-Platform) | $250–750 | 305 | 上传文档问答平台 | React 前端 + Python RAG 后端 | Python、LLM、RAG、React | 极红 | T-FL-rag-cited |
| 9 | [Website Customer Chat Bot](https://www.freelancer.com/projects/chatbot-development/Website-Customer-Chat-Bot) | $15–25/hr | 128 | 网站访客常见问题没人答，答不上转联系表单 | 轻量聊天挂件 + FAQ 可编辑后台 + 兜底转表单 | JS 挂件、规则/NLP、简单后台 | 红 | T-FL-site-faq-bot（新） |
| 10 | [Website Personal Assistant Chatbot](https://www.freelancer.com/projects/ai-chatbot/Website-Personal-Assistant-Chatbot) | $250–750 | 265 | 网站 AI 助理：答疑+预约通话+收反馈+导航 | 对话设计→嵌入 React 站→上线 | OpenAI/Dialogflow CX/Rasa、React | 极红 | T-FL-site-faq-bot（新） |
| 11 | [Customer Support AI Agent Creation](https://www.freelancer.com/projects/ai-chatbot-development/Customer-Support-Agent-Creation) | ₹750–1,250/hr（约 $8.5–14/hr） | 37 | 用 Microsoft Copilot Studio 做客服 Agent 接 FAQ/文档 | Copilot Studio Agent + 知识源 + 测试 + 文档 | Copilot Studio、M365 | 低 | T-FL-m365-automation（新） |
| 12 | [Power Automate Email Automation](https://www.freelancer.com/projects/power-automate/Power-Automate-Email-Automation) | $30–250 | 91 | 每天从资料里抽行政/税务信息生成 Excel 并发邮件 | Power Automate 流 + Copilot 抽取 + Outlook 定时发送 | Power Automate、Copilot、Outlook | 中 | T-FL-m365-automation（新） |
| 13 | [Python Multi-User Web Scraping & Lead Generation Platform](https://www.freelancer.com/projects/postgresql/Python-Developer-Needed-Multi-User-40776249) | $30–250（远低于范围） | 163 | 从招聘站与公开来源采集企业联系人，多用户分发 | 采集 + 电话/邮箱清洗去重 + Excel/Sheets 导出 + 用户/管理后台 | Django/FastAPI、Celery、PG、爬虫 | 红；lowball，只当样本 | T-FL-scrape-leads-saas（新） |
| 14 | [Multi-platform IT Job Auto-Applicant](https://www.freelancer.com/projects/aws-lambda/Multi-platform-Job-Auto-Applicant) | CAD 250–750 | 43 | 加拿大 IT 求职者想每天自动扫岗、按 JD 改简历并投递 | 多站扫岗 + LLM 定制简历 + 自动投递 + 定时 | Playwright、LLM、AWS Lambda | 低；LinkedIn/Indeed 自动投递违反平台条款，账号风险大 | T-FL-job-autoapply（新，标风险） |
| 15 | [Playwright TypeScript Test Case Development](https://www.freelancer.com/projects/typescript/Playwright-TypeScript-Test-Case) | ₹12.5k–37.5k（约 $140–430） | 35 | 已有框架，缺人补跨浏览器 E2E 用例 | 按规范补 spec，三浏览器并行全绿 | Playwright TS | 低 | T-FL-playwright-qa（新） |
| 16 | [Automated WhatsApp Challan Messaging](https://www.freelancer.com/projects/api/Automated-WhatsApp-Challan-Messaging) | ₹1.5k–12.5k（约 $17–140） | 65 | 印度车辆罚单通知要按 CSV 批量个性化发 WhatsApp | WA Cloud API 模板消息 + CSV 上传 + 变量替换 + 送达日志 | WhatsApp Business Cloud API、Node/Python | 中；价低 | T-FL-wa-csv-broadcast（新） |
| 17 | [Telegram Membership Management Bot](https://www.freelancer.com/projects/nodejs/Telegram-Membership-Management-Bot) | ₹600–1,500（约 $7–17） | 47 | 会员续费/取消靠人工，要斜杠命令自助 | 命令式 bot + KV/轻量库状态 | python-telegram-bot / Telegraf | 中；极低价 | T-FL-wa-csv-broadcast（同类 IM bot） |
| 18 | [Replit AI Coding Specialist / AI Development Supervisor](https://www.freelancer.com/projects/replit/Replit-Coding-Specialist-Development) | ~$10/hr 长期 | 65 | 房产 CMA 应用由 Replit/AI 生成，问题多，要懂 AI 编码代理的人接手 | 驱动 AI 代理修 bug、加功能、稳住线上 | Replit Agent、Cursor 类工具 | 中；低时薪但长期 | T-FL-vibe-rescue（新） |

### 只当样本（线下/范围与价严重不符）

- [Linux Security Engineer — Air-Gapped AI Document System](https://www.freelancer.com/projects/api-integration/Linux-Security-Engineer-Air-Gapped)：₹12.5k–37.5k，15 提案，德里线下。离线核心机 + 网关机的金融文档 RAG，可沉淀“隔离部署 RAG”架构逻辑。
- [AI & Full-Stack Developer for Restaurant Project](https://www.freelancer.com/projects/backend-development/Full-Stack-Developer-for-Restaurant)：$250–750，200 提案。Foodics + Xero + WhatsApp + OpenAI 整合，餐饮垂直“系统打通+AI”需求代表。
- [AI Receptionist Kiosk Full-Stack Developer](https://www.freelancer.com/projects/typescript/Receptionist-Kiosk-Full-Stack-Developer)：₹750–1,250/hr，82 提案。阿英双语 AI 数字人前台 + CRM/预约 + Windows Kiosk。

## 今日可沉淀逻辑

1. **“让通用大模型接管 SMB 日常运营”**开始出现具体垂直工具名（Limo Anywhere、Foodics、Xero、GHL）：报价模板应是“Workspace 连接器 + 一个垂直系统 API + 2～3 个自动化场景”的固定三件套。
2. **业务库 → 记账/ERP 的同步**反复出现（#3、#4、餐饮单）：可做一个通用“源库抽取 → 字段映射 → 目标 API 过账 → 对账日志”骨架。
3. **文档抽取必须带人工复核与准确率口径**（#6、#7）：提案里先承诺“置信度阈值 + 复核队列”，避免被 95–98% 指标卡死。
4. **M365 生态（Copilot Studio、Power Automate）竞争明显低于 OpenAI/n8n**，是低竞争切入口，可补一个 M365 演示。
5. **AI 生成应用的接手修复**（Replit/Lovable 类）继续出现，长期但低价，适合作为稳定小单来源。
`},
{"id": "doc-fl-samples-1021", "title": "Freelancer 需求样本 2026-10-21（discover 16）", "theme": "市场研究", "date": "2026-10-21 09:15", "summary": "公开接口扫近 36h，入样 16：政府门户填表 Agent、RFP/采购 RAG、西语客服修准、电话+邮件外联 CRM、Zoho Marketplace、Next webhook/Auth 二开；低竞争亮点与 5 条沉淀逻辑。", "tags": ["Freelancer", "discover", "样本", "门户RPA", "RFP", "CRM", "Next.js", "Playwright"], "source": "", "path": "freelancer/demand_samples_2026-10-21.md", "related_docs": ["doc-fl-templates", "doc-radar-pulse-1021", "doc-fl-samples-1020", "doc-freelancer-bids", "doc-booking-map-1021", "doc-fl-samples-1022"], "content": `# Freelancer 需求样本 — 2026-10-21（Asia/Shanghai）

> **模式**: discover（找需求，宽进）
> **扫描时间**: 约 09:15 Asia/Shanghai（2026-10-21）
> **来源**: Freelancer.com 公开项目接口（projects/active，18 个关键词：n8n、AI agent、chatbot、RAG、web scraping、playwright、selenium、browser automation、api integration、make/zapier、openai、LLM、bug fix python、fastapi、next.js、automation workflow、whatsapp bot、crm integration）
> **范围**: 去重 365 条，近 36 小时发布 275 条，人工挑出与能力相关的 16 条入样本（另 5 条只当样本）
> **跳过**: PocketOption/二元期权自动交易 bot、股票日内交易 bot、Twitch Drops 复刻、Social Media Manager Bot（TikTok/FB 自动发帖回私易违平台条款，见「只当样本」）、纯销售佣金岗、明显营销运营岗、纯设计/摄影
> **说明**: 提案数、预算为抓取时数值；INR 折美元按约 1 USD≈88 INR 粗算；昨日已入样且仍开放的单（如 AI Agent Developer & Automation Engineer、Power Automate Email）不重复列入；**不代投**

## 汇总

| 项 | 值 |
|----|-----|
| 入样本 | **16**（均为 Open） |
| 高频类型 | 政府/办公门户浏览器 Agent（1）、招标/采购发现+RAG（2）、网站/西语客服 bot（2）、n8n/Make/Telegram 自动化（2）、电话+邮件外联 Agent（1）、CRM/GHL/Zoho 打通（3）、Next.js webhook 二开（1）、爬虫/对账小工具（3） |
| 低竞争亮点（提案＜60） | 电商商品价库存 Scrapy（43）、Excel→Tally 导入（26）、Vittashastra 离线 RAG 修（31）、Playwright/Selenium 功能+性能测（53） |

---

## 样本明细

| # | 需求 | 预算 | 提案 | 痛点一句话 | 交付物 | 技术暗示 | 竞争度 | 模板 |
|---|------|------|------|------------|--------|----------|--------|------|
| 1 | [AI Agent for Office Automation](https://www.freelancer.com/projects/ai-automation/Agent-for-Office-Automation) | ₹75k–150k（约 $850–1,700） | 79 | 印屋顶光伏公司要在政府门户上代填注册/增容申请，并读账单证件 | Windows 办公机浏览器 Agent：读文档→填表→OTP/验证人工接力→回写状态+客户通知；号库管理 | Playwright/Selenium、OCR/LLM 抽取、Windows 本地部署 | 中；含验证码/OTP，须人工或授权通道，**勿做绕过** | T-FL-gov-portal-rpa（新） |
| 2 | [Develop RFP Hunter: AI-Powered Procurement Platform](https://www.freelancer.com/projects/ai-chatbot/Develop-RFP-Hunter-Powered-Procurement) | $250–750 | 236 | 要持续扫美各级政府招标源、抽标书字段并按画像告警 | 试点：源监控+文档抽取/OCR+可搜网站+邮件告警；平台功能分期 | 爬虫/官方 API、OCR、LLM 摘要引用、PG、告警 | 极红；范围远超预算，须锁 pilot 源数量 | T-FL-rfp-scrape-rag（新） |
| 3 | [Automatización administrativa con N8N/Make](https://www.freelancer.com/projects/automation/Automatizaci-administrativa-con-Make) | $15–25/hr | 153 | 智利代理想按「一个流程一个交付」帮客户做行政/CRM 自动化 | 生产级 n8n/Make 流 + 场景文档 + 邮件/报表/跟进测试 | n8n、Make/Zapier、CRM API | 红；偏好智利时区 | T-FL-cs-multichannel / T-FL-lead-pilot |
| 4 | [Advanced Telegram Assistant Using n8n -- 2](https://www.freelancer.com/projects/php/Advanced-Telegram-Assistant-Using) | $10–30 | 80 | 要 n8n 管线：Telegram 收消息→Sheets→Gemini→回 Telegram 并记日志 | 可跑通的 n8n 流 + JS 节点 + Gemini HTTP + Sheets 日志 | n8n、Telegram Trigger、Google Sheets、Gemini API | 中；极低价一日单感 | T-FL-wa-csv-broadcast（同类 IM+自动化） |
| 5 | [Spanish AI Chatbot Developer](https://www.freelancer.com/projects/ai-chatbot-development/Spanish-Chatbot-Developer) | $30–250 | 215 | 网站客服要原生西语 AI，答不上转人工 | 西语 FAQ/工单训练 bot + 站内嵌入 + 人工接管 + 文档 | OpenAI/LangChain/Dialogflow、Next/React | 极红；预算偏低 | T-FL-site-faq-bot |
| 6 | [Enhance Spanish AI Accuracy](https://www.freelancer.com/projects/natural-language-processing/Enhance-Spanish-Accuracy) | $30–250 | 126 | 现有英西双语 AI 一切到西语就胡言/语法错 | 审计管线→修 prompt/数据/后端→西语质量对齐英语 | Python/Node、OpenAI、Next.js | 红；验收要对照用例集 | T-FL-llm-locale-qa（新） |
| 7 | [AI Call & Email Assistant](https://www.freelancer.com/projects/ai-chatbot/Call-Email-Assistant) | $30–250 | 247 | 线索从 CSV/站表单进自建 Ultra Agent CRM，要电话+邮件一体外联与跟进 | 出站/入站通话+邮件规则、日历预约、60s 内回写 CRM；48h 实测 | Twilio、SendGrid、WP/PHP CRM、Calendar | 极红；预算严重包不住全量 | T-FL-voice-email-crm（新） |
| 8 | [Bot WhatsApp con envío de correos](https://www.freelancer.com/projects/chatbot-development/Bot-WhatsApp-con-env-correos) | $10–30 | 70 | WA 首响 FAQ，表单填完自动生成邮件发出 | WA Business/Twilio 流 + FAQ + 表单→SMTP + 简易配置面板 | WhatsApp Cloud/Twilio、Node/Python、SMTP | 中；极低价 | T-FL-woo-wa-n8n / T-FL-wa-csv-broadcast |
| 9 | [GoHighLevel Agency & Sub-Account Setup](https://www.freelancer.com/projects/go-high-level/GoHighLevel-Agency-Sub-Account-Setup) | $10–11/hr | 130 | 代理要把遗留流程迁到 GHL 子账户并补齐自动化 | 子账户/快照/pipeline/邮件短信序列 + 文档 | GoHighLevel、CRM 自动化 | 红；时薪极低偏配置岗 | T-FL-ghl-ai |
| 10 | [Zoho CRM–FLOWLYZE Integration Extension](https://www.freelancer.com/projects/zoho/Zoho-CRM-FLOWLYZE-Integration-Extension) | €250–750（约 $270–810） | 263 | Zoho 与 FLOWLYZE 要双向实时同步线索/商机并触发工作流 | Zoho Marketplace 扩展 + 双向同步 + 自定义工作流 + 文档 | Zoho CRM SDK、FLOWLYZE API | 极红；需 Marketplace 打包经验 | T-FL-crm-marketplace-sync（新） |
| 11 | [Backend API Integration for Lead Intake & Authentication System](https://www.freelancer.com/projects/nextjs/Backend-API-Integration-for-Lead) | $15–25/hr（另有 $30–50 固价重发） | 129 | Next.js 借贷预审站 webhook/鉴权半成品要补完加固 | HMAC webhook + Zod + 幂等入库；NextAuth 多租户；TidyCal webhook | Next.js、Prisma、Supabase、NextAuth、Vercel | 红；典型「半成品二开」 | T-FL-next-webhook-auth（新） |
| 12 | [Desarrollador para Procesuslegum.com.ar](https://www.freelancer.com/projects/saas/Desarrollador-para-Procesuslegum-com) | $8–15/hr | 89 | Claude/OpenAI vibe-code 出的阿根廷法律 SaaS，聊天助理要能建提醒/草稿等 | 稳住 RAG 法律库 + 聊天驱动自动化 + Docker/VPS；偏联合创始低时薪 | RAG、Docker、Cloudflare、LLM Gateway | 中；低时薪+股权叙事 | T-FL-vibe-rescue + T-FL-rag-cited |
| 13 | [E-commerce Product Web Scraping](https://www.freelancer.com/projects/scrapy/commerce-Product-Web-Scraping) | $10–30 | 43 | 多站商品名/描述/价/库存进定价看板，要可加 URL 重跑 | Scrapy/BS/Selenium 脚本 → JSON/CSV；验收含「无验证码卡住」——合规上应人工/代理策略而非绕过 | Python、Scrapy、Selenium | 低价；验证码表述需谈判清楚 | T-FL-scrape-leads-saas（价库存变体） |
| 14 | [Web Application Functional & Performance Testing](https://www.freelancer.com/projects/api-testing/Web-Application-Functional-Performance) | $10–30 | 53 | 产品功能齐但未测，要功能回归+性能瓶颈报告 | 测试计划 + Selenium/Playwright 用例 + JMeter 负载 + 证据包 | Playwright/Selenium、JMeter | 低；预算低但技能匹配 | T-FL-playwright-qa |
| 15 | [Defender Email Tracker Automation](https://www.freelancer.com/projects/azure/Defender-Email-Tracker-Automation) | $30–250 | 91 | Defender 举报邮件状态要自动同步到自建 Azure tracker | Azure Function/Logic App/Graph：拉增量、去重、写 Status/Threat/Action、监控告警 | Azure、MS Graph、OAuth、PowerShell | 中；M365 栈竞争低于纯 OpenAI | T-FL-m365-automation |
| 16 | [Excel Payment Reconciliation Automation](https://www.freelancer.com/projects/excel-macros/Excel-Payment-Reconciliation-Automation) | $30–250 | 168 | 每天两张表（发票已付 vs 到账）手工对不上 | 粘贴即对账的 Excel：匹配/部分匹配/缺失 + 金额汇总 | Excel 公式/Power Query/VBA | 红；非代码向但可作「对账自动化」样本 | T-FL-db-to-accounting（轻量变体） |

### 只当样本（价/范围/条款风险）

- [Vittashastra - AI based procurement advisor](https://www.freelancer.com/projects/retrieval-augmented-generation/Vittashastra-based-procurement-advisor)：₹1.5k–12.5k，31 提案。离线 air-gapped 采购法规 RAG「已有但不好用，要测修」——可沉淀隔离部署 RAG 修模块逻辑，价严重不符。
- [Excel-to-Tally Bank Statement Uploader](https://www.freelancer.com/projects/dot-net/Excel-Tally-Bank-Statement-Uploader)：₹600–1.5k，26 提案。Excel→TallyPrime 单机 exe 导入，印度会计刚需小品类，可沉淀模板但公开价极低。
- [AI Recruitment SaaS Platform Development](https://www.freelancer.com/projects/ai-app-development/Recruitment-SaaS-Platform-Development)：₹12.5k–37.5k，76 提案。简历语义解析+排程的招聘 SaaS Phase1，范围像完整产品，预算像 MVP 切片。
- [Daily Racing Data Scraper](https://www.freelancer.com/projects/api-integration/Daily-Racing-Data-Scraper)：£20–250，229 提案。Racing Post 级海量赛马结果队列（审计约 9 万+ job），站点 ToS/反爬风险高，只当「高吞吐采集报价口径」样本。
- [Social Media Manager Bot](https://www.freelancer.com/projects/social-media-management/Social-Media-Manager-Bot)：$15–25/hr，162 提案。TikTok/FB 自动发帖+回评私+拉指标——平台条款风险高，discover 记类型即可，不建议实投。

## 今日可沉淀逻辑

1. **「政府门户填表 Agent」**成独立品类（#1）：不是泛 Claude Computer Use，而是「OCR 读证 → 垂直门户表单 → OTP/验证人工门 → 状态回写 + 号库」。报价要显式排除验证码绕过，把人工接力写成验收项。
2. **招标/RFP 发现+抽取+告警**（#2、Vittashastra）：与线索爬虫同骨架，但字段与合规更重；提案必须先锁「试点源数量 + 抽取字段表 + 人工复核」，否则 $250–750 必爆。
3. **电话+邮件一体外联进自有 CRM**（#7）反复要 Twilio/日历/60s 回写 SLA：可复用「CSV 上传 → 外呼脚本 → 邮件模板 → CRM webhook」四段式 demo，全量勿一口价。
4. **半成品 Next.js/Supabase 二开**（#11）：HMAC webhook + 幂等 + NextAuth 多租户是高频小单，适合短里程碑按接口点报价。
5. **Marketplace/垂直 CRM 双向扩展**（#10 Zoho）：比「写条 Zapier」贵一档，但要会官方 SDK 与上架包；可与 GHL 配置岗（#9）区分——前者工程、后者偏运营配置。
`},
{"id": "doc-fl-samples-1022", "title": "Freelancer 需求样本 2026-10-22（discover 15）", "theme": "市场研究", "date": "2026-10-22 09:12", "summary": "公开接口扫 618→近 36h 429，入样 15：表单→Meta WA、WA 客服 FAQ、学校多租户 Agent、PR→LLM 性能评审、Teams→Zendesk 催单桥、语音/Twilio、Sendiee 入职流；低竞争亮点与 5 条沉淀逻辑。", "tags": ["Freelancer", "discover", "样本", "WhatsApp", "n8n", "Teams", "Zendesk", "教育Agent", "PR评审"], "source": "", "path": "freelancer/demand_samples_2026-10-22.md", "related_docs": ["doc-fl-templates", "doc-radar-pulse-1022", "doc-fl-samples-1021", "doc-freelancer-bids", "doc-booking-reject-1021", "doc-fl-samples-1023"], "content": `# Freelancer 需求样本 — 2026-10-22（Asia/Shanghai）

> **模式**: discover（找需求，宽进）
> **扫描时间**: 约 09:12 Asia/Shanghai（2026-10-22）
> **来源**: Freelancer.com 公开项目接口（projects/active，18 个关键词：n8n、AI agent、chatbot、RAG、web scraping、playwright、selenium、browser automation、api integration、make/zapier、openai、LLM、bug fix python、fastapi、next.js、automation workflow、whatsapp bot、crm integration）
> **范围**: 去重 618 条，近 36 小时发布 429 条，宽进匹配后人工挑出与能力相关的 **15** 条入主表（另 6 条只当样本）；昨日已入样且仍开放的单（如 AI Agent for Office Automation、RFP Hunter、Telegram n8n、电商 Scrapy 等）不重复列入
> **跳过**: 体育博彩自动下单、Medal.tv 批量举报、LinkedIn 多账号自动加好友回私、纯销售佣金岗（Commission GHL）、明显纯设计/摄影、学术改写逃检（见「只当样本」）
> **说明**: 提案数、预算为抓取时 API 数值；INR 折美元按约 1 USD≈88–95 INR（文中粗算用 ≈90）；**不代投、不联系客户**

## 汇总

| 项 | 值 |
|----|-----|
| 入样本 | **15**（均为 Open） |
| 高频类型 | WA/n8n 消息与客服 bot（3）、学校/教育多 Agent 或 AI 二开（2）、AI SaaS 上线审计/PR 性能 Agent（2）、Teams→Zendesk/工作流自动化（2）、语音/Twilio 外联进 CRM（2）、线索库+自动化（1）、爬虫运维小品（1）、Next.js 站内聊天二开（1）、房产 AI skill 拼盘（1） |
| 低竞争亮点（提案＜60） | n8n WA 个性化消息（28）、Sendiee 入职流自动化（27）、Teams→Zendesk（36）、跑现成 Python 爬虫（42）、学校 AI Agents（50） |

---

## 样本明细

| # | 需求 | 预算 | 提案 | 痛点一句话 | 交付物 | 技术暗示 | 竞争度 | 模板 |
|---|------|------|------|------------|--------|----------|--------|------|
| 1 | [n8n WhatsApp Auto-Messaging Setup](https://www.freelancer.com/projects/n8n/WhatsApp-Auto-Messaging-Setup) | ₹600–1.5k（约 $7–17） | 28 | FlexiFunnels 注册表单要走官方 Meta WA Cloud：同意收集、确认模板、活动提醒、防重复 | n8n 生产 webhook + 模板发送 + 失败日志/去重 + 工作流 JSON 与交接文档 | n8n、Meta WhatsApp Cloud API、webhook | 低；价极低但技能极匹配，discover 记「表单→WA 模板」切片 | T-FL-wa-csv-broadcast / T-FL-woo-wa-n8n |
| 2 | [WhatsApp Support Chatbot Development](https://www.freelancer.com/projects/chatbot-development/WhatsApp-Support-Chatbot-Development) | $250–750 | 91 | WA 客服要 FAQ 全流程：问候→姓名/订单号→知识库→转人工并交接历史→Sheets 日志 | 批准通道接入 + FAQ 流 + 快捷回复 + 转人工 + 日志 + 维护说明 | WhatsApp Business/Twilio、FAQ KB、Sheets/DB | 中；刚发（约 0.4h），预算带可用 | T-FL-cs-multichannel / T-FL-site-faq-bot |
| 3 | [AI Agents for School Automation](https://www.freelancer.com/projects/ai-agents/Agents-for-School-Automation) | ₹37.5k–75k（约 $420–850） | 50 | 多校租户要「数据分析 Agent」：吃成绩/考勤等 SIS 导出，出看板/API，并预留后续 bot | 多租户 Agent 框架 + 分析 Agent + Web/API + 部署脚本/测试/文档 | Python、FastAPI、LangChain、多租户隔离 | 中偏低；预算相对像样，须锁一期字段与学校数 | T-FL-edu-multi-agent（新） |
| 4 | [AI SaaS Model Audit & Fixes](https://www.freelancer.com/projects/ai-app-development/SaaS-Model-Audit-Fixes) | $15–25/hr | 146 | 已有 AI SaaS 临上线，要审计 OpenAI 集成/会话/用量/安全并修关键 bug | 架构与 AI 链路审计报告 + 关键修复 + 上线前回归 | Node/TS、Python、React/Next、OpenAI、Docker、PG/Mongo | 红；典型「接手修到可发」按时薪锁周 | T-FL-vibe-rescue |
| 5 | [PerfGuard AI Agent Development](https://www.freelancer.com/projects/ai-agents/PerfGuard-Agent-Development) | C$10–30（约 $7–21） | 79 | GitHub PR 打开后要自动扫 diff，用 AI 标性能风险并评论 + Teams 通知 | FastAPI/Flask webhook → diff → OpenAI 风险分 → PR comment + Teams + 演示 | GitHub webhook、FastAPI、OpenAI、Teams | 中；公开价严重低估，可沉淀「PR→LLM 评审」骨架按里程碑报 | T-FL-pr-perf-agent（新） |
| 6 | [MS Teams to Zendesk Integration](https://www.freelancer.com/projects/zendesk/Teams-Zendesk-Integration) | ₹12.5k–37.5k（约 $140–420） | 36 | Teams 群里客户催单要自动匹配 Zendesk 工单（PNR/单号）并抬优先级 | Teams 消息捕获 → 抽字段 → Zendesk 搜索/更新自定义字段 → 原生触发器视图 | Teams Graph/Bot、Zendesk API、OAuth 集成身份 | **低**；需求书写很工程化，非标「装个插件」 | T-FL-teams-helpdesk-bridge（新） |
| 7 | [AI Voice Order Assistant](https://www.freelancer.com/projects/ai-voice-agents/Voice-Order-Assistant) | €36/hr 起 | 164 | 电话语音 Agent 要接单/查单/改单并回写 CRM，复杂问题转人工 | STT/TTS 对话 + CRM REST/GraphQL + 转人工 + 通话分析 | Dialogflow/Lex/Rasa 类、语音、CRM API | 红；时薪尚可，全量意图须分期 | T-FL-voice-email-crm |
| 8 | [Build Twilio Dialer & SMS Platform](https://www.freelancer.com/projects/twilio/Build-Twilio-Dialer-SMS-Platform) | $15–25/hr | 211 | 要浏览器拨号器 + 通话/短信日志 + 多国买号 + Stripe/PayPal 充值订阅 | Twilio Voice/SMS + 号池购买 + 支付网关 + 管理看板；密钥走环境变量 | Twilio、Node/Python、React/Vue、Stripe/PayPal | 极红；范围像小型 CPaaS，按时薪切 MVP | T-FL-voice-email-crm（支付号池变体） |
| 9 | [Cloud-Based AI Solutions for Real Estate](https://www.freelancer.com/projects/ai-chatbot-development/Cloud-Based-Solutions-for-Real) | ₹1.5k–12.5k（约 $17–140） | 83 | 房产：MLS/建商站找房技能 + IG 轮播文案 + Sheet 线索经 Claude→Twilio 培育 | 三 skill：找房结构化输出、轮播生成、Twilio 培育流（接 Claude） | 爬虫/MLS、Claude、Twilio、Sheets、WA CRM | 中；价低且含 IG 内容——轮播可做，自动发帖须合规拆开 | T-FL-scrape-leads-saas + T-FL-claude-ops-mcp |
| 10 | [AI Workflow Automation Bot Development](https://www.freelancer.com/projects/ai-workflow-automation/Workflow-Automation-Bot-Development) | $250–750 | 185 | 不要聊天：要日历对账、Jira/Trello 任务模板、审批催办，Docker 挂 Ubuntu | 三类工作流 bot + 中央日志看板 + Docker/文档/演示 | Python/FastAPI 或 Power Automate/UiPath、Calendar/Jira API | 红；99% 成功率验收狠，须缩场景 | T-FL-m365-automation / T-FL-cs-multichannel |
| 11 | [Freelancer Setup Database Leads & Otomasi Penjualan](https://www.freelancer.com/projects/software-development/Freelancer-Setup-Database-Leads-Otomasi) | $30–250 | 67 | 印尼：10–20 万线索 PG 库 + n8n/Make 拉广告、分销、去重、WA gateway、权限 | no-code PG 库 + 自动化流 + WA 网关 + RBAC；预算另议 | PostgreSQL、n8n/Make、WhatsApp gateway | 中；描述短，先锁数据模型与通道 | T-FL-lead-pilot / T-FL-wa-csv-broadcast |
| 12 | [Full-Stack/AI Developer for Medical Education Platform Enhancement](https://www.freelancer.com/projects/full-stack-development/Full-Stack-Developer-for-Medical-40778035) | €250–750（约 $280–840） | 171 | 医学教育站要先修债再对标竞品 UX，并加 AI 教授/口试；10 天冲一版；鼓励 Cursor | 审计修 bug → 学习功能包 → Ask Ace AI/弱项检测等；后续分期 | 全栈 + LLM、Cursor/Claude Code、已有支付/内容库 | 红；10 天+€750 必爆，提案只锁「修债+1 个 AI 里程碑」 | T-FL-vibe-rescue |
| 13 | [Run My Python Web Scraper](https://www.freelancer.com/projects/excel/Run-Python-Web-Scraper) | ₹400–750/hr（约 $4.5–8.5/hr） | 42 | 脚本已写好，只要有人在无头服务器跑通并交回 xlsx | 环境安装 + 无头跑通 + xlsx 交付 + 环境说明（必要时改路径） | Python、pip/conda、无头服务器 | 低；运维小品，可作爬虫交付「跑通验收」话术样本 | T-FL-scrape-leads-saas（运维切片） |
| 14 | [RITHU BUSINASS LANKA SOCIAL MEDIA WEB SIDE -- 2](https://www.freelancer.com/projects/nextjs/RITHU-BUSINASS-LANKA-SOCIAL-MEDIA) | $250–750 | 298 | 已有 Next.js+Express Vercel 站要加 Live Chat、反馈表、FB 动态、轻量 CMS | 聊天挂件+转录入库、反馈后台、FB feed、Markdown/CMS；Lighthouse 90+ | Next.js、Node/Express、MongoDB、Vercel | 极红；典型站内聊天+CMS 二开 | T-FL-site-faq-bot / T-FL-next-webhook-auth |
| 15 | [Sendiee Workflow Automation Specialist](https://www.freelancer.com/projects/automation/Sendiee-Workflow-Automation-Specialist) | ₹600–1.5k（约 $7–17） | 27 | 新用户注册后入职全流程要在 Sendiee 里自动化（消息/任务/仅必要时人工） | 流程映射 + Sendiee 触发/分支/定时 + 测试 + 维护文档 | Sendiee、可选 Google/M365/Slack | **低**；垂直 SaaS 配置岗，价低但可沉淀「入职流」清单 | T-FL-cs-multichannel（入职流变体） |

### 只当样本（价/范围/条款风险）

- [AI Sentence-Level Plagiarism Tool](https://www.freelancer.com/projects/natural-language-processing/Sentence-Level-Plagiarism-Tool)：₹12.5k–37.5k，84 提案。句级查重+一键改写降重——可沉淀「文档批处理+LLM 改写 UI」工程骨架，但学术逃检伦理风险高，discover 只记类型不建议实投。
- [Asistente Virtual Bilingüe WhatsApp](https://www.freelancer.com/projects/customer-support/Asistente-Virtual-Biling-WhatsApp)：$15–25/hr，**18** 提案。西英双语 WA 应答+Sheets——描述偏**人工客服岗**而非纯 bot 交付，可对照 FAQ bot 报价口径。
- [Instagram AI Sales Assistant Development](https://www.freelancer.com/projects/ai-chatbot-development/Instagram-Sales-Assistant-Development)：$250–750，202 提案。波斯语 IG DM 销售助理；甲方要求官方 Meta API、禁非官方——仍有 Messaging 政策与多商户 App Review 风险，只当「官方 IG 客服」样本。
- [LinkedIn Team Management Bot](https://www.freelancer.com/projects/automation/LinkedIn-Team-Management-Bot)：₹600–1.5k，29 提案。多账号自动发帖/加好友/模板回私——平台条款风险高，discover 记类型即可。
- [Medal.tv Mass-Report Automation](https://www.freelancer.com/projects/python/Medal-Mass-Report-Automation)：€30–250，129 提案。Playwright/Selenium 批量走举报流程——滥用/ToS 边缘，不当正单。
- [Automate Bet Placement via API](https://www.freelancer.com/projects/api-developmet/Automate-Bet-Placement-via-API)：C$750–1.5k，75 提案。体育博彩 API 自动下单+手机面板——赌博类跳过；仅作「规则引擎+会话保活」反面教材。

## 今日可沉淀逻辑

1. **「表单/漏斗 → Meta WA 模板」**继续高频（#1）：n8n + Cloud API + 同意字段 + 防重复发送是最小可售切片；公开价 ₹600–1.5k 只能卖「一条流+交接」，不要包 FlexiFunnels 全站。
2. **GitHub PR → LLM 代码评审 Agent**（#5 PerfGuard）可独立成模板：webhook 收 diff → 结构化风险分 → PR comment + Teams。报价按「可演示的一条链路」而非 C$30 全包。
3. **Teams/Slack 催单 → 工单系统匹配抬优**（#6）比「装 Zendesk for Teams」贵一档：价值在抽 PNR/单号、防抖、自定义字段与原生触发器分工——提案先画序列图。
4. **多租户垂直 Agent（学校数据）**（#3）：与泛 AI SaaS 后端同骨架，但验收要锁「试点学校数 + 输入字段表 + 无串租」；₹37.5k–75k 只够 Phase1 分析 Agent。
5. **语音/Twilio CPaaS 向**（#7、#8）反复出现：订单语音 CRM 与「拨号器+买号+支付」要拆成意图试点 vs 号池/计费平台，后者按时薪，前者锁 CRM 字段映射。
`},
{"id": "doc-fl-samples-1023", "title": "Freelancer 需求样本 2026-10-23（discover 16）", "theme": "市场研究", "date": "2026-10-23 09:11", "summary": "公开接口扫 613→近 36h 423，入样 16（另只当样本 10）：n8n SEO Autopilot、FORGEAI MVP、单源 API 看板、Salesforce/LAPU/CSV→PDF 等；低竞争亮点 30/29/56/53/50；沉淀主题含 CMS 审批发布环、单页指标看板、支付回调履约、半成品接手。", "tags": ["Freelancer", "discover", "样本", "n8n", "SEO", "CMS", "看板", "支付回调", "vibe-rescue", "WhatsApp"], "source": "", "path": "freelancer/demand_samples_2026-10-23.md", "related_docs": ["doc-fl-templates", "doc-radar-pulse-1023", "doc-fl-samples-1022", "doc-freelancer-bids", "doc-booking-reject-1021"], "content": `# Freelancer 需求样本 — 2026-10-23（Asia/Shanghai）

> **模式**: discover（找需求，宽进）
> **扫描时间**: 约 09:11 Asia/Shanghai（2026-10-23）
> **来源**: Freelancer.com 公开项目接口（projects/active，18 个关键词：n8n、AI agent、chatbot、RAG、web scraping、playwright、selenium、browser automation、api integration、make/zapier、openai、LLM、bug fix python、fastapi、next.js、automation workflow、whatsapp bot、crm integration）
> **范围**: 去重 613 条，近 36 小时发布 423 条，宽进匹配后人工挑出与能力相关的 **16** 条入主表（另 10 条只当样本）；昨日及更早已入样且仍开放的单不重复列入
> **跳过**: 体育/期权自动交易主表不进、库存监控附带验证码/多 profile 排队、eBay 多开发者账号冲配额、学术文献综述、纯销售佣金/人工客服岗、明显设计摄影
> **说明**: 提案数、预算为抓取时 API 数值；非 USD 按 currency.exchange_rate 折约美元；**不代投、不联系客户**

## 汇总

| 项 | 值 |
|----|-----|
| 入样本 | **16**（均为 Open） |
| 高频类型 | WA/客服 bot（3）、接手修到可发/MVP 完工（4）、n8n/编排与 SEO 自动驾驶（2）、RAG/语音 Agent（2）、CRM/支付回调与单 API 看板（3）、AWS AI API 运维（1）、小工具发票 PDF（1） |
| 低竞争亮点（提案＜60） | n8n SEO Autopilot Setup（30）、FORGEAI（29）、Automated Salesforce Sales D（56）、LAPU Recharge & Payment Auto（53）、Python script: CSV or JSON t（50） |

---

## 样本明细

| # | 需求 | 预算 | 提案 | 痛点一句话 | 交付物 | 技术暗示 | 竞争度 | 模板 |
|---|------|------|------|------------|--------|----------|--------|------|
| 1 | [n8n SEO Autopilot Setup](https://www.freelancer.com/projects/n8n/SEO-Autopilot-Setup) | ₹1500–12500（INR，约 $16–132） | 30 | 出租车站 Sanity CMS 约 100 个地点页，要把 SEO/AEO 内容生产→草稿审批→发布→Search Console/排名跟踪整条链路用 n8n 自动驾驶 | n8n 流：关键词/地点拉数→LLM 大纲/正文→Sanity draft→审批后发布+GSC 重提→排名/展现写入表；交接 JSON/文档（外链建链应拆出） | n8n、Sanity Content API、Google Search Console、Sheets、LLM | 低；价低但技能匹配 | T-FL-n8n-cms-seo |
| 2 | [FORGEAI – Complete Existing MVP of an Engineering Decision Intelligence Platform (Next.js + FastAPI)](https://www.freelancer.com/projects/ui-design/FORGEAI-Complete-Existing-MVP) | ₹1500–12500（INR，约 $16–132） | 29 | 已有 Next.js+FastAPI 工程决策智能 MVP（水电笔管检验工作流），要修集成债、补齐模板/Rules/work-package 核心流并稳定可演示，禁止无谓重写 | 代码审计与计划→修 bug/集成→核心工作流可演示 MVP→测试与文档 | Next.js、React、TS、Python、FastAPI、SQLAlchemy/SQLite→可升 PG | 低；价低但技能匹配 | T-FL-vibe-rescue |
| 3 | [One-page dashboard for one sales or analytics API](https://www.freelancer.com/projects/data-visualization/One-page-dashboard-for-one) | ₹15000–30000（INR，约 $158–317） | 74 | 只要接「一个」外部账户（Stripe/Shopify/YouTube/CRM 四选一）做单页日指标看板，密钥不进前端 | 里程碑1：API 连接+近30天主图/头条；里程碑2：日期筛选+日表+刷新说明；Streamlit 可接受 | Python/Streamlit 或轻前端、单源 REST API、密钥环境变量 | 中 | T-FL-api-metric-dashboard |
| 4 | [Automated Salesforce Sales Dashboard](https://www.freelancer.com/projects/data-visualization/Automated-Salesforce-Sales-Dashboard) | ₹1500–12500（INR，约 $16–132） | 56 | 要从 Salesforce 自动拉 Opportunity/Account，按周/月刷新销售看板（成交、收入、管道），可分享给经理 | 安全连接+可重复拉取→周/月调度刷新→交互看板（Tableau/PBI/Looker/Lightning）+导出+交接 | Salesforce API、ETL/调度、BI 工具 | 低；价低但技能匹配 | T-FL-db-to-accounting |
| 5 | [Bill.com Vendor Email Automation](https://www.freelancer.com/projects/power-automate/Bill-com-Vendor-Email-Automation) | $250–750 | 183 | Bill.com 新建供应商事件要 30 秒内自动发 Outlook 邮件，带供应商名/付款信息/账号，失败可日志告警 | Power Automate（或官方连接器/安全 API）流：触发→映射字段→邮件模板→错误处理；沙箱验收 | Power Automate、Bill.com connector/API、Outlook | 红 | T-FL-m365-automation |
| 6 | [Enterprise RAG Project: Generative AI Developer Needed](https://www.freelancer.com/projects/azure/Enterprise-RAG-Project-Generative) | ₹400–750/hr（INR，约 $4–8/hr） | 88 | 要企业级 RAG：文档摄入+检索+带上下文聊天，并接 Copilot Studio/Azure OpenAI/Power Automate，边做边讲解架构 | 端到端 RAG、摄入检索管线、聊天机器人、API/工作流集成、测试部署说明与文档 | Azure OpenAI、AI Search、Copilot Studio、Python、Power Automate | 中 | T-FL-rag-cited / T-FL-m365-automation |
| 7 | [WhatsApp Auto-Messaging System Development](https://www.freelancer.com/projects/api-integration/WhatsApp-Auto-Messaging-System) | ₹600–1500（INR，约 $6–16） | 64 | 要官方 WA Cloud：欢迎语、关键词工作流、按钮链接、跟进、模板外呼、联系人与送达状态、管理看板 | 官方 API 接入+工作流引擎+模板发送+仪表盘+错误处理与测试；遵守 Meta 政策 | WhatsApp Business Cloud API、webhook、可选 n8n/自建后台 | 中 | T-FL-wa-csv-broadcast / T-FL-woo-wa-n8n |
| 8 | [Asistente Técnico WhatsApp Inteligente](https://www.freelancer.com/projects/ai-chatbot-development/Asistente-cnico-WhatsApp-Inteligente) | $100k+ 公开占位（待议） | 64 | 西语技术支持要 WA Business 上的上下文 NLP 助理（非纯关键词），可编辑知识库、转人工、<3s 响应、简易指标盘 | WA/Twilio 通道+意图/上下文引擎+可编辑 KB+人工升级+指标面板+运维文档（公开价带异常，提案先锁试点意图） | WhatsApp API/Twilio、NLP/LLM、知识库、Node/Python | 中 | T-FL-cs-multichannel / T-FL-site-faq-bot |
| 9 | [AI Voice Agent Development for Comprehensive Business Solutions](https://www.freelancer.com/projects/ai-automation/Voice-Agent-Development-for) | ₹150000–250000（INR，约 $1583–2638） | 73 | 要 24/7 AI 语音 Agent，定制音色人设，对接现有业务应用，做推荐式对话（预算带相对像样） | 语音 Agent（STT/TTS+对话策略）+第三方集成+人设/提示词+联调文档；须分期锁意图与系统清单 | 语音栈（Twilio/Dialogflow/自定义）、LLM、业务 API | 中 | T-FL-voice-email-crm / T-FL-voice-n8n |
| 10 | [Complete SocioVik - AI Creative & Social Media SaaS](https://www.freelancer.com/projects/php/Complete-SocioVik-Creative-Social-Media-40780884) | $200–400 | 84 | Bolt.new 半成品 AI 社媒 SaaS 要先修 bug/登录/多租户/计费，再接社媒原生 API 与 n8n 调度发布分析（Phase1） | 审计清单→关键修复→FB/IG/LI/YT/X 连接器（token 刷新/webhook）→发帖调度→报表；验证现有 n8n | PHP/Node、Supabase、n8n、各社媒 API、Razorpay | 中 | T-FL-vibe-rescue |
| 11 | [Ai Orchestration Agent Setup (Codex + Claude Code)](https://www.freelancer.com/projects/ai-automation/Orchestration-Agent-Setup-Codex-Claude) | $250–750 | 225 | 要把 OpenHands / n8n 编排起来，驱动 Codex + Claude Code 做自动化开发 Agent（描述极短，红海） | 可演示的编排骨架：n8n/OpenHands 触发→编码 Agent 跑通一条任务→日志与人工门；先锁一条用例 | n8n、OpenHands、Codex、Claude Code、AI Agents | 极红 | T-FL-claude-computer |
| 12 | [Title: Node.js (TypeScript) Developer: Fix User Profile, Prevent Duplicate Accounts, Merge Accounts and SMS Invitations](https://www.freelancer.com/projects/typescript/Title-Node-TypeScript-Developer-Fix) | ₹12500–37500（INR，约 $132–396） | 126 | 现有 Node/TS 应用用户模块：防重复账号（邮箱/手机）、合并历史重复、邀请发 SMS；₹25k/7 天三里程碑写死 | 唯一约束与校验→安全合并脚本/管理 API+回滚日志→邀请 SMS；分期验收 | Node.js、TypeScript、Express、MongoDB、SMS gateway | 红 | T-FL-vibe-rescue / T-FL-next-webhook-auth |
| 13 | [Refine, Secure & Launch Express Kitchen App](https://www.freelancer.com/projects/full-stack-development/Refine-Secure-Launch-Express-Kitchen) | ₹12500–37500（INR，约 $132–396） | 87 | 云厨房点餐站（React/TS/Node/Firebase）已有，要审计修 bug、安全、E2E 与生产部署，保留现有功能不重做 UI | 全栈审计修复→下单/管理闭环→安全加固→测试与上线交接 | React、TypeScript、Node/Express、Firebase/Firestore、GCP | 中 | T-FL-vibe-rescue |
| 14 | [LAPU Recharge & Payment Automation](https://www.freelancer.com/projects/api-developmet/LAPU-Recharge-Payment-Automation) | ₹1500–12500（INR，约 $16–132） | 53 | LAPU 充值仍靠人工：移动支付/转账到账后要自动充 SIM、确认 SMS、对账入库并出日报 | 支付回调→充值动作→确认通知→客户匹配与日汇总；staging 跑通+部署说明+交接 | 支付/钱包回调 API、LAPU gateway、DB、短信/推送 | 低；价低但技能匹配 | T-FL-api-metric-dashboard（支付回调履约变体） |
| 15 | [Python script: CSV or JSON to branded PDF invoices](https://www.freelancer.com/projects/pdf/Python-script-CSV-JSON-branded) | ₹8000–15000（INR，约 $84–158） | 50 | 要把 CSV/JSON（后续 Google Sheet）一键生成品牌发票+收据 PDF，配置改抬头不改代码 | 里程碑1：样例 CSV/JSON→品牌发票+收据；里程碑2：读 Sheet+可编辑模板字段+README | Python、PDF 库、Google Sheets API、配置文件 | 低 | T-FL-doc-extract-hitl（文档生成切片） |
| 16 | [AWS AI API Infrastructure Optimization](https://www.freelancer.com/projects/api-developmet/AWS-API-Infrastructure-Optimization) | $250–750 | 196 | 已有 AWS AI/API 环境要审可靠性、鉴权、成本、监控告警并优化 Bedrock/API Gateway/Lambda 等，方便扩容 | 基础设施审计报告+关键加固/监控改进+密钥与 IAM 整理+运维文档（非从零开发） | AWS Bedrock、API Gateway、Lambda、IAM、CloudWatch、S3 | 红 | T-FL-saas-backend-ai（运维加固切片） |

### 只当样本（价/范围/条款风险）

- [Central IA para Gestión de Requerimientos](https://www.freelancer.com/projects/ai-chatbot/Central-para-Gesti-Requerimientos)：$10–70，28 提案。安保 Central WA：群消息随机点赞反应 + 客户私信分级 IA。可沉淀「意图分级→工单通知」；随机点赞属非官方行为/政策风险，$10–70 只当样本。
- [Multi Site Stock Alert Bot](https://www.freelancer.com/projects/bot-development/Multi-Site-Stock-Alert-Bot)：£250–750（GBP，约 $335–1005），255 提案。多站库存→Telegram/Discord 告警；另提 auto captcha、多 profile 排队——监控告警可学，验证码/排队属 ToS 边缘，不当正单。
- [Telegram Automation Script for Marketers](https://www.freelancer.com/projects/telegram-api/Telegram-Automation-Script-for-Marketers)：$2–8/hr，93 提案。白标 Telegram 营销自动化（广播/线索），$2–8/hr 极低；可记 Docker 白标打包话术，价与范围需重谈。
- [Virtual Assistant Needed for Commercial Realtor](https://www.freelancer.com/projects/automation/Virtual-Assistant-Needed-for-Commercial)：$30–250，101 提案。商业地产 VA+ n8n/Claude 工作流——岗位偏长期人力助理而非纯交付项目，discover 记「经纪人 CRM+n8n」需求信号。
- [Bangun Sistem Admin WhatsApp Responsif](https://www.freelancer.com/projects/api/Bangun-Sistem-Admin-WhatsApp-Responsif)：$10–30，51 提案。电商 WA 多座席后台+$10–30 公开价严重低估；工程模式对，价只当样本。
- [eBay API Developer Expertise Needed](https://www.freelancer.com/projects/ebay/eBay-API-Developer-Expertise-Needed)：£20–250（GBP，约 $27–335），105 提案。要开多个 eBay Developer 账号并冲配额——多账号/Growth Check 灰色，只记「电商 API 配额辅导」类型。
- [Database Creation for AI Professionals](https://www.freelancer.com/projects/data-collection/Database-Creation-for-Professionals)：₹600–1500（INR，约 $6–16），38 提案。AI 人才线索库（公开邮箱）₹600–1.5k；合规采集口径要严，低价线索库只当样本。
- [Optimize Nifty Options Trading Bot](https://www.freelancer.com/projects/algorithmic-trading/Optimize-Nifty-Options-Trading-Bot)：₹12500–37500（INR，约 $132–396），50 提案。期权纸交易 bot 优化止损/回测——金融交易类，discover 不进主表。
- [Desktop Script for API Integration](https://www.freelancer.com/projects/api-developmet/Desktop-Script-for-API-Integration)：₹5000000+（INR，约 $52770+），31 提案。桌面脚本拉公开 API 存 CSV/SQLite；需求简单但公开价带异常（₹5M+），只记「桌面 REST 客户端」小品。
- [Generative AI Chatbots Literature Review](https://www.freelancer.com/projects/ai-chatbot/Generative-Chatbots-Literature-Review)：$8–15/hr，64 提案。生成式聊天机器人文献综述（学术写作），非工程交付。

## 今日可沉淀逻辑

1. **n8n → CMS 草稿→人工审批→发布→GSC/排名**（#1）：比「写 SEO 文」更可售的是编排切片；外链建链应明确排除或另报价，公开 ₹1.5k–12.5k 只够一条主环。
2. **单源 API → 单页指标看板**（#3）：Stripe/Shopify/YouTube/CRM 四选一、两里程碑固价，是可复制的「小而清」产品化话术；密钥环境变量与刷新说明是验收核心。
3. **SaaS 事件 → Power Automate/邮件**（#5 Bill.com）：与 M365 模板同族，验收写清「沙箱新建供应商→30s 内一封、三字段、可关停」。
4. **支付回调 → 履约动作 → 对账日报**（#14 LAPU）：充值/SIM/移动支付场景反复出现；提案先要回调样例与幂等键，公开价带常低估全量对账。
5. **接手半成品 AI SaaS / 垂直 MVP**（#2 FORGEAI、#10 SocioVik、#13 Express Kitchen）：统一话术「先审计清单+保留功能+Phase1 可演示」，不要按公开价包社交全连接器或全站重写。
6. **编码 Agent 编排（OpenHands/n8n + Codex/Claude Code）**（#11）：描述短、红海；可沉淀「一条任务可演示链路+人工门」，对标 T-FL-claude-computer 分期。
`},
{"id": "doc-fl-templates", "title": "Freelancer 可复用需求模板（T-FL-*）", "theme": "模板与交付", "date": "2026-10-23 09:11", "summary": "T-FL 表已扩至含 10-23 新模板：n8n-cms-seo、api-metric-dashboard；另有 edu-multi-agent、pr-perf-agent、teams-helpdesk-bridge、vibe-rescue、gov-portal-rpa、rfp-scrape-rag、voice-email-crm、next-webhook-auth 等。", "tags": ["Freelancer", "模板", "提案", "里程碑"], "source": "", "path": "freelancer/templates.md", "related_docs": ["doc-fl-samples-1020", "doc-tplplan", "doc-freelancer-bids", "doc-live", "doc-fl-samples-1021", "doc-fl-samples-1022", "doc-fl-samples-1023"], "content": `# Freelancer / 低门槛平台 — 可复用需求模板（从真实单提炼）

> 只在 \`discover\` 模式积累；\`bid\` 模式用这些模板写提案/拆里程碑。

| 模板 id | 需求类型 | 典型交付 | 常见预算带 | 关键风险 | 来源样例 |
|---------|----------|----------|------------|----------|----------|
| T-FL-voice-n8n | 语音管线 + n8n 多 Agent | 修现有 n8n + 多 Agent 子流 + 联调文档 | €250–750 | 新客；下沿包不住全量 | ElevenLabs Voice Pipeline（2026-10-19） |
| T-FL-lead-pilot | 线索 Agent 试点 | 2 周：发现+enrichment/打分；锁死 pilot | $250–750 | 合规/WhatsApp opt-in；勿用试点价包全量 | Freight AI lead-gen（2026-10-19） |
| T-FL-cs-multichannel | 多通道客服 Agent（n8n） | FAQ/订单/投诉技能子流 + 共享记忆 + JSON 导出 | $750–1,500（USD/AUD） | 极红海；通道适配器与低置信接管要写清 | N8N CS Agents / Ready-Made n8n Chatbot（2026-10-19） |
| T-FL-woo-wa-n8n | Woo + WhatsApp + n8n | 订单履约流 + WA 查单/库存；Credentials 安全管理 | ₹600–1.5k（常被低估） | 公开价带极低；Dialogflow+WA 审批耗时 | Automate WooCommerce & WhatsApp（2026-10-19） |
| T-FL-rag-cited | 可引用/拒答 RAG | 混合检索 + grounding 校验 + 表格走 SQL + 引用 UI | $750–1,500 | 幻觉防护是验收核心；散文/统计双路径 | RAG Public Documents（2026-10-19） |
| T-FL-playwright-ads | 浏览器编排 + AI 回复 | AdsPower/多 profile + Celery + LLM 库存回复 + Docker | $8–15/hr 或固价等价 | 极红海低价；并发隔离与延迟 SLA | Browser Automation & AI Reply（2026-10-19） |
| T-FL-saas-backend-ai | AI SaaS 后端从零 | FastAPI 多租户 + 抓取/RAG + 外联 + 异步任务 + AWS | ₹75k–150k INR | 范围大；必须里程碑切 MVP | SponsorsFinder AI Backend（2026-10-19） |
| T-FL-multi-agent-mkt | 多 Agent 营销流水线 | 7 Agent 串联 + 人工审批门 + Meta/店/WA 集成 | ₹12.5k–37.5k INR | 预算紧；月 API 成本与 Meta 审核要提前说 | KESAV 7 Agents（2026-10-19） |
| T-FL-claude-computer | Claude Computer Use + n8n | MCP/控机骨架 + 销售或社媒一期；西语文档 | $30–250（常严重低估） | scope creep；必须分期 | Claude System Automation（2026-10-19） |
| T-FL-openai-dashboard-fix | OpenAI 展示/格式修 bug | 追链路修渲染；锁定 schema；附带小功能更新 | $30–250 | 红海；先修后扩范围 | OpenAI Formatting Fix（2026-10-19） |
| T-FL-playwright-gemini-fix | Playwright 抓取修 + DOCX | 等齐回复、滤思考过程、MD→DOCX | ₹600–1.5k | 极低价一日交付诉求 | Gemini Playwright Fix（2026-10-19） |
| T-FL-wp-claude-publish | WP + Claude 定时发文 | 设置页 + SEO/分类/特色图 + 多主题兼容 | $30–250 | 极红海低价；插件冲突测试 | Claude Blog WordPress（2026-10-19） |
| T-FL-claude-ops-mcp | Claude/LLM 接管 SMB 运营 | Workspace（Gmail/Cal/Drive/Slack）连接 + 1 个垂直系统 API + 报价/跟进自动化 | $250–750 | 垂直软件 API 是否开放要先核；权限与误发邮件护栏 | Claude AI Integration Specialist（2026-10-20） |
| T-FL-db-to-accounting | 业务库 → 记账系统同步 | 定时抽取 + 科目映射 + 会计 API 过账 + 校验/重试/对账日志 | $15–25/hr 或 $250–750 | 会计科目映射需客户确认；重复过账防护 | Automate Database Data Entry（2026-10-20） |
| T-FL-cloud-local-agent | 云平台 ↔ 本地 ERP 双向实时 | 云端 Hub + 本地 Windows Agent + 事件同步 | €250–750 | C#/SignalR 栈；客户内网与断线重连 | Cegid Primavera ERP（2026-10-20） |
| T-FL-ghl-ai | GoHighLevel + AI 统一获客 | GHL 双向同步 + AI 打标 + 自动 Email/SMS 序列 | $100–380（偏低） | 范围易膨胀；A2P/SMS 合规 | Full-Stack GHL & AI（2026-10-20） |
| T-FL-doc-extract-hitl | 文档/邮件结构化抽取 + 人工复核 | LLM 抽取 + 置信度阈值 + 复核队列 + 导出/API | $140–750 | 准确率口径（95%+）要按字段定义并留复核 | GenAI Python FS / Cost Allocation Agent（2026-10-20） |
| T-FL-site-faq-bot | 网站轻量 FAQ 客服挂件 | 可嵌入挂件 + FAQ 编辑后台 + 兜底转表单/预约 | $15–25/hr 或 $250–750 | 极红海；靠现成 demo 和快速交付取胜 | Website Customer Chat Bot / Personal Assistant（2026-10-20） |
| T-FL-m365-automation | Copilot Studio / Power Automate | 客服 Agent 接知识源；Outlook 定时报表邮件 | $30–250 或低时薪 | 需客户 M365 租户权限；许可费用说清 | Copilot Studio CS Agent / Power Automate Email（2026-10-20） |
| T-FL-scrape-leads-saas | 多用户采集线索平台 | 采集 + 清洗去重 + Sheets/Excel 导出 + 用户/管理后台 | 常被压到 $30–250 | 来源站 ToS；lowball 只当样本 | Multi-User Web Scraping & Lead Gen（2026-10-20） |
| T-FL-job-autoapply | 求职自动投递 | 扫岗 + LLM 定制简历 + 自动投递 | CAD 250–750 | LinkedIn/Indeed 条款禁止自动投递，账号风险，谨慎接 | Multi-platform IT Job Auto-Applicant（2026-10-20） |
| T-FL-playwright-qa | Playwright E2E 测试补全 | 按现有框架补 spec，三浏览器并行通过 | ₹12.5k–37.5k | 需读懂既有约定；用例范围先锁 | Playwright TypeScript Test Case（2026-10-20） |
| T-FL-wa-csv-broadcast | WhatsApp/Telegram 模板消息与命令 bot | CSV 上传 + 变量替换 + 送达日志；或命令式会员状态 bot | $7–140（极低） | WA 模板审核与 opt-in；价太低只当样本 | WhatsApp Challan / Telegram Membership（2026-10-20） |
| T-FL-vibe-rescue | AI 生成应用接手修复 | 用 AI 编码代理修 bug、加功能、稳定上线 | ~$10/hr 长期 | 代码质量差、范围不清；按周结算 | Replit AI Coding Supervisor（2026-10-20） |
| T-FL-gov-portal-rpa | 政府/垂直门户浏览器填表 Agent | OCR 读证 + 门户导航填表 + OTP/验证人工门 + 状态回写；可选号库 | ₹75k–150k 或 $850–1,700 级 | 验证码/OTP 禁止绕过；须写清人工接力与合规 | SolarSea Office Automation Agent（2026-10-21） |
| T-FL-rfp-scrape-rag | 招标/RFP 发现 + 文档抽取 + 告警 | 源监控 + OCR/LLM 字段抽取 + 可搜库 + 画像匹配邮件告警；平台功能分期 | $250–750（常低估，须锁 pilot） | 源站 ToS；范围膨胀；先锁源数量与字段表 | RFP Hunter Procurement Platform（2026-10-21） |
| T-FL-llm-locale-qa | 多语言 LLM 准确度修复 | 审计失败用例 → prompt/数据/后端 → 目标语质量对齐主语言 | $30–250 | 验收要有双语对照用例集；勿承诺「再训练模型」除非预算够 | Enhance Spanish AI Accuracy（2026-10-21） |
| T-FL-voice-email-crm | 电话+邮件一体外联进自有 CRM | CSV/表单进线 → Twilio 外呼/接听 + 邮件规则 + 日历预约 → CRM 回写 SLA | $30–250（全量必爆，分期） | 通话合规/录音同意；60s 回写与漏接 SLA 写清 | AI Call & Email Assistant（2026-10-21） |
| T-FL-crm-marketplace-sync | CRM Marketplace 双向扩展 | 官方 SDK 扩展：联系人/线索/商机双向实时同步 + 工作流触发 + 上架包 | €250–750 | Marketplace 审核与鉴权；对方 API 稳定性 | Zoho CRM–FLOWLYZE Extension（2026-10-21） |
| T-FL-next-webhook-auth | Next.js webhook 线索接入 + Auth 二开 | HMAC 校验 + Zod + 幂等入库；NextAuth 多租户登录/邀请；附属日历 webhook | $15–25/hr 或 $30–50 固价 | 半成品代码债；安全（HMAC/会话）是验收核心 | Backend API Lead Intake & Auth（2026-10-21） |
| T-FL-edu-multi-agent | 多租户学校/机构 AI Agent（分析先发） | 租户隔离 Agent 框架 + SIS/成绩考勤分析 + Web/API + 后续技能插槽 | ₹37.5k–75k 或 $420–850 级 | 串租与隐私；一期必须锁学校数与字段表 | School AI Agents（2026-10-22） |
| T-FL-pr-perf-agent | GitHub PR → LLM 性能风险评审 | Webhook 收 PR/diff → LLM 风险分与建议 → PR comment + Teams/Slack 通知 | C$10–30 公开价常严重低估 | 误报率与密钥权限；按可演示链路分期 | PerfGuard AI Agent（2026-10-22） |
| T-FL-teams-helpdesk-bridge | Teams/协作群催单 → 工单系统匹配抬优 | 捕获群消息 → 抽单号/PNR → 搜索 Zendesk 等 → 写自定义字段 → 原生触发器视图 | ₹12.5k–37.5k 或 $140–420 | OAuth 用集成身份非个人号；防抖与误匹配 | MS Teams → Zendesk Chasers（2026-10-22） |
| T-FL-n8n-cms-seo | n8n → CMS 内容自动驾驶（审批门） | 拉关键词/意图 → LLM 草稿进 CMS → 人工批准发布 → GSC/排名表；外链另议 | ₹1.5k–12.5k 或 $30–250（常低估） | 外链/灰帽建链勿打包；审批门与草稿状态机要写清 | n8n SEO Autopilot Setup（2026-10-23） |
| T-FL-api-metric-dashboard | 单源 API → 单页指标看板 | 接一个账户 API；5 左右指标 + 日图 + 日期筛选；密钥出源码；Streamlit/轻前端均可 | ₹15k–30k 或 $150–350 级 | 锁死「只一个源」；刷新方式与交接说明是验收 | One-page dashboard for one sales/analytics API（2026-10-23） |
`},
{"id": "doc-radar-pulse-1021", "title": "需求雷达脉搏 2026-10-21（07:01 → 17:00）", "theme": "市场研究", "date": "2026-10-21 17:00", "summary": "早间 21/1（Beds24--4 推但不投）；午前/午间/傍晚均为 17/0；Beds24 标 98→112→121→132；Office Agent 现 107 标且竞争关亦未过。傍晚池轮换进 Distressed Deals / Car Booking / Document RAG 等（均未推）。挂钩 discover 16 样 + 6 新 T-FL。无新 Upwork 筛单。", "tags": ["雷达", "Freelancer", "Beds24", "脉搏", "推荐"], "source": "", "path": "docs/notes/radar_pulse_2026-10-21.md", "related_docs": ["doc-radar-pulse-1020", "doc-booking-map-1021", "doc-longtail", "doc-fl-templates", "doc-fl-samples-1021", "doc-radar-pulse-1022"], "content": `# 需求雷达脉搏 · 2026-10-21 早间（Asia/Shanghai）

> 来源：线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\` + \`job_leads.json\`（\`published_at\` **2026-10-21 07:01 +08**，every_4h）。公开数据 only。相对 10-20 17:00 的 33/0：帖数骤降到 21，**推荐池首次非空（1）**。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **21**（昨傍晚 33） |
| 推荐数量 | **1**（昨 0） |
| Job ingest | OK（\`job_leads_run_id\` 20261021-070037-60748893） |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo |

## 雷达推荐（需人工再滤）

- **[BEDS24 OTA Integration Setup -- 4](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40778471)**（\`fl-40778471\`）
  - 预算 \`$30–250\` · 投标 **98** · score 120 · 嵌入轨命中 \`beds24\`
  - 五关：关键词/预算/清晰/一期过；竞争关文案为「投标偏多（98），谨慎」但仍 \`recommend: true\`
  - **人工结论：仍不投**（同系列 --3 长尾结论不变：预算下沿过低 + 文案强卡 Beds24 实战；98 标也不算窗口）。留作 OTA/PMS 窄集成素材。

## 近失 / 观望（同刷）

| 帖 | 预算 | 标 | 备注 |
|---|---|---|---|
| [AI Agent for Office Automation](https://www.freelancer.com/projects/ai-automation/Agent-for-Office-Automation) | ₹75k–150k | 77 | 加固 · 一期关未过 → 观望 |
| [7 Connected AI Agents（珠宝品牌营销）](https://www.freelancer.com/projects/digital-marketing/Build-Marketing-Agent-System-Connected) | ₹12.5k–37.5k | 128 | 一期+竞争未过 → 跳过 |
| [Python Chat Booking Assistant](https://www.freelancer.com/projects/python/Python-Engineer-for-Chat-Booking) | $30–250 | 206 | 与「预约×内容」主题相邻，但关键词未过 + 红海 → 不投；提案可引用 T3/bz.a 话术练手 |
| Claude AI & Canva Graphic Automation | £20–250 | 152 | 关键词未过 · 红海 |

## 沉淀（今早）

1. Beds24 系列复帖（--3→--4）说明 PMS/OTA 窄集成有持续需求，但 Freelancer 价带与经验门槛不适合冷启动抢标。
2. 「Chat Booking / FAQ→预约」公开帖仍红海；优先用已有演示链（T3 / bz.a / smart.a）产品化提案，见预约×内容映射。
3. 无新 Upwork 筛单文件（仍停在 10-19 晚间）。

**动作**：不跟 Beds24 --4；继续模板/演示素材（预约日历、访客下单、多服务者档期）；下一雷达约 11:01（every_4h）。


---

## 午前复核（约 10:35 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-21 10:35:00 +08**，\`job_leads\` **17 / 推荐 0**（\`job_leads_run_id\` 20261021-103359-2c0c7b71）。相对早间 07:01 的 21/1：帖数 −4，**推荐池回到空**。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **17**（早间 21） |
| 推荐数量 | **0**（早间 1） |
| Job ingest | OK |

**相对早间变化（事实）**
- Beds24 OTA --4：仍 Open · 雷达投标 **112**（早间 98）· score 75 · **\`recommend: false\`**（竞争关：投标过多 ≥100）→ 与早间人工「不投」一致，雷达侧也不再推。
- AI Agent for Office Automation：₹75k–150k · **80** 标 · score 67 · 一期关未过 → 观望；与今日 discover「政府门户填表 Agent」同簇（见样本笔记）。
- Backend API Lead Intake & Auth --2：$30–50 · **142** 标 · 关键词未过 → 红海旁证「半成品 Next webhook 二开」有量但公开池卷。

**手工 discover（约 09:15，未进雷达推荐池）**
- 入样 **16** + 只当样本 5：政府门户 RPA、RFP/采购 RAG、西语客服修准、电话+邮件外联 CRM、Zoho Marketplace 同步、Next webhook/Auth 二开、价库存爬虫、Playwright QA 等。
- 低竞争亮点（提案＜60，抓取时）：电商价库存 Scrapy（43）、Excel→Tally（26）、离线 RAG 修（31）、Playwright 功能+性能测（53）——价多偏低，宜作模板沉淀而非急投。
- 新增 T-FL：\`gov-portal-rpa\` · \`rfp-scrape-rag\` · \`llm-locale-qa\` · \`voice-email-crm\` · \`crm-marketplace-sync\` · \`next-webhook-auth\`（见 templates 表）。

**动作**：仍不投 Beds24；无雷达推荐时继续靠 discover / T-FL 沉淀；Upwork 侧仍无新于 10-19 晚间的筛单文件。下一雷达约 14:35（every_4h）。

---

## 午间复核（约 11:51 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-21 11:51:30 +08**，\`job_leads\` **17 / 推荐 0**（\`job_leads_run_id\` 20261021-115029-20a5b316）。相对午前 10:35：总数与推荐数不变，但**帖池轮换**且 Beds24 投标继续涨。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **17**（同午前） |
| 推荐数量 | **0** |
| Job ingest | OK |

**相对午前变化（事实）**
- Beds24 OTA --4：仍 Open · 投标 **121**（午前 112）· score 75 · \`recommend: false\`（竞争关 ≥100）→ 继续不投。
- AI Agent for Office Automation：₹75k–150k · **82** 标（午前 80）· score 67 · 一期关未过 → 仍观望。
- Backend API Lead Intake & Auth --2：$30–50 · **142** 标 · 关键词未过 → 仍红海旁证。
- 池内新面孔（均未推荐）：Mortgage Lead Gen（Google Ads + systeme.io，$30–250，91 标）、Navshakti Sales Force Tracking（₹12.5k–37.5k，37 标）、Linux Security / Air-Gapped AI Document（₹12.5k–37.5k，22 标，德里现场）、Secure Laptop Shipping Mexico 系列（物流，非技术栈）。
- 低标旁证：Cinematic Health App Video（12 标）、ADGM Desk Referral（15 标）——非匹配栈。

**动作**：仍不投 Beds24；无新 Upwork 筛单；下一雷达约 15:51（every_4h）。模板线继续：预约×内容 + 今日 T-FL（门户 RPA / RFP-RAG / 西语修准等）。

---

## 傍晚复核（约 17:00 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-21 17:00:43 +08**，\`job_leads\` **17 / 推荐 0**（\`job_leads_run_id\` 20261021-165943-976c1c4b）。相对午间 11:51：总数与推荐数不变，但**匹配向帖投标继续涨**、池内再轮换。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **17**（同午间） |
| 推荐数量 | **0** |
| Job ingest | OK |

**相对午间变化（事实）**
- Beds24 OTA --4：仍 Open · 投标 **132**（午间 121）· score 75 · \`recommend: false\`（竞争关 ≥100）→ 继续不投。
- AI Agent for Office Automation：₹75k–150k · **107** 标（午间 82）· score 67 · 一期关未过，且竞争关现亦未过（≥100）→ 仍观望；同簇「政府门户填表 Agent」公开池已红。
- 午间旁证 Backend API Lead Intake & Auth --2：本刷未再入 \`job_leads\` 前排。
- 仍在池：Mortgage Lead Gen（130 标，午间 91）、Navshakti Sales Force Tracking（59，午间 37）、Linux Security / Air-Gapped AI Document（23，德里现场）、Cinematic Health App Video（13）。
- 池内新面孔（均未推荐 / 关键词未过）：AI Platform for Distressed Deals（$15–25/hr，255 标）、Rideshare App Testing --3（181）、Cross-Platform Car Booking（98）、3D Animation for SaaS（93）、Dermatology Google Ads（66）、Health App Website Redesign（72）、Indonesia Vacation Rental Booking（$250–750，22）、Intelligent Document Analysis RAG（331）、Fractional CFO Website（308）、Turkish Pilates Telemarketer（0 标，非技术栈）。

**动作**：仍不投 Beds24；Office Agent 公开池已过百标，勿当窗口；无新 Upwork 筛单（仍停在 10-19 晚间）。下一雷达约 21:00（every_4h）。模板线不变：预约×内容 + 今日 T-FL。

`},
{"id": "doc-booking-map-1021", "title": "预约×内容管理 需求映射（2026-10-21）", "theme": "模板与交付", "date": "2026-10-21 08:46", "summary": "8 个需求簇对到 T1–T3 / bz.a / smart.a；今晚素材 Top5 与缺口（Sanity CMS、会员门禁）。", "tags": ["预约", "CMS", "Freelancer", "模板", "演示", "bz.a", "smart.a"], "source": "", "path": "freelancer/booking_content_requirements_map_2026-10-21.md", "related_docs": ["doc-live", "doc-fl-templates", "doc-fl-samples-1020", "doc-radar-pulse-1021", "doc-backlog", "doc-fl-samples-1021", "doc-booking-keywords-1021", "doc-booking-entry-1021", "doc-booking-acq-1021", "doc-booking-reject-1021", "doc-booking-seeds-1021", "doc-radar-pulse-1022"], "content": `# 预约 × 内容管理 需求映射（接单演示用）

- 日期：2026-10-21（Asia/Shanghai）
- 用途：把 backlog / Freelancer 样本里的「预约」与「内容管理」簇，对到现成演示与今晚素材清单
- 证据原则：事实来自本地 backlog、templates、demand samples、live_templates；不编造预算/职位链接
- 现成演示（任务给定 + 本地文档核对）：
  - \`https://bz.a.ezcoin.ink\` — 预约系统（ThinkPHP + uni-app，Stripe 向，访客浏览+下单，动态字段）
  - \`https://smart.a.ezcoin.ink\` — 多客陪玩（内容 + 圈子 + 预约一体）
  - Portfolio T1–T4：\`tpl-landing-waitlist\` / \`tpl-form-to-sheet\` / \`tpl-booking-calendar\` / \`tpl-launch-audit-report\`（见 \`/workspace/hub/docs/live_templates.md\`）
  - 本地仓：\`/workspace/tmp_repos/portfolio-templates\`、\`/workspace/portfolio-cases/templates/\`、\`/workspace/deploy-booking-calendar\`

---

## 1. 总览

「预约」簇要的是**选服务/时段 → 确认/支付 → 防双订**；「内容管理」簇要的是**客户自己改文案、发帖/圈子、后台 CMS**。二者常捆在一起卖（本地服务站、陪玩/教练平台、会员内容站）。当前最强证据链是：**bz.a 覆盖访客预约+动态字段+支付叙事，smart.a 覆盖内容/圈子/档期一体，T3 周历可快速贴 Vercel 链接**——今晚优先录这三条路径的截图/录屏，即可覆盖大部分投标开场。

---

## 2. 需求簇（合并同类）

### 簇 1 · 预约日历 + 支付确认

- **典型客户说法**
  - 「要 booking + payment，不是漂亮官网」（backlog A3）
  - 「选服务/时间/支付/确认一体」
  - 「洗车/诊所/课程要能订时段」（A3 / B6 信号）
  - 「日历占坑后要确认页」（归纳自 T3 demo path）
- **核心能力点**
  - 周/日视图选时段；已订不可再选
  - 确认页 + 支付状态（真 Stripe test 或 demo_skipped / stripe_test stub）
  - 邮件/站内确认（可后接 n8n）
- **可联想的现成模板/演示**
  - T3：\`https://tpl-booking-calendar.vercel.app\`（仓 \`apps/booking-calendar\`）
  - bz.a：\`https://bz.a.ezcoin.ink\`（完整业务向预约+Stripe 叙事）
  - 部署旁路：\`/workspace/deploy-booking-calendar\`
- **建议演示素材**
  - 截图：\`portfolio-templates/.../booking-calendar/docs/screenshots/calendar.png\` 或 \`portfolio-cases/templates/booking-calendar/calendar.png\`
  - 录屏路径：打开 T3 → 点空档 → 填 name/email → \`/confirmation/[id]\` → 回首页档变灰
  - 话术：「这是可演示的周历占坑；支付可接 Stripe test，业务版见 bz.a。」
- **接单切入**：二次开发（在现成日历上加服务类型/支付）；复杂计价再谈全盘搭建

### 簇 2 · 动态表单 / 可配置预约字段

- **典型客户说法**
  - 「不同服务要填不同字段」（归纳 / bz.a 动态字段能力）
  - 「表单别绑死 Formspree，要进表格/Slack」（backlog A10）
  - 「落地页 Join waitlist，进 Contacts」（A1）
- **核心能力点**
  - 字段可配（文本/选项/必填）
  - 提交 → Sheets / Slack / webhook（T2）
  - 与预约单绑定（下单时带扩展字段）
- **可联想的现成模板/演示**
  - T2：\`https://tpl-form-to-sheet.vercel.app\`
  - T1：\`https://tpl-landing-waitlist.vercel.app\`（线索表单）
  - bz.a：动态字段预约（业务完整度更高）
- **建议演示素材**
  - 截图：\`form-to-sheet/docs/screenshots/test-form.png\`、\`landing-waitlist/.../hero.png\`
  - 录屏：T2 提交 → \`data/submissions.json\` / mock Slack 日志；再切 bz.a 展示「换服务字段变」
  - 话术：「静态站表单 5 分钟进表；复杂预约字段用 bz.a 那套配置。」
- **接单切入**：修 bug / 二次开发（客户已有表单接 Sheets）；新站可 T1+T2 拼

### 簇 3 · 免注册访客浏览 + 下单

- **典型客户说法**
  - 「客人先逛再订，别强制注册」（归纳 / bz.a guest browse+order）
  - 「本地服务要低摩擦转化」（归纳自 A3 买家类型）
  - 「网站助理能答疑再引导预约」（样本 2026-10-20 #9/#10，T-FL-site-faq-bot）
- **核心能力点**
  - 公开服务目录浏览
  - 游客下单（邮箱/手机即可）
  - 可选后续注册绑定订单
- **可联想的现成模板/演示**
  - bz.a：\`https://bz.a.ezcoin.ink\`（主证据）
  - T3：有选档+确认，但无完整「逛目录」→ 弱匹配
  - FAQ→预约挂件：模板 \`T-FL-site-faq-bot\`（无独立 live URL，靠 SiteBot/话术）
- **建议演示素材**
  - 录屏 bz.a：未登录浏览服务 → 选档/填联系方式 → 下单成功页
  - 话术：「转化漏斗不卡注册；登录是后置能力。」
- **接单切入**：二次开发（在现有站去注册墙）；或全盘搭建（新垂直目录）

### 簇 4 · 多服务者档期（陪玩 / 教练 / 技师）

- **典型客户说法**
  - 「多个陪玩/教练各自有档期」（归纳 / smart.a 多客陪玩）
  - 「豪车接送要报价+预订跟进」（样本 2026-10-20 #1，偏运营自动化，档期相邻）
  - 「不是单店日历，是人×时间矩阵」（归纳）
- **核心能力点**
  - 服务者资料页 + 个人可订时段
  - 冲突检测（同一人不可双订）
  - 后台给服务者开关档期
- **可联想的现成模板/演示**
  - smart.a：\`https://smart.a.ezcoin.ink\`（主证据：内容+圈子+预约）
  - T3：单资源周历 → 需说明「可扩成 multi-provider」
  - 缺：纯「服务者后台档期」独立英文 portfolio 切片 → **建议补演示**（或从 smart.a 剪英文 UI 片段）
- **建议演示素材**
  - 录屏 smart.a：选陪玩/服务者 → 看档期 → 下单；再进后台改档
  - 话术：「多人档期我已有陪玩垂直可点；日历内核同 T3。」
- **接单切入**：二次开发 / 全盘搭建（垂直差异大时全盘）

### 簇 5 · 预约聊天机器人 / FAQ→预约

- **典型客户说法**
  - 「AI Chatbot for Car Wash Booking」（backlog B6 / A3 关联单）
  - 「网站访客 FAQ，答不上转联系/预约」（样本 #9/#10；模板 T-FL-site-faq-bot）
  - 「多渠道问价/改约，要人机交接」（B6）
- **核心能力点**
  - 站点挂件 + 可编辑 FAQ
  - 意图「预约」时拉日历/留资
  - 低置信转人工/表单
- **可联想的现成模板/演示**
  - backlog 已有案例叙事：SiteBot（FAQ RAG + 留资）
  - T3 可作日历后端骨架；B6 状态仍为「待做案例」合并更强
  - Freelancer 模板：\`T-FL-site-faq-bot\`
  - 截图资产：\`/workspace/portfolio-cases/chatbot-widget.png\`、\`chatbot-admin.png\`
- **建议演示素材**
  - 录屏：挂件问「怎么预约」→ 给时段或跳 T3/表单；后台改 FAQ
  - 话术：「聊天只负责引导；占坑仍走日历/订单，避免幻觉下单。」
- **接单切入**：修 bug（已有 bot 接日历）；二次开发（SiteBot×T3）

### 簇 6 · 后台 CMS / 客户可改文案

- **典型客户说法**
  - 「Marketing site + client-editable CMS」（backlog A4，Sanity/Astro）
  - 「不要半夜修自托管 CMS」（A4 社区共识）
  - 「本地服务站要预约 + CMS」（dev-topics #11）
- **核心能力点**
  - 非技术客户改文案/图片
  - 预览/发布；尽量用托管 headless（Sanity free 等）
  - 与预约页内容解耦
- **可联想的现成模板/演示**
  - **缺独立 live CMS demo** → 建议补：Astro/Next + Sanity 假工作室站（A4 原计划）
  - 弱相关：T1 落地页（改代码级，非客户 CMS）
  - smart.a 后台若含内容编辑，可剪「后台改文案」15 秒（需实机确认）
- **建议演示素材**
  - 今晚若无时间建 Sanity：先录 smart.a 后台内容编辑（有则拍）；否则标注「缺口，本周补 T-CMS」
  - 话术：「前台静态快，后台给你 Sanity/自建，不绑死 WordPress。」
- **接单切入**：全盘搭建（新营销站）；或二次开发（WP→headless 迁移）

### 簇 7 · 圈子 / UGC + 内容运营

- **典型客户说法**
  - 「要圈子/动态，不只是官网」（归纳 / smart.a）
  - 「Claude 定时给 WordPress 发文+SEO」（样本 2026-10-19 #12；模板 T-FL-wp-claude-publish）
  - 「会员订阅内容要门禁」（backlog A5）
- **核心能力点**
  - Feed/帖子/互动（点赞评论可裁剪）
  - 定时发文 / AI 辅助起草（插件或 API）
  - 订阅支付 → 服务端门禁（A5）
- **可联想的现成模板/演示**
  - smart.a：圈子/UGC + 陪玩内容（主）
  - A5 Membership gate：**缺**独立 demo → 建议补 Next+Stripe test 假文章门禁
  - WP 定时发文：仅模板笔记，无自建 demo URL
- **建议演示素材**
  - 录屏 smart.a：逛圈子 Feed → 进服务者主页 → 预约
  - 话术：「内容拉活 + 档期变现是一条产品，不是两个外包。」
- **接单切入**：二次开发（已有 WP/圈子加预约）；AI 发文用修 bug/小插件切入

### 簇 8 · 内容 + 预约一体化（本地服务 / 垂直 SaaS 切片）

- **典型客户说法**
  - 「建站 + 预约 + AI 接待」一体（dev-topics #11；hub 同文）
  - 「Standard：多页 + 预约 + CMS」（同出处价格档为建议，非成交证据）
  - 「多客陪玩：内容社区和订单一套后台」（smart.a）
- **核心能力点**
  - 营销页 + CMS 文案 + 预约漏斗同域
  - 订单/用户/内容后台统一
  - 可选 AI 接待挂件
- **可联想的现成模板/演示**
  - smart.a（最强一体演示）
  - bz.a（预约侧完整）+ T1/T3（英文快速贴链）
  - T4 launch-audit：上线加固叙事（客户已有半成品时用），非本簇核心 UI
- **建议演示素材**
  - 一条 60–90s 拼接：T1 落地 → T3 预约 → 切 smart.a 展示「垂直做深后长这样」
  - 话术：「英文模板证明交付速度；垂直站证明做过完整业务。」
- **接单切入**：全盘搭建（新产品）；已有站则二次开发拼模块

---

## 3. 与现有模板对照表

| 需求簇 | 现成演示 URL 或路径 | 缺口 | 今晚优先做素材? |
|--------|---------------------|------|-----------------|
| 1 预约日历+支付 | T3 \`tpl-booking-calendar.vercel.app\`；bz.a；仓 \`apps/booking-calendar\`；截图 \`.../docs/screenshots/calendar.png\` | T3 无真 Stripe 扣款（仅 stub）；复杂计价/地图选点无 | **是** |
| 2 动态表单预约 | T2 / T1 Vercel；bz.a 动态字段 | T2 非「预约字段配置器」；缺字段编辑器英文页 | **是**（T2+bz.a 各一段） |
| 3 免注册下单 | bz.a | T3 无逛目录；无独立 guest-checkout 模板页 | **是**（主靠 bz.a） |
| 4 多服务者档期 | smart.a | T3 单资源；缺英文 multi-provider 切片 | **是** |
| 5 FAQ→预约 Bot | SiteBot 叙事；\`portfolio-cases/chatbot-*.png\`；T-FL-site-faq-bot | Bot×日历联调 live 不足（backlog 仍待加强） | 次优先 |
| 6 后台 CMS | （弱）smart.a 后台；A4 计划 | **缺** Sanity/Astro 独立 demo | 若有空拍后台；否则记缺口 |
| 7 圈子/UGC/会员内容 | smart.a；A5 仅 backlog | **缺** Stripe 门禁会员站 demo；WP-Claude 无自托管 demo | **是**（smart.a 圈子段） |
| 8 内容+预约一体 | smart.a + bz.a + T1/T3 拼接 | 无单一英文「本地服务一体」站 | **是**（拼接叙事） |

---

## 4. 今晚素材优先级（Top 5）

1. **T3 周历全流程录屏（30–45s）** — 投标可贴公开 Vercel；对应簇 1；路径见 README Demo path。  
2. **bz.a：访客浏览 → 动态字段 → 下单/支付叙事（45–60s）** — 证明「真业务预约」而非玩具日历；覆盖簇 2+3。  
3. **smart.a：服务者档期 + 下单（45s）** — 覆盖簇 4；与 T3 形成「模板 vs 垂直」对比。  
4. **smart.a：圈子/内容 Feed → 进主页预约（30s）** — 覆盖簇 7+8；内容管理差异化话术。  
5. **T2 表单→Sheets/mock +（可选）chatbot 挂件截图拼图** — 覆盖线索/FAQ 入口；素材已有 \`test-form.png\`、\`chatbot-widget.png\`；补 15s 提交录屏即可。

（T4 / Launch Audit 与本主题弱相关，今晚不排进预约/CMS 素材队列。）

---

## 5. 搁置 / 不相关（勿混进本映射）

- **A6 多语言店 / A8 Shopify LP / A9 WP 会员长期维护**：建站/主题向，不是预约或 CMS 演示重点（仅投标不建站）。  
- **B 桶主体**（RAG、发票 OCR、n8n 迁移、Lead scoring、GHL 红海岗）：自动化主线，只有 B6「预约聊天」与本文件相交。  
- **C 桶上线救援 / T4 审计**：Fix & launch，不拿来冒充预约案例。  
- **D 桶爬虫/MAP/目录采集**：数据管道，与 CMS/预约无关。  
- **Freelancer 样本中的 ERP 同步、求职自动投、纯 Playwright QA、极低价 WA 群发**：勿塞进「内容+预约」提案。  
- **Voice AI 全栈电话坐席**（backlog 暂不做）：与「站内预约」分开。

---

## 21:00 提醒稿

【预约×内容 今晚素材 — 21:00】

Top 需求簇（可对模板）：
1. 预约日历+支付 → T3 + bz.a
2. 动态字段/表单进表 → T2 + bz.a
3. 免注册浏览下单 → bz.a
4. 多服务者档期 → smart.a
5. 圈子/UGC+预约一体 → smart.a
6. FAQ→预约 → SiteBot/挂件图（次优先）
7. 客户可改 CMS → 缺口（Sanity），有空拍 smart 后台

今晚 Top 5 先拍：
1. T3 选档→确认（Vercel 可贴链）
2. bz.a 访客下单+动态字段
3. smart.a 服务者档期下单
4. smart.a 圈子→预约
5. T2 提交录屏 + chatbot 截图拼图

链接速查：
- https://tpl-booking-calendar.vercel.app
- https://tpl-form-to-sheet.vercel.app
- https://tpl-landing-waitlist.vercel.app
- https://bz.a.ezcoin.ink
- https://smart.a.ezcoin.ink
- 全文：\`/workspace/freelancer/booking_content_requirements_map_2026-10-21.md\`
`},
{"id": "doc-radar-pulse-1022", "title": "需求雷达脉搏 2026-10-22（07:05 → 17:16）", "theme": "市场研究", "date": "2026-10-22 17:16", "summary": "雷达 30/0 @17:16（午后 27/1）；Beds24--5 淡出推荐池；Office Agent 132 标；预约旁证标数续爬 + React Vite Booking Store 47 标旁证；无新 Upwork/discover。", "tags": ["雷达", "Freelancer", "预约", "脉搏"], "source": "", "path": "docs/notes/radar_pulse_2026-10-22.md", "related_docs": ["doc-radar-pulse-1021", "doc-booking-map-1021", "doc-booking-keywords-1021", "doc-booking-reject-1021", "doc-booking-acq-1021", "doc-fl-samples-1021", "doc-fl-templates", "doc-fl-samples-1022"], "content": `# 需求雷达脉搏 · 2026-10-22（Asia/Shanghai）

> 来源：线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\` + \`job_leads.json\`（\`published_at\` **2026-10-22 07:05 +08**，every_4h）。公开数据 only。相对 10-21 17:00 的 17/0：帖数升到 **27**，推荐池仍空。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **27**（昨傍晚 17） |
| 推荐数量 | **0** |
| Job ingest | OK（\`job_leads_run_id\` 20261022-070451-091af3a6） |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo |

## 相对昨傍晚变化（事实）

- **Beds24 OTA --4**：本刷 **未再入** \`job_leads\` 前排（昨傍晚仍 Open · 132 标 · 不推）。系列从池中淡出，长尾结论不变：不投，仅作 PMS/OTA 素材。
- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **126**（昨傍晚 107）· score 67 · 一期+竞争未过 → 继续观望，勿当窗口。
- **加固旁证**：Next.js/Node/Three.js Bug Fix（£250–750，**329** 标）命中加固轨但竞争关否决 → 红海旁证「半成品修 bug」有量但公开池卷。

## 预约 / booking 旁证（均未推荐；关键词关多未过）

| 帖 | 预算 | 标 | 备注 |
|---|---|---|---|
| Charleston Hair Beauty Booking App | ₹400–750/hr | 144 | 美业预约 App；红海 + 双端风险 → 对 R7 / 美业关键词日表 |
| Finish Madagascar Tour Booking Site | $30–250 | 425 | 旅游预订收尾；极红 + 低预算 |
| Service Booking E-Commerce Site | $10–30 | 171 | 服务预约电商占位；命中 R2 极低价拒单 |
| Travel Agency & Tour Booking Website | ₹12.5k–37.5k | 115 | 泛 full-stack 排除轨 |
| WordPress Travel Booking System | $30–250 | 344 | 插件/旅行预订红海 |
| Online Boyfriend Booking Platform | ₹2k–3k/hr | 54 | companion 向；过 R4/合规后再评，勿急投 |

→ 公开池「booking」词仍大量撞酒店/旅行/WP 模板与极低价；应用 **拒单规则 + hot seeds（带 payment/Stripe/salon）**，宽网词不作主搜。

## 其他观望 / 跳过（同刷）

- AI Call & Email Assistant：$30–250 · **277** 标 → 同簇外联 CRM 红海（见 10-21 discover #7）
- Intelligent Document Analysis RAG：$250–750 · **340** 标 → 继续红海
- Linux Security / Air-Gapped AI Document：₹12.5k–37.5k · 24 标 · 德里现场 → 非远程主线
- B2B Appointment Setter / Medical Receptionist 等：销售或前台岗，非工程栈

## 沉淀（今早）

1. 雷达推荐池连续多刷为空时，动作重心仍是：**手工 discover + 预约模板提案**（bz.a / smart.a + 关键词日表 + 拒单规则），不是等雷达推单。
2. Beds24 淡出 ≠ 需求消失；OTA/PMS 窄集成继续只当案例库，不抢公开低价标。
3. 无新 Upwork 筛单文件（仍停在 **2026-10-19 晚间** \`screened_*\`）。

**动作**：不投 Beds24 / Office Agent / 旅行 WP 预订红海；按预约本周最小切片（日搜 2 轮 · 提案贴 demo · 过拒单规则）；下一雷达约 11:05（every_4h）。


---

## 午前复核（约 10:32 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-22 10:32:07 +08**，\`job_leads\` **29 / 推荐 1**（\`job_leads_run_id\` 20261022-103105-7820b98e）。相对早间 07:05 的 27/0：帖数 +2，**推荐池再非空**。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **29**（早间 27） |
| 推荐数量 | **1**（早间 0） |
| Job ingest | OK |

### 雷达推荐（需人工再滤）

- **[BEDS24 OTA Integration Setup -- 5](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40780279)**（\`fl-40780279\`）
  - 预算 \`$30–250\` · 投标 **79** · score 120 · 嵌入轨命中 \`beds24\`
  - 五关全过；竞争关文案「投标偏多（79），谨慎」但仍 \`recommend: true\`
  - **人工结论：仍不投**（同系列 --3/--4：预算下沿过低 + Beds24 实战门槛；79 标也非冷启动窗口）。作 OTA/PMS 窄集成素材。

### 相对早间变化（事实）

- Beds24 系列：\`--4\` 早间已淡出；本刷以 **\`--5\` 新帖**回到推荐池（79 标）→ 需求持续复帖，公开价带与经验门槛结论不变。
- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **128**（早间 126）· score 67 · 一期+竞争未过 → 继续观望。
- **7 Connected AI Agents（珠宝）**：₹12.5k–37.5k · **136** 标 · 同未过 → 跳过。
- Next.js/Node/Three.js Bug Fix：£250–750 · **332** 标（早间旁证 329）→ 半成品修 bug 红海旁证仍在。
- 预约旁证仍在池：Charleston Hair Beauty Booking（144）、Madagascar Tour Booking（425）、Service Booking E-Commerce（193）、Travel Agency Tour Booking（121）、WP Travel Booking（344）——继续套拒单规则，不作主搜。

### 手工 discover（约 09:12，未进雷达推荐池）

- 入样 **15** + 只当样本 6：n8n→Meta WA 模板、WA 客服 FAQ、学校多租户 Agent、AI SaaS 上线审计、PR→LLM 性能评审、Teams→Zendesk 催单抬优、语音/Twilio 外联、房产 skill 拼盘、爬虫运维小品、Sendiee 入职流等。
- 低竞争亮点（提案＜60，抓取时）：n8n WA 个性化消息（28）、Sendiee 入职流（27）、Teams→Zendesk（36）、跑现成 Python 爬虫（42）、学校 AI Agents（50）——价多偏低，宜模板沉淀。
- 新增 T-FL：\`edu-multi-agent\` · \`pr-perf-agent\` · \`teams-helpdesk-bridge\`（见 templates 表）。

**动作**：不投 Beds24 --5 / Office Agent / 旅行·美业 WP 预订红海；按 discover 低竞争切片写提案（WA 模板流、Teams 工单桥、PR 评审骨架）；Upwork 仍无新于 10-19 晚间筛单。下一雷达约 14:32（every_4h）。


---

## 午后复核（约 11:51 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-22 11:51:45 +08**，\`job_leads\` **27 / 推荐 1**（\`job_leads_run_id\` 20261022-115045-4d1ac301）。相对午前 10:32 的 29/1：帖数 **-2**，推荐池仍 1 条。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **27**（午前 29） |
| 推荐数量 | **1**（同午前） |
| Job ingest | OK |

### 雷达推荐（需人工再滤）

- **[BEDS24 OTA Integration Setup -- 5](https://www.freelancer.com/projects/php/BEDS-OTA-Integration-Setup-40780279)**（\`fl-40780279\`）
  - 预算 \`$30–250\` · 投标 **85**（午前 79）· score 120 · 嵌入轨命中 \`beds24\`
  - 五关全过；竞争关「投标偏多（85），谨慎」仍 \`recommend: true\`
  - **人工结论：仍不投**（同系列门槛；标数继续爬升，窗口更差）。作 OTA/PMS 素材。

### 相对午前变化（事实）

- 池缩 29→27：午前旁证里的「7 Connected AI Agents（珠宝）」等已淡出；噪声帖补入（板球管理 App×2、律所模板、纯佣金销售、Peptide 约访岗、Wix 按设计建站等）——均关键词未过。
- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **128**（持平）· score 67 · 一期+竞争未过 → 继续观望。
- Next.js/Node/Three.js Bug Fix：£250–750 · **332** 标（持平）→ 半成品修 bug 红海旁证仍在。
- 预约旁证：Charleston Hair Beauty Booking **145**（午前 144）、Madagascar Tour Booking **425**、Service Booking E-Commerce **196**（午前 193）、Travel Agency Tour Booking **123**（午前 121）、WP Travel Booking **344**——继续套拒单规则，不作主搜。
- Upwork：仍无新于 **2026-10-19 晚间** \`screened_*\`；本轮无新 discover 文件（仍用今早 09:12 的 15 样）。

**动作**：不投 Beds24 --5 / Office Agent / 旅行·美业 WP 预订红海；继续按 discover 低竞争切片（WA 模板流、Teams 工单桥、PR 评审骨架）写提案。下一雷达约 **15:51**（every_4h）。

---

## 傍晚复核（约 17:16 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-22 17:16:44 +08**，\`job_leads\` **30 / 推荐 0**（\`job_leads_run_id\` 20261022-171543-1cfe6c61）。相对午后 11:51 的 27/1：帖数 **+3**，**推荐池再空**。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **30**（午后 27） |
| 推荐数量 | **0**（午后 1） |
| Job ingest | OK |

### 雷达推荐

- 无（公开池推荐数 0）。午后仍推的 **Beds24 --5** 本刷 **未再入** \`job_leads\` 前排。

### 相对午后变化（事实）

- **Beds24 --5**：从推荐池淡出（午后 85 标仍 Open 与否不在本刷前排）。系列结论不变：不投，仅作 OTA/PMS 素材。
- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **132**（午后 128）· score 67 · 一期+竞争未过 → 继续观望。
- **7 Connected AI Agents（珠宝）**：₹12.5k–37.5k · **136** 标 · 同未过 → 跳过（午后曾淡出，本刷回池）。
- Next.js/Node/Three.js Bug Fix：£250–750 · **338** 标（午后 332）→ 半成品修 bug 红海旁证仍在。
- 预约旁证：Charleston Hair Beauty Booking **147**（午后 145）、Service Booking E-Commerce **231**（午后 196，标数猛升）、Travel Agency Tour Booking **149**（午后 123）、WP Travel Booking **345**（午后 344）；Madagascar Tour Booking 本刷淡出。新增 **React Vite Booking Store**（₹600–1500 · **47** 标 · 关键词未过）——低价预约店面，套拒单规则，不作主投。
- 窄集成旁证：**SFTP JSON Middleware for TMS**（$750–1500 · **148** 标 · 关键词未过）——价带尚可但公开池已卷，仅记方向。
- 噪声岗仍多：销售/前台/口译/视频剪辑/纯佣金等，关键词未过。
- Upwork：仍无新于 **2026-10-19 晚间** \`screened_*\`；本轮无新 discover 文件（仍用今早 09:12 的 15 样）。

**动作**：不追 Beds24 / Office Agent / 旅行·美业 WP·极低价 booking；预约线继续日搜 2 轮 + 拒单规则 + bz.a/smart.a 提案；低竞争切片仍看 WA 模板流、Teams 工单桥、PR 评审骨架。下一雷达约 **21:16**（every_4h）。

`},
{"id": "doc-radar-pulse-1023", "title": "需求雷达脉搏 2026-10-23（07:04 → 17:13）", "theme": "市场研究", "date": "2026-10-23 17:13", "summary": "傍晚复核雷达 37/0 @17:13（午后 31/0）；新入 Calendly+HubSpot 75/143、Appointment Booking 67/126；Office Agent 138；FORGEAI 69；Charleston 191；Beds24--5 仍淡出；无新 discover / Upwork 筛单。", "tags": ["雷达", "Freelancer", "预约", "脉搏"], "source": "", "path": "docs/notes/radar_pulse_2026-10-23.md", "related_docs": ["doc-radar-pulse-1022", "doc-haiwai-positioning-1022", "doc-booking-map-1021", "doc-booking-keywords-1021", "doc-booking-reject-1021", "doc-booking-acq-1021", "doc-fl-samples-1022", "doc-fl-templates", "doc-fl-samples-1023"], "content": `# 需求雷达脉搏 · 2026-10-23 早间（Asia/Shanghai）

> 来源：线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\` + \`job_leads.json\`（\`published_at\` **2026-10-23 07:04:11 +08**，every_4h；\`job_leads_run_id\` 20261023-070310-16ed3b37）。公开数据 only。相对昨傍晚 17:16 的 30/0：帖数 **+1 → 31**，推荐池仍空。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **31**（昨傍晚 30） |
| 推荐数量 | **0** |
| Job ingest | OK |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo |

## 雷达推荐

- 无（公开池推荐数 0）。昨午后曾推的 **Beds24 --5** 自 17:16 淡出后，本刷仍 **未再入** \`job_leads\` 前排。

## 相对昨傍晚变化（事实）

- **Beds24 --5**：继续淡出推荐池。系列结论不变：不投，仅作 OTA/PMS 窄集成素材。
- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **136**（昨傍晚 132）· score 67 · 一期+竞争未过 → 继续观望。
- Next.js/Node/Three.js Bug Fix：£250–750 · **341** 标（昨傍晚 338）→ 半成品修 bug 红海旁证仍在。
- Intelligent Document Analysis RAG：$250–750 · **345** 标 → 继续红海。
- 预约旁证（均关键词未过 / 排除轨）：
  | 帖 | 预算 | 标（昨傍晚→今早） | 备注 |
  |---|---|---|---|
  | Charleston Hair Beauty Booking App | ₹400–750/hr | 147→**152** | 美业预约 App；红海 + 双端风险 |
  | Service Booking E-Commerce Site | $10–30 | 231→**248** | 命中 R2 极低价拒单 |
  | Travel Agency & Tour Booking Website | ₹12.5k–37.5k | 149→**161** | 泛 full-stack 排除轨 |
  | WordPress Travel Booking System | $30–250 | 345→**345** | 插件/旅行预订红海 |
  | React Vite Booking Store | ₹600–1500 | 47→**98** | 低价预约店面；标数翻倍，仍不作主投 |
  | **Staff Appointment Scheduler System**（新入池） | $25–50/hr | **315** | 关键词未过；员工排班向，非支付+门店预约主线 |
  | **Test our online booking website UX feedback**（新入池） | $25–50/hr | **77** | 排除轨（\`online booking\` + \`booking_context_missing\`）；UX 试玩岗，非工程交付 |
- Madagascar Tour Booking：昨傍晚已淡出，本刷仍不在前排。
- 噪声岗仍多：销售/前台/Appointment Setter/SDR、屋顶线索、律所模板、视频剪辑等，关键词未过。

## 本地 intel 扫描（相对昨傍晚 hub 提交）

- \`/workspace/freelancer/\`：无 **2026-10-23** 新文件；\`demand_samples_2026-10-22.md\` 与 \`api_raw/_stats_2026-10-22.json\`（618 去重 / 429 近 36h / 入样 15）已在昨脉冲与 hub \`doc-fl-samples-1022\` 沉淀，本轮无增量 discover。
- \`/workspace/upwork/\`：最新仍为 **2026-10-19** \`checked_*\` / \`screened_*\`；无 Oct 20–23 筛单文件。
- \`/workspace/出海变现/出海定位与规划.md\`（mtime **2026-10-22 21:23**，晚于昨傍晚脉冲）：合并定位稿（Opencals×Cal.com 叙事、四入口、hot/cold 16 词、R1–R7、bz.a/smart.a soft 重装验收、Stripe 密钥待重贴）。已作为新 docs 卡挂入 hub（见 \`doc-haiwai-positioning-1022\`）。

**动作**：不追 Beds24 / Office Agent / 旅行·美业 WP·极低价 booking / 员工排班红海 / UX 试玩岗；预约线继续日搜 2 轮 + 拒单规则 + bz.a/smart.a 提案（展示站先行）；低竞争切片仍看 WA 模板流、Teams 工单桥、PR 评审骨架。下一雷达约 **11:04**（every_4h）。

---

## 午前复核（约 10:36 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-23 10:36:40 +08**，\`job_leads\` **31 / 推荐 0**（\`job_leads_run_id\` 20261023-103542-5a3c4c9d）。相对早间 07:04 的 31/0：帖数不变、推荐仍空。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **31**（早间 31） |
| 推荐数量 | **0**（同早间） |
| Job ingest | OK |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo |

### 雷达推荐

- 无（公开池推荐数 0）。**Beds24 --5** 仍不在前排。

### 相对早间变化（事实）

- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **137**（早间 136）· score 67 · 一期+竞争未过 → 继续观望。
- Next.js/Node/Three.js Bug Fix：£250–750 · **341** 标（同早间）→ 半成品修 bug 红海旁证仍在。
- Intelligent Document Analysis RAG：$250–750 · **346** 标（早间 345）→ 继续红海。
- 预约旁证（均关键词未过 / 排除轨）：
  | 帖 | 预算 | 标（早间→午前） | 备注 |
  |---|---|---|---|
  | Charleston Hair Beauty Booking App | ₹400–750/hr | 152→**152** | 美业预约 App；红海 + 双端风险 |
  | Service Booking E-Commerce Site | $10–30 | 248→**249** | 命中 R2 极低价拒单 |
  | Travel Agency & Tour Booking Website | ₹12.5k–37.5k | 161→**162** | 泛 full-stack 排除轨 |
  | **Staff Appointment Scheduler System** | $25–50/hr | 315→**319** | 关键词未过；员工排班向 |
  | **Test our online booking website UX feedback** | $25–50/hr | 77→**78** | 排除轨；UX 试玩岗 |
  | React Vite Booking Store | ₹600–1500 | 98→**98** | 低价预约店面；仍不作主投 |
- **FORGEAI**（Next.js + FastAPI MVP 完工）**新入雷达池**：₹1.5k–12.5k · **43** 标 · 关键词未过 · 不推荐（手工 discover 09:11 抓取时 **29** 标，已入样并挂 \`T-FL-vibe-rescue\`）。旁证：半成品接手价带低估 + 标数已爬，不作主投，仅作 vibe-rescue 素材。
- Beds24 --5：继续不在前排。

### 手工 discover（约 09:11，未进雷达推荐池）

- 入样 **16** + 只当样本 10：stats 去重 **613** / 近 36h **423**；高频 WA/客服 bot、接手修到可发/MVP、n8n SEO 编排、RAG/语音、CRM/支付回调与单 API 看板等。
- 低竞争亮点（提案＜60，抓取时）：n8n SEO Autopilot（**30**）、FORGEAI（**29**）、Salesforce Sales D（**56**）、LAPU Recharge & Payment Auto（**53**）、CSV→PDF invoice（**50**）——价多偏低，宜模板沉淀。
- 沉淀逻辑要点：n8n→CMS 草稿→审批→发布→GSC/排名；单源 API→单页指标看板；SaaS 事件→Power Automate/邮件；支付回调→履约→对账日报；接手半成品 AI SaaS/垂直 MVP（审计清单+Phase1 可演示）；编码 Agent 编排（一条任务+人工门）。
- 新增 T-FL：\`T-FL-n8n-cms-seo\` · \`T-FL-api-metric-dashboard\`（见 templates 表）。
- Upwork：仍无 Oct 20–23 新 checked/screened；最新停在 **2026-10-19**。

**动作**：不追 Beds24 / Office Agent / FORGEAI 公开价带 / 旅行·美业 WP·极低价 booking / 员工排班红海 / UX 试玩岗；预约线继续日搜 2 轮 + 拒单规则 + bz.a/smart.a 提案（展示站先行）；按 discover 低竞争切片写提案（n8n CMS SEO 编排、单源 API 看板、支付回调履约、vibe-rescue 分期）。下一雷达约 **14:36**（every_4h）。
---

## 午后复核（约 11:55 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-23 11:55:56 +08**，\`job_leads\` **31 / 推荐 0**（\`job_leads_run_id\` 20261023-115457-214284d1）。相对午前 10:36 的 31/0：帖数不变、推荐仍空。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **31**（午前 31） |
| 推荐数量 | **0**（同午前） |
| Job ingest | OK |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo |

### 雷达推荐

- 无（公开池推荐数 0）。**Beds24 --5** 仍不在前排。

### 相对午前变化（事实）

- **AI Agent for Office Automation**：仍 Open · ₹75k–150k · 投标 **137**（午前同 137）· score 67 · 一期+竞争未过 → 继续观望。
- Next.js/Node/Three.js Bug Fix：£250–750 · **341** 标（同午前）→ 半成品修 bug 红海旁证仍在。
- Intelligent Document Analysis RAG：$250–750 · **346** 标（同午前）→ 继续红海。
- **FORGEAI**（Next.js + FastAPI MVP 完工）：₹1.5k–12.5k · **50** 标（午前雷达 43 / discover 时 29）· 关键词未过 · 不推荐；标数续爬，仅 vibe-rescue 素材。
- 预约旁证（均关键词未过 / 排除轨）：
  | 帖 | 预算 | 标（午前→午后） | 备注 |
  |---|---|---|---|
  | Charleston Hair Beauty Booking App | ₹400–750/hr | 152→**167** | 美业预约 App；红海 + 双端风险；标爬明显 |
  | Service Booking E-Commerce Site | $10–30 | 249→**249** | 命中 R2 极低价拒单 |
  | Travel Agency & Tour Booking Website | ₹12.5k–37.5k | 162→**162** | 泛 full-stack 排除轨 |
  | WordPress Travel Booking System | $30–250 | 345→**345** | 插件/旅行预订红海 |
  | Staff Appointment Scheduler System | $25–50/hr | 319→**319** | 员工排班向 |
  | Test our online booking website UX feedback | $25–50/hr | 78→**78** | 排除轨；UX 试玩岗 |
  | React Vite Booking Store | ₹600–1500 | 98→**98** | 低价预约店面；仍不作主投 |
- Beds24 --5：继续不在前排。
- 本地 intel：\`/workspace/freelancer/\` 无午后新 discover（仍停在 09:11 的 16 样）；\`/workspace/upwork/\` 仍无 Oct 20–23 新 checked/screened。

**动作**：不追 Beds24 / Office Agent / FORGEAI 公开价带 / 旅行·美业 WP·极低价 booking / 员工排班红海 / UX 试玩岗；预约线继续日搜 2 轮 + 拒单规则 + bz.a/smart.a 提案（展示站先行）；低竞争切片仍看 n8n CMS SEO、单源 API 看板、支付回调履约、vibe-rescue 分期。下一雷达约 **15:55**（every_4h）。
---

## 傍晚复核（约 17:13 +08；雷达已刷）

> 线上 [requirement-trendradar](https://gaopfediter.github.io/requirement-trendradar/) \`data/meta.json\`：**published_at 2026-10-23 17:13:09 +08**，\`job_leads\` **37 / 推荐 0**（\`job_leads_run_id\` 20261023-171209-81b4c6d1）。相对午后 11:55 的 31/0：帖数 **+6 → 37**，推荐仍空。Fiverr 仍 403；Trends 仍 demo。

| 指标 | 数值 |
|---|---|
| 帖子总数 | **37**（午后 31） |
| 推荐数量 | **0**（同午后） |
| Job ingest | OK |
| Fiverr | 仍跳过（HTTP 403 buyer_requests） |
| Trends | 仍 demo |

### 雷达推荐

- 无（公开池推荐数 0）。**Beds24 --5** 仍不在前排。

### 相对午后变化（事实）

- **Next.js Website Development with CMS, Calendly & HubSpot Integration**（**新入池**）：嵌入轨 · tool（calendly）· score **75** · 投标 **143** · 三关未过（竞争≥100）→ **不作主投**；记预约/CRM（Calendly+HubSpot）集成旁证。
- **Professional Appointment Booking Platform**（**新入池**）：嵌入轨 · phrase（appointment booking）· score **67** · 投标 **126** · 一期+竞争未过 → 预约主线旁证，标已红，不投。
- **AI Agent for Office Automation**：仍 Open · 投标 **138**（午后 137）· score 67 · 一期+竞争未过 → 继续观望。
- Next.js/Node/Three.js Bug Fix：仍 Open · **342** 标（午后 341）→ 半成品修 bug 红海旁证仍在。
- Intelligent Document Analysis RAG：**347** 标（午后 346）→ 继续红海。
- **FORGEAI**：关键词未过 · score 50 · 投标 **69**（午后雷达 50 / discover 09:11 时 29）· 标数续爬，仅 vibe-rescue 素材。
- 预约旁证（均关键词未过 / 排除轨 / 红海）：
  | 帖 | 标（午后→傍晚） | 备注 |
  |---|---|---|
  | Charleston Hair Beauty Booking App | 167→**191** | 美业预约 App；红海 + 双端风险 |
  | Service Booking E-Commerce Site | 249→**252** | 命中 R2 极低价拒单 |
  | Travel Agency & Tour Booking Website | 162→**164** | 泛 full-stack 排除轨 |
  | React Vite Booking Store | 98→**101** | 低价预约店面；刚破百 |
  | Staff Appointment Scheduler System | 319→**324** | 员工排班向 |
  | Test our online booking website UX feedback | 78→**90** | 排除轨；UX 试玩岗 |
  | Single Airbnb Property Booking Site | —→**326** | 单房源预订站；红海旁证（本刷显眼） |
- Beds24 --5：继续不在前排。
- 本地 intel：\`demand_samples_2026-10-23.md\` / T-FL×2（n8n-cms-seo、api-metric-dashboard）已在午前/午后脉冲沉淀，本段不重复贴表；\`/workspace/upwork/\` 仍无 Oct 20–23 新 checked/screened。

**动作**：不追 Beds24 / Office Agent / FORGEAI 公开价带 / Calendly+HubSpot 红海整站 / Professional Appointment 红海 / 旅行·美业 WP·极低价 booking / 员工排班 / Airbnb 单房源 / UX 试玩岗；预约线继续日搜 2 轮 + 拒单规则 + bz.a/smart.a 提案（展示站先行）；低竞争切片仍看 n8n CMS SEO、单源 API 看板、支付回调履约、vibe-rescue 分期。下一雷达约 **21:13**（every_4h）。
`},
{"id": "doc-haiwai-positioning-1022", "title": "出海定位与规划（合并稿 · 2026-10-22）", "theme": "定位规划", "date": "2026-10-22 21:23", "summary": "Opencals×Cal.com 交叉叙事；四入口；hot/cold 16 词与 R1–R7；bz.a/smart.a soft 重装验收（Stripe 密钥待重贴）；今晚三优先级：showcase、案例整理、验收后再发提案/Gig。", "tags": ["定位", "预约", "获客", "demo", "拒单"], "source": "", "path": "出海变现/出海定位与规划.md", "related_docs": ["doc-booking-entry-1021", "doc-booking-acq-1021", "doc-booking-reject-1021", "doc-booking-seeds-1021", "doc-booking-keywords-1021", "doc-radar-pulse-1023", "doc-fl-templates"], "content": `# 出海定位与规划（合并稿）

> 合并日期：2026-10-22（Asia/Shanghai）  
> 覆盖：2026-10-21 规划要点 + 2026-10-22 通话/调研结论  
> 用途：后续找「定位 / 获客入口 / demo / 拒单 / 今晚动作」时从本文跳转；细节以文末源文件为准。  
> 约定：全文不写真实人名；不自动投标。

---

## 0. 一句话定位（现行推荐）

**做「服务业预约基础设施」叙事的接单 + 可演示产品**：对外像 **Opencals（Shopify for services / 预约+commerce API）+ Cal.com（开源调度、日常发版、开发者向）** 的交叉——不是再做一个 Calendly 插件配置 Gig，而是用 **bz.a（单店预约+支付+动态字段+免注册）** 与 **smart.a（多服务者+内容）** 证明「能交付完整业务」。

| 参照 | 学什么 | 不学什么 |
|------|--------|----------|
| Opencals | 服务业 booking≠日历；API/模板；Upwork 当已写好需求的买家列表 | 零收入长建仓节奏（我们主线仍是接单现金） |
| Cal.com | 日更发版、开源/替代叙事、开发者信任 | 只做个人会议调度、不做门店运营模型 |
| Marc Lou / levelsio | build-in-public、案例数字、日更习惯 | 粉丝依赖；预约垂直几乎没有 100k+ 专号 |
| Calendly 官方 | 产品教程内容形态 | 官方更新偏慢；我们勿跟「装插件」红海价 |

---

## 1. 赛道与产品资产

### 1.1 主赛道：预约 + 支付

- **客户**：本地服务商家（美业/家政/教练/咨询等）要可分享预约链接、目录、防双订、可选收款；或正从 SaaS 离开（抽成 / 白标 / 非标库存 / 支付地区）。
- **不主打**：酒店/OTA/PMS 渠道、医疗 HIPAA 轻诺、escort 敏感、双商店原生 App 一口价。

### 1.2 Demo 双站

| 站 | 域名 | 定位 | 能力要点 |
|----|------|------|----------|
| **bz.a** | \`bz.a.ezcoin.ink\`（书面一律 ezcoin.ink；\`easycoin.inc\` 本地零命中，口误） | 单店预约业务演示 | 服务目录、防双订、访客/免注册浏览下单、支付可开关 / Stripe、动态 intake 字段、H5：首页服务 / 门店 / 动态 / 订单、\`stripe-pay\`、代理端 / 总后台 |
| **smart.a** | \`smart.a.ezcoin.ink\` | 多服务者 + 内容/UGC → 预约 | 人×档期、广场/动态、管理后台登录 |

**架构**：ThinkPHP + uni-app；bz.a 目录 \`/www/wwwroot/bz.a.ezcoin.ink\`，库 \`BZ_booking\`。

**部署状态（2026-10-22 晚，soft 验收口径）**

| 项 | 状态 |
|----|------|
| smart.a | soft 已重装并验收通过（含方案 A；\`/\`、\`/h5/\`、\`/admin/login\` 等） |
| bz.a | soft 已重装并验收：\`/h5/\`、\`/agent/index\`、\`stripe-pay.html\` 200；**Stripe 密钥随旧站丢失，需你重贴**；完整 URL+账号清单已由 soft 直发 |
| 总后台 | 独立入口未单独验收，清单未写入「未通路径」 |
| 历史 | 约 10-20 晚 soft 首次上线 ThinkPHP+uni-app；中间有过 Docker 模板版后删；**非出海教程部署** |

### 1.3 产品缺口与补法（10-22）

| 缺口 | 说明 | 建议路径（仍 ThinkPHP + uni-app） |
|------|------|-----------------------------------|
| 苹果官网风公开展示页 | 现有是 H5 App 壳（\`/h5/#/pages/service\`），非桌面大图橱窗 | \`showcase\` 落地页（静态或轻量视图）拉 \`serviceList\` / Index API → CTA 跳 H5 下单 |
| 动态字段 UI | 后端 API 已通；编译包未必含 fieldList | HBuilderX 重发 H5，把免注册+动态字段编进确认页 |
| 总后台入口 | \`/admin\` 曾落到代理端 | 对齐平台总后台 URL 后再写进访问清单 |
| 多垂类 | 同一套动态表单 | 后台按服务配置不同 intake；展示页只换文案/图，不复制整站 |

**原则**：展示站（showcase）与 H5 下单分离——前者获客/投标截图，后者完成交易。

---

## 2. 获客：四类入口（10-22）

| # | 入口 | 做什么 | 与 bz.a 关系 |
|---|------|--------|--------------|
| A | **搜索 / SEO** | 落地页 + 对比词（Calendly alternative、salon booking Stripe 等） | showcase 承接；雷达 hot 词做标题 |
| B | **平台侧** Freelancer / Fiverr / Upwork | 日搜精标 + Gig 资产 | 提案前 3 行贴 H5/demo；主现金流 |
| C | **内容侧** YouTube / Reddit / IH / X | 教程、对比、案例；预约垂直号少 | 学 Marc Lou 节奏，题材用预约案例；勿等粉再接单 |
| D | **直接触达** | LinkedIn / 老客户 / 邮件 | 次优先；有 demo 再开 |

### 2.1 平台侧量级印象（10-22 只读扫描）

- Freelancer 宽词 \`booking\` 活跃帖上百–五百，**可贴 bz.a 的开发单约数条–十余条/晚**。
- 可投固价常见约 **$140–750**；大量 **$10–30 整站+预订** 拒（R2）。建议报价对标完整交付 **$400–750**（FL）/ **$500–1200**（UW，见 10-21 预算对照）。
- 本批国家：印度多，兼英美、UAE。
- Fiverr 本机常 403；索引多为 Bookly/Calendly 配置 Gig（$10–100）；Salon 站类约 $80–150。Buyer requests 需登录。

### 2.2 内容侧账号印象（10-22）

| 量级 | 宽口径 SaaS/indie | 窄口径预约产品营销 |
|------|-------------------|-------------------|
| 活跃账号 | YT 约 200–800；X 约 2k–10k | YT 专号约 30–150（含官方）；X 约 50–300 |
| 粉丝 | 头部易 10k–100k+ | 多数 <1k；1k–10k 多为官方；专做测评的 100k+ 几乎没有 |

**参考账号最近动态（约 10-22 21:00 上海时）**

| 账号 | 粉量级 | 最近更新 | 频率 | 模式/成效印象 |
|------|--------|----------|------|----------------|
| Marc Lou | YT≈15.8 万 / X≈41.5 万 | X 当日仍发；YT 约 10-12 HYROX | X 日更+；YT 月更级 | build-in-public + 产品矩阵 MRR；预约非主业 |
| levelsio | X≈98 万 | 当日多条 | 日更+ | 杂谈+产品；流量最大、题材不全是 SaaS |
| Calendly 官方 | YT≈7.9k / X≈2.2 万 | X 原创约 9-03；YT Short 偏旧 | 偏月更 | 官方教程；非日更运营范本 |
| Cal.com | X≈1.9 万 | 10-21 发 v6.10.2 | 近日常更/日更发版 | 开源调度+发版叙事，最贴近「产品工程对外」 |
| Opencals（IH） | IH 粉未显示 | 产品页 9-26 vibe-code 接预约 API | 约月更 | 服务业 booking API；Upwork 当需求源 — **定位最贴** |
| Schedo（@thisischetan） | — | 主页已转向 Pexmotion；Schedo 案例偏旧 | 预约线不活跃 | 曾有 $5k/mo 预约案例，现非主推 |

---

## 3. 词表与雷达（10-21，已入库口径）

**预约+支付 16 词**：11 hot + 5 cold → \`requirement-trendradar\` seeds（PR 口径 10-21）。

**hot（主提案）**  
\`booking system with payment\` · \`booking system Stripe\` · \`salon booking with payment\` · \`salon booking Stripe\` · \`appointment scheduling with payment\` · \`Calendly alternative\` · \`deposit booking system\` · \`online booking Stripe\` · \`gym booking with payment\` · \`consulting booking with payment\` · \`nail salon booking\`

**cold（观察 / smart.a）**  
\`multi-provider booking\` · \`booking for companion service\` · \`class pack booking system\` · \`calendar booking with payment\` · \`discovery call booking\`

**宽网词不作主提案**：\`booking system\` · \`online booking\` · \`appointment scheduling\`

源：\`/workspace/freelancer/requirement_radar_seeds_booking_2026-10-21.md\`

---

## 4. 拒单 / 降权（日筛必过）

| 代号 | 条件 | 动作 |
|------|------|------|
| R1 | Beds24 / 渠道管理器 / PMS / OTA 同步为主 | 拒 |
| R2 | $15（或等价）整站+预订占位 | 拒 |
| R3 | 医疗 + HIPAA/PHI 轻诺 | 拒或专项，勿轻诺 |
| R4 | escort / 成人违规表述 | 拒 |
| R5 | 刷单 / 只要代写标书 | 拒 |
| R6 | 绕支付风控 / 灰黑收款 | 拒 |
| R7 | 必须原生双端且预算按 Web MVP | 拒或拆期 |
| — | \`reservation system\` 等 | 降权，先排除酒店餐厅 |

全文：\`/workspace/freelancer/booking_reject_rules_daily.md\`

---

## 5. 日动作与资产计划（10-21）

### 5.1 Freelancer 日搜

- 用 **hot** seeds；可选 1–2 cold；宽网词不主搜。
- 每天两轮（上午/晚间），按拒单清单 30 秒扫 → 正文能力匹配 → SaaS 离开四问 → 提案贴 demo。
- 精标量级：约 1–2 标/工作日；本周目标合格提案可计（历史目标曾 ≥10/周，以实际排期为准）。

### 5.2 Fiverr Gig

- 骨架：\`fiverr_gig_skeleton_booking_2026-10-21.md\`（Stripe-ready / live demo；**未上架以该草稿为准**）。
- 标签方向：\`booking system\`、\`stripe booking\`、\`appointment scheduling\`、\`salon booking\`、\`calendly alternative\`。
- 安全：一次上架少量 Gig，勿日更刷排名。

### 5.3 30 天计划评估结论（保守版，10-09/延伸）

- 不含 Upwork：BASE 约认真询价 10–25、付费 0–2、账单约 $200–1200（多数偏下）。
- ROI 序：Upwork（若已跑）+ LinkedIn + Freelancer 精标 → Fiverr 资产 → Reddit/IH 低频。
- 预约赛道叠加上：用 bz.a/smart.a 缩短「无 demo」阻塞；Kill 标准仍适用。

源：\`/workspace/出海变现/30天获客计划.md\`；获客细案另见 \`/workspace/freelancer/acquisition_plan_30d_2026-10-21.md\`

---

## 6. soft sa lesale 四份调研（10-21）— 能直接用 vs 最大缺口

| 文件 | 可直接用 | 最大缺口 |
|------|----------|----------|
| \`booking_demand_and_entry_map_2026-10-21.md\` | 需求簇、入口词、SaaS 离开话术、bz.a/smart.a 能力对照表 | 能力表标注「印象非代码审计」；需随部署回填 |
| \`booking_keywords_daily_2026-10-21.md\` | 日搜词表 | 量/竞为印象，需周更校准 |
| \`demand_classification_frameworks_ref_2026-10-21.md\` | 业内分类参考 | 偏长，日用时只抽框架 |
| \`booking_content_access_list_2026-10-21.md\` | URL/账号清单模板 | 重装后口令与路径须 soft 验收重出；总后台入口曾未对齐 |
| （关联）\`acquisition_plan_30d_2026-10-21.md\` | 30 天渠道勾选 | 执行依赖 demo 在线 |

出海教程侧：seeds 已推进入库；接单执行在 soft；雷达/定位在本文。

---

## 7. 今晚优先级（10-22 通话）

1. **展示站先行** — bz.a showcase（大图服务卡片）与 H5 下单分离，方便截图投标。  
2. **案例 / 需求整理** — 用今晚 FL 精筛结果 + 拒单表，收 2–3 条可贴 bz.a 的跟进帖（只读整理，投标需你或 soft 当面授权）。  
3. **部署完成后发 Freelancer / Fiverr** — 等 soft 两站验收 + URL 清单齐，再上提案/Gig 更新。

并行提醒：两站均已重装验收（soft）；URL 清单已直发；bz.a Stripe 密钥需你重贴；总后台独立入口未单独验收。

---

## 8. 动态表单 × 多垂类（思路）

- **一套后端字段配置**：按服务 SKU 挂不同 intake（过敏史、车型、人数、地址等）。  
- **展示层**：showcase / H5 只换品牌图与文案；下单页读 \`fieldList\`。  
- **投标话术**：同一 demo 可讲美业订金、家政上门、咨询预付——强调「配置而非重做」。  
- **勿**为每个垂类复制整仓；冷垂类用 cold seeds 观察，热垂类用 hot + 支付修饰。

---

## 9. 定位决策卡（方便以后改）

| 问题 | 现行答案 | 何时重开 |
|------|----------|----------|
| 主交付物？ | 可演示的预约业务站（bz.a）+ 提案固定价 MVP | demo 连续 2 周 0 询价 |
| 对标叙事？ | Opencals 业务模型 + Cal.com 工程对外 | 出现更贴的付费案例 |
| 主获客？ | Freelancer 精标 + Fiverr 资产；内容为辅 | FL 40 标 0 回复则降权换词 |
| 内容投入？ | 学日更习惯，不做等粉；优先案例短视频/对比文 | 有稳定交付带宽再加 YT |
| 明确不做？ | Beds24/OTA、$15 占位、HIPAA 轻诺、escort、双端一口价 | — |

---

## 10. 源文件索引

| 主题 | 路径 |
|------|------|
| **本文（合并定位）** | \`/workspace/出海变现/出海定位与规划.md\` |
| 早期通话要点 | \`/workspace/出海变现/出海变现要点-通话整理.md\` |
| 30 天保守获客 | \`/workspace/出海变现/30天获客计划.md\` |
| 预约 30 天获客细案 | \`/workspace/freelancer/acquisition_plan_30d_2026-10-21.md\` |
| 需求与入口地图 | \`/workspace/freelancer/booking_demand_and_entry_map_2026-10-21.md\` |
| 日搜词 | \`/workspace/freelancer/booking_keywords_daily_2026-10-21.md\` |
| seeds 16 词 | \`/workspace/freelancer/requirement_radar_seeds_booking_2026-10-21.md\` |
| 拒单规则 | \`/workspace/freelancer/booking_reject_rules_daily.md\` |
| 访问清单 | \`/workspace/freelancer/booking_content_access_list_2026-10-21.md\` |
| Fiverr Gig 骨架 | \`/workspace/freelancer/fiverr_gig_skeleton_booking_2026-10-21.md\` |
| 预算对照 | \`/workspace/freelancer/budget_compare_landing_booking_2026-10-21.md\` |
| one-pager | \`/workspace/freelancer/one_pager_bz_smart_demo_2026-10-21.md\` |
| 提案模板 | \`/workspace/freelancer/proposal_template_booking_demo.md\` |

---

## 11. 修订记录

| 日期 | 变更 |
|------|------|
| 2026-10-22 | 首版合并：10-21 词表/拒单/调研/30 天 + 10-22 四入口、内容账号、Opencals+Cal.com 定位、今晚三优先级、bz.a 需求与 showcase 方案、部署状态 |
| 2026-10-22 | soft 回报两站重装验收完成：回填部署表；bz.a Stripe 密钥待重贴；总后台独立入口未单独验收 |

*维护者：出海教程 bot · 只读调研与文档合并；写站/投标以用户当面授权 + soft 执行为准。*
`},
{"id": "doc-booking-keywords-1021", "title": "预约类每日筛选关键词表（2026-10-21）", "theme": "市场研究", "date": "2026-10-21 20:25", "summary": "通用/陪玩/美业等垂类搜词表：量级与竞争为实战印象；支付修饰词与多服务者长尾优先于宽网 booking。", "tags": ["预约", "关键词", "Upwork", "Freelancer", "低竞争"], "source": "", "path": "freelancer/booking_keywords_daily_2026-10-21.md", "related_docs": ["doc-booking-entry-1021", "doc-booking-seeds-1021", "doc-booking-reject-1021", "doc-booking-map-1021", "doc-radar-pulse-1022"], "content": `# 预约类需求每日筛选关键词表（2026-10-21）

> 用途：复制到 Upwork / Freelancer 等平台搜索框，筛选预约/排期类客户需求。  
> 说明：搜索量、竞争度为**实战印象判断，非官方量级**。

---

## 1. 通用 / 多垂类

| 关键词 | 搜索量印象 | 竞争度 | 用途备注 |
|--------|------------|--------|----------|
| booking system | 高 | 高 | 核心通用词，覆盖各类预约后台与流程 |
| appointment scheduling | 高 | 高 | 偏「排期/约时间」表述，医疗/咨询常见 |
| calendar booking | 高 | 中 | 日历嵌入、可约时段类需求常用 |
| online booking | 高 | 高 | 强调线上可约，落地页/小程序常配 |
| booking system with payment | 中 | 中 | 预约+收款一体，适合带付费确认的岗位 |
| booking system Stripe | 中 | 中 | 明确 Stripe 收款集成时用 |
| online booking Stripe | 中 | 中 | 线上预约并接 Stripe 结账 |
| appointment scheduling with payment | 中 | 中 | 排期+预付/订金类需求 |
| calendar booking with payment | 低 | 低 | 日历预约并收费，竞争相对小 |
| booking platform | 高 | 高 | 多角色平台（客户+服务方）表述 |
| reservation system | 高 | 高 | 酒店/餐厅/场地类也会撞上，需再筛 |
| scheduling software | 高 | 高 | SaaS/内部排班工具类岗位 |
| book appointment online | 中 | 中 | 偏 C 端文案式关键词 |
| booking widget | 中 | 中 | 嵌入网站的预约组件 |
| Calendly alternative | 中 | 中 | 替代 Calendly 的定制需求 |
| booking API | 中 | 中 | 对接第三方日历/支付 API |
| multi-provider booking | 低 | 低 | 多技师/多医生排班场景 |
| recurring appointment booking | 低 | 低 | 周期复诊、包月课类 |
| 预约系统 | 高 | 高 | 中文岗位/国内客户核心词 |
| 预约日历 | 中 | 中 | 日历视图+可约时段 |
| 在线预约 | 高 | 高 | 强调线上入口，落地页常见 |
| 预约系统 Stripe | 低 | 低 | 中文需求里明确 Stripe 收款 |
| 在线预约 支付 | 中 | 中 | 预约+支付一体 |

---

## 2. 陪玩 / companion

| 关键词 | 搜索量印象 | 竞争度 | 用途备注 |
|--------|------------|--------|----------|
| booking for companion service | 低 | 低 | 指定陪玩/陪伴服务预约，垂类精准 |
| companion booking system | 低 | 低 | 陪伴服务预约后台 |
| companion appointment scheduling | 低 | 低 | 陪玩时段排期 |
| escort booking calendar | 低 | 中 | 注意合规与平台政策，谨慎接单 |
| companion service online booking | 低 | 低 | 陪伴服务线上预约 |
| booking for companion service with payment | 低 | 低 | 陪玩预约+预付 |
| booking for companion service Stripe | 低 | 低 | 陪玩预约接 Stripe |
| dating companion booking app | 低 | 中 | 约会/陪伴 App 预约模块 |
| 陪玩预约系统 | 低 | 低 | 中文陪玩/陪诊类预约 |
| 陪伴服务 在线预约 | 低 | 低 | 陪诊/陪伴上门线上约 |

---

## 3. 美业 / salon-beauty

| 关键词 | 搜索量印象 | 竞争度 | 用途备注 |
|--------|------------|--------|----------|
| salon booking | 高 | 高 | 美发/美甲店预约核心词 |
| salon booking system | 高 | 中 | 门店多技师排班+客户约 |
| beauty salon appointment scheduling | 中 | 中 | 美业排期表述 |
| salon calendar booking | 中 | 中 | 美业日历预约 |
| salon online booking | 高 | 中 | 门店官网/小程序在线约 |
| salon booking with payment | 中 | 中 | 订金/预付锁定档期 |
| salon booking Stripe | 中 | 低 | 美业预约+Stripe |
| nail salon booking | 中 | 中 | 美甲垂类 |
| spa booking system | 中 | 中 | 水疗/SPA 预约 |
| barbershop booking | 中 | 中 | 理发店预约 |
| 美容院预约系统 | 中 | 中 | 中文美业后台 |
| 美发店 在线预约 | 中 | 中 | 门店线上约发型师 |
| 美甲预约日历 | 低 | 低 | 美甲档期日历 |

---

## 4. 医疗 / medical

| 关键词 | 搜索量印象 | 竞争度 | 用途备注 |
|--------|------------|--------|----------|
| medical appointment | 高 | 高 | 医疗约诊核心词，常含合规要求 |
| medical appointment scheduling | 高 | 高 | 诊所/医院排期系统 |
| medical appointment booking | 高 | 高 | 患者端预约挂号类 |
| doctor appointment booking | 高 | 高 | 医生号源预约 |
| clinic booking system | 中 | 中 | 诊所级预约后台 |
| medical calendar booking | 中 | 中 | 医疗日历视图 |
| telehealth appointment scheduling | 中 | 中 | 远程问诊预约 |
| medical appointment with payment | 中 | 中 | 约诊+诊费/预付 |
| medical appointment Stripe | 低 | 低 | 医疗预约接 Stripe（注意合规） |
| patient online booking | 中 | 中 | 患者自助在线约 |
| dental appointment booking | 中 | 中 | 牙科垂类 |
| 医疗预约系统 | 中 | 中 | 中文医疗/诊所预约 |
| 挂号 在线预约 | 中 | 高 | 国内挂号语境，竞争偏大 |
| 诊所预约日历 | 低 | 低 | 诊所日历排班 |

---

## 5. 健身 / fitness

| 关键词 | 搜索量印象 | 竞争度 | 用途备注 |
|--------|------------|--------|----------|
| fitness booking system | 中 | 中 | 健身房/私教预约 |
| gym class booking | 中 | 中 | 团课约课 |
| personal trainer appointment scheduling | 中 | 中 | 私教一对一排期 |
| fitness calendar booking | 低 | 低 | 健身日历约课 |
| yoga studio online booking | 中 | 中 | 瑜伽馆在线约 |
| gym booking with payment | 中 | 中 | 约课+课时费/会员支付 |
| fitness booking Stripe | 低 | 低 | 健身预约接 Stripe |
| class pack booking system | 低 | 低 | 次卡/课包核销预约 |
| 健身房预约系统 | 中 | 中 | 中文健身房后台 |
| 私教 在线预约 | 中 | 低 | 私教线上约课 |
| 团课预约日历 | 低 | 低 | 团课档期日历 |

---

## 6. 咨询 / consulting

| 关键词 | 搜索量印象 | 竞争度 | 用途备注 |
|--------|------------|--------|----------|
| consulting appointment scheduling | 中 | 中 | 顾问/教练约咨询时段 |
| coach booking system | 中 | 中 | 教练/导师预约 |
| consultation booking calendar | 中 | 中 | 咨询日历嵌入 |
| legal consultation online booking | 低 | 中 | 法律咨询在线约（合规敏感） |
| therapy appointment booking | 中 | 中 | 心理/治疗约诊 |
| consulting booking with payment | 中 | 中 | 咨询预约+预付咨询费 |
| consulting booking Stripe | 低 | 低 | 咨询预约接 Stripe |
| discovery call booking | 中 | 低 | 销售/顾问「探索通话」预约 |
| 咨询预约系统 | 中 | 中 | 中文咨询/辅导预约 |
| 心理咨询 在线预约 | 中 | 中 | 心理咨询线上约 |
| 顾问预约日历 | 低 | 低 | 顾问可约时段日历 |

---

## 每日复制用短名单

### 英文（直接粘贴搜索，约 12 条）

\`\`\`
booking system
appointment scheduling
calendar booking
online booking
booking system Stripe
booking system with payment
salon booking
medical appointment
booking for companion service
fitness booking system
consulting appointment scheduling
salon booking with payment
medical appointment scheduling
calendar booking Stripe
\`\`\`

### 中文（直接粘贴搜索，5 条）

\`\`\`
预约系统
预约日历
在线预约
美容院预约系统
医疗预约系统
\`\`\`

---

*生成日期：2026-10-21（Asia/Shanghai）｜印象判断非官方量级｜不含个人真名*
`},
{"id": "doc-booking-entry-1021", "title": "预约需求衍生业务与客户入口地图（2026-10-21）", "theme": "市场研究", "date": "2026-10-21 20:49", "summary": "预约衍生业务类型、客户画像、搜索词与流量入口；对照 T3/T2/bz.a/smart.a；渠道优先级：平台提案 > SEO/教程 > 社群。", "tags": ["预约", "获客", "入口", "bz.a", "smart.a", "关键词"], "source": "", "path": "freelancer/booking_demand_and_entry_map_2026-10-21.md", "related_docs": ["doc-booking-keywords-1021", "doc-booking-acq-1021", "doc-booking-map-1021", "doc-live", "doc-radar-pulse-1022"], "content": `# 预约需求衍生业务与客户入口地图（2026-10-21 · 扩展版）

- **更新日期**：2026-10-21（扩展版，Asia/Shanghai）
- **用途**：梳理「预约」相关衍生业务类型、客户画像、搜索词与获客入口，方便接单方后续迭代补充；与关键词日表、需求 backlog、预约×内容映射配合使用。
- **证据原则**：频率、付费意愿、入口占比为**公开调研 + 接单印象，非精确市占/统计**；不编造预算数字/职位链接；竞品定价为调研时点公开信息印象，会变动。
- **命名约定**：全文用「接单方」「本项目」；禁止真实人名。
- **相关本地文档**（只读交叉，本文件自成体系）：
  - \`/workspace/freelancer/booking_keywords_daily_2026-10-21.md\`
  - \`/workspace/freelancer/booking_content_requirements_map_2026-10-21.md\`
  - \`/workspace/upwork/requirements_backlog.md\`（A3 预约、A10 表单等）

---

## 目录

1. [预约需求的衍生业务类型及细分要求](#1-预约需求的衍生业务类型及细分要求)
2. [用户侧展开（客户来源与市场画像）](#2-用户侧展开客户来源与市场画像)
3. [客户搜索的内容（关键词与口语长尾）](#3-客户搜索的内容关键词与口语长尾)
4. [流量入口更细（机制 / 相对重要性 / 转化 / 动作）](#4-流量入口更细机制--相对重要性--转化--动作)
5. [市场模板共性功能点（bz.a / smart.a 差异化参考）](#5-市场模板共性功能点bza--smarta-差异化参考)
6. [迭代备注](#迭代备注)

---

## 模板对照约定

| 代号 | 含义 | 典型用途 |
|------|------|----------|
| **T3** | booking calendar 类通用模板（周历选时段 + 确认页；可后接支付 stub / Stripe test） | 英文快速贴链演示「能约时段」；单资源日历骨架 |
| **T2** | form → Sheets/CRM 类（静态站表单 POST → 表格/Slack/webhook） | 线索/等待列表/轻量预约字段进表；非完整日历 |
| **bz.a** | 部署在 \`bz.a.ezcoin.ink\` 的预约系统 | 动态字段、免注册浏览下单、支付可开关、Stripe 向；业务完整度高于玩具日历 |
| **smart.a** | 部署在 \`smart.a.ezcoin.ink\` 的多客陪玩/内容向系统 | 多服务者档期、内容/圈子 + 预约一体；垂直「人×时间」矩阵 |

> 投标话术习惯：T3/T2 证明交付速度与英文可点；bz.a / smart.a 证明做过完整业务。下文「对应模板」可多选。

---

## 1. 预约需求的衍生业务类型及细分要求

每类结构：**是什么** → **细分要求** → **平台出现频率印象** → **对应模板**。

### 1.1 预约日历 + 支付

- **是什么**：客户选服务/时段 → 确认 → 在线收款（或预付锁定档）→ 订单状态回写。不是「漂亮官网」，而是占坑 + 钱到账。
- **细分要求**：
  - 周/日视图；已订时段不可再选（防双订）
  - 确认页 + 支付状态（真 Stripe / 可开关支付 / demo stub）
  - 邮件或站内确认；可选 webhook → Sheets/n8n
  - 计价：固定价、按时长、加项（交通/耗材）等
- **频率印象**：**高**。Upwork/Freelancer 上 \`booking system\` / \`online booking\` / \`with payment\` / \`Stripe\` 长期可见；本地服务、诊所、课程、洗车等反复出现。印象来自关键词竞争高 + backlog A3/B6 信号，非精确统计。
- **对应模板**：**T3**（日历骨架）+ **bz.a**（支付可开关 / Stripe 叙事）

### 1.2 动态字段 / 表单

- **是什么**：不同服务要填不同问题（过敏史、车型、人数、地址、偏好等）；字段可后台配置，提交进表或绑订单。
- **细分要求**：
  - 字段类型：文本/选项/必填/条件显示
  - 与预约单绑定（下单时带扩展字段）
  - 轻量路径：表单 → Sheets / Slack / CRM webhook（不建完整后台）
  - 落地页 waitlist / 线索表与预约漏斗衔接
- **频率印象**：**高（轻量表单）/ 中（预约内嵌动态字段）**。纯「form to sheet」极常见；「换服务字段变」在业务预约单里中频。印象。
- **对应模板**：**T2**（进表）+ **bz.a**（预约内动态字段）；线索页可拼落地页模板

### 1.3 免注册浏览下单

- **是什么**：访客先逛服务目录再订；邮箱/手机即可下单，不强制先注册账号。
- **细分要求**：
  - 公开服务列表/详情
  - 游客结账（联系方式 + 可选备注）
  - 后续可绑定注册账号；订单查询靠邮件链接或验证码
  - 转化漏斗不卡登录墙
- **频率印象**：**中**。JD 较少写「guest checkout」字样，但本地服务/陪玩/上门类隐含低摩擦；明确要求「别强制注册」时多为中小商家。印象。
- **对应模板**：**bz.a**（主）；**T3** 仅弱匹配（有确认无逛目录）

### 1.4 多服务者档期冲突检测

- **是什么**：多名技师/教练/陪玩/医生各自有档期；同一人同一时段不可双订；后台可开关个人可用性。
- **细分要求**：
  - 服务者资料页 + 个人可订时段
  - 冲突检测：人×时间矩阵；可选「场地/房间」第二资源
  - 管理端：服务者自管档期 vs 店长统排
  - 客户侧：先人选时 or 先时选人
- **频率印象**：**中偏低**。通用词少写 multi-provider；美业/健身/陪玩/诊所一旦出现则刚需。关键词如 \`multi-provider booking\` 竞争偏低。印象。
- **对应模板**：**smart.a**（主）+ **T3**（说明可扩 multi-provider）

### 1.5 服务时长与加时费

- **是什么**：基础时长（如 60min）+ 可延长；超时按档加价或按分钟计。
- **细分要求**：
  - 服务 SKU：时长选项、价格矩阵
  - 下单时选时长；进行中「加时」改价与档期重算
  - 与冲突检测联动（加时不可撞下一单）
  - 展示规则对客户透明（防纠纷）
- **频率印象**：**中**。陪玩、按摩、私教、咨询按时长卖常见；纯美业剪发较少写「加时」。印象。
- **对应模板**：**bz.a** / **smart.a**（业务计价）；**T3** 需二次开发加价规则

### 1.6 定金 + 尾款两段支付

- **是什么**：预约时收定金锁档；服务完成或到店前收尾款；取消时定金规则不同。
- **细分要求**：
  - 两笔 PaymentIntent / 两次结账或 Capture 分期
  - 状态机：已付定金 / 待尾款 / 已结清 / 已退定金
  - 与取消规则、no-show 扣款联动
  - Stripe：鉴权、部分退款、webhook 幂等
- **频率印象**：**中**。美业订金、活动定金、陪玩预付常见；JD 常写 deposit / partial payment。完整两段状态机写细的相对少。印象。
- **对应模板**：**bz.a**（支付可开关 + Stripe）；**T3** 仅 stub，需明确二开

### 1.7 取消规则 / no-show

- **是什么**：客户取消时限、扣定金比例；未到店（no-show）自动标记与扣款/拉黑策略。
- **细分要求**：
  - 规则配置：提前 N 小时免费取消；之后扣 X%
  - no-show 判定（超时未签到 / 人工标记）
  - 通知：取消确认、扣款说明
  - 合规文案与争议日志
- **频率印象**：**中**。成熟门店/诊所/课程会写；新服务者常漏掉，上线后才补。印象。
- **对应模板**：**bz.a** / **smart.a**（订单状态向）；**T3** 需加规则层

### 1.8 衍生 · 提醒通知（短信 / 邮件 / WhatsApp）

- **是什么**：预约成功、提前提醒、改约、取消、支付失败等消息触达。
- **细分要求**：模板消息、时区、退订/opt-in；可接 Twilio / 邮件 / WA Business；失败重试与日志。
- **频率印象**：**高**。几乎所有「真上线」预约单都会要提醒；常作为二期或 n8n 旁路。印象。
- **对应模板**：**T3**/**bz.a** 出事件 → **T2**/n8n 发信；非单一模板独占

### 1.9 衍生 · 多门店 / 多地点

- **是什么**：连锁或跨城：选门店 → 再选服务者/时段；库存与营业时间按店隔离。
- **细分要求**：门店列表、时区/营业日、跨店不可混用库存；可选地图选店。
- **频率印象**：**中**。美业连锁、健身多馆、诊所分院会出现；单店老板少提。印象。
- **对应模板**：**bz.a**（可扩多店叙事）；**T3** 单资源需改造；**smart.a** 偏人而非店

### 1.10 衍生 · 会员套餐 / 次卡课包

- **是什么**：买课包/次卡后核销预约；会员价与普通价并存；到期与剩余次数。
- **细分要求**：套餐 SKU、核销扣次、过期策略、转让是否允许；支付订阅 or 一次性购包。
- **频率印象**：**中**。健身/瑜伽/美业次卡极常见；纯咨询少见。关键词含 \`class pack\`。印象。
- **对应模板**：**bz.a**（订单/支付）+ 会员状态；**smart.a** 若含套餐可演示；**T2** 仅能记线索不能核销

### 1.11 衍生 · 陪玩 / 多客内容广场

- **是什么**：内容 Feed/圈子拉活 → 服务者主页 → 档期下单；UGC + 预约变现一条产品。
- **细分要求**：内容审核、服务者入驻、档期、订单与支付；可选会员看部分内容。
- **频率印象**：**低（平台词精确）/ 中（「companion / 陪玩预约」垂类）**。通用 booking 词难搜到；垂类词竞争低但单量少。印象。
- **对应模板**：**smart.a**（主）；日历内核可对照 **T3**

### 1.12 衍生 · 资源/房间第二库存（椅位、包厢、场地）

- **是什么**：除「人」以外还有椅位/房间/器材；预约需同时占用服务者 + 资源。
- **细分要求**：资源日历、容量、与人冲突双校验；临时锁场。
- **频率印象**：**中偏低**。SPA/球馆/教室常见；纯顾问几乎不提。印象。
- **对应模板**：**bz.a** 可扩叙事；**smart.a** 若已有场地维度可对照

### 1.13 衍生 · 团课 / 名额预约

- **是什么**：固定开课时间、限名额；客户占座而非一对一占人档。
- **细分要求**：开课排期、候补 waitlist、满员关闭、课包核销。
- **频率印象**：**中**。瑜伽/健身团课、亲子课常见。印象。
- **对应模板**：**bz.a** + 课包；**T3** 需改容量模型

---

## 2. 用户侧展开（客户来源与市场画像）

本节在原「已有生意 vs 刚起步」之上，补充市场上主流预约 SaaS/模板的典型用户与功能侧重，并归纳「何时客户会离开 SaaS 找定制」。

### 2.1 已有生意、缺工具的服务者

- **典型**：陪玩工作室、美业门店、健身房/私教、咨询/教练、诊所、本地上门服务；已有客户与线下档期，用表格/微信/Instagram DM 手动约。
- **痛点**：
  - 双订、漏提醒、定金对不齐账
  - 员工/多技师档期口口相传，店长晚上对账
  - 想要「客人自己约」减少前台电话
  - 已有官网或 Instagram，缺可嵌入的预约+收款
  - 已试用 Fresha / Square / 有赞等，卡在「品牌白标、特殊计价、多端统一库存、陪玩式人设页」等非标点
- **付费意愿（印象）**：**中高**。痛点真实、愿为「少翻车」付固定价或短项目；讨厌被卖成庞大 SaaS 年费。预算敏感但仍比纯想法党靠谱。常要求对接现有域名/品牌色，范围易膨胀（提醒、多语言、会员）——需锁 MVP。
- **搜索习惯（成熟商家）**：更偏品牌词/对比词（\`Fresha alternative\`、\`migrate from Mindbody\`、\`有赞预约 对接\`）；会搜 \`no-show fee\`、\`deposit booking\`、\`multi staff calendar\`；中文侧搜「美团预约同步」「次卡核销系统」。
- **接单切入**：二次开发 / 嵌入现成日历；演示优先 **bz.a** 或 **T3+支付叙事**；多技师用 **smart.a** 对照；提案写清「哪些 SaaS 做不到、本项目如何最小改动」。

### 2.2 刚起步的新服务者

- **典型**：个人陪玩/教练/顾问刚获客；只有个人品牌页或还没有站；想「先有个能约的链接」。
- **痛点**：
  - 不知道要定金规则、取消政策
  - 预算紧，爱比 Calendly / Fresha 免费档 / 凡科轻站
  - 范围从「一个日历」滑向「完整平台+App」
  - 希望「像大品牌一样有小程序/App」，但首单预算往往只够模板
- **付费意愿（印象）**：**低到中**。价敏、易 lowball；适合小范围 **T3** 或极简 **bz.a** 配置，明确不做 App/不做复杂 CRM。能成单的往往是「先上线收定金」的明确目标；平台占位价 $15 整站预订类应谨慎。
- **搜索习惯（刚起步）**：口语/教程向（\`how do I take online appointments for my salon\`、\`怎么做在线预约\`、\`Calendly 怎么收款\`）；垂类+教程（\`salon booking tutorial\`）；少搜「迁移/对接」。
- **接单切入**：模板化交付 + 清晰边界；用 **T3** 快速出链；需要逛目录/支付再升 **bz.a**。

| 对比维度 | 已有生意缺工具 | 刚起步新服务者 |
|----------|----------------|----------------|
| 决策速度 | 中（要看演示、要改现有流程） | 快或极慢（想法多、预算不定） |
| 范围风险 | 功能加购多 | 从日历膨胀到「平台」 |
| 演示重点 | 防双订、支付、多服务者、迁移叙述 | 一键可约链接、简单收款 |
| 优先模板 | bz.a / smart.a | T3 → 必要时 bz.a |
| 竞品对照话术 | 「SaaS 年费/抽成/白标不够」 | 「比 Calendly 多支付与目录」 |

### 2.3 市场已有预约 SaaS / 模板用户画像调研

下列为 2026 年公开资料与接单印象整理；**定价会变，仅作量级印象**。每产品结构：典型用户画像 → 主打垂类 → 功能侧重 → 定价印象 → 对定制接单的启示。

#### 2.3.1 Fresha

- **典型用户画像**：独立美发师、小型美容/美甲工作室、想零订阅起步的 1–3 人店；重视「免费能用」与 marketplace 获客。
- **主打垂类**：salon / spa / beauty。
- **功能侧重**：在线预约、POS、card-on-file 防 no-show、marketplace 曝光；品牌侧偏平台感，深度白标弱。
- **定价印象**：基础可 0 订阅；靠支付手续费 + marketplace 抽成（公开对比文常见「marketplace 客户高抽成」叙述）。
- **对定制启示**：客户离开时点 = 厌倦抽成/品牌被平台化、要自有域名与独立会员体系、复杂多店库存。接单方可用 **bz.a** 讲「自有品牌 + Stripe 自管费率」。

#### 2.3.2 Square Appointments

- **典型用户画像**：已用 Square 收款的美业/本地服务；个人从业者到小团队；要预约与 POS 一体。
- **主打垂类**：salon、barber、本地服务；强绑定 Square 生态。
- **功能侧重**：预约站/嵌入 widget、提醒、定金、取消/no-show 费、多员工日历、waitlist、课包（付费档）；免费档偏个人。
- **定价印象（公开）**：个人/Free 档可用；团队档约 $29/月量级起（对比文常见）；高阶与处理费率随 Square 套餐变（如 Plus/Premium 月费与费率档）。
- **对定制启示**：非 Square 地区/要 Stripe 或微信支付宝、要非美式流程、要陪玩/内容社区时易出走。演示 **bz.a** 支付可开关 + **smart.a** 人设页。

#### 2.3.3 Mindbody

- **典型用户画像**：健身馆、瑜伽工作室、中大型 wellness/SPA、要会员与营销自动化的连锁。
- **主打垂类**：fitness / wellness / spa；消费者 App 发现流量是卖点。
- **功能侧重**：预约+团课、会员/课包、营销套件、多店报表、消费者 marketplace。
- **定价印象（公开）**：美国区曾宣传约 $79/月/店起（Starter）；高阶 Accelerate/Ultimate 报价制；历史对比文也常见 $139+ 档叙述——以当地销售页为准。
- **对定制启示**：贵、重、学习曲线陡；小店「只要预约」会逃；大店要深度定制报表/白标 App/特殊会员规则时找开发。接单方勿硬刚全量 Mindbody，专攻「轻量替代 MVP」或「旁路对接」。

#### 2.3.4 Vagaro

- **典型用户画像**：多员工美业/SPA/健身，要 all-in-one（预约+POS+库存+工资提成+营销）。
- **主打垂类**：salon / spa / fitness。
- **功能侧重**：多员工档期、资源椅位、会员、表单/waiver、payroll、marketplace。
- **定价印象（公开）**：约 $30/月/地点起 + 加人加价；插件（表单、建站等）另计。
- **对定制启示**：界面「功能太多」的小团队、费率/插件堆叠不满意、要非标业务流（如内容广场陪玩）时找定制。

#### 2.3.5 简道云预约模板

- **典型用户画像**：国内中小企业行政/运营；要「内部排班+表单流程」多于 C 端漂亮商城；IT 弱、愿用零代码。
- **主打垂类**：企业内预约（会议室、设备、到店接待）、轻量对外表单预约。
- **功能侧重**：表单、流程审批、数据管理、仪表盘；预约多为模板拼装，非美业 POS。
- **定价印象（公开）**：有免费档；标准版约 ¥8,000/年起量级（含账号包）；企业/私有部署更高。
- **对定制启示**：C 端转化/支付/小程序体验不够时客户会找定制或有赞类；若客户核心是「员工填表+审批」，接单方应劝用零代码而非硬写。

#### 2.3.6 明道云预约相关

- **典型用户画像**：要更强协作/应用搭建的中型企业；预约只是应用之一。
- **主打垂类**：企业内部系统；偶有对外服务预约。
- **功能侧重**：应用搭建、工作流、API、权限；非垂类美业运营。
- **定价印象（公开对比）**：标准版约 ¥14,900/年、旗舰更高量级；与简道云同属「平台年费」而非按预约单。
- **对定制启示**：预算与复杂度上来后，非标业务规则仍可能外包二开；接单方可做「明道/简道外的 C 端预约壳」。

#### 2.3.7 凡科（轻站 / 小程序模板）

- **典型用户画像**：一人公司、摄影/装修/咨询、要「展示+留资+简单预约」；预算极低。
- **主打垂类**：本地服务展示站、简单预约表单。
- **功能侧重**：模板建站、表单、轻预约；复杂状态机/多角色弱。
- **定价印象（公开）**：约 ¥698–2998/年量级轻站常见叙述。
- **对定制启示**：业务从「留资」变成「匹配接单/核销/分账」时必离开；接单方用 **T2→bz.a** 升级路径话术。

#### 2.3.8 有赞（本地生活 / 预约）

- **典型用户画像**：国内到店服务门店（丽人、健身、宠物、教培等）；要小程序 + 团购/次卡/储值 + 预约看板。
- **主打垂类**：本地生活服务零售。
- **功能侧重**：约项目/场地/名额/课程；代客预约与自助预约；先约后付 / 约付一体；员工排班；次卡期限卡储值；美团/抖音/小红书等卡券聚合核销（版本能力有差）；营销券。
- **定价印象（公开）**：本地生活基础版年费约 ¥6800 量级叙述；POS 点/插件另计；以有赞当年价目为准。
- **对定制启示**：非标「内容社区+多陪玩档期」、强白标、特殊分账、海外支付时出走；或要「有赞旁路库存同步」的中间层开发。

#### 2.3.9 Calendly（补充竞品）

- **典型用户画像**：顾问、销售、招聘、教练；「发链接约会议」为主，非门店 POS。
- **主打垂类**：consulting / B2B meetings / coaching。
- **功能侧重**：可用性链接、日历同步、round-robin、提醒、表单路由；支付为加购/高阶能力，非美业核心。
- **定价印象（公开）**：Free；Standard 约 $10/席/月（年付）；Teams 约 $16/席/月；Enterprise 高价。
- **对定制启示**：客户要「服务目录+定金+多技师椅位」时 Calendly 不够 → **T3/bz.a** 切入；纯会议约见则勿过度售卖。

#### 2.3.10 SimplyBook.me（补充竞品）

- **典型用户画像**：中小服务业（salon、clinic、studio）要「预约站+支付+会员包」一体、可白标倾向。
- **主打垂类**：泛服务预约（非单一美业 marketplace）。
- **功能侧重**：多 provider、定金/支付、POS、intake forms、会员/礼品卡、booking website/widget。
- **定价印象（公开）**：Free（限量预约）；Basic ~$12/月、Standard ~$25/月、Premium ~$50/月量级（年付）；Enterprise 定制。
- **对定制启示**：超限预约数、极深定制 UI/业务、或要内容社区时找开发。

#### 2.3.11 Booksy（补充竞品）

- **典型用户画像**：美业/健康从业者，要 marketplace 获客 + 店内管理。
- **主打垂类**：beauty / wellness。
- **功能侧重**：marketplace 曝光、提醒、支付、员工管理、营销。
- **定价印象（公开对比）**：约 $29.99/月起量级常见叙述。
- **对定制启示**：同 Fresha——抽成/平台依赖/白标不足时找定制。

#### 2.3.12 美团预约（补充竞品 / 流量型平台）

- **典型用户画像**：国内丽人医美、到店生活服务商家；获客依赖美团/点评流量，预约是履约工具。
- **主打垂类**：丽人、休闲娱乐、部分上门服务；「团购后预约 / 通用预约」。
- **功能侧重**：平台内预约、库存、改约/取消规则、接单模式；开放平台可对接三方 ISV（核销、通用预约、会员通等）。
- **定价印象**：偏「平台抽佣 + 推广」而非独立 SaaS 订阅；商家常同时买有赞/收银系统。
- **对定制启示**：客户要「美团订单 ↔ 自有档期」同步、或多渠道统一库存时产生对接单；纯「离开美团」少见，多见「旁路系统」。

#### 2.3.13 竞品速览对照表

| 产品 | 用户重心 | 垂类 | 离开找定制的高频触发 |
|------|----------|------|----------------------|
| Fresha | 小美业、零订阅 | beauty | 抽成、白标、自有会员 |
| Square Appointments | 已用 Square 的店 | 本地服务 | 非 Square 支付区、非标流程 |
| Mindbody | 中大健身/wellness | fitness/spa | 贵复杂；只要轻预约 |
| Vagaro | 多员工 all-in-one | salon/spa | 插件堆叠、非标业务 |
| 简道云 | 企业内部 | 表单/流程 | C 端转化与支付体验 |
| 明道云 | 中企业搭建 | 内部应用 | 对外预约壳/非标规则 |
| 凡科 | 一人公司展示 | 本地展示 | 业务状态机变复杂 |
| 有赞 | 国内到店门店 | 本地生活 | 内容社区、海外、极致白标 |
| Calendly | 顾问会议 | consulting | 服务目录+定金+椅位 |
| SimplyBook | 泛服务中小店 | 多垂类 | 超限/深定制 UI |
| Booksy | 美业 marketplace | beauty | 平台依赖 |
| 美团预约 | 流量获客商家 | 丽人等到店 | 多渠道库存同步 |

### 2.4 何时客户会离开 SaaS 找定制（接单方检查清单）

1. **费率/抽成**：marketplace 或支付绑定导致「越忙越亏感」。
2. **白标与域名**：要完全自有品牌、去平台水印。
3. **非标库存模型**：人×房间×器材、陪玩内容 Feed、跨时区多客。
4. **支付与地区**：Stripe/微信/支付宝/线下定金组合 SaaS 不覆盖。
5. **数据主权与迁移**：要导出客户与档期、怕锁死。
6. **聚合对接**：美团+抖音+自有小程序统一档期。
7. **只要 20% 功能却付 100% 年费**：轻量 **T3/bz.a** 固定价更划算叙事。

---

## 3. 客户搜索的内容（关键词与口语长尾）

说明：可与 \`/workspace/freelancer/booking_keywords_daily_2026-10-21.md\` 交叉；下列按垂类自成体系。修饰词常拼在核心词后：\`with payment\` / \`Stripe\` / \`online booking\`。

### 3.0 刚起步 vs 成熟商家的搜索习惯差异

| 维度 | 刚起步新服务者 | 成熟/已有生意 |
|------|----------------|---------------|
| 词形 | How-to、tutorial、cheap、free、alternative to Calendly | migrate、integrate、API、multi-location、no-show policy |
| 语言 | 口语完整句、语音助手式 | 短关键词、品牌对比 |
| 中文例 | 「美发店怎么做网上预约」「有没有免费预约小程序」 | 「有赞预约对接美团」「次卡核销 防超售」 |
| 英文例 | \`how do I take online appointments for my salon\` | \`Fresha alternative with own domain\` |
| 转化意图 | 学习/试用 | 采购/替换/定制开发 |

### 3.1 通用 / 多垂类

| 类型 | 检索词示例 |
|------|------------|
| EN 核心 | \`booking system\`, \`appointment scheduling\`, \`calendar booking\`, \`online booking\`, \`booking platform\`, \`reservation system\`, \`scheduling software\`, \`booking widget\`, \`Calendly alternative\`, \`booking API\`, \`multi-provider booking\`, \`recurring appointment booking\` |
| EN+修饰 | \`booking system with payment\`, \`booking system Stripe\`, \`online booking Stripe\`, \`appointment scheduling with payment\`, \`calendar booking with payment\`, \`deposit booking system\`, \`no-show fee booking\` |
| EN 长尾/口语 | \`how do I take online appointments for my salon\`, \`best way to let clients book me online\`, \`I need a booking page that takes deposits\`, \`replace my paper appointment book\`, \`online booking without monthly fee\`, \`custom booking system developer\` |
| 中文核心 | \`预约系统\`, \`预约日历\`, \`在线预约\`, \`预约系统 Stripe\`, \`在线预约 支付\` |
| 中文长尾/口语 | \`怎么给客人在线预约\`, \`不想用美团也能预约\`, \`预约系统 定金\`, \`自己做个预约小程序多少钱\` |

### 3.2 陪玩 / companion

| 类型 | 检索词示例 |
|------|------------|
| EN | \`booking for companion service\`, \`companion booking system\`, \`companion appointment scheduling\`, \`companion service online booking\`, \`dating companion booking app\`, \`escort booking calendar\`（平台政策敏感，投标慎用） |
| EN+修饰 | \`booking for companion service with payment\`, \`booking for companion service Stripe\` |
| EN 口语 | \`how to let clients book companion sessions online\`, \`schedule companion providers with calendar\` |
| 中文 | \`陪玩预约系统\`, \`陪伴服务 在线预约\`, \`陪玩 档期 管理系统\`, \`多人陪玩 预约\` |

> 注意合规与平台政策；部分敏感词谨慎投标。

### 3.3 美业 / salon-beauty

| 类型 | 检索词示例 |
|------|------------|
| EN | \`salon booking\`, \`salon booking system\`, \`beauty salon appointment scheduling\`, \`salon calendar booking\`, \`salon online booking\`, \`nail salon booking\`, \`spa booking system\`, \`barbershop booking\`, \`Fresha alternative\`, \`Booksy alternative\` |
| EN+修饰 | \`salon booking with payment\`, \`salon booking Stripe\`, \`salon booking deposit\` |
| EN 口语 | \`how do I take online appointments for my salon\`, \`clients keep no-showing my salon how to take deposits\`, \`best salon booking app for small shop\` |
| 中文 | \`美容院预约系统\`, \`美发店 在线预约\`, \`美甲预约日历\`, \`理发店 预约小程序\`, \`美团丽人 预约 同步\` |

### 3.4 医疗 / medical

| 类型 | 检索词示例 |
|------|------------|
| EN | \`medical appointment\`, \`medical appointment scheduling\`, \`medical appointment booking\`, \`doctor appointment booking\`, \`clinic booking system\`, \`medical calendar booking\`, \`telehealth appointment scheduling\`, \`patient online booking\`, \`dental appointment booking\`, \`HIPAA booking system\` |
| EN+修饰 | \`medical appointment with payment\`, \`medical appointment Stripe\`（合规敏感） |
| EN 口语 | \`how can patients book appointments online for my clinic\`, \`reduce no-shows at dental office booking\` |
| 中文 | \`医疗预约系统\`, \`挂号 在线预约\`, \`诊所预约日历\`, \`口腔诊所 预约\`, \`心理咨询 预约系统\` |

> 医疗合规（HIPAA/本地隐私）单独评估；勿在提案中轻诺。

### 3.5 健身 / fitness

| 类型 | 检索词示例 |
|------|------------|
| EN | \`fitness booking system\`, \`gym class booking\`, \`personal trainer appointment scheduling\`, \`fitness calendar booking\`, \`yoga studio online booking\`, \`class pack booking system\`, \`Mindbody alternative\` |
| EN+修饰 | \`gym booking with payment\`, \`fitness booking Stripe\`, \`membership class pack booking\` |
| EN 口语 | \`how do I let members book gym classes online\`, \`sell class packs and schedule trainers\` |
| 中文 | \`健身房预约系统\`, \`私教 在线预约\`, \`团课预约日历\`, \`瑜伽馆 次卡预约\`, \`课程包 核销\` |

### 3.6 咨询 / consulting

| 类型 | 检索词示例 |
|------|------------|
| EN | \`consulting appointment scheduling\`, \`coach booking system\`, \`consultation booking calendar\`, \`therapy appointment booking\`, \`discovery call booking\`, \`legal consultation online booking\`, \`Calendly with payment\` |
| EN+修饰 | \`consulting booking with payment\`, \`consulting booking Stripe\` |
| EN 口语 | \`how do clients book a paid consultation with me\`, \`charge for discovery calls automatically\` |
| 中文 | \`咨询预约系统\`, \`心理咨询 在线预约\`, \`顾问预约日历\`, \`付费咨询 预约链接\` |

### 3.7 其他垂类补充（上门 / 教育 / 宠物等）

| 垂类 | EN 示例 | 中文示例 |
|------|---------|----------|
| 上门家政 | \`home service booking\`, \`cleaner appointment scheduling\` | \`家政预约系统\`, \`上门保洁 在线预约\` |
| 教培 | \`tutoring booking system\`, \`trial class booking\` | \`试听课预约\`, \`教培排课预约\` |
| 宠物 | \`pet grooming booking\`, \`vet appointment online\` | \`宠物美容预约\`, \`宠物医院挂号预约\` |
| 汽车 | \`car wash booking\`, \`detailing appointment\` | \`洗车预约\`, \`汽车美容 在线预约\` |

### 3.8 每日可复制短名单（与关键词日表对齐）

**英文：**

\`\`\`
booking system
appointment scheduling
calendar booking
online booking
booking system Stripe
booking system with payment
salon booking
medical appointment
booking for companion service
fitness booking system
consulting appointment scheduling
salon booking with payment
how do I take online appointments for my salon
Fresha alternative
Calendly alternative with payment
multi-provider booking
deposit booking system
\`\`\`

**中文：**

\`\`\`
预约系统
预约日历
在线预约
美容院预约系统
医疗预约系统
陪玩预约系统
健身房预约系统
在线预约 支付
预约 定金
次卡核销
\`\`\`

---

## 4. 流量入口更细（机制 / 相对重要性 / 转化 / 动作）

> **占比说明**：下表「相对重要性」为接单印象分级（高/中/低），**非精确流量统计**，仅用于排优先级。

### 4.1 SEO 关键词布局

- **机制**：长尾页与作品集页进入搜索结果 → 落地演示 → 联系/提案。资产可复用，周期长（常数周到数月见效）。
- **相对重要性印象**：**中高**（英文长尾）；中文「预约系统开发」竞争杂，偏品牌词难冲。
- **转化特点**：意向偏「了解方案/找开发者」；停留看演示链的质量决定转化；适合成熟商家对比型查询。
- **接单方可优化动作**：
  - 为 T2/T3/bz.a/smart.a 各做一页，中英关键词写入 title/H1
  - 垂类一页一主题：salon / fitness / companion / clinic
  - 写对比文：\`Calendly vs custom booking\`、\`Fresha alternative for branded booking\`
  - 内链到可点 demo；避免关键词堆砌
  - 定期对照第 3 节长尾更新标题

### 4.2 Google / 百度广告

- **机制**：搜索广告或展示广告，按点击付费；关键词与第 3 节对齐；落地必须可点通预约 demo。
- **相对重要性印象**：**中**（有预算时起量快）；无预算则为 0。百度对国内商家词更相关，Google 对 Upwork 客群/跨境更相关。
- **转化特点**：点击贵、决策快；落地页若只有文案无 demo 易浪费；适合「booking system Stripe」「salon booking developer」等购买意向词。
- **接单方可优化动作**：
  - 先小预算测 5–10 个高意向词；否定「free template download」类低意向
  - 落地页固定：痛点 → 15s 动图 → T3/bz.a 链 → 联系方式
  - 中英账户分开；追踪 UTM 到提案来源
  - 与 SEO 共用落地页，避免另起无法维护的页

### 4.3 行业社群（Facebook 群组、Reddit、即刻、知识星球）

- **机制**：从业者互助群提问「用啥预约」；信任来自真实案例而非硬广；Reddit 如 r/smallbusiness、r/Entrepreneur、垂类 salon/fitness；国内即刻/知识星球偏经验贴。
- **相对重要性印象**：**中**（质量高、量不稳定）；口碑单客单价往往高于平台低价竞标。
- **转化特点**：弱推销、强信任；一次有用回复可带来私信；违规广告易封。
- **接单方可优化动作**：
  - 准备非推销案例卡：痛点（双订/定金）→ demo → 边界（不做什么）
  - 回答「SaaS vs 定制」时用第 2.4 检查清单，不贬低具体商家
  - Facebook/Reddit 用英文案例；即刻/知识星球用中文本地生活案例
  - 收集转介话术与价位带（待补真实成交，见迭代备注）

### 4.4 YouTube / 抖音 / B站 教程引流

- **机制**：用户搜教程 → 看完发现 webhook/冲突检测搞不定 → 找开发者；或片尾 CTA 导流作品集。
- **相对重要性印象**：**中高**（教程型内容长尾持续）；抖音/B站更偏国内展示，YouTube 更偏英文 how-to。
- **转化特点**：教育期长；完播与评论区问「源码/定制」是信号；适合刚起步用户。
- **接单方可优化动作**：
  - 短教程：T3 空档到确认；bz.a 动态字段；Stripe test 开关；smart.a 选人下单
  - 标题对齐第 3 节：\`salon booking system tutorial\`、\`Stripe appointment booking\`
  - 片尾固定 CTA：demo 链 + 接单入口
  - 抖音/B站用「15 秒防双订」钩子；YouTube 用 5–8 分钟完整路径
  - 复用预约×内容映射文档中的录屏清单

### 4.5 应用商店（App Store / Google Play / 华为应用市场）

- **机制**：商家搜「预约」「booking」「salon appointment」下载商家端 App；或客户从商店发现消费端。接单方较少「直接获客」，更多是**客户要求做上架 App**成为项目范围。
- **相对重要性印象（作获客）**：**低**；**作需求来源信号**：**中**（JD 常写「要 iOS/Android」）。
- **转化特点**：上架成本高（开发者账号、审核、维护）；多数定制单应劝「PWA/小程序/响应式先上」再 App。
- **接单方可优化动作**：
  - 提案默认 Web/PWA；App 单列报价与工期
  - 作品集说明「可打包 Capacitor/RN」但不承诺商店过审时间
  - 监控商店头部预约 App 的评论痛点（同步日历、抽成）作话术
  - 华为/国内商店注意隐私合规与备案叙事

### 4.6 模板市场（ThemeForest、Envato、腾讯云模板、阿里云市场）

- **机制**：客户买 HTML/React/小程序预约模板 → 自己改不动支付/冲突检测 → 找开发者改模板或重做。
- **相对重要性印象**：**中**（英文 ThemeForest/Envato 常见「booking template」）；国内云市场偏企业采购。
- **转化特点**：预算已花在模板上，二开预算可能紧；要先审计模板质量再接，避免「祖传代码」。
- **接单方可优化动作**：
  - 服务卡写明「可基于 Envato booking 模板二开 / 或建议迁移到 bz.a」
  - 提供「模板体检」固定价：支付、时区、双订三件套
  - 腾讯云/阿里云市场：关注「预约小程序」买家售后需求作线索（合规前提下）
  - 自有 T3 也可包装成「比市场模板少坑」的对照

### 4.7 Upwork / Freelancer 平台搜索

- **机制**：客户发 JD → 按关键词/类目曝光 → 接单方搜索或收到邀请后提案。连接点/报价位竞争激烈；标题含 booking / scheduling / Stripe 时更容易被本项目监控到。
- **相对重要性印象**：**高**（当前主入口印象）。
- **转化特点**：竞争报价；演示链决定是否进面试；低价占位单多。
- **接单方可优化动作**：
  - 维护并日更关键词短名单（见第 3 节与关键词日表）
  - 提案开场贴 **T3** Vercel 链 + **bz.a**/**smart.a** 业务录屏
  - 过滤占位低价「整站预订 $15」；优先支付/多服务者/动态字段单
  - 服务卡与 A3、A10、B6 对齐话术

### 4.8 口碑 / 转介 / 老客加购

- **机制**：做过的店介绍同行；老客从「单店日历」加购「多技师/会员/提醒」。
- **相对重要性印象**：**中**（单量少但质量高）。
- **转化特点**：信任高、议价空间在范围而非信任；适合卖维护年包。
- **接单方可优化动作**：
  - 交付时留「转介优惠」一页纸（匿名化案例）
  - 主动在 30/90 天回访：no-show、次卡是否要二期
  - 维护可转发的 60 秒演示视频

### 4.9 短视频广告（TikTok / Reels / Shorts 等）

- **机制**：15–30s 演示「点空档→下单→档变灰」；兴趣投放本地服务/创业人群。
- **相对重要性印象**：**低到中**（未系统投放时近 0；测通后可升）。
- **转化特点**：冲动点击多、落地要极简；适合获客到 waitlist，不全是高意向开发单。
- **接单方可优化动作**：
  - 先有机测完播（T3 vs bz.a vs smart.a）
  - 小预算再投；落地必须可点通
  - 素材与教程号复用

### 4.10 入口总表

| 入口 | 相对重要性印象 | 转化特点一句话 | 优先动作 |
|------|----------------|----------------|----------|
| 平台搜索 Upwork/Freelancer | 高 | 竞价提案，demo 定胜负 | 日更词表 + 贴 T3/bz.a/smart.a |
| SEO | 中高 | 慢资产、对比型查询 | 垂类落地页 |
| 教程 YouTube/抖音/B站 | 中高 | 教育后求助定制 | 教程+CTA |
| 社群 FB/Reddit/即刻/星球 | 中 | 高信任低频率 | 案例卡不硬广 |
| 模板市场二开 | 中 | 已有模板要改 | 体检固定价 |
| Google/百度广告 | 中 | 快但烧钱 | 高意向词+demo 落地 |
| 口碑转介 | 中 | 高质量 | 回访+转介页 |
| 短视频广告 | 低–中 | 流量杂 | 先有机后投 |
| 应用商店 | 低（获客）/中（需求信号） | 少直接获客 | 控范围，PWA 优先 |

---

## 5. 市场模板共性功能点（bz.a / smart.a 差异化参考）

用途：对照主流 SaaS/模板的高频能力，标记本项目两套业务演示的现状印象与是否建议后续加。**现状印象可迭代修正，非代码审计结论。**

### 5.1 共性功能总表

| 功能点 | 市场常见度 | bz.a 现状印象 | smart.a 现状印象 | 是否建议后续加 |
|--------|------------|---------------|------------------|----------------|
| 在线选时段 / 防双订 | 极高 | 有（核心） | 有（人×档） | 保持；补压力测试叙述 |
| 服务目录 / SKU | 极高 | 有（免注册浏览） | 有（服务者向） | 保持 |
| 支付（全款） | 极高 | 有（可开关 / Stripe 向） | 有/可演示 | 保持；补多币种说明 |
| 定金 + 尾款 | 高 | 部分/可叙述 | 弱–中 | **建议加**（状态机演示） |
| 取消规则 / no-show | 高 | 弱–中 | 弱–中 | **建议加**（配置项+日志） |
| 提醒（邮件/短信/WA） | 极高 | 事件可出，常旁路 | 同左 | **建议加**（至少邮件模板） |
| 动态表单 / intake | 高 | 有（动态字段） | 弱–中 | bz.a 保持；smart.a 按需 |
| 多员工 / 多服务者档期 | 高 | 弱（偏单资源可扩） | 有（核心） | smart.a 保持；bz.a 可选 |
| 资源/房间第二库存 | 中高 | 弱 | 视实现 | 按垂类加 |
| 会员卡 / 次卡课包 | 高 | 弱–中 | 弱–中 | **建议加**（核销演示） |
| 评价 / 评论系统 | 高 | 弱 | 弱–中（内容向可延伸） | **建议加**（订单后评价） |
| 营销工具（券/满减/裂变） | 高 | 弱 | 弱 | 可选；勿优先生效 |
| 多语言 | 中高 | 弱–中 | 弱–中 | **建议加**（中英切换最小集） |
| 多时区 | 中高 | 弱–中 | 弱–中 | **建议加**（显示与存储 UTC） |
| 多门店 | 中 | 可扩叙事 | 偏人非店 | 按单加 |
| 等待列表 waitlist | 中高 | 弱 | 弱 | 建议团课场景加 |
| 代客预约（前台代下） | 中高 | 弱–中 | 弱–中 | 建议管理端加 |
| 日历嵌入 widget | 高 | 视部署 | 视部署 | **建议加**（iframe/脚本说明页） |
| 权限角色（店长/技师） | 高 | 弱–中 | 中 | 建议加强 |
| 报表（出勤/营收） | 高 | 弱 | 弱 | 二期 |
| POS / 零售加购 | 中高 | 无/弱 | 无 | 非主路径，单独立项 |
| Marketplace 获客 | 中（SaaS 特有） | 无 | 内容广场近似 | 不模仿抽成；讲自有流量 |
| 小程序 / App | 中高（国内） | Web 主 | Web 主 | 按单；默认 PWA |
| 合规（HIPAA/隐私同意） | 中（医疗） | 弱 | 弱 | 医疗单专项，勿默认宣称 |
| 内容 Feed / 圈子 | 低（通用）/ 高（垂类陪玩） | 无 | 有（核心差异） | smart.a 强化差异化 |
| 加时费 / 时长矩阵 | 中 | 中 | 中 | 建议陪玩/私教演示加强 |
| Google/Outlook 日历同步 | 高 | 弱 | 弱 | 可选插件级 |
| 发票 / 收据 | 中 | 弱 | 弱 | 按地区加 |

### 5.2 差异化策略（给投标用）

- **不要和 Mindbody/有赞拼「功能数量」**；拼「固定价 MVP + 可点业务演示 + 非标模型」。
- **bz.a 主叙事**：动态字段、免注册下单、支付可开关、定金/取消可配置（补齐后）。
- **smart.a 主叙事**：多服务者档期 + 内容/人设，SaaS 美业模板很少一体提供。
- **T3/T2**：只证明速度与英文可点，不与 all-in-one SaaS 比功能清单。

### 5.3 建议后续加的优先级（印象）

| 优先级 | 功能 | 理由 |
|--------|------|------|
| P0 | 定金+尾款状态机、取消/no-show、邮件提醒 | 真上线几乎必问 |
| P1 | 次卡核销、多时区、中英、评价 | 成熟商家加购高频 |
| P2 | waitlist、代客预约、widget 文档 | 提升「像 SaaS」完整度 |
| P3 | 营销券、POS、原生 App | 易炸范围，单独立项 |

---

## 迭代备注

### 出海教程反馈回填（2026-10-21）

- **出海教程反馈日期 2026-10-21**：已按反馈启动 seeds / 拒单 / 提案 / 本周切片（见同目录新建文件）。
- **bz.a 公开 URL（H5）**：https://bz.a.ezcoin.ink/h5/
- **smart.a 公开 URL（H5）**：https://smart.a.ezcoin.ink/h5/
- **60s 录屏路径**：\`/workspace\` 下无现成 bz.a / smart.a 录屏 → **待补**：建议路径 \`/workspace/freelancer/demos/bz_a_60s.mp4\` / \`/workspace/freelancer/demos/smart_a_60s.mp4\`
- **需求地图侧重备注**：
  - 获客侧重：**平台搜索高** + **SaaS 离开话术**（抽成 / 白标 / 非标库存 / 支付地区）
  - **bz.a** ↔ 预约支付 / 动态字段 / 免注册
  - **smart.a** ↔ 多服务者 / 内容广场
  - **降权**：应用商店获客、短视频广告、医疗主打
- 关联新建：
  - \`requirement_radar_seeds_booking_2026-10-21.md\`
  - \`booking_reject_rules_daily.md\`
  - \`proposal_template_booking_demo.md\`
  - \`acquisition_plan_30d_2026-10-21.md\`（本周最小切片优先）
  - \`one_pager_bz_smart_demo_2026-10-21.md\`
  - \`fiverr_gig_skeleton_booking_2026-10-21.md\`

### 仍待补清单

- [ ] 补：近 30 天平台「预约+支付」样本条数与预算带（注明来源日期）
- [ ] 补：定金+尾款真实成交或公开 JD 链接（不编造）
- [ ] 补：多门店客户访谈要点
- [x] 补：bz.a / smart.a 公开 H5 URL（见上）；录屏仍待补
- [ ] 补：YouTube / 短视频已发布链接与完播数据
- [ ] 补：社群转介成交记录（匿名化）
- [ ] 补：取消/no-show 规则配置截图
- [ ] 补：会员次卡核销演示是否上线
- [ ] 补：与关键词日表的差异说明（新增/废弃词）— seeds 草案已从日表提炼
- [ ] 补：合规注意事项（医疗、陪玩、短信 opt-in）专项页链接
- [ ] 补：Fresha / Square / Mindbody / Vagaro / 有赞 定价页截图归档（注明抓取日期）
- [ ] 补：ThemeForest 预约模板 Top 评测结论（代码质量）
- [ ] 补：Google/百度广告实测 CPC 与转化（若有投放）
- [ ] 补：应用商店竞品评论痛点摘录（匿名化）— 获客侧本周降权
- [ ] 补：第 5 节功能表对照真实代码审计（替换「印象」）
- [ ] 补：美团/抖音预约对接案例边界说明
- [ ] 补：语音搜索词实际 Search Console / 平台曝光（有数据再填）

---

*生成/扩展日期：2026-10-21（Asia/Shanghai）｜公开调研 + 接单印象，非精确市占｜不含个人真名｜出海教程反馈已回填｜仅写本文件*
`},
{"id": "doc-booking-acq-1021", "title": "预约演示 30 天获客计划 · 本周最小切片（2026-10-21）", "theme": "模板与交付", "date": "2026-10-21 20:50", "summary": "本周只做五件：一页纸+demo、FL 日搜 2 轮提案≥10、提案模板、Gig 骨架二选一、seeds 补词；教程/SEO/社群暂缓。", "tags": ["获客", "预约", "Freelancer", "Fiverr", "demo", "本周"], "source": "", "path": "freelancer/acquisition_plan_30d_2026-10-21.md", "related_docs": ["doc-booking-entry-1021", "doc-booking-keywords-1021", "doc-booking-reject-1021", "doc-booking-seeds-1021", "doc-live", "doc-radar-pulse-1022"], "content": `# 30 天获客计划：让目标客户找到 bz.a / smart.a 演示（2026-10-21）

- **文头依据**：基于 2026-10-21 入口调研扩展版（\`booking_demand_and_entry_map_2026-10-21.md\`）+ 关键词日表（\`booking_keywords_daily_2026-10-21.md\`）扩展；可选骨架参考 \`demand_classification_frameworks_ref_2026-10-21.md\`。
- **目标**：让目标客户（已有生意缺工具 / 刚起步要可约链接）找到并点开 **bz.a**（\`bz.a.ezcoin.ink\`）与 **smart.a**（\`smart.a.ezcoin.ink\`）演示。
- **产品现状（背景）**：
  - **bz.a**：预约日历 + 支付 + 动态字段 + 免注册下单；H5 原版有首页/门店/动态/订单；免注册动态字段目前主要靠 API，UI 待 H5 重编。
  - **smart.a**：内容/UGC + 预约一体（陪玩/多客向）；方案 A 免 token 浏览已通。
- **命名约定**：全文用「接单方」「本项目」；禁止真实人名。
- **优先级原则**（引自入口地图 §4.10）：平台提案 **高** → SEO / 教程 **中高** → 社群 / 模板二开 **中** → 付费广告 **中（有预算）** → 短视频广告 **低–中** → 应用商店获客 **低**（作需求信号中）。
- **执行状态（2026-10-21 出海教程反馈）**：**本周最小切片优先于原 30 天全文**；第 2 周并行的教程/Reddit/FB/即刻/SEO 2 页 **砍掉或后移**；教程连载、社群铺量、SEO 多页、短视频广告 **暂缓**，等本周提案节奏与 Gig 骨架跑通再开。下文原 §1–§5 保留作附录并标「暂缓执行」。

---

## 本周最小切片（优先于原 30 天全文）

> **只做下面 ①–⑤。** 未列入本切片的渠道动作本周不做。对齐主线：平台搜索高 + SaaS 离开话术；bz.a↔预约支付/动态字段/免注册；smart.a↔多服务者/内容广场。

| # | 动作 | 完成标准 | 链到 |
|---|------|----------|------|
| ① | **一页纸 + demo** | 半页～一页：定位、demo 链、适合谁、不接什么；链可点 | \`one_pager_bz_smart_demo_2026-10-21.md\`；demo：\`https://bz.a.ezcoin.ink/h5/\` · \`https://smart.a.ezcoin.ink/h5/\` |
| ② | **Freelancer 日搜 2 轮、合格提案 ≥10** | 工作日上下午各 1 轮；用 hot seeds；过拒单规则；本周累计合格提案 ≥10 | \`booking_reject_rules_daily.md\` + seeds（⑤） |
| ③ | **提案模板定稿** | 前 3 行含 demo；含 SaaS 离开四问（抽成/白标/非标库存/支付地区） | \`proposal_template_booking_demo.md\` |
| ④ | **Fiverr Gig 文案骨架** | bz.a 或 smart.a **二选一**写一版骨架（不发布也算本周完成） | \`fiverr_gig_skeleton_booking_2026-10-21.md\` |
| ⑤ | **seeds 补词** | hot/cold 写入雷达草案；宽网词不作主提案词 | \`requirement_radar_seeds_booking_2026-10-21.md\` |

### 本周明确不做 / 后移

| 原计划项 | 处理 |
|----------|------|
| 第 2 周并行：教程 2–3 条、Reddit/FB/即刻、SEO 上线 2 页 | **砍掉或后移**（等提案节奏与 Gig 骨架跑通） |
| 教程连载、社群铺量、SEO 多页 | **暂缓** |
| 短视频广告、应用商店获客、医疗主打获客 | **暂缓 / 降权**（与需求地图侧重一致） |
| Google/百度付费、Upwork 日常投标 | 仍按原条件触发；**本周不开** |

### 本周每日最小清单（可勾选）

- [ ] 日搜 2 轮（hot seeds；不用宽网词主搜）
- [ ] 过拒单规则后再写提案（Beds24 / $15 / HIPAA 轻诺 / escort / reservation 降权）
- [ ] 提案前 3 行贴 bz.a 或 smart.a H5
- [ ] 累计合格提案计数（目标周 ≥10）
- [ ] （一次即可）确认一页纸、提案模板、Gig 骨架、seeds 四份资产在盘

### Demo / 录屏

- bz.a H5：https://bz.a.ezcoin.ink/h5/
- smart.a H5：https://smart.a.ezcoin.ink/h5/
- 60s 录屏：待补 — \`/workspace/freelancer/demos/bz_a_60s.mp4\` · \`smart_a_60s.mp4\`

---

## 目录

0. **[本周最小切片（优先于原 30 天全文）](#本周最小切片优先于原-30-天全文)** ← 先做这个
1. [按优先级排序的渠道动作](#1-按优先级排序的渠道动作) · **附录 · 暂缓执行**
2. [搜索词和落地页建议](#2-搜索词和落地页建议bza--smarta-分别) · **附录 · 词表可查，多页 SEO 暂缓**
3. [内容引流素材方向](#3-内容引流素材方向) · **附录 · 暂缓执行**
4. [社群和平台曝光](#4-社群和平台曝光) · **附录 · 暂缓执行**
5. [衡量指标与周记表](#5-衡量指标与周记表) · 本周只盯提案数/demo 打开
6. [迭代备注](#迭代备注)

---

## 1. 按优先级排序的渠道动作（附录 · 暂缓执行）

> **暂缓执行标记（2026-10-21）**：原 30 天第 1–4 周节奏保留备查；**本周只跑文首「本周最小切片」**。第 2 周教程/Reddit/FB/即刻/SEO 2 页已砍掉或后移。

> 入口地图相对重要性印象：**Upwork/Freelancer 高**；SEO / 教程 **中高**；社群 **中**；广告 **中（有预算）**；应用商店获客 **低**。先低成本立刻做，重投入标后期或条件触发。

### 1.0 优先级总览（先做什么）

| 优先级 | 渠道动作 | 成本 | 何时做 |
|--------|----------|------|--------|
| P0 | 资料页 / 演示一页纸（痛点→15s 动图→demo 链→边界） | 低 | 第 1 周 Day1–2 |
| P0 | Freelancer 日搜关键词短名单 + 提案贴 demo | 低 | 第 1 周起每日 |
| P0 | SEO 基础页骨架（title/H1/路径，即使未建站也先定） | 低 | 第 1–2 周 |
| P0 | 案例短视频脚本（先写后拍） | 低 | 第 1 周写，第 2 周拍 |
| P1 | 教程号有机发布（YouTube / 抖音 / B站） | 低–中 | 第 2 周起每周 2–3 |
| P1 | Reddit / FB / 即刻 案例卡回复（不硬广） | 低 | 第 2 周起每周节奏 |
| P1 | Freelancer 服务卡对齐 A3/A10/B6 话术 | 低 | 第 1–2 周 |
| P2 | Upwork：暂缓投标，但提案模板先备 | 低（备模板） | 第 1 周备，触发后用 |
| P2 | 模板市场「体检固定价」服务卡 | 低 | 第 3–4 周 |
| P3 | Google/百度小预算测词 | 中（烧钱） | **条件触发**：落地页可点通 + 周提案≥15 仍缺面试 |
| P3 | 短视频广告 | 中 | **条件触发**：有机完播率可接受后再投 |
| P4 | 应用商店上架作获客 | 高 | **后期 / 默认不做**；客户 JD 要求 App 时单列报价，默认劝 PWA |

### 1.1 第 1 周（立刻可做 · 可勾选）

**资料与演示资产**

- [ ] 写完「一页纸」资料页（中英各一）：痛点（双订 / 定金对不齐 / 强制注册）→ 15s 动图位 → bz.a / smart.a 链 → 明确不做（App/复杂 CRM 默认不做）
- [ ] 录或截：bz.a「免注册逛目录 → 选时段 → 支付可开关」路径（即使动态字段 UI 未重编，标「字段走 API / 管理端」）
- [ ] 录或截：smart.a「免 token 浏览内容 → 服务者主页 → 档期下单」（方案 A 已通）
- [ ] 整理 60 秒演示脚本 × 3（见 §3）；先脚本后成片
- [ ] 固定 CTA 文案：demo 链 + 接单入口（提案/邮件），全渠道复用

**Freelancer 提案（主入口 · 入口地图 §4.7 相对重要性高）**

- [ ] 把关键词日表「每日复制用短名单」置顶到搜索备忘（英文约 12 条 + 中文 5 条）
- [ ] 日搜 2 轮（上午/晚间 Asia/Shanghai）：优先 \`booking system with payment\` / \`booking system Stripe\` / \`salon booking with payment\` / \`multi-provider booking\` / \`booking for companion service\`
- [ ] 过滤占位低价「整站预订 $15」类；优先支付 / 多服务者 / 动态字段单
- [ ] 提案开场模板定稿：前 3 行贴可点 demo（T3 速度链可选 + **bz.a 或 smart.a 业务链**）+ 一句「哪些 SaaS 做不到、本项目最小改动」
- [ ] 目标：本周发出 **≥10** 条合格提案（过程指标）

**SEO 基础（资产慢、第 1 周先定骨架）**

- [ ] 定落地页 URL 路径与 title/H1（见 §2；即使站点未建页也先写进本计划）
- [ ] 为 bz.a / smart.a 各列 1 页「作品集要点」草稿（中英关键词写入 title/H1）
- [ ] 内链规则：所有页必须链到可点 demo，避免关键词堆砌

**Upwork（暂缓但模板先备）**

- [ ] **暂缓日常投标**（连接点/报价位策略待定）
- [ ] 备好 Upwork 提案模板（与 Freelancer 同结构：demo + 边界 + 支付/多服务者钩子），存本地待触发

**本周不做**

- [ ] 不投 Google/百度广告
- [ ] 不上架应用商店
- [ ] 不买短视频广告流量

### 1.2 第 2 周（巩固提案 + 开始内容/社群）

**每日清单（工作日）**

- [ ] Freelancer：短名单搜索 → 筛选 → 提案（目标 **≥3 条/日** 合格）
- [ ] 检查昨日提案回复；面试前再发一次 60s 录屏链
- [ ] 记录：提案数 / 面试邀约 / 是否点开 demo（简易周记 §5）

**每周清单**

- [ ] 发布教程/短视频 **2–3** 条（选题见 §3；标题对齐关键词日表）
- [ ] Reddit：目标社区回复 **3–5** 条有用答（案例卡，不硬广）
- [ ] Facebook 美业/小生意群：同节奏 **2–3** 条帮助向回复
- [ ] 即刻（中文）：1–2 条「本地生活预约踩坑」经验贴（双订/定金/免注册）
- [ ] SEO：至少上线或草稿托管 **2** 个基础页（bz.a 支付向 + salon 垂类 或 smart.a companion 向）
- [ ] 更新服务卡话术：对齐入口地图「A3 预约、A10 表单」及 bz.a 动态字段 / smart.a 多服务者

**条件检查（周末）**

- [ ] 若落地页仍不可点通 demo → 暂停一切付费想法，只修演示
- [ ] 若 Freelancer 周提案 &lt; 10 → 下周加搜 \`Calendly alternative\` / \`deposit booking\` 类（入口扩展版 §3.8 短名单）

### 1.3 第 3–4 周（扩展曝光 + 条件触发重投入）

**每周固定**

- [ ] Freelancer 维持日搜 + 提案（周目标 **≥15**）
- [ ] 教程持续周更；开始复用「预约×内容」录屏清单（入口地图 §4.4）
- [ ] 社群维持 §4 节奏；收集匿名转介话术（入口地图 §4.3）
- [ ] SEO：补垂类页（fitness / clinic 谨慎合规 / companion）+ 一篇对比文草稿（\`Calendly vs custom booking\` 或 \`Fresha alternative for branded booking\`）
- [ ] 模板市场：上架或写明「Envato booking 模板体检固定价：支付 / 时区 / 双订三件套」（入口地图 §4.6）
- [ ] 口碑：若有老客，发 30 天回访（no-show / 次卡是否二期）（入口地图 §4.8）

**条件触发 · 付费广告（P3）**

仅当同时满足再开小预算：

1. 落地页固定结构可点通：痛点 → 15s 动图 → bz.a/smart.a → 联系  
2. 连续两周 Freelancer 提案达标但仍缺面试/成单  
3. 单周广告预算上限事先写死（本计划不写具体金额，由接单方自定）

- [ ] 先测 5–10 个高意向词（如 \`booking system Stripe\`、\`salon booking developer\`）；否定 \`free template download\` 类（入口地图 §4.2）
- [ ] 中英账户分开；UTM 追踪到提案来源
- [ ] 与 SEO 共用落地页，不另起无法维护的页

**条件触发 · 短视频广告（P3）**

- [ ] 先有机测完播（T3 vs bz.a vs smart.a）通过后再小预算投（入口地图 §4.9）
- [ ] 落地必须可点通；素材与教程号复用

**后期 / 默认不做 · 应用商店（P4）**

- [ ] 获客不做商店投放；JD 写「要 iOS/Android」时：提案默认 Web/PWA，App 单列报价与工期（入口地图 §4.5）
- [ ] 可监控商店头部预约 App 评论痛点作话术，但不作为本 30 天获客主路径

---

## 2. 搜索词和落地页建议（bz.a / smart.a 分别）（附录 · 词表可查，多页 SEO 暂缓）

> **暂缓执行**：本周不建多页 SEO；搜词以 seeds hot/cold 为准。

> 词均从关键词日表 + 入口扩展版 §3.8 短名单挑出；搜索量/竞争度为印象，非官方量级。

### 2.1 bz.a 主打词短名单（预约日历 + 支付 + 动态字段 + 免注册）

**英文（提案搜索 + SEO title）**

| 词 | 为何适合 bz.a | 日表印象 |
|----|---------------|----------|
| \`booking system with payment\` | 支付可开关 / Stripe 向核心叙事 | 中量中竞 |
| \`booking system Stripe\` | 明确收款集成 | 中量中竞 |
| \`online booking Stripe\` | 线上约+结账 | 中量中竞 |
| \`calendar booking\` | 周历选时段骨架 | 高量中竞 |
| \`salon booking with payment\` | 美业订金/预付锁定档 | 中量中竞 |
| \`salon booking Stripe\` | 美业+Stripe，竞争偏低 | 中量低竞 |
| \`deposit booking system\` | 定金叙事（入口扩展版短名单） | — |
| \`Calendly alternative\` / \`Calendly alternative with payment\` | 「比 Calendly 多支付与目录」 | 中量中竞 |
| \`booking widget\` | 嵌入官网组件向 | 中量中竞 |
| \`appointment scheduling with payment\` | 排期+预付 | 中量中竞 |

**中文**

| 词 | 为何适合 bz.a |
|----|---------------|
| \`在线预约 支付\` | 预约+支付一体 |
| \`预约系统 Stripe\` | 明确 Stripe（低竞） |
| \`预约日历\` | 日历视图+可约时段 |
| \`预约 定金\` | 定金锁档（扩展版短名单） |
| \`美容院预约系统\` | 美业后台垂类 |
| \`次卡核销\` | 成熟商家加购叙事（二期也可挂） |

**少主打 / 谨慎**：\`medical appointment\` 系（合规 HIPAA，勿轻诺）；纯 \`reservation system\`（易撞酒店餐厅需再筛）。

### 2.2 smart.a 主打词短名单（多服务者 + 内容/UGC + 陪玩多客）

**英文**

| 词 | 为何适合 smart.a | 日表印象 |
|----|------------------|----------|
| \`multi-provider booking\` | 人×时间矩阵核心 | 低量低竞 |
| \`booking for companion service\` | 陪玩/陪伴垂类精准 | 低量低竞 |
| \`companion booking system\` | 陪伴预约后台 | 低量低竞 |
| \`companion service online booking\` | 线上约陪伴 | 低量低竞 |
| \`booking for companion service with payment\` | 陪玩+预付 | 低量低竞 |
| \`booking platform\` | 多角色（客户+服务方）表述 | 高量高竞（提案慎筛） |
| \`fitness booking system\` | 多教练档期可对照 | 中量中竞 |
| \`personal trainer appointment scheduling\` | 一对多服务者排期 | 中量中竞 |
| \`dating companion booking app\` | App 模块向（政策敏感，投标慎用） | 低量中竞 |

**中文**

| 词 | 为何适合 smart.a |
|----|------------------|
| \`陪玩预约系统\` | 垂类主词 |
| \`陪伴服务 在线预约\` | 陪诊/陪伴上门 |
| \`多人陪玩 预约\` | 多客档期（扩展版 §3.2） |
| \`私教 在线预约\` | 多教练对照叙事 |
| \`团课预约日历\` | 名额/人矩阵延伸 |

**合规注意**（关键词日表 §2）：\`escort booking calendar\` 等敏感词谨慎投标；提案不碰违规表述。

### 2.3 建议落地页路径 / 标题 / 页面要点

> 站点未建页也可按此建；每页必须可点到对应 demo。结构对齐入口地图 §4.1 / §4.2：痛点 → 动图 → demo → 联系。

#### bz.a 建议页

| 建议路径 | 建议 Title / H1 | 页面要点 | 主 demo |
|----------|-----------------|----------|---------|
| \`/demo/bz-a\` 或 \`/booking/bz-a\` | EN: Online Booking with Payment (Stripe-ready) · 中: 在线预约+支付（可开关） | 防双订、支付开关、免注册下单；注明动态字段 API/管理端现状与 H5 重编计划 | bz.a.ezcoin.ink |
| \`/demo/bz-a/salon\` | Salon Booking System with Deposit / 美容院预约与定金 | 美业目录、订金叙事、员工可扩说明 | bz.a |
| \`/demo/bz-a/guest-checkout\` | Book Without Forcing Signup / 免注册浏览下单 | 逛目录→游客结账→邮件查单；对标「登录墙掉转化」 | bz.a |
| \`/demo/bz-a/dynamic-fields\` | Dynamic Intake Fields on Booking / 预约动态字段 | 过敏/车型/人数等字段可配；现状：API 为主，UI 路线图一句 | bz.a |
| \`/compare/calendly-vs-custom\` | Calendly Alternative with Payment & Service Catalog | 对比表：会议链 vs 服务目录+收款；CTA→bz.a | bz.a |
| \`/compare/fresha-alternative\` | Fresha Alternative: Own Brand + Stripe Fees You Control | 抽成/白标痛点（入口 §2.3.1）；不贬低商家 | bz.a |

#### smart.a 建议页

| 建议路径 | 建议 Title / H1 | 页面要点 | 主 demo |
|----------|-----------------|----------|---------|
| \`/demo/smart-a\` 或 \`/booking/smart-a\` | Multi-Provider Booking + Content / 多服务者档期+内容一体 | 免 token 浏览、人设页、档期、内容 Feed | smart.a.ezcoin.ink |
| \`/demo/smart-a/companion\` | Companion Service Online Booking / 陪玩预约系统 | 多客档期、内容拉活→下单；合规边界声明 | smart.a |
| \`/demo/smart-a/multi-provider\` | Multi-Provider Calendar (Staff × Time) | 先人选时/先时选人；冲突检测 | smart.a |
| \`/demo/smart-a/fitness-coaches\` | Fitness / Trainer Multi-Staff Booking | 私教多教练对照；可提课包为二期 | smart.a |
| \`/use-cases/ugc-booking\` | UGC Feed to Booked Session | 内容广场→主页→预约变现；强调 SaaS 美业模板很少一体提供（入口 §5.2） | smart.a |

#### 共用轻量页

| 建议路径 | 要点 |
|----------|------|
| \`/demos\` | 双产品入口卡：何时用 bz.a（单店/支付/字段）vs smart.a（多人+内容） |
| \`/boundaries\` | 明确不做清单（降低范围膨胀，对齐刚起步客户画像 §2.2） |

---

## 3. 内容引流素材方向（附录 · 暂缓执行）

> **暂缓执行**：教程连载 / 短视频广告本周不开；脚本可留稿但不排期。

> 机制引自入口地图 §4.4：教程搜到 → 搞不定 webhook/冲突检测 → 找开发者；片尾 CTA = demo + 接单入口。抖音/B站 15s 钩子；YouTube 5–8 分钟完整路径。

### 3.1 短视频（15–30s / Shorts / 抖音 / Reels）· 各选题标注产品

1. **「点空档 → 下单 → 档变灰」防双订一眼懂** → **bz.a**（也可 T3 对照速度）
2. **支付开关：演示模式 vs Stripe test 一键切换** → **bz.a**
3. **不注册也能约：逛服务目录到确认** → **bz.a**
4. **换服务字段变了（动态字段钩子，可先 API/管理端录）** → **bz.a**
5. **先刷内容再约人：Feed → 主页 → 档期** → **smart.a**
6. **同一时段两人不能约同一陪玩/教练** → **smart.a**
7. **定金锁档 3 步（状态机哪怕 stub 也要说清）** → **bz.a**
8. **「SaaS 抽成 vs 自有 Stripe」15 秒对比卡** → **bz.a**（话术对齐 Fresha/Booksy 离开触发 §2.4）

### 3.2 教程（5–8 分钟 YouTube / B站较长视频）

1. **Salon booking system tutorial：从空档到确认（含支付 stub）** → **bz.a**（标题对齐日表 \`salon booking\`）
2. **Stripe appointment booking：PaymentIntent / 可开关支付怎么讲给客户** → **bz.a**
3. **Guest checkout booking：为什么本地服务不要登录墙** → **bz.a**
4. **Dynamic booking form fields：条件显示与订单绑定** → **bz.a**（可坦白 UI 重编中，演示 API/配置）
5. **Multi-provider booking tutorial：人选时 vs 时选人** → **smart.a**
6. **Companion booking + content feed walkthrough（合规表述）** → **smart.a**
7. **Calendly vs custom booking with payment（对比教程）** → **bz.a** 为主
8. **Class pack / 次卡核销预约长什么样（二期路线图也可做期待管理）** → **bz.a** / **smart.a**

### 3.3 案例页（文字+动图+demo，可挂 \`/cases/...\`）

1. **美业小店：告别纸本预约簿 + 订金** → **bz.a** · 词：\`salon booking with payment\`
2. **顾问从 Calendly 升级到服务目录+收款** → **bz.a** · 词：\`Calendly alternative with payment\`
3. **多技师店：店长不再晚上对账档期** → **smart.a**（或 bz.a 可扩叙事）· 词：\`multi-provider booking\`
4. **陪玩/陪伴工作室：内容获客与档期一体** → **smart.a** · 词：\`陪玩预约系统\`
5. **私教团队：多人日历防撞车** → **smart.a** · 词：\`personal trainer appointment scheduling\`
6. **模板二开翻车：ThemeForest 预约模板支付/双订体检后迁 bz.a** → **bz.a**（入口 §4.6）
7. **「只要 20% 功能却付 100% 年费」轻量固定价 MVP** → **bz.a**（入口 §2.4 点 7）
8. **健身馆只要团课名额、不要 Mindbody 全套** → **bz.a** 名额叙事 / **smart.a** 教练矩阵（按客户选型）

---

## 4. 社群和平台曝光（附录 · 暂缓执行）

> **暂缓执行**：Reddit / FB / 即刻铺量后移，等提案节奏与 Gig 骨架跑通再开。


### 4.1 Upwork（暂缓，但模板先备）

- **状态**：**暂缓日常搜索与投标**（连接点/报价策略未定为「当前主投入」时可把精力放 Freelancer）。
- **第 1 周必做**：写好提案模板并本地存档，结构与 Freelancer 一致：
  1. 前 3 行可点 demo（bz.a 或 smart.a，按 JD 选）
  2. 对应痛点一句（支付 / 动态字段 / 多服务者 / 免注册）
  3. 边界（不做 App 默认、不做 HIPAA 轻诺）
  4. 下一步（15 分钟走查 demo）
- **触发启用条件（示例）**：Freelancer 连续两周面试不足，或出现高匹配「Stripe + booking + multi-staff」邀请件时，再用备好模板回复。
- **日表短名单**仍可用于日后 Upwork 监控，但本 30 天不强制日搜 Upwork。

### 4.2 Freelancer 提案策略（本 30 天主入口）

对齐入口地图 §4.7：

| 项 | 做法 |
|----|------|
| 搜索 | 每日粘贴关键词日表短名单；加搜支付/Stripe/salon+payment/companion/multi-provider |
| 筛选 | 拒占位低价整站；优先支付、多服务者、动态字段、定金 |
| 开场 | **必须贴可点链**：业务完整度用 bz.a/smart.a；需证速度时可附 T3 |
| 话术 | 「SaaS 年费/抽成/白标不够 → 固定价 MVP」；用 §2.4 检查清单，不点名贬低 |
| 附件 | 60s 录屏或 GIF；一页纸边界 |
| 节奏 | 第 1 周 ≥10 提案；第 2 周起工作日 ≥3；第 3–4 周周 ≥15 |
| 跟进 | 48h 无回复不骚扰；有提问优先补对应产品录屏 |

### 4.3 行业群组发帖 / 回复节奏

原则（入口 §4.3）：**弱推销、强信任**；准备非推销案例卡：痛点 → demo → 边界；违规硬广易封。

| 渠道 | 节奏（第 2 周起） | 内容类型 | 语言/产品 |
|------|------------------|----------|-----------|
| **Reddit**（如 r/smallbusiness、r/Entrepreneur、垂类 salon/fitness） | 每周回复 **3–5**；原创长帖最多 **1**/两周 | 答「用啥预约」：SaaS vs 定制检查清单；链 demo 仅在被问或签名区 | EN；bz.a 美业/支付，smart.a 多服务者 |
| **Facebook 群组**（小生意/salon owners 等） | 每周帮助向回复 **2–3**；禁首贴纯广告 | 双订/no-show/定金真实经验（匿名） | EN；bz.a 为主 |
| **即刻** | 每周 **1–2** 条经验贴 | 「不想用美团也能预约」「次卡核销踩坑」；评论区给 demo | 中文；bz.a / 有赞旁路叙事 |
| **知识星球**（若已有合适圈） | 每周 **1** 条干货或答问 | 同即刻，更垂直 | 中文 |
| **知识星球/即刻外的国内站** | 有余力再加；不摊薄 Freelancer | — | — |

**案例卡固定四句（可复制改）：**

1. 痛点：双订 / 定金对不齐 / 强制注册掉转化 / 多人档期口口相传  
2. 做法：固定价 MVP + 可点演示（bz.a 或 smart.a）  
3. 边界：默认 Web/PWA；医疗合规与敏感陪玩词单独评估  
4. 邀请：需要的话发 demo 链，不私聊轰炸  

### 4.4 与其他入口的配合

- 教程评论区问「源码/定制」→ 回 demo + 边界（§4.4 转化信号）
- 模板市场询价 → 先「体检固定价」再迁 bz.a（§4.6）
- 口碑回访第 4 周末做一次（若有交付客户）

---

## 5. 衡量指标与周记表

### 5.1 结果指标（每周看）

| 指标 | 定义（本项目） | 30 天参考方向（非 KPI 承诺） |
|------|----------------|------------------------------|
| **注册数** | 演示环境或 waitlist/联系表单产生的新线索账号或邮箱登记 | 从 0 冷启动：先有数再谈涨幅 |
| **建单数** | 客户在 bz.a/smart.a 演示中成功创建的预约/订单（含 test 支付） | 面试前引导对方点一次「真下单」 |
| **回访率** | 7 日内再次打开 demo 或再次回复提案线程的线索占比 | 录屏跟进后应可见提升 |

### 5.2 过程指标（多 4 个，易统计）

| 过程指标 | 定义 | 建议周目标（第 2 周起） |
|----------|------|-------------------------|
| **提案数** | Freelancer（+ 若启用的 Upwork）发出的合格提案 | ≥15 / 周 |
| **落地页访问** | \`/demo/*\` 等页 PV（或 UTM 链点击） | 有统计后再定；第 1 周先埋 UTM |
| **Demo 打开数** | bz.a / smart.a 独立访客或「提案后点击」次数 | 提案数的 30%+ 为健康信号印象 |
| **内容发布数** | 短视频+教程+案例页发布条数 | ≥3 / 周（第 2 周起） |
| （可选）**社群有效回复数** | Reddit/FB/即刻有实质帮助的回复 | ≥5 / 周 |
| （可选）**面试邀约数** | 平台邀约或同意看 demo 的通话 | 记趋势即可 |

### 5.3 简易周记表格式（可复制到表格或本文件附录）

\`\`\`markdown
## 周记 YYYY-Www（Asia/Shanghai，周起始日：周一）

### 结果
| 注册数 | 建单数（演示） | 回访线索数 | 回访率 |
|--------|----------------|------------|--------|
|        |                |            |        |

### 过程
| 提案数 | 落地页访问 | Demo 打开 | 内容发布 | 社群回复 | 面试邀约 |
|--------|------------|-----------|----------|----------|----------|
|        |            |           |          |          |          |

### 分产品 Demo 打开
| bz.a | smart.a | 备注（哪条提案/哪篇内容） |
|------|---------|---------------------------|
|      |         |                           |

### 本周做了什么（勾选摘要）
- [ ] Freelancer 日搜
- [ ] 资料页/落地页更新
- [ ] 短视频/教程
- [ ] 社群
- [ ] SEO
- [ ] 其他：

### 下周只改一件事
- 

### 暂停/触发记录
- 付费广告：未开 / 已开（原因：）
- Upwork：仍暂缓 / 已启用（原因：）
\`\`\`

### 5.4 周节奏回顾会（接单方自用 · 15 分钟）

1. 看过程是否达标（提案/内容），不达标先补动作不先加广告  
2. 看 demo 打开是否跟随提案；若提案多但打开少 → 改开场链与录屏  
3. 看 bz.a vs smart.a 哪条链更常被点 → 下周提案默认产品倾斜  
4. 更新迭代备注勾选  

---

## 迭代备注

### 出海教程反馈（2026-10-21）

- 已插入文首 **本周最小切片**；原 §1–§4 标「暂缓执行」。
- bz.a H5：https://bz.a.ezcoin.ink/h5/ · smart.a H5：https://smart.a.ezcoin.ink/h5/
- 60s 录屏待补：\`/workspace/freelancer/demos/bz_a_60s.mp4\` · \`smart_a_60s.mp4\`
- 关联：seeds / 拒单 / 提案模板 / 一页纸 / Fiverr Gig 骨架（同目录 2026-10-21 文件）

空白清单，后续补数据/链接时直接勾：

- [x] 补：bz.a / smart.a 公开 H5 URL（见上）；录屏与 UTM 仍待补
- [ ] 补：Freelancer 近 4 周提案数 / 面试数 / 成单（匿名化）
- [ ] 补：落地页实际上线路径与 Search Console / 简易分析截图
- [ ] 补：短视频/教程已发布链接与完播（入口地图迭代项对齐）
- [ ] 补：动态字段 H5 重编完成后，更新 §2.3 \`/dynamic-fields\` 页现状句
- [ ] 补：定金+尾款 / 取消 no-show 演示就绪后，升级短视频 #7 与 P0 功能叙事
- [ ] 补：Upwork 启用日期与连接点策略
- [ ] 补：付费广告若开启——词、CPC、转化（不编造）
- [ ] 补：社群转介成交记录（匿名化）
- [ ] 补：与关键词日表差异（新增/废弃词）
- [ ] 补：医疗/陪玩合规专项页链接
- [ ] 补：周记表实际填写 4 周归档路径

---

*生成日期：2026-10-21（Asia/Shanghai）｜基于入口调研扩展版 + 关键词日表｜出海教程反馈：本周最小切片优先｜不含个人真名｜仅写本文件*
`},
{"id": "doc-booking-reject-1021", "title": "预约类日流程拒单 / 降权规则（2026-10-21）", "theme": "市场研究", "date": "2026-10-21 20:48", "summary": "R1–R7 拒单（Beds24/极低价整站/HIPAA 轻诺/escort/灰黑收款/双端一口价等）+ reservation 等降权信号；日搜可勾选顺序。", "tags": ["预约", "拒单", "筛选", "Freelancer"], "source": "", "path": "freelancer/booking_reject_rules_daily.md", "related_docs": ["doc-booking-keywords-1021", "doc-booking-seeds-1021", "doc-booking-acq-1021", "doc-radar-pulse-1022"], "content": `# 预约类日流程拒单 / 降权规则（2026-10-21）

- **用途**：Freelancer（及同类平台）日搜 → 筛选 → 提案前的可勾选检查。
- **配合**：\`booking_keywords_daily_2026-10-21.md\`、\`requirement_radar_seeds_booking_2026-10-21.md\`、\`proposal_template_booking_demo.md\`。
- **约定**：全文禁止真实人名；不替接单方自动投递。

---

## 1. 拒单条件清单（命中任一 → 默认不投）

| # | 条件 | 说明 |
|---|------|------|
| R1 | **Beds24 / 渠道管理器 / PMS / OTA 同步为主** | 酒店渠道坑；非自建预约+支付业务，范围与账号风险高 |
| R2 | **$15（或等价极低）整站+预订占位** | 一口价包整站预订；无法覆盖支付/防双订/验收 |
| R3 | **医疗 + HIPAA / PHI 轻诺** | JD 要求 HIPAA 合规或诊所病历，但预算/工期按普通预约写；默认拒或仅「专项合规报价+不承诺认证」 |
| R4 | **escort / 成人违规表述** | 含 escort、露骨约会违规词；平台政策与收款风控优先 → 拒 |
| R5 | **明显刷单 / 只要标书代写 / 无真实产品** | 只要「写 proposal」或复制粘贴 JD 无业务细节 |
| R6 | **要求绕过支付风控 / 灰黑收款** | 拒 |
| R7 | **必须原生 iOS+Android 且预算按 Web MVP** | 默认拒或拆：Web/PWA 一期 + App 单列；客户坚持一口价包双端则拒 |

---

## 2. 降权词 / 降权信号（可投但排后、严筛）

| 信号 | 动作 |
|------|------|
| \`reservation system\` | **降权**；先排除酒店/餐厅/场地 PMS，确认是服务预约再评 |
| 纯宽网词帖（仅 \`booking system\` / \`online booking\` / \`appointment scheduling\`，无支付/垂类细节） | **降权**；除非正文明确支付、多服务者、定金、动态字段 |
| \`medical appointment\` 系但未提 HIPAA | **降权观察**；提案禁止轻诺合规认证 |
| 模板市场「改个 WordPress 预订插件」+ 极低价 | **降权**；可转「体检固定价」话术，不作主战 |
| 只要 Calendly 嵌入、无支付/目录 | **降权**；与 bz.a 叙事弱匹配 |
| 应用商店获客 / 短视频投流为唯一目标 | **降权**（获客侧本周不做）；产品单另论 |

---

## 3. 进日筛流程的检查顺序（可勾选）

每日两轮（上午 / 晚间，Asia/Shanghai）按序执行：

### 3.1 搜词

- [ ] 只用 **hot** seeds（见 \`requirement_radar_seeds_booking_2026-10-21.md\`）
- [ ] 可选加 1–2 个 **cold**（多服务者 / companion / class pack 等）
- [ ] **不用**宽网词作主搜：\`booking system\` / \`online booking\` / \`appointment scheduling\`

### 3.2 标题 + 预算 30 秒扫

- [ ] 命中 R1–R7？→ **拒**，记一行原因，下一帖
- [ ] \`$15\` / 「full website booking」占位？→ **拒**
- [ ] \`reservation\` / 酒店 OTA？→ **降权或拒**

### 3.3 正文能力匹配

- [ ] 需要 **支付 / Stripe / 定金**？→ 优先 bz.a demo
- [ ] 需要 **多服务者 / 内容广场 / companion**？→ 优先 smart.a demo
- [ ] 需要动态字段 / 免注册？→ bz.a
- [ ] 仅宽网描述、无支付与人设？→ 降权或跳过

### 3.4 SaaS 离开检查（进提案前）

- [ ] 抽成 / marketplace 费率是否痛点？
- [ ] 要白标 / 自有域名品牌？
- [ ] 非标库存（人×房×设备 / 次卡）？
- [ ] 支付地区 / 币种 / Stripe 可用性？  
  （四问写进提案，见提案模板）

### 3.5 合规最后一道

- [ ] 医疗 HIPAA → 拒或专项
- [ ] escort 敏感 → 拒
- [ ] 短信/WhatsApp 营销 → 提案写明 opt-in，不包合规认证

### 3.6 通过 → 提案

- [ ] 前 3 行贴对应 demo H5 链（bz.a 或 smart.a）
- [ ] 用 \`proposal_template_booking_demo.md\`
- [ ] 当日合格提案计数 +1（本周目标 ≥10）

---

## 4. 一句话口诀

**先拒坑（Beds24 / $15 / HIPAA 轻诺 / escort）→ 再降权（reservation / 纯宽网）→ 再匹配 demo → 再写 SaaS 离开四问 → 才贴链提案。**

---

*生成日期：2026-10-21（Asia/Shanghai）｜出海教程反馈｜不含个人真名*
`},
{"id": "doc-booking-seeds-1021", "title": "预约+支付 雷达 seeds 草案（2026-10-21）", "theme": "市场研究", "date": "2026-10-21 20:48", "summary": "宽网 booking 词不作主提案；hot 优先 payment/Stripe/salon/deposit/Calendly alternative 等；供 trendradar seeds 粘贴。", "tags": ["雷达", "seeds", "预约", "Stripe", "关键词"], "source": "", "path": "freelancer/requirement_radar_seeds_booking_2026-10-21.md", "related_docs": ["doc-booking-keywords-1021", "doc-booking-reject-1021", "doc-radar-brief", "doc-radar-pulse-1022"], "content": `# requirement-trendradar seeds 草案（预约+支付 · 2026-10-21）

- **用途**：从 \`booking_keywords_daily_2026-10-21.md\` 短名单提炼，准备写入 requirement-trendradar 的 \`seeds.json\`。
- **性质**：可粘贴片段 / diff 草案；非已合并上游配置。
- **约定**：全文禁止真实人名；宽网词不作主提案词。

---

## 宽网词（不作主提案词）

以下仅作雷达宽扫或日表对照，**不要**放进主 \`hot\` / 主提案搜索：

- \`booking system\`
- \`online booking\`
- \`appointment scheduling\`

理由：高量高竞，易刷到模板占位、$15 整站、酒店/餐厅 \`reservation\` 撞车帖；提案应优先带支付/垂类/多服务者修饰词。

---

## hot（英文 · 主提案 / 雷达优先）

来自日表「中量中竞 + 支付修饰」及同级补词：

| # | seed | 备注 |
|---|------|------|
| 1 | \`booking system with payment\` | 预约+收款一体 |
| 2 | \`booking system Stripe\` | 明确 Stripe |
| 3 | \`salon booking with payment\` | 美业订金/预付 |
| 4 | \`salon booking Stripe\` | 美业+Stripe（竞偏低） |
| 5 | \`appointment scheduling with payment\` | 排期+预付 |
| 6 | \`Calendly alternative\` | 定制替代；提案强调目录+支付 |
| 7 | \`deposit booking system\` | 定金锁档 |
| 8 | \`online booking Stripe\` | 日表补：中量中竞+支付 |
| 9 | \`gym booking with payment\` | 日表补：健身约课+支付 |
| 10 | \`consulting booking with payment\` | 日表补：咨询预付 |
| 11 | \`nail salon booking\` | 日表补：美甲垂类中量中竞（提案再筛支付） |

---

## cold（英文 · 低频精准 / 冷启动观察）

| # | seed | 备注 |
|---|------|------|
| 1 | \`multi-provider booking\` | 多技师/多服务者 → smart.a |
| 2 | \`booking for companion service\` | 陪伴/陪玩垂类 → smart.a；合规慎 |
| 3 | \`class pack booking system\` | 次卡/课包核销 |
| 4 | \`calendar booking with payment\` | 低量低竞日历+收费 |
| 5 | \`discovery call booking\` | 顾问探索通话 |

---

## 拒单 / 降权提示（写入雷达旁注或日筛）

| 类型 | 信号 | 动作 |
|------|------|------|
| Beds24 类坑 | 酒店渠道管理器 / PMS / OTA 同步为主、非自建预约业务 | **拒**或标「渠道坑」 |
| $15 整站预订占位 | 预算极低、整站+预订一口价占位帖 | **拒** |
| 医疗 / HIPAA 轻诺 | JD 提 HIPAA / PHI / 诊所合规但预算与范围不清 | **拒或专项报价**；勿默认轻诺 |
| escort 敏感 | \`escort\`、成人约会违规表述 | **拒**；平台政策优先 |
| \`reservation system\` | 酒店/餐厅/场地撞车 | **降权**；再筛是否真服务预约 |

详见：\`/workspace/freelancer/booking_reject_rules_daily.md\`

---

## 可粘贴 JSON 片段（seeds.json 草案）

\`\`\`json
{
  "meta": {
    "source": "booking_keywords_daily_2026-10-21",
    "date": "2026-10-21",
    "note": "Wide-net terms excluded from primary proposal seeds"
  },
  "hot": [
    "booking system with payment",
    "booking system Stripe",
    "salon booking with payment",
    "salon booking Stripe",
    "appointment scheduling with payment",
    "Calendly alternative",
    "deposit booking system",
    "online booking Stripe",
    "gym booking with payment",
    "consulting booking with payment",
    "nail salon booking"
  ],
  "cold": [
    "multi-provider booking",
    "booking for companion service",
    "class pack booking system",
    "calendar booking with payment",
    "discovery call booking"
  ],
  "wide_net_not_primary": [
    "booking system",
    "online booking",
    "appointment scheduling"
  ],
  "reject_or_downrank_hints": [
    "Beds24-like channel/PMS traps",
    "$15 full-site booking placeholders",
    "medical/HIPAA light promises",
    "escort-sensitive wording",
    "reservation system (hotel/restaurant) downrank"
  ]
}
\`\`\`

---

## 建议 diff 草案（示意）

若已有 \`seeds.json\` 仅追加预约命名空间，可按类似结构合并（路径以实际仓库为准）：

\`\`\`diff
--- a/seeds.json
+++ b/seeds.json
@@
+  "booking_payment_2026_10_21": {
+    "hot": [ "...见上 JSON..." ],
+    "cold": [ "...见上 JSON..." ]
+  }
\`\`\`

合并前人工核对：不要把 \`wide_net_not_primary\` 误写入主提案热词。

---

*生成日期：2026-10-21（Asia/Shanghai）｜出海教程反馈启动｜不含个人真名*
`},
]
};