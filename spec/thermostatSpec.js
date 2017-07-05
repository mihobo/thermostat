
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

});
