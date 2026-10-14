# 【示例结构】案例分析卡片（占位）

> 这是 **【示例结构】** 空模板，不是真实案例。新增案例时复制本结构，在 `manifest.json` 的 `cases` 数组追加一条；`build_data.py` 会把条目上的**任意新字段**自动带进 `data.js`，前端按字段名渲染（无需改死 schema）。

## 固定建议字段

| 字段 | 含义 | 示例（待填） |
|---|---|---|
| **来源** | 平台 + 链接/职位 ID | Upwork apply URL / Fiverr Buyer request / 私域 |
| **单子类型** | 需求分类 | n8n 修复 · AI 聊天机器人 · 爬虫管道 · 修 Next/Stripe 站 … |
| **操作思路** | 如何筛选、提案、交付 | 关键词 → 匹配 demo → 提案要点 → milestone |
| **结果** | 结局 | 未投 / 已投待回复 / 面试 / 中标 / 完成评价 / 放弃及原因 |

## 可选扩展字段（自动生效）

在 manifest 该 case 对象上增加任意键即可，例如：

- `budget`：预算
- `proposal_count`：提案数
- `matched_demo`：使用的模板链接
- `related_docs`：文档 id 列表
- `has_evidence`：是否带截图/数字
- `date`：记录日期

## 填写注意

- 收入与结果不编造；未验证信息标明「未验证」。
- 可在 `path` 指向一篇更长的 Markdown 作为正文展开。
