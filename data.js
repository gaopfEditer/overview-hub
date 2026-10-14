window.HUB_DATA = {
tracks: [{"id": "platform", "name": "平台接单", "desc": "Upwork/Fiverr/Freelancer：开发需求分类、能力边界、Proposal/项目模板库"}, {"id": "longterm", "name": "长线需求", "desc": "Google Trends 关键词分析、AI 新需求发现、从老牌网站弱点找切入点"}, {"id": "cases", "name": "案例资讯", "desc": "X/Reddit/Product Hunt/HN 独立开发与 AI 接单赚钱案例（未验证），附来源、账号与可抄打法"}],
docs: [
{"id": "t1-cap", "track": "platform", "title": "能力边界", "date": "2026-10-14 21:37", "summary": "拆开就是四个问题，后面每一端都按这四个问题看：", "tags": ["能力边界", "开发"], "source": "", "path": "/workspace/dev-topics/01_capability_boundaries.md", "has_evidence": false, "content": `# 软件开发专题：各端能力边界

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
{"id": "t1-growth", "track": "platform", "title": "Web 全栈 / Agent 成长方向", "date": "2026-10-14 21:39", "summary": "- 不要再学更多框架。 方向是：把传统全栈能力延伸到生产级 Agent 系统。", "tags": ["全栈", "Agent"], "source": "", "path": "/workspace/dev-topics/02_web_fullstack_agent_growth.md", "has_evidence": false, "content": `# 网站 + 全栈 + Agent 能力提升路线

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
{"id": "t1-proj", "track": "platform", "title": "项目推荐", "date": "2026-10-14 21:40", "summary": "核心模型：任何平台 = 系统给定的输入/输出 + 在有限资源上的存储/展示。做项目之前先问三件事：输入从哪来（谁给、什么格式、是否被允许拿）、输出到哪去（谁消费、是否有官方通道）、资源上限在哪（内存、CPU、配额、电量、平台规则）。", "tags": ["项目", "推荐"], "source": "", "path": "/workspace/dev-topics/03_project_recommendations.md", "has_evidence": false, "content": `# 03 · 项目推荐：按 ROI 排序的 12 个可落地项目（鹏飞版）

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
{"id": "t1-tech-checklist", "track": "platform", "title": "复杂技术清单（AI 开发参考）", "date": "2026-10-14 22:01", "summary": "按八个场景分组的 46 项复杂技术：用途、难点、可粘贴 AI 提示模板与常见坑，适合开发时当参考。", "tags": ["技术清单", "AI辅助", "接单"], "source": "", "path": "/workspace/dev-topics/04_complex_tech_checklist.md", "has_evidence": false, "content": `# 04 · 复杂技术清单：接单开发时的 AI Prompt 速查（鹏飞版）

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
{"id": "t1-titles", "track": "platform", "title": "Upwork 标题与预算", "date": "2026-10-14 21:40", "summary": "- 更新：2026-10-14 21:50（UTC+8）；方法：WebFetch 公开类目页/apply 页 + 本目录既有笔记（requirementsbacklog.md、checked2026-10-14.txt）。未登录、未绕过 Cloudflare。", "tags": ["Upwork", "预算"], "source": "", "path": "/workspace/upwork/upwork_titles_budgets.md", "has_evidence": false, "content": `# Upwork 职位标题 × 预算 × 竞争 参考表（建站 + 后端自动化）

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
{"id": "t1-backlog", "track": "platform", "title": "需求 Backlog", "date": "2026-10-10 07:34", "summary": "- Updated: 2026-10-09（Asia/Shanghai）", "tags": ["需求分类"], "source": "", "path": "/workspace/upwork/requirements_backlog.md", "has_evidence": false, "content": `# 接单需求列表（维护用）

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
{"id": "t1-smb", "track": "platform", "title": "中小企业需求聚类", "date": "2026-10-11 19:19", "summary": "互站交叉核对说明： 首页 meta 与列表标签显示任务类型以 软件开发、网站开发、二次开发、数据采集、移动端开发 为主；首页可见标签计数约：软件开发 14、移动端 6、网站开发 5、二次开发 5、数据采集 4（单页快照，非全站总量）。样例标题含：小程序/H5、PHP SaaS 二…", "tags": ["SMB", "需求分类"], "source": "", "path": "/workspace/upwork/smb_demand_clusters.md", "has_evidence": false, "content": `# 海外 SMB / 个体户软件与开发支出聚集区（US/UK/AU/EU 自由职业市场）

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
{"id": "t1-tplplan", "track": "platform", "title": "模板计划", "date": "2026-10-10 07:34", "summary": "目标：先做可复用「模板」，不是完整定制业务。每个都能离线演示、免费部署（GitHub + Vercel）、挂到个人站服务卡上。", "tags": ["模板"], "source": "", "path": "/workspace/upwork/templates_plan.md", "has_evidence": false, "content": `# 通用高影响模板计划（2026-10-09）

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
{"id": "t1-live", "track": "platform", "title": "在线模板与作品集链接", "date": "2026-10-14 21:46", "summary": "用法：在 proposal 中直接贴对应模板链接作为 demo，证明可快速交付。", "tags": ["模板", "作品集", "链接"], "source": "https://portfolio-site-orpin-three-91.vercel.app", "path": "docs/live_templates.md", "has_evidence": false, "content": `# 在线模板与作品集

| 模板 | 用途 | 链接 |
|---|---|---|
| Landing + Waitlist | 落地页 + 等候名单收集 | https://tpl-landing-waitlist.vercel.app |
| Form → Sheet | 表单提交写入表格 | https://tpl-form-to-sheet.vercel.app |
| Booking Calendar | 预约日历 | https://tpl-booking-calendar.vercel.app |
| Launch Audit Report | 上线审计报告 | https://tpl-launch-audit-report.vercel.app |
| 作品集 Portfolio | 个人作品集站点 | https://portfolio-site-orpin-three-91.vercel.app |

用法：在 proposal 中直接贴对应模板链接作为 demo，证明可快速交付。
`},
{"id": "t1-proposal", "track": "platform", "title": "Proposal 示例：Unbounce", "date": "2026-10-10 07:34", "summary": "ai", "tags": ["Proposal", "模板"], "source": "", "path": "/workspace/upwork/proposal_unbounce.txt", "has_evidence": false, "content": `ai

1) You need a one-click tool that turns any Claude-made HTML/CSS file (plus images) into a ready-to-publish Unbounce page, with native forms and buttons so conversions are tracked.

2) Approach: Unbounce can upload ".unbounce" page files (Classic Builder only). My first choice: I download one page from your account, learn the file format, then my tool generates a new .unbounce file with native elements (text, image, button, form). Playwright logs in, uploads it and waits until the page is ready. This is faster and more stable than clicking in the builder hundreds of times. Backup: Playwright builds the page in the builder, with one Custom HTML block per section plus native form and button elements.

3) Different structures: no templates. Playwright opens each file at desktop and mobile width and reads the real position and size of every element. Code maps text → text, img → uploaded image, form → native form, links → buttons. Anything too complex stays as Custom HTML. I can also give you 2–3 small rules for your Claude prompt so new files import more cleanly.

4) [ATTACH DEMO: link or Loom of the HTML-analyzer demo]
[1–2 TRUE sentences about a real automation/integration project you built.]

5) $500 fixed, 8–10 days:
- Milestone 1 ($150, 3 days): one of your real files live in Unbounce, so you can check the approach.
- Milestone 2 ($350): full one-click tool tested on 5 of your files, Loom video, written guide, 30 days bug support.

Question: Classic Builder or Smart Builder? And must pages stay fully editable in Unbounce, or is "looks the same + forms work" enough?

Thanks,
Pengfei
`},
{"id": "t1-profile", "track": "platform", "title": "Upwork Profile 草稿", "date": "2026-10-10 07:34", "summary": "Profile: https://www.upwork.com/freelancers/~01c29e20dd0d9fb0f8", "tags": ["Profile", "模板"], "source": "", "path": "/workspace/upwork/profile_draft.md", "has_evidence": false, "content": `# Upwork profile draft v3 — AI integration & automation — gaopf pengfei
Profile: https://www.upwork.com/freelancers/~01c29e20dd0d9fb0f8
Revised 2026-10-06 20:50 (UTC+8). The old scraping-first version is saved as \`profile_draft_scraping_v1.md\` (old overview: \`overview_scraping_v1.txt\`).
Positioning comes from \`niche_research.md\`. Client-facing text uses **simple, short English**. Each section has a Chinese note (说明).
Fill or delete every \`[X]\` / \`[placeholder]\`. Never publish an invented number, client or project.

> Reminder: Specialized Profiles were removed on May 28, 2026 (https://support.upwork.com/hc/en-us/articles/115013750068-Update-to-Specialized-Profiles-What-to-know). So: **one main profile = primary positioning**; secondary services = **Project Catalog** listings.

**New positioning**
- PRIMARY: AI integration + workflow/API automation. Connect business tools with code + n8n/Zapier/Make, add LLM features (chatbots, PDF/document extraction, AI agents), then deploy and maintain.
- SECONDARY (Catalog only): (a) audit / fix / finish existing web apps, incl. Lovable/Cursor/Bolt apps; (b) web scraping & browser automation.
- Differentiator: 10 years of real full-stack work (Vue / React / NestJS / Java / Python / Docker). Many automation freelancers are no-code only.

> 说明：为什么换方向：AI Integration 是 Upwork 2026 年开发类增长最快的技能（+178%），AI Chatbot +71%；提到 AI 的固定价职位预算中位数是 $158，全部职位是 $100（来源见 niche_research.md）。自动化职位的需求一般写得很清楚，适合文字沟通。你会写真代码，这一点是和只会拖拽 no-code 的人拉开差距的地方。

---

## 0. Still fix first (unchanged from v2)
- Verify ID and add a billing method (needed to buy Connects).
- Delete "3x the industry standard speed" and the buzzwords; replace the old front-end/Vue title.
- Raise the rate from $15 (section 5).
- Add real Employment History (10 years) and a 45–60s video intro with subtitles.
- Fill the portfolio (section 7) before bidding heavily.

---

## 1. Profile title (≤70 chars)

1. **AI Automation & API Integration Developer | Python, Node.js, n8n** (64) ← **recommended**
2. **AI Integration Developer | Automate Workflows, Fix & Finish Web Apps** (68)
3. **Full-Stack Developer | AI Features, Automations, API Integrations** (65)

> 说明：推荐 1。前半段 "AI Automation"、"API Integration" 是客户最常搜的词，后面 Python / Node.js / n8n 表明你既写代码也会 no-code 工具。方案 2 把副业务（修复应用）也写进去，但会稀释主定位。方案 3 以 "Full-Stack" 开头，最安全，但搜索匹配度弱一些。

---

## 2. Overview (1644 chars; first sentence ≈100 chars)

\`\`\`
I connect your business tools and add AI to them, so work your team does by hand runs by itself. I am a full-stack developer with 10 years of experience, so I write real code when no-code tools are not enough.

What I can do for you:
• Workflow automation with n8n, Zapier, Make, or custom Python / Node.js code. Connect your CRM, Google Sheets, Drive, Gmail, Slack, Stripe, Twilio and other tools through APIs and webhooks.
• AI features with OpenAI or Claude: chatbots that answer from your documents, data extraction from PDFs and emails, and AI agents that sort, summarize or reply.
• Clear results: AI does the reading and writing. Important decisions run as fixed rules in code, so results are predictable.
• Deploy and maintain: Docker, Linux servers, self-hosted n8n, logs, retries and error alerts.
• Also: fix or finish existing web apps (React, Vue, Next.js, NestJS, Supabase), including apps made with Lovable, Cursor or Bolt. Web scraping and browser automation with Playwright.

Why me:
• A real developer, not only no-code: Vue, React, NestJS, Java, Python, Docker.
• I use AI coding tools every day, and I test everything before delivery.
• You own all code, workflows and documents.

How I work:
1. You tell me your tools and the result you want.
2. I send a written plan, a fixed price and a timeline.
3. I build a small working part first, so you can check it early.
4. I deliver source code, a short guide and [X] days of free bug fixes.

I prefer written chat in English, so every step is clear and on record. I usually reply within [X] hours (UTC+8).

Tell me what you do by hand today. I will show you how to automate it.
\`\`\`

> 说明：
> - **开头**：第一句讲客户能得到的结果（手工活自动跑起来），第二句用真实的 10 年全栈经验说明"必要时写真代码"，这就是你和 no-code 选手的区别。
> - "AI does the reading and writing. Important decisions run as fixed rules in code"：很多客户担心 AI 乱做决定（比如今天看到的 COI 职位就明确要求这一点），这句话直接打消这个顾虑。
> - 副业务（修复应用、爬虫）只用一行带过，详细的放在 Project Catalog 里。
> - 所有 [X] 都换成真实数字，不确定就删掉那半句。

---

## 3. Skills (15)

Tags marked ✅ were seen as skill tags on live Upwork job pages or category pages today, so they exist. The others are very likely to exist; if one doesn't, use the backup.

| # | Skill | Backup |
|---|---|---|
| 1 | AI Agent Development ✅ | AI Development ✅ |
| 2 | API Integration ✅ | Application Integration ✅ |
| 3 | Automation ✅ | Business Process Automation ✅ |
| 4 | n8n ✅ | Automated Workflow ✅ |
| 5 | Zapier ✅ | CRM Automation ✅ |
| 6 | Make.com ✅ | Microsoft Power Automate ✅ |
| 7 | Chatbot Development ✅ | Natural Language Processing ✅ |
| 8 | OpenAI API | Artificial Intelligence ✅ |
| 9 | Python ✅ | FastAPI |
| 10 | Node.js ✅ | JavaScript ✅ |
| 11 | Google Sheets Automation ✅ | Google Apps Script ✅ |
| 12 | Docker | DevOps |
| 13 | Full-Stack Development ✅ | Web Development ✅ |
| 14 | Vue.js ✅ | React ✅ / NestJS |
| 15 | Web Scraping ✅ | Selenium ✅ / Data Extraction |

Extra if you have room (GigRadar reports the profile cap is now 20): Twilio API ✅, React ✅, NestJS, Selenium ✅, HubSpot ✅.

> 说明：1–11 服务主定位（AI + 自动化 + 集成），12–14 体现全栈和部署能力，15 支撑爬虫副业务。Upwork 现在只有一个主资料页，会根据客户搜索自动突出相关技能，所以主定位和副业务的关键词都要覆盖。添加时以 Upwork 下拉框里的准确名称为准。

---

## 4. Rate recommendation

Sources:
- Upwork rates guide (https://www.upwork.com/resources/upwork-hourly-rates, updated 2026-05-12):
  - AI Developers $30–50, AI Engineers $35–60, Chatbot Developers $30–61
  - API Developers $20–40, Python $20–40, Node.js $18–38
  - Marketing Automation Consultants $40–90
- Redwater Aug 2026 automation report (https://upwork.redwaterrev.com/archive/2026-08):
  - Median posted hourly rate for automation jobs $32.50, mean $36.91
  - Their bands: Entry $18–35, Experienced $35–50, Specialist $50–100
  - The largest bucket of jobs is $25–40/hr
- UpHunt (https://uphunt.io/blog/do-ai-skills-pay-more-on-upwork-2026): AI-mentioning fixed-price jobs have a median budget of $158, vs $100 for all jobs.

| Stage | Profile rate | Why |
|---|---|---|
| **Now** (0 reviews) | **$25/hr** | Inside the largest $25–40 bucket and below the $32.50 median, but no longer "suspiciously cheap" for 10 years of experience. Win first jobs with **small fixed-price** bids ($100–500), which don't lower your public rate. |
| After 3–5 five-star reviews + portfolio | **$35/hr** | About the market median; low end of AI Developers $30–50. |
| After 10+ reviews / repeat clients | **$45–60/hr** | AI Engineers $35–60, Chatbot $30–61; Redwater's "Specialist" band starts at $50. |

Always check your take-home amount after Upwork's variable 0–15% freelancer fee.

> 说明：v2 建议 $20–25（按爬虫方向）。现在主打 AI 集成，对应的官方区间更高，所以直接定 $25。头几单用固定价拿评价，有了 3–5 个好评再涨到 $35。

---

## 5. Project Catalog listings (3)

Create under Find Work → Your services → Create Project. Each listing can have up to 3 tiers. Review can take a few weeks for new freelancers, so submit in week 1.
Prices are suggestions: about $25/hr × estimated hours, set a little low for a zero-review seller. Market reference for the scraping listing: Upwork's web-scraper hire page lists single-site projects at $200–600 (https://www.upwork.com/hire/web-scrapers/).

### Listing 1 (primary) — "I will automate your workflow with n8n, Zapier, Make or Python, with AI"
| Tier | Scope | Price | Delivery |
|---|---|---|---|
| Starter | 1 workflow, up to 2 apps, up to 5 steps (e.g. form → CRM → Slack). Setup + short guide. | $120 | 3 days |
| Standard | 1–2 workflows, up to 4 apps, 1 AI step (OpenAI/Claude: classify, extract or summarize), error alerts, written guide. | $350 | 6 days |
| Advanced | Custom integration in Python/Node.js or self-hosted n8n on Docker: webhooks, retries, logs, AI document extraction, handover doc + 14 days support. | $800 | 12 days |

### Listing 2 (secondary a) — "I will audit and fix your Lovable, Cursor, Bolt or React/Vue web app"
Sell the **Audit** first; it leads to the bigger fix job (GigRadar advises a small paid audit or discovery under $500 as the first step).
| Tier | Scope | Price | Delivery |
|---|---|---|---|
| Audit | Read the code + run the app. Written report: top bugs, security (exposed keys, Supabase RLS, auth), deploy problems, plus a fixed-price fix plan. | $90 | 2 days |
| Fix | Audit + fix up to 5 issues (or 1 small feature) + redeploy. | $300 | 5 days |
| Production-ready | Audit + fixes + secrets/env setup, RLS/permissions, error handling and logging, deploy (Vercel or Docker), handover doc. | $800 | 10 days |

### Listing 3 (secondary b) — "I will build a Python web scraper or Playwright browser automation"
| Tier | Scope | Price | Delivery |
|---|---|---|---|
| Starter | 1 public site, up to 10 fields, CSV/Excel. Code included. | $80 | 2 days |
| Standard | JavaScript-heavy or login site, output to Google Sheets or a database, simple browser automation flow. | $250 | 4 days |
| Advanced | Scheduled scraper/automation on a server (Docker), multiple sites or pages, change alerts, guide + 14 days of fixes. | $600 | 7 days |

> 说明：Catalog 的好处是客户可以直接下单，不花你的 Connects。Listing 2 的 $90 审计是"入口单"：先拿到代码访问权限、建立信任，再报修复价格。只接合法、公开的数据抓取。

---

## 6. Proposal template — automation / AI integration jobs

\`\`\`
[1 sentence that repeats THEIR goal, e.g.
"You want new ServiceTitan job photos to go into the right Google Drive folder automatically, as step 1 of a bigger AI content system."]

My plan:
1. [Connect: which API/auth, e.g. "Connect to the ServiceTitan API with OAuth and listen for completed jobs."]
2. [Process: e.g. "Download the photos, create the folder, save job data as JSON."]
3. [AI part, if any: e.g. "AI only reads and extracts. Decisions stay as fixed rules in code."]
4. [Reliable: e.g. "Retries, logs and an alert if something fails. Docs and all code are yours."]

Tool choice: [n8n / Make / custom code, and WHY in 1 line, e.g. "n8n for the flow, small Python code for the file handling, so it scales."]

Proof: [ATTACH DEMO / portfolio link] [1 TRUE sentence about it]

Price: $[X] fixed. Time: [X] days. I can show a first working part in [X] days.

Question: [1 specific question, e.g. "Do your technicians mark which photos are approved, or should the tool take all of them?"]

Thanks,
Pengfei
\`\`\`

Rules:
- If the post has screening questions, a keyword (e.g. start with "READY") or numbered questions, answer them first, exactly and in order.
- If the client asks "start with 'ai' if you used AI to write it" and you did, **do it**. Being honest matters more than looking polished.
- Keep it under ~150 words if there are no screening questions. The first 2 lines must be about their job.
- Never claim experience you don't have. Use real demo links.

> 说明：自动化客户最在意三件事：你看懂了流程、你选工具有理由、出错时有兜底。模板就是按这三点设计的。最后一个具体问题能明显提高回复率。

---

## 7. Portfolio projects (fit the new positioning; each about 1–3 days with AI coding tools)

| # | Project | What it shows | Matches real jobs seen 2026-10-04/05 |
|---|---|---|---|
| 1 | **AI PDF/email extraction → Google Sheets + reminders.** Gmail/Drive intake → LLM structured extraction (dates, amounts, names) → rules in code (expiry, status colors) → Sheets + reminder emails. Mask 9-digit ID numbers before saving. Build it twice: once in n8n, once in Python. | Document AI, deterministic rules, Google APIs, both no-code and code | "Subcontractor Insurance (COI) Tracker" ($400) |
| 2 | **Website AI chatbot (RAG) + CRM lead capture.** Vue or React widget, answers from the company's docs, saves leads to HubSpot (free CRM) via API, Slack notification. | Chatbot, RAG, CRM integration, front-end | Chatbot / "AI Automation Developer (n8n, AI Agents & CRM)" ($4,500/mo) |
| 3 | **Production-grade webhook integration.** E.g. Stripe or form → CRM/Airtable + Slack, with webhook signature checks, retries, rate limits, logging, Docker deploy and an uptime check. Short "before/after hardening" write-up. | Production readiness, APIs, DevOps, your 10-year backend side | "ServiceTitan → Google Drive" ($750); "AI SMS Receptionist" (US-only, but same type of work) |
| 4 | **"Vibe-coded app rescue" case study.** Make a small Lovable/Bolt-style Supabase app (or use an open-source one), then audit it: exposed keys, missing RLS, no error handling. Fix it, deploy it, and publish the audit report. | Audit + fix service (Catalog listing 2) | "Lovable developer needed for an existing site" ($1,000) |
| (quick extra) | **HTML → page-builder analyzer (for the Unbounce bid):** a Playwright script that opens an HTML file at desktop and mobile width and outputs JSON of the text, images, forms and buttons with their positions, plus a screenshot overlay. 1–2 hours. | Browser automation, DOM parsing | Unbounce job ($500) |

For each item: cover image, 3 lines of "Problem → Solution → Result", tech stack, GitHub link and/or a 60–90s screen recording with subtitles. Use only demo data or public data.

> 说明：0 评价时作品集就是你的"评价"。这 4 个项目都对应今天真实在招的职位，做完可以直接在提案里写 "I built almost the same thing: [link]"。第 1 和第 2 个最优先，覆盖的职位最多。

---

## 8. Ready-to-send proposal — Unbounce job

Job: "Playwright / browser automation developer: one-click tool to import HTML files into Unbounce"
URL: https://www.upwork.com/freelance-jobs/apply/Playwright-browser-automation-developer-one-click-tool-import-HTML-files-into-Unbounce_~022106965767717552576/
Re-checked 2026-10-06 20:47 (UTC+8):
- $500 fixed, Expert, posted 2026-10-05 12:32 (UTC+8)
- 10–15 proposals, 0 interviewing
- Client: US, $6.1K spent, 33 hires
- Open to applicants from China

Fact check: Unbounce's documentation confirms you can upload ".unbounce" page files, but **only for Classic Builder pages** (not Smart Builder). Upload happens in the background, and Unbounce emails you when the page is ready. Source: https://documentation.unbounce.com/hc/en-us/articles/360000987863-Downloading-or-Uploading-an-Unbounce-Page . The .unbounce file format itself is not publicly documented, so the proposal frames it as something to test in Milestone 1.

\`\`\`
ai

1) You need a one-click tool that turns any Claude-made HTML/CSS file (plus images) into a ready-to-publish Unbounce page, with native forms and buttons so conversions are tracked.

2) Approach: Unbounce can upload ".unbounce" page files (Classic Builder only). My first choice: I download one page from your account, learn the file format, then my tool generates a new .unbounce file with native elements (text, image, button, form). Playwright logs in, uploads it and waits until the page is ready. This is faster and more stable than clicking in the builder hundreds of times. Backup: Playwright builds the page in the builder, with one Custom HTML block per section plus native form and button elements.

3) Different structures: no templates. Playwright opens each file at desktop and mobile width and reads the real position and size of every element. Code maps text → text, img → uploaded image, form → native form, links → buttons. Anything too complex stays as Custom HTML. I can also give you 2–3 small rules for your Claude prompt so new files import more cleanly.

4) [ATTACH DEMO: link or Loom of the HTML-analyzer demo]
[1–2 TRUE sentences about a real automation/integration project you built.]

5) $500 fixed, 8–10 days:
- Milestone 1 ($150, 3 days): one of your real files live in Unbounce, so you can check the approach.
- Milestone 2 ($350): full one-click tool tested on 5 of your files, Loom video, written guide, 30 days bug support.

Question: Classic Builder or Smart Builder? And must pages stay fully editable in Unbounce, or is "looks the same + forms work" enough?

Thanks,
Pengfei
\`\`\`

Before sending (发送前必须做):
1. **Keep the first line "ai".** The client asks for it if the proposal was written with AI help, and this draft was. Removing it would be dishonest, and the client may test for it.
2. Replace both \`[ATTACH DEMO]\` / \`[TRUE sentences]\` lines with real things. Best option: build the quick HTML-analyzer demo from section 7 (1–2 hours) and attach a Loom or GIF.
3. Only promise the 8–10 days if you can really start now. Change the numbers if needed.
4. You have never used Unbounce, so don't say you have. The plan shows you understand how it works, which is enough.

> 说明：这个单子提案少（10–15 个）、客户靠谱（花费 $6.1K，雇过 33 次），而且同时用到浏览器自动化、DOM 解析和 AI，非常适合你。技术关键是 Unbounce 只有 Classic Builder 支持上传 .unbounce 文件，所以提问里一定要问客户用的是哪个 Builder。分两个里程碑能降低双方风险：第一步先证明方案可行。
`},
{"id": "t1-portfolio", "track": "platform", "title": "作品集条目", "date": "2026-10-10 07:34", "summary": "生成时间：2026-10-08（UTC+8）。所有英文内容均为自建 Demo，不暗示任何客户项目；数字全部来自 README / 在线 Demo / 你提供的事实。", "tags": ["作品集"], "source": "", "path": "/workspace/upwork/portfolio_entries.md", "has_evidence": false, "content": `# Upwork 作品集条目（5 个 Demo 项目，可直接粘贴）

生成时间：2026-10-08（UTC+8）。所有英文内容均为自建 Demo，不暗示任何客户项目；数字全部来自 README / 在线 Demo / 你提供的事实。

## 中文说明：如何在 Upwork 添加（以下步骤来自 Upwork 官方帮助中心与官方指南）

来源 1（帮助中心，字段上限以此为准）：https://support.upwork.com/hc/en-us/articles/360016144974-How-to-enhance-your-freelancer-profile
来源 2（Upwork 官方 Portfolio Guide，2026-07-07 更新）：https://www.upwork.com/resources/portfolio-guide

1. 打开你的个人资料页，找到 Portfolio 区域，点 **(+)**（官方指南的说法是 “Add a portfolio”；也有 “Quick create” 可以从作品网址自动填充——本文件按手动填写准备，建议用手动方式）。
2. 依次填写：**Title**（≤70 字符）、**Role**（选填，≤100 字符）、**Project description**（≤600 字符）、**Skills & deliverables**（最多 5 个技能标签，从下拉框选）。
3. **Related Upwork jobs**：跳过（这些是自建 Demo，没有 Upwork 合同可关联）。
4. 添加内容：支持图片、视频、音频、文档、外部链接。按下文顺序上传截图，再加链接。每张图片下可以写一段简短说明（官方指南写 300 字符），下文已给出每张图的说明文字。
5. 选择封面缩略图（官方指南第 8 步 “Select thumbnail”）：用下文标为 “Cover” 的那张。
6. 点 **Preview** 检查桌面端/手机端效果；可先 **Save as draft**（草稿不会被客户看到），确认后点 **Publish**。

图片要求（官方）：推荐 1000×750 px，最小 400×300，最大 4000×4000；官方指南写单张最大 10MB。所有截图都已核对尺寸，均符合。

**注意 / 不确定的地方：**
- 两个官方来源有冲突：帮助中心写标题 70 / 描述 600 字符；官方指南写“标题只有 40 字符”、“描述最好 300 字符以内”。我按帮助中心的硬上限写（标题 ≤70、描述 ≤600），每条描述的前 300 字符已包含“问题 + 结果”；如果表单实际只允许 40 字符标题，请用每项给出的 **短标题（≤40）**。
- 帮助中心提示：**“certain .app domains” 的链接可能无法添加**。你的在线 Demo 都是 \`*.vercel.app\`，我无法登录验证是否被拒。如果添加失败，就只放 GitHub 链接（github.com 正常），截图照常上传。
- 帮助中心规定作品集里不能出现**你自己的**联系方式（邮箱、电话等）。截图里出现的是虚构诊所的 (555) 电话和 \`example.com\` / \`.demo.local\` 演示邮箱，不是你的，应该没问题，但审核规则我无法 100% 确认。
- Skills 名称：标 “verified” 的来自 profile_draft.md 里你之前在 Upwork 职位页上看到的技能标签；标 “not verified” 的我没能核实（Upwork 页面拒绝了我的抓取，返回 403），请以下拉框实际出现的名字为准，没有就用备选。
- 作品集排序：我没有找到官方关于“拖动调整顺序”的说明，所以不确定能否事后调整。**稳妥做法：按推荐顺序的倒序发布（最后发布第 1 项）**——这是猜测，Upwork 可能按发布时间倒序显示，请发布后检查。
- 字符数用 Python \`len()\` 统计，换行算 1 个字符。Upwork 的计数方式可能略有不同，所以每条都留了几个字符的余量（最高 599/600）。

## 推荐展示顺序（前 3–4 个最重要；官方建议把最相关的作品放在前 3–4 格）

1. **AI Document Extractor** —— 最贴近主定位（AI 抽取 + 自动化 + Google Sheets + n8n）。
2. **AI Website Chatbot (SiteBot)** —— 主定位里的 AI 聊天机器人。（线上 Bug 已修复，可以直接发布。）
3. **AI App Launch Rescue (NoteFlow)** —— 第二业务（修复/上线 AI 生成的应用），数字最有说服力。
4. **Contractor Lead Engine** —— AI 打分 + 数据管道，兼顾自动化和爬虫。
5. **Retail Price & MAP Watch** —— 爬虫/监控方向。

## ✅ 已修复（2026-10-08 18:00 左右）：SiteBot 在线 Demo 提问报错

已在 Vercel 加 \`ALLOWED_ORIGINS=https://ai-website-chatbot-six.vercel.app\` 并重新部署，带浏览器 Origin 提问已正常返回答案和来源。以下为原始记录：


2026-10-08 17:41（UTC+8）我在浏览器里打开 https://ai-website-chatbot-six.vercel.app/demo 提问 “When are you open on Saturday?”，聊天框回复 **“Origin not allowed”**。用 curl 复现：\`POST /api/chat\` 带 \`Origin: https://ai-website-chatbot-six.vercel.app\` 时返回 HTTP 403；不带 Origin 时正常返回 “Saturday: 9:00 AM – 1:00 PM (2nd & 4th Sat only) … Source: Office hours”。
原因（读代码得出）：\`src/lib/bot-config.ts\` 只自动加入 \`https://\${VERCEL_URL}\`，而 \`VERCEL_URL\` 是每次部署的专属网址，不是 \`-six.vercel.app\` 这个正式别名；\`data/bots/bright-smile-demo.json\` 里只有 localhost。
修法（我没有改动你的仓库或 Vercel）：在 Vercel 项目环境变量里加 \`ALLOWED_ORIGINS=https://ai-website-chatbot-six.vercel.app\` 后重新部署（或在代码里同时加入 \`VERCEL_PROJECT_PRODUCTION_URL\`）。修好后建议再截一张“问答 + 来源”的图作为封面，比现有 widget 截图（只显示留资表单）更有说服力。
证据截图：\`/workspace/upwork/portfolio_images/DO-NOT-UPLOAD_chatbot-origin-error-evidence.png\`（不要上传）。

---

## Project 1 — AI Document Extractor

**Title** (65/70)
\`\`\`
AI Document Extractor: PDFs & Emails to Google Sheets + Reminders
\`\`\`
Short title if the form only allows 40 (34/40): \`AI PDF Extraction to Google Sheets\`

**Your role** (75/100)
\`\`\`
Solo developer - self-built demo (design, Python code, n8n workflow, tests)
\`\`\`
**Project description** (572/600; first 300 chars carry problem + result)
\`\`\`
Problem: insurance certificates and invoices arrive as PDFs. Someone types the fields into a spreadsheet and has to remember every expiry and due date.

What I built: a pipeline that takes a PDF from a folder, upload or email, has an LLM (OpenAI or Anthropic) fill a fixed schema, and saves the row to CSV/SQLite and Google Sheets. Expiry status and reminder emails are decided by plain code, not the AI. Missing or doubtful fields are flagged for a person to check. Also built as an n8n workflow. 33 automated tests pass.

Self-built demo with fictional sample documents.
\`\`\`
**Skills & deliverables** (5/5)

| # | Skill (as typed in the dropdown) | Checked? | Backup if not in dropdown |
|---|---|---|---|
| 1 | Python | verified (profile research) | - |
| 2 | n8n | verified (profile research) | Automated Workflow |
| 3 | Google Sheets Automation | verified (profile research) | Google Apps Script |
| 4 | API Integration | verified (profile research) | Application Integration |
| 5 | Data Extraction | not verified | Artificial Intelligence |

**Links to add** (content type: Link)
- Code: https://github.com/gaopfEditer/ai-document-extractor
- (No live demo URL; the app runs locally / Docker. Do not add one.)

**Screenshots to upload, in this order**

| Order | File | What it shows | Caption to paste under the image |
|---|---|---|---|
| 1 | \`/workspace/cloud-agent-artifacts/bc-9002f550-a874-53f9-958f-d51d6e281795/dashboard.png\` | Cover. Tracker with status colors, review flag and reminder email preview. | Fictional documents read into the tracker. Green/amber/red status and the reminder emails are set by code; the row with a missing expiry date is flagged for review instead of guessed. (183/300) |

Optional / better image versions (made from the same screenshots, saved on the box):
- \`/workspace/upwork/portfolio_images/doc-extractor-dashboard-cover-4x3.png\` — Optional cover crop (top 1440x1080, 4:3) of the same dashboard.png, so the thumbnail is not a thin slice of a very tall image. Use it INSTEAD of dashboard.png as image 1, or as an extra cover.

---

## Project 2 — AI App Launch Rescue (NoteFlow)

**Title** (58/70)
\`\`\`
AI-Built App Launch Rescue: Security Audit, Fixes & Deploy
\`\`\`
Short title if the form only allows 40 (33/40): \`AI App Launch Rescue: Audit & Fix\`

**Your role** (75/100)
\`\`\`
Solo developer - self-built case study (audit, fixes, tests, Vercel deploy)
\`\`\`
**Project description** (597/600; first 300 chars carry problem + result)
\`\`\`
Problem: AI-built apps (Lovable/Bolt/v0 style) often work in a demo but are not safe to launch.

What I did: took NoteFlow, a half-built AI notes app, audited it and made it launch-ready. A static scan went from 7 issues to 0. Found: the OpenAI key was exposed in the browser bundle, OpenAI was called from the browser, notes allowed XSS, and there was no login. Fixed with server-side AI, JWT auth with per-user data, input validation, rate limiting, unit + end-to-end tests and CI. Lighthouse accessibility: 0.83 to 1.00. Includes a written audit report.

Self-built case study, not client work.
\`\`\`
**Skills & deliverables** (5/5)

| # | Skill (as typed in the dropdown) | Checked? | Backup if not in dropdown |
|---|---|---|---|
| 1 | Full-Stack Development | verified (profile research) | Web Development |
| 2 | React | verified (profile research) | JavaScript |
| 3 | Node.js | verified (profile research) | JavaScript |
| 4 | TypeScript | not verified | JavaScript |
| 5 | Web Application Security | not verified | Web Development |

**Links to add** (content type: Link)
- Live (after version): https://ai-app-launch-rescue.vercel.app
- Code + audit report: https://github.com/gaopfEditer/ai-app-launch-rescue

**Screenshots to upload, in this order**

| Order | File | What it shows | Caption to paste under the image |
|---|---|---|---|
| 1 | \`/workspace/portfolio-cases/launch-rescue-after.png\` | Cover. The launch-ready app: login, private notes, server-side AI summary. | After: users log in, notes are private per user, and the AI summary runs on the server, so no API key reaches the browser. (122/300) |
| 2 | \`/workspace/portfolio-cases/launch-rescue-report.png\` | The audit report: findings, severity and status. | Part of the audit report: each finding with its severity, all fixed in the after version. Checked with a static scan, Lighthouse and automated tests. (149/300) |
| 3 | \`/workspace/portfolio-cases/launch-rescue-before-xss.png\` | Before: shared notes, no login, raw HTML rendered from a note. | Before: no login, every visitor sees the same notes, and note content is rendered as raw HTML (XSS risk). (105/300) |

Optional / better image versions (made from the same screenshots, saved on the box):
- \`/workspace/upwork/portfolio_images/launch-rescue-report-cropped.png\` — Recommended INSTEAD of launch-rescue-report.png: same image with the large empty white area cut off (980x400, above Upwork's 400x300 minimum).

---

## Project 3 — AI Website Chatbot (SiteBot)

**Title** (60/70)
\`\`\`
AI Website Chatbot That Cites Its Sources and Captures Leads
\`\`\`
Short title if the form only allows 40 (33/40): \`AI Website Chatbot + Lead Capture\`

**Your role** (78/100)
\`\`\`
Solo developer - self-built demo (design, Next.js code, widget, Vercel deploy)
\`\`\`
**Project description** (591/600; first 300 chars carry problem + result)
\`\`\`
Problem: small businesses answer the same website questions all day (hours, prices, insurance), and generic chatbots make up answers.

What I built: SiteBot, a chat assistant that answers only from the business's own documents and names the source. Asked "When are you open on Saturday?", it replies "Saturday: 9:00 AM - 1:00 PM (2nd & 4th Sat only)" (Source: Office hours). When the docs don't have the answer, it says so and collects the visitor's name, email and need. Leads show on an admin page. It is added to a site with one script tag.

Self-built demo for a fictional dental clinic.
\`\`\`
**Skills & deliverables** (5/5)

| # | Skill (as typed in the dropdown) | Checked? | Backup if not in dropdown |
|---|---|---|---|
| 1 | Chatbot Development | verified (profile research) | Natural Language Processing |
| 2 | Artificial Intelligence | verified (profile research) | AI Development |
| 3 | JavaScript | verified (profile research) | React |
| 4 | API Integration | verified (profile research) | Application Integration |
| 5 | Next.js | not verified | Web Development |

**Links to add** (content type: Link)
- Live: https://ai-website-chatbot-six.vercel.app  (FIX FIRST - see warning below)
- Code: https://github.com/gaopfEditer/ai-website-chatbot

**Screenshots to upload, in this order**

| Order | File | What it shows | Caption to paste under the image |
|---|---|---|---|
| 1 | \`/workspace/portfolio-cases/chatbot-widget.png\` | Cover. Fictional clinic site with the chat widget open (lead form showing). | The assistant on a sample clinic website. When the documents don't answer a question, it offers this form instead of guessing. (126/300) |

Optional / better image versions (made from the same screenshots, saved on the box):
- \`/workspace/upwork/portfolio_images/chatbot-admin-live.png\` — Recommended as image 2 INSTEAD of chatbot-admin.png. Captured from the live /admin page on 2026-10-08 17:41 (UTC+8): shows "Public demo mode" and 2 sample leads with reason (buying_intent / unknown_question). Caption: "Admin view with sample leads and why each was captured (buying intent or unanswered question)."

---

## Project 4 — Retail Price & MAP Watch

**Title** (67/70)
\`\`\`
Retail Price & MAP Monitoring With Low-Noise, Evidence-Based Alerts
\`\`\`
Short title if the form only allows 40 (29/40): \`Price & MAP Violation Monitor\`

**Your role** (77/100)
\`\`\`
Solo developer - self-built demo (scrapers, matching, alert rules, dashboard)
\`\`\`
**Project description** (595/600; first 300 chars carry problem + result)
\`\`\`
Problem: brands watching reseller prices drown in alerts, get wrong product matches (1 unit vs a 2-pack) and false MAP violations (used items, shipping-inclusive prices).

What I built: a monitor for 60 SKUs across 5 sites. In the demo run, 3,133 raw price/stock changes became just 2 pushed alerts, via thresholds and a confirming second check. MAP board: 1 open violation with evidence and seller name; 1 used-item trap filtered out. Unsure product matches go to a review queue. Blocked pages are flagged, not alerted. CSV export.

Self-built demo; synthetic retailers, coffee-equipment niche.
\`\`\`
**Skills & deliverables** (5/5)

| # | Skill (as typed in the dropdown) | Checked? | Backup if not in dropdown |
|---|---|---|---|
| 1 | Web Scraping | verified (profile research) | Data Scraping |
| 2 | Python | verified (profile research) | - |
| 3 | Automation | verified (profile research) | Business Process Automation |
| 4 | Playwright | not verified | Selenium |
| 5 | FastAPI | not verified | Data Extraction |

**Links to add** (content type: Link)
- Live: https://price-monitor-demo-lac.vercel.app
- Code: https://github.com/gaopfEditer/price-monitor-demo

**Screenshots to upload, in this order**

| Order | File | What it shows | Caption to paste under the image |
|---|---|---|---|
| 1 | \`/workspace/portfolio-cases/price-overview.png\` | Cover. Overview: 60 SKUs, 2 pushed alerts vs 3,131 suppressed, per-source health. | 3,133 change signals detected, only 2 pushed after thresholds and confirmation. Source health shows which (synthetic) site failed instead of turning the failure into a false alert. (180/300) |
| 2 | \`/workspace/portfolio-cases/price-map.png\` | MAP board: one real violation with evidence, one used-item trap filtered. | A new item from an unauthorized seller below MAP is flagged with an evidence snapshot. A used/refurbished listing below MAP is filtered out, so it is not reported as a violation. (178/300) |

Optional / better image versions (made from the same screenshots, saved on the box):
- \`/workspace/upwork/portfolio_images/price-map-cropped.png\` — Optional INSTEAD of price-map.png: same image with the empty lower part removed (1280x700).

---

## Project 5 — Contractor Lead Engine (California)

**Title** (66/70)
\`\`\`
Contractor Lead Engine: Verified, Scored Leads From Public Records
\`\`\`
Short title if the form only allows 40 (35/40): \`Contractor Lead Engine (California)\`

**Your role** (71/100)
\`\`\`
Solo developer - self-built demo (data pipeline, AI scoring, dashboard)
\`\`\`
**Project description** (599/600; first 300 chars carry problem + result)
\`\`\`
Problem: bought lead lists bounce, include bad-fit firms and give no reason to reach out.

What I built: a lead engine for California contractors, starting from real public CSLB license data (Alameda + Sacramento). Every fact keeps its source and date. Owners are cross-checked against CSLB personnel, never guessed. Leads are scored Hot/Warm/Cold with evidence, and a personal first line is drafted for human approval. Only verified emails are exported. Demo run: 120 licenses, 93 after dedupe, 58 fit the ICP, 27 with a verified email; 28 Hot/Warm.

Self-built demo; sites synthetic, names masked.
\`\`\`
**Skills & deliverables** (5/5)

| # | Skill (as typed in the dropdown) | Checked? | Backup if not in dropdown |
|---|---|---|---|
| 1 | Lead Generation | seen as an Upwork category name (upwork.com nav), dropdown not checked | Lead List Building |
| 2 | Web Scraping | verified (profile research) | Data Scraping |
| 3 | Python | verified (profile research) | - |
| 4 | Artificial Intelligence | verified (profile research) | AI Development |
| 5 | Data Enrichment | not verified | Data Mining |

**Links to add** (content type: Link)
- Live: https://lead-engine-demo-liart.vercel.app
- Code: https://github.com/gaopfEditer/lead-engine-demo

**Screenshots to upload, in this order**

| Order | File | What it shows | Caption to paste under the image |
|---|---|---|---|
| 1 | \`/workspace/portfolio-cases/lead-detail.png\` | Cover. One lead: score with evidence links, sourced facts, verified owner, first-line draft waiting for approval. | Each lead shows why it scored Hot, the source of every fact, the owner cross-checked against CSLB personnel, and a first-line draft that a person approves or rejects. Names are masked in the public demo. (203/300) |
| 2 | \`/workspace/portfolio-cases/lead-quality.png\` | Data quality: CSLB source and download date, coverage, email verification mix, 50-row sample export. | Data quality report: where the data came from and when, how many owners were verified, and how emails were classified. Only "ok" emails are exported; guessed, role and catch-all emails are flagged. (197/300) |

---

## Notes per project (中文)

- **1 Document Extractor**：只有一张截图，原图 1440×2200 很长，缩略图可能被裁成很窄的一条；建议用 4:3 裁剪版做封面。“33 tests pass” 已核对：tests/ 里正好 33 个 \`test_\` 函数。没有在线地址，只放 GitHub。描述写的是 “saves to CSV/SQLite and Google Sheets”，README 里 Google Sheets 是可选配置（需要服务账号），这样写没有夸大，但如果客户问，要说明需要配置。
- **2 Launch Rescue**：你给的 “5 unit + 2/2 e2e” 与仓库代码一致（after/ 里 5 个单元测试），但 **REPORT.md 里写的是 “Unit tests 4/4 passed”**（旧数据）。为避免客户看到矛盾，描述里没写单元测试数量，只写 “unit + end-to-end tests”。建议你更新 REPORT.md 后再考虑写数字。Lighthouse 0.83→1.00 是在本地开发地址测的（REPORT 原文）。报告截图下方大片空白，建议用裁剪版。
- **3 SiteBot**：列表里的 \`chatbot-admin.png\` **不建议上传**：它显示 “no auth in this portfolio build” 和 “Leads (0) No leads yet”，与现在线上的管理页（Public demo mode + 2 条示例线索）不一致，看起来像没做完。我今天从线上管理页重新截了一张（见上）。描述里的问答内容已用 curl 在线核实。
- **4 Price & MAP Watch**：你写的是 “3,133 change signals in 7 days”。线上首页只写 “Detected 3133 total change signals; 2 pushed alerts”，“(7d)” 只标在 “Noise suppressed 3131” 上，而 README 说 demo 脚本模拟了 14 天。所以描述里写的是 “In the demo run”，没写 7 天。描述没写 Excel/Sheets 导出（README 有，但你给的事实只到 CSV），可按需加。
- **5 Lead Engine**：漏斗各阶段不是严格包含关系（27 个有效邮箱、28 个 Hot/Warm），所以用分号分开写，没有写成箭头链。CSLB 数据是真实公开数据，但公司网站是合成的、Demo 里的邮箱验证是离线 mock（README 写明），描述末尾已注明 “sites synthetic”。如果客户追问 “verified email” 的验证方式，要如实说明生产环境需接第三方验证服务。线上首页还显示 “Exportable leads 20”，没写进描述。
`},
{"id": "t1-niche", "track": "platform", "title": "细分领域调研", "date": "2026-10-10 07:34", "summary": "整体市场背景（很重要）：", "tags": ["调研"], "source": "", "path": "/workspace/upwork/niche_research.md", "has_evidence": false, "content": `# Upwork 细分方向调研（Niche Research）— 2026-10-06

> 目标：找出 **需求量最大 / 单价最高**、且适合 **AI 辅助的独立开发者**（10 年全栈：Vue/React/NestJS/Java/Python；中国 UTC+8；英语 Basic、偏好文字沟通；0 评价）实际能交付的方向。
> 所有时间均为 **UTC+8**。所有数字都来自下方列出的来源；没找到的数据会标"缺失"，不做估算。

---

## 0. 数据来源与注意事项（先读）

| 代号 | 来源 | 说明 |
|---|---|---|
| **[CAT]** | Upwork 公开分类页 \`https://www.upwork.com/freelance-jobs/<slug>/\`（2026-10-06 抓取） | 页面写着 "sample of the **N** <skill> jobs posted on Upwork"。**Upwork 没说明 N 的时间窗口**，只能用来做方向之间的相对比较，不能当成"每月职位数"。部分页面还显示 "median hourly rate"。 |
| **[RATES]** | https://www.upwork.com/resources/upwork-hourly-rates （2026-05-12 更新） | Upwork 官方给出的各技能时薪区间 |
| **[SKILLS26]** | https://www.upwork.com/research/in-demand-skills-2026 ；新闻稿 https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai （2026-02-04） | Upwork 官方 2026 热门技能报告 |
| **[GIGRADAR]** | https://gigradar.io/upwork/reports/2026/q2/all-industries | 第三方，2026 Q2 全平台数据 |
| **[UPHUNT-1]** | https://uphunt.io/blog/where-upwork-work-went-2026 | 第三方，2025-01 到 2026-04 的工具热度变化（基于 2,974,845 个职位） |
| **[UPHUNT-2]** | https://uphunt.io/blog/upwork-worth-it-2026-data | 第三方，平台总量趋势 |
| **[UPHUNT-3]** | https://uphunt.io/blog/do-ai-skills-pay-more-on-upwork-2026 | 第三方，AI 职位的预算溢价 |
| **[UPHUNT-4]** | https://uphunt.io/blog/vibe-coding-tools-upwork-cursor-lovable-2026 | 第三方，Lovable/Cursor 等 AI 建站工具的需求 |
| **[REDWATER]** | https://upwork.redwaterrev.com/archive/2026-08 | 第三方，自动化市场月报（Zapier/n8n/Make + CRM），2026 年 8 月 |

**整体市场背景（很重要）：**
- Upwork 总职位量在下降：2026 Q2 共 448,118 个职位，环比 -14.2%，连续第四个季度下降 [GIGRADAR]；2026 上半年月均 159,844，比 2025 上半年少 19.1% [UPHUNT-2]。
- **Web 开发是最拥挤的类别**：查看率 13.8%，回复率 3.7%，拿到第一次回复的平均成本 $51.24；Web Dev 占了 57.4% 的代理机构投标；固定价项目预算中位数 $163 [GIGRADAR]。
- **AI 有溢价**：提到 AI 的固定价职位预算中位数 $158，全部职位是 $100；提到 AI 的职位占比从 9.03%（2025-01）涨到 20.11%（2026-08）[UPHUNT-3]。
- 附带 Loom 视频的提案回复率 11.3%，不附带的 6.0% [GIGRADAR]。
- 其他海外平台（Fiverr、Contra、Toptal、Freelancer.com）**这次没有做量化调研**，没有可靠的可比数据，所以下面的结论都只针对 Upwork。

---

## 1. 每个方向的评估

评分 1–5（5 = 对他最有利）。"竞争"和"沟通负担"两列里，5 分代表竞争最小、沟通负担最轻。

| 方向 | 需求信号（带来源） | 预算 / 时薪（带来源） | 竞争 | AI 提速 | 沟通负担 | 适合度 | 复购/维护 |
|---|---|---|---|---|---|---|---|
| **A. AI 集成 + 工作流/API 自动化**（LLM 功能、agent、聊天机器人、n8n/Zapier/Make + 自写代码、CRM/Google/Stripe/Twilio 对接） | Automation 1,912、Chatbot 1,106、Zapier 829、n8n 525 [CAT]；8 月 Zapier 1,070 / n8n 960 / Make 421 个职位，GoHighLevel 600（"最耐用"）[REDWATER]；AI Integration +178%、AI Chatbot Development +71%（Coding & Web Dev 里增长最快）[SKILLS26] | Chatbot Dev $30–61、AI Engineers $35–60、AI Developers $30–50、API Developers $20–40、Marketing Automation Consultant $40–90 [RATES]；自动化时薪中位数 $32.50、均值 $36.91，$75+/小时的职位 78 个 [REDWATER]；AI 职位固定价中位数 $158 [UPHUNT-3] | 3 — 很多人做，样本职位有 50+ 提案；但写代码类需求会筛掉纯 no-code 的人。量比 2025-06 下降约 30% [REDWATER]，AI 集群下降 15.1% [GIGRADAR] | 5 | 4 — 很多职位是书面写清需求 + 筛选问题，部分要求一次交接通话 | 5 | 5 — 大多是分阶段项目，自动化需要长期维护 |
| **B. 全栈 Web 应用：修复 / 完成 / 接手现有项目（包括 Lovable、Cursor 做出来的 AI 应用）+ MVP** | Full-Stack 3,374、Web Development 2,814、React 1,425 [CAT]；Full Stack Development 是 Coding & Web Dev 需求第 1 名 [SKILLS26]；Lovable 2026-04 约 530 次/月（+627%），Cursor 约 450 次/月（+215%）[UPHUNT-4] | Full-Stack $16–35、React $20–38、Node.js $18–38 [RATES]；React 页面中位数 $49–150 [CAT]；Web Dev 固定价中位数 $163 [GIGRADAR]；样本 $1,000–$5,000，但也有 $10–$25 的压价单（见第 4 节） | 1 — 最拥挤（回复率 3.7%，每次回复 $51）[GIGRADAR] | 5 | 3 — 修 bug/接手项目可以纯文字；MVP 客户常要求开会 | 5 | 5 |
| **C. 爬虫 / 浏览器自动化 / 数据管道** | Web Data Scraping 537、Web Scraping 296、Web Crawler 166、Selenium 130、Bot Development 143 [CAT]；"Scripting & Automation" 是 Coding & Web Dev 需求第 8 名 [SKILLS26] | Web Scrapers $20–40、Python $20–40 [RATES]；Python 页面 $20–45 [CAT]；样本 $200–$2,500（见 jobs.md） | 3 — 没有量化数据；从提案数看属于中等 | 3 — 反爬、验证码、维护这些 AI 帮不上太多 | 5 — 需求是数据字段，最适合文字沟通 | 5 — 他现有的核心技能 | 4 — 网站改版后爬虫会坏，需要维护 |
| **D. Shopify 开发**（主题/Liquid、App、集成） | Shopify 2,115 [CAT]；+385 个职位/月，是传统建站里唯一在涨的 [UPHUNT-1]；Ecommerce Website Development 排第 6 [SKILLS26] | Shopify $15–29 [RATES]；页面中位数 $20–29 [CAT]；样本 $10–$400 | 2 | 3 — Liquid 好写，但设计和转化率优化靠人 | 2 — 视觉反馈要反复改 | 3 — 需要先学 Shopify 生态 | 5 |
| **E. 移动端**（React Native / Capacitor / Flutter） | Mobile App Development 1,295、Flutter 385 [CAT]；Mobile 排第 4 [SKILLS26] | Mobile $18–39、React Native $24–45 [RATES]；Mobile 页面写着起步 $30–40、中级 $60–75、最高 $125+ [CAT]；样本 $200–$5,000 | 2 | 3 — 签名、上架、真机测试仍然要手工 | 3 | 3 — 有 React 基础，但需要 Mac、真机和开发者账号 | 4 |
| F. WordPress / WooCommerce | WordPress 2,868、WooCommerce 469 [CAT]；**WordPress 每月少 2,162 个职位** [UPHUNT-1] | WordPress $15–28 [RATES]；页面 $20–35 / $15–30 [CAT] | 1 | 3 | 3 | 3 | 4 |
| G. 数据 / BI 仪表盘 / ETL | Power BI 179 [CAT]；ETL 分类页没抓（缺失） | Data Analysts $20–50、Data Visualization $25–45 [RATES] | 3 | 4 | 3 | 4 | 4 |
| H. 浏览器扩展 | Chrome Extension 42 [CAT]（量太小） | Chrome Extension $25–41 [RATES] | 3 | 5 | 5 | 5 | 3 |
| I. 落地页 / Webflow / Framer | Webflow 276 [CAT]；每月少 137 [UPHUNT-1]；Framer 没抓（缺失） | Webflow $20–45 [RATES]；页面 $30–140 [CAT] | 2 | 2 — 主要靠设计能力 | 2 | 2 | 3 |
| J. CRM 顾问（GHL/HubSpot/Salesforce） | GHL 600 / HubSpot 239 / Salesforce 68（8 月）[REDWATER]；HubSpot 页面 793，但很多是营销运营岗位 [CAT] | CRM Consultants $16–35、HubSpot $15–40、Salesforce App $25–40 [RATES] | 3 | 3 | 1 — 营销运营很依赖开会和英语 | 2 | 5 |
| K. 游戏开发 | Game Development 1,049 [CAT] | Game Dev $15–35、Unity $20–40 [RATES] | 2 | 2 | 3 | 1 — 需要美术和引擎经验 | 3 |
| L. QA / 测试 | Software Testing 884 [CAT]；Manual Testing 排第 9 [SKILLS26] | Software Testers $12–20、QA Engineers $20–60 [RATES] | 2 | 3 | 3 | 2 — 手工测试常要求特定国家或设备 | 3 |
| （参考）只做 Vue.js | Vue.js 73，大多发布于 8–15 天前 [CAT] | 页面 $19–70 [CAT] | — | — | — | 需求太小 | — |

---

## 2. 排名（Top 5）

| # | 方向 | 理由（一句话） |
|---|---|---|
| **1** | **A. AI 集成 + 工作流/API 自动化** | 增长最快（+178% / +71%），AI 溢价明确（$158 vs $100），需求写得清楚，最适合文字沟通；再把他的全栈和 Python 背景当成差异化 |
| **2** | **B. 修复 / 完成 / 接手现有 Web 应用（含 AI 生成的应用）** | 总量最大，AI 提速最明显；但竞争最激烈，要靠"接手 + 交付上线"这个窄定位避开从零建站的红海 |
| **3** | **C. 爬虫 / 浏览器自动化** | 他的现有优势，文字沟通负担最轻；量不大，适合做辅助方向和作品集证明 |
| 4 | D. Shopify 开发 | 量大且在增长，但单价低、偏设计；只建议接 App/API 集成类单子 |
| 5 | E. 移动端（Capacitor/RN） | 单价不错，但上架和真机测试成本高；只建议接"把现有 React/Lovable 应用打包上架"这类单子 |

**不建议主攻：** WordPress（在萎缩、价格低）、Webflow/Framer（靠设计）、游戏开发、手工 QA、只做 Vue、CRM 顾问（开会太多）。浏览器扩展可以做成一个 Project Catalog 服务，但不要当主定位。

---

## 3. 推荐定位

**主定位（Primary）：AI 集成与自动化开发者，有全栈功底**
- 一句话：用代码 + n8n/Zapier 把客户的系统（CRM、Google Workspace、Stripe、Twilio、行业 SaaS）连起来，再加上 LLM 能力（文档读取、聊天机器人、agent），并负责部署和维护。
- 标题候选（≤70 字符）：
  - \`AI Automation & API Integration Developer | Python, Node.js, n8n\`（64）
  - \`AI Integration Developer | Automate Workflows, Fix & Finish Web Apps\`（68）
  - \`Full-Stack Developer | AI Features, Automations, API Integrations\`（65）

**副定位 1：修复 / 完成 / 上线现有 Web 应用**（React/Vue/Next/NestJS/Supabase，包括 Lovable、Cursor 做出来的应用）
- 接单方式：先做一个小的付费审计/修复（GigRadar 建议首单控制在 $500 以内），再转成长期合作。

**副定位 2：爬虫与浏览器自动化**（Playwright/CDP）
- 保留现有优势，作品集最容易做出来；和主定位天然重叠（例如第 4 节里的 Unbounce 职位）。

**注意：** Specialized Profiles 已经下线（2026-05-28），所以只有一个主资料页。副定位用 **Project Catalog** 的服务来承载。\`profile_draft.md\` 现在的定位是"爬虫/自动化为主"，**需要按这里的主定位重写标题和简介**（这次没有改）。

---

## 4. 正在招人的样本职位（已逐个打开验证）

方法：先在分类页看到标题，再用 WebSearch 找到准确 URL，然后 WebFetch 打开职位页，读取 JobPosting JSON 里的 \`datePosted\`（UTC），换算成 UTC+8。验证时间是 2026-10-06，职位可能随时关闭。

### A. AI 集成 + 自动化
1. **AI Automation Developer – ServiceTitan API → Google Drive → Social Media Content**
   - URL：https://www.upwork.com/freelance-jobs/apply/Automation-Developer-ServiceTitan-API-Google-Drive-Social-Media-Content_~022106818730688698117/
   - 预算：固定价 $750，付费 POC，后续还有很多阶段
   - 发布：2026-10-05 02:48；提案数 50+；客户在美国
2. **Build a Subcontractor Insurance (COI) Tracker with Automatic Reminders**
   - URL：https://www.upwork.com/freelance-jobs/apply/Build-Subcontractor-Insurance-COI-Tracker-with-Automatic-Reminders_~022106791742843933907/
   - 预算：固定价 $400（Phase 1）
   - 发布：2026-10-05 01:01；提案数 50+
   - 内容：PDF → Google Sheets，LLM 读文档，判断规则写在代码里；要求一次交接通话
3. **AI Automation Developer (n8n, AI Agents & CRM) – Contract to Hire**
   - URL：https://www.upwork.com/freelance-jobs/apply/Automation-Developer-n8n-Agents-CRM_~022106699878954860992/
   - 预算：固定价 $4,500，按月计，每周 30 小时，先做一个付费测试
   - 发布：2026-10-04 18:56；提案数 50+；招 2 人，已雇 1 人；客户在马来西亚
4. **Playwright / browser automation developer: one-click tool to import HTML files into Unbounce**
   - URL：https://www.upwork.com/freelance-jobs/apply/Playwright-browser-automation-developer-one-click-tool-import-HTML-files-into-Unbounce_~022106965767717552576/
   - 预算：固定价 $500
   - 发布：2026-10-05 12:32；**提案数只有 10–15**
   - 客户：花费 $6.1K，33 次雇佣。同时适合 A 和 C 方向
5. **Full Stack Developer & AI Automation Expert – Shoe Store Web App & Order Automation**
   - URL：https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer-Automation-Expert-Shoe-Store-Web-App-Order-Automation_~022106699915427974989/
   - 预算：固定价 $550
   - 发布：2026-10-04 18:56；提案数 20–50；已雇 1 人
- 排除：*Node.js Developer for AI SMS Receptionist*（$800，2026-10-04 07:49）**只接受美国申请人**，他投不了；*AI Engineer for LLM Features*（$600）按搜索结果只限波黑申请人（没有打开页面验证）。

### B. 修复 / 完成 / 接手 Web 应用
1. **Full-Stack Developer for MVP**（把现有原型做成可上线的 MVP，期限 30 天）
   - URL：https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer-for-MVP_~022106493278214372347/
   - 预算：固定价 $4,000
   - 发布：2026-10-04 05:15；提案数 50+
2. **Lovable developer needed for an existing site – Contract to Hire**（Lovable + Supabase 维护和加功能）
   - URL：https://www.upwork.com/freelance-jobs/apply/Lovable-developer-needed-for-existing-site_~022104895934165541870/
   - 预算：固定价 $1,000
   - 发布：2026-09-29 19:27（约 7 天前）；提案数 50+
3. **Senior Mobile Engineer — Take Existing Lovable/React MVP to Production on iOS & Android**
   - URL：https://www.upwork.com/freelance-jobs/apply/Senior-Mobile-Engineer-Take-Existing-Lovable-React-MVP-Production-iOS-Android_~022105711350847756158/
   - 预算：固定价 $5,000
   - 发布：2026-10-02 01:28；提案数 50+；已雇 1 人。同时属于 E 方向
4. **Web Developer for Holding Company Websites**（多个网站 + 邮箱，偏 HTML/CSS）
   - URL：https://www.upwork.com/freelance-jobs/apply/Web-Developer-for-Holding-Company-Websites_~022107064318530966739/
   - 预算：固定价 $3,000
   - 发布：2026-10-05 19:04；提案数 50+；适合度一般
5. 压价单示例（**要避开**），说明这个类别里低价单很多：
   - *React NodeJs Backend Dev Quick Bug Fixes*：$25，2026-10-05 14:45
     https://www.upwork.com/freelance-jobs/apply/React-NodeJs-Backend-Dev-Quick-Bug-Fixes-MongoDB-AWS-Lambda-Assisted_~022106999232337225760/
   - *AI Full-Stack Developer Needed for SaaS Project*：$20，2026-10-05 17:58
     https://www.upwork.com/freelance-jobs/apply/Full-Stack-Developer-Needed-for-SaaS-Project_~022107047656470292512/
   - *Next.js Full-Stack Developer Needed for Company Portfolio Website*：$10，2026-10-04 03:15
     https://www.upwork.com/freelance-jobs/apply/Next-Full-Stack-Developer-Needed-for-Company-Portfolio-Website_~022106463166603384581/

### C. 爬虫 / 浏览器自动化（今天早些时候已验证，详见 jobs.md）
1. **Python Web Scraping Developer for Startup Funding Data**
   - 预算：$900；发布：2026-10-02 23:15
   - https://www.upwork.com/freelance-jobs/apply/Python-Web-Scraping-Developer-for-Startup-Funding-Data_~022106040454972128251/
2. **Developer Needed: Email Finder + Google Maps Scraper**
   - 预算：$700；发布：2026-10-01 19:40
   - https://www.upwork.com/freelance-jobs/apply/Developer-Needed-Email-Finder-Google-Maps-Scraper_~022105623829144091011/
3. **Bot Automation for Website Flow**
   - 预算：$2,500；发布：2026-10-02 15:51
   - https://www.upwork.com/freelance-jobs/apply/Bot-Automation-for-Website-Flow_~022105928736585500540/
4. **Cloud-Based Python Scraping Bot**
   - 预算：$200；发布：2026-10-03
   - https://www.upwork.com/freelance-jobs/apply/Cloud-Based-Python-Scraping-Bot_~022106262425458606528/
5. 还有上面 A-4 的 Unbounce Playwright 工具（$500）

### D. Shopify（参考）
1. **Shopify Ecommerce Website Developer Needed**
   - 预算：$400；发布：2026-10-01 22:57；提案数 50+
   - https://www.upwork.com/freelance-jobs/apply/Shopify-Ecommerce-Website-Developer-Needed_~022105673397631676193/
2. **Shopify Store Bug Fix**（结账问题）
   - 预算：$100；发布：2026-10-03 00:37；提案数 15–20
   - https://www.upwork.com/freelance-jobs/apply/Shopify-Store-Bug-Fix_~022106061052481846267/
3. **Shopify Developer Needed for Ecommerce Website Development**
   - 预算：$10（压价单）；发布：2026-10-03 13:38
   - https://www.upwork.com/freelance-jobs/apply/Shopify-Developer-Needed-for-Ecommerce-Website-Development_~022106257528550271008/

### E. 移动端（参考）
1. **Healthcare Booking App Development – Phase 1**
   - 预算：$3,000；发布：2026-10-05 00:10；提案数 50+，**已有 8 人在面试**
   - https://www.upwork.com/freelance-jobs/apply/Healthcare-Booking-App-Development-Phase_~022106778960661260320/
2. 上面 B-3 的 Lovable → iOS/Android 职位（$5,000）
3. *Mobile App Developer Needed – Finalization of Mirayne*（Capacitor + RevenueCat，$100–200）
   - **只通过搜索结果看到，没有打开页面验证**
   - https://www.upwork.com/freelance-jobs/apply/Mobile-App-Developer-Needed-Finalization-Mirayne-Daily-Habit-Tracker_~022106714938007781824/

**从样本里看到的规律：**
- 好的单子（$400–$5,000）基本都有 **50+ 提案**，只有 Unbounce 一个是 10–15 个。
- 不少优质客户在提案要求里明确写了"回答这 5 个问题"或"不要 AI 生成的套话"。
- 还要注意客户的**申请人地区限制**（比如 SMS Receptionist 只收美国人）。
- **建议的筛选条件：** 发布 24 小时内、提案少于 20 个、付款已验证、固定价 ≥ $300 或时薪 ≥ $25、不限地区。

---

## 5. 数据缺失 / 局限（诚实说明）
- 分类页的 "N jobs" 没有标明时间窗口，只能做相对比较。
- **没有拿到的数据：**
  - API Integration 分类页一直被 Cloudflare 拦截
  - React Native、Next.js、Node.js、ETL/Data Engineering、Landing Page、Framer、Salesforce 分类页没抓
  - "Bug fixing / maintenance" 没有对应的分类页计数
- 每个方向的"竞争"只有 Web Dev 有量化数据（GigRadar）；其他方向是根据样本职位的提案数做的定性判断。
- 第三方数据（GigRadar、UpHunt、Redwater）都是商业公司自己的爬取口径，各家不能直接相加或比较。Redwater 特别说明 8 月有两天数据缺失、后来补抓过。
- 其他海外平台（Fiverr、Contra、Toptal、Freelancer.com）没有做量化比较。
- 样本职位的状态是 2026-10-06 的快照，之后可能已经关闭或已雇到人。
`},
{"id": "t1-jobs", "track": "platform", "title": "职位记录", "date": "2026-10-10 07:34", "summary": "- Direct curl from the box → blocked. Every Upwork URL (category pages + the old RSS endpoint /ab/feed/jobs/rss) returned HTTP 403 \"Challeng…", "tags": ["Upwork", "职位"], "source": "", "path": "/workspace/upwork/jobs.md", "has_evidence": false, "content": `# Upwork public job scan — 2026-10-06 (UTC+8)

## How the scan went
- **Direct \`curl\` from the box → blocked.** Every Upwork URL (category pages + the old RSS endpoint \`/ab/feed/jobs/rss\`) returned **HTTP 403 "Challenge - Upwork"** (Cloudflare). The legacy job RSS feed is not usable.
- **WebFetch (fetch provider) → mostly worked.** The public category pages (\`/freelance-jobs/<skill>/\`) loaded and show a ~10-job "sample" each with relative "Posted N days ago" dates, but **no links**. \`/freelance-jobs/telegram-bot/\`, \`/telegram/\`, \`/playwright/\` are 404 (those slugs don't exist); \`/telegram-api/\`, \`/bot-development/\`, \`/selenium/\`, \`/data-scraping/\`, \`/web-crawler/\`, \`/cryptocurrency/\` do exist.
- **Exact job URLs** were then found with WebSearch (title search), and each job page below was opened with WebFetch to confirm budget, activity, and the exact \`datePosted\` from the page's JobPosting JSON. A few fetches hit a Cloudflare interstitial the first time; a retry worked.
- Caveat: the fetch provider may serve slightly cached pages. "Activity" numbers below are what the page showed when fetched (~20:15–20:45 UTC+8, Oct 6). A job may close at any time, so check it's still open before you spend Connects.
- Chrome-extension category: the only posts shown were 15–22 days old, so none of them made the 7-day list.

Posted times are converted from the page's UTC \`datePosted\` to **UTC+8**.

---

## Top 12 (ranked by fit for you)

### 1. Web Scraping Chinese Physiotherapy & Rehabilitation Clinics Database
- URL: https://www.upwork.com/freelance-jobs/apply/Web-Scraping-Chinese-Physiotherapy-Rehabilitation-Clinics-Database_~022106639212696994240/
- Budget: **Hourly $8–$20**, <30 hrs/week, 1–3 months, Intermediate
- Posted: 2026-10-04 14:55 UTC+8
- Activity: Proposals 20–50, Interviewing 2, Invites 4. Client from France (Montpellier), member since Aug 3 2026
- Summary: Wants an **explicitly China-based** scraping/data specialist to build a deduplicated, traceable B2B database of private physio/rehab clinics across China. Starts with a 20–30 clinic test, then a 500–1,000 clinic pilot.
- Fit: Strongest location match. You can read Chinese sources (Dianping/Amap/Baidu Maps, 企查查-style public registries) that most bidders can't. The rate is low, but it's a fast first review.

### 2. Web Scraping & Data Automation Engineer (News Monitoring Tool)
- URL: https://www.upwork.com/freelance-jobs/apply/Web-Scraping-Data-Automation-Engineer_~022106470731330876669/
- Budget: **Hourly** (no range shown), <30 hrs/week, 1–3 months, Intermediate
- Posted: 2026-10-04 03:45 UTC+8
- Activity: Proposals 20–50, Interviewing 1, Invites 1. Client from Ethiopia, brand-new account (member since Oct 3 2026)
- Summary: Scheduled scraper that tracks keywords/companies across news sites, dedups and categorizes articles, stores them in a DB, and exposes an API or simple UI.
- Fit: Matches your crypto-news monitoring work almost exactly (scrape → dedupe → DB → API/alerts).

### 3. AI-Powered Web Scraping & Automation Developer
- URL: https://www.upwork.com/freelance-jobs/apply/Powered-Web-Scraping-Automation-Developer_~022106853824332771723/
- Budget: **Fixed $100** (listed as an "MVP", with stated plans to expand), Expert
- Posted: 2026-10-05 05:07 UTC+8
- Activity: Proposals 50+, Interviewing 0. Client from the US: $3.1K spent, 34 hires
- Summary: Web-intelligence system. Multi-site scraping (Scrapy/Playwright), dedup and change detection, Postgres/Supabase, LLM classification and summaries, FastAPI, n8n, Docker deploy.
- Fit: The stack is close to 1:1 with yours (Playwright + LLM + Docker). The $100 budget only covers a first milestone. Pitch a small paid MVP slice.

### 4. Telegram Bot Developer for Legislative Updates on Waste Management
- URL: https://www.upwork.com/freelance-jobs/apply/Telegram-Bot-Developer-for-Legislative-Updates-Waste-Management_~022106715490125036539/
- Budget: **Fixed $40** (unrealistic for the scope), Intermediate
- Posted: 2026-10-04 19:58 UTC+8
- Activity: Proposals 20–50, Interviewing 1. Client from Ukraine, member since Sep 19 2026
- Summary: Telegram bot that monitors official legal and government sources (scrape/RSS/API), detects new or amended rules, and pushes deduplicated summaries to subscribers. Needs filters, an admin config, Postgres, and Docker.
- Fit: Squarely your Telegram bot + monitoring + Docker skill set. Bid a realistic fixed price, or treat it as a portfolio piece.

### 5. Build a wallet copy-trading bot
- URL: https://www.upwork.com/freelance-jobs/apply/Build-wallet-copy-trading-bot_~022104784370073071909/
- Budget: **Hourly** (no range shown), <30 hrs/week, 1–3 months, Expert
- Posted: 2026-09-29 12:04 UTC+8 (about 7 days ago)
- Activity: Proposals 20–50, Interviewing 1, Invites 1. Client from the US (Beverly Hills): $545 spent, 4 hires
- Summary: Bot that mirrors a target wallet's on-chain trades, including trades routed through a smart-contract relayer, into the client's own wallet. A replay/backtest script with realistic delay and slippage comes first. Solana is an optional phase 2. The client never shares keys.
- Fit: Good crypto/Web3 match. The client asks how you'd detect relayer-routed trades, so answer that directly in the first lines.

### 6. Python Web Scraping Developer for Startup Funding Data
- URL: https://www.upwork.com/freelance-jobs/apply/Python-Web-Scraping-Developer-for-Startup-Funding-Data_~022106040454972128251/
- Budget: **Fixed $900**, Expert
- Posted: 2026-10-02 23:15 UTC+8
- Activity: Proposals 20–50, Interviewing 0. Client from India (Delhi), new account (Oct 2 2026)
- Summary: Dataset of recently funded startups (US/EU/AU, last 30–90 days) with 16 fields (round, amount, investors, founders, source URL), plus a reusable Python scraper.
- Fit: Clear spec and a decent budget. Nobody is interviewing yet. Propose concrete sources and give a record-count estimate.

### 7. Developer Needed: Email Finder + Google Maps Scraper (Contract-to-hire)
- URL: https://www.upwork.com/freelance-jobs/apply/Developer-Needed-Email-Finder-Google-Maps-Scraper_~022105623829144091011/
- Budget: **Fixed $700**, Expert, may convert to full-time
- Posted: 2026-10-01 19:40 UTC+8
- Activity: Proposals 10–15, Interviewing 4, Invites 7. Client from India (Jaipur): $807 spent, 13 hires
- Summary: Large-scale Google Maps scraper (proxies, retries, anti-bot handling) plus an email finder/enrichment and verification system (SMTP, MX, Google Workspace and M365 behaviour).
- Fit: Good scraping-at-scale match with low proposal competition. The email-infra part is a stretch unless you've done SMTP verification.

### 8. Bot Automation for Website Flow
- URL: https://www.upwork.com/freelance-jobs/apply/Bot-Automation-for-Website-Flow_~022105928736585500540/
- Budget: **Fixed $2,500**, Intermediate
- Posted: 2026-10-02 15:51 UTC+8
- Activity: Proposals 50+, Interviewing 5. Client from Brazil, new account (Sep 9 2026), no spend history shown
- Summary: Vague brief: automate a specific website flow, test it thoroughly, and keep it running reliably.
- Fit: A Playwright/CDP specialty with a high budget. The brief is vague and the client is unverified, so ask what the site and flow are before committing, and make sure it's legitimate (e.g., not ticket or booking scalping that breaks the site's terms).

### 9. Cloud-Based Python Scraping Bot
- URL: https://www.upwork.com/freelance-jobs/apply/Cloud-Based-Python-Scraping-Bot_~022106262425458606528/
- Budget: **Fixed $200**, Entry level
- Posted: October 3, 2026 (page title; no exact time shown)
- Activity: Proposals 20–50, Interviewing 2. Client from India (Haridwar)
- Summary: Hourly scraper for Indian real-estate and auction sites → Google Sheet → AI picks the best deals → WhatsApp alerts. Runs on Render or AWS.
- Fit: Easy end-to-end build (scraper + Sheets + LLM + notifier) and a reusable portfolio piece. Low budget.

### 10. Job scapper tool for linkdin, naukari, indded, etc job portals with built in mcp (Contract-to-hire)
- URL: https://www.upwork.com/freelance-jobs/apply/Job-scapper-tool-for-linkdin-naukari-indded-etc-job-portals-with-built-mcp_~022105494661466925036/
- Budget: **Fixed $200**, Expert
- Posted: 2026-10-01 11:07 UTC+8
- Activity: Proposals 5–10, Interviewing 5, Invites 12. Client from India (Pune), new account (Sep 26 2026)
- Summary: Multi-portal job scraper (LinkedIn, Naukri, Indeed) with search filters, exposed as an MCP server.
- Fit: Scraping + AI-tooling (MCP) combo with few proposals. LinkedIn scraping carries ToS risk, so scope it to public endpoints.

### 11. Lead Web Scraper & B2B Data Extraction Agency — Automated Pipeline Ops (Contract-to-hire)
- URL: https://www.upwork.com/freelance-jobs/apply/Lead-Web-Scraper-B2B-Data-Extraction-Agency-Automated-Pipeline-Ops_~022104983911704537824/
- Budget: **Hourly $15–$35**, 30+ hrs/week, 6+ months, Expert
- Posted: 2026-09-30 01:17 UTC+8
- Activity: Proposals 20–50, Interviewing 0. Client from Canada, 1 hire. Last viewed "last week", so possibly going cold
- Summary: Ongoing pipeline: scrape Ontario local-business domains, verify email deliverability, auto-screenshot homepages, bulk CSV upload. **The cover letter must start with the word "DATA".**
- Fit: Long-term hourly scraping work that suits Python + Playwright screenshots. The client prefers agencies.

### 12. Python Automation Dev – Gmail/Odyssey Court Filings to Dropbox (Gmail API + Dropbox API + Playwright)
- URL: https://www.upwork.com/freelance-jobs/apply/Python-Automation-Dev-Gmail-Odyssey-Court-Filings-Dropbox-Gmail-API-Dropbox-API-Playwright_~022105992512561797307/
- Budget: **Hourly** (no range shown), 1–3 months, Intermediate
- Posted: 2026-10-02 20:05 UTC+8
- Activity: Proposals 50+, **Hires 1**, Interviewing 12, Invites 31. Client from the US: $32K spent, 243 hires
- Summary: Gmail notification → parse → Playwright authenticated PDF download → find the Dropbox case folder → assign the next sequential number → upload. Needs idempotency, an audit log, and an exception queue. The post has 7 screening questions.
- Fit: A perfect technical match from a strong client, but **one hire has already been made**. Low odds; apply only if Connects are cheap for you.

---

## Also seen on public category pages (not verified individually, no URL captured)
These came from category-page samples on Oct 6. I didn't look up their URLs, so they aren't in the list above:
- "Kalshi Bitcoin Trading Bot" — Fixed $250, posted ~4 days ago (cryptocurrency page). WebSearch did not find its URL.
- "Cannabis World Monitor Developer" — Hourly 30+ hrs/week, 6+ months, posted ~3 days ago (web-scraping page)
- "Extract attendee list from a Swapcard event platform (IAAPA Expo 2026)" — Hourly, posted ~4 days ago (web-crawler page)
- "Developer needed to build reusable county public records scraper for real estate wholesaling leads" — Fixed $300, posted ~4 days ago
- "AI Automation & Agentic Systems Engineer" (AfriTreasure) — Hourly 30+ hrs/week, posted ~22 hours before fetch (automation page)
- "In need of a telegram expert" — Hourly, Expert, posted ~6 days ago (bot-development page)
`},
{"id": "t1-demo", "track": "platform", "title": "Demo 需求：爬虫/获客", "date": "2026-10-10 07:34", "summary": "项目 A（抓取 + 监控 + 告警）", "tags": ["爬虫", "获客", "需求分类"], "source": "", "path": "/workspace/upwork/demo_requirements_scraper_leadgen.md", "has_evidence": false, "content": `# Upwork 作品集 Demo 需求调研：A) 抓取 + 监控看板　B) AI 获客（Lead Gen）

> 调研对象：pengfei（Upwork 自由职业者；Python / 抓取与接口逆向 / Playwright·CDP / 自动化 / AI 集成 / Docker / 浏览器扩展）
> 调研日期：2026-10-08（Asia/Shanghai）
> 文件路径：\`/workspace/upwork/demo_requirements_scraper_leadgen.md\`
> 原始笔记（逐条摘录 + URL）：\`/workspace/upwork/notes_raw.md\`

---

## 0. 结论速览（TL;DR）

**项目 A（抓取 + 监控 + 告警）**
- 客户真正要的不是“爬下来”，而是**“只在真正有意义的变化时提醒我，并且数据可信、不用我操心”**。证据里出现频率最高的是：告警噪音/只推新项（A1/A4/A5/A13 + Reddit + Visualping）、**跨站同款匹配与去重**（A4 称其为“最重要的技术挑战”，A13 称“extremely important”）、**稳定性/静默失败/被拦截**（A2/A3/A13 + Prisync 差评）。
- MAP 违规监控**确有痛点**（Reddit 多个帖子 + Prisync 把 MAP 锁在 $399/月档），但在本次抓到的 Upwork 职位里只出现 1 次（A8，且只来自搜索摘要），所以应作为**模块**而非唯一卖点。
- 推荐 Demo：**“Retail Price & MAP Watch”——面向一个中型消费品牌/经销商（示例品类：家用咖啡设备/小家电），监控 4 家零售站 + 1 个多卖家市场**；附带一套离线“沙盒零售站 + 时间模拟器”，保证 Demo 可离线、合法、可复现，还能演示反爬应对（限流/挑战页识别）而不触碰任何真实网站 ToS。

**项目 B（AI 获客）**
- 客户最痛的是**数据不准（退信、catch-all、过期）**和**不合格线索（连锁/加盟/单人小店/地域外/已关门）**，其次是**去重 + 已联系/禁联名单**、**找不到 owner/决策人直邮**、**缺少“为什么现在联系他”的信号与真实理由**。多个客户明确说“不是买库导出”“不是只上传 CSV 到 Instantly”。
- 本地服务业（HVAC/水电/屋顶等 trades）与医疗类（牙科、医美）是证据里最集中的垂直。B1（加州 trades，CSLB + Maps）需求最详细，且 **CSLB 有免费官方 CSV 下载**，数据合法可得。
- 推荐 Demo：**“Contractor Lead Engine (California)”——从 CSLB 官方公开数据 + 公司官网出发，做 owner 识别、邮箱发现与验证、按 ICP 的 AI 打分（带理由与证据链接）、招聘/年限等信号、基于真实事实的个性化首句、去重与禁联、推送 HubSpot/Google Sheets，并能一键导出“50 行样本 + 验证报告”**（几乎所有列表类职位都要求先交样本）。

---

## 1. 方法与证据边界（请先读）

- **Upwork 职位**：通过 WebSearch（\`site:upwork.com/freelance-jobs/apply ...\`）发现，再用 WebFetch 抓取公开职位页（未登录）。预算、发布日期（页面 JSON-LD 中的 UTC 日期）、客户信息均来自页面本身。标注“未抓取”的字段表示我没有拿到页面原文，不做猜测。
- **Reddit**：reddit.com 对抓取返回“blocked by network security / 需要登录”，**按要求未登录**。因此 Reddit 证据分两类：① 通过公开快照站 \`reddit.sentinel-team.org\` 抓到的帖子正文与评论（可直接引用）；② 仅从搜索结果拿到的**帖子标题**（标题本身是原文，可引用；正文内容未核实，不引用其中数字）。
- **工具评测**：Prisync/Clay 的评测来自 marketintelligencetools.com（该站汇总并逐字引用 G2/Capterra/Trustpilot/TrustRadius 评论）；Visualping 来自其官方博客（厂商自述）；Apollo 数据来自 MailCop（**邮箱验证厂商，有利益相关**，结论需打折看）；PhantomBuster 来自其官方帮助中心；Outscraper 来自其官方社区论坛帖子。
- **没有抓到/未核实**：G2/Capterra/Trustpilot 原站（部分 500/超时）、Indie Hackers 原帖（404）、LinkedIn 帖子（需登录，未尝试）。凡是只出现在搜索引擎“综述”里的说法，本文**不当作事实引用**。
- Upwork 上的“预算”经常是占位数（例如 A13 写了极其详尽的规格却只标 $200），解读时要谨慎：它更能说明“客户在意什么”，不一定说明“最终成交价”。

---

## 2. 项目 A：抓取 + 监控看板（价格 / 商品 / 列表变化）

### 2.1 真实 Upwork 职位（13 条）

| # | 职位标题（原文） | 预算 / 形式 | 发布日(UTC) / 客户 | 客户真正要什么 & 为什么（含原文短语） |
|---|---|---|---|---|
| A1 | [Automate price monitoring -](https://www.upwork.com/freelance-jobs/apply/Automate-price-monitoring_~022100609442313515937/) | $150 固定价，Entry；50+ 投标 | 2026-09-17；葡萄牙新客户 | 多店比价 + 降价提醒：“Collect prices from several online stores”，“quickly find a product and mark it for further tracking”，“notifications about price drops to my phone (via Telegram or WhatsApp) and by email”。核心诉求是**省心**：“stable and require minimal involvement from me”；还要求投标说明“what challenges might come up”。 |
| A2 | [Python Playwright Dynamic Scraper & Google Sheets Exporter - Contract to Hire](https://www.upwork.com/freelance-jobs/apply/Python-Playwright-Dynamic-Scraper-Google-Sheets-Exporter_~022107436617600555241/) | $35 固定价，Intermediate，可转长期 | 2026-10-06；印度客户（已花 $326，15 次雇佣） | “paginated e-commerce competitor prices with **anti-bot handling**”，“exporting **daily clean CSV rows** directly into **Google Sheets via the Service Account API**”。→ 数据要落到他已有的表格里。 |
| A3 | [Senior Data Engineer – E-Commerce Market Intelligence & ETL Pipelines](https://www.upwork.com/freelance-jobs/apply/Senior-Data-Engineer-Commerce-Market-Intelligence-ETL-Pipelines_~022095115612039138353/) | 未抓取预算 | 2026-09-02 | 目标是“high-security global retail marketplaces”，SPA、“strict network traffic management”；要求“resilient ... **without service interruption**”，输出“titles, prices, review counts, variants, and seller metrics”成“clean analytics-ready datasets”。 |
| A4 | [React Native / Flutter Developer Needed for Shopping Price-Tracking App Prototype](https://www.upwork.com/freelance-jobs/apply/React-Native-Flutter-Developer-Needed-for-Shopping-Price-Tracking-App-Prototype_~022103908428474109176/) | 按小时，30+ h/周，1–3 个月，Expert | 2026-09-26；美国；4 人面试中 | 第一阶段要“prove that the underlying technology and data architecture can work reliably and cost-effectively”。“**One of the most important technical challenges is cross-retailer product matching**”，要懂 “UPC, GTIN, EAN, MPN, model numbers, SKUs ... and **fallback matching when exact identifiers are unavailable**”；用户可设 “a target price, or a percentage-discount threshold”；要“**avoid unnecessary API calls and duplicate checks** as usage grows”；账号/仓库归客户所有。 |
| A5 | [Web Scraping and Telegram Alert Automation](https://www.upwork.com/freelance-jobs/apply/Web-Scraping-and-Telegram-Alert-Automation_~022097987030090589789/) | $50 固定价，Intermediate，长期 | 2026-09-10；新加坡 | “checks for new listings at regular intervals, **identifies duplicates**”，“ensuring **alerts are only sent for new items**”，“reliable, ongoing monitoring”。 |
| A6 | [Data Scraping Engineer – Repeatable Data Collection Pipeline](https://www.upwork.com/freelance-jobs/apply/Data-Scraping-Engineer-Repeatable-Data-Collection-Pipeline_~022101790739299336473/) | $200 固定价，Expert | 2026-09-20；美国芝加哥（已花 $10K，68 次雇佣） | “**This is not a one-time scraping project**”；按月跑以识别“**new, changed, inactive, and updated records**”；约 200,000 条；“Entity matching and deduplication”，“**Source/provenance tracking**”，“Retry/error handling and logging”；“production-quality and maintainable, **not a collection of one-off scripts**”。 |
| A7 | [Developer with Experience in Retail Product Catalogue Extraction](https://www.upwork.com/freelance-jobs/apply/Developer-with-Experience-Retail-Product-Catalogue-Extraction_~022105318608307945877/) | $300 固定价，长期 | 2026-09-30；英国伦敦（已花 $3.7K） | 欧洲某国生鲜零售商全量商品目录，“including where **no public API** is available”；字段含“prices, pack sizes, categories, ingredients, nutrition and availability”；痛点“**duplicate products, missing data and changes over time**”；要“repeatable process ... as more retailers are added”。 |
| A8 | [Shopify VA Long Term Employment (No Agencies Please)](https://www.upwork.com/freelance-jobs/apply/Shopify-Long-Term-Employment-Agencies-Please_~022097801497567406925/) | 未抓取 | — | ⚠️ 仅来自搜索摘要：该长期岗位职责中包含“weekly MAP-compliance monitoring across retailers”（摘要措辞，非原文）。说明 MAP 巡检目前常由 VA **手工**完成。 |
| A9 | [Power BI dashboard for multichannel](https://www.upwork.com/freelance-jobs/apply/Power-dashboard-for-multichannel_~022103128095703162024/) | 未抓取 | 2026-09-24 | 邻近需求：Amazon（“like on sellerboard”）/eBay/Kaufland/Shopify/Otto 多渠道看板，“No API integration”，每周放 CSV。→ 客户习惯 **CSV/Excel/BI** 交付。 |
| A10 | [Cloud-Based Python Scraping Bot](https://www.upwork.com/freelance-jobs/apply/Cloud-Based-Python-Scraping-Bot_~022106262425458606528/) | $200 固定价，Entry，长期 | 2026-10-03；印度新客户 | 每小时抓印度房产与拍卖网站，“sent to a Google Sheet, where **AI analyzes it and sends the best deals directly to my WhatsApp**”；部署在 Render/AWS，“so I can monitor it from my iPad”；“works continuously and delivers accurate results”。 |
| A11 | [(Web Scraping) Help Automate a an analytic report](https://www.upwork.com/freelance-jobs/apply/Web-Scraping-Help-Automate-analytic-report_~022105546845962767174/) | 按小时，<1 个月；50+ 投标，6 人面试 | 2026-10-01；美国 | 很具体的业务规则：“shows when a products **price ends in a 1** ... (for example $10.81, $4.91, $25.91) .This indicates a **SALE/CLEARANCE** item”；另要“a report that shows all the **new items added** to the site on a daily basis”。→ 价值在**领域规则**，不是抓取本身。 |
| A12 | [Automate Sales Policy and Dynamic Pricing](https://www.upwork.com/freelance-jobs/apply/Automate-Sales-Policy-and-Dynamic-Pricing_~022099456786312275549/) | **$1,000** 固定价，Expert，长期 | 2026-09-14；保加利亚（牙科耗材分销） | 约 4,000 SKU，跑在 Business Central；“competitor prices are tracked through a separate price comparison platform”；要把商品分成 “KVI, CORE, SLOW, and New Product”，并“determining the actual selling price using a **formula based on competitor prices**”，另有批发价公式。→ 监控数据最终要**驱动定价动作**。 |
| A13 | [Web scraping](https://www.upwork.com/freelance-jobs/apply/Web-scraping_~022095773706723606210/)（英国 business-for-sale 监控） | $200 固定价（规格极详尽） | 2026-09-04；英国新客户 | 每日监控 5 个出售企业网站（Rightbiz、BusinessesForSale UK、Daltons 等），“removes duplicates, tracks changes”，进 “Excel database and searchable web dashboard”；“**not a one-off scraping project**”；“Detect listings that have been removed/sold/withdrawn”；“must **not attempt to manufacture figures** that aren’t provided ... \`Not disclosed\`”；“**rules/regex + NLP/AI where appropriate, rather than relying entirely on an LLM API for every field**”；去重“**This is extremely important**”，要“One underlying business → multiple source listings”；保留价格历史（£1,500,000→£1,250,000）；告警含降价、“previously unavailable business becomes active again”；“scoring formula must be **configurable**”；可靠性清单“Retry logic, Rate limiting, Logging, Monitoring, **Failure notifications** ... Ability to resume after failure”；“respect applicable website terms, robots rules ... **Do not use techniques intended to bypass authentication, CAPTCHAs**”；“Please do not apply if your experience is limited to simple one-page scraping or copying website data into CSV files”；代码与基础设施归客户。 |

> 本轮未搜到明确以 “MAP monitoring” 为标题的 Upwork 职位（\`site:\` 搜索返回的都是 Merchant Center 合规类职位），这一点如实记录。

### 2.2 来自其他真实来源的痛点证据

**(1) 告警噪音 / “真正的变化”难判定**
- Reddit r/ecommerce《How are you keeping track of competitor prices without checking everything manually?》（[原帖](https://www.reddit.com/r/ecommerce/comments/1vlh071/)，[快照](https://reddit.sentinel-team.org/posts/1vlh071/snapshots/2026-08-12T02%3A19%3A44.123647Z)）：
  - 楼主：“manually checking product pages every day gets pretty time-consuming. Spreadsheets help, but you still have to remember to check them”。
  - 评论：“**The scraping part is the easy half** . What eats you is the diffing, deciding what counts as a real change and **not getting 200 alerts a morning because someone's price moved 2 cents**.”
  - 评论：“Spreadsheets fall apart around 15 to 20 SKUs, not because the sheet breaks but because nobody opens it every day.” / “Set the alert so it only fires on a real change, like a price drop past some percent or an item going out of stock ... **Digests get skimmed for three days then ignored.**”
  - 评论：价格之外要看“discounted, bundled, backordered, or suddenly out of stock”，并且需要历史，否则“easy to overreact to a promotion that only lasted 24 hours”。
- Visualping 官方博客《How Visualping Cuts False Positives (And Why We Had To)》（[链接](https://visualping.io/blog/how-visualping-cuts-false-positives)，2026-04-13，厂商自述）：用户反馈“too many alerts for changes that did not matter”，“you stop trusting the alerts”；其 AI 把 **83%** 的检测到的变化判为不重要（约 180 万监控样本）；噪音来源：轮播 banner、cookie 弹窗、时间戳、布局抖动；并承认短板：SPA，以及“Pages behind Cloudflare ... served a **challenge page** instead of the real content ... triggers a false positive”。

**(2) 数据准确性 / 被拦截 / 上线慢**（Prisync 评测，汇总 G2/Capterra/Trustpilot，[链接](https://marketintelligencetools.com/reviews/prisync/)，2026-08-05 发布、09-02 更新）
- “Wrong-price complaints recur across G2, Capterra and Trustpilot”。
- G2（2021，硬件行业）：“The onboarding of the items was very time-consuming, and it took **many months** before the accounts retrieved the correct data ... or that the URL is not retrieved at all due to **technical blockers at the resellers' websites**.”
- Capterra（2021）：“their system doesn't always track the sites as **blockers kick in**.”
- Trustpilot 一星（2024-10）：“feed never works, we keep on **selling at wrong price** and lost tone of money.”
- G2（2022，4 星）：“there are times when I get the wrong ones from the product page.”
- 同文对 DataWeave 的 G2 评论：匹配错误，“**a single unit matched to a multi-pack**”。

**(3) 价格 / 功能分档 / 合同**（同上 Prisync 评测）
- Prisync：$99/月 100 个商品（每天 3 次更新）；$199/1,000；**$399/5,000 的 Platinum 才有 MAP monitoring、price history、instant alerts**；API 另加 20%。
- Price2Spy：$39.95/月 500 URL；$157.95 档才有 MAP；G2 评论抱怨取消需“30 DAYS in advance”。

**(4) MAP 违规监控**
- Reddit 标题（正文未能抓取，仅引标题）：
  - r/FulfillmentByAmazon《How are you monitoring MAP violations? **Manual checking is killing us.**》[链接](https://www.reddit.com/r/FulfillmentByAmazon/comments/1t3v0md/)
  - r/smallbusiness《How do you actually monitor MAP / dealer undercutting **without checking retailer sites by hand?**》[链接](https://www.reddit.com/r/smallbusiness/comments/1vn4kfr/)
  - r/Amazonsellercentral《What actually cuts **MAP false positives** when you monitor resellers (the boring stuff that worked for us)》[链接](https://www.reddit.com/r/Amazonsellercentral/comments/1vrpjd2/)
  - r/ecommerce《Has anyone here been doing any MAP monitoring? ...》[链接](https://www.reddit.com/r/ecommerce/comments/1vn3osh/)
- 快照帖《Brands: how do you tell an authorized Amazon seller from a leak without waiting for a MAP complaint?》（[快照](https://reddit.sentinel-team.org/posts/1vqlxc7/snapshots/2026-08-18T10%3A09%3A38.388116Z)）：“The part I keep hearing is **false positives**. A **shipping-inclusive price or a used listing** gets treated as a MAP breach and **sales emails the wrong person**.” 评论建议把卖家名与经销商客户名单交叉核对，因为常是“a distributor reselling through a subsidiary or DBA”。

### 2.3 痛点排序（按出现频率 × 商业价值）

| 排名 | 痛点 | 证据 |
|---|---|---|
| 1 | **告警噪音：只想知道“有意义”的变化**（新上架、降价超过阈值、缺货/补货、促销开始），否则很快没人看 | A1、A4（目标价/百分比阈值）、A5（only new items）、A11、A13（按条件告警）；Reddit“200 alerts a morning”“Digests ... ignored”；Visualping 83% 不重要；MAP 误报帖 |
| 2 | **跨站同款匹配 & 去重**（标题不同、无条码、单件 vs 多件装、同一标的多站重复） | A4（“most important technical challenge”）、A6、A7、A13（“extremely important”）；DataWeave“single unit matched to a multi-pack”；Prisync“wrong ones from the product page” |
| 3 | **数据可信 + 抓取稳定**：被拦截、页面改版、静默失败、挑战页被当成“变化” | A2（anti-bot）、A3（without service interruption）、A10、A13（failure notifications / resume）、A1（stable）；Prisync“blockers kick in”“selling at wrong price”；Visualping challenge page 误报 |
| 4 | **历史 & 生命周期追踪**：新增 / 改动 / 下架 / 回归、价格历史，避免对 24 小时促销过度反应 | A6、A7、A11、A13（价格历史表、重新上架告警）；Reddit 评论 |
| 5 | **交付到客户已有工具 + 低维护**：Google Sheets、Excel、Telegram/WhatsApp/邮件、云端常驻 | A1、A2（Sheets Service Account）、A9（CSV/BI）、A10（Sheets + WhatsApp + 云端）、A13（Excel 多工作表 + 看板） |
| 6 | **成本可控、可扩展、所有权归客户**；SaaS 贵且关键功能锁高档 | A4（避免多余 API 调用、账号归属）、A13（托管/API 成本、代码归属）；Prisync MAP/历史锁在 $399 档、API +20%；Price2Spy 取消条款 |
| 7 | **从监控到动作**：MAP 违规取证、按竞品价格自动建议售价、领域规则（如“价格以 1 结尾=清仓”） | A8、A11、A12（$1,000，KVI/CORE 分类 + 定价公式）；Reddit MAP 系列帖 |

### 2.4 买家画像与预算

| 画像 | 典型职位 | 观察到的预算 | 他们买的是什么 |
|---|---|---|---|
| 小店主 / 个体卖家 / 套利者 | A1、A2、A5、A11 | $35–$150 固定价，或短期小时制 | 降价/新品提醒、表格日报；预算低但量大，适合“低价首单 → 维护月费” |
| 品牌电商运营 / 渠道经理（MAP） | A8 + Reddit MAP 帖 | Upwork 上未见独立预算；对照 SaaS：Prisync MAP 档 $399/月，Price2Spy MAP 档 $157.95/月 | 违规取证、减少误报、按卖家追责 |
| B2B 分销商 / 有几千 SKU 的零售商 | A7、A12 | $300–$1,000 固定价，长期 | 可靠的目录 + 竞价数据，驱动定价规则 |
| 做价格类产品的创业者 | A4 | 小时制、Expert、1–3 个月 | 架构可行性证明：匹配、调度、成本 |
| 交易/投资线索监控（房产、拍卖、出售企业） | A10、A13 | $200 固定价（但规格很重） | 新上架/降价/重新上架告警 + AI 结构化抽取 + 评分 |

整体：**固定价 $35–$1,000，中位数约 $200**（样本 8 个固定价）；另有 2 个小时制。很多 $200 的职位规格明显超出预算——Demo 的作用是让你能拿“已有底座 + 里程碑报价”去争取更高价位，而不是比谁更便宜。

### 2.5 Demo 必须展示的“杀手级功能”（逐条核对你的初始假设）

| 你最初设想的功能 | 证据结论 | Demo 里怎么体现 |
|---|---|---|
| 反爬稳健性 | ✅ **确认，但要换个说法**：客户要的是**“可靠 + 出问题能自知”**，而 A13 明确禁止绕过 CAPTCHA/登录。卖点应是：限流与退避、重试、断点续跑、**挑战页/空页检测（不当作价格变化）**、解析失败告警、站点健康面板 | 沙盒站故意返回 429 / 挑战页 / 改版 HTML，看板显示“检测到挑战页 → 本轮跳过 → 未产生误报” |
| 跨站商品匹配 | ✅✅ **最强证据**（A4/A6/A7/A13 + 差评） | GTIN/MPN 精确 → 品牌+型号归一 → 模糊标题 + **属性守卫（件数/容量/颜色/型号正则）** → 置信度；低置信进入人工审核队列；演示“单件 vs 2 件装被拒绝” |
| 变化显著性 / 降噪 | ✅✅ **最强证据**（A1/A4/A5 + Reddit + Visualping） | 每个 SKU 可配阈值（绝对值/百分比）、**连续 2 次确认才告警**、到手价（含运费）比较、冷却期、即时 vs 日报分级；首页显示“本周拦截噪音 N 条”及每条告警的“为什么提醒你” |
| MAP 违规检测 | ⚠️ **部分确认**：Reddit 痛点真实且误报是核心；SaaS 锁高档；但 Upwork 直接需求少 | 作为模块：仅比较“全新”条件、排除二手/捆绑、到手价口径可配、连续确认、截图+HTML 快照+卖家名+时间戳+MAP 版本作为证据包、授权卖家白名单（含 DBA 别名）、**人工确认后才发通知** |
| 历史图表 | ✅ 确认（A6/A13/Reddit） | 每个商品 × 每个零售商的价格/库存时间线，标注事件 |
| CSV / Sheets 导出 | ✅ 确认（A2/A9/A10/A13） | CSV、Excel（多工作表：Master / New / Price Changes / MAP / Change History，对应 A13 的工作表设计）、Google Sheets（Service Account）|
| **新增**：生命周期事件 | 证据：A5/A6/A11/A13 | new_listing / delisted / back_in_stock / relisted / price_drop / promo_start |
| **新增**：规则/评分可配置 + 领域规则 | 证据：A11（价格以 1 结尾）、A12（KVI 定价）、A13（configurable scoring） | YAML 规则引擎；内置示例规则“清仓价识别”“按竞品最低价 −x% 的建议售价（不低于 MAP/成本）” |
| **新增**：成本感知调度 | 证据：A4 | 按商品重要度分级巡检频率、ETag/Last-Modified/内容哈希跳过未变页面、可选“先打内部 JSON 接口，失败才用 Playwright 渲染” |
| **新增**：规则优先、AI 兜底的抽取，不编造 | 证据：A13（Not disclosed / 不全靠 LLM） | 字段抽取先 selector/正则，缺失才调 LLM；LLM 输出必须带原文片段，否则记为 \`Not disclosed\` |
| **新增**：交付与所有权 | 证据：A4、A13 | \`docker compose up\` 一键起；README 含部署/运维/成本估算；所有密钥走 \`.env\` |

### 2.6 MVP 规格（1–2 天可由 AI 编码代理完成）

#### 2.6.1 场景（Niche）
**“Retail Price & MAP Watch” —— 一个中型消费品牌/经销商（示例：家用咖啡设备，约 40–60 个 SKU：咖啡机、磨豆机、配件），监控 4 家授权零售商 + 1 个多卖家市场。**
- 选择理由（**判断，非直接证据**）：此类商品普遍带 GTIN/MPN（便于演示 A4 的“标识符匹配 + 无标识符兜底”），有单件/套装/颜色变体（演示 DataWeave 式误匹配防护），品牌常有 MAP 政策（演示 MAP 模块）。证据里 A 类需求的“垂直”并不集中（生鲜、牙科耗材、房产、出售企业都有），**集中的是功能模式**，所以选一个能把功能模式全部演示出来的品类。
- 同一引擎的**第二套配置**（可选加分，0.5 天）：\`presets/uk_business_for_sale.yaml\`——把“商品”换成“出售企业列表”，复用去重/历史/告警/评分，用于投 A13、A10 类职位。

#### 2.6.2 数据源（合法、可离线）
1. **内置沙盒零售站（主数据源，离线可跑）**：一个本地 FastAPI 应用，托管 5 个风格不同的假店铺：
   - \`shop-a\`：静态 HTML + 分页；
   - \`shop-b\`：前端渲染（需 Playwright），同时存在内部 JSON 接口（演示“逆向接口比渲染更快更稳”，在自建站上完全合法）；
   - \`shop-c\`：限流（429 + Retry-After）并随机返回“挑战页”（演示**识别**而非绕过）；
   - \`shop-d\`：定期改版 DOM（演示解析失败告警 + 选择器回退）；
   - \`market-x\`：多卖家市场（含二手、捆绑、运费、第三方卖家/DBA 名称）。
   - **时间模拟器**：\`/admin/tick?days=1\` 推进一天，按剧本注入：真降价、2 美分抖动、24 小时闪促、缺货/补货、下架/重新上架、MAP 违规（含“运费拉低到手价”“二手低价”两类误报陷阱）。
2. **公开练习站（演示真实 HTTP 抓取）**：\`https://webscraper.io/test-sites/e-commerce/allinone\`（官方说明：“test sites that you can use for training”）与 \`https://books.toscrape.com/\`（页面自称 Sandbox）。均已用 curl 验证可访问（HTTP 200）。
3. **客户真实站点**：仅作为“适配器模板 + 文档说明”，不在作品集里对真实零售商做演示抓取。

#### 2.6.3 架构
\`\`\`
docker-compose
 ├─ sandbox/      FastAPI 假店铺 + 时间模拟器（端口 8001）
 ├─ app/          FastAPI 主程序（端口 8000）
 │   ├─ adapters/        每个站一个 Adapter（httpx+selectolax / JSON API / Playwright）
 │   ├─ fetch/           限流(令牌桶/站点级)、指数退避、重试、代理槽位(可选)、挑战页/空页检测、HTML快照存档
 │   ├─ extract/         规则优先抽取 → 缺失字段才调 LLM（OpenAI 兼容；离线时用确定性规则/缓存样例）
 │   ├─ match/           GTIN/MPN 精确 → 归一化 → rapidfuzz + 属性守卫 → 置信度 → 人工队列
 │   ├─ diff/            观测 → 事件（阈值、连续确认、到手价、冷却、分级）
 │   ├─ map/             MAP 规则、授权卖家白名单(含别名)、证据包(截图/HTML/时间/卖家/MAP版本)
 │   ├─ rules/           YAML 规则引擎（清仓识别、建议售价等）
 │   ├─ notify/          Telegram Bot / Slack Webhook / SMTP；Demo 模式写入“Outbox”页面
 │   ├─ export/          CSV、Excel(openpyxl 多工作表)、Google Sheets(Service Account，可选)
 │   ├─ scheduler/       APScheduler：按 SKU 重要度分级频率；运行记录与断点续跑
 │   └─ web/             Jinja2 + HTMX + Chart.js（无前端构建）
 └─ db               SQLite 默认；DATABASE_URL 切 Postgres
\`\`\`
- 关键表：\`sources\`、\`listings\`(source_id, url, seller, condition, raw_title, gtin, mpn)、\`products\`(canonical)、\`matches\`(listing↔product, method, confidence, reviewed_by)、\`observations\`(ts, price, shipping, landed_price, in_stock, promo_flag, parse_confidence, snapshot_hash, page_state[ok/challenge/empty/parse_fail])、\`events\`(type, severity, reason_json, suppressed_bool)、\`map_policies\`、\`map_violations\`(status, evidence_paths)、\`runs\`(source, started, finished, ok/fail counts)。
- LLM：\`LLM_BASE_URL / LLM_API_KEY / LLM_MODEL\` 环境变量；无 key 时自动降级到规则 + 预置缓存，保证离线可演示。

#### 2.6.4 核心逻辑要点
- **匹配**：① GTIN/UPC/EAN 校验位正确且相等 → 1.0；② 品牌 + 型号（正则抽取 \`[A-Z]{2,}\\d{2,}\` 等）归一相等 → 0.9；③ rapidfuzz token_set_ratio ≥ 阈值且属性守卫全部通过（件数、容量 ml/g、颜色、电压）→ 按分数；任何守卫冲突（如 \`2-pack\` vs 单件）直接否决并记录原因；< 0.8 进人工队列，人工决定写回作为后续规则。
- **显著性**：\`|Δ| ≥ abs_min 或 |Δ%| ≥ pct_min\`，且同方向连续 2 次观测确认；\`page_state != ok\` 或 \`parse_confidence < 0.7\` 的观测**不参与**比较；同 SKU 同类事件冷却 N 小时；按严重度路由：MAP 违规/降价>10% → 即时；其余 → 每日摘要。每条事件保存 \`reason_json\`（触发规则、前后值、证据链接），前端显示“为什么提醒你”。
- **MAP**：只比 \`condition=new\` 且非捆绑；口径可选“标价 / 到手价”；连续 2 次低于 MAP → \`detected\`；生成证据包（Playwright 截图 + HTML 快照 + URL + 卖家 + 时间 + MAP 版本）；卖家匹配授权白名单（支持别名/DBA）；状态流转 detected → confirmed（人工）→ notified → resolved；**不自动给卖家发邮件**。
- **挑战页识别**：特征（状态码、\`<title>\`、页面长度骤降、关键选择器缺失、已知挑战关键词）→ 标记 \`challenge\`，本轮跳过并在健康面板计数，**不尝试绕过**。

#### 2.6.5 关键页面
1. **Overview**：追踪 SKU 数、24h 事件、未处理 MAP 违规、各站健康（成功率/上次成功时间）、“本周已拦截噪音 N 条”。
2. **Product Detail**：各零售商价格/到手价/库存时间线（Chart.js），事件标注，匹配来源与置信度。
3. **Events Feed**：事件流 + 每条“为什么提醒你”；可切换显示“被抑制的噪音”。
4. **Match Review Queue**：低置信候选对，左右对比（标题、图、属性），一键确认/拒绝。
5. **MAP Board**：违规卡片（证据截图、卖家、持续时长、是否授权卖家）、状态流转。
6. **Sources Health**：每站运行记录、429/挑战页/解析失败次数、选择器回退次数、失败告警。
7. **Rules & Export**：阈值/规则 YAML 编辑，导出 CSV/Excel/Sheets，Outbox（Demo 模式下的 Telegram/Slack/邮件预览）。

#### 2.6.6 1–2 天任务拆分（给 AI 编码代理）
| 时段 | 任务 | 验收 |
|---|---|---|
| D1 上午 | 沙盒站 5 个店铺 + 时间模拟器 + 剧本 JSON（60 SKU、14 天） | \`curl\` 各店铺可分页/接口可用；tick 后数据按剧本变化 |
| D1 下午 | 数据模型、Adapter×5、fetch 层（限流/退避/挑战页检测/快照）、APScheduler | 一次全量运行写入 observations；shop-c 的 429/挑战页被正确标记 |
| D1 晚 | 匹配模块 + 人工队列；diff/事件引擎 | 单测：2-pack 被拒；2 美分抖动/24h 闪促不告警；真实降价告警 |
| D2 上午 | MAP 模块 + 证据包；规则引擎（清仓识别、建议售价）；通知（Outbox + Telegram/Slack/SMTP 可选） | 两类 MAP 误报陷阱均未触发；真实违规生成截图证据 |
| D2 下午 | 看板 7 页（Jinja2+HTMX+Chart.js）、导出 CSV/Excel/Sheets | 一键 \`docker compose up\` → \`make demo\`（自动 tick 14 天）→ 看板有完整故事 |
| D2 晚（可选） | \`presets/uk_business_for_sale.yaml\` 第二配置；README + 2 分钟录屏脚本 | README 含架构图、成本估算、扩展到新站点的步骤 |

#### 2.6.7 Demo 演示脚本（录屏 2 分钟）
1. \`make demo\` → 模拟 14 天。2. Overview：显示“共检测到 N 次变化，只推送 M 条”（数字由剧本决定）。3. 打开一条降价告警，看“为什么提醒你”。4. Match Queue：系统拒绝“单件 vs 2 件装”。5. MAP Board：真实违规（带截图）vs 被识别为误报的“二手低价/含运费”。6. Sources Health：shop-c 返回挑战页 → 被跳过、无误报、已发失败通知。7. 导出 Excel（多工作表）+ Telegram 截图。

#### 2.6.8 Upwork 作品集文案（英文草稿）
> **Retail Price & MAP Watch — competitor monitoring that only alerts you when it matters**
> Monitors 5 retailers/marketplaces on a schedule, matches the same product across sites (GTIN/MPN + fuzzy title with pack-size/variant guards, low-confidence matches go to a review queue), stores full price & stock history, and fires alerts only on meaningful events (drop > X%, out-of-stock, new/delisted, MAP breach confirmed twice). Detects rate limits, challenge pages and layout changes instead of producing false alerts, and notifies you when a source breaks. MAP violations come with screenshot evidence and seller identity; used/bundle/shipping-only cases are filtered out. Exports to CSV, multi-sheet Excel and Google Sheets; alerts via Telegram, Slack or email. Python · FastAPI · Playwright · SQLite/Postgres · Docker. Runs fully offline with a bundled sandbox so you can try it in 2 minutes.

#### 2.6.9 映射到的真实职位
- 直接对口：A1（降价提醒 + 简单 UI + 多渠道通知）、A2（Playwright + Sheets）、A4（匹配 + 阈值 + 成本感知调度）、A5（只推新项 + 去重）、A11（领域规则：清仓识别 + 每日新品）、A12（规则引擎的建议售价）。
- 用第二配置/同一底座对口：A6、A7（目录、变化追踪、溯源）、A10、A13（列表监控、去重、历史、评分、Excel + 看板）。
- MAP 模块对口：A8 与 Reddit MAP 类客户。

#### 2.6.10 法律 / ToS 注意
- 作品集里**只抓自建沙盒和公开练习站**；不要展示对真实零售商的抓取结果或截图。
- 对客户项目：遵守目标站 ToS 与 robots；**不绕过登录、CAPTCHA 或其他访问控制**（A13 原文要求即如此）；Demo 的“反爬”只展示限流、退避、识别与告警。
- 存储的 HTML/截图仅作为证据与调试用途，设置保留期。

---

## 3. 项目 B：AI 获客（采集 → 富化 → 验证 → AI 打分 → 个性化 → CRM）

### 3.1 真实 Upwork 职位（14 条）

| # | 职位标题（原文） | 预算 / 形式 | 发布日(UTC) / 客户 | 客户真正要什么 & 为什么（含原文短语） |
|---|---|---|---|---|
| B1 | [Build a verified list of 1,500 California trade-business owners from CSLB + Google Maps - Contract to Hire](https://www.upwork.com/freelance-jobs/apply/Build-verified-list-500-California-trade-business-owners-from-CSLB-Google-Maps_~022106505803788113669/) | $4–$20/小时，30+ h/周，6+ 个月，Expert，可转长期 | 2026-10-03；美国（15 次雇佣） | “We run outbound for a **California business broker**”。“This is a list build with verification, not a bought list. **If your plan is to export Apollo or ZoomInfo, this is not the job.**” “Verified” = MillionVerifier “ok”（“not catch-all, not unknown”）+ 执照有效 + 抽检通过。规模代理指标：执照 15+ 年、25+ Google 评论、“a real website (not just a Facebook page)”、商业地址、“signs of a team (fleet, staff page, careers page)”；“**No one-man shops, no franchises, no national chains**”；“One row per company”。规则：“Delete every row that bounces, comes back catch-all or unknown, or that you pulled from any dataset **older than 6 months**”；“**Dedupe by domain, phone, and address**”；排除“never-contact list”；“Deliver the MillionVerifier results file”；先交 **50 行样本**；mobile 富化目标 60%+（“Clay or a waterfall of providers”）。字段含 CSLB 执照号、发证日、years in business、评论数、评分、**source**。 |
| B2 | [Clay Expert Needed — ICP-Based Lead List Building with Waterfall Enrichment & Buying Signals - Contract to Hire](https://www.upwork.com/freelance-jobs/apply/Clay-Expert-Needed-ICP-Based-Lead-List-Building-with-Waterfall-Enrichment-Buying-Signals_~022103174904619227797/) | $100 固定价，Intermediate，长期，可转长期 | 2026-09-24；加拿大；15–20 投标、8 人面试 | 瀑布式富化（Apollo, Prospeo, Dropcontact, Hunter）“to maximize verified contact match rate”；ICP（firmographic + technographic）；信号“**job changes, funding events, hiring surges, tech-stack changes**”；“**Score and rank leads by fit + signal strength**”；NeverBounce/MillionVerifier 验证“to keep bounce rate low”；“**De-duplicate against a list I'll provide (contacts already reached or in CRM)**”；“recommend ongoing since **signals decay fast**”；加分项 GDPR/DNC 过滤。 |
| B3 | [GTM / AI Automation Expert Needed — Build Clay + Instantly + n8n + HubSpot Outbound Sales System](https://www.upwork.com/freelance-jobs/apply/GTM-Automation-Expert-Needed-Build-Clay-Instantly-n8n-HubSpot-Outbound-Sales-System_~022102818355387660771/) | 小时制 <30 h/周，1–3 个月；“Budget - We are prepared to pay properly for someone with proven expertise.” | 2026-09-23；英国商用光伏小公司；20–50 投标、5 人面试 | “not looking for a generic cold-email marketer”；“**Scoring prospects against our Ideal Customer Profile**”；“Using AI to research **a genuine reason for approaching each business**”；“We want Clay/AI to go **considerably deeper than basic company size and job-title filters**”（信号：大屋顶、多站点、扩张计划、EV/车队电动化、净零目标）；“**Preventing duplicate outreach and maintaining suppression / opt-out lists**”；AI 不得承诺价格/节省额等，须升级给人；HubSpot 管道分阶段；“We do not want a system that stops working or becomes inaccessible if we stop using the freelancer”。 |
| B4 | [Developer Needed: Email Finder + Google Maps Scraper - Contract to Hire](https://www.upwork.com/freelance-jobs/apply/Developer-Needed-Email-Finder-Google-Maps-Scraper_~022105623829144091011/) | $700 固定价，Expert，长期 | 2026-10-01；印度；10–15 投标、4 人面试 | 邮箱查找/富化系统 + Maps 抓取：“Handle **validation, deduplication, accuracy, and fallback logic**”，“pagination, rate limits, proxies, retries, and anti-bot systems”；需懂“DNS, MX records, SMTP responses”；参照“Apollo, Hunter, RocketReach, ContactOut”；“We are not looking for someone who has only worked with basic scraping scripts.” |
| B5 | [Google map scraper expert](https://www.upwork.com/freelance-jobs/apply/Google-map-scraper-expert_~022090190994635950579/) | 小时制，<1 个月，Expert | 2026-08-19；美国大公司（已花 $61K，43 次雇佣） | 按区域交付，目标 100,000 条合格线索；“**Most Important Requirement: Valid Phone Numbers**”；“Exclude **permanently closed** businesses”；“Remove duplicates within each territory and across the complete database”；“Standardize business names, phone numbers, addresses, and URLs”；“Identify phone type as mobile, landline, toll-free, or unknown”；“usable business leads, **not simply a large volume of unverified records**”；质检项含“Businesses located **outside the assigned territory**”“Incorrect business categories”；先交 50 条样本；“Use lawful data-collection methods”；后续“refreshing the database, replacing invalid records, identifying newly opened businesses”。 |
| B6 | [Google maps scraping](https://www.upwork.com/freelance-jobs/apply/Google-maps-scraping_~022107190710199258957/) | 未抓取 | 2026-10-05 | 指定类别（beauty_salon, makeup_artist ...）+ “Coordinates of a given rectangle”，测试通过后跑欧盟多国；字段 name/address/url/email/description。 |
| B7 | [HVAC Lead List Builder — Google Maps Research (Owner Names + Contact Info)](https://www.upwork.com/freelance-jobs/apply/HVAC-Lead-List-Builder-Google-Maps-Research-Owner-Names-Contact-Info_~022105510537160690502/) | 页面片段显示 “Budget: $0.30-$ 0.50”（每条） | 未抓取全文；大多伦多地区 | Owner 名来自评论中“the name that appears most frequently”；“If no name appears in reviews, leave the Owner Name field blank — **do not guess or fabricate**”；“No franchises or large national chains”；先 10 条样本，之后 200–300+，可持续下单。 |
| B8 | [Clay enrichment and personalization build (one-off project)](https://www.upwork.com/freelance-jobs/apply/Clay-enrichment-and-personalization-build-one-off-project_~022106227353115863619/) | 未抓取 | 2026-10-03 | “Validate emails using Mail Validator”，“Fill missing data through Apollo enrichment”，“Create **AI-powered personalization columns with custom first lines and snippets**”，“Personalize based on each prospect’s company and role”，“Deliver a clean, **send-ready** list”。 |
| B9 | [Cold Email Campaign + Clay Expert Needed — Full Setup, Lead Generation & Outreach](https://www.upwork.com/freelance-jobs/apply/Cold-Email-Campaign-Clay-Expert-Needed-Full-Setup-Lead-Generation-Outreach_~022102016047735746587/) | 未抓取 | — | 目标客户：HVAC、Dentists、Plumbers、Roofers、Pest control、Chiropractors 等本地商家；流程“**Lead Source → Enrichment → Decision Maker → Email Verification → Qualification → AI Personalization → Campaign**”；“We are NOT looking for someone who simply uploads a CSV into Instantly”；关注 SPF/DKIM/DMARC、域名信誉。 |
| B10 | [AI & Outbound Automation Specialist - Clay, Lemlist & GTM Workflows etc.](https://www.upwork.com/freelance-jobs/apply/Outbound-Automation-Specialist-Clay-Lemlist-GTM-Workflows-etc_~022098732755590129245/) | 未抓取 | — | “Signal-based outreach (e.g. company changes, hiring activity, relevant events or online activity)”，“AI-powered personalization”，“CRM integration”；“We are **not looking for a large or overly complex system**”。 |
| B11 | [Lead Generation Bot for Swedish Market / Job Posting Scanner](https://www.upwork.com/freelance-jobs/apply/Lead-Generation-Bot-for-Swedish-Market-Job-Posting-Scanner_~022100497112974327575/) | **$30–$60/小时**，<1 个月，Expert | 2026-09-17；德国柏林（人力派遣公司）；11 人面试、14 个邀请 | 扫描公开招聘与企业招聘页，找“companies that are **actively hiring** workers”，“turn them into structured sales leads”，导出到 DB/Sheets/CRM；行业：建筑、工业生产。→ **招聘 = 购买信号**。 |
| B12 | [n8n AI Lead Qualification & CRM Automation specialist.](https://www.upwork.com/freelance-jobs/apply/n8n-Lead-Qualification-CRM-Automation-specialist_~022099045854234513162/) | $400 固定价，Intermediate | 2026-09-13；法国（已花 $3K）；50+ 投标 | “At the moment, our team handles several of these steps manually”；“Lead/Form → n8n Webhook → Validation → **Duplicate Check** → **AI Qualification** → Lead Score → CRM → Notification → Logging”；“Hot / Warm / Cold”；抽取“Budget indicators, Urgency ... Recommended next action”；“Handle invalid data, API failures, duplicates”。 |
| B13 | [Lead Scraper / Lead Generation Specialist — Medspa & Aesthetics Practices](https://www.upwork.com/freelance-jobs/apply/Lead-Scraper-Lead-Generation-Specialist-Medspa-Aesthetics-Practices_~022099919461866131591/) | $200 固定价，Expert | 2026-09-15；美国营销代理（已花 $16K，31 次雇佣）；4 人面试 | 长岛/纽约 0–2 年内新开的医美/IV/功能医学诊所（PLLC/PC）；优先信号“pre-launch/coming soon ... or **recently opened**”；“Email address (**verified — not just guessed format**)”；“**Source** (where the record was found)”，“**Date sourced**”；建议数据源：NY 州公司注册库、**DOB permit records (buildout/renovation signals)**、Google Maps；先 25–30 条试单；“this list will be used for **compliant cold outreach**”。 |
| B14 | [Lead Researcher — Independent Dental Clinic Owners in Los Angeles](https://www.upwork.com/freelance-jobs/apply/Lead-Researcher-Independent-Dental-Clinic-Owners-Los-Angeles_~022101039874317106038/) | $60 固定价，Expert | 2026-09-18；美国洛杉矶 | “This is NOT a database scraping job”；“**Zero bounce rate is the standard**”；来源：加州牙医执照查询 search.dca.ca.gov、Google Maps、Yelp、LinkedIn；“direct personal email with **no info@ contact@ admin@** or front desk emails”；“Independent clinics only with 5 to 15 providers. **No dental chains. No DSOs.**”；用 Hunter/MillionVerifier/ZeroBounce 验证。 |

> 另有一个“AI Automation Developer | API Integrations, CRM Automation & AI Agents”职位在搜索摘要中出现（商业保洁行业，Outscraper→Apollo→LLM→HighLevel），但抓取时页面显示“This job is no longer available”，**不计入证据**。

### 3.2 来自其他真实来源的痛点证据

**(1) 联系人数据不准 / 退信 / catch-all**
- Reddit 标题（正文未能抓取，不引用其中细节）：
  - r/GrowthHacking《Apollo data quality dropping in 2026? Our **bounce rates jumped to 13%** so we tested a few alternatives》[链接](https://www.reddit.com/r/GrowthHacking/comments/1teypme/)
  - r/SaaS《We got tired of **40% bounce rates from Apollo**… so we built our own data tool》[链接](https://www.reddit.com/r/SaaS/comments/1r1ntpp/)
  - r/SideProject《I tested Apollo, Lusha, Cognism, and SalesTarget.ai with the same ICP. Here are my actual bounce rates》[链接](https://www.reddit.com/r/SideProject/comments/1sl239l/)
- MailCop《We Validated 10,000 Apollo Contacts》（[链接](https://mailcop.net/blog/validated-10000-apollo-contacts-data)，2026-04-24；**作者是邮箱验证厂商，存在利益相关**）：10,000 条 Apollo 标为 “Verified”/“Likely to Engage” 的联系人，三层验证后 **58.4% deliverable、22.0% undeliverable、14.6% risky/catch-all、5.0% unknown**（Apollo 自称 91% 准确率）；1–50 人公司 catch-all 比例 22.3%（1,000+ 人公司为 8.1%）；角色邮箱（info@ 等）占 3.8%；C-suite 不可达率 26.5%。→ **小公司（本地服务业正是）catch-all 比例最高**，这和 B1“not catch-all, not unknown”的要求直接相关。
- Clay 评测（[链接](https://marketintelligencetools.com/reviews/clay/)，2026-08-11 发布）引 G2（2026-05）：“The phone number coverage is really weak, with **mobile matches only around 30-35%**.”（对照 B1 要求 60%+ mobile 覆盖）

**(2) 工具贵、计费不可预测、上手难**（同上 Clay 评测）
- Launch $185/月（2,500 Data Credits，**无原生 CRM 同步**）；Growth $495/月才有原生 Salesforce/HubSpot 同步；每条记录 6–20 credits；超额充值加价 30%。
- G2（2026-05）：“The UI looks like a friendly spreadsheet, but when you need conditional logic and formula chains, **it's basically programming**.”
- TrustRadius（2026-01，小代理创始人）：“pricing is too high for me and there credit system is somewhat messy like its **unpredicatble**...”
- G2（2023-12）：“it can in some cases be quite easy to **burn a lot of credits quickly without realizing it**”；G2：“it took me **weeks** to understand what's what.”；G2：“It can get very expensive if you don't know how to use it with API's and integrations.”

**(3) 抓取型工具的去重 / 字段缺失 / 稳定性**（Outscraper 官方社区）
- 《Outscraper Presents as Incompetent》（[链接](https://community.outscraper.com/t/outscraper-presents-as-incompetent/755)，2026-01-19）：“we have lost hours and an opportunity trying to get Filters (no website) to work”；“of 20 records, it looks like I have maybe **7 different businesses and a deduping problem**”；“We don't want to download 10x records just to find the ones without websites”。官方回复：邮箱富化“incurs additional charges”。
- 《Incomplete Data Fields》（[链接](https://community.outscraper.com/t/incomplete-data-fields/732)，2025-12-13）：“for the majority of the 6000 rows, it didn't give me any data when most locations have reviews”；官方承认“some scraping jobs were returning **empty columns** due to a bug on our end”。

**(4) AI 个性化效果存疑（只引标题）**
- r/coldemail《Is AI-powered cold email helping or worsening your reply rates?》[链接](https://www.reddit.com/r/coldemail/comments/1rzjxtl/)
- r/salesdevelopment《I tested AI written cold emails against human written ones for 6 months across 9 client accounts. **the results were not close.**》[链接](https://www.reddit.com/r/salesdevelopment/comments/1sk965x/)（帖内具体数字未能核实，不引用）
- 结合 B3“a genuine reason for approaching each business”、B8“first lines and snippets”：客户要的不是“AI 写邮件”，而是**基于可核实事实的理由**。

**(5) 合规 / 账号风险 / 投递规则**
- Google Maps Platform 服务条款 §3.2.3(a)（[链接](https://cloud.google.com/maps-platform/terms)）：“**No Scraping.** Customer will not export, extract, or otherwise scrape Google Maps Content for use outside the Services. For example, Customer will not ... (iii) **copy and save business names, addresses, or user reviews**”；§3.2.3(b) No Caching。
- PhantomBuster 官方帮助（[链接](https://support.phantombuster.com/hc/en-us/articles/34537476105746-How-to-Understand-LinkedIn-Account-Safety-Limits-and-Responsibility)，2026-07-03 更新）：“LinkedIn doesn’t publish official automation limits.”；“no automation tool can eliminate risk entirely”；“You can be within rate limits and still trigger a behavioral flag.”
- Gmail 发件人指南（[链接](https://support.google.com/mail/answer/81126?hl=en)）：所有发件人需 SPF 或 DKIM；“Keep spam rates reported in Postmaster Tools **below 0.3%**”（推荐低于 0.10%）；营销类邮件需支持 one-click unsubscribe。
- CSLB 公开数据门户（[链接](https://www.cslb.ca.gov/Onlineservices/DataPortal/ContractorList)）：免费提供 CSV/XLS；License Master 含执照号、企业名、地址、电话、状态、发证/到期日、分类、保证金与工伤保险；Personnel 文件含人员姓名与职务；“**Email addresses are not provided** (Business & Professions Code Section 27)”。

### 3.3 痛点排序（按出现频率 × 商业价值）

| 排名 | 痛点 | 证据 |
|---|---|---|
| 1 | **联系人不准 / 退信 / catch-all / 过期数据**；要能证明“已验证”，并标注来源与日期 | B1（ok-only、6 个月、交验证结果文件）、B2、B5（valid phone 最重要）、B8、B13（not just guessed、Source、Date sourced）、B14（Zero bounce）；Apollo 退信帖、MailCop 22%/14.6%；Clay mobile 30–35% |
| 2 | **不合格线索**：连锁/加盟/DSO、单人小店、区域外、已关门、类别错误、只有 Facebook 无官网 | B1、B5、B7、B14；B3“deeper than basic company size and job-title filters” |
| 3 | **重复 & 重复触达**：域名/电话/地址去重；对 CRM 已有、已联系、禁联/退订名单去重 | B1、B2、B3、B5、B12；Outscraper“7 different businesses and a deduping problem” |
| 4 | **找不到真正的 owner/决策人与直邮**（拒收 info@），且“不许编” | B1（owner、one row per company）、B5、B7（do not guess or fabricate）、B13、B14 |
| 5 | **缺少“为什么是现在”的信号与真实理由**：招聘、新开业/装修许可、技术栈、扩张；按 fit + signal 排序；个性化要有依据 | B2、B3、B10、B11（招聘信号，$30–60/h）、B13（新开业、DOB permits）、B8、B12（Hot/Warm/Cold） |
| 6 | **工具贵/复杂/不可控 & 所有权**：Clay 计费难预测、CRM 同步锁高档；客户想要自己拥有的系统 | Clay 评测；B3（所有权）、B9（不是只上传 CSV）、B10（不要过度复杂） |
| 7 | **合规与发信安全**：合法来源、GDPR/DNC、域名信誉、LinkedIn 账号风险、Maps ToS | B2、B5、B13、B9；Maps ToS §3.2.3；PhantomBuster；Gmail 指南 |

### 3.4 买家画像与预算

| 画像 | 典型职位 | 观察到的预算 | 他们买的是什么 |
|---|---|---|---|
| 外呼/营销代理（服务本地行业：trades、牙科、医美） | B1、B7、B9、B13 | $4–$20/小时长期；$200 固定价；$0.30–$0.50/条 | 可复用的“名单工厂”：合格率、验证率、样本先行、可持续下单 |
| 自建外呼引擎的 B2B 公司 | B3（光伏）、B11（人力派遣）、B12 | $30–$60/小时；$400 固定价；“prepared to pay properly” | 端到端系统：信号 → 打分 → 个性化 → CRM，且归自己所有 |
| 数据/工具创业者 | B4 | $700 固定价，可转长期 | 邮箱查找、验证、Maps 抓取的工程能力 |
| 单次名单需求的小客户 | B2、B6、B14 | $60–$100 固定价 | 小批量高质量名单（低价，适合当引流单） |

整体：**名单交付类偏低价（$60–$200 或按条 $0.3–0.5），系统搭建类明显更高（$400–$700 固定价、$30–60/小时）**。Demo 应定位为“系统”，再用系统去承接名单单子（先交样本，转长期/月费）。

### 3.5 Demo 必须展示的“杀手级功能”（逐条核对你的初始假设）

| 你最初设想的功能 | 证据结论 | Demo 里怎么体现 |
|---|---|---|
| 数据准确性 / 验证 | ✅✅ **第一痛点** | 每条联系方式带状态：\`ok / catch_all / unknown / invalid / role_based / guessed\`；内置语法 + MX 检查 + 角色邮箱识别；可插拔验证 API（MillionVerifier / ZeroBounce / NeverBounce，客户职位中点名过；离线用 mock）；**默认只导出 ok**；电话 E.164 标准化 + 类型（mobile/landline/toll-free/unknown，对应 B5）；每个字段带 \`source_url\` + \`sourced_at\`；超过 N 个月自动标记过期（B1 的 6 个月规则） |
| 去重 | ✅✅ 确认 | 按域名 / 电话 / 标准化地址三键合并，展示合并簇；对“禁联名单 + CRM 已有联系人 + 退订名单”做抑制并给出命中原因 |
| AI 按 ICP 打分并给理由 | ✅ 确认（B2/B3/B12），但**必须先硬过滤再打分** | ICP 用 YAML 配置：硬性排除（加盟/连锁/DSO/无官网/区域外/已注销）→ 规则分（执照年限、团队迹象、评论数）→ LLM 给 0–100 + Hot/Warm/Cold + 理由，**每条理由必须附证据 URL 与原文片段**；无 key 时用规则打分兜底 |
| 信号（招聘/新评论/技术栈） | ✅ 确认并**按证据调整优先级**：招聘（B2/B10/B11）、新开业/新执照（B13、B5“newly opened”）、执照年限（B1）> 技术栈（B2 提到）> 新评论（证据较弱，且依赖 Maps 数据有 ToS 限制） | 官网 careers/jobs 页检测 + 职位数；CSLB 发证日期 → “在业年数 / 新执照”；官网技术指纹（预约/调度类小部件，判断为“已数字化”）；信号带时间戳并会衰减（B2“signals decay fast”） |
| 送达安全的个性化首句 | ✅ 确认（B3/B8/B9），但重点是**“真实理由 + 可审”** | 首句只能引用 1 条已抽取的事实（附来源）；禁止编造数字/价格承诺（对应 B3 的安全规则）；长度上限 + 套话黑名单；人工审核队列（通过/编辑/驳回）；只给 \`ok\` 邮箱生成；catch-all 单独分组低频发送（MailCop 建议，判断采纳） |
| CRM 推送 | ✅ 确认（B2/B3/B12） | HubSpot 免费 CRM（Private App token）按域名/邮箱 upsert 公司与联系人并写入打分与理由；Google Sheets；CSV（含 Instantly/Smartlead 导入格式）；同步日志 |
| **新增**：“样本 + 验证报告”一键导出 | 证据：B1（50 行 + 验证结果文件）、B5（50 条）、B7（10 条）、B13（25–30 条）、B14（10 条） | \`Export sample\` → 50 行 CSV + 质量报告（覆盖率、验证分布、去重合并数、排除原因统计） |
| **新增**：漏斗与淘汰原因透明 | 证据：B1“expect 2,000 to 2,300 raw”拿 1,500 合格；B5 不合格记录不计数 | Pipeline 页显示每一步数量与淘汰原因，让客户看到“为什么剩这些” |
| **新增**：不许编造 | 证据：B7、B13、A13 同理 | Owner 名找不到就留空并标 \`not_found\`；LLM 输出必须能在原文中定位 |

### 3.6 MVP 规格（1–2 天可由 AI 编码代理完成）

#### 3.6.1 场景（Niche）
**“Contractor Lead Engine (California)”——为“向本地承包商卖服务”的客户（外呼代理 / 企业并购经纪 / 面向 trades 的 SaaS）生成加州 HVAC（C-20）、管道（C-36）、电工（C-10）承包商的合格线索。**
- 选择理由（证据）：B1 直接就是这个场景且需求最详细；B7（HVAC）、B9（HVAC/Plumbers/Roofers…）说明 trades 是代理们的热门目标；CSLB 官方免费 CSV 提供企业名/地址/电话/发证日/人员姓名——**合法、可下载、可离线**，并天然提供“在业年数”这一 B1 指定的规模代理指标。
- ICP 示例（可在 UI 改）：执照有效且 ≥10 年；有独立官网（非仅 Facebook）；官网有团队/车队/招聘迹象；非加盟/全国连锁；位于选定县；排除禁联名单。

#### 3.6.2 数据源（合法、Demo 安全）
1. **CSLB Public Data Portal**（主源）：构建时下载 License Master + Personnel CSV，仅保留 1–2 个县、3 个分类的子集作为 \`data/cslb_sample.csv\`（离线可跑）；用 Personnel 里的人员姓名/职务作为 owner 候选（公开记录）。
2. **公司官网**（富化）：只抓首页 / About / Team / Contact / Careers 少数页面；遵守 robots.txt、站点级限速、带标识 UA。**作品集演示时使用内置的 20–30 个合成承包商网站（本地静态站，含 mailto、团队页、招聘页、加盟标识等各种情况）**，避免在 Demo 中反复访问真实小商家，也避免作品集截图出现真实个人信息。
3. **地点/评论数据（可选）**：只通过**官方 Google Places API**（客户自带 key）获取，并遵守 Maps 平台条款（§3.2.3 禁止抓取与存储商户名/地址/评论，缓存另有限制——上线前需核对 Service Specific Terms）；**Demo 中不抓取 Google Maps 网页**。离线模式用 mock 评论数。
4. **邮箱验证**：可插拔 provider 接口（MillionVerifier / ZeroBounce / NeverBounce），离线用确定性 mock；本地只做语法、MX 查询、角色邮箱与一次性域名识别，**不在 Demo 里做 SMTP RCPT 探测**（容易触发对方风控/拉黑 IP）。
5. **LinkedIn**：不做任何登录态抓取；最多生成一个“人工核查用”的搜索链接字段。

#### 3.6.3 架构
\`\`\`
docker-compose
 ├─ mocksites/      本地合成承包商官网（静态，含各种边界情况）
 ├─ app/            FastAPI
 │   ├─ ingest/          CSLB CSV 解析 → companies / people（保留 source + sourced_at）
 │   ├─ normalize/       名称/地址标准化、电话 E.164 + 类型、域名提取
 │   ├─ dedupe/          域名 / 电话 / 地址 三键合并 + 合并簇审计
 │   ├─ crawl/           httpx + selectolax；必要时 Playwright；robots、限速、重试
 │   ├─ enrich/          抽取 email/团队页/招聘页/加盟标识/技术指纹/社媒 → facts(表，带 URL+片段)
 │   ├─ contacts/        owner 识别（CSLB 人员 × 官网 About/Team 交叉印证）、邮箱发现（页面 > 模式猜测，猜测必须标 guessed）
 │   ├─ verify/          语法+MX+角色+一次性域名 → provider 接口（mock / MillionVerifier / ZeroBounce）
 │   ├─ score/           YAML ICP：硬排除 → 规则分 → LLM 打分(理由+证据) → Hot/Warm/Cold；离线兜底
 │   ├─ personalize/     基于单条事实的首句 + 片段；黑名单/长度/禁止承诺；审核状态
 │   ├─ suppress/        禁联、CRM 已有、退订、已联系
 │   ├─ export/          CSV / Excel / Google Sheets / Instantly-Smartlead CSV / 50 行样本 + 质量报告
 │   ├─ crm/             HubSpot upsert（companies, contacts, 自定义属性：score/tier/reasons/signals）
 │   └─ web/             Jinja2 + HTMX
 └─ db              SQLite（可切 Postgres）
\`\`\`
- 关键表：\`companies\`、\`people\`、\`contacts\`(type, value, status, verifier, verified_at, source_url)、\`facts\`(company_id, kind, value, evidence_url, snippet, observed_at)、\`signals\`(kind, strength, observed_at, decays_at)、\`scores\`(icp_version, score, tier, reasons_json)、\`drafts\`(first_line, snippet, fact_id, status)、\`suppressions\`、\`merge_clusters\`、\`runs\`。
- LLM：OpenAI 兼容（\`LLM_BASE_URL/LLM_API_KEY/LLM_MODEL\`），结构化 JSON 输出；校验器检查每条理由引用的 \`fact_id\` 是否存在、片段是否在原文中，否则丢弃该理由。

#### 3.6.4 关键页面
1. **Pipeline Run**：漏斗（原始 → 去重 → 硬排除 → 有官网 → 找到 owner → 邮箱 ok → Hot/Warm），每步淘汰原因 Top N。
2. **Leads 表**：筛选（tier、分数、信号、验证状态、县、分类），批量导出/推送。
3. **Lead 详情**：公司事实卡（每条带来源链接与日期）、owner 与证据、联系方式验证状态、打分理由（逐条可点到证据）、信号时间线、首句草稿（通过/编辑/驳回）。
4. **ICP 编辑器**：硬排除项、权重、阈值、信号衰减天数；保存为新版本并可重算。
5. **Data Quality**：验证分布、字段覆盖率、去重合并簇、过期记录、禁联命中；按钮“Export 50-row sample + report”。
6. **Sync 日志**：HubSpot / Sheets 推送结果与失败重试。

#### 3.6.5 1–2 天任务拆分
| 时段 | 任务 | 验收 |
|---|---|---|
| D1 上午 | 下载并裁剪 CSLB 子集；ingest/normalize/dedupe；合成官网 20–30 个 | 导入后能看到合并簇；电话标准化正确 |
| D1 下午 | crawl + enrich（email、team、careers、加盟标识、技术指纹）+ facts 表；owner 交叉印证 | 每条事实都有 URL+片段；找不到 owner 时为空且标 not_found |
| D1 晚 | verify（本地检查 + mock provider + 1 个真实 provider 适配器）；suppress | 角色邮箱、猜测邮箱不会进入默认导出 |
| D2 上午 | score（YAML ICP + LLM + 离线兜底）；personalize（单事实首句 + 校验 + 审核状态） | 每条理由可追溯；无 key 时也能跑完 |
| D2 下午 | Web 6 页；导出（CSV/Excel/Sheets/Instantly CSV/样本+报告）；HubSpot upsert | \`docker compose up\` → \`make demo\` 一次跑完，看板有完整漏斗 |
| D2 晚（可选） | 第二套 ICP 预设：\`presets/ny_medspa.yaml\`（新开业信号）或 \`presets/se_staffing_hiring.yaml\`（招聘信号）；README + 录屏 | 切换预设可重跑 |

#### 3.6.6 Demo 演示脚本（2 分钟）
1. \`make demo\`：从 CSLB 子集开始。2. Pipeline 漏斗：原始 → 合格，每步淘汰原因（加盟、无官网、catch-all…）。3. 打开一个 Hot 线索：执照 22 年（来自 CSLB 发证日）、官网有 Careers 页在招 2 个技师（附链接）、owner 名在 CSLB 人员表与官网 About 页一致。4. 打分理由逐条可点证据。5. 首句草稿引用招聘事实，审核通过。6. 导出“50 行样本 + 质量报告”，推送 HubSpot。（以上为演示剧本中的合成数据示例）

#### 3.6.7 Upwork 作品集文案（英文草稿）
> **Contractor Lead Engine — verified, ICP-scored local-business leads with a real reason to reach out**
> Builds lead lists from official public sources (e.g., California CSLB license data) plus company websites — not exported from Apollo. Every field carries its source URL and date. Dedupes by domain/phone/address, suppresses your never-contact and CRM lists, finds the owner (cross-checked, never guessed), and verifies emails (only "ok" ships; catch-all/role/guessed are flagged). An LLM scores each company against your ICP with evidence-linked reasons and hiring/years-in-business signals, then drafts a first line grounded in one verifiable fact for human approval. Pushes to HubSpot, Google Sheets or Instantly CSV, and exports a 50-row sample with a quality report so you can check before scaling. Python · FastAPI · Playwright · SQLite/Postgres · OpenAI-compatible LLM (offline fallback) · Docker.

#### 3.6.8 映射到的真实职位
- 直接对口：B1（CSLB + 验证 + 去重 + 样本 + 验证报告）、B7（HVAC owner，不编造）、B9（本地商家全流程到 AI 个性化）、B2（ICP + 信号 + 打分 + 去重 + 验证）、B12（去重 → AI 资格判断 → 打分 → CRM → 通知）、B8（验证 + 个性化列 + send-ready）。
- 换预设对口：B11（招聘信号）、B13（新开业/许可信号、Source/Date sourced）、B14（执照库 + 独立诊所过滤 + 零退信）。
- 工程能力对口：B4（验证/去重/兜底逻辑）、B3（系统所有权 + ICP 深度打分 + 抑制名单 + HubSpot）。

#### 3.6.9 法律 / ToS 注意
- **Google Maps**：服务条款禁止抓取及复制保存商户名称、地址、评论（§3.2.3）。作品集 Demo 不抓 Maps 网页；如客户坚持使用 Maps 数据，建议走官方 Places API 并遵守缓存/展示要求，或由客户自行选择第三方数据商并承担相应条款。
- **LinkedIn**：不做登录态抓取/自动化（账号限制风险连自动化厂商都说无法消除）；Demo 不包含 LinkedIn 数据。
- **个人数据与外呼合规**：owner 姓名来自公开执照记录，但发送冷邮件仍受当地法规约束（美国 CAN-SPAM、欧盟/英国 GDPR/PECR 等——本次未逐条核对原文，交付前需按客户所在地确认）；保留 \`source\` 与 \`sourced_at\`，支持删除请求与退订抑制。
- **发信安全**：遵守 Gmail 发件人指南（SPF/DKIM、垃圾率 <0.3%、营销邮件一键退订）；Demo 本身**不发任何邮件**，只生成草稿与导出。
- **CSLB 数据**：门户说明不提供邮箱（B&P Code §27）；邮箱一律来自企业官网公开信息或验证服务，且标注来源。

---

## 4. 两个 Demo 共用的工程底座（建议做成一个仓库的两个 app）

- 共用：fetch 层（限速/退避/重试/robots/挑战页识别/快照）、Playwright 池、LLM 客户端（OpenAI 兼容 + 离线兜底 + JSON 校验 + 证据定位）、通知（Telegram/Slack/SMTP/Outbox）、导出（CSV/Excel/Sheets）、APScheduler、运行记录与健康面板、Docker 一键启动、\`make demo\` 剧本。
- 共用的“卖点叙事”：**“规则优先、AI 兜底、每个结论可追溯、出问题会自己报警、离线可演示、代码与账号归客户”**——这几句几乎逐字对应 A13、B3、A4 的原文要求。
- 投标时的“问题回答”素材（直接来自职位里的提问）：
  - A4 的 “How would you match the same product across multiple retailers when listing titles differ?” → 用 2.6.4 的匹配流程 + 录屏里“2 件装被拒”的片段回答。
  - A4 的 “How would you structure price checks to avoid unnecessary API costs?” → 分级频率 + ETag/哈希跳过 + 接口优先渲染兜底。
  - A1 的 “what challenges might come up” → 被拦截、改版、促销噪音、同款匹配，各配一个 Demo 截图。
  - B1 的 “What pass rate do you typically see on MillionVerifier for scraped trade-contractor emails?” → **不要编数字**；用 Demo 的质量报告说明你如何度量与报告通过率，真实数字等跑完客户样本后再给。

---

## 5. 证据清单（本报告引用的全部 URL）

**Upwork 职位 – 项目 A**
- A1 https://www.upwork.com/freelance-jobs/apply/Automate-price-monitoring_~022100609442313515937/
- A2 https://www.upwork.com/freelance-jobs/apply/Python-Playwright-Dynamic-Scraper-Google-Sheets-Exporter_~022107436617600555241/
- A3 https://www.upwork.com/freelance-jobs/apply/Senior-Data-Engineer-Commerce-Market-Intelligence-ETL-Pipelines_~022095115612039138353/
- A4 https://www.upwork.com/freelance-jobs/apply/React-Native-Flutter-Developer-Needed-for-Shopping-Price-Tracking-App-Prototype_~022103908428474109176/
- A5 https://www.upwork.com/freelance-jobs/apply/Web-Scraping-and-Telegram-Alert-Automation_~022097987030090589789/
- A6 https://www.upwork.com/freelance-jobs/apply/Data-Scraping-Engineer-Repeatable-Data-Collection-Pipeline_~022101790739299336473/
- A7 https://www.upwork.com/freelance-jobs/apply/Developer-with-Experience-Retail-Product-Catalogue-Extraction_~022105318608307945877/
- A8 https://www.upwork.com/freelance-jobs/apply/Shopify-Long-Term-Employment-Agencies-Please_~022097801497567406925/ （仅搜索摘要）
- A9 https://www.upwork.com/freelance-jobs/apply/Power-dashboard-for-multichannel_~022103128095703162024/
- A10 https://www.upwork.com/freelance-jobs/apply/Cloud-Based-Python-Scraping-Bot_~022106262425458606528/
- A11 https://www.upwork.com/freelance-jobs/apply/Web-Scraping-Help-Automate-analytic-report_~022105546845962767174/
- A12 https://www.upwork.com/freelance-jobs/apply/Automate-Sales-Policy-and-Dynamic-Pricing_~022099456786312275549/
- A13 https://www.upwork.com/freelance-jobs/apply/Web-scraping_~022095773706723606210/

**Upwork 职位 – 项目 B**
- B1 https://www.upwork.com/freelance-jobs/apply/Build-verified-list-500-California-trade-business-owners-from-CSLB-Google-Maps_~022106505803788113669/
- B2 https://www.upwork.com/freelance-jobs/apply/Clay-Expert-Needed-ICP-Based-Lead-List-Building-with-Waterfall-Enrichment-Buying-Signals_~022103174904619227797/
- B3 https://www.upwork.com/freelance-jobs/apply/GTM-Automation-Expert-Needed-Build-Clay-Instantly-n8n-HubSpot-Outbound-Sales-System_~022102818355387660771/
- B4 https://www.upwork.com/freelance-jobs/apply/Developer-Needed-Email-Finder-Google-Maps-Scraper_~022105623829144091011/
- B5 https://www.upwork.com/freelance-jobs/apply/Google-map-scraper-expert_~022090190994635950579/
- B6 https://www.upwork.com/freelance-jobs/apply/Google-maps-scraping_~022107190710199258957/
- B7 https://www.upwork.com/freelance-jobs/apply/HVAC-Lead-List-Builder-Google-Maps-Research-Owner-Names-Contact-Info_~022105510537160690502/
- B8 https://www.upwork.com/freelance-jobs/apply/Clay-enrichment-and-personalization-build-one-off-project_~022106227353115863619/
- B9 https://www.upwork.com/freelance-jobs/apply/Cold-Email-Campaign-Clay-Expert-Needed-Full-Setup-Lead-Generation-Outreach_~022102016047735746587/
- B10 https://www.upwork.com/freelance-jobs/apply/Outbound-Automation-Specialist-Clay-Lemlist-GTM-Workflows-etc_~022098732755590129245/
- B11 https://www.upwork.com/freelance-jobs/apply/Lead-Generation-Bot-for-Swedish-Market-Job-Posting-Scanner_~022100497112974327575/
- B12 https://www.upwork.com/freelance-jobs/apply/n8n-Lead-Qualification-CRM-Automation-specialist_~022099045854234513162/
- B13 https://www.upwork.com/freelance-jobs/apply/Lead-Scraper-Lead-Generation-Specialist-Medspa-Aesthetics-Practices_~022099919461866131591/
- B14 https://www.upwork.com/freelance-jobs/apply/Lead-Researcher-Independent-Dental-Clinic-Owners-Los-Angeles_~022101039874317106038/

**痛点 / 工具评测 / 法规**
- Prisync 评测（含 G2/Capterra/Trustpilot 引用）https://marketintelligencetools.com/reviews/prisync/
- Visualping 降噪博客 https://visualping.io/blog/how-visualping-cuts-false-positives
- Reddit r/ecommerce 竞品价格追踪（快照）https://reddit.sentinel-team.org/posts/1vlh071/snapshots/2026-08-12T02%3A19%3A44.123647Z （原帖 https://www.reddit.com/r/ecommerce/comments/1vlh071/）
- Reddit 授权卖家/MAP 误报（快照）https://reddit.sentinel-team.org/posts/1vqlxc7/snapshots/2026-08-18T10%3A09%3A38.388116Z
- Reddit MAP 标题：https://www.reddit.com/r/FulfillmentByAmazon/comments/1t3v0md/ ；https://www.reddit.com/r/smallbusiness/comments/1vn4kfr/ ；https://www.reddit.com/r/Amazonsellercentral/comments/1vrpjd2/ ；https://www.reddit.com/r/ecommerce/comments/1vn3osh/
- Reddit Apollo/AI 冷邮件标题：https://www.reddit.com/r/GrowthHacking/comments/1teypme/ ；https://www.reddit.com/r/SaaS/comments/1r1ntpp/ ；https://www.reddit.com/r/SideProject/comments/1sl239l/ ；https://www.reddit.com/r/coldemail/comments/1rzjxtl/ ；https://www.reddit.com/r/salesdevelopment/comments/1sk965x/
- Clay 评测（含 G2/TrustRadius 引用）https://marketintelligencetools.com/reviews/clay/
- MailCop Apollo 验证测试（厂商）https://mailcop.net/blog/validated-10000-apollo-contacts-data
- Outscraper 社区：https://community.outscraper.com/t/outscraper-presents-as-incompetent/755 ；https://community.outscraper.com/t/incomplete-data-fields/732
- PhantomBuster LinkedIn 安全说明 https://support.phantombuster.com/hc/en-us/articles/34537476105746-How-to-Understand-LinkedIn-Account-Safety-Limits-and-Responsibility
- Google Maps Platform 条款 https://cloud.google.com/maps-platform/terms
- Gmail 发件人指南 https://support.google.com/mail/answer/81126?hl=en
- CSLB 公开数据门户 https://www.cslb.ca.gov/Onlineservices/DataPortal/ContractorList
- 练习站：https://webscraper.io/test-sites ；https://books.toscrape.com/
`},
{"id": "t2-ph", "track": "longterm", "title": "【占位/示例】长线需求说明", "date": "2026-10-14 21:46", "summary": "此栏将收录：", "tags": ["占位", "示例"], "source": "", "path": "docs/placeholder_longterm.md", "has_evidence": false, "content": `# 【占位/示例】长线需求卡片说明

> 这是占位卡片，尚无真实内容。

此栏将收录：
- **Google Trends 关键词分析**：关键词、趋势曲线描述、地区、上升相关词、时间范围
- **AI 新需求发现**：新出现的 AI 能力带来的新工具/服务需求
- **老牌网站弱点切入**：现有站点（评论、差评、功能缺口）→ 可切入的小产品

建议字段：关键词/方向、数据来源、证据链接、需求强度判断、切入方案、下一步。
`},
{"id": "t3-ph", "track": "cases", "title": "【占位/示例】案例资讯说明", "date": "2026-10-14 21:50", "summary": "来源：X、Reddit、Product Hunt、Hacker News 上的独立开发 / AI 接单赚钱故事。所有收入声明均未经验证。", "tags": ["占位", "示例", "未验证"], "source": "", "path": "docs/placeholder_cases.md", "has_evidence": false, "content": `# 【占位/示例】案例资讯卡片说明

> 这是占位卡片，以下均为字段模板，不是真实案例。

来源：X、Reddit、Product Hunt、Hacker News 上的独立开发 / AI 接单赚钱故事。**所有收入声明均未经验证。**

每张卡片字段：
- **来源平台**：X / Reddit / Product Hunt / HN
- **账号**：@示例账号（待填）
- **链接**：https://example.com（待填）
- **声称收入(未验证)**：$—/月（待填）
- **可抄打法**：
  1. 步骤一（待填）
  2. 步骤二（待填）

## 证据标记 \`has_evidence\`

在 \`manifest.json\` 的该条目里加 \`"has_evidence": true\`，表示原帖**带具体数字或截图**（如收入截图、Stripe 面板、具体 MRR/订单数）。
- 卡片会显示绿色徽章「📊 带具体数字或截图」；
- 在「案例资讯」页勾选「只看带具体数字或截图」即可只看这类案例。
- 不写或写 \`false\` 表示只有口头描述。注意：即使有截图，收入仍视为**未验证**。
`},
]};