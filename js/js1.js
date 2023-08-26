var f1s = document.getElementById('form1');
f1s.addEventListener('submit', validar);
var valida = document.getElementById('valida');
valida.addEventListener('click', validar);

function validar(e) {
    if (!(
        validarnome() &&
        validarnomeF() &&
        validarEmail() &&
        validarTelefone() && 
        validaDataNascimento()&&
        validarSenha()&&
        validarCPF()
    )) {
        e.preventDefault();
    }
}

function validarnome() {
    var nomeInput = document.getElementById('nomeInput');
    var nomeHelp = document.getElementById('nomeHelp');
    if (nomeInput.value.length < 5) {
        nomeHelp.innerHTML = "Informe um nome válido por favor!!";
        nomeInput.classList.add('erro');
        nomeInput.classList.remove('certo');
        return false;
    } else {
        nomeHelp.innerHTML = '';
        nomeInput.classList.remove('erro');
        nomeInput.classList.add('certo');
        return true;
    }
}

function validarnomeF() {
    var nomeFilhoInput = document.getElementById('nomeFilhoInput');
    var nomeFilhoHelp = document.getElementById('nomeFilhoHelp');
    if (nomeFilhoInput.value.length < 5) {
        nomeFilhoHelp.innerHTML = "Informe um nome válido por favor!!";
        nomeFilhoInput.classList.add('erro');
        nomeFilhoInput.classList.remove('certo');
        return false;
    } else {
        nomeFilhoHelp.innerHTML = '';
        nomeFilhoInput.classList.remove('erro');
        nomeFilhoInput.classList.add('certo');
        return true;
    }
}

function validarEmail() {
    var emailInput = document.getElementById('emailInput');
    var emailHelp = document.getElementById('emailHelp');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailHelp.innerHTML = "Informe um e-mail válido por favor!!";
        emailInput.classList.add('erro');
        emailInput.classList.remove('certo');
        return false;
    } else {
        emailHelp.innerHTML = '';
        emailInput.classList.remove('erro');
        emailInput.classList.add('certo');
        return true;
    }
}

function validarTelefone() {
    var telefoneInput = document.getElementById('telefoneInput');
    var telefoneHelp = document.getElementById('telefoneHelp');
    var telefoneRegex = /^\d{10}$/;

    if (!telefoneRegex.test(telefoneInput.value)) {
        telefoneHelp.innerHTML = "Informe um telefone válido por favor!!";
        telefoneInput.classList.add('erro');
        telefoneInput.classList.remove('certo');
        return false;
    } else {
        telefoneHelp.innerHTML = '';
        telefoneInput.classList.remove('erro');
        telefoneInput.classList.add('certo');
        return true;
    }
}

function validaDataNascimento() {
    var dataNascimentoInput = document.getElementById("dataNascimento");
    var helpIdDataNascimento = document.getElementById("helpIdDataNascimento");

    var dataNascimento = dataNascimentoInput.value;
    var partesData = dataNascimento.split('-'); // Splitting by "-"
    var ano = parseInt(partesData[0]);
    var mes = parseInt(partesData[1]);
    var dia = parseInt(partesData[2]);

    if (isNaN(ano) || isNaN(mes) || isNaN(dia)) {
        helpIdDataNascimento.textContent = "Informe uma data de nascimento válida (aaaa-mm-dd).";
        helpIdDataNascimento.classList.remove("certo");
        helpIdDataNascimento.classList.add("erro");
        return false;
    }

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > new Date().getFullYear()) {
        helpIdDataNascimento.textContent = "Data de nascimento inválida.";
        helpIdDataNascimento.classList.remove("certo");
        helpIdDataNascimento.classList.add("erro");
        return false;
    }

    helpIdDataNascimento.textContent = "Data de nascimento válida.";
    helpIdDataNascimento.classList.remove("erro");
    helpIdDataNascimento.classList.add("certo");
    return true;
}

function validarSenha() {
    var senhaInput = document.getElementById("senha");
    var helpIdSenha = document.getElementById("helpIdSenha");

    var senha = senhaInput.value;

    if (senha.length < 6) {
        helpIdSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        helpIdSenha.classList.remove("certo");
        helpIdSenha.classList.add("erro");
        return false;
    } else {
        helpIdSenha.textContent = "";
        helpIdSenha.classList.remove("erro");
        helpIdSenha.classList.add("certo");
        return true;
    }
}

function validarCPF(cpf) {
    var strCPF = cpf.replace(/[^\d]/g, ''); 

    if (strCPF.length !== 11) {
        return false; 
    }

    if (/^(\d)\1+$/.test(strCPF)) {
        return false;
    }

    var Soma = 0;
    var Resto;

    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) {
        Resto = 0;
    }

    if (Resto !== parseInt(strCPF.substring(9, 10))) {
        return false;
    }

    Soma = 0;

    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) {
        Resto = 0;
    }

    if (Resto !== parseInt(strCPF.substring(10, 11))) {
        return false;
    }

    return true;
}

var cpfInput = document.getElementById("strCPF");
var helpIdCPF = document.getElementById("helpIdCPF");

cpfInput.addEventListener("input", function() {
    if (validarCPF(cpfInput.value)) {
        helpIdCPF.textContent = "CPF válido.";
        helpIdCPF.classList.remove("erro");
        helpIdCPF.classList.add("certo");
    } else {
        helpIdCPF.textContent = "CPF inválido.";
        helpIdCPF.classList.remove("certo");
        helpIdCPF.classList.add("erro");
    }
});