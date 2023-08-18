const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confetti = [];
let id=0;
class Confetti{
  constructor(x,y,id){
    this.x=x;
    this.y=y;
    this.xVelocity = Math.floor(Math.random()*100);
    this.yVelocity = Math.random()* (2-(1)) +1;
    this.tilt = Math.ceil(Math.random()* (10-(-10)) +(-10));
    this.length= Math.ceil(Math.random()* (10-(4)) +(4))
    this.id=id;
    this.rgb = [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];
    this.lineWidth = Math.floor(Math.random()* (5-(2)) +2)
  }
  update(){
    this.y+=this.yVelocity;
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+this.tilt,this.y+this.length);
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle= `rgb(
        ${this.rgb[0]},
        ${this.rgb[1]},
        ${this.rgb[2]}
    )`;
    ctx.stroke();
    // if(this.y>canvas.height){
      
    // }
  }
}
 setInterval(function (){
   confetti.push(new Confetti(Math.floor(Math.random() * canvas.width), 0,id))
   id+=1;
}, 
10); 
function draw(){
  requestAnimationFrame(draw);
  ctx.fillStyle = 'rgba(255, 255, 255)';
  ctx.fillRect(0,0,canvas.width,canvas.height)
  for(let i=0;i<confetti.length;i++){
    confetti[i].update();
  }
}