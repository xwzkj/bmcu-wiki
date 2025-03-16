# 370电机版本 x BMCU-星尘微动修改版 组装教程

::: info 提示
该版本为群友`@星尘`的修改版，该内容也来自该群友
:::

## 简介

1. 本教程为`370版本 X BMCU-微动修改版`的组装教程，与原版兼容性很高，但并不是BMCU370原版。
2. 这意味着你可以拿来当做原版的370参考（非钢珠倒置版）。
3. 项目开源地址：[BMCUx - Oshwhub.com](https://oshwhub.com/xingcc1/bmcu-370x)
4. 项目模型地址：[Makerworld CN](https://makerworld.com.cn/zh/models/1000993-bmcu-370-tie-pian-wei-dong-bo-li-zhu-hong-fa-yuan#profileId-1026446) [Makerworld Global](https://makerworld.com/zh/models/1175070-bmcu-370-surface-mount-microswitch-glass-bead-trig#profileId-1184075)
5. 关于P1系列，你需要做一些改变比如内置五通，仍在完善中，完善后会更新。
6. 欢迎尝试测试固件（各种整理中），目前推荐 ‘BMCU测试固件2-6.bin’ 。
7.你可以在这里定制固件，并进行测试：[bmcu370x  github.com](https://github.com/Xing-C/BMCU370x)
8. 本项目模型改自版本号为BMCU2.5的外壳。
9. BOM [【腾讯文档】BMCU370x - BOM清单](https://docs.qq.com/sheet/DTXJPYXVjVXpnY0F3?tab=000001)
## PCB 注意事项
 遇到问题应当先查看左侧 - 常见问题。
### 主板焊接部分
1. 应当注意二极管方向。
![potect](./assets/build-370x/pcb/potect.jpg)
2. 背面根据需求焊接。
![Myback](./assets/build-370x/pcb/Myback.png)
3. 电机的电压选择与焊接
![motor](./assets/build-370x/pcb/motor.png)
4. 从机部分切回双光电（130基础版）
![motor](./assets/build-370x/pcb/light.jpg)
4. 从机部分 - 功能
![motor](./assets/build-370x/pcb/light_1.jpg)

## 组件组装
1. 教程待补充文本，暂时只有图片流程.
1. 外壳基于第一版拍照，可能外貌略微不同。
1. 首先需要组装底壳部分。
    ![image-0](./assets/build-370x/0.jpg)
    2. 安装3个轴套与一个MR85ZZ轴承，你要保证轴套需工具按压的紧度才是最好状态。
    ![image-1](./assets/build-370x/1.jpg)
    3. 确保电机焊接好导线，如电机没有蜗杆，需使用塑料蜗杆插入并与电机轴平齐，然后放入到底壳，对准螺丝孔确保已经到位，使用M3*5螺丝进行锁紧。
    ![image-2](./assets/build-370x/2.jpg)
    4. 确保玻璃珠处足够圆润，如这里有小凸起，可用美工刀修一修。
    ![image-3](./assets/build-370x/2.1-new.jpg)
    5. 修好的样子，然后下一步。
    ![image-4](./assets/build-370x/2.2-new.jpg)
    6. 放入两根m2x20的轴销柱，对于金属齿轮，需使用1.95/1.9直径的，另外底壳/中框需要改动，因金属齿轮厚度不同，需注意, 不推荐金属齿轮。
    ![image-5](./assets/build-370x/3.jpg)
    7，套上182A塑料齿轮并按压到低，注意角度和力度推荐先按压靠近电机的那个齿轮，对于金属齿轮直接放上去即可。
    ![image-6](./assets/build-370x/4.jpg)
    8. 拿出缓冲器圆柱打印件和滑块并扣装在一起，需要确定耗材丝能够几乎无阻力的情况下穿过圆柱体，否则需要调整孔洞补偿重新打印圆柱体。
    ![image-7](./assets/build-370x/5.jpg)
    8. 对于新的缓冲器圆柱体可能需要先放入弹簧（直径为10的弹簧）。
    ![image-8](./assets/build-370x/5-new.jpg)
    9. 拿出带孔的那个BMG挤出齿轮，找到黑色顶丝，一个MR85ZZ轴承，多个M5X22轴销柱，因公差关系需要先尝试用M5X22轴去插MR85ZZ轴承并寻找到合适的轴销柱，即能够较轻松放入的。
    ![image-9](./assets/build-370x/6.jpg)
    10. 先放置MR85ZZ轴承，使用挑选的M5X22轴销柱插入，然后把BMG齿轮没齿的那一面朝下套进去，如下图所示，确保都按压在最底下形成平面后，使用内六角扳手安装并拧紧顶丝，确保BMG能够通过轴销柱带动轴承能够一起转动。
    ![image-10](./assets/build-370x/7.jpg)
    11. 拿出并齿轮，对电机的蜗杆部分和182A齿轮进行润滑，然后放回去，但是别去润滑BMG，以免润滑油/脂粘到耗材丝。
    ![image-11](./assets/build-370x/8.jpg)
    11. 确保放好了。
    ![image-12](./assets/build-370x/9.jpg)
    12. 然后放入BMG齿轮，确保上半部分不碰到润滑油脂，BMG齿轮下半部分会被齿轮润滑一点，但不需要主动去润滑BMG齿轮。
    ![image-13](./assets/build-370x/10.jpg)
    13. 放入缓冲器以及弹簧，原版长度推荐为35，加长版为50 (mm)。
    ![image-14](./assets/build-370x/11.jpg)
    14. 把弹簧压进外壳，不要被弹出来。
    ![image-15](./assets/build-370x/12.jpg)
    15. 拿出中框打印件。
    ![image-16](./assets/build-370x/13.jpg)
    16. 安装三颗轴套到中框上，确保和底壳一样紧（通常中框轴套的安装会比底壳的要轻松一点）。
    ![image-17](./assets/build-370x/14.jpg)
    17. 准备安装中框，先把电机线穿出来相同长度不夹线，确保齿轮的轴对准中框的轴套孔，以及BMG齿轮那里的MR85ZZ轴承对准了槽位，并确保弹簧还在壳子里部分而不是卡着，中框安装好后可以试着扣一下弹簧。
    ![image-18](./assets/build-370x/15.jpg)
    18. 安装好的样子。
    ![image-19](./assets/build-370x/15.1.jpg)
    19. 小心翼翼的翻转到背面，然后用力按压减少缝隙并拧紧5颗 m2*8的自攻螺丝。
    ![image-20](./assets/build-370x/16.jpg)
    20. 准备安装扳手部分。
    ![image-21](./assets/build-370x/17.jpg)
    ![image-22](./assets/build-370x/18.jpg)
    ![image-23](./assets/build-370x/19.jpg)
    ![image-24](./assets/build-370x/20.jpg)
    ![image-25](./assets/build-370x/21.jpg)
    ![image-26](./assets/build-370x/22.jpg)
    ![image-27](./assets/build-370x/23.jpg)
    ![image-28](./assets/build-370x/24.jpg)
    ![image-29](./assets/build-370x/25.jpg)
    ![image-30](./assets/build-370x/26.jpg)
    ![image-31](./assets/build-370x/27.jpg)
    ![image-32](./assets/build-370x/27.1.jpg)
    ![image-33](./assets/build-370x/28.jpg)
    ![image-34](./assets/build-370x/29.jpg)
    ![image-35](./assets/build-370x/30.jpg)
    ![image-36](./assets/build-370x/31.jpg)
    ![image-37](./assets/build-370x/32.jpg)
    ![image-38](./assets/build-370x/33.jpg)
    ![image-39](./assets/build-370x/34.jpg)
    ![image-40](./assets/build-370x/35.jpg)
