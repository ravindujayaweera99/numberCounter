const numberValue = document.getElementById("number");

function increaseNumber() {
    numberValue.innerText++;
}

function resetNumber() {
    numberValue.innerText = 0;
}

function decreaseNumber() {
    if(numberValue.innerText <= 0) {
        numberValue.innerText= 0;
    } else {
        numberValue.innerText--;
    }
}