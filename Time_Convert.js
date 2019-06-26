
function TimeConvert(num) { 

    var horas = Math.floor(num/60);
    var min = num % 60;
    return horas+":"+min;
           
  }
     
  console.log(TimeConvert(64)); 