"use strict";

let timer = 30;
let count = -1;
const questionCollection = [
    {"question": "In the song &ldquo;The Ultimate Showdown of Ultimate Destiny,&rdquo; who is the only one to survive the battle?","correct_answer":"Mr. Rogers" ,"incorrect_answers":["Batman","Chuck Norris","Godzilla"]},
    {"question":"Vatican City is a country.","correct_answer":"True","incorrect_answers":["False"]},{"question":"Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?","correct_answer":"Assyrians","incorrect_answers":["Babylonians","Hittites","Elamites"]},
    {"question":"Who was the first female protagonist in a video game?","correct_answer":"Samus Aran","incorrect_answers":["Lara Croft","Alis Landale","Chell"]},
    {"question":"Which Overwatch character says the line &quot;Heroes never die!&quot;?","correct_answer":"Mercy","incorrect_answers":["Reaper","Sonic","Ana"]},
    {"question":"What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named &quot;Stitch&quot;?","correct_answer":"Lilo","incorrect_answers":["Lolo","Lucy","Lulu"]},
    {"question":"Who created Ultron of Earth-616?","correct_answer":"Henry Pym","incorrect_answers":["Amadeus Cho","Tony Stark","Reed Richards"]},
    {"question":"Who was the winner of the 2016 WWE Royal Rumble?","correct_answer":"Triple H","incorrect_answers":["Roman Reigns","AJ Styles","Dean Ambrose"]},
    {"question":"What year was Min Yoongi from South Korea boy band &quot;BTS&quot; born in?","correct_answer":"1993","incorrect_answers":["1992","1995","1994"]},
    {"question":"Which ones of these Mario Kart games was made for the Gameboy Advance?","correct_answer":"Mario Kart: Super Circuit","incorrect_answers":["Mario Kart: Double Dash","Mario Kart 64","Super Mario Kart"]}
];

/**
 *   timer functions that will keep track of when the next round should start.
 * 
 * @method countDownTimer
 * @param {*} time 
 */
const countDownTimer = function(time){
    timer = time;
     setInterval(function(){
         timer--;
        document.getElementsByClassName('timer2')[0].textContent = `${timer}`;
        if(timer <= 0){
            timer = 30;
             test();
        }
     }, 1000);
 }

/**
 * Generates the template string to be append to the question area
 * 
 * @method generateQuestionTemplate
 * @param {*} question 
 */
function generateQuestionTemplate(question){
    questionOptions = question.incorrect_answers;
    questionOptions.push(question.correct_answer);
    const questionTemplate = `<div class="question">${question.question}</div>
    <div class="answers">
        <ul>${questionOptions.map(answer => `<li><button value="${answer}" class="btn">${answer}</button></li>`).join(' ')}</ul>
    </div>`;
    document.getElementsByClassName('question-area')[0].innerHTML =questionTemplate ;
    enable();
}

/**
 *  Will change the order of the answers 
 * 
 * @method randomizeAnswersOrder
 * @param {*} question 
 */
function randomizeAnswersOrder(question){
    // Need to randomize the order of both the correct and incorect answers
    return question
}

/**
 *  Starts the next roud and questions 
 * 
 * @method nextRound
 */
function nextRound(){
    if(count < questionCollection.length){
        count++;
        generateQuestionTemplate(questionCollection[count]);
    }else{
        alert('game Over');
    }
}

/**
 *  Enable Listners for click events on the buttons
 * 
 * @method enable
 */
function enable (){
    $('.btn').on('click',  function(event){
        if($(event.target).val() ===  questionCollection[count].correct_answer){
            console.log('correct');
        }else{
            console.log('WRONG!');
        }
    } );
}

/**
 * initilization function that will get everthing prepared for the app to run
 */
function init(){
    countDownTimer(3);
    enable();
}

$( document ).ready(function(){
    init();
})


