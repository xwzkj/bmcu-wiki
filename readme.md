# BMCU WIKI

由vitepress驱动。

## 如何在本地运行

### 环境准备

1. 安装node.js
2. 安装git

采用git clone，克隆本项目到本地

```bash
git clone https://github.com/xwzkj/bmcu-wiki.git .
```

此处末尾的`.`表示克隆到当前目录，请在运行该命令前切换当前目录到你希望存放项目的空目录下

> 若您想对wiki进行贡献，请`fork`本项目，并通过`ssh链接`来`clone` 您`fork`后产生的您自己的仓库，并在修改后提交到您自己的仓库，然后创建pull request

紧接着，运行以下命令安装依赖（如果网络不通畅请更换为大陆的npm镜像源）

```bash
npm install
```

然后你可以运行以下命令启动vite调试服务器

```bash
npm run dev
```

或者运行以下命令 构建项目为静态文件 并 启动一个预览服务器

```bash
npm run build
npm run preview
```

### 贡献须知

请前往wiki中的[`#贡献须知`](https://bmcu.wanzii.cn/doc/prepare/what-is-it.html#%E8%B4%A1%E7%8C%AE%E9%A1%BB%E7%9F%A5)板块查看相关信息