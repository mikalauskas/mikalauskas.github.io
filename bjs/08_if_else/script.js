let answerDiv = document.querySelector('#answerDiv');
let questionDiv = document.querySelector('#questionDiv');

let minValue = 0;
let maxValue = 100;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;

const minFieldElement = document.querySelector('#minField');
const maxFieldElement = document.querySelector('#maxField');

minFieldElement.addEventListener('input', function() {
    (isNaN(minFieldElement.value)) ? minValue = 0 : minValue = parseInt(minFieldElement.value);
    console.log(minValue);
});

maxFieldElement.addEventListener('input', function() {
    (isNaN(maxFieldElement.value)) ? maxValue = 100 : maxValue = parseInt(maxFieldElement.value);
    console.log(maxValue);
});

document.querySelector('#btnStart').addEventListener('click', function(){
    (minValue < -999) ? minValue = -999 : console.log(minValue);
    (maxValue > 999) ? maxValue = 999 : console.log(maxValue);;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    answerDiv.style.display = "none";
    questionDiv.style.display = "inline-block";
});


// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let gameRun = true;

let guessPhrase = '';
let guessRandom = 0;

document.getElementById('btnRetry').addEventListener('click', function () {
    answerDiv.style.display = "inline-block";
    questionDiv.style.display = "none";
    minValue = 0;
    maxValue = 100;
    minFieldElement.value = '';
    maxFieldElement.value = '';
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    
    guessPhrase = '';
    guessRandom = 0;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            guessRandom = Math.round(Math.random()*2);
            (guessRandom === 0) ? guessPhrase = `Вы загадали число ${answerNumber}?`: 
            (guessRandom === 1) ? guessPhrase = `Я уверен, это ${answerNumber}?`:
            guessPhrase = `Я думаю, это ${answerNumber}?`;
            answerField.innerText = guessPhrase;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            guessRandom = Math.round(Math.random()*2);
            (guessRandom === 0) ? guessPhrase = `Вы загадали число ${answerNumber}?`: 
            (guessRandom === 1) ? guessPhrase = `Я уверен, это ${answerNumber}?`:
            guessPhrase = `Я думаю, это ${answerNumber}?`;
            answerField.innerText = guessPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

