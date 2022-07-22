var play1 = prompt("Enter Player 1 Name");
var play2 = prompt("Enter Player2 Name");

var rand1 = Math.floor(Math.random()*6) + 1; // no.s bw 1-6

var randdiceimg = "dice" +rand1 +".png"; // dice1.png - dice6.png

var randimgsrc = "images/"+randdiceimg; // images/dice1.png - images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randimgsrc);
 
var rand2 = Math.floor(Math.random()*6) + 1;

var randdiceimg2 = "dice" +rand2 +".png";

var randimgsrc2 = "images/"+randdiceimg2;

document.querySelectorAll("img")[1].setAttribute("src", randimgsrc2);
//if Player 1 wins
if (rand1>rand2){
    document.querySelector("h1").innerHTML = "🙋‍♂️ "+play1+" Wins! 🤦";
}

//if Player 2 wins

else if(rand2>rand1){
    document.querySelector("h1").innerHTML = "🤦 "+play2+" Wins! 🙋‍♂️";
}
//if draws

else{
    document.querySelector("h1").innerHTML = "🙇‍♂️DRAW!!!🙇";
}

document.getElementsByTagName("p")[0].innerHTML = play1;
document.getElementsByTagName("p")[1].innerHTML = play2;

