const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);

const link = document.querySelector('a');
if (Math.random() > 0.5) {
    link.href = 'https//cnn.com';
    link.textContent = 'ScriptJedi42';
}

const sect = document.querySelector('section');
const para = document.createElement('p');
para.classList.add('dynamic');

para.textContent = ' We hope you enjoyed the ride.';
for (let i = 0; i < 10; i++) {
    sect.appendChild(para.cloneNode(true));
}

for (let i = 0; i < 5; i++) {
   const parToRemove = document.querySelector('section p.dynamic');
    sect.removeChild(parToRemove);
}
function btnClicked() {
    const newPara = para.cloneNode(true);
    sect.appendChild(newPara);    
}
document.querySelector('.calc').addEventListener('click', calc);
function calc() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}
document.querySelector('.clear').addEventListener('click', clear);
function clear() {
    
}

$('.some-fun').click(() => $('p').togg)
