# Preparation Before Making

:::warning
Do not use transparent filament to print the housing!!!!!
If you have unfortunately used transparent filament, try coloring the optical detection area with a black marker.
:::

## Materials Needed for Making BMCU

::: details Should I make the 130 version, the 370 version, or another derivative version?
Each has its own advantages and disadvantages, which depend on your needs.

Personal recommendation is to go with the latest, more stable version.

The 130 version is an earlier model with complex structural adjustments. The main drawback currently is that the motor is difficult to source.

The 370 version is newer, with a simpler structure and powerful motors, but it's still in the testing phase and may involve hardware changes.

For detailed differences between versions, see [Version Branches](/doc/prepare/versions).
:::

First, purchase the necessary electronic components and mechanical parts for making BMCU. For more details, refer to the [Bill of Materials](./list.md) page or the group files.

>[Join the Group Chat Here](https://qm.qq.com/q/wYYZ1IeaSk)

:::tip
It is recommended to place orders through the links provided on the [Bill of Materials](./list.md) page, where quantities and detailed specifications have been pre-selected. **For third-party modifications, please check the differences yourself**.
:::

:::danger Common Mistakes
When purchasing microcontrollers, make sure to choose the correct specifications. Do not buy the 103 model; instead, buy the 203 model.
:::

- Buy extra pneumatic fittings. BMCU uses eight, while the material box uses four. It's good to have extras as they are commonly used.
- It is suggested to purchase WD-40 multi-purpose products and Tiger Head grease for gear lubrication. For the 130 version, using `medium-high resistance` damping grease is recommended to increase the resistance of the `triangle plate` clutch mechanism.
- Ensure that the PTFE tube between the BMCU and the five-way connector is not too short. It is recommended to be at least half a meter long to reduce failures.
- After purchasing the listed parts, proceed to JLCPCB for PCB fabrication.

### Common Issues When Purchasing

::: details Why do the material lists for different versions look almost the same?
Currently, the materials used are often similar, but the specific quantities and additions vary significantly by version. Therefore, it's necessary to select and view the corresponding material list based on the version.
:::

:::details What if Youxin Electronics does not have the 130 motor in stock?
If you're not aiming for ultimate quietness, consider the 370 version.

For purchasing the 130 motor, [see the hints here](./list.html#%E6%8C%A4%E5%87%BA%E7%BB%84%E4%BB%B6%E9%83%A8%E5%88%86-%E5%B7%B2%E4%B9%98%E5%9B%9B%E9%80%9A%E9%81%93).
:::

## Common Tools Needed for Making BMCU

| Name                                                 | Required | Description                                                                                           |
| :--------------------------------------------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| Soldering iron + solder wire + flux + tweezers, etc. | Required | Used for soldering the BMCU circuitry. A T12 adjustable temperature soldering station is recommended. |
| Hotplate / hot air gun + solder paste + steel mesh   | Optional | Useful for densely populated PCBs, highly recommended for these tools.                                |
| One 3D printer                                       | Required | Since you're making BMCU, you probably already have one for printing the housing.                     |
| PETG filament                                        | Required | Compared to PLA, PETG is more suitable for printing durable parts. Highly recommended.                |
| Phillips screwdriver                                 | Required | For installing screws, a 3mm screwdriver is recommended.                                              |
| Craft knife / utility knife                          | Optional | May come in handy for unexpected uses, such as clearing the optical filament detection hole.          |
| Diagonal pliers (small blue scissors will do)        | Required | For trimming printed parts.                                                                           |
| CH340 USB-to-TTL module                              | Required | For firmware flashing.                                                                                |