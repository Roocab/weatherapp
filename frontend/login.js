// Insert your code here

document.querySelector('#register').addEventListener('click', function () {
    const registerName = document.querySelector('#registerName').value;
    const registerEmail = document.querySelector('#registerEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;
    const body = {
        name: registerName,
        email: registerEmail,
        password: registerPassword
    }
    fetch('https://weatherappback-wine.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.result) {
                window.location.assign('index.html');
            }
        })
})

document.querySelector('#connection').addEventListener('click', function () {
    const connectionEmail = document.querySelector('#connectionEmail').value;
    const connectionPassword = document.querySelector('#connectionPassword').value;

    const body = {
        email: registerEmail,
        password: registerPassword
    }
    fetch('https://weatherappback-wine.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.result) {
                window.location.assign('index.html');
            }
        })
})

