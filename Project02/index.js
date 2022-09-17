/* 
** document.getElementById()
**addEventListener()
**e.target
**CSS styling Trough JavaScript
**CSS Animation
*/

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Even Listeners
openBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});