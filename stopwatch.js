const startButton = document.querySelector('.js-start')
const resetButton = document.querySelector('.js-reset')
const timeDisplay = document.querySelector('.time')

let startTime = 0
let elapsedTime = 0
let intervalId
let hours = 0
let minutes = 0
let seconds = 0
let miliseconds = 0

startButton.addEventListener('click', () =>{
  pauseTime()
  workingTime()
  StartStopBtn()
})
resetButton.addEventListener('click', () => {
  resetTime()
})

const StartStopBtn = () =>{
  if(startButton.innerHTML === 'Start'){
    startButton.innerHTML = 'Stop'
  } else{
    startButton.innerHTML = 'Start'
  }
}

const workingTime = () =>{
  if(startButton.innerHTML === "Start"){
    startTime = Date.now() - elapsedTime
    intervalId = setInterval(updateTime, 1);
  }
}
const updateTime = () =>{
  elapsedTime = Date.now()-startTime;
  miliseconds = Math.floor((elapsedTime) % 1000);
  seconds = Math.floor((elapsedTime / 1000) % 60)
  minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

  function pad(unit){
    return (("0")+unit).length > 2 ? unit : "0" + unit
  }
  function padMili(unit){
    return unit > 99 ? unit : unit > 9 ? "0"+unit : "00" + unit 
  }

  seconds = pad(seconds)
  minutes = pad(minutes)
  hours = pad(hours)
  miliseconds = padMili(miliseconds)

  timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}:${miliseconds}`
}

const pauseTime = () =>{
  if(startButton.innerHTML === "Stop"){
    elapsedTime = Date.now() - startTime
    clearInterval(intervalId)
  }
}

const resetTime = () =>{
  elapsedTime = 0
  clearInterval(intervalId)
  hours = 0
  minutes = 0
  seconds = 0
  miliseconds = 0
  timeDisplay.innerHTML = '00:00:00:000'
  startButton.innerHTML = "Start"
}