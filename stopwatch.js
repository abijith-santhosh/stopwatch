const display =document.getElementById('display');
let timer=null;
let startTime = 0;
let elapsedTime=0;
let isRunning = false;

//function that executes when start button is clicked
function startWatch(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer= setInterval(updateWatch,10);
        isRunning=true;
    }

}

//function that executes when stop button is clicked
function stopWatch(){
    if(isRunning){
       clearInterval(timer);
       elapsedTime= Date.now()- startTime;
       isRunning=false;
    }

}

//function that executes when reset button is clicked
function resetWatch(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime=0;
    isRunning = false;
    display.textContent="00:00:00"


}

//function that updates the stopwatch display
function updateWatch(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hour = Math.floor(elapsedTime/(1000*60*60));
    let minute = Math.floor(elapsedTime/(1000*60)% 60);
    let second = Math.floor(elapsedTime/1000%60);

    display.textContent = `${hour}:${minute}:${second}`;

}

//click events for start, stop and reset button
let startBtn = document.getElementById('startbtn');
startBtn.addEventListener('click',startWatch);
let stopBtn = document.getElementById('stopbtn');
stopBtn.addEventListener('click',stopWatch);
let resetBtn = document.getElementById('resetbtn');
resetBtn.addEventListener('click',resetWatch);

