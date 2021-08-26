const cube = document.querySelector('#cube');
const buttonPar = document.querySelector('.par-button');
const buttonImpar = document.querySelector('.impar-button');
const buttonNumber1 = document.querySelector('.number1');
const buttonNumber2 = document.querySelector('.number2');
const buttonNumber3 = document.querySelector('.number3');
const buttonNumber4 = document.querySelector('.number4');
const buttonNumber5 = document.querySelector('.number5');
const buttonNumber6 = document.querySelector('.number6');
const playedMoney = document.querySelector('.input-balance-dice');
const totalMoney = document.querySelector('.real-balance-dice');
const min = 1;
const max = 24;
const audios = [
    'sounds/rolldiceIn.mp3',
    'sounds/yay.mp3'
]
const deg = [
    {xDeg: 270, yDeg: 990, win:5},
    {xDeg: 1080, yDeg: 180, win:2},
    {xDeg: 450, yDeg: 630, win:6},
    {xDeg: 1620, yDeg: 270, win:4},
    {xDeg: 1260, yDeg: 1620, win:1},
    {xDeg: 1800, yDeg: 990, win:3},
];

// Variabile Dinamice
let randNumber = 0;
let lastNumber = -1;
let result = 0;
let pressed = 1;

buttonPar.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win % 2 == 0){
                result = 1;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonImpar.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win % 2 != 0){
                result = 1;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonNumber1.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win == 1){
                result = 2;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonNumber2.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win == 2){
                result = 2;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonNumber3.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win == 3){
                result = 2;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonNumber4.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win == 4){
                result = 2;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonNumber5.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win == 5){
                result = 2;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

buttonNumber6.addEventListener('click', ()=>{
    if(pressed){
        pressed = 0;
        if(parseInt(playedMoney.value) > 0 && parseInt(playedMoney.value) <= parseInt(totalMoney.textContent)){
            totalMoney.innerHTML = (parseInt(totalMoney.textContent) - parseInt(playedMoney.value)).toString();
            randNumber = Math.floor(Math.random() * 6);
            if(randNumber == lastNumber){
                randNumber = randNumber - 1;
                if(randNumber < 0){
                    randNumber = -1 * (randNumber); 
                }
            }
            lastNumber = randNumber;
            const xRand = deg[randNumber].xDeg;
            const yRand = deg[randNumber].yDeg;
            closeButtons();
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            if(deg[randNumber].win == 6){
                result = 2;
            }else{
                result = 0;
            }
            wait();
        }else{
            pressed = 1;
        }
    }
});

function sleep(ms){
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
       }, ms);
    });
}

async function wait(){
    const audio_manea = new Audio(audios[0]);
    audio_manea.play();
    await sleep(6300);
    openButtons();
    if(result == 1){
        const winningSound = new Audio('sounds/yay.mp3');
        winningSound.play();
        totalMoney.innerHTML = (parseInt(totalMoney.textContent) + (parseInt(playedMoney.value) * 2)).toString();
    }else if(result == 2){
        const winningSound = new Audio('sounds/yay.mp3');
        winningSound.play();
        totalMoney.innerHTML = (parseInt(totalMoney.textContent) + (parseInt(playedMoney.value) * 5)).toString();
    }
}

function closeButtons(){
    buttonPar.style.pointerEvents = 'none';
    buttonImpar.style.pointerEvents = 'none';
    buttonNumber1.style.pointerEvents = 'none';
    buttonNumber2.style.pointerEvents = 'none';
    buttonNumber3.style.pointerEvents = 'none';
    buttonNumber4.style.pointerEvents = 'none';
    buttonNumber5.style.pointerEvents = 'none';
    buttonNumber6.style.pointerEvents = 'none';
}

function openButtons(){
    pressed = 1;
    buttonPar.style.pointerEvents = 'auto';
    buttonImpar.style.pointerEvents = 'auto';
    buttonNumber1.style.pointerEvents = 'auto';
    buttonNumber2.style.pointerEvents = 'auto';
    buttonNumber3.style.pointerEvents = 'auto';
    buttonNumber4.style.pointerEvents = 'auto';
    buttonNumber5.style.pointerEvents = 'auto';
    buttonNumber6.style.pointerEvents = 'auto';
}