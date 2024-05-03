# ⏱ Conversation 会话

## 列出对话

```http request
GET https://api.chatnio.net/conversation/list
```

简介：**列出近 100 次对话**。

#### 响应（200: OK）

```json
{
    "status": true,
    "message": "",
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "name": "new chat",
            "message": null,
            "model": "spark-desk", // latest model
            "enable_web": true // latest option
        }
    ]
}
```

#### 响应（401: Unauthorized）

## 获取对话

```http request
GET https://api.chatnio.net/conversation/load?id=1
```

简介：**获取单个对话内容**。

#### 参数

- <span style="color:red;">\*</span> **id**: 会话 ID <div class="pro" style="scale: 0.9">Integer</div>

#### 响应（200: OK）

```json
{
    "status": true,
    "message": "success",
    "data": {
        "id": 1,
        "user_id": 1,
        "name": "what is chatnio",
        "message": [
            {"role": "system", "content": "Respond with accurate content in the user's language"},
            {"role": "user", "content": "what is chatnio"},
            {"role": "assistant", "content": "As an AI language model, ..."}
        ],
        "model": "gpt-3.5-turbo-0613", // latest model
        "enable_web": false // latest option
    }
}
```

#### 响应（200: OK - Conversation Not Found）

```json
{
    "status": false,
    "message": "conversation not found"
}
```

#### 响应（401: Unauthorized）

## 删除对话

```http request
GET https://api.chatnio.net/conversation/delete?id=1
```

**简介：**获取单个对话内容。

#### 参数

- **id** (Integer, required): 对话 ID （整数）

#### 响应（200: OK）

```json
{
    "status": true
}
```

#### 响应（200: Conversation Not Found）

```json
{
    "status": false,
    "message": "conversation not found"
}
```

#### 响应（401: Unauthorized）
