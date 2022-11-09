let intervalId
let[seconds, minutes, hours] = [0,0,0]

const secondsLine = document.querySelector('.seconds__line')
const minutesLine = document.querySelector('.minutes__line')
const hoursLine = document.querySelector('.hour__line')

function setDate(){
 const now = new Date()

 const seconds = now.getSeconds()
 const secondsDegrees = ((seconds/60)*360)

 const minutes =now.getMinutes()
 const minutesDegrees = ((minutes/60)*360) + 90  //because we offset it at the start by 90 deg to be on 00:00


 const hours = now.getHours()
 const hourDegrees = ((hours/12)*360) + 90


 secondsLine.style.transform = `rotate(${secondsDegrees}deg)`
 minutesLine.style.transform = `rotate(${minutesDegrees}deg)`
 hoursLine.style.transform = `rotate(${hourDegrees}deg)`
 

 console.log(hours) 
}

setInterval(setDate, 1000)
