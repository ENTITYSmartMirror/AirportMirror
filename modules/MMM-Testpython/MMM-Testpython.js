var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {},
    start: function (){
        Testpythons = this;
    },

    getStyles: function() {
      return ["MMM-Testpython.css"];
    },

  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.id="divid1"
    element.font = 4
    var subElement = document.createElement("p")
    subElement.innerHTML = "내 얼굴나이는 몇살일까요?"
    subElement.id = "clickid1"
    subElement.className = "click"
    subElement.style.fontSize = "2em"
    element.appendChild(subElement)
    var subelement2 = document.createElement("p")
    subelement2.innerHTML = ""
    subelement2.id = "showage"
    subelement2.className = "showage"
    subelement2.style.fontSize = "2em"
    element.appendChild(subelement2)
    return element
  },
  

  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
        //this.hide()
      break;
      case "camera_stop":
        var elem = document.getElementById("clickid1")
        var showage2 = document.getElementById("showage")
        showage2.innerHTML = "당신의 나이를 분석중입니다!"  
      break;
      case "Modules All Change" :
      var ele2 = document.getElementById("showage")
      ele2.innerHTML =  "당신의 관광지를!"
      var elemk = document.getElementById("clickid1")
      elemk.innerHTML = "제가 알려드립니다!"
      break;
      case "agecomplete":
        console.log("payload what"+payload)
        var payload3;
			  payload3=payload.toString().split(",");
			  var gender = payload3[0];
			  var age = payload3[1];
        var elemk = document.getElementById("clickid1")
        var elemk2 = document.getElementById("showage");
        if(payload=="notFind"){
          console.log("fuckyou notFind")
          elemk.innerHTML = "다시 눌러주세요!";
          elemk2.innerHTML = "얼굴인식실패!"; 
        }
        else if(payload!="notFind"){
          elemk.style.fontSize="1.9em"
          elemk2.style.fontSize="1.4em"
          elemk.innerHTML = "고객님의 예상나이는" + age + "살 입니다.";
          elemk2.innerHTML = "두번째페이지를 눌러주시면 나이에 맞는 관광명소를 제공해드립니다";
            if (age < 20){
              this.sendNotification("teen");
            }
            else {
              this.sendNotification("adult");
            }
            elemk.addEventListener("click", () => {
              //Testpythons.sendNotification("gotoairport")
              console.log("airairairair")
              
        })
        } 
        
        
      break;
      case "only_camera":
        this.hide();

      break;
      case "show_camera":
        this.show();
        //this.Module.position="top_right"
      break;
      }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "I_DID":
        console.log("Socket recevied 1: " + payload);
        var payload3;
        payload3=payload.toString().split(",");
        console.log("Socket recevied 1: " + payload3);
        var elemk = document.getElementById("clickid1")
        var elemk2 = document.getElementById("showage");
        var gender = payload3[0];
        console.log("Socket recevied 1: " + gender);
        var age = payload3[1];
        console.log("Socket recevied 1: " + age);
        var change; 
        elemk.innerHTML = "";
        elemk2.innerHTML = "고객님의 예상나이는" + age + "입니다.";   
      break
    }
  }
})

