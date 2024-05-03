# 😀 Chat 对话

```http request
WEBSOCKET wss://api.chatnio.net/chat
```

:::tip 说明
在开始对话前, 需要先发送**鉴权参数**结构, 之后即可发送**对话参数**结构, 并接收流式输出的**响应参数**。
:::

#### 鉴权参数

| Name                                    | Type   | Description          |
|-----------------------------------------|--------|----------------------|
| token<span style="color:red;">\*</span> | String | API Key              |
| id<span style="color:red;">\*</span>    | String | 对话 ID (新对话时为 **-1**) |

#### 对话参数

| Name                                      | Type   | Description                                                              |
|-------------------------------------------|--------|--------------------------------------------------------------------------|
| message<span style="color:red;">\*</span> | String | 消息                                                                       |
| model<span style="color:red;">\*</span>   | String | AI 模型 [ai-mo-xing-ji-ji-fei.md](../../ai-mo-xing-ji-ji-fei.md "mention") |
| web                                       | String | 是否开启联网功能（默认**关闭**）                                                       |
| type                                      | String | 默认 **chat** 即可, **stop** 为暂停输出, **restart** 为重新回答                        |

#### 流响应结构
```json
{
    "message": " how", // chunk message
    "quota": 0.02, // quota usage
    "end": false // output status
}
```

<br>

:::tip 连接示例

```json lines
WEBSOCKET wss://api.chatnio.net/chat

> SEND {"token":"sk-...","id":-1} // [!code highlight]
> SEND {"type": "chat", "message": "hi", "web": false, "model": "gpt-4", "ignore_context": false} // [!code highlight]
< RECV {"quota": 0, "keyword": "", "message": "Hello", "end": false}
< RECV {"quota": 0.0034000003, "keyword": "", "message": "!", "end": false}
< RECV {"quota": 0.0034000003, "keyword": "", "message": "", "end": true}
```
:::