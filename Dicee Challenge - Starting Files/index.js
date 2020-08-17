var player1=prompt("Enter Player 1 name");
var player2=prompt("Enter Player 2 name");

var randonNumber1=Math.floor(Math.random()*6+1);
var randonNumber2=Math.floor(Math.random()*6+1);

var randomDiceImage1="images/dice"+randonNumber1+".png";
var randomDiceImage2="images/dice"+randonNumber2+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

if(randonNumber1===randonNumber2)
{
  document.querySelector("h1").innerHTML="Draw &#127884";
}
else if(randonNumber1 > randonNumber2)
{
  document.querySelector("h1").innerHTML=player1+" Wins! &#128681";
}
else{
   document.querySelector("h1").innerHTML=player2+" Wins! &#128681";
}
