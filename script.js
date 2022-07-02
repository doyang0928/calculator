let operandOne = "";
let operator = "";
let operandTwo = "";
const $operator = document.querySelector("#operator"); 
const $result = document.querySelector("#result");


function onClickNumber(event) {
    if(operator !== "") { 
        if(operandTwo === "") $result.value = ""; 
        operandTwo += event.target.innerText; 
    } else {  
        operandOne += event.target.innerText;
    }
    $result.value += event.target.innerText;
}

function onClickOperator(event) {
    if(operandOne !== "") {
        operator = event.target.innerText;
        $operator.value = event.target.innerText;
    } else {
        alert("숫자를 먼저 입력해주세요.");
    }
}

function onClickCalculate() {
    if(operandTwo !== "") {
        switch(operator) {
            case "+": $result.value = parseInt(operandOne) + parseInt(operandTwo); break;
            case "-": $result.value = operandOne - operandTwo; break;
            case "*": $result.value = operandOne * operandTwo; break;
            case "/": $result.value = operandOne / operandTwo; break;
            default: break;
        }
        $operator.value ="";
        operandOne = $result.value;
        operator = "";
        operandTwo = "";
    } else { 
        alert("숫자를 먼저 입력해 주세요.");
    }
}


function onClickClear(){
    operandOne = "";
    operandTwo ="";
    operator ="";
    $operator.value ="";
    $result.value ="";

}

// 숫자
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click", onClickOperator);
document.querySelector("#multiply").addEventListener("click", onClickOperator);

// 계산
document.querySelector("#calculate").addEventListener("click", onClickCalculate);

// 초기화
document.querySelector("#clear").addEventListener("click", onClickClear);