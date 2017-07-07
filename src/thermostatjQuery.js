$(document).ready(function(){

  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
    var key = "&APPID=761dc6e956bb091d84e121f449d18bc0";
    var unit = "&units=metric";

    $.get(url + key + unit, function(data) {
      $("#outside-temp").text(Math.round(data.main.temp));
    });
  }
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  var thermostat = new Thermostat;
  $('#current-temp').text(thermostat.temperature);
  $('#max-temp').text(thermostat.maxTempPSMOn);
  $('#min-temp').text(thermostat.minTemp);
  $('#readPSM').text(thermostat.readPSM);
  $("#readPSM").css("color", "green");
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
    if (thermostat.readPSM === "OFF") {
      $('#readPSM').css('color', 'red');
    } else {
      $('#readPSM').css('color', 'green');
    }
    $('#readPSM').text(thermostat.readPSM);
  });
});
