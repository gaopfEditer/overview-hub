# Freelancer 竞标观察（2026-10-12 公开列表抽样）

你举的例子：[Wix End-Lease Cleaning Site](https://www.freelancer.com/projects/wix/Wix-End-Lease-Cleaning-Site/details) —— 典型「模板站+报价计算器」，门槛低，容易变成百人竞标池。

## 高竞标（尽量别投 / 别当主战场）
- Wix / Shopify / WordPress「从零建站、换皮、电商小改」
- Logo / 短视频剪辑 / 社媒涨粉 / Facebook Ads 傻瓜单
- 纯数据录入、Lead list、$1–4/hr 采集
- 「AI Chatbot / n8n 入门作业」类无业务边界单
- 一次性「爬个 CSV」且描述极短、无反爬/监控要求

## 相对少竞标、更值得盯（公开页里技术门槛更高）
按当前 `jobs/web-scraping`、`jobs/python` 等列表抽样归纳（非全站统计）：

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
`Playwright` · `Chrome extension` · `Manifest` · `browser automation` · `Puppeteer` · `data pipeline` · `Docker scraper` · `NestJS` · `FastAPI` · `WhatsApp API` · `Odoo` · `price monitor`

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
