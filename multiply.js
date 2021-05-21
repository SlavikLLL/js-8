function MainFunction(callback){
    let number = +prompt("Число");
    let number2 =+prompt("Число 2")
    if(isNaN(number) ||  isNaN(number2)){
        alert("Ошибка")
    }
    else{
        callback(number,number2);
    }
}
function multiply(number,number2){
    let result = number * number2;
     return alert(result);
}
MainFunction(multiply)