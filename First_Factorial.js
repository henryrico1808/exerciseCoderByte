function first_factorial (n){
    var factorial = 1;

    for (var i = 1; i<= n; i++){
        factorial = factorial * i;       

    }
    return factorial;
}

console.log(first_factorial(0));
