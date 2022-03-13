let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let xPos = 175;
let yPos = cvs.height - 50

let bird = new Image();
let bg = new Image();
let heart = new Image();

bird.src = "img/bird.png"; 
bg.src = "img/bg.png";
heart.src = "img/heart.png";

let score = 0;

document.addEventListener('keydown', function(e){
  if(e.code == 'ArrowRight' && xPos < cvs.width - bird.width){
    xPos +=10
  }
  else if(e.code == 'ArrowLeft' && xPos > 0){
    xPos -=10
  }
});

hearts = [];
hearts[0] = {
  x : 140,
  y: 0
}

function draw() {
  ctx.drawImage(bg, 0, 0);
  for(let i =0; i < hearts.length; i++){
    ctx.drawImage(heart, hearts[i].x, hearts[i].y);
    // if(score == 10){
    //   hearts[i].y ++;
    // }
    hearts[i].y ++;

    if(hearts[i].y == 130){
      hearts.push({
        x : Math.floor(Math.random() * ((cvs.width - heart.width) - heart.width))  + heart.width,
        y: 0
      })
    }

    if(yPos - bird.height == hearts[i].y && xPos + 25 <= hearts[i].x + heart.width && xPos + 25 >= hearts[i].x){
      score++;
      hearts.shift();

    }else if((cvs.height + 20) == hearts[i].y){
      alert(`YOU LOSE || YOUR SCORE : ${score}`);
      location.reload();
    }
  }

  ctx.drawImage(bird, xPos, yPos);

  ctx.fillStyle = "#BA55D3";
  ctx.font = "24px Verdana";
  ctx.fillText("Счет: " + score, 10, cvs.height - 20);

  requestAnimationFrame(draw);
}
draw();