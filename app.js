function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let timeFormate = "AM"
    if (hours === 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
        timeFormate = "PM"
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;


    let outPut = `${hours}:${minutes}:${second}:${timeFormate}`
    document.getElementById("clock").innerHTML = outPut

}
setInterval(digitalClock, 1000)