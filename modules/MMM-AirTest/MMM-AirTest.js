var AirTest;
Module.register("MMM-AirTest", {

    defaults: {
      state:0,
      statetable:0,
      gate_state:0
    },
    start: function (){
        AirTest = this;
        
    },

    getStyles: function() {
      return ["MMM-AirTest.css"];
    },
  getDom: function() {
    var elementdiv_air = document.createElement("div")
    elementdiv_air.className = "myContentair"
    elementdiv_air.id="div_id"
    elementdiv_air.font = 4


    //p1버튼
    var subelementdiv_p1 = document.createElement("p")
    subelementdiv_p1.innerHTML = "실시간 국내 운항정보 !"
    subelementdiv_p1.id = "p1_id"
    subelementdiv_p1.className = "p_class1"
    //p1 버튼 클릭시
    subelementdiv_p1.addEventListener("click", () => {
      var audioFile = new Audio('modules/MMM-AirTest/decision22.mp3');

      audioFile.play();
    audioFile.currentTime = 0;
      
      //초기화면은 state=0 이다.
      //초기화면에서 p1버튼(실시간 국내 운항정보) 클릭시
      if(this.config.state==0){
        //p1버튼이 "국내 운항정보" -> "국내출발운항정보"로 text가 바뀐다
        subelementdiv_p1.innerHTML = "국내선 출발 운항정보"
        //p2버튼이 "국내 운항정보" -> "국내도착운항정보"로 text가 바뀐다.
        subelementdiv_p2.innerHTML = "국내선 도착 운항정보"
        subelementdiv_p3.innerHTML = "뒤로가기"
        //국내 출발 도착 버튼이 뜨는 인터페이스일때 state=1
        AirTest.config.state=1;
       }
       //국내출발 국내도착 버튼이 뜨는 인터페이스일때
       //p1버튼(국내선 출발운항정보)을 클릭시
      else if(this.config.state==1){
        //*************************국내선 출발 운항정보 python실행**************************
        AirTest.sendSocketNotification("AIRTESTdomesticboardingpy")
        //state는 0으로 초기화해준다
        //다음 이벤트발생시 초기화면으로 돌아간다
        AirTest.config.state=0;
        AirTest.config.statetable=1;
        AirTest.config.gate_state=0;
       }
       //국제출발 국제도착 버튼이 뜨는 인터페이스일때
       //p1버튼(국제선 출발운항정보)을 클릭시
       else if(this.config.state==2){
         //*************************국제선 출발 운항정보 python실행**************************
        AirTest.sendSocketNotification("AIRTESTinternationalboardingpy")
        //state는 0으로 초기화해준다
        //다음 이벤트발생시 초기화면으로 돌아간다
        AirTest.config.gate_state=0;
        AirTest.config.state=0;
        AirTest.config.statetable=1;
       }
    })
    elementdiv_air.appendChild(subelementdiv_p1)

    //p2버튼
    var subelementdiv_p2 = document.createElement("p")
    subelementdiv_p2.innerHTML = "실시간 국제 운항정보 !"
    subelementdiv_p2.id = "p2_id"
    subelementdiv_p2.className = "p_class2"
    //p2 버튼 클릭시
    subelementdiv_p2.addEventListener("click", () => {
      //초기화면은 state=0 이다.
      //초기화면에서 p1버튼(실시간 국제 운항정보) 클릭시
      if(this.config.state==0){
        //p1버튼이 "국제 운항정보" -> "국제출발운항정보"로 text가 바뀐다
        subelementdiv_p1.innerHTML = "국제선 출발 운항정보"
        //p2버튼이 "국제 운항정보" -> "국제도착운항정보"로 text가 바뀐다.
        subelementdiv_p2.innerHTML = "국제선 도착 운항정보"
        subelementdiv_p3.innerHTML = "뒤로가기"
        //국내 출발 도착 버튼이 뜨는 인터페이스일때 state=2
        AirTest.config.state=2;
       }
       //국내출발 국내도착 버튼이 뜨는 인터페이스일때
       //p2버튼(국내선 도착운항정보)을 클릭시
      else if(this.config.state==1){
        //*************************국내선 도착 운항정보 python실행**************************
        AirTest.sendSocketNotification("AIRTESTdomesticarrivedpy")
        AirTest.config.gate_state=1;
        //state는 0으로 초기화해준다
        //다음 이벤트발생시 초기화면으로 돌아간다
        AirTest.config.state=0;
        AirTest.config.statetable=1;
       }
       //국제출발 국제도착 버튼이 뜨는 인터페이스일때
       //p1버튼(국제선 도착운항정보)을 클릭시
       else if(this.config.state==2){
         //*************************국제선 도착 운항정보 python실행**************************
        AirTest.sendSocketNotification("AIRTESTinternationalarrivedpy")
        //state는 0으로 초기화해준다
        //다음 이벤트발생시 초기화면으로 돌아간다
        AirTest.config.gate_state=1;
        AirTest.config.state=0;
        AirTest.config.statetable=1;
       }
    })
    elementdiv_air.appendChild(subelementdiv_p2)

    //p3버튼 시작, 뒤로가기 홈버튼
    var subelementdiv_p3 = document.createElement("p")
    subelementdiv_p3.innerHTML = "국내 국제를 선택해주세요 !"
    subelementdiv_p3.id = "p3_id"
    subelementdiv_p3.className = "backbutton_class"
    //p2 버튼 클릭시
    subelementdiv_p3.addEventListener("click", () => {
       //국내출발 국내도착 버튼이 뜨는 인터페이스일때
       //p2버튼(국내선 도착운항정보)을 클릭시
      if(this.config.state==1){
        //state는 0으로 초기화해준다
        //다음 이벤트발생시 초기화면으로 돌아간다
        AirTest.config.state=0;
        this.updateDom();
       }
       //국제출발 국제도착 버튼이 뜨는 인터페이스일때
       //p1버튼(국제선 도착운항정보)을 클릭시
       else if(this.config.state==2){
         //*************************국제선 도착 운항정보 python실행**************************
        //AirTest.sendSocketNotification("AIRTESTpy")
        //state는 0으로 초기화해준다
        //다음 이벤트발생시 초기화면으로 돌아간다
        AirTest.config.state=0;
        this.updateDom();
       }
       else if(this.config.statetable==1){
        //*************************국제선 도착 운항정보 python실행**************************
       //AirTest.sendSocketNotification("AIRTESTpy")
       //state는 0으로 초기화해준다
       //다음 이벤트발생시 초기화면으로 돌아간다
       AirTest.config.state=0;
       this.config.statetable=0;
       this.updateDom();
      }
    })
    elementdiv_air.appendChild(subelementdiv_p3)

    
    return elementdiv_air
  },
  

  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
        //this.hide()
      break;
      
      case "Modules All Change" :
        /*
        console.log("payload what"+payload)
        var payload3;
			  payload3=payload.toString().split(",");
			  var gender = payload3[0];
        var age = payload3[1];
        */
       
       
       if(this.config.state==0){
        
        var li3 = document.getElementById("div_id");
        var tblidd = document.getElementById("tblid")
        var elemk = document.getElementById("p1_id")
        elemk.innerHTML = "실시간 국내 운항정보 !";
        var elemk1 = document.getElementById("p2_id")
        elemk1.innerHTML = "실시간 국제 항공정보 !";
        li3.removeChild(tblidd);
        AirTest.config.state=0;
        AirTest.config.statetable=0;
        
       }
       if(this.config.state==1){
        this.config.state=0;
        var li3 = document.getElementById("div_id");
        var tblidd = document.getElementById("tblid")
        var elemk = document.getElementById("p1_id")
        elemk.innerHTML = "실시간 국내 운항정보 !";
        var elemk1 = document.getElementById("p2_id")
        elemk1.innerHTML = "실시간 국제 항공정보 !";
        li3.removeChild(tblidd);
        this.config.statetable=0;
        
       }
       if(this.config.state==2){
        AirTest.config.state=0;
        var li3 = document.getElementById("div_id");
        var tblidd = document.getElementById("tblid")
        var elemk = document.getElementById("p1_id")
        elemk.innerHTML = "실시간 국내 운항정보 !";
        var elemk1 = document.getElementById("p2_id")
        elemk1.innerHTML = "실시간 국제 항공정보 !";
        li3.removeChild(tblidd);
        AirTest.config.statetable=0;
        
       }
       console.log("sesesesese"+AirTest.config.state);
       
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
        payload22=payloadcomma[21]
        payload23=payloadcomma[22]        
        payload24=payloadcomma[23]
        payload25=payloadcomma[24]
        payload26=payloadcomma[25]
        payload27=payloadcomma[26]
        payload28=payloadcomma[27]
        payload29=payloadcomma[28]        
        payload30=payloadcomma[29]
        payload31=payloadcomma[30]
        payload32=payloadcomma[31]
        payload33=payloadcomma[32]
        payload34=payloadcomma[33]        
        payload35=payloadcomma[34]
        payload36=payloadcomma[35]
        payload37=payloadcomma[36]
        payload38=payloadcomma[37]
        payload39=payloadcomma[38]
        payload40=payloadcomma[39]        
        payload41=payloadcomma[40]

   
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
        payload22split=payload22.toString().split(";")
        payload23split=payload23.toString().split(";")
        payload24split=payload24.toString().split(";")
        payload25split=payload25.toString().split(";")
        payload26split=payload26.toString().split(";")
        payload27split=payload27.toString().split(";")
        payload28split=payload28.toString().split(";")
        payload29split=payload29.toString().split(";")
        payload30split=payload30.toString().split(";")
        payload31split=payload31.toString().split(";")
        payload32split=payload32.toString().split(";")
        payload33split=payload33.toString().split(";")
        payload34split=payload34.toString().split(";")
        payload35split=payload35.toString().split(";")
        payload36split=payload36.toString().split(";")
        payload37split=payload37.toString().split(";")
        payload38split=payload38.toString().split(";")
        payload39split=payload39.toString().split(";")
        payload40split=payload40.toString().split(";")
        payload41split=payload41.toString().split(";")
  
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
        
       var back_home = document.getElementById("p3_id");
       var p1_button= document.getElementById("p1_id");
       var p2_button= document.getElementById("p2_id");
       back_home.innerHTML = "홈으로 이동";
       p1_button.innerHTML = ""; 
       p2_button.innerHTML = ""; 
       
       
       var body = document.getElementById("div_id")
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
       tdbyth.innerHTML = "Boarding";
       tbdy.appendChild(tdbyth);      
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "Arrived";
       tbdy.appendChild(tdbyth);
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "starttime";
       tbdy.appendChild(tdbyth); 

       if(AirTest.config.gate_state==0){
       var tdbyth = document.createElement('th');
       tdbyth.className = "Myth";
       tdbyth.innerHTML = "gate";
       tbdy.appendChild(tdbyth); 
       t=6;
      }
      if(AirTest.config.gate_state==1){
        t=5;
      }
    

       for (var i = 0; i < 42; i++) {
           var tr = document.createElement('tr');
           for (var j = 0; j < t; j++) {
               if (i == 41 && j == t-1) {
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
                   else if(i==21){
                    td.innerHTML=payload22split[j];
                   }
                   else if(i==22){
                    td.innerHTML=payload23split[j];
                   }
                   else if(i==23){
                    td.innerHTML=payload24split[j];
                   }
                   else if(i==24){
                    td.innerHTML=payload25split[j];
                   }
                   else if(i==25){
                    td.innerHTML=payload26split[j];
                   }
                   else if(i==26){
                    td.innerHTML=payload27split[j];
                   }
                   else if(i==27){
                    td.innerHTML=payload28split[j];
                   }
                   else if(i==28){
                    td.innerHTML=payload29split[j];
                   }
                   else if(i==29){
                    td.innerHTML=payload30split[j];
                   }
                   else if(i==30){
                    td.innerHTML=payload31split[j];
                   }
                   else if(i==31){
                    td.innerHTML=payload32split[j];
                   }
                   else if(i==32){
                    td.innerHTML=payload33split[j];
                   }
                   else if(i==33){
                    td.innerHTML=payload34split[j];
                   }
                   else if(i==34){
                    td.innerHTML=payload35split[j];
                   }
                   else if(i==35){
                    td.innerHTML=payload36split[j];
                   }
                   else if(i==36){
                    td.innerHTML=payload37split[j];
                   }
                   else if(i==37){
                    td.innerHTML=payload38split[j];
                   }
                   else if(i==38){
                    td.innerHTML=payload39split[j];
                   }
                   else if(i==39){
                    td.innerHTML=payload40split[j];
                   }
                   else if(i==40){
                    td.innerHTML=payload41split[j];
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

