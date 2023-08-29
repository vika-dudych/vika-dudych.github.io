
// /Real date
setInterval(() => {
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    today = dd + '.' + mm + '.' + yyyy;
    document.querySelector('.date').innerHTML = `${today}`;
})

// / real time
setInterval(() => {
    let dd = new Date();
    let hh = dd.getHours();
    let mm = dd.getMinutes();
    let ss = dd.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.time').innerHTML = `${hh}:${mm}:${ss}`;
})
/// stopwatch function
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.stopwatchDisplay');
let int = null;
let loopNow = null;
//// start stopwatch
document.getElementById('startStopwatch').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayStopwatch,10);
});
//// stop stopwatch
document.getElementById('stopStopwatch').addEventListener('click', ()=>{
    clearInterval(int);
});
//// reset stopwatch
document.getElementById('resetStopwatch').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00:00:00:000 ';
    document.getElementById('loopRecord').innerHTML = '';
});
//// display stopwatch
function displayStopwatch(){
    milliseconds+=10;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = ` ${h}:${m}:${s}:${ms}`;

}

///add loop
document.getElementById('loopBtn').addEventListener('click', ()=> {
    loopNow = `<div class="lap">${timerRef.innerHTML}</div>`;
    document.getElementById('loopRecord').innerHTML += loopNow;
})

/// timer function
let interval;
let timeSetting = 25;
let remainingMinutes = 0;
let remainingSeconds = 0;
let timerRunning = false;
let pauseTime = 0;

function updateDisplay() {
    document.getElementById('displayTime').textContent = `${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    document.getElementById('timeSetting').textContent = timeSetting.toString();
}

///startTimer

function startTimer() {
    if (!timerRunning) {
        if (pauseTime > 0) {
            remainingMinutes = Math.floor(pauseTime / 60);
            remainingSeconds = pauseTime % 60;
            pauseTime = 0;
        }
        interval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}
///pauseTimer

function pauseTimer() {
    if (timerRunning) {
        clearInterval(interval);
        timerRunning = false;
        pauseTime = remainingMinutes * 60 + remainingSeconds;
    }
}

///resetTimer
function resetTimer() {
    clearInterval(interval);
    timerRunning = false;
    remainingMinutes = 0;
    remainingSeconds = 0;
    updateDisplay();
}
///updateTimer

function updateTimer() {
    if (remainingMinutes === 0 && remainingSeconds === 0) {
        clearInterval(interval);
        timerRunning = false;
        return;
    }

    if (remainingSeconds === 0) {
        remainingMinutes--;
        remainingSeconds = 59;
    } else {
        remainingSeconds--;
    }

    updateDisplay();
}
////increaseTime

function increaseTime() {
    timeSetting++;
    updateDisplay();
}
////decreaseTime
function decreaseTime() {
    if (timeSetting > 1) {
        timeSetting--;
        updateDisplay();
    }
}

document.getElementById('start').addEventListener('click', function() {
    remainingMinutes = timeSetting;
    remainingSeconds = 0;
    startTimer();
});
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('increase').addEventListener('click', increaseTime);
document.getElementById('decrease').addEventListener('click', decreaseTime);

updateDisplay();
