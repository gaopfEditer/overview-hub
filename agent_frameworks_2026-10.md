# 开源 AI Agent / 客服 Agent 技术调研（截至 2026-10）

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
- **社区活跃度**：约 **43.5k** stars；`pushed_at` **2026-10-19**（当日仍有 CLI release）；MIT。近期有 1.x 系列（含 type-safe streaming `version="v2"` 等变更，接入前看迁移说明）。

### 2. CrewAI

- **地址**：https://github.com/crewAIInc/crewAI · https://crewai.com  
- **核心特点**：角色扮演式多 agent（Crew / Task）；上手快、教程多；适合「调研员 + 写手 + 审核员」一类协作任务。  
- **适用场景**：内部自动化、内容/研究流水线；**不优先**作为单线程客服会话内核。  
- **成熟度**：可用但需踩坑（多 agent 易吵、成本与可控性变差）；企业有 AMP 商业层。  
- **社区活跃度**：约 **59.9k** stars；`pushed_at` **2026-10-19**；MIT。活跃度很高。

### 3. AutoGen / AG2 / Microsoft Agent Framework（重大变更必读）

| 项目 | 地址 | 状态简述 |
|------|------|----------|
| **microsoft/autogen** | https://github.com/microsoft/autogen | 官方 README 明确：**已归档、不再积极维护**；新用户应迁到 Microsoft Agent Framework。约 **61.5k** stars（历史光环大）。 |
| **AG2（社区）** | https://github.com/ag2ai/ag2 · https://ag2.ai | AutoGen 精神续作；v1 起协议驱动，Classic（`autogen` import）拆到 ag2-classic 维护模式。约 **5.0k** stars；`pushed_at` 2026-10-19。 |
| **Microsoft Agent Framework** | https://github.com/microsoft/agent-framework · https://aka.ms/agent-framework | AutoGen + Semantic Kernel **官方统一继任者**；Python/.NET；2026 已宣传 1.0。约 **14.2k** stars；`pushed_at` 2026-10-19。 |

- **适用场景**：微软栈 / Azure 企业多 agent；研究型多 agent 对话。  
- **成熟度**：Agent Framework → **生产可用（企业向）**；AG2 → 可用但生态小于 LangGraph；**新项目不要再选 microsoft/autogen**。  
- **迁移文档**：https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen/

### 4. OpenAI Agents SDK

- **地址**：Python https://github.com/openai/openai-agents-python · JS https://github.com/openai/openai-agents-js  
  文档：https://openai.github.io/openai-agents-python/  
- **核心特点**：轻量；Agents / Tools / **Handoffs** / Guardrails / Sessions / HITL / Tracing；号称 provider-agnostic（OpenAI + 100+ LLM）；有 Realtime/Voice、Sandbox agents。  
- **适用场景**：快速搭「客服主 agent + 查单子 agent handoff」；与 OpenAI 模型深度绑定团队最省事。  
- **成熟度**：**可用偏生产**（API 仍在 0.x，但迭代极快）；适合中小项目与 POC。  
- **社区活跃度**：约 **30.1k** stars；最新 release **v0.24.0（2026-10-15）**；`pushed_at` 2026-10-19；MIT。

### 5. 2025–2026 值得关注的替代

#### Semantic Kernel → 一并看 Agent Framework

- **地址**：https://github.com/microsoft/semantic-kernel · https://aka.ms/semantic-kernel  
- **特点**：.NET/Python/Java 插件与企业集成；Microsoft 正把重心并入 Agent Framework。约 **28.7k** stars，仍有推送（2026-10-19）。  
- **成熟度**：存量维稳可用；**新项目优先 Agent Framework**。

#### PydanticAI

- **地址**：https://github.com/pydantic/pydantic-ai · https://pydantic.dev/pydantic-ai  
- **特点**：端到端类型安全；与 Pydantic 生态一体；tool 参数校验强；durable execution / MCP / OpenTelemetry / Evals。约 **20.7k** stars；`pushed_at` 2026-10-19；MIT。  
- **适用**：Python 后端团队、要强 schema 的查单/改预订 tools。  
- **成熟度**：**可用偏生产**（类型与测试友好）；复杂图编排不如 LangGraph 直观。

#### Mastra

- **地址**：https://github.com/mastra-ai/mastra · https://mastra.ai  
- **特点**：**TypeScript 优先**；agents + graph workflows（then/branch/parallel）；memory、RAG、evals、MCP；suspend/resume 做人机协作。约 **28.9k** stars；`pushed_at` 2026-10-19。  
- **注意**：core 多为 Apache-2.0，但仓库 license 标注为 Other——**生产前核验 `ee/` 企业许可**。  
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
- **特点**：组件化 pipeline + Agent（tool calling）；检索/文档处理成熟；Apache-2.0。约 **26.8k** stars；`pushed_at` 2026-10-19。  
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
- **社区活跃度**：约 **38.0k** stars；`pushed_at` **2026-10-19**；许可为 Other（开源但有商业条款，上线前读 LICENSE）。

### 2. Botpress

