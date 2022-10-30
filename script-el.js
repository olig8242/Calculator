let currentNumber;
let equalsNumber;
let target;


calc1.addEventListener("click", () => {
    calcScreen.textContent += "1"
})

calc2.addEventListener("click", () => {
    calcScreen.textContent += "2"
})

calc3.addEventListener("click", () => {
    calcScreen.textContent += "3"
})

calc4.addEventListener("click", () => {
    calcScreen.textContent += "4"
})

calc5.addEventListener("click", () => {
    calcScreen.textContent += "5"
})

calc6.addEventListener("click", () => {
    calcScreen.textContent += "6"
})

calc7.addEventListener("click", () => {
    if ((plus == true || minus == true) && currentNumber !== "") {
        calcScreen.textContent = "7"
        plus = false;
        minus = false;
    }
    else {
        calcScreen.textContent += "9" 
    }
})

calc8.addEventListener("click", () => {
    if ((plus == true || minus == true) && currentNumber !== "") {
        calcScreen.textContent = "8"
        plus = false;
        minus = false;
    }
    else {
        calcScreen.textContent += "8" 
    }
})
calc9.addEventListener("click", () => {
    if ((plus == true || minus == true) && currentNumber !== "") {
        calcScreen.textContent = "9"
        plus = false;
        minus = false;
    }
    else {
        calcScreen.textContent += "9" 
    }
})

calcPlus.addEventListener("click", () => {
    target = "plus"
    plus = true;
    minus = false;
    if (calcScreen.textContent !== "") {
        currentNumber = calcScreen.textContent;
        console.log(currentNumber);
    }
}) 

calcSubtract.addEventListener("click", () => {
    target = "subtract";
    plus = false;
    minus = true;
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

    }
})



//plus 
//take current number, 
//change plus to true
//next number added needs to start to overwrite current number

