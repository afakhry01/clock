window.setInterval(function() {
  var date = new Date();
  var secsAngle = (360*date.getSeconds()/60) +90;
  document.querySelector('.secs').style.transform = "rotate("+secsAngle+"deg)";
  var minsAngle = (360*date.getMinutes()/60) +90;
  document.querySelector('.mins').style.transform = "rotate("+minsAngle+"deg)";
  var hoursAngle = (360*date.getHours()/12) +90;
  document.querySelector('.hours').style.transform = "rotate("+hoursAngle+"deg)";
}, 1000);
