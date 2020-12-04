# homebridge-sensor-cmd

[![mit license](https://badgen.net/badge/license/MIT/red)](https://github.com/apexad/homebridge-sensor-cmd/blob/master/LICENSE)
[![npm](https://badgen.net/npm/v/homebridge-sensor-cmd)](https://www.npmjs.com/package/homebridge-sensor-cmd)
[![npm](https://badgen.net/npm/dt/homebridge-sensor-cmd)](https://www.npmjs.com/package/homebridge-sensor-cmd)
[![donate](https://badgen.net/badge/donate/paypal/91BE09)](https://www.paypal.me/apexadm)

[Homebridge](https://github.com/homebridge/homebridge) plugin that creates a contact sensor with state determined by a command-line/shell command in only 25 lines of code (and the README is also only 25 lines).

## Configuration
This easiest way to use this plugin is to use [homebridge-config-ui-x](https://www.npmjs.com/package/homebridge-config-ui-x).  
To configure manually, add to the `accessories` section of Homebridge's `config.json` after installing the plugin.

**Config:**
```json
{
  "accessory": "SensorCmd",
  "name": "Sensor",
  "command": "<command-line/shell command to execute>"
}
```

## Sponsors
[mbmccormick](https://github.com/mbmccormick)
