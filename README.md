# dice-game
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Dicee</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">

  </head>
  <body>

    <div class="container">
      <h1>Refresh Me</h1>

      <div class="dice">
        <p>Player 1</p>
        <img class="img1" src="images/dice6.png">
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img class="img2" src="images/dice6.png">
      </div>

    </div>

    <script src="index.js" charset="utf-8">

    </script>



  </body>

  <footer>
    By 🎲 HIMANSHU 🎲 SONI
  </footer>
</html>



CSS STYLES SHEET

.container
 {
  width: 70%;
  margin: auto;
  text-align: center;
 }

.dice 
 {
  text-align: center;
  display: inline-block;

 }

body 
 {
  background-color: #1b262c;
 }

h1 
 {
  margin: 30px;
  font-family: 'Lobster', cursive;
  text-shadow: 5px 0 #232931;
  font-size: 8rem;
  color: #00b7c2;
 }

p 
 {
  font-size: 2rem;
  color: #fdcb9e;
  font-family: 'Indie Flower', cursive;
 }

img 
 {
  width: 80%;
 }

footer 
 {
  margin-top: 5%;
  color: #EEEEEE;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Indie Flower', cursive;

 }


Javascript file

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
else  
  {
     document.querySelector("h1").innerHTML=player2+" Wins! &#128681";
  }
