const hourDOM = document.getElementById("hour");
const minuteDOM = document.getElementById("minute");
const secondDOM = document.getElementById("second");
const amPmDOM = document.getElementById("am-pm");

function showTime() {
    let hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    hour < 12 ? amPmDOM.innerHTML = `AM` : amPmDOM.innerHTML = `PM`;
    hour > 12 ? hour -= 12 : hour;
    hourDOM.innerHTML = `0${hour}`
    minute < 10 ? minuteDOM.innerHTML = `0${minute}` : minuteDOM.innerHTML = minute;
    second < 10 ? secondDOM.innerHTML = `0${second}` : secondDOM.innerHTML = second;
}

showTime();
setInterval(showTime, 1000);
