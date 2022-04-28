function realtimeClock (){
    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds =rtClock.getSeconds();

    var amPm = ( hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('relogio').innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}
function diaSemana() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunda-Feira";
    weekday[2] = "Terça-Feira";
    weekday[3] = "Quarta-Feira";
    weekday[4] = "Quinta-Feira";
    weekday[5] = "Sexta";
    weekday[6] = "Sabádo";
  
    var n = weekday[d.getDay()];
    document.getElementById("dia").innerHTML = n;
  }
  function diaAno() {
    var d = new Date();
    var n = d.getDate();
    document.getElementById("diaAno").innerHTML = n;
  }
  function mesAno() {
    var month = new Array();
    month[0] = "Janeiro";
    month[1] = "Fevereiro";
    month[2] = "Março";
    month[3] = "Abril";
    month[4] = "Maio";
    month[5] = "Junho";
    month[6] = "Julho";
    month[7] = "Augosto";
    month[8] = "Setembro";
    month[9] = "Outubro";
    month[10] = "Novembro";
    month[11] = "Dezembro";
  
    var d = new Date();
    var n = month[d.getMonth()];
    document.getElementById("mes").innerHTML = n;
  }
  function anoReal() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("ano").innerHTML = n;
  }