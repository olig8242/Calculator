
//variables

let currentNumber;
let equalsNumber;
let target;

let plus = false;
let minus = false;
let divide = false;
let multiply = false;
let equals = false;
let dot = false;
let percentage = false;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "1":
            calculation("1");
            break;
        case "2":
            calculation("2");
            break;
        case "3":
            calculation("3");
            break;
        case "4":
            calculation("4");
            break;
        case "5":
            calculation("5");
            break;
        case "6":
            calculation("6");
            break;
        case "7":
            calculation("7");
            break;
        case "8":
            calculation("8");
            break;
        case "9":
            calculation("9");
            break;
        case "0":
            calculation("0");
            break;
        case "Escape":
            reset();
            break;
        case "NumpadDivide":

            break;
        case "0":
            calculation("0");
            break;

        
    }
})

calc1.addEventListener("click", () => {
    calculation("1");
});

calc2.addEventListener("click", () => {
    calculation("2");
});

calc3.addEventListener("click", () => {
    calculation("3");
});

calc4.addEventListener("click", () => {
    calculation("4");
});

calc5.addEventListener("click", () => {
    calculation("5");
});

calc6.addEventListener("click", () => {
    calculation("6");
});

calc7.addEventListener("click", () => {
    calculation("7");
});

calc8.addEventListener("click", () => {
    calculation("8");
});

calc9.addEventListener("click", () => {
    calculation("9");
});

calc0.addEventListener("click", () => {
    calculation("0");
});


calcDot.addEventListener("click", () => {
    if (calcScreen.textContent.includes(".")) {
        return
    }
    calculation(".")
    
});

calcPlusMinus.addEventListener("click", () => {
    if (calcScreen.textContent[0] === "-") {
        calcScreen.textContent = calcScreen.textContent.slice(1);
    } else {
        calcScreen.textContent = "-" + calcScreen.textContent;
    }
});

calcReset.addEventListener("click", () => {
    reset();
})


calcPlus.addEventListener("click", () => {
    screenPlus();
}) 

calcSubtract.addEventListener("click", () => {

    target = "subtract";
    plus = false;
    minus = true;
    percentage = false;
    divide = false;
    multiply = false;
    equals = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        screenSign.textContent = "-"
    }
})

calcMultiply.addEventListener("click", () => {

    target = "multiply";
    plus = false;
    minus = false;
    percentage = false;
    divide = false;
    multiply = true;
    equals = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        screenSign.textContent = "*"
    }
})

calcDivide.addEventListener("click", () => {
    target = "divide";
    plus = false;
    minus = false;
    divide = true;
    percentage = false;
    multiply = false;
    equals = true;

    if (calcScreen.textContent !== "") {
        screenSign.textContent = "/"
        currentNumber = calcScreen.textContent;
    }
})

calcPercentage.addEventListener("click", () => {
    target = "percentage";
    plus = false;
    minus = false;
    divide = false;
    multiply = false;
    percentage = true;
    equals = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        screenSign.textContent = "%";
    }


})

calcEquals.addEventListener("click", () => {

    if (target == "plus" && equals == true) {
    equalsNumber = calcScreen.textContent = parseFloat(currentNumber) + parseFloat(calcScreen.textContent);
    equals = false;

    } else if (target == "subtract" && equals == true) {
    equalsNumber = calcScreen.textContent = parseFloat(currentNumber) - parseFloat(calcScreen.textContent);
    equals = false;

    } else if (target == "multiply" && equals == true) {
    equalsNumber = calcScreen.textContent = parseFloat(currentNumber) * parseFloat(calcScreen.textContent);
    equals = false;

    } else if (target == "divide" && equals == true) {
    equalsNumber = calcScreen.textContent = parseFloat(currentNumber) / parseFloat(calcScreen.textContent);
    equals = false;
    
    } else if (target == "percentage" && equals == true) {
    equalsNumber = calcScreen.textContent = (parseFloat(currentNumber) / 100) * parseFloat(calcScreen.textContent);
    equals = false;
    
    } 
})
