const calcular = document.getElementById('calcular');

calcular.addEventListener('click',imc)

function imc () {
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;    
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorImc = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';

        if (valorImc < 18.5){

            classificacao = 'abaixo do peso';
        }else if (valorImc < 24.9) {
            classificacao = 'no seu peso ideal';
        }else if (valorImc < 29.9) {
            classificacao = 'com sobrepeso';
        }else if (valorImc < 34.9) {
            classificacao = 'com obesidade grau I';
        }else if (valorImc < 40) {
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc}. Você está ${classificacao}`;

    } else{
        resultado.textContent = 'Preencher todos os campos!';
    }

}