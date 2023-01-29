let displayVal1 = new Array();
let displayVal2 = new Array();
let num1 = 0;
let num2 = 0;
let numCount = 0;
let screen = document.querySelector('.screen');
let operatedNum = 0;
let old_operand;
let new_operand;
let eval_operand;

function clearDisplay(){
    displayVal1= [];
    displayVal2 = [];
    num1 = 0;
    num2 = 0;
    numCount = 0;
    let screen = document.querySelector('.screen');
    screen.textContent = ('');
}

function valueSelector(numberVal){
    if(numCount == 0){
        displayVal1.push(numberVal);
        screen.textContent = displayVal1.join('');
    }
    if(numCount == 1){
        displayVal2.push(numberVal);
        screen.textContent = displayVal1.join('') + displayVal2.join('');
    }
}

function operation(operand){
    if(numCount == 0){
        num1 = Number(displayVal1.join(''));
        numCount++;
        displayVal1.push(operand);
        screen.textContent = displayVal1.join('');
        eval_operand = operand;
    }
    else if(numCount == 1){
        if(operand == '='){
            num2 = Number(displayVal2.join(''));
            operatedNum = operate(eval_operand, num1, num2);
            screen.textContent = operatedNum;

        }
        else{
        num2 = Number(displayVal2.join(''));
        operatedNum = operate(eval_operand, num1, num2);
        num1 = operatedNum;
        eval_operand = old_operand;
        displayVal1 = Array.from(String(num1));
        displayVal1.push(operand);
        screen.textContent = displayVal1.join('');
        displayVal2 = [];
        num2 = 0;
        eval_operand = operand;
        }

    }
}





function operate(operator, num1, num2){
    switch (operator){
        case "+": return add(num1,num2);
        break;
        case "-": return subtract(num1, num2);
        break;
        case "x": return multiply(num1,num2);
        break;
        case "/": return divide(num1,num2);
        break;
    }
}

function add (num1, num2){
    return num1+num2;
}

function subtract (num1, num2){
    return num1-num2;
}

function divide (num1, num2){
    if (num2 == 0){
        clearDisplay();
        return console.log("ERROR!!! IDIOT") ;
        
    }
    else return num1/num2;
}

function multiply(num1, num2){
    return num1*num2;
}