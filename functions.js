function calculation (para) {
    if ((plus == true || minus == true || divide == true || multiply == true || percentage == true) && currentNumber !== "") {
        calcScreen.textContent = para
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
