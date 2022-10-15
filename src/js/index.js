/*
OBJETIVO - quando clicarmos na aba temos que mostrar o 
conteúdo da aba que foi clicada pelo usuário e esconder
o conteúdo da aba anterior.

- Passo 1 - dar um jeito de pegar os elementos que 
representam as abas no HTML.

- Passo 2 - dar um jeito de identificar o clique
no elemento da aba.

- Passo 3 - quando o usuário clicar, desmarcar a aba 
selecionada.

- Passo 4 - marcar a aba clicada como selecionado.

- Passo 5 - esconder o conteúdo anterior.

- Passo 6 - mostrar o conteúdo da aba selecionada.
 */

// Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //  Passo 2 - dar um jeito de identificar o clique no elemento da aba.
    aba.addEventListener("click", function(){
        // Esse código serviu para não fazer com que o códio que não precisa ser rodado seja rodado. 
        if(aba.classList.contains("selecionada")){
            return;
        }

    selecionarAba(aba)
    mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // Passo 3 - quando o usuário clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    // Passo 4 - marcar a aba clicada como selecionado.
    aba.classList.add("selecionada");

}

function mostrarInformacoesDaAba(aba){
    // Passo 5 - esconder o conteúdo anterior.
    const informacaoSelecionado = document.querySelector(".informacao.selecionado");
    informacaoSelecionado.classList.remove("selecionado");

    // Passo 6 - mostrar o conteúdo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}