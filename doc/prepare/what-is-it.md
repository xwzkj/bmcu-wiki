# 什么是bmcu

BMCU是AMCU的下一代项目，是兼容于AMS lite的第三方开源自动换料系统，BMCU体积小巧，成本低廉，完全开源。

他的稳定性不如AMS lite，以及作为第三方配件，后续可能会由于官方更新固件而无法使用

::: info 以下内容来自立创开源硬件平台的[BMCU](https://oshwhub.com/bamboo-shoot-xmcu-pcb-team/bmcu)描述
BMCU是根据开源资料设计的，根据Github上相关于bambubus的协议介绍，以及网友提供的参考数据，于是我们设计出了一个模拟AMS运行的系统，适用于A系列打印机。BMCU是在AMCU上特化而来，许多设计参考了网上能查到的AMS lite的工作原理。

因为其设计使用了许多开源内容，并且其功能和AMS lite过于相似，因此，BMCU是开源且不允许商业化的，仅供个人DIY学习使用。
:::

BMCU通过模拟bambu bus通讯协议、模拟ams lite和ams的运行逻辑，实现与打印机联动换色

项目使用ch32v203c8t6作为主控芯片，用75176芯片将bambu bus的rs485总线信号转换为ttl电平供单片机使用，进而实现通讯模拟。

## 关于该网站

该网站是由`@丸子`运维，由大家共同贡献的bmcu百科站，与拓竹官方没有任何关系

<!-- 如果该网站对您有所帮助，欢迎前往赞助页面向我[打赏](/doc/other/donate)，您的支持将使该网站得以获得更好的资源，为您提供更好的体验！ -->

该网站目前放养，欢迎各位大神前往[GitHub](https://github.com/xwzkj/bmcu-wiki)提交pull request以对该站点进行内容贡献

### 贡献须知

该网站使用vitepress进行编写，贡献前您需掌握以下技术：

1. `git`和`github`的使用
2. `markdown`的使用
3. `vitepress`的使用
4. `vue`的使用（非必须）

#### 贡献规则

1. 请不要在内容中加入任何形式的广告
2. 请在修改/新增的内容中**添加作者信息（署名）**
3. 请对每一个改动单独进行`git commit`，并进行详细的描述
4. 在交流时保持友善

提交pr前需确认：

1. 改动后的内容可以正确运行并被`vitepress`渲染
2. 单个图片大小**不超过500KB**，过大的图片会导致较差的浏览体验，可通过[工具](https://github.com/meowtec/Imagine)进行批量压缩
3. **页面的语法应符合标准**，应通过vscode插件[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)的语法检查
4. 内容的准确性和时效性
5. 页面的**易读性**
6. 新增的内容在站点中不重复存在
7. 其他可能被认为需要被确认的条目

若您的提交不符合以上要求，请修改后再次提交，谢谢

#### 我不懂技术，如何提出自己的想法

请前往上方的github链接中创建issue，或询问群友，让群友提交pr。

网站运维者`@丸子`因学业原因近几年不太能顾及得到这个wiki，估计有空时看看pr。
