
//ARRAY DE TEMAS PRÉ DEFINIDOS
const tema = [];
    tema.push(' ==> TEMA: 01-Ler e escrever');
    tema.push(' ==> TEMA: 02-A cruzada');
    tema.push(' ==> TEMA: 03-Valorização profissional');
    tema.push(' ==> TEMA: 04-Dignidade');
    tema.push(' ==> TEMA: 05-Realização');
    tema.push(' ==> TEMA: 06-Reconhecimento');
    tema.push(' ==> TEMA: 07-Segurança');
    tema.push(' ==> TEMA: 08-Futuro');
    tema.push(' ==> TEMA: 09-Por que é que a gente é assim?');
    tema.push(' ==> TEMA: 10-Carta a um engenheiro recém-formado');
    tema.push(' ==> TEMA: 11-Segunda carta ao engenheiro recém-formado (Capitalizar virtudes e defeitos)');
    tema.push(' ==> TEMA: 12-Por que odiamos tanto o Crea (1)');
    tema.push(' ==> TEMA: 13-Por que odiamos tanto o Crea (2)');
    tema.push(' ==> TEMA: 14-Por que odiamos tanto o Crea (3)');
    tema.push(' ==> TEMA: 15-Por que odiamos tanto o Crea (4)');
    tema.push(' ==> TEMA: 16-SOEAA - o nosso maior evento');
    tema.push(' ==> TEMA: 17-Odeio Política!');
    tema.push(' ==> TEMA: 18-Eleições no sistema CONFEA/CREA');
    tema.push(' ==> TEMA: 19-Que tipo de líderes temos em nosso Sistema profissional?');
    tema.push(' ==> TEMA: 20-Felizmente a maioria das entidades não é assim');
    tema.push(' ==> TEMA: 21-Nossas entidades de classe não são empreendedoras');
    tema.push(' ==> TEMA: 22-Vale a pena participar de entidades de classe?');
    tema.push(' ==> TEMA: 23-Valor e responsabilidade do engenheiro e do arquiteto');
    tema.push(' ==> TEMA: 24-Carnaval, futebol, engenharia e arquitetura E a lógica de operação de nossas profissões');
    tema.push(' ==> TEMA: 25-Serviço de arquitetura e engenharia não é fácil!');
    tema.push(' ==> TEMA: 26-Não é tão óbvio quanto parece');
    tema.push(' ==> TEMA: 27-Engenheiros não são ouvidos (ou não se fazem ouvir?)');
    tema.push(' ==> TEMA: 28-Vazio');
    tema.push(' ==> TEMA: 29-Vazio');
    tema.push(' ==> TEMA: 30-Vazio');
    tema.push(' ==> TEMA: 31-Vazio');
    tema.push(' ==> TEMA: 32-Vazio');
    tema.push(' ==> TEMA: 33-Vazio');
    tema.push(' ==> TEMA: 34-Vazio');
    tema.push(' ==> TEMA: 35-Vazio');
    
//FIM DO ARRAY DE TEMAS

const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');
const tasksConteiner = document.querySelector('.tasks-container')
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();
    if(!inputIsValid) {
        return alert('❌ Informe o Nome do Aluno!!')
    }
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');
    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('far');
    deleteItem.classList.add('fa-trash-alt');

    deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksConteiner.appendChild(taskItemContainer);

    inputElement.value = '';

    updateLocalStorage();
};

const handleClick = (taskContent) => {
    const tasks = taskItemContainer.ChildNodes;

    for(const task of tasks) {
        const currentTaskBeingClicked = task.firstChild.isSameNode(taskContent);
        if(currentTaskBeingClicked) {
            task.firstChild.classList.toggle('completed')
        }
    }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksConteiner.childNodes;

    for(const task of tasks) {
        const currentTaskBeingClicked = task.firstChild.isSameNode(taskContent)
        if(currentTaskBeingClicked){
            taskItemContainer.remove();
        }
    }
    updateLocalStorage();
    location.reload();
};

addTaskButton.addEventListener('click', () => handleAddTask());
inputElement.addEventListener('change', () => handleInputChange());

document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        const btn = document.querySelector("#btnIncluir");
        btn.click(); 
        location.reload();
    }
    
});

