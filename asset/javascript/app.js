

const countDownTimer = function(time){
    let timer = time;
    setInterval(function(){
        timer--;
       document.getElementsByClassName('timer2').innerHTML = `Timer ${timer}`;
       console.log('1');
    }, 1000);
}

countDownTimer(30);