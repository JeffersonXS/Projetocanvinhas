var ex=document.getElementById('retângulo');
var contexto = ex.getContext('2d');

//base
contexto.strokeStyle = "black";
contexto.fillStyle = "black";
contexto.beginPath();
contexto.moveTo(0,500);
contexto.lineTo(1920,500);
contexto.lineTo(1920,1080);
contexto.lineTo(0,1080);
contexto.lineTo(0,500);
contexto.fill();
contexto.stroke();

// ceu 
var grdLinear = contexto.createLinearGradient (0, 0, 0, 450);
grdLinear.addColorStop(0, "MidnightBlue");
grdLinear.addColorStop(0.50, "DarkSlateBlue");
grdLinear.addColorStop(0.90, "MediumOrchid");
contexto.fillStyle = grdLinear;


contexto.beginPath();
contexto.fillRect (0,0,1920,1920);

//horizonte
contexto.moveTo(1920,500);
contexto.lineTo(0,500);
contexto.strokeStyle = "white";
contexto.stroke();

//nuvem
var img2= new Image();
img2.src= 'img/nuvem.png';
img2.onload=function(){
    contexto.drawImage(img2, 1000, 50, 1000, 500);
};


//lua
ctx.fillRect(20, 20, 150, 100);
contexto.fillStyle = "#FFFACD";
contexto.beginPath();
contexto.arc(1550, 190, 130, 0, 2*3.14);
contexto.fill();

//base
contexto.strokeStyle = "black";
contexto.fillStyle = "black";
contexto.beginPath();
contexto.moveTo(0,500);
contexto.lineTo(1920,500);
contexto.lineTo(1920,1080);
contexto.lineTo(0,1080);
contexto.lineTo(0,500);
contexto.fill();
contexto.stroke();

//lado1
contexto.strokeStyle = "white";
contexto.fillStyle = "white";
contexto.beginPath();
contexto.moveTo(940,500);
contexto.lineTo(950,500);
contexto.lineTo(40,1080);
contexto.lineTo(0,1080);
contexto.lineTo(0,1000);
contexto.lineTo(940,500);
contexto.fill();
contexto.stroke();

//lado2
contexto.strokeStyle = "white";
contexto.fillStyle = "white";
contexto.beginPath();
contexto.moveTo(970,500);
contexto.lineTo(980,500);
contexto.lineTo(1920,1000);
contexto.lineTo(1920,1080);
contexto.lineTo(1880,1080);
contexto.lineTo(970,500);
contexto.fill();
contexto.stroke();

// faixa da esquerda
contexto.strokeStyle = "Yellow";
contexto.fillStyle = "Yellow";
contexto.beginPath();
contexto.moveTo(958,500);
contexto.lineTo(953,500);
contexto.lineTo(860,1080);
contexto.lineTo(947,1080);
contexto.lineTo(958,500);
contexto.fill();
contexto.stroke();

// faixa da direita 
contexto.strokeStyle = "Yellow";
contexto.fillStyle = "Yellow";
contexto.beginPath();
contexto.moveTo(962,500);
contexto.lineTo(967,500);
contexto.lineTo(1060,1080);
contexto.lineTo(973,1080);
contexto.lineTo(962,500);
contexto.fill();
contexto.stroke();

//grama da direita 
var grdLinear1 = contexto.createLinearGradient (0, 0, 0, 950);
    grdLinear1.addColorStop (0,'LimeGreen');
    grdLinear1.addColorStop (0.5,'ForestGreen');
    grdLinear1.addColorStop (1,'DarkGreen');
contexto.strokeStyle = "ForestGreen";
contexto.fillStyle = grdLinear1;
contexto.beginPath();
contexto.moveTo(980,500);
contexto.lineTo(1920,500);
contexto.lineTo(1920,1000);
contexto.lineTo(980,500);
contexto.fill();
contexto.stroke();

//grama da esquerda
contexto.strokeStyle = "ForestGreen";
contexto.fillStyle = grdLinear1;
contexto.beginPath();
contexto.moveTo(940,500);
contexto.lineTo(0,500);
contexto.lineTo(0,1000);
contexto.lineTo(940,500);
contexto.fill();
contexto.stroke();

//nuvem
var img2= new Image();
img2.src= 'img/nuvem.png';
img2.onload=function(){
    contexto.drawImage(img2, 0, 50, 1100, 500);
};

//aviao
var img= new Image();
img.src= 'img/aviao.png';
img.onload=function(){
    contexto.drawImage(img, 100, 100, 500, 150);
};

//carro1
var img3= new Image();
img3.src= 'img/gtr.png';
img3.onload=function(){
    contexto.drawImage(img3, 450, 600, 450, 450);
};

//carro2
var img4= new Image();
img4.src= 'img/fair.png';
img4.onload=function(){
    contexto.drawImage(img4, 970, 500, 200, 200);
};
