function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultado = "";

     // Seleciona o elemento de entrada (campo de pesquisa)
    let anoPesquisa = document.getElementById("campo-pesquisa");
    
    // Obtém o valor digitado pelo usuário
    let anoReferencia = anoPesquisa.value;
    
    // Filtra os dados dos atletas com base no termo pesquisado
    let dadoFiltro = dados.filter(dado => {
        // Aqui você pode personalizar a lógica de filtragem
        // Por exemplo, para fazer uma pesquisa case-insensitive:
        return String(dado.ano).includes(String(anoReferencia));
    });

     console.log(dadoFiltro.length)
    if (dadoFiltro.length == 0){
        resultado += `<div class="item-resultado">
                         <h2>Não há dados para o Ano informado!</h2>
                        </div>`;
    }else{
        // Itera sobre cada dado na lista de dados
        for (let dado of dadoFiltro) {
            // Constrói o HTML para cada resultado
            resultado += `<div class="item-resultado">
                            <h2>${dado.ano}</h2>
                            <p class="descricao-meta"><strong>Musica mais Tocada:</strong><a target="_blank" href="${dado.linkMusica}"> ${dado.musicaMaisTocada}</a></p>
                            <p class="descricao-meta"><strong>Filme de Maior Bilheteria:</strong><a target="_blank" href="${dado.linkFilme}"> ${dado.filmeMaiorBilheteria}</a></p>
                            <p class="descricao-meta"><strong>Fatos Relevantes do Ano:</strong> ${dado.fatoRelevante}</p>
                        </div>`;
        }
    }

    // Atribui o HTML gerado para a seção de resultados, atualizando a página
    section.innerHTML = resultado;
}