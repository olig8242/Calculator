
let currentNumber;
let equalsNumber;
let target;

let plus = false;
let minus = false;
let divide = false;
let multiply = false;

//functions

function calculation (para) {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = para
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += para
    }
}


calc1.addEventListener("click", () => {
    calculation("1")
});

calc2.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "2"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "2" 
    }})

calc3.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "3"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "3" 
    }
})

calc4.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "4"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "4" 
    }
})

calc5.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "5"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "5" 
    }
})

calc6.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "6"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "6" 
    }
})

calc7.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "7"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "7" 
    }
})

calc8.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "8"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "8" 
    }
})
calc9.addEventListener("click", () => {
    if ((plus == true || minus == true || divide == true || multiply == true) && currentNumber !== "") {
        calcScreen.textContent = "9"
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
    }
    else {
        calcScreen.textContent += "9" 
    }
});

calcReset.addEventListener("click", () => {
    plus = false;
    minus = false;
    divide = false;
    multiply = false;
    calcScreen.textContent = "";
    currentNumber = 0;
})


calcPlus.addEventListener("click", () => {
    target = "plus"
    plus = true;
    minus = false;
    divide = false;
    multiply = false;
    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
}) 

calcSubtract.addEventListener("click", () => {

    target = "subtract";
    plus = false;
    minus = true;
    divide = false;
    multiply = false;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
})

calcMultiply.addEventListener("click", () => {

    target = "multiply";
    plus = false;
    minus = false;
    divide = false;
    multiply = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
})

calcDivide.addEventListener("click", () => {
    target = "divide";
    plus = false;
    minus = false;
    divide = false;
    multiply = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
})

calcEquals.addEventListener("click", () => {
    if (target == "plus") {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) + parseInt(calcScreen.textContent);
    } else if (target == "subtract") {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) - parseInt(calcScreen.textContent);

    } else if (target == "multiply") {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) * parseInt(calcScreen.textContent);

    } else if (target == "divide") {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) / parseInt(calcScreen.textContent);

    } 
})


//plus 
//take current number, 
//change plus to true
//next number added needs to start to overwrite current number

