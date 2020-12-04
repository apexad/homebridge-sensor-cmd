import { AccessoryConfig, AccessoryPlugin, API, CharacteristicEventTypes, CharacteristicGetCallback, HAP, Logging, Service } from 'homebridge';
import { exec } from 'child_process';
let hap: HAP;

export = (api: API) => { hap = api.hap; api.registerAccessory('SensorCmd', SensorCmd); };

class SensorCmd implements AccessoryPlugin {
  private readonly sensorService: Service;
  private readonly infoService: Service;

  constructor(private readonly log: Logging, private readonly config: AccessoryConfig) {
    this.log = log;
    this.sensorService = new hap.Service.ContactSensor(this.config.name);
    this.sensorService.getCharacteristic(hap.Characteristic.ContactSensorState)
      .on(CharacteristicEventTypes.GET, (callback: CharacteristicGetCallback) => {
        exec(this.config.command, (err, stdout) => callback(null, err ? 0 : parseInt(stdout)));
      });
    this.infoService = new hap.Service.AccessoryInformation()
      .setCharacteristic(hap.Characteristic.Manufacturer, 'apexad')
      .setCharacteristic(hap.Characteristic.Model, 'sensor-cmd');
  }

  getServices(): Service[] { return [ this.infoService, this.sensorService ]; }
}
