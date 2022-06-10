const url = '../relatorio-cadastro/index.html';

document.querySelector('#input').focus();
const aluno = document.getElementById('input');
const email = document.getElementById('input-email');
const matricula = document.getElementById('input-matricula');
let Aluno = [];

function cadastrarAlunos(){
    if(aluno.value == '' || email.value == '' || matricula.value == ''){
        return alert('❌ Todos os campos são obrigatórios!')
    }else{
        Aluno.push({'Aluno': aluno.value, 'Email': email.value, 'Matricula': matricula.value});
        localStorage.setItem('Aluno', JSON.stringify(Aluno));
        document.querySelector('#input').focus();
    }
    
}
function relatorio(){
    window.open(url);
}
  
function processaFuncoes() {
    cadastrarAlunos();
}


