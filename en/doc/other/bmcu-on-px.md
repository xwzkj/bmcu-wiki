# Using BMCU with P/X Series Printers

::: danger WARNING
Bambu Lab's firmware updates for P/X series printers have added support for AMS2 Pro and AMS HT. Since BMCU is not developed based on Bambu Lab's internal protocol documentation, compatibility issues arise with these new firmware versions, specifically manifesting as inability to set filament parameters.

For P1 series:

- Latest compatible printer firmware: `01.07.00.00`

For X1 series: 

- Latest compatible printer firmware: `01.08.50.32`

This issue may be fixed by developer `@4061N` at an unspecified future date.
:::

Starting from firmware version 2-6, the original firmware supports P/X series printers with automatic identification and simulates AMS1 operation logic.

Note: The 130 version does NOT support P series.

For P/X series printers, you need to manually install a five-way connector. The operation logic is as follows:

**Loading filament**: Same as A series

**Unloading filament**: Unlike A series which retracts a few centimeters past the five-way connector, BMCU doesn't know the tube length or five-way position. It will:

1. Retract filament past the filament sensor but before the BMG gears
2. Then slightly advance to just before the sensor
This ensures:

- No filament remains in the five-way to interfere with new filament loading
- Doesn't affect the printer's filament presence detection

Because the retraction distance is quite long, active spool rewinding is required to prevent:

- Filament tangling/jamming (especially in multi-spool containers)
- Feeding failures
- Potential damage to BMCU gear systems (in severe cases)

Recommended active rewinding solutions include:

- Bamboo Shoot Development Team's B1 electric rewinder
- Rabbit rewinding spool holder

For five-way connector installation, refer to diagrams in the firmware download cloud storage.

Alternatively, you can use firmware modified by `@xingchen` which reduces retraction time/distance to ease rewinding requirements.

Note: Since most users deploy BMCU with A1 series, P-series support and documentation is less comprehensive.

## About Multiple AMS/BMCU Systems

Each BMCU shares the same communication address, making multiple BMCU use impossible without modifications. Potential solutions:

1. Firmware modification (theoretical)
2. Using `bmcu-hub` developed by `@shenguan`

Regarding simultaneous AMS+BMCU use:

- Theoretically possible by parallel-connecting 4-pin communication cables
- No known real-world attempts exist
- Any attempts are at your own risk