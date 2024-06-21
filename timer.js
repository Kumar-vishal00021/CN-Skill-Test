
let timer;
let seconds=0;
let isRunning=false;
// function for updating timer ui 
function displayTimer(seconds){
    document.getElementById('timer').innerText=formateTime(seconds);
}
// this function formate the time and contain all logic behind the displayTimer function
function formateTime(seconds){
    const minutes=Math.floor(seconds/60);//this will find the accurat minutes
    const hours=Math.floor(minutes/60)//this will find the accuretw hour
    const remainingMinutes=Math.floor(minutes%60);//this will find the remaining minutes
    const remainSeconds=Math.floor(seconds%60);//this will find remaining seconds

    // this statement convert the hours,minutes,seconds into string and ensuring that those are at least 2 character long and returning it to calling place
    return `${String(hours).padStart(2,'0')}:${String(remainingMinutes).padStart(2,'0')}:${String(remainSeconds).padStart(2,'0')}`
}
//here we are targeting the start btn and setting event to it
document.getElementById('startBtn').addEventListener('click',()=>{
    if(!isRunning){
        timer=setInterval(()=>{
            seconds++;
            displayTimer(seconds);
        },1000)
        isRunning=true;
    }
})

//now we are targeting the stop btn and setting event for it
document.getElementById('stopBtn').addEventListener('click',()=>{
    if(isRunning){
        clearInterval(timer);
        isRunning=false;
    }
})

// now we are going to target reset btn and adding event to it

document.getElementById('resetBtn').addEventListener('click',()=>{
    if(seconds||minutes||hours >0){


        const userConfirmation=confirm('are you sure want to reset the timer ??');
        if(userConfirmation){
            seconds=0;
            displayTimer(seconds);
            clearInterval(timer)
            isRunning=false;
        }
    }
})

displayTimer(seconds);