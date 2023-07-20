

const theme = document.querySelector('.theme');
const image = theme.querySelector('img');
const ModalBtn = document.querySelector('.Modal');
const body = document.querySelector('body');




// переключение темы
let isDarkMode = false;

function toggleTheme() {
    if (isDarkMode == true) {
        body.style.backgroundColor = 'white';
        ModalBtn.style.backgroundColor = 'rgb(22, 22, 22)';
        ModalBtn.style.color = 'white';
        modalWindow.style.backgroundColor = 'rgb(22, 22, 22)';
        modalWindow.style.color = 'White';
        closeBtn.style.color = 'white';
        image.src = "img/moon.png";
        isDarkMode = false
      } 

    else {
        body.style.backgroundColor = 'rgb(22, 22, 22)';
        ModalBtn.style.backgroundColor = 'white';
        ModalBtn.style.color = 'rgb(22, 22, 22)';
        modalWindow.style.backgroundColor = 'White';
        modalWindow.style.color = 'rgb(22, 22, 22)';
        closeBtn.style.color = 'rgb(22, 22, 22)';
        image.src = "img/sun.png";
        isDarkMode = true
      }
}

theme.addEventListener('click', toggleTheme)
// переключение темы












// переключение модального окна
const modalWindow = document.createElement('div');
const modalBack = document.createElement('div');
const closeBtn = document.createElement('div');
const agreeBtn = document.createElement('div');
const declineBtn = document.createElement('div');


ModalBtn.addEventListener('click', () => {
    modalWindow.classList.add('windowAppear');
    modalBack.classList.add('modalBack');
    closeBtn.classList.add('closeBtn');
    agreeBtn.classList.add('agreeBtn');;
    declineBtn.classList.add('declineBtn');
    const windows = document.querySelector('.windows');
    modalWindow.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At iusto eaque possimus cumque sapiente eveniet temporibus aliquid quo dolorum sit quos odit optio ipsam ipsum, soluta consequuntur, accusamus tempore repellendus?'
    closeBtn.textContent = 'X';
    agreeBtn.textContent = 'Agree';
    declineBtn.textContent = 'Decline';
    windows.append(modalWindow);
    windows.append(closeBtn);
    windows.append(agreeBtn);
    windows.append(declineBtn);
    windows.append(modalBack);
})


function CloseModalWindow() {
    modalWindow.classList.remove('windowAppear');
    modalBack.classList.remove('modalBack');
    closeBtn.classList.remove('closeBtn');
    agreeBtn.classList.remove('agreeBtn');
    declineBtn.classList.remove('declineBtn');
    modalWindow.textContent = null;
    closeBtn.textContent = null;
    agreeBtn.textContent = null;
    declineBtn.textContent = null;
}

modalBack.addEventListener('click', CloseModalWindow);
closeBtn.addEventListener('click', CloseModalWindow);
agreeBtn.addEventListener('click', CloseModalWindow);
declineBtn.addEventListener('click', CloseModalWindow);
// переключение модального окна
















