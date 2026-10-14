# Upwork 操作手册

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
   - `n8n OR Zapier OR Make automation`  
   - `AI integration OR chatbot OR RAG`  
   - `Playwright OR web scraping OR "fix scraper"`  
   - `Next.js Supabase Stripe`（修 AI 生成站）  
   - `self-hosted OR Docker automation`
3. **筛选**：Budget ≥ $150–300；跳过 $10–100 低价卷；优先「修复 / 稳定 / 自托管 / 支付 webhook / scrape→API」
4. **读 Job** → 对照 `upwork_titles_budgets.md` / 当晚 `screened_*.md` 决定是否投
5. **买 Connects**（通常 16–20+/单）→ 写 Proposal（英文短句、贴相关 demo 链接）→ Submit
6. **面试**：文字优先；要视频则准备 45–60s 自我介绍字幕
7. **合同**：Fixed 优先写清 milestone；Hourly 开 Time Tracker 规则先谈清
8. **交付**：源码 + 短 README + 约定天数 bugfix；客户留评

**日常节奏建议**：早/午硬筛（提案少 + 预算够）→ 晚间按技能契合补短名单（见 `screened_2026-10-14_evening.md`）。

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

**EN：** `AI automation freelancer`, `n8n automation`, `Zapier alternative n8n`, `AI chatbot for website`, `web scraping Playwright`, `Next.js Supabase Stripe fix`, `API integration developer`, `self-hosted automation`, `document OCR LLM`, `lead generation scraper`

**CN（研究用，客户多为英文）：** `Upwork 接单 AI 自动化`, `n8n 工作流接单`, `海外 SMB 自动化需求`, `Playwright 爬虫 接单`, `Lovable 修站`

交叉文档：`upwork_titles_budgets.md`、`requirements_backlog.md`、`smb_demand_clusters.md`、`profile_draft.md`。
