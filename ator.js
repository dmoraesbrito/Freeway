//variáveis ator
let xAtor = 250;
let yAtor = 369;
let colisao = false;
let meusPontos = 0;

// funções ator

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3}
  if (keyIsDown(DOWN_ARROW)){
  if (podeSeMover()){ yAtor += 3}
  } 
  }
// variáveis colisão
function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20);
    if (colisao){voltaAtorParaPosicaoInicial();
    somDaColisao.play();   
    if (sePontosMaiorQueZero){meusPontos = 0}
      }
    }
  }

function voltaAtorParaPosicaoInicial(){yAtor = 369}

// funções pontos
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240,0));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 30){meusPontos += 1; voltaAtorParaPosicaoInicial()}
  somDoPonto.play();
}

function sePontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 369; 
}