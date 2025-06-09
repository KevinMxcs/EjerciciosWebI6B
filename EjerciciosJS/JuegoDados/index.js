var x=1;
	var y=0;
function rollDice(){
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var pos =d1 + y;
    die1.innerHTML = d1;
    status.innerHTML = "Tu posicion "+ pos +".";
    tiro.innerHTML = "Tu numero de tiro es "+x+".";
    x = x+1;
    y = pos;
    if (pos > 99){
    	alert("EL juego ha terminado");
    	y = 0;

    }
   
}
