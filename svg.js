/*
Caleb Smith-Salzberg
SoftDev2 pd7
K7 -- Connect the Dots
2018-02-28
*/

var startX;
var startY;
var started = false;

var pic = document.getElementById("vimage");
var clr = document.getElementById("clr")

var draw = function(e){
    //the circle
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"
    );
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "red");
    pic.appendChild(c);
    //the line
    if (started){
	var l = document.createElementNS(
	    "http://www.w3.org/2000/svg", "line"
	);
	l.setAttribute("x1", startX);
	l.setAttribute("y1", startY);
	l.setAttribute("x2", e.offsetX);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("stroke-width", 2);
	l.setAttribute("stroke", "red");
	pic.appendChild(l);	
    }
    else{
	started = true;
    }
    //update start position for the line
    startX = e.offsetX;
    startY = e.offsetY;
}

pic.addEventListener("click", draw);

var clear = function(e){
    pic.innerHTML="";
    started = false;
}

clr.addEventListener("click", clear);