document.querySelector('#input').focus();

const updateLocalStorage = () => {
    const tasks = tasksConteiner.childNodes;

    const localStorageTasks = [...tasks].map(task =>{
        const content = task.firstChild;
        return {Aluno: content.innerText}
    })
    localStorage.setItem('Aluno', JSON.stringify(localStorageTasks));
};

const refreshTask = () =>{
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('Aluno'));

    if(!tasksFromLocalStorage) return;

    for(const task of tasksFromLocalStorage){
        const taskItemContainer = document.createElement('div');
        taskItemContainer.classList.add('task-item');
        const taskContent = document.createElement('p');
        taskContent.innerText = task.Aluno;
        const deleteItem = document.createElement('i');
        deleteItem.classList.add('far');
        deleteItem.classList.add('fa-trash-alt');
        deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer, taskContent));
        taskItemContainer.appendChild(taskContent);
        taskItemContainer.appendChild(deleteItem);
        tasksConteiner.appendChild(taskItemContainer); 
    }
}

function mostrar_tabela(){
    document.getElementById('tabela').style.display = 'block';
}
function mostrar_tabela2(){
    document.getElementById('tabela2').style.display = 'block';
}

const aluno = JSON.parse(localStorage.getItem('Aluno'));
const avaliadores = JSON.parse(localStorage.getItem('Aluno'));
//Lógica para ordenar o Array de alunos forma aletória
    for (let i = 0; i < aluno.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [aluno[i], aluno[j]] = [aluno[j], aluno[i]];
    }
    //Fim da lógica para ordenar o Array de alunos forma aletória

    function carregar(){
        let momento = document.getElementById('h1');
        let data = new Date();
        let hora = data.getHours();
        let min = data.getMinutes();
        
        if(hora >= 0 && hora < 12){
            //bom dia
            momento.innerHTML = 'Bom dia Thayane!'
        }else if(hora > 12 && hora < 18){
            //boa tarde
            momento.innerHTML = 'Boa tarde Thayane! '
        }else{
            //boa noite
            momento.innerHTML = 'Boa noite Thayane!'
        }
    }

//*********BANCA A *************/

    let bancaA = [];
    for(i=0; i<3; i++){
        bancaA.push(aluno[i]);
    }

//*********BANCA B************** */

    let bancaB = [];
    for(i=3; i<6; i++){
        bancaB.push(aluno[i]);
    }       

//*********BANCA C *************/

    let bancaC = [];
    for(i=6; i<9; i++){
        bancaC.push(aluno[i]);
    }


//*********BANCA D *************/

    let bancaD = [];
    for(i=9; i<12; i++){
        bancaD.push(aluno[i]);
    }


//*********BANCA E *************/

    let bancaE = [];
    for(i=12; i<15; i++){
        bancaE.push(aluno[i]);
    }


//*********BANCA F *************/

    let bancaF = [];
    for(i=15; i<18; i++){
        bancaF.push(aluno[i]);
    }


//*********BANCA G *************/

    let bancaG = [];
    for(i=18; i<21; i++){
        bancaG.push(aluno[i]);
    }
    
        
//*********BANCA H *************/

    let bancaH = [];
    for(i=21; i<24; i++){
        bancaH.push(aluno[i]);
    }
    
//*********BANCA I *************/

    let bancaI = [];
    for(i=24; i<27; i++){
        bancaI.push(aluno[i]);
    }

//*********BANCA J *************/

    let bancaJ = [];
    for(i=27; i<30; i++){
        bancaJ.push(aluno[i]);
    }


