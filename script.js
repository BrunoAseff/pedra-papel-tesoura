const imagens = ['papelComp.png', 'pedraComp.png', 'tesouraComp.png'];
const playerimg = ['papelPlayer.png', 'pedraPlayer.png', 'tesouraPlayer.png'];
const resultado = document.getElementById('res');
const imagemElemento = document.getElementById('imagemAleatoria');
const imgPlayer = document.getElementById('imagemPlayer');

function escolherImagemAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagens.length);
    imagemElemento.src = imagens[indiceAleatorio];
    return indiceAleatorio;
}

function verificarResultado(escolhaPlayer, escolhaComp) {
    if (escolhaPlayer === escolhaComp) {
        resultado.innerHTML = 'Empatou';
        resultado.style.color = '#D4D4D8';
    } else if (
        (escolhaPlayer === 0 && escolhaComp === 1) ||
        (escolhaPlayer === 1 && escolhaComp === 2) ||
        (escolhaPlayer === 2 && escolhaComp === 0)
    ) {
        resultado.innerHTML = 'Ganhou';
        resultado.style.color = '#17C964';
    } else {
        resultado.innerHTML = 'Perdeu';
        resultado.style.color = '#F31260';
    }
}

function jogar(escolha) {
    const jogoRender = document.getElementById('jogo')
    const linkRender = document.getElementById('link')

    jogoRender.style.display = 'inline-block';
    linkRender.style.display = 'block';

    const escolhasMap = {
        'pedra': 1,
        'papel': 0,
        'tesoura': 2
    };

    const escolhaPlayer = escolhasMap[escolha];
    const escolhaComp = escolherImagemAleatoria();

    imgPlayer.src = playerimg[escolhaPlayer];

    verificarResultado(escolhaPlayer, escolhaComp);
}
