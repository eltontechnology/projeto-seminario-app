
const url = '../seminario3/seminario3-quantitativo.html';

function checkedIntroducao(){
    if(document.getElementById("introducao1").checked){
        localStorage.setItem("Seminário03 Introdução Qualitativo", 'Péssimo');
    }else if(document.getElementById("introducao2").checked){
        localStorage.setItem("Seminário03 Introdução Qualitativo", 'Ruim');
    }else if(document.getElementById("introducao3").checked){
        localStorage.setItem("Seminário03 Introdução Qualitativo", 'Regular');
    }else if(document.getElementById("introducao4").checked){
        localStorage.setItem("Seminário03 Introdução Qualitativo", 'Bom');
    }else if(document.getElementById("introducao5").checked){
        localStorage.setItem("Seminário03 Introdução Qualitativo", 'Ótimo');
    }else if(document.getElementById("introducao6").checked){
        localStorage.setItem("Seminário03 Introdução Qualitativo", 'Excelente');
    }
} 
function checkedPostura(){
    if(document.getElementById("postura1").checked){
        localStorage.setItem("Seminário03 Postura Qualitativo", 'Péssimo');
    }else if(document.getElementById("postura2").checked){
        localStorage.setItem("Seminário03 Postura Qualitativo", 'Ruim');
    }else if(document.getElementById("postura3").checked){
        localStorage.setItem("Seminário03 Postura Qualitativo", 'Regular');
    }else if(document.getElementById("postura4").checked){
        localStorage.setItem("Seminário03 Postura Qualitativo", 'Bom');
    }else if(document.getElementById("postura5").checked){
        localStorage.setItem("Seminário03 Postura Qualitativo", 'Ótimo');
    }else if(document.getElementById("postura6").checked){
        localStorage.setItem("Seminário03 Postura Qualitativo", 'Excelente');
    }
} 
function checkedFluencia(){
    if(document.getElementById("fluencia1").checked){
        localStorage.setItem("Seminário03 Fluência Qualitativo", 'Péssimo');
    }else if(document.getElementById("fluencia2").checked){
        localStorage.setItem("Seminário03 Fluência Qualitativo", 'Ruim');
    }else if(document.getElementById("fluencia3").checked){
        localStorage.setItem("Seminário03 Fluência Qualitativo", 'Regular');
    }else if(document.getElementById("fluencia4").checked){
        localStorage.setItem("Seminário03 Fluência Qualitativo", 'Bom');
    }else if(document.getElementById("fluencia5").checked){
        localStorage.setItem("Seminário03 Fluência Qualitativo", 'Ótimo');
    }else if(document.getElementById("fluencia6").checked){
        localStorage.setItem("Seminário03 Fluência Qualitativo", 'Excelente');
    }
}
function checkedDiccao(){
    if(document.getElementById("diccao1").checked){
        localStorage.setItem("Seminário03 Dicção Qualitativo", 'Péssimo');
    }else if(document.getElementById("diccao2").checked){
        localStorage.setItem("Seminário03 Dicção Qualitativo", 'Ruim');
    }else if(document.getElementById("diccao3").checked){
        localStorage.setItem("Seminário03 Dicção Qualitativo", 'Regular');
    }else if(document.getElementById("diccao4").checked){
        localStorage.setItem("Seminário03 Dicção Qualitativo", 'Bom');
    }else if(document.getElementById("diccao5").checked){
        localStorage.setItem("Seminário03 Dicção Qualitativo", 'Ótimo');
    }else if(document.getElementById("diccao6").checked){
        localStorage.setItem("Seminário03 Dicção Qualitativo", 'Excelente');
    }
}
function checkedDominio(){
    if(document.getElementById("dominio1").checked){
        localStorage.setItem("Seminário03 Domínio Qualitativo", 'Péssimo');
    }else if(document.getElementById("dominio2").checked){
        localStorage.setItem("Seminário03 Domínio Qualitativo", 'Ruim');
    }else if(document.getElementById("dominio3").checked){
        localStorage.setItem("Seminário03 Domínio Qualitativo", 'Regular');
    }else if(document.getElementById("dominio4").checked){
        localStorage.setItem("Seminário03 Domínio Qualitativo", 'Bom');
    }else if(document.getElementById("dominio5").checked){
        localStorage.setItem("Seminário03 Domínio Qualitativo", 'Ótimo');
    }else if(document.getElementById("dominio6").checked){
        localStorage.setItem("Seminário03 Domínio Qualitativo", 'Excelente');
    }
}
function checkedPreparacao(){
    if(document.getElementById("preparacao1").checked){
        localStorage.setItem("Seminário03 Preparação Qualitativo", 'Péssimo');
    }else if(document.getElementById("preparacao2").checked){
        localStorage.setItem("Seminário03 Preparação Qualitativo", 'Ruim');
    }else if(document.getElementById("preparacao3").checked){
        localStorage.setItem("Seminário03 Preparação Qualitativo", 'Regular');
    }else if(document.getElementById("preparacao4").checked){
        localStorage.setItem("Seminário03 Preparação Qualitativo", 'Bom');
    }else if(document.getElementById("preparacao5").checked){
        localStorage.setItem("Seminário03 Preparação Qualitativo", 'Ótimo');
    }else if(document.getElementById("preparacao6").checked){
        localStorage.setItem("Seminário03 Preparação Qualitativo", 'Excelente');
    }
}
function checkedAparenciaApresentacao(){
    if(document.getElementById("aparencia-apresentacao1").checked){
        localStorage.setItem("Seminário03 Aparência Apresentação Qualitativo", 'Péssimo');
    }else if(document.getElementById("aparencia-apresentacao2").checked){
        localStorage.setItem("Seminário03 Aparência Apresentação Qualitativo", 'Ruim');
    }else if(document.getElementById("aparencia-apresentacao3").checked){
        localStorage.setItem("Seminário03 Aparência Apresentação Qualitativo", 'Regular');
    }else if(document.getElementById("aparencia-apresentacao4").checked){
        localStorage.setItem("Seminário03 Aparência Apresentação Qualitativo", 'Bom');
    }else if(document.getElementById("aparencia-apresentacao5").checked){
        localStorage.setItem("Seminário03 Aparência Apresentação Qualitativo", 'Ótimo');
    }else if(document.getElementById("aparencia-apresentacao6").checked){
        localStorage.setItem("Seminário03 Aparência Apresentação Qualitativo", 'Excelente');
    }
}
function checkedAparenciaMaterial(){
    if(document.getElementById("aparencia-material1").checked){
        localStorage.setItem("Seminário03 Aparência Material Qualitativo", 'Péssimo');
    }else if(document.getElementById("aparencia-material2").checked){
        localStorage.setItem("Seminário03 Aparência Material Qualitativo", 'Ruim');
    }else if(document.getElementById("aparencia-material3").checked){
        localStorage.setItem("Seminário03 Aparência Material Qualitativo", 'Regular');
    }else if(document.getElementById("aparencia-material4").checked){
        localStorage.setItem("Seminário03 Aparência Material Qualitativo", 'Bom');
    }else if(document.getElementById("aparencia-material5").checked){
        localStorage.setItem("Seminário03 Aparência Material Qualitativo", 'Ótimo');
    }else if(document.getElementById("aparencia-material6").checked){
        localStorage.setItem("Seminário03 Aparência Material Qualitativo", 'Excelente');
    }
}
function checkedPontualidade(){
    if(document.getElementById("pontualidade1").checked){
        localStorage.setItem("Seminário03 Pontualidade Qualitativo", 'Péssimo');
    }else if(document.getElementById("pontualidade2").checked){
        localStorage.setItem("Seminário03 Pontualidade Qualitativo", 'Ruim');
    }else if(document.getElementById("pontualidade3").checked){
        localStorage.setItem("Seminário03 Pontualidade Qualitativo", 'Regular');
    }else if(document.getElementById("pontualidade4").checked){
        localStorage.setItem("Seminário03 Pontualidade Qualitativo", 'Bom');
    }else if(document.getElementById("pontualidade5").checked){
        localStorage.setItem("Seminário03 Pontualidade Qualitativo", 'Ótimo');
    }else if(document.getElementById("pontualidade6").checked){
        localStorage.setItem("Seminário03 Pontualidade Qualitativo", 'Excelente');
    }
}
function checkedFormalidade(){
    if(document.getElementById("formalidade1").checked){
        localStorage.setItem("Seminário03 Formalidade Qualitativo", 'Péssimo');
    }else if(document.getElementById("formalidade2").checked){
        localStorage.setItem("Seminário03 Formalidade Qualitativo", 'Ruim');
    }else if(document.getElementById("formalidade3").checked){
        localStorage.setItem("Seminário03 Formalidade Qualitativo", 'Regular');
    }else if(document.getElementById("formalidade4").checked){
        localStorage.setItem("Seminário03 Formalidade Qualitativo", 'Bom');
    }else if(document.getElementById("formalidade5").checked){
        localStorage.setItem("Seminário03 Formalidade Qualitativo", 'Ótimo');
    }else if(document.getElementById("formalidade6").checked){
        localStorage.setItem("Seminário03 Formalidade Qualitativo", 'Excelente');
    }
}
function checkedInteracao(){
    if(document.getElementById("formalidade1").checked){
        localStorage.setItem("Seminário03 Interação Qualitativo", 'Péssimo');
    }else if(document.getElementById("formalidade2").checked){
        localStorage.setItem("Seminário03 Interação Qualitativo", 'Ruim');
    }else if(document.getElementById("formalidade3").checked){
        localStorage.setItem("Seminário03 Interação Qualitativo", 'Regular');
    }else if(document.getElementById("formalidade4").checked){
        localStorage.setItem("Seminário03 Interação Qualitativo", 'Bom');
    }else if(document.getElementById("formalidade5").checked){
        localStorage.setItem("Seminário03 Interação Qualitativo", 'Ótimo');
    }else if(document.getElementById("formalidade6").checked){
        localStorage.setItem("Seminário03 Interação Qualitativo", 'Excelente');
    }
}
function checkedPlanejamento(){
    if(document.getElementById("planejamento-aparente1").checked){
        localStorage.setItem("Seminário03 Planejamento Qualitativo", 'Péssimo');
    }else if(document.getElementById("planejamento-aparente2").checked){
        localStorage.setItem("Seminário03 Planejamento Qualitativo", 'Ruim');
    }else if(document.getElementById("planejamento-aparente3").checked){
        localStorage.setItem("Seminário03 Planejamento Qualitativo", 'Regular');
    }else if(document.getElementById("planejamento-aparente4").checked){
        localStorage.setItem("Seminário03 Planejamento Qualitativo", 'Bom');
    }else if(document.getElementById("planejamento-aparente5").checked){
        localStorage.setItem("Seminário03 Planejamento Qualitativo", 'Ótimo');
    }else if(document.getElementById("planejamento-aparente6").checked){
        localStorage.setItem("Seminário03 Planejamento Qualitativo", 'Excelente');
    }
}
function checkedEnsaio(){
    if(document.getElementById("ensaio1").checked){
        localStorage.setItem("Seminário03 Ensaio Qualitativo", 'Péssimo');
    }else if(document.getElementById("ensaio2").checked){
        localStorage.setItem("Seminário03 Ensaio Qualitativo", 'Ruim');
    }else if(document.getElementById("ensaio3").checked){
        localStorage.setItem("Seminário03 Ensaio Qualitativo", 'Regular');
    }else if(document.getElementById("ensaio4").checked){
        localStorage.setItem("Seminário03 Ensaio Qualitativo", 'Bom');
    }else if(document.getElementById("ensaio5").checked){
        localStorage.setItem("Seminário03 Ensaio Qualitativo", 'Ótimo');
    }else if(document.getElementById("ensaio6").checked){
        localStorage.setItem("Seminário03 Ensaio Qualitativo", 'Excelente');
    }
}

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
    checkedIntroducao();
    checkedPostura();
    checkedFluencia();
    checkedDiccao();
    checkedDominio();
    checkedPreparacao();
    checkedAparenciaApresentacao();
    checkedAparenciaMaterial();
    checkedPontualidade();
    checkedFormalidade();
    checkedInteracao();
    checkedPlanejamento();
    checkedEnsaio();
}

