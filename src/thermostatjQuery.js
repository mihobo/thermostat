$(document).ready(function(){
  var thermostat = new Thermostat;
  $('#current-temp').text(thermostat.temperature);
  $('#max-temp').text(thermostat.maxTempPSMOn);
  $('#min-temp').text(thermostat.minTemp);
  $('#readPSM').text(thermostat.readPSM);
  $('#usage').text(thermostat.usage);
    $("#usage").css("color", "orange");

  $("#Up").on("click", function() {
    thermostat.up();
    thermostat.currentEnergyUsage();
    if (thermostat.usage === "low-usage") {
      $("#usage").css("color", "green");
    } else if (thermostat.usage === "medium-usage"){
      $("#usage").css("color", "orange");
    } else {
      $("#usage").css("color", "red");
    }
    $('#current-temp').text(thermostat.temperature);
    $('#usage').text(thermostat.usage);
  });

  $("#Down").on("click", function() {
    thermostat.down();
    thermostat.currentEnergyUsage();
    if (thermostat.usage === "low-usage") {
      $("#usage").css("color", "green");
    } else if (thermostat.usage === "medium-usage"){
      $("#usage").css("color", "orange");
    } else {
      $("#usage").css("color", "red");
    }
    $('#current-temp').text(thermostat.temperature);
    $('#usage').text(thermostat.usage);
  });
  
  $("#Reset").on("click", function() {
    thermostat.reset();
    $('#current-temp').text(thermostat.temperature);
  });

  $("#PSM").on("click", function() {
    thermostat.powerSavingModeSwitch();
    $('#readPSM').text(thermostat.readPSM);
  });
});
