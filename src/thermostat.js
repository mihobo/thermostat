
function Thermostat(){
  this.temperature = 20,
  this.minTemp = 10,
  this.powerSavingModeOn = true,
  this.maxTempPSMOn = 25,
  this.maxTempPSMOff = 32
}

Thermostat.prototype.up = function() {
  this.checkMax();
  this.temperature++;
};

Thermostat.prototype.down = function() {
  this.checkMinimum();
  this.temperature--;
};

Thermostat.prototype.checkMinimum = function() {
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
  return this.powerSavingModeOn = !this.powerSavingModeOn;
};
