function onClick() {
    // get ranges
    const bottomRange = document.getElementById("bottom");
    const topRange = document.getElementById("top");

    submitData(bottomRange.value, topRange.value);
}

function submitData(bottom, top) {
    const number = randomNumber(bottom, top);
    // alert(number);
   const guess= prompt("guess the number")
}

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
