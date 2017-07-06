'use strict';
function Thermostat(){
  this.temperature = 20,
  this.minTemp = 10,
  this.powerSavingModeOn = true,
  this.readPSM = "ON",
  this.maxTempPSMOn = 25,
  this.maxTempPSMOff = 32,
  this.usage = "medium-usage"
}

Thermostat.prototype.up = function() {
  this.checkMax();
  this.temperature++;
};

Thermostat.prototype.down = function() {
  this.checkMin();
  this.temperature--;
};

Thermostat.prototype.checkMin = function() {
  if (this.temperature <= this.minTemp) {
    throw new Error("Brrr");
  }
};

Thermostat.prototype.checkMax = function() {
  if (this.temperature >= this.maxTempPSMOn && this.powerSavingModeOn === true) {
    throw new Error("Cannot go beyond 25");
  }
  if (this.temperature >= this.maxTempPSMOff && this.powerSavingModeOn === false) {
    throw new Error("Cannot go beyond 32");
  }
};

Thermostat.prototype.powerSavingModeSwitch = function () {
  this.powerSavingModeOn = !this.powerSavingModeOn;
  this.readPowerSavingMode();
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function () {
  if (this.temperature < 18) {
    this.usage = "low-usage"
  } else if (this.temperature < 25) {
    this.usage = "medium-usage"
  } else {
    this.usage = "high-usage"
  };
};

Thermostat.prototype.readPowerSavingMode = function () {
  if (this.powerSavingModeOn) {
    this.readPSM = "ON"
  } else {
    this.readPSM = "OFF"
  };
};
