//cadastra novo professor usando requisição POST para api no formato JSON
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
function cadastraProfessor() {
    event.preventDefault()
    let url = "https://apitopicos2022.herokuapp.com/professores"
    let nome = document.getElementById("nome-professor").value
    let email = document.getElementById("email-professor").value
    let senha = document.getElementById("senha").value
    let materia = document.getElementById("materia").value
    let turma = document.getElementById("turma-professor").value
  
    console.log(nome)
    console.log(email)

    body = {

        "nome": nome,
        "email": email,
        "senha": senha,
        "materia": materia,
        "type":"professor",
        "turma": turma

    }

    fazPost(url, body)
}