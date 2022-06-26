//cadastra novo usuario usando requisição POST para api no formato JSON
function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function() {
        console.log(this.responseText)
    }
    setTimeout(() => {
        document.location.reload(true)
    }, 2000);

    return request.responseText
    
}

//pega os dados do form para chamar a função de cadastro
function cadastraUsuario() {
    event.preventDefault()
    let url = "https://apitopicos2022.herokuapp.com/user"
    let nome = document.getElementById("nome-user").value;
    let email = document.getElementById("email-user").value;
    let senha = document.getElementById("senha-user").value;
    let tipo = document.getElementById("tipo").valuetext.toLowerCase();
    let id_professor = document.getElementById("id_professor").value;
  
    console.log(nome)
    console.log(email)

    body = {

        "nome": nome,
        "email": email,
        "senha": senha,
        "type": tipo,
        "id_professor":id_professor

    }

    fazPost(url, body)
}