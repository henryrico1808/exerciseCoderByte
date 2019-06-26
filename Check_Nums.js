function CheckNums(num1,num2) { 

    if(num1 == num2){
        return -1;
    }

    if (num2 > num1){
        return true;
    }else {
        return false;
    }

    return num1 + num2; 
           
  }
     
  // keep this function call here 
  console.log(CheckNums(3,4));
  