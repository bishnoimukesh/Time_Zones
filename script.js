// {
//   let myDate= newDate();
//   console.log(myDate);
// }


// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log(time);

// var getlosangelesTime = function() {
//   document.getElementById("favbox-6").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/Los_Angeles', timeStyle:'medium', hourCycle:'h24'});
// }
// getlosangelesTime();
// setInterval(getlosangelesTime,1000)

// var getnewyorkTime = function() {
//   document.getElementById("time-5").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/New_York', timeStyle:'medium', hourCycle:'h24'});
// }
// getnewyorkTime();
// setInterval(getnewyorkTime,1000)

// var getlondonTime = function() {
//   document.getElementById("time-4").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h24'});
// }
// getlondonTime();
// setInterval(getlondonTime,1000)

// var getparisTime = function() {
//   document.getElementById("time-3").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Europe/Paris', timeStyle:'medium', hourCycle:'h24'});
// }
// getparisTime();
// setInterval(getparisTime,1000)

// var getmoscowTime = function() {
//   document.getElementById("time-2").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/Los_Angeles', timeStyle:'medium', hourCycle:'h24'});
// }
// getmoscowTime();
// setInterval(getmoscowTime,1000)

// var gettokyoTime = function() {
//   document.getElementById("time-0").innerHTML = new Date().toLocaleString("en-US",{timeZone:'Asia/Tokyo', timeStyle:'medium', hourCycle:'h24'});
// }
// gettokyoTime();
// setInterval(gettokyoTime,1000)



// <li id="favbox-0" onclick="changeTime()"><a href="Tokyo" id="time-0">Tokyo<br><span class="time"><span class="mon">1</span><span class="mon">8</span>:<span class="mon">0</span><span class="mon">6</span></span></a>
//             </li>


let interval;

setInterval(function(){
  document.getElementById("tokyo").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'Asia/Tokyo', timeStyle:'medium', hourCycle:'h24'});
  document.getElementById("beijing").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'Asia/Shanghai', timeStyle:'medium', hourCycle:'h24'});
  document.getElementById("moscow").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'Europe/Moscow', timeStyle:'medium', hourCycle:'h24'});
  document.getElementById("paris").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'Europe/Paris', timeStyle:'medium', hourCycle:'h24'});
  document.getElementById("london").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h24'});
  document.getElementById("newYork").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'America/New_York', timeStyle:'medium', hourCycle:'h24'});
  document.getElementById("losAngeles").innerHTML =  new Date().toLocaleString("en-US",{timeZone:'America/Los_Angeles', timeStyle:'medium', hourCycle:'h24'});
},1000)

interval = setInterval(function(){
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("clock").innerHTML = time
  document.getElementById("time").innerHTML = date
},1000)

function Change(country){
  clearInterval(interval);
  interval = null;
  interval = setInterval(function(){
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("clock").innerHTML =  new Date().toLocaleString("en-US",{timeZone: country, timeStyle:'medium', hourCycle:'h24'});
    document.getElementById("time").innerHTML =  new Date().toLocaleString("en-US",{timeZoneName: "long", timeZone: country});
  },1000)
}