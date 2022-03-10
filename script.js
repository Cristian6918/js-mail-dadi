console.log('js ok');
//creazione lista accesso
let accessList = ['pippo@gmail.com', 'gianluca.perseo@gmail.com', 'pluto@hotmail.it', 'cooper_ed@outlook.it', 'cristian.tulbu@gmail.com'];

//controllo email presente nella lista accesso
let emailButton = document.querySelector('#email_button');
emailButton.addEventListener('click', function () {
    let statusMsg = document.querySelector('.status_msg');
    let accessMail = document.querySelector('#email_input').value;

    if (accessMail.includes('@') === false || accessMail.includes('.') === false) {
        statusMsg.innerText = 'Questa non è una mail';
        statusMsg.style.color = 'red';
    }
    else {
        console.log(accessMail);
        let pass = accessList.includes(accessMail);
        console.log(pass);
        if (pass === false) {
            statusMsg.innerText = 'User Inesistente!';
            statusMsg.style.color = 'red';
        } else {
            statusMsg.innerText = 'Benvenuto';
            statusMsg.style.color = 'green';
        }
    }

});

// dadi




const throwButton = document.querySelector('#throw');
const playerResult = document.querySelector('#player_result');
const computerResult = document.querySelector('#computer_result');
const result = document.querySelector('#result');

throwButton.addEventListener('click', function () {
    let player = Math.floor(Math.random() * 6 + 1);
    console.log(player);
    let computer = Math.floor(Math.random() * 6 + 1);
    console.log(computer);
    playerResult.innerText = `Lancio giocatore: ${player}`;
    computerResult.innerText = `Lancio computer: ${computer}`;

    if (player === computer) {
        result.innerText = 'Parità';
        result.style.color = 'Blue';
    } else if (player > computer) {
        result.innerText = 'Ha vinto il Giocatore';
        result.style.color = 'Green';
    } else {
        result.innerText = 'Ha vinto il Computer';
        result.style.color = 'Red';
    }
});







