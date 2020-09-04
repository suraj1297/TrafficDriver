export function win(score) {

    let timeTaken = score.elapsedTime.split(":")
    let min = score.game.totalMinutes - Number.parseInt(timeTaken[0])
    let sec = score.game.totalSeconds - Number.parseInt(timeTaken[1])

    // time taken
    let winElement = document.querySelector("#time-taken-number")
    winElement.innerHTML = `${min < 10? "0"+min:min} min ${sec < 10? "0"+sec:sec} secs`


    // previous time
    const getTime = JSON.parse(localStorage.getItem("time"))


    if (getTime.min == 0 && getTime.sec == 0) {
        display(min, sec)
        storeTime(min, sec)
    } else if (getTime.min <= min) {
        if (getTime.sec <= sec) {
            display(getTime.min, getTime.sec)
        } else if (getTime.sec > sec) {
            display(min, sec)
            storeTime(min, sec)
        }
    } else if (getTime.min > min) {
        display(min, sec)
        storeTime(min, sec)
    }

    // diplay Timings
    document.querySelector(".win").style.display = "inline-block"

}

function storeTime(min, sec) {
    let time = {
        "min": min,
        "sec": sec
    }

    localStorage.setItem("time", JSON.stringify(time))
}

function display(min, sec) {
    const setTime = document.querySelector("#previous-time-number")
    setTime.innerHTML = `${min < 10? "0"+min:min} min ${sec < 10? "0"+sec:sec} secs`
}