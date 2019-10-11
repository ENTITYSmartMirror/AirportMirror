var AirTest;
Module.register("MMM-AirTest", {

    defaults: {},
    start: function (){
        AirTest = this;
    },


  getDom: function() {
    var elementair = document.createElement("div")
    elementair.className = "myContentair"
    elementair.id="divid2"
    elementair.font = 4
    var subelementair = document.createElement("p")
    subelementair.innerHTML = "에어포트 테스트"
    subelementair.id = "airtestid"
    subelementair.className = "click"
    subelementair.addEventListener("click", () => {
      AirTest.sendSocketNotification("AIRTESTpy")
      console.log("airtestairtest")
      
    })
    //subelementair.style.fontSize = "2em"
    elementair.appendChild(subelementair)
    var subelement2 = document.createElement("p")
    subelement2.innerHTML = "관광지를 추천 !"
    subelement2.id = "showageair"
    subelement2.className = "showageair"
    //subelement2.style.fontSize = "2em"
    elementair.appendChild(subelement2)
    return elementair
  },
  

  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
        //this.hide()
        /*
        var elemk = document.getelementById("airtestid")
        elemk.addEventListener("click", () => {
          AirTest.sendSocketNotification("AIRTESTpy")
          console.log("airtestairtest")
          
        })*/
      break;
      
      case "Modules All Change" :
        /*
        console.log("payload what"+payload)
        var payload3;
			  payload3=payload.toString().split(",");
			  var gender = payload3[0];
        var age = payload3[1];
        */
        var elemk = document.getElementById("airtestid")
        //var elemk2 = document.getelementById("showageair");
        elemk.innerHTML = "switch button";
        //elemk2.innerHTML = "고객님의 예상나이는" + age + "살 입니다."; 

        
        
      break;
      }
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "I_airDID":
        console.log("success " + payload);
        /*
        var payload3;
        payload3=payload.toString().split(",");
        console.log("Socket recevied 1: " + payload3);
        var elemk = document.getelementById("airtestid")
        var elemk2 = document.getelementById("showageair");
        var gender = payload3[0];
        console.log("Socket recevied 1: " + gender);
        var age = payload3[1];
        console.log("Socket recevied 1: " + age);
        var change; 
        */
       var elemk = document.getElementById("airtestid");
       var elemk2 = document.getElementById("showageair");
       elemk.innerHTML = "";
       elemk2.innerHTML = "고객님의 예상나이는" + payload + "입니다.";   
        
      break
    }
  }
})

