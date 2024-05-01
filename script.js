logged = false

let log = 'root'
let pass = '1'

function loginFun(){
    console.log(logged)
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (log == login && pass == password){
        console.log('logged in')
        logged = true
    } else{
        console.log('Login or password is not right')
    }
}
