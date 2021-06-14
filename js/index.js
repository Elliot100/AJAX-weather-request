console.log("Hello from the JavaScript console!");

var successCB = function(weather) {
    console.log(weather);
}

$.ajax({
  method: "get",
  url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success: successCB,
  error: function(err, status, msg) {
    console.log(err, status, msg);
  }
});

console.log("Another CL here");
// Your AJAX request here

// Add another console log here, outside your AJAX request
