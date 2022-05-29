
const seminario1 = '../seminario1/seminario1-qualitativo.html';
const seminario2 = '../seminario2/seminario2-qualitativo.html';
const seminario3 = '../seminario3/seminario3-qualitativo.html';



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
let teste = document.querySelector('input[name="seminario"]:checked').value;



