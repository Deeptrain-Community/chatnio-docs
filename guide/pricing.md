# 🧐 AI 模型计费

[Chat Nio 官方站](https://chatnio.net/) 有两种计费方式。一种是随用随付的弹性计费，一种是订阅计划。

**💰 官方站 1 人民币 兑换 10 点数 💰**

**⭐ API 中转仅支持弹性计费, 不涵盖订阅配额 ⭐**

**⚠ 其他站点请参阅其站点的信息，与官方站计费无关 ⚠**

最新的订阅计划配额请前往官方站查看，下列仅列出弹性计费价格：

## 最低余额限制

为了防止超出余额的部分过多，同时为了防止滥用，Chat Nio 设定了特定模型的最低余额预检，当小于该余额时，不可发起请求。

- ✨ 不计费模型：无最低余额限制
- ✨ 按次计费模型：单次调用费用
- ✨ Token 计费模型：1K 输入 Token 费用 + 1K 输出 Token 费用


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
        <p>gpt-4-turbo-preview</p>
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
      <td>azure-gpt-4-turbo-preview</td>
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

> gpt-3.5 free 系列为逆向模型，不保证稳定性。
> 
> 除 `gpt-4-0613` 和逆向模型外，全部支持 Function Calling 调用。

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

## Anthropic Claude

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td><p>claude-1-100k, claude-1, </p><p>claude-1.3, </p><p>cluade-slack (废弃)</p></td><td>对齐<a href="https://anthropic.com/pricing/">官网</a>计费</td><td>0.08</td><td>0.27</td></tr><tr><td>claude-2, claude-2.1</td><td>对齐<a href="https://anthropic.com/pricing/">官网</a>计费</td><td>0.8</td><td>2.7</td></tr><tr><td>claude-3-opus-20240229</td><td>价格同 gpt-4-32k</td><td></td><td></td></tr><tr><td>claude-3-sonnet-20240229</td><td>价格同 gpt-4</td><td></td><td></td></tr><tr><td>claude-3-haiku-20240307</td><td>价格同 gpt-3.5-turbo-16k</td><td></td><td></td></tr></tbody></table>

## SparkDesk 讯飞星火

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td><p>spark-desk-v3.5</p><p>spark-desk-v3</p><p>spark-desk-v2</p></td><td>对齐<a href="https://xinghuo.xfyun.cn/sparkapi">官网</a>计费</td><td>0.3</td><td>0.3</td></tr><tr><td>spark-desk-v1.5</td><td>对齐<a href="https://xinghuo.xfyun.cn/sparkapi">官网</a>计费</td><td>0.15</td><td>0.15</td></tr></tbody></table>

## ChatGLM 智谱清言

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>glm-4</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>1</td><td>1</td></tr><tr><td>glm-4v</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>1</td><td>1</td></tr><tr><td>glm-3-turbo</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>0.05</td><td>0.05</td></tr><tr><td>zhipu-chatglm-turbo (智谱v3 格式, 同 glm-3-turbo)</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>0.05</td><td>0.05</td></tr><tr><td>zhipu-chatglm-pro（废弃）</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>0.1</td><td>0.1</td></tr><tr><td>zhipu-chatglm-std（废弃）</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>0.05</td><td>0.05</td></tr><tr><td>zhipu-chatglm-lite（废弃）</td><td>对齐<a href="https://open.bigmodel.cn/pricing">官网</a>计费</td><td>0.05</td><td>0.05</td></tr></tbody></table>

> `zhipu-chatglm-turbo`, `zhipu-chatglm-pro`, `zhipu-chatglm-std`, `zhipu-chatglm-lite` 为 ChatGLM 旧版 V3 模型，已废弃。 
## DashScope 通义千问

<table><thead><tr><th>模型</th><th>费率</th><th>问题 Token (点数 / 1k token)</th><th>回答 Token (点数 / 1k token)</th></tr></thead><tbody><tr><td>qwen-plus</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.2</td><td>0.2</td></tr><tr><td>qwen-plus-net</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.2</td><td>0.2</td></tr><tr><td>qwen-turbo</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.08</td><td>0.08</td></tr><tr><td>qwen-turbo-net</td><td>对齐<a href="https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-thousand-questions-metering-and-billing">官网</a>计费</td><td>0.08</td><td>0.08</td></tr></tbody></table>

## Google Gemini / PaLM2

| 模型                                                                    | 回答 Token (点数 / 次数) |
|-----------------------------------------------------------------------|--------------------|
| <p>gemini-pro</p><p>gemini-pro-vision</p><p>gemini-1.5-pro-latest</p> | 0.05 / 次           |
| chat-bison-001 (已废弃)                                                  | 0.05 / 次           |

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
