var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
ctx.strokeStyle = "red";
ctx.strokeRect(20, 20, 150, 100);
