
let setAlarmBtn = document.querySelector('button');
var alarmTime ;
let content = document.querySelector(".content")

let isAlarmSet = false
var ringtone = new Audio("./alarm.mp3");

var selectHour = document.querySelector('#hour');

for (let i=0; i < 25 ; i++){
    selectHour.innerHTML += `<option> ${i} </option>`

    //  console.log(i)

}
var selectmin = document.querySelector('#min');
for (let i=0; i < 61 ; i++){
    selectmin.innerHTML += `<option> ${i} </option>`

    // console.log(i)

}
  setInterval(myTimer, 1000);

  function setAlarm(){
    if(isAlarmSet){
      alarmTime = "";
      ringtone.pause();
      content.classList.remove("disable");
      setAlarmBtn.Text = "Set Alarm";
      isAlarmSet = false;
    }
  }
  function myTimer() {
    const t = new Date ();
    let hours = t.getHours();
    let minutes = t.getMinutes();
    let seconds = t.getSeconds();
     
    if (hours > 12) {
      hours = hours-12;
    }
     let time = `${hours}:${minutes}`;
     console.log(alarmTime, time)
     if (isAlarmSet){

    if (time === alarmTime){
      isAlarmSet = true;
      ringtone.play();
      
     }
  }
     
  
   document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`
   currentHour = hours
   currentMinute = minutes
}
setAlarmBtn.addEventListener("click", setAlarm);
   
function setAlarm(){
  if (isAlarmSet){
    ringtone.pause()
    isAlarmSet = false
    console.log("Alarm stop")
  }
  else{
      let hours = document.getElementById("hour").value
      let minutes = document.getElementById("min").value
      let AMPM = document.getElementById("ampm").value
      alarmTime = `${hours}:${minutes}`
      console.log(alarmTime)
      content.classList.add("disable")
      setAlarmBtn.innerText = "Clear Alarm ";
      isAlarmSet = true;
  }

  
}






  



