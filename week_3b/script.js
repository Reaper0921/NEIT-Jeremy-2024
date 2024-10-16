var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//square
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(85, 300, 100, 100);
ctx.stroke();
ctx.fillRect(85, 300, 100, 100);
//circle
ctx.beginPath();
ctx.arc(385, 440, 67.5, 0, 2 * Math.PI);
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.fill();
ctx.stroke();
//line
ctx.moveTo(85, 680);
ctx.lineTo(286, 548);
ctx.strokeStyle = "red";
ctx.stroke();


//hectagon
ctx.beginPath();
ctx.moveTo(558,312);
ctx.lineTo(666,283);
ctx.lineTo(723,380);
ctx.lineTo(650,463);
ctx.lineTo(550,419);
ctx.lineTo(558,312);
ctx.fillStyle = "#ff00ff";
ctx.fill();
ctx.strokeStyle ="#00ffff";
ctx.stroke();


//star
ctx.beginPath();
ctx.moveTo(635,497);
ctx.lineTo(670,555);
ctx.lineTo(728,569);
ctx.lineTo(688,617);
ctx.lineTo(694,678);
ctx.lineTo(638,653);
ctx.lineTo(576,679);
ctx.lineTo(585,618);
ctx.lineTo(538,567);
ctx.lineTo(603,554);
ctx.closePath();
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)"
ctx.fill();
ctx.stroke();
