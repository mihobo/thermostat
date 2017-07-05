
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

   describe("#checkMinimum", function(){
     it("will throw an error if the temp is below 10 degrees", function() {
       for(var i = 20; i >= 10; i--) {
         thermostat.down();
       };
       expect( function() { thermostat.checkMinimum() } ).toThrow(new Error("Brrr"));
     });
   });
});
