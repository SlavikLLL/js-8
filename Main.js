

function MainFunction(callback){
    let number = +prompt("Число");
    let degree = +prompt("Степень");
    if(isNaN(number) ||  isNaN(degree)){
        alert("Ошибка")
    }
    else  {
        callback(number,degree);
        
    }
}
function exponentiation(number,degree){
    let result = number;
    for(let i=1;i<degree;i++){
       result *= number;
    }
    return alert(result);

}

MainFunction(exponentiation);

