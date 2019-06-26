
function LetterChanges(str) { 

    var change = str.replace(/[a-z]/gi, function(caracter) { 
      return (caracter === 'z' || caracter === 'Z') ? 'a' : String.fromCharCode(caracter.charCodeAt() + 1);
    });
  
    
    var mayus = change.replace(/a|e|i|o|u/gi, function(Upper) { 
      return Upper.toUpperCase();
    });
  

    return mayus;
           
  }
     
 console.log(LetterChanges("Hey que tal"));