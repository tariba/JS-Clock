let hand = document.querySelector(".hand");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");
//hand.style.transform = `rotate(90deg)`; //🔍 HINT: THis is an example of how to rotate the hand!

// to use setInterval
//hand to move and complete the rotation every 60 seconds
// create a variable that selects the hand - done
//create function that has a set interval of 1 seconds
//adjust the hand using the tranform property in main.js

function time() {
    let d= new Date();
    let s = d.getSeconds();
    console.log(s);
    let m = d.getMinutes();
    let h = d.getHours();
    s = (360 / 100) * ((s / 60) * 100);
    m = (360 / 100) * ((m / 60) * 100);
    h = (360 / 100) * ((h / 12) * 100);

    hand.style.transform = `rotate(${s}deg)`;
    min.style.transform = `rotate(${m}deg)`
    hour.style.transform = `rotate(${h}deg)`
}


// function handMovement (event) {
//    hand.style.transform = `rotate(${sec}deg)`;
// }
setInterval (time, 0);


