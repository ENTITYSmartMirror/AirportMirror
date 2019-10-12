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
        /*
        console.log("success " + payload);
       
        var body = document.getElementsByTagName('body')[0];
        var tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');
        for (var i = 0; i < 4; i++) {
          var tr = document.createElement('tr');
          for (var j = 0; j < 11; j++) {
            if (i == 3 && j == 10) {
              break
            } else {
                var td = document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td)
            }
        }
        tbdy.appendChild(tr);
      }
      tbl.appendChild(tbdy);
      body.appendChild(tbl)
      */
        //예를들어 print(A;B;C) print(D;E;F)를 파이썬에서 출력했다고 할때
        //console창에선 A;B;C,D;E;F 로 결과가 뜨고 이걸 return해서 payload 인자로 받음
        //이 인자를 A B C 따로따로 어케 나누냐
        var payloadcomma;
        payloadcomma=payload.toString().split(",");
        //여기까지하면 payloadcoomma[0]은 A;B;C payloadcomma[1]은 D;E;F 로 되고
        payload1=payloadcomma[0]
        payload2=payloadcomma[1]
        //이걸로 인자를 이동시키고
        payload1.toString().split(";")
        payload2.toString().split(";")
        //이렇게 나누면
        //payload1[0]=A
        //payload1[1]=B
        //payload1[2]=C
        //payload1[0]=D
        //payload1[1]=E
        //payload1[2]=F
        
        console.log("payloadcomma: " + payloadcomma);
        
        console.log("payload2: " + payload2);
        
        console.log("payload1[0] " + payload1[0]);
        
       var elemk = document.getElementById("airtestid");
       var elemk2 = document.getElementById("showageair");
       elemk.innerHTML = "";
       elemk2.innerHTML = "고객님의 예상나이는" + payload + "입니다.";   

        
      break
    }
  }
})

