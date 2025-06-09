function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


function setup() {
  createCanvas(400, 400);
}
let Xjogador1 = 0;
let Xjogador2 = 0;


function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();

  
  
  if(Xjogador1 > 350) {
    fill("black");
    textSize(20);
    text("jogador 1 venceu",1,200);
    noLoop();
  }
     
if(Xjogador2 > 350){
  fill("green");
  textSize(20);
  text("jogador 2 venceu",1,200);
  noLoop();
  }
}

function ativaJogo(){
  if (focused==true){
    background("yellow");
  }
  else{
    background("green");
  }
}

  function keyReleased() {
    if(key==="a") { 
Xjogador1 +=random(20);
     }
      if(key=="s") {  
      Xjogador2 += random(20);
        }
    }

function desenhaJogadores(){
textSize(40);
  text("🚜",Xjogador1,40);
  text("👩‍🌾",Xjogador2,100);
}

function desenhaLinhaDeChegada (){
  fill("white");
  rect(350,0,10,400);
  fill("black");
  for(let yAtual=0; yAtual < 400; yAtual+= 20){
    rect(350, yAtual, 10, 10);
  }
}
