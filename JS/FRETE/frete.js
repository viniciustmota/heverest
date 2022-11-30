function consutaEndereco() {
    let cep = document.querySelector('#CEP').value;

    if (cep.length !== 8){
        alert('ERRO!! CEP invalido!');
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
    });

}

function mostrarEndereco(dados) {
    let resultado = document.getElementById('resultado');
    if(dados.erro) {
        resultado.innerHTML = "ERRO!! Não foi possivel localizar o endereço!";
    }else{
    resultado.innerHTML =  `<p class="p-frete">Endereço: ${dados.logradouro}</p>
                            <p class="p-frete">Complemento: ${dados.complemento}</p>
                            <p class="p-frete">Bairro: ${dados.bairro}</p>
                            <p class="p-frete">Cidade: ${dados.localidade} - ${dados.uf}</p>`
    }
}