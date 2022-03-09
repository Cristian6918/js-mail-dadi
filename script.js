console.log('js ok');
//creazione lista accesso
let accessList = ['pippo@gmail.com', 'gianluca.perseo@gmail.com', 'pluto@hotmail.it', 'cooper_ed@outlook.it', 'cristian.tulbu@gmail.com'];

//controllo email presente nella lista accesso
let emailButton = document.querySelector('#email_button');
emailButton.addEventListener('click', function () {
    let accessMail = document.querySelector('#email_input').value;
    console.log(accessMail);
    let pass = accessList.includes(accessMail);
    console.log(pass);
    let statusMsg = document.querySelector('.status_msg');
    if (pass === false) {
        statusMsg.innerText = 'User Inesistente!';
        statusMsg.style.color = 'red';
    } else {
        statusMsg.innerText = 'Benvenuto';
        statusMsg.style.color = 'green';
    }
});








