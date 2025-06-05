'use strict';
let dice=document.querySelector('.dice');
let btnRoll=document.querySelector('.btn--roll');
let player0=document.querySelector('.player--0');
let player1=document.querySelector('.player--1');
let btnHold=document.querySelector('.btn--hold');
let current0=document.querySelector('#current--0');
let current1=document.querySelector('#current--1');
let score0=document.querySelector('#score--0');
let score1=document.querySelector('#score--1');
let newGame=document.querySelector('.btn--new');
let numerRnd=0;


document.addEventListener('DOMContentLoaded', () => {
 dice.style.display='none'
});

btnRoll.addEventListener('click',()=>{
   numerRnd = Math.floor(Math.random() * 6) + 1;
   dice.style.display='block'
   dice.setAttribute('src', `dice-${numerRnd}.png`)
   if (nexPlayerValidator(numerRnd)) return;
   
   if ( player0.classList.contains('player--active')) {
      current0.textContent=numerRnd
   
  }else if ( player1.classList.contains('player--active')) {
    current1.textContent=numerRnd
  }
      
})


function nexPlayerValidator(rnd) {
  if (rnd==1 && player0.classList.contains('player--active')) {
    current0.textContent=0
    player0.classList.remove('player--active')
    player1.classList.add('player--active')  
    return true;
  }else if (rnd==1 && player1.classList.contains('player--active')) {
     current1.textContent=0
     player1.classList.remove('player--active')
     player0.classList.add('player--active')
    return true;
  }
}

btnHold.addEventListener('click',()=>{
  if ( Number(score0.textContent)>=100) {
    alert('Player 1 win')
    btnHold.setAttribute('disabled', 'true');
    btnRoll.setAttribute('disabled', 'true');
    return;
  }else if ( Number(score1.textContent)>=100) {
     alert('Player 2 win')
        btnHold.setAttribute('disabled', 'true');
        btnRoll.setAttribute('disabled', 'true');
    return
  }
 if ( player0.classList.contains('player--active')) {
   let data = parseInt(score0.textContent) + parseInt(current0.textContent);
    score0.textContent = data;
    current0.textContent=0
    player0.classList.remove('player--active')
    player1.classList.add('player--active') 
   
  }else if ( player1.classList.contains('player--active')) {
   let data = parseInt(score1.textContent) + parseInt(current1.textContent);
    score1.textContent = data;
    current1.textContent=0
     player1.classList.remove('player--active')
     player0.classList.add('player--active')
  }
   
})

newGame.addEventListener('click',()=>{
    dice.style.display='none'
    score0.textContent = 0;
    current0.textContent=0
    player0.classList.add('player--active')
   
     score1.textContent = 0;
    current1.textContent=0
    player1.classList.remove('player--active')
   
  
   
})