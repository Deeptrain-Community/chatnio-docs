# OpenAI API
上文接入指南一文已经介绍了 OpenAI API 的使用方法，下面将详细介绍 OpenAI API 的兼容性和扩展功能。
<PageLink href="/guide/api" title="🚀 API 接入指南" />

## OpenAI API 兼容
- **Chat Completions** (/v1/chat/completions)
- **Image Generation** (/v1/images)
- **Model List** (/v1/models)
- **Dashboard Billing** (/v1/billing)

## OpenAI API 扩展
Chat Nio 在 OpenAI API 的基础上，提供了以下参数:

### 联网功能
在上文接入指南中提到，您可以在其他项目对接时通过设置在模型前面加上 `web-` 前缀来启用联网搜索功能，如 `web-gpt-3.5-turbo`。

### 点数消耗
Chat Nio 提供了点数消耗的统计功能，您可以通过查看响应中的 `quota` 字段来查看本次请求消耗的点数。

:::warning 提示
部分应用可能不支持 Chat Nio 的扩展参数，如 OpenAI Java SDK 可能会报错 *未知参数: quota* 等，这时请尝试在模型后缀加入 `-official` 以禁止 Chat Nio 扩展参数。
:::

:::info 示例响应
```json lines
{
    "id": "...", // request id
    "object": "chat.completion",
    "created": 1696593899709, // time stamp
    "model": "gpt-4-32k", // request model, like spark-desk, bing-creative, claude-1 and etc.
    "choices": [
        ...
    ],
    "usage": {
        "prompt_tokens": 1322,
        "completion_tokens": 123,
        "total_tokens": 1445
    },
    "quota": 1.34 // quota usage // [!code ++]
}
```
:::

### 流式传输 Token 计算
在 OpenAI API 的流式传输类型中，chunk 不会提供 `usage` 字段， Chat Nio 会在 chunk 中提供 `usage` 字段，以便您了解 chunk 的 token 数情况。
:::warning
为提升性能, `completion_tokens` 字段可能不准确, 并没有以 tokenizer 结果为准, 而以 chunk 数量作为代替。
:::
```json lines
{
    "id": "...", // request id
    "object": "chat.completion",
    "created": 1696593899709, // time stamp
    "model": "gpt-3.5-turbo-0125", // request model, like spark-desk, bing-creative, claude-1 and etc.
    "choices": [
        ...
    ],
    "usage": { // [!code ++]
        "prompt_tokens": 4322, // [!code ++]
        "completion_tokens": 828, // [!code ++]
        "total_tokens": 5150 // [!code ++]
    }, // [!code ++]
    "quota": 0.001
}
```