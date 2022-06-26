//cadastra novo aluno usando requisição POST para api no formato JSON
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
function cadastraAluno() {
    event.preventDefault()
    let url = "https://apitopicos2022.herokuapp.com/alunos"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let nomeResponsavel = document.getElementById("nomeResponsavel").value
    let turma = document.getElementById("turma").value
    let emailResponsavel = document.getElementById("emailResponsavel").value
  

    body = {

        "nome": nome,
        "email": email,
        "nomeResponsavel": nomeResponsavel,
        "turma": turma,
        "emailResponsavel": emailResponsavel

    }

    fazPost(url, body)
}