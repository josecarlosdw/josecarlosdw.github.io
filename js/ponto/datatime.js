function getTime(){

   document.querySelector("button").setAttribute("onclick","myAlertTime()");
   
   var data = new Date();
   var full_time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
   var completeDate = full_time;

   localStorage.setItem('dataTime', dataTime);
   
   document.getElementById("appointment").insertAdjacentHTML('beforeend', '<span class="dataTime" id="dataTimeStl">'+ completeDate +' </span>');
   var qtd = document.getElementsByClassName("dataTime").length;

   if(qtd < 4){
      setTimeout(function(){
         document.querySelector("button").setAttribute("onclick","getTime()");
      }, 300000);
   }else{
      document.querySelector("button").disabled = true;
      console.log("fim");
   }
}

function fullDate(){

   dayWeek = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
   monthName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
   now = new Date
   var current_time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

   document.getElementById("completeDate").insertAdjacentHTML('beforeend', '<p id="fulDateStl"> Hoje é ' + dayWeek[now.getDay() ] + ', ' + now.getDate () + ' de ' + monthName [now.getMonth() ]   +  ' de '  +     now.getFullYear () + ' | Hora Atual: '+ current_time +' </p>')
}


function myAlertTime() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}