
const seminario1 = '../seminario1/seminario1-qualitativo.html';
const seminario2 = '../seminario2/seminario2-qualitativo.html';
const seminario3 = '../seminario3/seminario3-qualitativo.html';

function carregar(){
    let momento = document.getElementById('h1');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    
    if(hora >= 0 && hora < 12){
        //bom dia
        momento.innerHTML = 'Bom dia Pedro!'
    }else if(hora > 12 && hora < 18){
        //boa tarde
        momento.innerHTML = 'Boa tarde Pedro! '
    }else{
        //boa noite
        momento.innerHTML = 'Boa noite Pedro!'
    }
}
function validar(){
    if(document.getElementById("seminario1").checked || document.getElementById("seminario2").checked || document.getElementById("seminario3").checked){

    }else{
        alert("❌ Escolha uma opção!");
    }
    if(document.getElementById("seminario1").checked){
        window.open(seminario1);
    }else if(document.getElementById("seminario2").checked){
        window.open(seminario2);
    }else if(document.getElementById("seminario3").checked){
        window.open(seminario3);
    }
}


