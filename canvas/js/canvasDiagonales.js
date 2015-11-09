var dibujo, lienzo;

function inicio()
{
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	dibujaGrid(lienzo);

	lienzo.strokeStyle = "#DDD";
	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.moveTo(100,100);
	lienzo.lineTo(200,100);	
	lienzo.stroke();

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";	
	lienzo.arc(150,150,100,2*(3.1416),false);
	lienzo.fillStyle = "#FFEF00";
	lienzo.fill();
	lienzo.closePath();
	lienzo.stroke();
}

function dibujaGrid(l)
{
	var ancho = 300, alto = 300;
	var linea;
	var sepLineas = 30;
	var limiteX = ancho / sepLineas;
	var limiteY = alto / sepLineas;

	for(linea = 0; linea <= limiteX; linea++)
	{
		puntoInicio = linea * sepLineas;
		l.beginPath();
		l.strokeStyle = "#AAA";
		l.moveTo(puntoInicio, 0);		
		l.lineTo(ancho+puntoInicio, ancho);	
		l.moveTo(0, puntoInicio);		
		l.lineTo(ancho,ancho+puntoInicio);		
		l.stroke();
		l.closePath();		
	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		puntoInicio = linea * sepLineas;
		l.beginPath();
		l.strokeStyle = "#AAA";
		l.moveTo(alto-puntoInicio, alto);
		l.lineTo(alto,alto-puntoInicio);		
		l.moveTo(0,puntoInicio);
		l.lineTo(puntoInicio, 0);
		l.stroke();
		l.closePath();		
	}
}