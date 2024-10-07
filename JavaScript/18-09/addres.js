
function limpa_formulário_cep() {
    // Limpa os valores nos parágrafos de resultado.
    document.getElementById('rua_resultado').innerText = "";
    document.getElementById('bairro_resultado').innerText = "";
    document.getElementById('cidade_resultado').innerText = "";
    document.getElementById('uf_resultado').innerText = "";
}

function meu_callback(conteudo) {

    let numero = document.getElementById('numero').value
    console.log(numero);
    if (!("erro" in conteudo)) {
        // Atualiza os parágrafos com os valores.
        document.getElementById('rua_resultado').innerText = conteudo.logradouro + ' ' +  numero;
        document.getElementById('bairro_resultado').innerText = conteudo.bairro;
        document.getElementById('cidade_resultado').innerText = conteudo.localidade;
        document.getElementById('uf_resultado').innerText = conteudo.uf;
    } else {
        // CEP não encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep() {

    // let numero = document.getElementById('numero').value
    // console.log(numero);

    // Obtém o valor do campo CEP.
    var cep = document.getElementById('cep').value.replace(/\D/g, '');

    // Verifica se o campo CEP possui valor informado.
    if (cep != "") {
        // Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        // Valida o formato do CEP.
        if (validacep.test(cep)) {
            // Preenche os parágrafos com "..." enquanto consulta o webservice.
            document.getElementById('rua_resultado').innerText = "...";
            document.getElementById('bairro_resultado').innerText = "...";
            document.getElementById('cidade_resultado').innerText = "...";
            document.getElementById('uf_resultado').innerText = "...";

            // Cria um elemento JavaScript.
            var script = document.createElement('script');

            // Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            // Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
        } else {
            // CEP é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        // CEP sem valor, limpa o formulário.
        limpa_formulário_cep();
    }
}




