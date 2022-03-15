var ex=document.getElementById('retângulo');
var contexto = ex.getContext('2d');

contexto.fillStyle ="black";
contexto.fillRect (0,0,1920,1920);



contexto.moveTo(1920,500);
contexto.lineTo(0,500);
contexto.strokeStyle = "white";
contexto.stroke();

contexto.moveTo(940,500);
contexto.lineTo(0,1020);
contexto.strokeStyle = "white";
contexto.stroke();

contexto.moveTo(950,500);
contexto.lineTo(40,1100);
contexto.strokeStyle = "white";
contexto.stroke();

contexto.moveTo(970,500);
contexto.lineTo(1880,1100);
contexto.strokeStyle = "white";
contexto.stroke();

contexto.moveTo(980,500);
contexto.lineTo(1920,1020);
contexto.strokeStyle = "white";
contexto.stroke();

contexto.beginPath();
contexto.arc(1550, 190, 130, 0, 2*3.14);
contexto.fillStyle = "#FFFACD";
contexto.fill();

contexto.moveTo(940,1080);
contexto.lineTo(0,1000);
contexto.strokeStyle = "white";
contexto.stroke();