function converterRealDolar() {
    // Obtenha o valor digitado pelo usuário
    var valorEmDolar = document.getElementById("valorEmDolar").value;

    var apiUrl = 'https://open.er-api.com/v6/latest/USD';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var cotacaoDolar = data.rates.BRL;
            console.log(cotacaoDolar);
            var valorEmReal = valorEmDolar * cotacaoDolar;

            // Exiba o resultado
            var resultado = document.getElementById("resultado");
            resultado.textContent = "Valor em Reais: R$ " + valorEmReal.toFixed(2);
        })
        .catch(error => console.error('Erro ao obter a cotação:', error));
}