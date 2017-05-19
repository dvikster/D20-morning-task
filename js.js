function gen(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

var genNumber = gen(0, 10);
console.log(genNumber);

var inputNumber = document.getElementById('guess-number');
var valInputNumber = '0';
var attempts ='3';
var massage = document.getElementById('massage');
var playAgain= document.getElementById('playAgain');

inputNumber.addEventListener('change', ckeckNumber);

function ckeckNumber() {
    if( attempts >= 2 && attempts <=3){
        playAgain.style.display = 'none';
        // console.log('Yes');
        valInputNumber = inputNumber.value;
        // console.log('Попытка:'+ attempts +':'+valInputNumber);
        if( valInputNumber == genNumber){
            console.log('Вы молодец');
            attempts=0;
            valInputNumber = 0;
            massage.innerHTML = 'Вы молодец! Играть еще?'
            playAgain.style.display = 'block';
            inputNumber.value = '';
        }
        else{
            valInputNumber = 0;
            // console.log('Попробуйте еще');
            var leftAttempts = attempts-1;
            massage.innerHTML = 'Попробуйте еще. Осталось попыток:'+ leftAttempts;
        }
    }
    else{
        // console.log('Попытка:'+ attempts);
        // console.log('No');
        massage.innerHTML = 'Вы не угадали. Играть еще?';
        playAgain.style.display = 'block';
        attempts=3;
        inputNumber.value = '';
    }
    attempts--;
}

playAgain.onclick = function () {
    attempts=3;
    genNumber = gen(0, 10);
    console.log('New number:' + genNumber);
    massage.innerHTML = 'У вас 3 попытки';
}