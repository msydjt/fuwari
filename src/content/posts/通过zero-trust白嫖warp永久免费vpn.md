---
title: "通过Zero Trust白嫖Warp+永久免费VPN"
published: 2025-10-06
description: ""
tags: ["cloudflare", "vpn", "warp", "zerotrust", "free"]
category: "article"
draft: false
---

一、在Cloudflare创建团队  
1.注册[Cloudflare](https://dash.cloudflare.com/login?lang=zh-hans-cn)账号，登录后选择左侧栏的"Zero Trust"。  
2.绑定支付方式，可以选择信用卡和PayPal。实测Visa虚拟卡可以通过验证。如果选择免费计划，是不会产生扣费的。  
3.自定义一个团队名称，之后可以随时修改。

二、设置Zero Trust规则

打开 Zero Trust 页面，点击设置，点击WARP客户端,点击设备注册权限管理，添加规则，将EmailS ending in值改为允许的电子邮件后缀，如 @gmail.com（因为CF的免费计划不能使用自己的域名邮箱做中转，所以不要设置自己域名的邮箱后缀）。滚动到最底下，保存规则。

三、登录Warp+

1.在[Warp+官网](https://one.one.one.one/)下载对应设备的WARP客户端安装包，并安装。  
2.打开软件，点击右下角的设置按钮，点击偏好设置，之后点击帐户，选择登录到Zero Trust。输入你刚刚创建的团队名称，会在浏览器打开登录页面，输入你之前设置的允许后缀的邮箱（如Gmail），接收并输入验证码，就登录成功了。

四、连接时可能出现的问题  
如果你像我一样可以直接连接就好了（开个玩笑）。  
如果连接失败或一直处于连接状态，可以尝试使用IP优选工具。使用前注意先关闭所有代理。工具可能会让你选择IP协议，有IPv6的就选IPv6，没有的就默认用IPv4，回车，等待工具跑完，之后就可以尝试连接WARP了。  
速度是很快的，晚高峰YouTube 4K视频可以秒开。  
让我康康IP在哪，等等，上海？
