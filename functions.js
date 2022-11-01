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
