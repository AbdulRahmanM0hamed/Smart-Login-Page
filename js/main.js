//https://route-movies-api.vercel.app/


let nameSign = document.getElementById('nameInpSignUp');
let emailSign = document.getElementById('emailInpSignUp');
let passwordSign = document.getElementById('passwordInpSignUp');
let alertSuccess2 = document.getElementById('alertSuccess');
/*=================================*/
let emailInplog = document.getElementById('emailInplog');
let passwordInplog = document.getElementById('passwordInplog');
let alertTest = document.getElementById('alertTest');
/*=================================*/
let txtUser = document.getElementById('hForLogoute');
/*=================================*/
let x;





async function addUsers() {
    let usersSin = {
        first_name: nameSign.value,
        last_name: nameSign.value,
        email: emailSign.value,
        password: passwordSign.value
    }

    let myResbons = await fetch('https://route-movies-api.vercel.app/signup', {
        method: 'POST',
        body: JSON.stringify(usersSin),
        headers: {
            "content-type": 'application/json',
        }
    })

    x = await myResbons.json();

    alertSuccess2.classList.remove('d-none')

    if (alertSuccess2 == 'success') {
        alertSuccess2.classList.replace('alert-danger', 'alert-success')
        localStorage.setItem('token', x.token)


    }
    else {
        alertSuccess2.classList.add('alert-danger')

    }
    document.getElementById('alertSuccess').innerHTML = (x.message);


}


async function login() {

    let users = {
        email: emailInplog.value,
        password: passwordInplog.value
    }

    let myResbons = await fetch('https://route-movies-api.vercel.app/signin', {
        method: 'POST',
        body: JSON.stringify(users),
        headers: {
            "content-type": 'application/json',
        }
    })

    let x = await myResbons.json();

    alertTest.classList.remove('d-none')
    if (x.message == 'success') {
        console.log(x);

        alertTest.classList.replace('alert-danger', 'alert-success')
        localStorage.setItem('token', x.token)
        console.log(x.token);


        location.replace('/home.html')
    }
    else {
        alertTest.classList.add('alert-danger')

    }
    document.getElementById('alertTest').innerHTML = (x.message);

}


function logOut() {
    localStorage.removeItem('token')
    location.replace('index.html')

}

