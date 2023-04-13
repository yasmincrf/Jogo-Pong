//variaveis do jogo
let colidiu = false;

//variáveis da bolinha
let xBolinha = 300;//posição da bola no eixo x
let yBolinha = 200;//posição da bola no eixo y
let diametro = 20;//diametro da bolinha
let raio = diametro/2;//raio da bolinha

//velocidade da bolinha
let velXBolinha = 6;//velocidade da bolinha no eixo x 
let velYBolinha = 6;//velocidade da bolinha no eixo y

//variáveis da raquete
let xRaquete = 5;//posição da Minha Raquete no eixo x
let yRaquete = 150;//posição da Raquete Oponente no eixo y
let raqueteComprimento = 15;//comprimento das raquetes
let raqueteAltura = 100;//altura das raquetes

//variaveis raquete oponente
let xRaqueteOponente = 580;//posição da Raquete Oponente no eixo x 
let yRaqueteOponente = 150;//posição da Raquete Oponente no eixo y
let velYRaqueteOponente;//velocidade da Raquete Oponente no eixo y

//variaveis placar
let pontosMeus=0;//pontos do jogador
let pontosOponente=0;//pontos do oponente



//define dimensões da tela
function setup() {
  createCanvas(600, 400);
}

//tudo dentro dessa função aparecerá no desenho
function draw() {
  background(0);
  
  //mostra a bolinha
  mostraBolinha();
  
  //movimentação da bolinha
  movimentaBolinha();
  
  //quando houver a colisão com a borda a bola voltará
  verificaColisao();
  
  //parâmetro da criação das raquetes mudando os valores das posições
  mostrarRaquete(xRaquete,yRaquete);
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
  
  //movimentação da raquete oponente
  movimentaRaqueteOponente();  
  
  //verifica a colisão entre raquete oponente e bolinha
  verificaColisaoRaqueteOponente();
  
  //movimentação da raquete do jogador
  movimentaMinhaRaquete();
  
  //colisão da bola com a raquete
 // verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  
  //placar
  incluirPlacar();//
  marcarPonto();//marca o ponto assim que a bolinha encosta na posição fora do eixo y da raquete em questão
  
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

 function movimentaBolinha(){
      xBolinha += velXBolinha;
      yBolinha += velYBolinha;
  }

//movimentaraquete
function movimentaRaqueteOponente(){
  yRaqueteOponente+=velYBolinha;
}


function verificaColisao(){
      if(xBolinha + raio > width || xBolinha-raio < 0){
      velXBolinha *= -1;
      }
      if(yBolinha+ raio > height || yBolinha-raio < 0){
      velYBolinha *= -1;
      }
  }

function verificaColisaoRaqueteOponente(){
colidiu = 
      collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    
    if(colidiu){
      velXBolinha*=-1;
    }

}
 
  function mostrarRaquete(x,y){
    rect(x,y,raqueteComprimento,raqueteAltura);
  }

  function movimentaMinhaRaquete(){
    
    if(keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }

  function colisaoMinhaRaqueteBiblioteca(){
    colidiu = 
      collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    
    if(colidiu){
      velXBolinha*=-1;
    }
  }

  function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
      
      velXBolinha *= -1;
    }
  }
    

function incluirPlacar(){
  fill(225);
  text(pontosMeus, 278,26);
  text(pontosOponente, 300,26);
  }

    
function marcarPonto(){
  if(xBolinha>590){
    pontosMeus+=1;
  }
  
  if(xBolinha<10){
    pontosOponente+=1;
  }
}
    