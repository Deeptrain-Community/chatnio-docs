# 💰 AI 模型价格

[Chat Nio 官方站](https://chatnio.net/) 有两种计费方式。一种是随用随付的弹性计费，一种是订阅计划。

**💰 官方站 1 人民币 兑换 10 点数 💰**

**⭐ API 中转仅支持弹性计费, 不涵盖订阅配额 ⭐**

**⚠ 其他站点请参阅其站点的信息，与官方站计费无关 ⚠**

**🎉 全部模型支持 OpenAI API 格式调用 (类似 One API) 🎉**

最新的订阅计划配额请前往官方站查看，下列仅列出弹性计费价格：

::: tip 最低余额限制
为了防止超出余额的部分过多，同时为了防止滥用，Chat Nio 设定了特定模型的最低余额预检，当小于该余额时，不可发起请求。

- ✨ 按次计费模型：**单次调用费用**
- ✨ Token 计费模型：**1K 输入 Token 费用 + 1K 输出 Token 费用**
:::


## OpenAI / Azure OpenAI

> **⭐ OpenAI 全部官方模型支持 Function Calling**

<table>
  <thead>
    <tr>
      <th width="200">模型</th>
      <th>费率</th>
      <th>问题 Token (点数 / 1k token)</th>
      <th>回答 Token (点数 / 1k token)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>gpt-3.5-turbo (0301, 0613)</td>
      <td>1 元 1 刀</td>
      <td>0.015</td>
      <td>0.02</td>
    </tr>
    <tr>
      <td>gpt-3.5-turbo-1106</td>
      <td>1 元 1 刀</td>
      <td>0.01</td>
      <td>0.02</td>
    </tr>
    <tr>
      <td>gpt-3.5-turbo-0125</td>
      <td>1 元 1 刀</td>
      <td>0.005</td>
      <td>0.015</td>
    </tr>
    <tr>
      <td>gpt-3.5-turbo-16k</td>
      <td>1 元 1 刀</td>
      <td>0.03</td>
      <td>0.04</td>
    </tr>
    <tr>
      <td>gpt-4 (0314, 0613)</td>
      <td>1 元 1 刀</td>
      <td>0.3</td>
      <td>0.6</td>
    </tr>
    <tr>
      <td>gpt-4-32k (0314, 0613)</td>
      <td>1 元 1 刀</td>
      <td>0.6</td>
      <td>1.2</td>
    </tr>
    <tr>
      <td>
        <p>gpt-4-turbo</p>
      </td>
      <td>1 元 1 刀</td>
      <td>0.1</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>
        <p>gpt-4-turbo-preview (1106, 0125)</p>
      </td>
      <td>1 元 1 刀</td>
      <td>0.1</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>
        <p>gpt-4-vision-preview</p>
      </td>
      <td>1 元 1 刀</td>
      <td>0.1</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>dall-e-2</td>
      <td>1 元 1 刀 (512x512)</td>
      <td>-</td>
      <td>0.18 / 次</td>
    </tr>
    <tr>
      <td>dall-e-3</td>
      <td>1 元 1 刀 (HD 1024x1024)</td>
      <td>-</td>
      <td>0.8 / 次</td>
    </tr>
    <tr>
      <td>
        <p>gpt-4-v</p>
        <p>gpt-4-dalle</p>
        <p>gpt-4-all</p>
      </td>
      <td>0.1 元一次</td>
      <td>-</td>
      <td>1 / 次</td>
    </tr>
    <tr>
      <td>azure-gpt-3.5-turbo</td>
      <td>0.4 元 1 刀 (0613)</td>
      <td>0.006</td>
      <td>0.008</td>
    </tr>
    <tr>
      <td>azure-gpt-3.5-turbo-16k</td>
      <td>0.4 元 1 刀 (0613)</td>
      <td>0.012</td>
      <td>0.016</td>
    </tr>
    <tr>
      <td>azure-gpt-4 (0314, 0613)</td>
      <td>0.8 元 1 刀</td>
      <td>0.24</td>
      <td>0.48</td>
    </tr>
    <tr>
      <td>azure-gpt-4-32k (0314, 0613)</td>
      <td>0.8 元 1 刀</td>
      <td>0.48</td>
      <td>0.96</td>
    </tr>
    <tr>
      <td>azure-gpt-4-turbo-preview (1106, 0125)</td>
      <td>0.8 元 1 刀</td>
        <td>0.08</td>
        <td>0.24</td>
    </tr>
    <tr>
      <td>azure-gpt-4-vision-preview</td>
        <td>0.8 元 1 刀</td>
        <td>0.08</td>
        <td>0.24</td>
    </tr>
    <tr>
      <td>
        <p>gpt-3.5-free</p>
        <p>gpt-3.5-16k-free</p>
      </td>
      <td>1 元 5000 次 (1 点数 500 次)</td>
      <td>-</td>
      <td>0.002 / 次</td>
    </tr>
  </tbody>
</table>

::: info 模型声明
- GPT-3.5 Free 系列为逆向模型，不保证稳定性。
- 除 GPT-4 0613 模型和逆向模型外，全部支持 Function Calling 调用。
:::

::: tip 快速接入
除常规标准格式外， Chat Nio 同时适配了更多 **Developers Friendly** 的调用方式：
- GPT-4 Turbo / GPT-4 Vision Preview 支持 **⭐ 直接在输入框中输入图片 URL / Base64** 进行调用 (正则实现, 推荐 URL 中不含空格, 文本内容和 URL 中不要粘连以避免提取错误)。
- DALL-E 系列绘图模型支持 **⭐ Chat Completions 接口** (*/v1/chat/completions*) 调用。
- GPT-4 DALLE 支持 **⭐ Images 接口** (*/v1/images*) 调用。

> Tip: 除上述格式外同时也同时并优先兼容标准格式，比如 DALL-E 绘图模型优先支持 */v1/images* 调用。
:::

## Midjourney & SDXL
> **⭐ 由 Midjourney Proxy Plus 提供支持**

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th>价格（点数）</th>
      <th>信息</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>midjourney</td>
      <td>1 / 次</td>
      <td>Relax 模式 (2~5 分钟出图)</td>
    </tr>
    <tr>
      <td>midjourney-fast</td>
      <td>2 / 次</td>
      <td>Fast 模式 (30 秒 ~ 1 分钟出图)</td>
    </tr>
    <tr>
      <td>midjourney-turbo</td>
      <td>5 / 次</td>
      <td>Turbo 模式 (30 秒内出图)</td>
    </tr>
    <tr>
      <td>stable-diffusion</td>
      <td>0.25 / 次</td>
      <td>Stable Diffusion XL (不稳定)</td>
    </tr>
  </tbody>
</table>

::: tip 快速接入
所有绘图模型 API 调用格式兼容:
1. **⭐ Images 接口** (*/v1/images*) 
2. **⭐ Chat Completions 接口** (*/v1/chat/completions*)
:::

## Anthropic Claude

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td><p>claude-1-100k, claude-1, </p><p>claude-1.3, </p><p>cluade-slack (废弃)</p></td><td>对齐<a href="https://anthropic.com/pricing/">官网</a>计费</td><td>0.08</td><td>0.27</td></tr><tr><td>claude-2, claude-2.1</td><td>对齐<a href="https://anthropic.com/pricing/">官网</a>计费</td><td>0.8</td><td>2.7</td></tr><tr><td>claude-3-opus-20240229</td><td>价格同 gpt-4-32k</td><td></td><td></td></tr><tr><td>claude-3-sonnet-20240229</td><td>价格同 gpt-4</td><td></td><td></td></tr><tr><td>claude-3-haiku-20240307</td><td>价格同 gpt-3.5-turbo-16k</td><td></td><td></td></tr></tbody></table>

::: tip 模型声明
- Claude-1 / Claude-2 系列为逆向模型，不保证稳定性。
- Claude-3 系列 **支持 Function Calling 调用**。
- **Claude-3 Opus** 和 **Claude-3 Sonnet** 模型支持识别图片，调用格式同 **GPT-4 Vision Preview**。
:::

## SparkDesk 讯飞星火

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th width="180">费率</th>
      <th>问题 Token (点数 / 1k token)</th>
      <th>回答 Token (点数 / 1k token)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>spark-desk-v3</p>
      </td>
      <td>
        对齐<a href="https://xinghuo.xfyun.cn/sparkapi">官网</a>计费 (V3.5)
      </td>
      <td>0.3</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>
        <p>spark-desk-v3</p>
      </td>
      <td>
        对齐<a href="https://xinghuo.xfyun.cn/sparkapi">官网</a>计费 (V3.1)
      </td>
      <td>0.3</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>
        <p>spark-desk-v2</p>
      </td>
      <td>
        对齐<a href="https://xinghuo.xfyun.cn/sparkapi">官网</a>计费 (V2.1)
      </td>
      <td>0.3</td>
      <td>0.3</td>
    </tr>
    <tr>
      <td>spark-desk-v1.5</td>
      <td>
        对齐<a href="https://xinghuo.xfyun.cn/sparkapi">官网</a>计费  (V1.5)
      </td>
      <td>0.15</td>
      <td>0.15</td>
    </tr>
  </tbody>
</table>

## ChatGLM 智谱清言

<table>
  <thead>
    <tr>
      <th>模型</th>
      <th width="160">费率</th>
      <th>问题 Token (点数 / 1k token)</th>
      <th>回答 Token (点数 / 1k token)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>glm-4</td>
      <td>
        对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
      </td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>glm-4v</td>
      <td>
        对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
      </td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>glm-3-turbo</td>
      <td>
        对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
      </td>
      <td>0.05</td>
      <td>0.05</td>
    </tr>
  </tbody>
</table>

:::info 模型声明
- **glm-4v** 模型支持识别图片，调用格式同 **GPT-4 Vision Preview**。
- 智谱将 API 格式从 V3 升级至 V4, 原 V3 模型将逐步废弃：
  - **zhipu-chatglm-turbo** (同 **glm-3-turbo**)
  - **zhipu-chatglm-pro** (已废弃)
  - **zhipu-chatglm-std** (已废弃)
  - **zhipu-chatglm-lite** (已废弃)

> <table>
>   <thead>
>     <tr>
>       <th>模型</th>
>       <th width="160">费率</th>
>       <th>问题 Token (点数 / 1k token)</th>
>       <th>回答 Token (点数 / 1k token)</th>
>     </tr>
>   </thead>
>   <tbody>
>     <tr>
>       <td>zhipu-chatglm-turbo</td>
>       <td>
>         对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
>       </td>
>       <td>0.05</td>
>       <td>0.05</td>
>     </tr>
>     <tr>
>       <td>zhipu-chatglm-pro（废弃）</td>
>       <td>
>         对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
>       </td>
>       <td>0.1</td>
>       <td>0.1</td>
>     </tr>
>     <tr>
>       <td>zhipu-chatglm-std（废弃）</td>
>       <td>
>         对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
>       </td>
>       <td>0.05</td>
>       <td>0.05</td>
>     </tr>
>     <tr>
>       <td>zhipu-chatglm-lite（废弃）</td>
>       <td>
>         对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费
>       </td>
>       <td>0.05</td>
>       <td>0.05</td>
>     </tr>
>   </tbody>
> </table>

:::

## DashScope 通义千问

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>qwen-plus</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.2</td><td>0.2</td></tr><tr><td>qwen-plus-net</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.2</td><td>0.2</td></tr><tr><td>qwen-turbo</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.08</td><td>0.08</td></tr><tr><td>qwen-turbo-net</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.08</td><td>0.08</td></tr></tbody></table>

:::info
- **-net** 后缀模型为开启 DashScope 联网选项模型。
:::

## Google Gemini / PaLM2

| 模型                    | 费率        | 回答 Token (点数 / 次数) |
|-----------------------|-----------|--------------------|
| gemini-1.5-pro-latest | 1 元 200 次 | 0.05 / 次           |
 | gemini-pro-vision     | 1 元 200 次 | 0.05 / 次           |
 | gemini-pro            | 1 元 200 次 | 0.05 / 次           |
| chat-bison-001 (已废弃)  | 1 元 200 次 | 0.05 / 次           |

:::info
- **Gemini Pro Vision** 和 **Gemini 1.5 Pro Latest** 模型支持识别图片，调用格式同 **GPT-4 Vision Preview**。
- **Gemini Pro Vision** 不支持多轮对话 (**Multi Turn**) 且强制输入携带图片。
- **Chat Bison 001** 不支持中文对话，已被 Google 废弃。
:::

## New Bing

| 模型            | 回答 Token (点数 / 次数) |
|---------------|--------------------|
| bing-creative | 0.1 / 次            |
| bing-balanced | 0.1 / 次            |
| bing-precise  | 0.1 / 次            |

> New Bing 为逆向模型，不保证稳定性，出现错误为正常现象

## Meta LLaMa

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td><p>llama-3-70b</p><p>llama-2-70b</p><p>code-llama-34b</p></td><td>算力平均值</td><td>0.25</td><td>0.25</td></tr><tr><td><p>llama-3-8b</p><p>llama-2-13b</p><p>llama-2-7b</p><p>code-llama-13b</p><p>code-llama-7b</p></td><td>算力平均值</td><td>0.1</td><td>0.1</td></tr></tbody></table>

> LLaMa 模型不保证高速和稳定性，吐字速度随当前可用性能影响

## 腾讯混元

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>hunyuan</td><td>对齐<a href="https://cloud.tencent.com/document/product/1729/97731">官网</a>计费</td><td>1</td><td>1</td></tr></tbody></table>

## 360 智脑

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>360-gpt-v9</td><td>对齐<a href="https://ai.360.com/platform/limit">官网</a>计费</td><td>0.12</td><td>0.12</td></tr></tbody></table>

## **百川 AI**

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>baichuan-53b</td><td>对齐<a href="https://platform.baichuan-ai.com/price">官网</a>计费</td><td>0.2</td><td>0.2</td></tr></tbody></table>

## 火山方舟（抖音豆包）

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>skylark-lite-public</td><td>对齐<a href="https://www.volcengine.com/docs/82379/1099320">官网</a>计费</td><td>0.04</td><td>0.04</td></tr><tr><td>skylark-plus-public</td><td>对齐<a href="https://www.volcengine.com/docs/82379/1099320">官网</a>计费</td><td>0.08</td><td>0.08</td></tr><tr><td>skylark-pro-public</td><td>对齐<a href="https://www.volcengine.com/docs/82379/1099320">官网</a>计费</td><td>0.11</td><td>0.11</td></tr><tr><td>skylark-chat</td><td>对齐<a href="https://www.volcengine.com/docs/82379/1099320">官网</a>计费</td><td>0.11</td><td>0.11</td></tr></tbody></table>

## Pika Text To Video (文生视频)

| 模型                 | 费率                              | 价格 (点数)        |
|--------------------|---------------------------------|----------------|
| pika-text-to-video | [官网](https://pika.art/home)平均计费 | 5 / 次 (一元 2 次) |

## Suno (文生音乐)

| 模型      | 费率                          | 价格 (点数)        |
|---------|-----------------------------|----------------|
| suno-v3 | [官网](https://suno.com/)平均计费 | 2 / 次 (一元 5 次) |

## Token 计算方式
**🔔 Chat Nio 的 Token 计费方式完全参照 OpenAI 官方保持一致 🔔**

Tokenizer 的计算方法请查看 [OpenAI Cookbox](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)，后端使用 Tiktoken Go 库进行计算。

<GithubProject href="https://github.com/pkoukk/tiktoken-go" title="pkoukk / tiktoken-go" description="go version of tiktoken" />


询问模型自己使用了多少 Token 是不可行的，模型大概率只会得出错误答案。
Token 计算方法请前往 OpenAI 官方 Token 计算器 [Tokenizer - OpenAI Platform](https://platform.openai.com/tokenizer) 进行计算。

每次发送将产生一次请求。在一次请求中，分为 **输入 Tokens** 和 **输出 Tokens**：
- **输入 Tokens**：**请求的问题** 和 **携带历史上下文对话** 消息的 Token 数量总和。
- **输出 Tokens**：模型返回的回答消息的 Token 数量。


:::info 💰 计算步骤
1. 每一条输入消息按照 *ROLE_TOKENS* + *CONTENT_TOKENS* + *NAME_TOKENS* 计算，并加入权 **TokensPerMessage** 参数 *(一般为 3)* 并相加计算总 Tokens。
2. 输出消息的 *CONTENT_TOKENS* 计算输出 Tokens。
3. **价格 = (输入 Tokens / 1000 * 输入费率) + (输出 Tokens / 1000 * 输出费率)**
:::

::: tip 🔍 请求案例
假设一轮对话中，使用 GPT-4 1106 Preview 模型，且用户的对话界面类似于：

```
用户 > 你好
回复 < 你好！有什么我可以帮助你的吗？
用户 > 你是谁

我是一个人工智能助手，由 OpenAI 创建，旨在帮助人们回答问题、提供信息、解决问题或者进行闲聊。如果你有任何疑问或需要帮助，随时告诉我！
```

在本轮对话中，一共请求两次，我们挑**第二次请求**作为示例进行计算：

输入 Token 的结构体应类似于：
```json
{
  "model": "gpt-4-1106-preview",
  "messages": [
    { "role": "user", "content": "你好" },
    { "role": "assistant", "content": "你好！有什么可以帮助你的吗？" },
    { "role": "user", "content": "你是谁" }
  ]
}
```
1. 计算输入 Token (总计 6 + 21 + 8 + 3 = **38** tokens)
   - 第一条消息 内容: `你好` (2 tokens), 角色: `user` (1 token), 权重 (3 tokens) - 总计 6 tokens
   - 第二条消息 内容: `你好！有什么可以帮助你的吗？` (17 tokens), 角色: `assistant` (1 token), 权重 (3 tokens) - 总计 21 tokens
   - 第三条消息 内容: `你是谁` (4 tokens), 角色: `user` (1 token), 权重 (3 tokens) - 总计 8 tokens
   - Reply 的前缀携带 *<|im_start|>assistant<|im_sep|>* (3 tokens)
2. 计算输出 Token (总计 **71** tokens)
   - 输出 内容: `我是...` (71 tokens)
3. 计算价格
   - 从上面的 `gpt-4-1106-preview` 价格可知，输入 Token 为 0.1 点数 / 1k token，输出 Token 为 0.3 点数 / 1k token
   - 计算价格为 (38 / 1000 * 0.1) + (71 / 1000 * 0.3) = 0.0038 + 0.0213 = **0.0251** 点数

校对站点的**使用记录**，找到此请求的记录：

![记录](/images/pricing-sample.png)

输入 Token, 输出 Token 和价格全部与计算结果相符。
:::

