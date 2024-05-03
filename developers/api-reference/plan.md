# 🎁 Plan 订阅

## 查询订阅

```http request
GET https://api.chatnio.net/subscription
```

简介：**查询订阅，返回是否订阅和订阅剩余天数**。

#### 响应（200: OK）

```json
{
    "status": true,
    "is_subscribed": true,
    "expired": 11
}
```

#### 响应（401: Unauthorized）

## 购买订阅

```http request
POST https://api.chatnio.net/subscribe
```

简介：**购买订阅，从 Deeptrain 钱包扣除余额，返回订阅状态**。

#### 请求体
- <span style="color:red;">\*</span> month: 订阅月数 <div class="pro" style="scale: 0.9">Integer</div>
- <span style="color:red;">\*</span> level: 订阅级别 <div class="pro" style="scale: 0.9">Integer</div>
    - **1**: 基础版订阅
    - **2**: 高级版订阅
    - **3**: 专业版订阅

#### 响应（200: OK）

```json
{
    "status": false,
    "error": "success"
}
```

#### 响应（401: Unauthorized）
