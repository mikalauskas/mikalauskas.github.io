let answerDiv = document.querySelector('#answerDiv');
let questionDiv = document.querySelector('#questionDiv');

let minValue = 0;
let maxValue = 100;
let orderNumber = 1;
let gameRun = true;
let guessPhrase = '';
let answerNumWord = '';
let guessRandom = 0;

const a = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
            'одиннадцать', 'двенадцать', 'тринадцть', 'четырнадцать', 'пятнадцать', 'шестьнадцать',
            'семьнадцать', 'восемнадцать', 'девятнадцать'];

const minFieldElement = document.querySelector('#minField');
const maxFieldElement = document.querySelector('#maxField');
const gameDesc = document.querySelector('#gameDescription');

minFieldElement.addEventListener('input', function() {
    (isNaN(minFieldElement.value)) ? minValue = 0 : minValue = parseInt(minFieldElement.value);
    gameDesc.innerText = 'Загадайте любое целое число от ' + minValue + ' до ' + maxValue + ', а я его угадаю'
    console.log(minValue);
});

maxFieldElement.addEventListener('input', function() {
    (isNaN(maxFieldElement.value)) ? maxValue = 100 : maxValue = parseInt(maxFieldElement.value);
    gameDesc.innerText = 'Загадайте любое целое число от ' + minValue + ' до ' + maxValue + ', а я его угадаю'
    console.log(maxValue);
});

document.querySelector('#btnStart').addEventListener('click', function(){
    if (minValue < -999) minValue = -999;
    if (maxValue > 999) maxValue = 999;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    (answerNumber < 20) ? answerNumWord = a[Number(answerNumber)] : answerNumWord = answerNumber;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;

    answerField.innerText = `Вы загадали число ${answerNumWord}?`;
    answerDiv.style.display = "none";
    questionDiv.style.display = "inline-block";
});


// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

document.getElementById('btnRetry').addEventListener('click', function () {
    answerDiv.style.display = "inline-block";
    questionDiv.style.display = "none";
    minValue = 0;
    maxValue = 100;
    minFieldElement.value = '';
    maxFieldElement.value = '';
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    (answerNumber < 20) ? answerNumWord = a[Number(answerNumber)] : answerNumWord = answerNumber;
    orderNumber = 1;
    gameRun = true;
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    
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
            answerNumber = Math.floor((maxValue + minValue) / 2);
            (answerNumber < 20) ? answerNumWord = a[Number(answerNumber)] : answerNumWord = answerNumber;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            guessRandom = Math.round(Math.random()*3);
            (guessRandom === 0) ? guessPhrase = `Вы загадали число ${answerNumWord}?`: 
            (guessRandom === 1) ? guessPhrase = `Я уверен, это ${answerNumWord}?`: 
            (guessRandom === 1) ? guessPhrase = `Я знаю! Это ${answerNumWord}?!`:
            guessPhrase = `Я думаю, это ${answerNumWord}?`;
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
            (answerNumber < 20) ? answerNumWord = a[Number(answerNumber)] : answerNumWord = answerNumber;
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            guessRandom = Math.round(Math.random()*3);
            (guessRandom === 0) ? guessPhrase = `Вы загадали число ${answerNumWord}?`: 
            (guessRandom === 1) ? guessPhrase = `Я уверен, это ${answerNumWord}?`: 
            (guessRandom === 1) ? guessPhrase = `Я знаю! Это ${answerNumWord}?!`:
            guessPhrase = `Я думаю, это ${answerNumWord}?`;
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

