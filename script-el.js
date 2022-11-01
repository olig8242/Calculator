
let currentNumber;
let equalsNumber;
let target;

let plus = false;
let minus = false;
let divide = false;
let multiply = false;
let equals = false;
let dot = false;
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
    calculation("2")
});

calc3.addEventListener("click", () => {
    calculation("3")
});

calc4.addEventListener("click", () => {
    calculation("4")
});

calc5.addEventListener("click", () => {
    calculation("5")
});

calc6.addEventListener("click", () => {
    calculation("6")
});

calc7.addEventListener("click", () => {
    calculation("7")
});

calc8.addEventListener("click", () => {
    calculation("8")
});

calc9.addEventListener("click", () => {
    calculation("9")
});

calcDot.addEventListener("click", () => {
    if (calcScreen.textContent.includes(".")) {
        return
    }
    calculation(".")
    
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
    equals = true;

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
    equals = true;

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
    equals = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
})

calcDivide.addEventListener("click", () => {
    target = "divide";
    plus = false;
    minus = false;
    divide = true;
    multiply = false;
    equals = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
})


calcEquals.addEventListener("click", () => {


    if (target == "plus" && equals == true) {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) + parseInt(calcScreen.textContent);
    equals = false;

    } else if (target == "subtract" && equals == true) {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) - parseInt(calcScreen.textContent);
    equals = false;

    } else if (target == "multiply" && equals == true) {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) * parseInt(calcScreen.textContent);
    equals = false;

    } else if (target == "divide" && equals == true) {
    equalsNumber = calcScreen.textContent = parseInt(currentNumber) / parseInt(calcScreen.textContent);
    equals = false;

    } 
})
