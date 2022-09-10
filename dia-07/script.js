const clock = document.querySelector(".clock");
const buttonStart = document.querySelector(".start");
const textButtonStart = document.querySelector(".start>p");
const buttonStop = document.querySelector(".stop");
const buttonClose = document.querySelector(".close");

let hours = 0;
let minutes = 0;
let seconds = 0;

let clockCounting = "";

function Start(){
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    buttonClose.disabled = false;

    clockCounting = setInterval(function(){
        seconds += 1;


        if (seconds > 59){
            minutes += 1;
            seconds -= 60;

        }
            
        if (minutes > 59){
            hours += 1;
            minutes -= 60;
                
        }

        if(minutes > 10){

            if(seconds > 10){
                clock.textContent = `00 : 0${minutes} : 0${seconds}`;
            }

            else{
                clock.textContent = `00 : 0${minutes} : ${seconds}`;
            }
        }
        
        else{
            clock.textContent = `${hours} : ${minutes} : ${seconds}`;
            console.log(clock);
        }
    }, 1000);
    
}

function Stop(){
    clearInterval(clockCounting);
    buttonStart.disabled = false;
    textButtonStart.textContent = "Continuar";
}

function Close(){

   Stop();
   minutes = 0;
   seconds = 0;
   clock.textContent = `00:00:00`;
   textButtonStart.textContent = "Iniciar";
   buttonStop.disabled = true;
   buttonClose.disabled = true;
}

