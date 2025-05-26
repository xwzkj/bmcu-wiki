# Frequently Asked Questions

::: warning NOTE
The content on this page is compiled from group chat discussions and personal experiences, and may not be 100% accurate.

Most issues are caused by poor soldering techniques - please check your PCB soldering first!!!
:::

## Firmware Related

### Unable to remove write protection/firmware flashing issues

Check the following:

- Have you installed the USB-to-TTL (serial) module driver? Typically the CH340 universal serial driver.
- Have you selected the correct processor model 'CH32V203' and download method 'Serial'?
- Is the correct COM port selected? (Check under Device Manager > Ports (COM & LPT) for the port number matching your module's chip, then verify in flashing software)
  > If the port appears in Device Manager but not in flashing software, click 'Search' then expand the dropdown to select
- Correct wiring connections:

    | Board | Module |
    | :--- | :--- |
    | V+   | 3.3v |
    | GND  | GND  |
    | TX   | RX   |
    | RX   | TX   |

  > A very few modules require TX-TX/RX-RX connections (e.g. ESP01S dedicated modules) - refer to product documentation

- Correct button sequence:
  
    1. Connect DuPont wires and plug serial module into computer
    2. Hold 'B' button, briefly press 'R' button
    3. Remove protection and flash firmware on computer
    > Recommended to hold B button throughout the entire process

- Check PCB soldering for cold joints, missed connections, or solder bridges

- For CH340/CP2102 modules: Try clicking Download > Enable Auto Download > Confirm > Download again > "Write Protection Enabled" prompt appears. This usually occurs when the chip already has firmware.

- For other modules: Consider purchasing CH340/CP2102 modules like [this one](https://item.taobao.com/item.htm?abbucket=18&id=723291896174)

### (370 version) Motor rotates in wrong direction

Usually caused by firmware auto-direction detection failure. Solutions:

- Reflash firmware
- Disconnect problematic channel > Restart BMCU (press R) > Reconnect channel > Restart BMCU
- Alternatively, simply swap the motor's positive/negative wires

## Filament Loading/Unloading

### Filament position detection failure/abnormal movement

Usually caused by magnet or magnetic encoder (5600 chip) issues. Verify:
- Using radial magnets
- Extruder gear with set screw is not on the wrench
- Set screw is tight
- PCB soldering is correct

![Loading Issue](/assets/debug/进退料异常.jpg)

### (130 version) Triangle plate spins freely with motor - only loads/unloads

Caused by insufficient triangle plate resistance. Solutions:
- Apply damping grease to triangle plate gear
- Apply small drop of 502 glue to gear shaft (face downward to prevent runoff), rotate gear before fully dry
- Redesign/print triangle plate using models like `@xiaoxinleziren`'s [design](https://www.bilibili.com/video/BV1PuPCehEP3) or spring-loaded versions
- Some users mount BMCU sideways to eliminate gravity effects

### (130 version) Gear clicking noise during motor rotation

Worm gear not inserted deeply enough. For original 'Mabuchi FF130-SH' motors, insert worm gear flush with motor shaft. For other motors, experiment with depth.

For original-style housings, check if gear bracket is installed:

![Gear Bracket](/assets/debug/齿轮架.png)

> Also ensure proper gear lubrication to prevent future issues

### PTFE tube won't stay in five-way connector

Solution: [Disassemble five-way connector](https://wiki.bambulab.com/zh/a1/maintenance/filament_hub_cleaning), flatten metal clip slightly, and ensure PTFE tube near extruder is vertical

[Official guide](https://wiki.bambulab.com/zh/a1/troubleshooting/ams-lite-filament-hub-cannot-hold-tube)

![Five-way Disassembly](/assets/debug/五通拆解图.jpg)

### (370 version) Five-way connector failure

- Confirm firmware version - versions before 3-14 are more prone to failure
- Use extended buffer modification or external buffer (recommended)
- Use five-way reinforcement (temporary fix, best combined with above)
- Switch to BMCU-C Hall effect version (permanent solution)

Find related models on Makerworld

## During Printing

### Frequent filament purging during prints

Likely caused by filament length detection issues. Possible causes:

- Radial magnet not rotating with BMG gear
- Using 3mm ID PTFE tube between BMCU and printer reduces buffering
- Excessively long PTFE tube sections
- Non-standard filament diameter (unconfirmed theory)

## More Issues

Visit the [FAQ section of the 130 installation guide](/doc/build/130#常见问题及处理解析) for additional troubleshooting.