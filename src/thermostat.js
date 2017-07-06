
function Thermostat(){
  this.temperature = 20,
  this.minTemp = 10,
  this.powerSavingModeOn = true,
  this.maxTempPSMOn = 25
}

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  this.temperature--;
};

Thermostat.prototype.checkMinimum = function() {
  if (this.temperature <= this.minTemp) {
    throw new Error("Brrr");
  };
};

Thermostat.prototype.checkMax = function() {
  if (this.temperature >= this.maxTempPSMOn) {
    throw new Error("Cannot go beyond 25");
  };
};
