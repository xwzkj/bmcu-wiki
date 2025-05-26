# 370 Motor Version x BMCU-Stardust Microswitch Modified Version Assembly Tutorial

::: info Note
This version is a modified version by the group member `@Stardust`, and the content is also from this group member.
:::

## Introduction

1. This tutorial is the assembly guide for the `370 Version X BMCU-Microswitch Modified Version`, which has high compatibility with the original version but is not the original BMCU370 version.
2. This means you can use it as a reference for the original 370 version (non-inverted steel ball version).
3. Project open-source address: [BMCUx - Oshwhub.com](https://oshwhub.com/xingcc1/bmcu-370x)
4. Project model address: [Makerworld CN](https://makerworld.com.cn/zh/models/1000993-bmcu-370-tie-pian-wei-dong-bo-li-zhu-hong-fa-yuan#profileId-1026446) [Makerworld Global](https://makerworld.com/zh/models/1175070-bmcu-370-surface-mount-microswitch-glass-bead-trig#profileId-1184075)
5. For the P1 series, you need to make some changes, such as the built-in five-way connector, which is still under improvement and will be updated once completed.
6. Welcome to try the test firmware (currently being organized). The recommended version is `BMCU Test Firmware 2-6.bin`.
7. You can customize and test the firmware here: [bmcu370x github.com](https://github.com/Xing-C/BMCU370x)
8. The model for this project is modified from the BMCU2.5 version shell.

## PCB BOM

1. [【Tencent Docs】BMCU370x - BOM List](https://docs.qq.com/sheet/DTXJPYXVjVXpnY0F3?tab=000001)

## PCB Notes

If you encounter issues, please first check the left sidebar - [[FAQ]](../prepare/prepare.md).

### Mainboard Soldering Section

1. Pay attention to the diode direction.
   ![potect](/assets/build/build-370x/pcb/potect.jpg)
2. Solder the backside as needed.
   ![Myback](/assets/build/build-370x/pcb/Myback.png)
3. Motor voltage selection and soldering.
   ![motor](/assets/build/build-370x/pcb/motor.png)
4. Slave section: Revert to dual photoelectric (130 basic version).
   ![motor](/assets/build/build-370x/pcb/light.jpg)
5. Slave section - Functions.
   ![motor](/assets/build/build-370x/pcb/light_1.jpg)

## Component Assembly

1. The tutorial may have oversights. If you find any errors, feel free to correct them and discuss with group members.
2. The shell is based on the first version for photography, so the appearance may slightly differ.
3. First, assemble the bottom shell part.
   ![image-0](/assets/build/build-370x/0.jpg)
4. Install 3 bushings and 1 MR85ZZ bearing. Ensure the bushings are pressed tightly for optimal performance.
   ![image-1](/assets/build/build-370x/1.jpg)
5. Ensure the motor wires are soldered. If the motor lacks a worm gear, insert a plastic worm gear and align it with the motor shaft. Then place it into the bottom shell, align the screw holes, and secure it with M3x5 flat-head screws.
   ![image-2](/assets/build/build-370x/2.jpg)
6. Ensure the glass bead area is smooth. If there are small protrusions, use a craft knife to trim them.
   ![image-3](/assets/build/build-370x/2.1-new.jpg)
7. After trimming, proceed to the next step.
   ![image-4](/assets/build/build-370x/2.2-new.jpg)
8. Insert two M2x20 dowel pins. For metal gears, use pins with a diameter of 1.95/1.9mm. Note that the bottom shell/middle frame may need modifications due to the different thickness of metal gears. Metal gears are not recommended.
   ![image-5](/assets/build/build-370x/3.jpg)
9. Slide the 182A plastic gear onto the dowel pin and press it down firmly. Pay attention to the angle and force. It's recommended to press the gear closer to the motor first. For metal gears, simply place them on.
   ![image-6](/assets/build/build-370x/4.jpg)
10. Take out the buffer cylinder printed part and the slider, then snap them together. Ensure the filament can pass through the cylinder with almost no resistance. Otherwise, adjust the hole compensation and reprint the cylinder.
    ![image-7](/assets/build/build-370x/5.jpg)
11. For the new buffer cylinder, you may need to insert the spring (10mm diameter spring) first.
    ![image-8](/assets/build/build-370x/5-new.jpg)
12. Take out the BMG extruder gear with holes, a black set screw, an MR85ZZ bearing, and multiple M5x22 dowel pins. Due to tolerances, test-fit the MR85ZZ bearing with the M5x22 dowel pin to find the one that fits snugly but can still be inserted easily.
    ![image-9](/assets/build/build-370x/6.jpg)
13. First, place the MR85ZZ bearing. Insert the selected M5x22 dowel pin, then slide the BMG gear (toothless side down) onto it. As shown below, ensure everything is pressed down to form a flat surface. Use a hex key to tighten the set screw, ensuring the BMG gear can rotate the bearing via the dowel pin.
    ![image-10](/assets/build/build-370x/7.jpg)
14. Take out the gears and lubricate the motor worm gear and 182A gear. Then reinstall them, but avoid lubricating the BMG gear to prevent grease from contaminating the filament.
    ![image-11](/assets/build/build-370x/8.jpg)
15. Ensure everything is properly installed.
    ![image-12](/assets/build/build-370x/9.jpg)
16. Then place the BMG gear, ensuring the upper part does not touch the lubricant. The lower part of the BMG gear may get slightly lubricated by the gears, but do not actively lubricate the BMG gear.
    ![image-13](/assets/build/build-370x/10.jpg)
17. Insert the buffer and spring. The recommended length for the original version is 35mm, and the extended version is 50mm.
    ![image-14](/assets/build/build-370x/11.jpg)
18. Press the spring into the shell, ensuring it doesn’t pop out.
    ![image-15](/assets/build/build-370x/12.jpg)
19. Take out the middle frame printed part.
    ![image-16](/assets/build/build-370x/13.jpg)
20. Install three bushings into the middle frame, ensuring they are as tight as those in the bottom shell (usually, the middle frame bushings are easier to install).
    ![image-17](/assets/build/build-370x/14.jpg)
21. Prepare to install the middle frame. First, thread the motor wires out to the same length without pinching them. Ensure the gear shafts align with the bushing holes in the middle frame and the MR85ZZ bearing at the BMG gear aligns with its slot. Also, ensure the spring is inside the shell and not stuck. After installing the middle frame, try pressing the spring.
    ![image-18](/assets/build/build-370x/15.jpg)
22. How it looks after installation.
    ![image-19](/assets/build/build-370x/15.1.jpg)
23. Carefully flip it over, press firmly to reduce gaps, and tighten the five M2x8 self-tapping screws.
    ![image-20](/assets/build/build-370x/16.jpg)
24. Prepare to install the lever part: a 0.6x4x15 spring (recommended: 0.4x4x15), two M2x10 dowel pins, two ball bearings from the BMG kit, one dowel pin, and one BMG gear without holes (purchased from 1688 may all have holes).
    ![image-21](/assets/build/build-370x/17.jpg)
25. Insert the two ball bearings into the BMG gear.
    ![image-22](/assets/build/build-370x/18.jpg)
26. Take out the lever printed part (if not printed upright, it may need sanding) and place the BMG gear on it. Pay attention to the direction: the toothed side should face the thicker side.
    ![image-23](/assets/build/build-370x/19.jpg)
27. Stand it upright and press the dowel pin from the kit into place, ensuring it is centered on both sides.
    ![image-24](/assets/build/build-370x/20.jpg)
28. After installation, test the rotation of the BMG gear. It should rotate smoothly; otherwise, sand the printed part.
    ![image-25](/assets/build/build-370x/21.jpg)
29. Stand the feeding assembly upright and insert the lever spring (0.6x4x15, recommended: 0.4x4x15).
    ![image-26](/assets/build/build-370x/22.jpg)
30. Install the lever, ensuring the spring aligns with the hole.
    ![image-27](/assets/build/build-370x/23.jpg)
31. Hold the lever and assembly flat, ensuring the bushing and lever holes are aligned. Prepare to install the dowel pin.
    ![image-28](/assets/build/build-370x/24.jpg)
32. Insert the M2x10 dowel pin and press it in with a tool.
    ![image-29](/assets/build/build-370x/25.jpg)
33. Ensure it is installed properly and does not protrude beyond the shell.
    ![image-30](/assets/build/build-370x/26.jpg)
34. Flip to the other side, hold the lever flat, and press in another M2x10 dowel pin.
    ![image-31](/assets/build/build-370x/27.jpg)
35. Ensure proper installation, then proceed to the next step.
    ![image-32](/assets/build/build-370x/27.1.jpg)
36. Prepare a 5mm diameter glass bead (heavier alternatives like steel beads are not recommended).
    ![image-33](/assets/build/build-370x/28.jpg)
37. Place it into the hole, ensuring it can drop out easily when turned upside down.
    ![image-34](/assets/build/build-370x/29.jpg)
38. Install the radial magnet onto the BMG gear shaft. The radial magnet size is 6x2.5mm. After installation, there should be some distance between the magnet and the shell. If it doesn’t rotate, there’s an issue. Note: Regular magnets cannot replace radial magnets.
    ![image-35](/assets/build/build-370x/30.jpg)
39. Then place the component PCB.
    ![image-36](/assets/build/build-370x/31.jpg)
40. Secure it with two M2x8 self-tapping screws. Tighten both screws gradually to avoid misalignment.
    ![image-37](/assets/build/build-370x/32.jpg)
41. Solder the motor wires. For older firmware (e.g., 130), ensure correct polarity to avoid reverse motor rotation. For newer firmware (from 3-14 onwards), the BMCU automatically determines the direction.
    ![image-38](/assets/build/build-370x/33.jpg)
42. Place the top cover plate, ensuring it doesn’t pinch the wires or leave gaps.
    ![image-39](/assets/build/build-370x/34.jpg)
43. Tighten the four M2x8 self-tapping screws. Congratulations, you’ve completed the assembly of one channel!
    ![image-40](/assets/build/build-370x/35.jpg)

::: info Note
The number of feeding components determines your multi-color channels. To make the device functional, you need to install 2-4 feeding components.
:::

## Final Assembly

1. To be continued...