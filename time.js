const startButton = document.querySelector('.js-start')
const resetButton = document.querySelector('.js-reset')
const choosedTime = document.querySelector('.chooseTime')

let hrs=0
let min=0
let sec=0
let startingMinutes =0
let time=0
let hours =0
let minutes=0
let seconds=0
let intervalId

startButton.addEventListener('click', () =>{
  Countdown()
  StartStopBtn()
})
resetButton.addEventListener('click',() => {
  resetTime()
})

function Countdown (){
hrs = document.getElementById('hrs').value
min = document.getElementById('min').value
sec = document.getElementById('sec').value
hrs = Number(hrs)
min = Number(min)
sec = Number(sec)
time = hrs * 3600 + min*60 + sec

if(time===0){
  choosedTime.innerHTML=`Time can't be 0, please press Reset and choose other value`
} else{
  intervalId=setInterval(updateCountdown,1000)
}
}

function updateCountdown(){
  function pad(unit){
    return (("0")+unit).length > 2 ? unit : "0" + unit
  }

  hours = Math.floor(time/3600)
  minutes = Math.floor((time/60)%60)
  seconds = time %  60

  hours = pad(hours)
  minutes = pad(minutes)
  seconds = pad(seconds)

  if(time === 0){
    clearInterval(intervalId)
    hours = 0
    minutes = 0
    seconds = 0
    choosedTime.innerHTML=`Time is over`
  } else{
    if(minutes<1 && hours<1){
      choosedTime.innerHTML=`${seconds}`
    }else if(hours<1){
      choosedTime.innerHTML=`${minutes}:${seconds}`
    } else if (minutes<1 && hours>0){
      choosedTime.innerHTML=`${hours}:${minutes}:${seconds}`
    } else if(hours>0){
      choosedTime.innerHTML=`${hours}:${minutes}:${seconds}`
    }
    }
    time--
}

function resetTime(){
  clearInterval(intervalId)
  hours = 0
  minutes = 0
  seconds = 0
  choosedTime.innerHTML=`
  <input type="number" id="hrs" min="0" max="99" value="0">
  <span>:</span>
  <input type="number" id="min" min="0" max="60" value="0">
  <span>:</span>
  <input type="number" id="sec"min="0" max="60" value="0">
  `
}

const StartStopBtn = () =>{
  if(startButton.innerHTML === 'Start'){
    startButton.innerHTML = 'Stop'
  } else{
    startButton.innerHTML = 'Start'
  }
}