---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Chat Nio - Next Generation AIGC All-In-One Platform
hero:
  name: "Chat Nio"
  text: "下一代 AIGC 平台"
  tagline: ✨ 功能强大 设计精美 易于使用的 AIGC 一站式 B/C 端解决方案
  image:
    src: /logo.png
    alt: Chat Nio Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 商业版咨询
      link: /pro/
    - theme: alt
      text: 官方站
      link: https://chatnio.net
    - theme: alt
      text: 开发者资源
      link: /resources/

features:
  - title: 🤖️ 丰富模型支持
    details: 支持 OpenAI / Azure OpenAI / Anthropic Claude / Google Gemini / Midjourney / 讯飞星火 / 百川 AI / Moonshot / 智谱 ChatGLM / 通义千问 / 云雀大模型 / 腾讯混元 / 360 智脑等模型, 适配 LocalAI / Ollama 等私有化部署模型 (LLaMa / RWKV / SDXL 等), 支持对接 One API 等中转。
  - title: ✨ 强大渠道管理
    details: 支持 OpenAI 格式中转, 自研渠道均衡负载和分配算法, 兼容多种模型格式, 支持多渠道管理 (优先级/权重/用户分组/模型映射/状态管理), 支持内置渠道重试 (支持自定义渠道重试次数), 内置上游隐藏。 <br><br> <div class="pro">商业版</div> <div class="dev">开发中</div> 支持多 API Key 管理 / 渠道健康率监控和自动禁用启用渠道
  - title: 🤯 AI 聊天 & 绘图
    details: 强大 Markdown 语法支持 (支持 代码高亮 / LaTeX 公式 / Mermaid 思维导图 / 图表绘制), 支持对话云端同步, 支持分享对话, 支持对话保存为图片 (携带站点 Logo 等信息), 支持分享管理和站点直链分享对话, 支持集成绘图模型 (DALL-E / Stable Diffusion / Midjourney 等), 支持 Midjourney U/V/R 操作。
  - title: 📖 文档解析
    details: 开箱即用的文档解析服务, 支持 Pdf / Docx / Pptx / Xlsx / 音频 / 图片等文件类型解析, 支持多种图片存储方案 (Base64 / Local / AWS S3 / Cloudflare R2 / 腾讯云 COS / 阿里云 OSS / MinIO / Telegram CDN 等), 同时支持 OCR 图片识别 (基于开源 PaddleOCR 支持私有化部署)。
  - title: 💰 计费管理
    details: 支持多种计费方式 (不计费 / 次数 / Token 计费), 支持设置允许模型, 支持快速导入内置价格模板 (可自定义汇率)或同步上游价格设定, 同时在弹性计费基础上支持订阅计划 (支持订阅计划自定义配额 / 计划分层 / 升降级 / 折扣设定), 支持设置订阅配额图表设置, 支持快速导入其他级别订阅, 支持同步上游订阅设置。
  - title: 🎫 兑换码管理
    details: 支持完备兑换码体系, 支持设置数量和点数, 支持批量生成和兑换码管理, 支持礼品码/兑换码类型 (礼品码一种礼品码类型一个用户只能使用一次可用于福利发放, 兑换码一种兑换码类型一个用户可以使用多次可用于发卡和兑换商品), 支持礼品码查看领取用户 / 创建时间 / 领取时间等信息。
  - title: 🎈 模型市场
    details: 丰富的模型市场功能, 支持自定义模型名称, 模型 Logo, 模型标签 (如官方/绘图/高定价/高质量/多模态等), 自动绑定价格设定中的模型价格, 支持设置默认列表显示模型, 支持顺序拖拽自定义排序, 支持设置是否为高上下文 (搭配文件解析服务实现非高上下文模型的内容切割), 使用户可以更好的了解模型的特性。
  - title: 🎃 预设管理
    details: 支持系统 / 自定义预设, 云端同步, 支持搜索预设, 支持预设管理, 支持预设克隆, 支持设置预设图像 / 简介 / 上下文角色消息。<br><br> <div class="pro">商业版</div> <div class="dev">开发中</div> <strong>自写 GPTs 平台</strong>, 支持应用市场, 支持用户上下架预设 / 后台审核 / 使用量统计, API 调用应用预设 (并非对接逆向 GPTs)。
  - title: 🎉 模型缓存
    details: 支持同一请求入参的缓存, 支持设置自定义缓存可能性大小 (同一入参的最大缓存结果数量, 防止多次请求返回相同结果), 支持设置缓存过期时间 (缓存结果的有效时间)。
  - title: 🌏 联网搜索
    details: 支持 DuckDuckGo 联网搜索。 (联网搜索的简单实现, 支持全部模型 & 模型无需支持 function calling)。 <br><br> <div class="dev">开发中</div> 兼容 Google / Bing / Baidu 等搜索引擎
  - title: 🖥 多端支持
    details: 支持 Web / PWA / App 三端, UI 移动端适配, 支持明暗主题切换, 国际化支持 (多语言切换) <br> 支持 Windows / MacOS / Linux / Android / iOS App <br><br> <div class="pro">商业版</div> 支持 Web / PWA / App / 小程序 四端
  - title: ✔️ 站点管理
    details: 内置 SEO 优化, 支持自定义站点 Logo / 站点名称 / 页脚 / 联系方式等, 支持设置用户初始点数, 支持站点公告 / 通知功能, 支持设置 SMTP 发件。 <br><br> <div class="pro">商业版</div> 支持设置 Google Analytics 等统计服务 / 支持上传 Logo
  - title: 💸 支付管理 <div class="pro">商业版</div>
    details: 支持易支付和聚合支付, 支持同步检查订单状态, 支持订单搜索和管理 (开源版仅支持发卡)。 <br><br> <div class="dev">开发中</div> 支持官方微信 / 官方支付宝 / 官方 Stripe 等支付方式
  - title: 📄 安全审核 <div class="pro">商业版</div>
    details: 提供多种审核模式, 支持文本词库 / 正则 / 百度审核等安全审核方式, 支持特定模型审核，提供安全的体验。
  - title: 🗂 调用日志 <div class="pro">商业版</div>
    details: 支持调用日志记录, 支持参数筛选, 支持图表数据统计, 支持追溯调用来源 (本次调用的全部渠道历史), 支持存储 Prompt (可选开启)。
  - title: 🎨 绘画面板 <div class="pro">商业版</div>
    details: 支持 Midjourney Proxy Plus, 支持 Imagine / Upscale / Vary / Zoom Out 等众多功能， 支持 Seed 获取。 <br><br> <div class="dev">开发中</div> 支持 Midjourney Proxy (Plus) 格式中转 / 支持局部重绘 (Vary Region)
  - title: 👋 第三方登录 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持第三方登录, 如微信 / QQ / Google / GitHub 等第三方账号登录。
  - title: 🧩 插件市场 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持插件市场 (基于 Function Calling) <br><br> 支持开发插件 HTTP / Python / Node.js / PHP / Java / Go 等运行时。
  - title: 📡 模型监控 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持内置模型可用性监控, 类似于 Uptime Kuma, 支持设置模型监控频率, 支持设置模型监控报警，支持分组监控。
  - title: ✈ 速率设置 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持设置模型速率限制 (类似于 OpenAI), 支持设置节流类型 并发任务 / RPM 每分钟请求数 / RPH 每小时请求数 / RPD 每天请求数), 支持设置用户分组速率。 
  - title: 📣 推广奖励 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持推广奖励 (单次奖励 / 利润分销), 支持设置推广奖励比例和推广大使等级比例。<br>支持划转余额, 支持推广排行榜, 支持设置提现门槛选项。
  - title: 📦 资源包 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持资源包计费模式，支持自定义价格 / 有效期 / 积分配额 / 涵盖模型等配置。介于弹性计费和订阅计划之间的计费模式，支持更灵活和更细致化的计费方式。
  - title: 📅 自动任务 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持自动化任务, 支持设置触发器和动作, 支持设置任务执行频率和延迟防抖, 支持设置任务执行时间, 支持设置任务执行条件。 (适用场景示例：AutoDL GPU 服务器自动休眠)
  - title: 👂 语音识别 & TTS <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持 OpenAI / Azure 等语音识别 & TTS 模型，支持 Whisper & TTS 格式中转。
  - title: 📞 短信登录 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持短信登录, 支持设置短信登录模板 / 速率限制等自定义设置。
  - title: 📝 板块添加 <div class="pro">商业版</div> <div class="dev">开发中</div>
    details: 支持添加自定义板块嵌入网站页面, 支持设置板块图标，使站点更加丰富多样。
  - title: 📈 数据统计
    details: 丰富美观的仪表盘统计，支持模型请求统计 / 收入统计 / 用户类型分析 等多种统计图表。
  - title: 🌮 更多功能
    details: 更多功能等待你的发现！点击前往<a class="home-link" href="https://go-pro.chatnio.net">商业版演示站点</a>体验更多功能。
    link: https://go-pro.chatnio.net
---
