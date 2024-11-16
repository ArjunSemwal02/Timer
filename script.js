const hoursInputElement = document.getElementById('hoursInput');
const minutesInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');


const hoursOutputElement = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');


const startTimerElement = document.getElementById('startTimer');



let targetTime = 454643735737857;
let timerInterval;



const updateTimer = () => {
    if(targetTime){
        const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;
        
        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor(differenceInSeconds / 60) % 60;
        const seconds = Math.floor(differenceInSeconds % 60);

        hoursOutputElement.textContent = `${hours} hours`;
        minutesOutputElement.textContent = `${minutes} minutes`;
        secondsOutputElement.textContent = `${seconds} seconds`;
    }
}



updateTimer();
