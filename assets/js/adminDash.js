//carrega o nome do usuário guardado na session para usar na mensagem de olá
function mainAdm() {
    const setUserName = document.getElementById('userName');
    let myName = sessionStorage.getItem('name');
    let myType = sessionStorage.getItem('type');
    setUserName.textContent ="Olá "+ myName;
    if (myType != 'admin') {
        window.location.replace("../innerPages/login.html");
    }
}


/**********
*         *
*  ALUNOS *
*         *
**********/
//carrega lista de alunos com request http para api
function getUser(url) {
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}
function delelteUser(url) {
    let request = new XMLHttpRequest()
    request.open("DELETE",url,false)
    request.send()
}
//criar linhas da tabela com dados dos alunos
function criarLinha (usuario) {
    
    linha = document.createElement('tr');
    tdMatricula = document.createElement('td');
    tdEmail = document.createElement('td');
    tdNome = document.createElement('td');
    tdTurma = document.createElement('td');
    tdResponsavel = document.createElement('td');
    tdEmailResponsavel = document.createElement('td');

    tdMatricula.innerHTML = usuario.id;
    tdEmail.innerHTML = usuario.email;
    tdNome.innerHTML = usuario.nome;
    tdTurma.innerHTML = usuario.turma;
    tdResponsavel.innerHTML = usuario.nomeResponsavel;
    tdEmailResponsavel.innerHTML = usuario.emailResponsavel;

    linha.appendChild(tdMatricula);
    linha.appendChild(tdNome);
    linha.appendChild(tdTurma);
    linha.appendChild(tdEmail);
    linha.appendChild(tdResponsavel);
    linha.appendChild(tdEmailResponsavel);
    
    
    return linha;
}
// carrega a lista de alunos fazendo uma request para api
function loadStudentsData() {
    let data = getUser('https://apitopicos2022.herokuapp.com/alunos');
    let userData = JSON.parse(data);
    let tabela = document.getElementById('tabela-alunos');
    userData.forEach(element => {
       
        let linha = criarLinha(element);
        tabela.appendChild(linha)
    });
}
/* FIM ALUNOS */

/*****************
*                *   
*   PROFESSORES  *
*                *   
*****************/

// carrega a lista de professores fazendo uma request para api
function loadTeacherData() {
    let data = getUser('https://apitopicos2022.herokuapp.com/professores');
    let userData = JSON.parse(data);
    let tabelaProfessores = document.getElementById('tabela-professores');
    userData.forEach(element => {
       
        let linha = criarLinhaProfessor(element);
        tabelaProfessores.appendChild(linha)
    });
}
//criar linhas da tabela com dados dos professores
function criarLinhaProfessor (usuario) {
    

    linha = document.createElement('tr');
    tdMatricula = document.createElement('td');
    tdEmail = document.createElement('td');
    tdNome = document.createElement('td');
    tdTurma = document.createElement('td');
    tdResponsavel = document.createElement('td');
    tdAcao = document.createElement('td');


    tdMatricula.innerHTML = usuario.id;
    tdEmail.innerHTML = usuario.email;
    tdNome.innerHTML = usuario.nome;
    tdTurma.innerHTML = usuario.turma;
    tdResponsavel.innerHTML = usuario.materia;
    tdAcao.innerHTML = `<a class="editar"><button onclick="deleteData(${usuario.id}, 'professores')" class="ver-button">Excluir</button></a>`;

    linha.appendChild(tdMatricula);
    linha.appendChild(tdNome);
    linha.appendChild(tdTurma);
    linha.appendChild(tdEmail);
    linha.appendChild(tdResponsavel);
    linha.appendChild(tdAcao);
    
    
    return linha;
}

/* FIM PROFESSORES */

/************
*           *
*  USUÁRIOS *
*           *
************/

// carrega a lista de usuários fazendo uma request para api
function loadUserData() {
    let data = getUser('https://apitopicos2022.herokuapp.com/user');
    let userData = JSON.parse(data);
    let tabelaUsuarios = document.getElementById('tabela-usuarios');
    userData.forEach(element => {
       
        let linha = criarLinhaUsuario(element);
        tabelaUsuarios.appendChild(linha)

    });
}
//criar linhas da tabela com dados dos usuários
function criarLinhaUsuario (systemUser) {
    linha = document.createElement('tr');
    tdMatricula = document.createElement('td');
    tdNome = document.createElement('td');
    tdEmail = document.createElement('td');
    tdIdProfessor = document.createElement('td');
    tdUserType = document.createElement('td');
    tdAcao = document.createElement('td');
    

    tdMatricula.innerHTML = systemUser.id;
    tdNome.innerHTML = systemUser.nome;
    tdEmail.innerHTML = systemUser.email;
    tdIdProfessor.innerHTML = systemUser.id_professor;
    tdUserType.innerHTML = systemUser.type;
    tdAcao.innerHTML = `<a class="editar"><button onclick="deleteData(${systemUser.id}, 'user')" class="ver-button">Excluir</button></a>`;
 

    linha.appendChild(tdMatricula);
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdIdProfessor);
    linha.appendChild(tdUserType);
    linha.appendChild(tdAcao);
    
    
    return linha;
}
/* FIM USUÁRIOS */
//função que deleta registro
function deleteData(id,tipo) {

    var deleteConfirm = prompt("Tem certeza que quer apagar o registro? digite 'SIM'");

    if ( deleteConfirm.toUpperCase() == "SIM") {
        delelteUser(`https://apitopicos2022.herokuapp.com/${tipo}/${id}`);
        setTimeout(() => {
            document.location.reload(true)
        }, 1000);
      alert("Registro Deletado");
    }
}

mainAdm();
loadStudentsData();
loadTeacherData();
loadUserData();