function sorteioAlunos(){
    //Tabela Alunos
    //Banca A
    if(aluno.length == 0 || aluno.length == 3){
        return alert(`❌ Informe pelo menos 6 alunos.\n❌ Você informou ${aluno.length}.\n❌ As BANCAS são formadas por três alunos cada.\n❌ O total de alunos deve ser divisível por três!!`);
    }
    if(aluno.length % 3 != 0 ) {
        return alert(`❌ Informe pelo menos 6 alunos.\n❌ Você informou ${aluno.length}.\n❌ As BANCAS são formadas por três alunos cada.\n❌ O total de alunos deve ser divisível por três!!`);
    }
    if(aluno.length<=6){
    for(i=0; i<3; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 0){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA A"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 0) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA A"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 1) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 2) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        mostrar_tabela();
        mostrar_tabela2();
    }
    // //Banca B
    if(aluno.length <6){
        return;
    }
    for(i=3; i<6; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 3){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA B"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 3) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA B"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 4) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 5) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }
    else if(aluno.length<=9){
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        // //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    }
    else if(aluno.length<=12){
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        // //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    }
    else if(aluno.length<=15){
        //Banca A
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaE[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaE[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaE[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        // //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    //Banca E
    if(aluno.length <15){
        return;
    }
    for(i=12; i<15; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 12){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 12) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 13) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 14) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }
    else if(aluno.length<=18){
        //Banca A
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaF[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaF[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaF[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        // //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaE[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaE[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaE[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    //Banca E
    if(aluno.length <15){
        return;
    }
    for(i=12; i<15; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 12){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 12) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 13) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 14) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca F
    if(aluno.length <18){
        return;
    }
    for(i=15; i<18; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 15){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 15) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 16) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 17) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }
    else if(aluno.length<=21){
        //Banca A
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaG[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaG[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaG[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        // //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaF[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaF[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaF[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaE[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaE[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaE[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    //Banca E
    if(aluno.length <15){
        return;
    }
    for(i=12; i<15; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 12){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 12) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 13) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 14) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca F
    if(aluno.length <18){
        return;
    }
    for(i=15; i<18; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 15){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 15) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 16) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 17) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca G
    if(aluno.length <21){
        return;
    }
    for(i=18; i<21; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 18){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 18) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 19) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 20) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }
    else if(aluno.length<=24){
        //Banca A
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaH[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaH[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaH[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        // //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaG[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaG[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaG[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaF[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaF[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaF[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaE[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaE[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaE[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    //Banca E
    if(aluno.length <15){
        return;
    }
    for(i=12; i<15; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 12){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 12) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 13) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 14) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca F
    if(aluno.length <18){
        return;
    }
    for(i=15; i<18; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 15){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 15) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 16) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 17) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca G
    if(aluno.length <21){
        return;
    }
    for(i=18; i<21; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 18){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 18) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 19) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 20) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    // //Banca H
    if(aluno.length <24){
        return;
    }
    for(i=21; i<24; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 21){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA H"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 21) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA H"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 22) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 23) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }
    else if(aluno.length<=27){
        //Banca A
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaI[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaI[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaI[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaH[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaH[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaH[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaG[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaG[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaG[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaF[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaF[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaF[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    //Banca E
    if(aluno.length <15){
        return;
    }
    for(i=12; i<15; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 12){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 12) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 13) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 14) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca F
    if(aluno.length <18){
        return;
    }
    for(i=15; i<18; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 15){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 15) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaE[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 16) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaE[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 17) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaE[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca G
    if(aluno.length <21){
        return;
    }
    for(i=18; i<21; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 18){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 18) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 19) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 20) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    // //Banca H
    if(aluno.length <24){
        return;
    }
    for(i=21; i<24; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 21){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA H"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 21) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA H"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 22) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 23) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    // //Banca I
    if(aluno.length <27){
        return;
    }
    for(i=24; i<27; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 24){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA I"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 24) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA I"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 25) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 26) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }
    else if(aluno.length<30){
        //Banca A
        for(i=0; i<3; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 0){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 0) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaJ[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA A"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 1) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaJ[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 2) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaJ[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            mostrar_tabela();
            mostrar_tabela2();
        }
        //Banca B
        if(aluno.length <6){
            return;
        }
        for(i=3; i<6; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 3){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 3) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaI[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA B"));
                divAvaliadores.appendChild(h3);
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 4) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaI[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 5) { 
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaI[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
        //Banca C
        if(aluno.length <9){
            return;
        }
        for(i=6; i<9; i++){
            let divAlunos = document.getElementById("alunos");
            if(i == 6){
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAlunos.appendChild(h3);
            }
            let paragrafo = document.createElement("p");
            paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
            divAlunos.appendChild(paragrafo);
            let divAvaliadores = document.getElementById("avaliadores");
            let novoParagrafo2 = document.createElement("p");
            if(i == 6) {
                novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaH[0].Aluno}`));
                let h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode("BANCA C"));
                divAvaliadores.appendChild(h3);
            }
        
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 7) {
                novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaH[1].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
            if(i == 8) {
                novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaH[2].Aluno}`));
            }
            divAvaliadores.appendChild(novoParagrafo2);
        }
    //Banca D
    if(aluno.length <12){
        return;
    }
    for(i=9; i<12; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 9){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 9) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaG[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA D"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 10) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaG[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 11) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaG[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);  
    }
    //Banca E
    if(aluno.length <15){
        return;
    }
    for(i=12; i<15; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 12){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 12) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaF[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA E"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 13) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaF[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 14) { 
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaF[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca F
    if(aluno.length <18){
        return;
    }
    for(i=15; i<18; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 15){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 15) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaF[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA F"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 16) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaF[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 17) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaF[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca G
    if(aluno.length <21){
        return;
    }
    for(i=18; i<21; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 18){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 18) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaD[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA G"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 19) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaD[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 20) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaD[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    // //Banca H
    if(aluno.length <24){
        return;
    }
    for(i=21; i<24; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 21){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA H"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 21) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaC[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA H"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 22) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaC[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 23) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaC[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    // //Banca I
    if(aluno.length <27){
        return;
    }
    for(i=24; i<27; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 24){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA I"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 24) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaB[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA I"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 25) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaB[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 26) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaB[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    //Banca J
    if(aluno.length <30){
        return;
    }
    for(i=27; i<30; i++){
        let divAlunos = document.getElementById("alunos");
        if(i == 27){
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA J"));
            divAlunos.appendChild(h3);
        }
        let paragrafo = document.createElement("p");
        paragrafo.appendChild(document.createTextNode(`${aluno[i].Aluno+tema[i]}`));
        divAlunos.appendChild(paragrafo);
        let divAvaliadores = document.getElementById("avaliadores");
        let novoParagrafo2 = document.createElement("p");
        if(i == 27) {
            novoParagrafo2.appendChild(document.createTextNode(`AV01 ==> ${bancaA[0].Aluno}`));
            let h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("BANCA J"));
            divAvaliadores.appendChild(h3);
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 28) {
            novoParagrafo2.appendChild(document.createTextNode(`AV02 ==> ${bancaA[1].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
        if(i == 29) {
            novoParagrafo2.appendChild(document.createTextNode(`AV03 ==> ${bancaA[2].Aluno}`));
        }
        divAvaliadores.appendChild(novoParagrafo2);
    }
    }

}

    if(aluno.length >= 6){
        $(document).ready(function() {
            $('#btnSortear').click(function(e) {
               e.preventDefault();
               let aluno = document.getElementById('tabela'); 
               let dados = new Blob(['\ufeff'+ aluno.innerText], {type: 'text/csv'});
               let url = window.URL.createObjectURL(dados);
               let a = document.createElement('a');
               a.href = url;
               a.download = 'Lista de Alunos e Temas';
               a.click();
            });
        });
        
        $(document).ready(function() {
            $('#btnSortear').click(function(e) {
               e.preventDefault();
               let aluno = document.getElementById('tabela2'); 
               let dados = new Blob(['\ufeff'+ aluno.innerText], {type: 'text/csv'});
               let url = window.URL.createObjectURL(dados);
               let a = document.createElement('a');
               a.href = url;
               a.download = 'Lista de Avaliadores';
               a.click();
            });
        });
    }
    function carregar(){
        let momento = document.getElementById('h1');
        let data = new Date();
        let hora = data.getHours();
        let min = data.getMinutes();
        
        if(hora >= 0 && hora < 12){
            //bom dia
            momento.innerHTML = 'Bom dia Elton!'
        }else if(hora > 12 && hora < 18){
            //boa tarde
            momento.innerHTML = 'Boa tarde Elton! '
        }else{
            //boa noite
            momento.innerHTML = 'Boa noite Elton!'
        }
    }
    
    function processar(){
        sorteioAlunos();
    };
refreshTask();