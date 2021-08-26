(function(){
    //Variabile Constante
    const wheel = document.querySelector('.wheel');
    const arrow = document.querySelector('.arrow');
    const playerBalance = document.querySelector('.real-balance');
    const playerMoneyPlayed = document.querySelector('.input-balance')
    const redButton = document.querySelector('.red-button');
    const greenButton = document.querySelector('.green-button');
    const blackButton = document.querySelector('.black-button');
    const redNumbers = [3,12,7,18,9,14,1,16,5,23,30,36,27,34,25,21,19,32];
    const blackNumbers = [26,35,28,29,22,31,20,33,24,10,8,11,13,6,17,2,4,15];
    const audio = new Audio('sounds/roulette-sound.wav');
    const winningSound = new Audio('sounds/yay.mp3');
    const deg = [
        {deg: 2010, win: 8},
        {deg: 2020, win: 30},
        {deg: 2030, win: 11},
        {deg: 2040, win: 36},
        {deg: 2050, win: 13},
        {deg: 2060, win: 27},
        {deg: 2070, win: 6},
        {deg: 2080, win: 34},
        {deg: 2090, win: 17},
        {deg: 2100, win: 25},
        {deg: 2110, win: 2},
        {deg: 2120, win: 21},
        {deg: 2125, win: 4},
        {deg: 2135, win: 19},
        {deg: 2145, win: 15},
        {deg: 2155, win: 32},
        {deg: 2165, win: 0},
        {deg: 2175, win: 26},
        {deg: 2185, win: 3},
        {deg: 2195, win: 35},
        {deg: 2205, win: 12},
        {deg: 2215, win: 28},
        {deg: 2225, win: 7},
        {deg: 2235, win: 29},
        {deg: 2245, win: 18},
        {deg: 2255, win: 22},
        {deg: 2265, win: 9},
        {deg: 2275, win: 31},
        {deg: 2285, win: 14},
        {deg: 2295, win: 20},
        {deg: 2305, win: 1},
        {deg: 2310, win: 33},
        {deg: 2320, win: 16},
        {deg: 2330, win: 24},
        {deg: 2340, win: 5},
        {deg: 2350, win: 10},
        {deg: 2360, win: 23},
    ]

    //Variabile Dinamice
    let playerChoice = -1; // 0 = Black | 1 == Red | 2 == Green;
    let randomPosition;
    let clicked = false;
    let startButton;
    let pressed = 1;
    //Functii
    redButton.addEventListener('click', ()=>{
        if(pressed){
            pressed = 0;
            if(parseInt(playerMoneyPlayed.value) > 0 && parseInt(playerBalance.textContent) >= parseInt(playerMoneyPlayed.value)){
                audio.play();
                redButton.style.pointerEvents = 'none';
                greenButton.style.pointerEvents = 'none';
                blackButton.style.pointerEvents = 'none';
                playerBalance.innerHTML = (parseInt(playerBalance.textContent) - parseInt(playerMoneyPlayed.value)).toString();
                playerChoice = 1;
                //audio.play();
                wheel.style.transition = 'all 9s ease-out';
                randomPosition = Math.floor(Math.random() * 37);
                wheel.style.transform = `rotate(${deg[randomPosition].deg}deg)`
                wheel.classList.add('blur');
                clicked = true;
            }else{
                pressed = 1;
            } 
        }
    });

    greenButton.addEventListener('click', ()=>{
        if(pressed){
            pressed = 0;
            if(parseInt(playerMoneyPlayed.value) > 0 && parseInt(playerBalance.textContent) >= parseInt(playerMoneyPlayed.value)){
                audio.play();
                redButton.style.pointerEvents = 'none';
                greenButton.style.pointerEvents = 'none';
                blackButton.style.pointerEvents = 'none';
                playerBalance.innerHTML = (parseInt(playerBalance.textContent) - parseInt(playerMoneyPlayed.value)).toString();
                playerChoice = 2;
                //audio.play();
                wheel.style.transition = 'all 9s ease-out';
                randomPosition = Math.floor(Math.random() * 37);
                wheel.style.transform = `rotate(${deg[randomPosition].deg}deg)`
                wheel.classList.add('blur');
                clicked = true;
            }else{
                pressed = 1;
            }
        }
    });
    blackButton.addEventListener('click', ()=>{
        if(pressed){
            pressed = 0;
            if(parseInt(playerMoneyPlayed.value) > 0 && parseInt(playerBalance.textContent) >= parseInt(playerMoneyPlayed.value)){
                audio.play();
                redButton.style.pointerEvents = 'none';
                greenButton.style.pointerEvents = 'none';
                blackButton.style.pointerEvents = 'none';
                playerBalance.innerHTML = (parseInt(playerBalance.textContent) - parseInt(playerMoneyPlayed.value)).toString();
                playerChoice = 0;
                //audio.play();
                wheel.style.transition = 'all 9s ease-out';
                randomPosition = Math.floor(Math.random() * 37);
                wheel.style.transform = `rotate(${deg[randomPosition].deg}deg)`
                wheel.classList.add('blur');
                clicked = true;
            }else{
                pressed = 1;
            }
        }
    });

    wheel.addEventListener('transitionend', ()=>{
        console.log(deg[randomPosition].win);
        pressed = 1;
        if(clicked){
            for(let i = 0; i < redNumbers.length; i++){
                if(deg[randomPosition].win == redNumbers[i]){
                    if(playerChoice == 1){
                        winningSound.play();
                        playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 2)).toString();
                        console.log("Ai castigat");
                        break;
                    }else{
                        console.log("Ai pierdut");
                        break;
                    }
                }else if(deg[randomPosition].win == 0){
                    if(playerChoice == 2){
                        winningSound.play();
                        playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 36)).toString();
                        console.log("Ai castigat");
                        break;
                    }else{
                        console.log("Ai pierdut");
                        break;
                    }
                }else if(deg[randomPosition].win == blackNumbers[i]){
                    if(playerChoice == 0){
                        winningSound.play();
                        playerBalance.innerHTML = (parseInt(playerBalance.textContent) + (parseInt(playerMoneyPlayed.value) * 2)).toString();
                        console.log("Ai castigat");
                        break;
                    }else{
                        console.log("Ai pierdut");
                        break;
                    }
                }
            }
        }
        wheel.classList.remove('blur');
        redButton.style.pointerEvents = 'auto';
        greenButton.style.pointerEvents = 'auto';
        blackButton.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${deg[randomPosition].deg % 360}deg)`;
    });
})();