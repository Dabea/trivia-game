
 let timer = 30;
const countDownTimer = function(time){
   timer = time;
    setInterval(function(){
        timer--;
       document.getElementsByClassName('timer2')[0].textContent = `${timer}`;
       if(timer <= 0){
            test();
       }
    }, 1000);
}
 if(timer === 0){
     alert('Sorry Wrong answer')
 }
function test(){
    alert('im done');
}

countDownTimer(3);

