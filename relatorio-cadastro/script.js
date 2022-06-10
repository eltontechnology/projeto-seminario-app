const url2 = '../sorteio/index.html';
const excluir = document.getElementById('excluir');
const Aluno = JSON.parse(localStorage.getItem('Aluno'));


for (let i = 0; i < Aluno.length; i++) {
    let divAlunos = document.getElementById("divAlunos");      
    let paragrafo = document.createElement("p");
    paragrafo.appendChild(document.createTextNode(`${Aluno[i].Aluno} == E-mail: ${Aluno[i].Email} == Matrícula: ${Aluno[i].Matricula}`));
    divAlunos.appendChild(paragrafo);
}

function sorteio(){
    window.open(url2);
}

$(document).ready(function() {
    $('#btnSortear').click(function(e) {
       e.preventDefault();
       let aluno = document.getElementById('divAlunos'); 
       let dados = new Blob(['\ufeff'+ aluno.innerText], {type: 'text/csv'});
       let url = window.URL.createObjectURL(dados);
       let a = document.createElement('a');
       a.href = url;
       a.download = 'Cadastro de Alunos ';
       a.click();
    });
});


