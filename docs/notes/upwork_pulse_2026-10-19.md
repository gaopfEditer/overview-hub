# Upwork 市场脉搏 · 2026-10-19（Asia/Shanghai）

> 来源：`checked_2026-10-19_morning.txt` + 10-17/18 公开页复筛笔记。公开信息 only；QUALIFIED=0。

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

**主：** `n8n` · `Zapier migration` · `Playwright` · `web scraping` · `API integration` · `self-hosted` · `Next.js Supabase Stripe`  
**副（量/增速）：** `Lovable` · `Chrome extension scraper` · `Shopify return` / WISMO · `Beds24` guest messaging

## 低标 / 可打方向（对照 Freelancer 观察 + 长尾笔记）

- 避开：纯建站/Wix/Shopify 换皮、泛 AI chatbot、$&lt;100 拖拽自动化
- 优先：Docker/监控/失败重试的采集管线；Playwright+会话/表单；MV3 扩展；进现有系统的 RAG/Agent+审批；窄集成（WhatsApp/Odoo 等）
- 长尾产品向：Shopify 售后 Agent（WISMO+RMA+HITL）＞ Beds24 客信工单 ＞ 保修 Claim Agent

## 操作提醒

- 公开类目页可用；box `curl` 易吃 Cloudflare，勿当数据源
- `playwright` 类目 URL 现 **404**；用搜索词 `playwright|scraping` 替代
- 早/午硬筛提案少+预算够；晚间再按技能补短名单
