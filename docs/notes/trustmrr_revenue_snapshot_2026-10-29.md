# TrustMRR 公开流水快照 · 2026-10-29（Asia/Shanghai）

> 来源：`/workspace/出海变现/revenue-scrapers/` 走 TrustMRR **官方公开 API**（`/api/ai/discovery` + `/api/ai`），生成于 **2026-10-29 23:24 +08**（`revenue_boards_20261029_232444.json`，100 行）。完整分页需认证；勿硬爬。金额为站方展示值，研究旁证用，非投单/成交保证。

## 怎么用

- SEO / 产品兴衰：看 **fastest_growing** 与 **recently_added** 的品类与量级，对照周决策卡（W44 Go：browserbase alternatives）。
- 交易站对照：Acquire/Flippa 自报；本快照以 TrustMRR Stripe 校验口径为主。
- 复跑：`cd revenue-scrapers && source .venv/bin/activate && python scrape_revenue_boards.py --sources trustmrr --out out`

## 榜结构（本快照）

| board | 行数 | 含义 |
|---|---|---|
| recently_added | 25 | 近新增 |
| fastest_growing | 25 | 增长最快 |
| recently_listed_for_sale | 25 | 在售新挂 |
| best_deals | 25 | 交易向 |

命名产品约 **81**；其余为 Anonymous / 空名。

## 有名产品摘录（事实，不编造）

**流水/MRR 偏高（命名，多板可重复出现）：**

| 产品 | board（示例） | monthly≈ | MRR≈ | 品类 |
|---|---|---|---|---|
| Knightvision | best_deals | 34.7k | 7.9k | AI |
| Content Creators (creatorbid) | fastest_growing | 30.5k | 0 | Marketplace |
| Get Funneled | listed_for_sale / best_deals | 20.1k | 18.8k | Marketing |
| bytemail | fastest_growing | 18.5k | 0.2k | Productivity |
| Store Stock Checker | listed_for_sale / best_deals | 16.0k | 15.9k | Analytics |
| KreatorflowAI | fastest_growing | 10.0k | 6.5k | AI |
| PDF Vault | best_deals | 9.5k | 2.2k | Marketplace |
| WESAM.ai | fastest_growing | 7.3k | 7.3k | AI |

**增长榜命名示例（growth_30d 站方字段，量级差异大，宜当信号非精确 KPI）：** WESAM.ai、Content Creators、MetaMuse、KreatorflowAI、Deepnia、BasinCheck、bytemail、Intentsly、Skedix、kdpbook.io。

**recently_added 命名示例（多数极早/低流水）：** Charcoal UI（Developer Tools · monthly≈69）、BeamTake AI Clip Maker、Solofounders.help、Toll 等——适合观察新品类切口，不直接当「已验证大盘」。

## 与出海主线的对齐

- 主线仍是 **SEO 找词建站**；本表作「同类产品有无真实流水」旁证，不替代 Semrush/Trends/SERP 缺口。
- W44 Go 卡（云浏览器对比站 + Affiliate）优先；流水榜里 Marketing / Analytics / AI 工具密度高，可作选题发散，不据此改 Kill/Watch。
- 平台接单过滤不变：只追高客单；标多泛帖与低价 Gig 不做。
