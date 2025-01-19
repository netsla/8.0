let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

minValue =
    minValue <= -999
      ? (minValue = -999)
      : minValue > 999
      ? (minValue = 999)
      : minValue;
  maxValue =
    maxValue > 999
      ? (maxValue = 999)
      : maxValue < -999
      ? (maxValue = -999)
      : maxValue;


if (maxValue < minValue) {
    [maxValue, minValue] = [minValue, maxValue];
}

if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
  }

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    onClick=window.location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F62E}`;
                break;

                case 1:
                    answerPhrase = `Вы забыли, какое число загадали?\n\u{1F615}`;
                break;

                case 2:
                    answerPhrase = `Вы ошиблись с числом!\n\u{274C}`;
                break;
        }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            const phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F62E}`;
                break;

                case 1:
                    answerPhrase = `Вы забыли, какое число загадали?\n\u{1F615}`;
                break;

                case 2:
                    answerPhrase = `Вы ошиблись с числом!\n\u{274C}`;
                break;
        }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

// document.getElementById('btnLess').addEventListener('click', function () {
//     if (gameRun){
//         answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
//         gameRun = false;
//     }
// })

// document.getElementById('btnRetry').addEventListener('click', location.reload())