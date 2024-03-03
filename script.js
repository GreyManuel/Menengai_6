import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Yes! Save The Dates; 16-17 March. See You There:)';
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});



const btn = document.getElementById("btn")
function makeConfetti(){
    confetti()
}

btn.addEventListener("click", makeConfetti)
