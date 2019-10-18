var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketTestpython;
module.exports = NodeHelper.create({
  start: function() {
    socketTestpython=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "AIRTESTdomesticboardingpy":
        console.log("notification : " + notification)
	    PythonShell.run('C:/AirportHelper/modules/MMM-AirTest/AirportDomesticBoarding.py', null, function (err, result) {
            if (err) throw err;
            console.log("gender : " + result);          
            socketTestpython.sendSocketNotification("I_airDID",result);
          });
	       
        break
      case "AIRTESTdomesticarrivedpy":
        console.log("notification : " + notification)
      PythonShell.run('C:/AirportHelper/modules/MMM-AirTest/AirportDomesticArrived.py', null, function (err, result) {
            if (err) throw err;
            console.log("gender : " + result);          
            socketTestpython.sendSocketNotification("I_airDID",result);
          });
          
        break
    }
  }
}) 
