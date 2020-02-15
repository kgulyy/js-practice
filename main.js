'use strict';

const app = document.getElementById('app');
app.className = 'main';

const button = document.createElement('button');
button.textContent = 'Show  magic';

const popUp = document.createElement('div');
popUp.className = 'popup';
popUp.hidden = true;
popUp.textContent = 'Hello JS!';

app.appendChild(button);
app.appendChild(popUp);

button.addEventListener('click', function () {
    popUp.hidden = false;
});

popUp.addEventListener('click', function () {
    popUp.hidden = false;
});

app.addEventListener('click', function () {
    popUp.hidden = true;
}, true);
