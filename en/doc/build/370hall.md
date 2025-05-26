# BMCU-C (370 Hall Sensor Version) Assembly Guide

## Preface

This guide was entirely written by wanzi 😊

It is intended for the assembly of BMCU-C v0.2 channel modules.

If you don’t yet have the necessary parts, please refer to the [Bill of Materials](/doc/prepare/list) to purchase them 🛒

This article was written on my birthday (2025.4.16) 🎉

If you found this guide helpful, feel free to [support the wiki](../other/donate.md) with a donation 💖

## Preparation Before Assembly

Bundled resources for this tutorial: Coming soon. Please refer to the group file section for now 📁

- A fully soldered BMCU "Hall version" PCB, ensuring no soldering defects (e.g. cold joints, missing solder, bridges, or wrong connections). Flash the firmware—refer to the group file section for instructions on how to flash the firmware.
- The firmware flashed must be suitable for the Hall sensor version. As of 2025.4.16, the latest available firmware is `BMCU-C-4-13 Test`
- 3D printed outer shell
- 3D printed [magnet polarity detector](https://makerworld.com.cn/zh/models/1141340)

![Magnet Polarity Detector](/assets/build/build-370hall/极性确定装置.jpg)

## Main Assembly

### Component Names Overview

![Component Names Overview](/assets/build/build-370hall/名称介绍.jpg)

### Insert the 62B Bushing

Insert the 62B bushings into the back cover and the mid-frame as shown.

![Insert Bushing](/assets/build/build-370hall/轴套.jpg)

### Assemble the D2*20 Shaft and 182A Gear

Ensure both ends are protruding equally.

![Gear Assembly](/assets/build/build-370hall/齿轮轴.jpg)

### Install Worm Gear on 370 Motor and Solder Motor Wires

Align the motor shaft flush with the worm gear. Optionally, apply 502 glue for reinforcement.

The terminal with the red dot is the positive pole.

![Worm Gear and Wiring](/assets/build/build-370hall/蜗杆.jpg)

### Determine the Polarity of the Slider Magnets

::: tip
Although there are various ways to check polarity, please consider printing the [magnet polarity detector](https://makerworld.com.cn/zh/models/1141340) I designed. This helps me earn Bambu Lab credits as a motivation to maintain the wiki. Thank you for your support! 🙏
:::

Prepare a container (bowl, dish, basin, etc.) and fill it with some water 💧

![Water Container](/assets/build/build-370hall/水.jpg)

Attach two D3*10 magnets together, place them in the [polarity detector](https://makerworld.com.cn/zh/models/1141340), and float it on the water.

![Polarity Check](/assets/build/build-370hall/磁铁极性.jpg)

Once stabilized, the side facing south is the South Pole, and the other is the North Pole 🧲

### Insert Magnets into Slider

Align the slider as shown. Insert the magnet with its South Pole facing downward (toward the pneumatic joint side).

![Insert Magnet into Slider](/assets/build/build-370hall/滑块磁铁.jpg)

**Important:** The magnet must be centered exactly in the magnet slot of the slider ⚠️

### Secure Slider Magnet

Use an M2*8 self-tapping screw to fasten the magnet.

![Secure Magnet](/assets/build/build-370hall/滑块螺丝.jpg)

### Install the Motor

Insert the motor into the designated position and fix it with one M3*5 machine screw.

![Install Motor](/assets/build/build-370hall/电机螺丝.jpg)

### Install the Nut and Nut Retainer

Insert an M3 hex nut into the slot and use a retainer to secure it (no image available, but it should be intuitive).

![Nut Retainer](/assets/build/build-370hall/螺母塞.jpg)

### Insert the Gear

![Insert Gear](/assets/build/build-370hall/齿轮.jpg)

### Assemble BMG Drive Gear

Refer to the [corresponding section](./370#install-bmg-drive-wheel) in the 370 steel ball version guide.

### Assemble BMG Idler Gear

Refer to the [corresponding section](./370#assemble-bmg-driven-wheel) in the 370 steel ball version guide.

### Insert BMG Drive Gear

![Insert BMG Gear](/assets/build/build-370hall/bmg.jpg)

### Insert Steel Balls

![Insert Steel Balls](/assets/build/build-370hall/钢珠.jpg)

### Insert Jam Sensor Slider

Make sure to align the slider in the correct orientation.

![Jam Sensor Slider](/assets/build/build-370hall/断料滑块.jpg)

### Apply Lubricant

Lubricate the gears (you may take them out, apply grease, and reinsert them. No need to lubricate the BMG gear).

![Lubricate Gears](/assets/build/build-370hall/润滑齿轮.jpg)

Optionally lubricate the slider.

![Lubricate Slider](/assets/build/build-370hall/润滑滑块.jpg)

### Install Slider Springs

Insert two `0.8*12*25` springs into both ends of the slider and fit them in place.  
(Note: I temporarily used `0.7*12*30` from the 370 version for demonstration. You won't encounter such difficulty during installation.)

![Slider Springs](/assets/build/build-370hall/滑块弹簧.jpg)

### Install Jam Sensor Spring

Insert a `0.3*4*5` spring above the jam sensor slider.

![Jam Sensor Spring](/assets/build/build-370hall/断料滑块弹簧.jpg)

### Install the Mid-frame

Attach the mid-frame onto the back cover. Ensure the magnet-equipped part of the slider goes through the frame.

![Install Mid-frame](/assets/build/build-370hall/中框.jpg)

Secure it with five M2*8 self-tapping screws.

### Install the Lever

Insert a `0.6*4*10` spring into the designated slot, then place the lever.

![Insert Lever Spring](/assets/build/build-370hall/扳手1.jpg)

::: tip
If your filament guide or spool has high resistance, or you’re using a P1 printer, use [this model](https://makerworld.com.cn/zh/models/1167775) under the spring to increase clamping force.
:::

Manually press the lever and insert a D2*20 shaft.

![Insert Lever Shaft](/assets/build/build-370hall/扳手2.jpg)

Press it in with force using a tool, then use a screwdriver to push it firmly into the recess.

![Secure Lever Shaft](/assets/build/build-370hall/扳手3.jpg)

### Install Radial Magnet

Attach a D6*2.5 radial magnet above the BMG drive gear. Ensure it’s not obstructed and rotates with the gear (critical).

![Radial Magnet](/assets/build/build-370hall/径向磁铁.jpg)

::: info Tip
At this point, insert filament and use a 12V~24V power supply to test:  

- whether filament can be pulled through  
- whether the magnet rotates correctly  
- and whether lubricant is evenly distributed  
:::

::: tip
You may insert a fiber optic cable into the small hole beside the slider for light guidance. Insert fully and trim the excess ✂️
:::

### Install the Sub-board

Place the sub-board as shown.

![Sub-board](/assets/build/build-370hall/副板.jpg)

Secure with two M2*8 self-tapping screws, then solder the motor wires.

![Secure and Solder](/assets/build/build-370hall/固定副板并焊接电机线.jpg)

Tuck the excess wires into the slot.

![Wire Management](/assets/build/build-370hall/整理线材.jpg)

### Install the Front Cover

Secure with four M2*8 self-tapping screws.

![Front Cover](/assets/build/build-370hall/前盖.jpg)

### Install Pneumatic Connector

Screw the pneumatic connector into the slider.

![Pneumatic Connector](/assets/build/build-370hall/气动接头.jpg)

### Done

You can now connect the board and perform basic filament loading/unloading tests 🎉

If your WS2812B (4020 size) LEDs do not light up under any condition, double-check the soldering direction.

![WS2812 Side Mount Diagram](../prepare/assets/侧贴2812.jpg)

#### LED Status Table

> In the table below, `-` indicates the LED is unaffected or its state is unknown.

| Condition                   | Side LED | Top LED (Fiber) | Troubleshooting                                     |
| --------------------------- | -------- | --------------- | --------------------------------------------------- |
| Radial magnet not installed | -        | Red             | Check radial magnet installation & AS5600 soldering |
| Normal operation            | -        | Blue            | -                                                   |
| Channel selected (active)   | -        | White           | -                                                   |
| No filament inserted        | Black    | -               | -                                                   |
| Filament online             | White    | -               | -                                                   |
| Buffer pressed (slider)     | Blue     | -               | If side LED is red, reverse slider magnet polarity  |
| Buffer released (slider)    | Red      | -               | If side LED is blue, reverse slider magnet polarity |

Mainboard: Blue indicates normal communication with the printer; Red indicates abnormal; any other color is abnormal 🔧
