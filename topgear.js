var ex=document.getElementById('retângulo');
var contexto = ex.getContext('2d');
var grdLinear = contexto.createLinearGradient (0, 0, 0, 200);

// ceu 
grdLinear.addColorStop(0, "MidnightBlue");
grdLinear.addColorStop(1, "DarkSlateBlue");
contexto.fillStyle = grdLinear;


contexto.beginPath();
contexto.fillRect (0,0,1920,1920);

//horizonte
contexto.moveTo(1920,500);
contexto.lineTo(0,500);
contexto.strokeStyle = "white";
contexto.stroke();

//lua
contexto.fillStyle = "#FFFACD";
contexto.beginPath();
contexto.arc(1550, 190, 130, 0, 2*3.14);
contexto.fill();

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

