# 💰 Quota 余额
::: info 点数
点数是 Chat Nio 的基础计费单位，可以理解为 **积分**。

[Chat Nio 官方站](https://chatnio.net) 的转换比例为：**1 元 = 10 点数**。 
:::

## 查询余额

```http request
GET https://api.chatnio.net/quota
```

简介：**查询余额，返回余额（浮点数）**。

#### 响应（200: OK）

```json
{
    "status": true,
    "quota": 12.6
}
```

#### 响应（401: Unauthorized）


## 购买余额
::: warning 注意
此接口仅 Chat Nio 官方站支持。其他站点无 Deeptrain SSO 钱包功能。
:::

```http request
POST https://api.chatnio.net/buy
```

简介：**扣除 Deeptrain 钱包余额，返回支付状态**。

#### 请求体
- <span style="color:red;">\*</span> **quota**: 购买点数数量 <div class="pro" style="scale: 0.9">Integer</div>

#### 响应（200: OK）

```json
{
    "status": true,
    "error": "success"
}
```

#### Deeptrain 余额不足（200: OK）

```json
{
    "status": false,
    "error": "not enough money"
}
```

#### 响应（401: Unauthorized）


## 查询礼包
::: info 礼包
- **cert**: 是否实名认证
- **teenager**: 是否为未成年人
:::

::: warning 注意
此接口仅 Chat Nio 官方站支持。其他站点无 Deeptrain SSO 实名认证功能。
:::

```http request
GET https://api.chatnio.net/package
```

简介：**查询礼包获取情况，返回是否符合条件并领取**。

#### 响应（200: OK）

```json
{
    "status": true,
    "data": {
        "cert": true,
        "teenager": true
    }
}
```

#### 响应（401: Unauthorized）
