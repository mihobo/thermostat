
function Thermostat(){
  this.temperature = 20,
  this.minTemp = 10
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
