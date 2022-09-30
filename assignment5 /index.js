

function updateClock(){
    const clock = document.getElementById("clock");
    clock.innerHTML = new Date();
}

let timerId;

function clockStart(){
    if(!timerId){
        timerId = setInterval(updateClock, 1000);
    }
}

clockStart();