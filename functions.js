function calculation (para) {
    if ((plus == true || minus == true || divide == true || multiply == true || percentage == true) && currentNumber !== "") {
        calcScreen.textContent = para;
        screenSign.textContent = "";
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
        percentage = false;
    }
    else {
        calcScreen.textContent += para
    }
}

function reset () {
    plus = false;
    minus = false;
    percentage = false;
    divide = false;
    multiply = false;
    calcScreen.textContent = "";
    currentNumber = 0;
    screenSign.textContent = ""
}

function screenPlus () {
    target = "plus"
    plus = true;
    minus = false;
    percentage = false;
    divide = false;
    multiply = false;
    equals = true;

    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        screenSign.textContent = "+"
    }
}