- **地址**：https://github.com/botpress/botpress · https://botpress.com  
- **核心特点**：偏 LLM Agent / 对话构建的开源 hub；可对接渠道；可视化与集成较多。约 **15.0k** stars；最近 push 约 **2026-10-13**；MIT。  
- **适用**：对话流产品化、少写代码；与 Chatwoot 可并存（Botpress 偏 bot，Chatwoot 偏 desk）。  
- **成熟度**：可用；云与开源边界要分清。  
- **活跃度**：中等偏活跃。

### 3. Rasa

- **地址**：https://github.com/RasaHQ/rasa · https://rasa.com/docs/rasa/  
- **核心特点**：经典 NLU + 对话管理；意图/故事/规则；可接渠道。约 **21.4k** stars。  
- **注意**：`pushed_at` 约 **2026-07-24**，节奏明显慢于 LLM agent 新秀；默认分支仍在 3.6.x 线。  
- **适用**：存量 Rasa 项目、强意图可控对话；**新开 LLM 客服不推荐从 Rasa 起步**。  
- **成熟度**：生产级（传统 chatbot）；对「RAG + tool calling」新范式不友好。

### 4. ChatterMate（客服垂直、体量小）

- **地址**：https://github.com/chattermate/chattermate.chat · https://chattermate.chat  
- **核心特点**：自述为开源 AI 客服平台——**AI chatbot + human handoff**、Shopify/Slack、可视化工作流；Apache-2.0。约 **142** stars；`pushed_at` 2026-10-19。  
- **适用**：想要「一整套客服」且能接受小项目风险时试用。  
- **成熟度**：**早期实验 / 可用但需踩坑**；不要当作 Chatwoot 替代品硬上生产。

### 5. 自定义「RAG 客服栈」（行业常见落地形态）

没有单一明星仓能覆盖一切；成熟团队常见拆法：

```
网站 Widget / Chatwoot
        │
   Agent 运行时（LangGraph 或 Agents SDK）
        ├─ retrieve_kb（向量库 / LlamaIndex / Haystack）
        ├─ get_order / update_booking（业务 API）
        └─ escalate_to_human（写回 Chatwoot / 工单）
```

GitHub 上大量 `customer-support-agent` demo（LangGraph 教程向）stars 通常 <1k，**适合抄结构，不适合当产品底座**。选框架看第一节，选前台看 Chatwoot。

---

## 三、有浏览器自动化集成的 Agent 开源项目

> **对明天客服任务的定位**：查单/改预订应走 **官方 API / DB tool**。浏览器自动化只用于「没有 API 的遗留后台」「竞品巡检」「填表 RPA」，不要塞进客服主路径。

### 1. Browser-use

- **地址**：https://github.com/browser-use/browser-use · https://browser-use.com  
- **核心特点**：Python AI 浏览器 agent；CDP/Chromium；可接 MCP；另有 Cloud 托管。约 **118.5k** stars；最近 release 约 **0.13.x（2026-10 中旬）**；`pushed_at` 约 2026-10-17；MIT。  
- **适用**：探索式网页任务、自动化操作无 API 站点。  
- **成熟度**：**可用但需踩坑**（稳定性/反爬/成本）；社区最大。

### 2. Stagehand

- **地址**：https://github.com/browserbase/stagehand · https://stagehand.dev  
- **核心特点**：Playwright 风格的 **act / observe / extract**；TS 为主（亦有多语言）；与 Browserbase 云浏览器配合；可与 Mastra 等组合。约 **25.7k** stars；`pushed_at` 约 2026-10-18；MIT。  
- **适用**：要「可预测步骤」的网页自动化（比纯自主 agent 更可控）。  
- **成熟度**：**可用偏生产**（确定性工作流场景）。

### 3. Skyvern

- **地址**：https://github.com/Skyvern-AI/skyvern · https://www.skyvern.com  
- **核心特点**：视觉 + LLM 驱动浏览器工作流；适合表单多、DOM 烂的遗留系统；有 workflow 能力。约 **23.2k** stars；`pushed_at` 2026-10-19。  
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

```
Chatwoot（Widget + 人工坐席台 + AgentBot/Webhook）
    └── LangGraph Agent
            ├── tool: retrieve_docs      → 向量库 / LlamaIndex
            ├── tool: get_order          → 订单 API
            ├── tool: update_booking     → 预订 API（写操作要确认/HITL）
            └── tool: handoff_human      → Chatwoot 转人工
```

**为什么：**

1. **LangGraph** 的 interrupt/HITL 与「改预订需确认」「不确定就转人工」天然契合；状态可持久化。  
2. **Chatwoot** 解决客服产品 80% 的脏活（会话、坐席、渠道），避免自研 desk。  
3. **业务动作用 API tools**，延迟低、可审计、可回滚；别用 Browser-use 去点运营后台。  
4. RAG 可先用「分块 + embedding + 一个 retrieve tool」一天内跑通；检索差再换 LlamaIndex/Haystack。

**第一天最小切片建议：**

1. 本地起 Chatwoot 或先用简单 FastAPI WebSocket 会话（若 Chatwoot 部署拖时间）。  
2. LangGraph：`FAQ retrieve → 无命中则拒答/转人工 → 有订单意图则 call get_order`。  
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

*报告文件路径：`/workspace/hub/agent_frameworks_2026-10.md`*
