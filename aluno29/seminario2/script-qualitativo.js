
const url = '../seminario2/seminario2-quantitativo.html';

function processarFuncoes(){
    if(document.getElementById("introducao1").checked || document.getElementById("introducao2").checked || document.getElementById("introducao3").checked || document.getElementById("introducao4").checked || document.getElementById("introducao5").checked || document.getElementById("introducao6").checked) {
    if(document.getElementById("postura1").checked || document.getElementById("postura2").checked || document.getElementById("postura3").checked || document.getElementById("postura4").checked || document.getElementById("postura5").checked || document.getElementById("postura6").checked) {
    if(document.getElementById("fluencia1").checked || document.getElementById("fluencia2").checked || document.getElementById("fluencia3").checked || document.getElementById("fluencia4").checked || document.getElementById("fluencia5").checked || document.getElementById("fluencia6").checked) {
    if(document.getElementById("diccao1").checked || document.getElementById("diccao2").checked || document.getElementById("diccao3").checked || document.getElementById("diccao4").checked || document.getElementById("diccao5").checked || document.getElementById("diccao6").checked) {
    if(document.getElementById("dominio1").checked || document.getElementById("dominio2").checked || document.getElementById("dominio3").checked || document.getElementById("dominio4").checked || document.getElementById("dominio5").checked || document.getElementById("dominio6").checked) {
    if(document.getElementById("preparacao1").checked || document.getElementById("preparacao2").checked || document.getElementById("preparacao3").checked || document.getElementById("preparacao4").checked || document.getElementById("preparacao5").checked || document.getElementById("preparacao6").checked) {
    if(document.getElementById("aparencia-apresentacao1").checked || document.getElementById("aparencia-apresentacao2").checked || document.getElementById("aparencia-apresentacao3").checked || document.getElementById("aparencia-apresentacao4").checked || document.getElementById("aparencia-apresentacao5").checked || document.getElementById("aparencia-apresentacao6").checked) {
    if(document.getElementById("aparencia-material1").checked || document.getElementById("aparencia-material2").checked || document.getElementById("aparencia-material3").checked || document.getElementById("aparencia-material4").checked || document.getElementById("aparencia-material5").checked || document.getElementById("aparencia-material6").checked) {
    if(document.getElementById("pontualidade1").checked || document.getElementById("pontualidade2").checked || document.getElementById("pontualidade3").checked || document.getElementById("pontualidade4").checked || document.getElementById("pontualidade5").checked || document.getElementById("pontualidade6").checked) {
    if(document.getElementById("formalidade1").checked || document.getElementById("formalidade2").checked || document.getElementById("formalidade3").checked || document.getElementById("formalidade4").checked || document.getElementById("formalidade5").checked || document.getElementById("formalidade6").checked) {
    if(document.getElementById("interacao1").checked || document.getElementById("interacao2").checked || document.getElementById("interacao3").checked || document.getElementById("interacao4").checked || document.getElementById("interacao5").checked || document.getElementById("interacao6").checked) {
    if(document.getElementById("planejamento-aparente1").checked || document.getElementById("planejamento-aparente2").checked || document.getElementById("planejamento-aparente3").checked || document.getElementById("planejamento-aparente4").checked || document.getElementById("planejamento-aparente5").checked || document.getElementById("planejamento-aparente6").checked) {
    if(document.getElementById("ensaio1").checked || document.getElementById("ensaio2").checked || document.getElementById("ensaio3").checked || document.getElementById("ensaio4").checked || document.getElementById("ensaio5").checked || document.getElementById("ensaio6").checked) {
        window.open(url);
    }else{
        alert("❌ Faltou o tópico Ensaio aparente!");
    }
    }else{
        alert("❌ Faltou o tópico Planejamento aparente!");
    }
    }else{
        alert("❌ Faltou o tópico Interação com o público!");
    }
    }else{
        alert("❌ Faltou o tópico Formalidade!");
    }
    }else{
        alert("❌ Faltou o tópico Pontualidade de início e fim!");
    }
    }else{
         alert("❌ Faltou o tópico Aparência do material!");
    }
    }else{
         alert("❌ Faltou o tópico Aparência da apresentação!");
    }
    }else{
        alert("❌ Faltou o tópico Preparação da apresentação!");
        }
    }else{
        alert("❌ Faltou o tópico Domínio do conteúdo!");
        }
    }else{
        alert("❌ Faltou o tópico Dicção e vícios de linguagem!");
    }
    }else{
        alert("❌ Faltou o tópico Fluência e Linguagem Utilizada!");
        }
    }else{
        alert("❌ Faltou o tópico Postura Corporal!");
    }
    }else{
        alert("❌ Faltou o tópico Introdução");
    }
   
    
}

