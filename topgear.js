var ex=document.getElementById('retângulo');
var contexto = ex.getContext('2d');
contexto.beginPath();
contexto.fillStyle ="black";
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
contexto.moveTo(960,500);
contexto.lineTo(970,500);
contexto.lineTo(40,1080);
contexto.lineTo(0,1080);
contexto.lineTo(0,1000);
contexto.lineTo(940,500);
contexto.fill();
contexto.stroke();