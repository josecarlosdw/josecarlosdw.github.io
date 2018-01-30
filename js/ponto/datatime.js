function getTime(){
   document.querySelector("button").setAttribute("onclick","popupAlert()");

   var storedNames = JSON.parse(localStorage.getItem("names"));
   var data = new Date();
   var full_time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
   var completeDate = full_time;

   const savedDates = localStorage.getItem('completeDate')

   let dates
   if (savedDates) {
     dates = JSON.parse(savedDates)
     dates.push(completeDate)
   } else {
     dates = [completeDate]
   }

   localStorage.setItem('completeDate', JSON.stringify(dates))

   document.getElementById("appointment").insertAdjacentHTML('beforeend', 
   '<span class="dataTime" id="dataTimeStl">'+ completeDate +' </span>');
   var qtd = document.getElementsByClassName("dataTime").length;

   if(qtd < 4){
      setTimeout(function(){
         document.querySelector("button").setAttribute("onclick","getTime()");
      }, 300000);
   }else{
      document.querySelector("button").disabled = true;
      console.log("terminou o expediente");
   }

   if(qtd < 2){
     var names;
   names = prompt("Qual o seu nome?");
   localStorage.setItem("names", JSON.stringify(names));
   }

   if(qtd == 4){
     document.getElementById("timeSaved").insertAdjacentHTML('beforeend', 
   '<p class="datesDay">' + '<span class="days"> ' + now.getDate () 
   + ' de ' + monthName [now.getMonth() ] 
   + '</span>' + '<br>' + '<span>'+ dates +' </span>' + '</p>');
      }
   }

function fullDate(){
   dayWeek = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
   monthName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", 
   "outubro", "novembro", "dezembro")
   now = new Date
   var current_time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

   document.getElementById("completeDate").insertAdjacentHTML('beforeend', 
   '<p id="fulDateStl"> Hoje é ' + dayWeek[now.getDay() ] + ', ' + now.getDate () + 
   ' de ' + monthName [now.getMonth() ]   +  ' de '  +     now.getFullYear () + 
   ' | Hora Atual: '+ current_time +' </p>')
}

function popupAlert() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}