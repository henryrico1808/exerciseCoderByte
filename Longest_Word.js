function LongestWord(sen) { 

    // code goes here  
    var ar = sen.match(/[a-z0-9]+/gi);

    var ml = ar.sort(function (a,b){
        return b.length - a.length;
    });

    return ml[0]; 
           
  }
  // keep this function call here 
  
console.log(LongestWord("Henry Rico Esparza")); 