function onClick() {
    // get ranges
    const bottomRange = document.getElementById("bottom");
    const topRange = document.getElementById("top");

    submitData(bottomRange.value, topRange.value);
}

function submitData(bottom, top) {
    const number = randomNumber(bottom, top);
    // alert(number);
   const guess= prompt("guess the number");

   if(number === parseInt(guess)){
    alert("you got it");
   } else { 
    alert("you are wrong. The number is: " + number);
   }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
