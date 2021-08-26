// Variabile Constante
const playButton = document.querySelector('.rollBtn');
const slotsOne = document.querySelector('#slots-two');
const slotsTwo = document.querySelector('#slots-one');
const slotsThree = document.querySelector("#slots-three");
const slotsFour = document.querySelector('#slots-five');
const slotsFive = document.querySelector('#slots-four');
const slotsSix = document.querySelector("#slots-six");
const slotsSeven = document.querySelector('#slots-eight');
const slotsEight = document.querySelector('#slots-seven');
const slotsNine = document.querySelector("#slots-nine");
const playerBalance = document.querySelector('.real-balance-slots');
const playerMoneyPlayed = document.querySelector('.input-balance-slots');
const slotsAudio = 'sounds/slots.mp3';
const winningSound = new Audio('sounds/yay.mp3');
const slotsImage = [
    {chance:60,image:"lemon"},
    {chance:20,image:"pineapple"},
    {chance:10,image:"strawberry"},
    {chance:1,image:"cross"},
]



//Variabile Dinamice
let xRand;
let pressed = 0;
let timer = 4;
let help = 0;
let symbols = [];

playButton.addEventListener('click', ()=>{
    if(!pressed){
        if(parseInt(playerMoneyPlayed.value) > 0 && parseInt(playerMoneyPlayed.value) <= parseInt(playerBalance.textContent)){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) - parseInt(playerMoneyPlayed.value)).toString();
            pressed = 1;
            randomChances = [
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
                Math.floor(Math.random() * 156),
            ]
            help = verifyTheSymbol(randomChances[0]);
            slotsOne.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsOne.style.transform = 'rotateX('+help+'deg)';
    
            help = verifyTheSymbol(randomChances[1]);
            slotsTwo.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsTwo.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[2]);
            slotsThree.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsThree.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[3]);
            slotsFour.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsFour.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[4]);
            slotsFive.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsFive.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[5]);
            slotsSix.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsSix.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[6]);
            slotsSeven.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsSeven.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[7]);
            slotsEight.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsEight.style.transform = 'rotateX('+help+'deg)';

            help = verifyTheSymbol(randomChances[8]);
            slotsNine.style.webkitTransform = 'rotateX('+help+'deg)';
            slotsNine.style.transform = 'rotateX('+help+'deg)';
            console.log(symbols);
            slotAudio = new Audio(slotsAudio);
            slotAudio.play();
            wait();
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
    await sleep(6500);
    pressed = 0;
    timer = timer + 4;
    verifyWinnings();
}

function verifyTheSymbol(chance){
    if(chance >= 0 && chance <= 15){
        symbols.push("cross");
        return ((4 * timer) + 3) * 90;
    }
    else if(chance > 15 && chance <= 45){
        symbols.push("strawberry");
        return ((4 * timer) + 2) * 90;
    }
    else if(chance > 45 && chance <= 95){
        symbols.push("pineapple");
        return ((4 * timer) + 1) * 90;
    }
    else if(chance > 95){
        symbols.push("lemon");
        return 4 * timer * 90
    }
}

function verifyWinnings(){
    winningSoundUsed = 0;
    if(symbols[0] == symbols[1] && symbols[0] == symbols[2]){
        if(winningSoundUsed == 0){
            winningSound.play();
            winningSoundUsed = 1;
        }
        console.log("Castigat");
        if(symbols[0] == "lemon"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 2)).toString();
        }
        else if(symbols[0] == "pineapple"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 3)).toString();
        }
        else if(symbols[0] == "strawberry"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 6)).toString();
        }
        else if(symbols[0] == "cross"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 100)).toString();
        }
    }
    if(symbols[3] == symbols[4] && symbols[3] == symbols[5]){
        console.log("Castigat");
        if(winningSoundUsed == 0){
            winningSound.play();
            winningSoundUsed = 1;
        }
        if(symbols[3] == "lemon"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 2)).toString();
        }
        else if(symbols[3] == "pineapple"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 3)).toString();
        }
        else if(symbols[3] == "strawberry"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 6)).toString();
        }
        else if(symbols[3] == "cross"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 100)).toString();
        }
    }
    if(symbols[6] == symbols[7] && symbols[6] == symbols[8]){
        console.log("Castigat");
        if(winningSoundUsed == 0){
            winningSound.play();
            winningSoundUsed = 1;
        }
        if(symbols[6] == "lemon"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 2)).toString();
        }
        else if(symbols[6] == "pineapple"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 3)).toString();
        }
        else if(symbols[6] == "strawberry"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 6)).toString();
        }
        else if(symbols[6] == "cross"){
            playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 100)).toString();
        }
    }
    symbols = [];
    winningSoundUsed = 0
}