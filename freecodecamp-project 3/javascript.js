$(document).ready(function() {
var lati;
var long;
var api="http://ip-api.com/json";
$.getJSON(api,function(pos) {
  lati=pos.lat;
  long=pos.lon;
  var url =  "http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+long+"&appid=8e1a4914b0f14feed34da1fa988cc545";
    $.getJSON(url,function(data) {
      var weatherC= data.weather[0].description;
      var kTemp= data.main.temp;
      var cTemp=(kTemp-273).toFixed(2)+" &#176;"+"C";
      var fTemp=(kTemp*(9/5)-459.67).toFixed(2)+" &#176;"+"F";
      var windS= data.wind.speed+" m/s";
      var country= data.sys.country;
      var city= data.name;
var tempSwap= true;
$("#weather").html(weatherC);
$("#wind").html(windS);
$("#country").html(country);
$("#city").html(city);
$("#temp").html(cTemp);
$("#temp").click(function () {
if (tempSwap===true) {
$("#temp").html(fTemp);
tempSwap=false;
} else  {
$("#temp").html(cTemp);
tempSwap=true;
}
});
    });

 });

});
