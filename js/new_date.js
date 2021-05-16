var x = setInterval(function(){
  var date = new Date();
  document.getElementById("clock").innerHTML = date
},1000)


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("time").innerHTML= time;
