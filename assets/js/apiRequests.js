function getUser(url) {
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}
function login() {

    event.preventDefault()
    sessionStorage.clear();  
    let senha = document.getElementById("senha").value
    let email = document.getElementById("email").value
    let data = getUser(`https://apitopicos2022.herokuapp.com/user?email=${email}&senha=${senha}`);
    let userData = JSON.parse(data);
    let arrayToObj =  Object.assign({}, userData);
    let user = arrayToObj[0];

    if (user!= null || user != undefined) {
        sessionStorage.setItem('id',user.id);
        sessionStorage.setItem('name',user.nome);
        sessionStorage.setItem('email',user.email);
        sessionStorage.setItem('type',user.type);
        let myName = sessionStorage.getItem('name');
        let myId = sessionStorage.getItem('id');
        let myEmail = sessionStorage.getItem('email');
        let myType = sessionStorage.getItem('type');
        console.log(myName, myEmail, myType, myId);
        if (user.type == "admin") {
            window.location.replace("../innerPages/adminDash.html");
        }if (user.type == "professor") {
            console.log('eh professor')
        }
    }else{
        const error = document.getElementById('error');
        error.textContent = 'usuário ou senha invalidos';
        setTimeout(() => {
            error.textContent = '';
          }, "2000");
    }
}