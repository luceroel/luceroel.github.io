
function jugadoresPokemon(name, points, attack, scream)
{
	var descripcionJugadores
	{		
		this.nombre = name,
		this.valor = points,
		this.ataque = attack,
		this.grito = scream,
		this.gritar = function ()
		{
			alert(this.grito);
		}
	}
}

function jugador(nameJugador)
{	
	if(nameJugador=="pikachu")
	{
		var pokemon = new jugadoresPokemon("Pikachu","100","3","Pika!!!");
		imgJugador.setAttribute("src","imgs/Pikachu.jpg");				
	}
	else if(nameJugador=="bulbasaur")
	{
		var pokemon = new jugadoresPokemon("Bulbasaur","60","5","Bull!!!");
		imgJugador.setAttribute("src","imgs/Bulbasaur.jpg");		
	}
	else if(nameJugador=="charmander")
	{
		var pokemon = new jugadoresPokemon("Charmander","80","10","Char!!!");
		imgJugador.setAttribute("src","imgs/Charmander.jpg");			
	}

	nombreJugador.innerText = pokemon.nombre;
	valorJugador.innerText = "Valor: "+pokemon.valor;
	ataqueJugador.innerText = "Ataque: "+pokemon.ataque;
	pokemon.gritar();
	
	return false;
}
