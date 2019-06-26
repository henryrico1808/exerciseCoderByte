function FirstReverse(str) { 

    var revers = "";

    for (var i = str.length -1 ; i>=0; i--){
        revers = revers + str.charAt(i);
    }

    // code goes here  
    return revers; 
           
  }
     
  // keep this function call here 
  console.log(FirstReverse("Hola"));                            
  
  
    