let input = prompt("Enter a number below to find out if it is ODD or EVEN:");
            
input = parseInt(input);

function printOddEven(){
    
    if(input % 2 == 0){
        document.getElementById("answer").innerHTML = "Even";
    }else{
        document.getElementById("answer").innerHTML = "Odd";
    }
}

    printOddEven();

/*function checkZero(){
if(input == 0){
    alert("Invalid entry. Please refresh and enter a number greater than zero");
    document.getElementById("answer").innerHTML = "0";
    }
}

    checkZero();*/

function checkNumber(){

    if(isNaN(input)){
        alert("Invalid entry. Please refresh and enter a number");
        document.getElementById("answer").innerHTML = "";
    }
}

checkNumber();