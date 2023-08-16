const button = document.getElementById("click");
const clickCount = document.getElementById("counter");

let count = 0;

if (sessionStorage.getItem('clickCount')){
    count = sessionStorage.getItem('clickCount');
    clickCount.textContent = count;
}
 
button.addEventListener('click', () => {
    count ++;
    clickCount.textContent = count;

    sessionStorage.setItem('clickCount', count);
})

let timeLeft = 30;
const timer= document.getElementById('timer');
const timerId = setInterval(() => {
    if(timeLeft > 0) {
        timeLeft --; 
        timer.textContent =`Timer: ${timeLeft}`;
    } else {
        clearInterval(timerId);
        button.disabled = true;
        timer.textContent = "Timer has ended!";
    }
}, 1000);