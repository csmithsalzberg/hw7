var pic = document.getElementById("vimage");

var drawer = document.getElementById("circler");
var clr = document.getElementById("clr")

var draw = function(e){
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"
    );
    c.setAttribute("cx", e.offsetX);//Math.random()*300+100);
    c.setAttribute("cy", e.offsetY);//Math.random()*300+100);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}

document.addEventListener("click", draw);

var clear = function(e){
    

clr.addEventListener("click", clear);
