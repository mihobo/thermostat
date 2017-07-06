'use strict';
describe("Thermostat", function(){
  
  var thermostat;
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  
  describe("#temperature", function(){
    it("will be set to twenty at initialisation", function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });
  
  describe("#up", function(){
    it("will increase the temp by one degree", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });
  
  describe("#down", function(){
    it("will decrease the temp by one degree", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });
  
  describe("#checkMin", function(){
    it("will throw an error if the temp is below 10 degrees", function() {
      for(var i = 20; i > 10; i--) {
        thermostat.down();
      };
      expect( function() { thermostat.checkMin() } ).toThrow(new Error("Brrr"));
    });
  });
  
  describe("#powerSavingModeOn", function(){
    it("has power saving mode on by default", function() {
      expect(thermostat.powerSavingModeOn).toEqual(true);
    });
  });
  
  describe("#powerSavingModeSwitch", function() {
    it("changes the value of powerSavingModeOn", function() {
      thermostat.powerSavingModeSwitch();
      expect(thermostat.powerSavingModeOn).toEqual(false);
    });
    
    it("changes the value of powerSavingModeOn", function() {
      thermostat.powerSavingModeSwitch();
      thermostat.powerSavingModeSwitch();
      expect(thermostat.powerSavingModeOn).toEqual(true);
    });
    
  });
  
  describe("#maxTemp", function(){
    it("has a maximum temperature of 25 degrees when power saving mode is on", function() {
      for(var i = 20; i < 25; i++) {
        thermostat.up();
      }
      expect( function() { thermostat.checkMax() } ).toThrow(new Error("Cannot go beyond 25"));
    });
    
    it("has a maximum temperature of 32 degrees when power saving mode is off", function() {
      thermostat.powerSavingModeSwitch();
      for (var i = 20; i < 32; i++) {
        thermostat.up();
      }
      expect( function() {
        thermostat.checkMax()
      }).toThrow(new Error("Cannot go beyond 32"));
    });
  });
  
  describe("#reset", function(){
    it("resets the temperature to 20 degrees", function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  
  describe("#currentEnergyUsage", function(){
    it("checks the current energy usage is low", function() {
      for (var i = 20; i >= 18; i--) {
        thermostat.down();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
    });
    
    it("checks the current energy usage is medium", function() {
      expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
    });
    
    it("checks the current enevery usage is high", function() {
      thermostat.powerSavingModeSwitch();
      for (var i = 20; i < 26; i++) {
        thermostat.up();
      }
      expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
    });
  });
});
