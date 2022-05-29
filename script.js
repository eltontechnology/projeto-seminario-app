

const login = document.getElementById('login');
const Elton = 'elton/seminarios/index.html';
const Mauro = 'mauro/seminarios/index.html';
const Aluno01 = 'aluno01/seminarios/index.html';
const Aluno02 = 'aluno02/seminarios/index.html';
const Aluno03 = 'aluno03/seminarios/index.html';
const Aluno04 = 'aluno04/seminarios/index.html';
const Aluno05 = 'aluno05/seminarios/index.html';
const Aluno06 = 'aluno06/seminarios/index.html';
const Aluno07 = 'aluno07/seminarios/index.html';
const Aluno08 = 'aluno08/seminarios/index.html';
const Aluno09 = 'aluno09/seminarios/index.html';
const Aluno10 = 'aluno10/seminarios/index.html';
const Aluno11 = 'aluno11/seminarios/index.html';
const Aluno12 = 'aluno12/seminarios/index.html';
const Aluno13 = 'aluno13/seminarios/index.html';
const Aluno14 = 'aluno14/seminarios/index.html';
const Aluno15 = 'aluno15/seminarios/index.html';
const Aluno16 = 'aluno16/seminarios/index.html';
const Aluno17 = 'aluno17/seminarios/index.html';
const Aluno18 = 'aluno18/seminarios/index.html';
const Aluno19 = 'aluno19/seminarios/index.html';
const Aluno20 = 'aluno20/seminarios/index.html';
const Aluno21 = 'aluno21/seminarios/index.html';
const Aluno22 = 'aluno22/seminarios/index.html';
const Aluno23 = 'aluno23/seminarios/index.html';
const Aluno24 = 'aluno24/seminarios/index.html';
const Aluno25 = 'aluno25/seminarios/index.html';
const Aluno26 = 'aluno26/seminarios/index.html';
const Aluno27 = 'aluno27/seminarios/index.html';
const Aluno28 = 'aluno28/seminarios/index.html';
const Aluno29 = 'aluno29/seminarios/index.html';
const Aluno30 = 'aluno30/seminarios/index.html';

document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        const btn = document.querySelector("#verificar");
        btn.click(); 
    }
});

function validarLogin(){

    if(login.value == 'emillyncaon@gmail.com' || login.value == '20204157'){
        window.open(Aluno01);
    }else if(login.value == 'argentonpas@gmail.com' || login.value == '18202453'){
        window.open(Aluno02);
    }else if(login.value == 'hugonobregaraffi@gmail.com' || login.value == '18203308'){
        window.open(Aluno03);
    }else if(login.value == 'jean.braz@grad.ufsc.br' || login.value == '16200535'){
        window.open(Aluno04);
    }else if(login.value == 'vitorniele@hotmail.com' || login.value == '17200348'){
        window.open(Aluno05);
    }else if(login.value == 'cleniogoulart.eng@gmail.com' || login.value == '17204669'){
        window.open(Aluno06);
    }else if(login.value == 'lofgrenlobo@gmail.com' || login.value == '18203106'){
        window.open(Aluno07);
    }else if(login.value == 'victor.verondino@gmail.com' || login.value == '17100420'){
        window.open(Aluno08);
    }else if(login.value == 'viniciusjmn@gmail.com' || login.value == '19100431'){
        window.open(Aluno09);
    }else if(login.value == 'gabrielbiage13@gmail.com' || login.value == '18100407'){
        window.open(Aluno10);
    }else if(login.value == 'martinbrownrigg@gmail.com' || login.value == '18100420'){
        window.open(Aluno11);
    }else if(login.value == 'arturferrarifernandes@gmail.com' || login.value == '18100400'){
        window.open(Aluno12);
    }else if(login.value == 'barbarescoalexandre@gmail.com' || login.value == '18205570'){
        window.open(Aluno13);
    }else if(login.value == 'alexia.p@outlook.com' || login.value == '19105788'){
        window.open(Aluno14);
    }else if(login.value == '17202077'){
        window.open(Aluno15);
    }else if(login.value == 'ppvolkweis@gmail.com' || login.value == '20100427'){
        window.open(Aluno16);
    }else if(login.value == 'renanbandera1@gmail.com' || login.value == '16205894'){
        window.open(Aluno17);
    }else if(login.value == 'victor.jp97@hotmail.com' || login.value == '17200346'){
        window.open(Aluno18);
    }else if(login.value == 'pedro_cardoso_c@hotmail.com' || login.value == '18100425'){
        window.open(Aluno19);
    }else if(login.value == 'luiseduardobroering@gmail.com' || login.value == '16205030'){
        window.open(Aluno20);
    }else if(login.value == 'nicolas.ryberg@bixtecnologia.com.br' || login.value == '17100414'){
        window.open(Aluno21);
    }else if(login.value == 'rafael.chuby@gmail.com' || login.value == '18104420'){
        window.open(Aluno22);
    }else if(login.value == 'gustavoandersonsilva@gmail.com' || login.value == '21103474'){
        window.open(Aluno23);
    }else if(login.value == 'alvs.igor@gmail.com' || login.value == '18105466'){
        window.open(Aluno24);
    }else if(login.value == '20100414'){
        window.open(Aluno25);
    }else if(login.value == '17200317'){
        window.open(Aluno26);
    }else if(login.value == 'vitorhugo1608@gmail.com' || login.value == '17203895'){
        window.open(Aluno27);
    }else if(login.value == 'Aluno28'){
        window.open(Aluno28);
    }else if(login.value == 'Aluno29'){
        window.open(Aluno29);
    }else if(login.value == 'Aluno30'){
        window.open(Aluno30);
    }else if(login.value == 'Mauro'){
        window.open(Mauro);
    }else if(login.value == 'Elton'){
        window.open(Elton);
    }
    
    else{
        alert("❌ Login Inválido!")
    }

}

document.getElementById('login').focus();








