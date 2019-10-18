var AirTest;
Module.register("MMM-AirTest", {

    defaults: {
      aaa:0
      
    },
    start: function (){
        AirTest = this;
        
    },

    getStyles: function() {
      return ["MMM-AirTest.css"];
    },
  getDom: function() {
    var elementair = document.createElement("div")
    elementair.className = "myContentair"
    elementair.id="divid2"
    elementair.font = 4
    var subelementair = document.createElement("p")
    subelementair.innerHTML = "실시간 국내 운항정보 !"
    subelementair.id = "airtestid"
    subelementair.className = "click"
    subelementair.addEventListener("click", () => {
      console.log("ddddddddddddddddddd"+AirTest.config.aaa);
      if(this.config.aaa==0){
        subelementair.innerHTML = "국내선 출발 운항정보"
        AirTest.config.aaa=1;
        subelement2.innerHTML = "국내선 도착 운항정보"
       }
      else if(this.config.aaa==1){
        //국내선 출발운항정보
        AirTest.sendSocketNotification("AIRTESTdomesticboardingpy")
        AirTest.config.aaa=0;
       }
       else if(this.config.aaa==2){
        AirTest.config.aaa=0;
         //두번째 파이썬 국제선 출발
        //AirTest.sendSocketNotification("AIRTESTpy")
       }
      
      //AirTest.sendSocketNotification("AIRTESTpy")
      //console.log("airtestairtest")
      
    })
    //subelementair.style.fontSize = "2em"
    elementair.appendChild(subelementair)
    var subelement2 = document.createElement("p")
    subelement2.innerHTML = "실시간 국제 운항정보 !"
    subelement2.id = "showageair"
    subelement2.className = "showageair"
    subelement2.addEventListener("click", () => {
      console.log("sese"+AirTest.config.aaa);
      if(this.config.aaa==0){
        subelementair.innerHTML = "국제선 출발 운항정보"
        AirTest.config.aaa=2;
        subelement2.innerHTML = "국제선 도착 운항정보"
       }
      else if(this.config.aaa==1){
        //국내선 도착파이썬
        AirTest.sendSocketNotification("AIRTESTdomesticarrivedpy")
        AirTest.config.aaa=0;
       }
       else if(this.config.aaa==2){
        AirTest.config.aaa=0;
         //두번째 파이썬 국제도착
        //AirTest.sendSocketNotification("AIRTESTpy")
        AirTest.config.aaa=0;
       }
      console.log("ddddddddddddddddddd"+AirTest.config.aaa);
      //AirTest.sendSocketNotification("AIRTESTpy")
      //console.log("airtestairtest")
      
    })
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
       
       
       if(this.config.aaa==0){
        
        var li3 = document.getElementById("divid2");
        var tblidd = document.getElementById("tblid")
        var elemk = document.getElementById("airtestid")
        elemk.innerHTML = "실시간 국내 운항정보 !";
        var elemk1 = document.getElementById("showageair")
        elemk1.innerHTML = "실시간 국제 항공정보 !";
        li3.removeChild(tblidd);
        AirTest.config.aaa=0;
        
       }
       
       console.log("sesesesese"+AirTest.config.aaa);
       
        //elemk2.innerHTML = "고객님의 예상나이는" + age + "살 입니다."; 

        
        
      break;
      }
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "I_airDID":
          
        //예를들어 print(A;B;C) print(D;E;F)를 파이썬에서 출력했다고 할때
        //console창에선 A;B;C,D;E;F 로 결과가 뜨고 이걸 return해서 payload 인자로 받음
        //이 인자를 A B C 따로따로 어케 나누냐
        var payloadcomma;
        payloadcomma=payload.toString().split(",");
        //여기까지하면 payloadcoomma[0]은 A;B;C payloadcomma[1]은 D;E;F 로 되고
        payload1=payloadcomma[0]
        payload2=payloadcomma[1]
        payload3=payloadcomma[2]
        payload4=payloadcomma[3]
        payload5=payloadcomma[4]
        payload6=payloadcomma[5]        
        payload7=payloadcomma[6]
        payload8=payloadcomma[7]
        payload9=payloadcomma[8]
        payload10=payloadcomma[9]
        payload11=payloadcomma[10]
        payload12=payloadcomma[11]        
        payload13=payloadcomma[12]
        payload14=payloadcomma[13]
        payload15=payloadcomma[14]
        payload16=payloadcomma[15]
        payload17=payloadcomma[16]
        payload18=payloadcomma[17]        
        payload19=payloadcomma[18]
        payload20=payloadcomma[19]
        payload21=payloadcomma[20]
   
        //이걸로 인자를 이동시키고
        payload1split=payload1.toString().split(";")
        payload2split=payload2.toString().split(";")
        payload3split=payload3.toString().split(";")
        payload4split=payload4.toString().split(";")
        payload5split=payload5.toString().split(";")
        payload6split=payload6.toString().split(";")
        payload7split=payload7.toString().split(";")
        payload8split=payload8.toString().split(";")
        payload9split=payload9.toString().split(";")
        payload10split=payload10.toString().split(";")
        payload11split=payload11.toString().split(";")
        payload12split=payload12.toString().split(";")
        payload13split=payload13.toString().split(";")
        payload14split=payload14.toString().split(";")
        payload15split=payload15.toString().split(";")
        payload16split=payload16.toString().split(";")
        payload17split=payload17.toString().split(";")
        payload18split=payload18.toString().split(";")
        payload19split=payload19.toString().split(";")
        payload20split=payload20.toString().split(";")
        payload21split=payload21.toString().split(";")

        //이렇게 나누면
        //payload1[0]=A
        //payload1[1]=B
        //payload1[2]=C
        //payload1[0]=D
        //payload1[1]=E
        //payload1[2]=F
        
        console.log("payloadcomma: " + payloadcomma);
        
        console.log("payload2: " + payload1);
        
        console.log("payload1[0] " + payload1split);
        
       var elemk = document.getElementById("airtestid");
       var elemk2 = document.getElementById("showageair");
       elemk.innerHTML = "";
       elemk2.innerHTML = payload1; 
       
       
       var body = document.getElementById("divid2")
       var tbl = document.createElement('table');
       tbl.id="tblid";
       tbl.style.width = '100%';
       tbl.setAttribute('border', '1');
       var tbdy = document.createElement('tbody');
       
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "airFln";
       tbdy.appendChild(tdbyth);
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "airline";
       tbdy.appendChild(tdbyth);
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "Arrived";
       tbdy.appendChild(tdbyth);
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "starttime";
       tbdy.appendChild(tdbyth); 
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "gate";
       tbdy.appendChild(tdbyth); 
       
       
       for (var i = 0; i < 20; i++) {
           var tr = document.createElement('tr');
           for (var j = 0; j < 5; j++) {
               if (i == 20 && j == 4) {
                   break
               } else {
                   var td = document.createElement('td');
                   td.className="Mytd"
                   //td.appendChild(document.createTextNode('\u0020'))
                   if(i==0){
                    td.innerHTML=payload1split[j];
                   }
                   else if(i==1){
                    td.innerHTML=payload2split[j];
                   }
                   else if(i==2){
                    td.innerHTML=payload3split[j];
                   }
                   else if(i==3){
                    td.innerHTML=payload4split[j];
                   }
                   else if(i==4){
                    td.innerHTML=payload5split[j];
                   }
                   else if(i==5){
                    td.innerHTML=payload6split[j];
                   }
                   else if(i==6){
                    td.innerHTML=payload7split[j];
                   }
                   else if(i==7){
                    td.innerHTML=payload8split[j];
                   }
                   else if(i==8){
                    td.innerHTML=payload9split[j];
                   }
                   else if(i==9){
                    td.innerHTML=payload10split[j];
                   }
                   else if(i==10){
                    td.innerHTML=payload11split[j];
                   }
                   else if(i==11){
                    td.innerHTML=payload12split[j];
                   }
                   else if(i==12){
                    td.innerHTML=payload13split[j];
                   }
                   else if(i==13){
                    td.innerHTML=payload14split[j];
                   }
                   else if(i==14){
                    td.innerHTML=payload15split[j];
                   }
                   else if(i==15){
                    td.innerHTML=payload16split[j];
                   }
                   else if(i==16){
                    td.innerHTML=payload17split[j];
                   }
                   else if(i==17){
                    td.innerHTML=payload18split[j];
                   }
                   else if(i==18){
                    td.innerHTML=payload19split[j];
                   }
                   else if(i==19){
                    td.innerHTML=payload20split[j];
                   }
                   else if(i==20){
                    td.innerHTML=payload21split[j];
                   }
 
                   //i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                   tr.appendChild(td)
               }
               
           }
           tbdy.appendChild(tr);
       }
       tbl.appendChild(tbdy);
       body.appendChild(tbl)
        
      break
    }
  }
})

