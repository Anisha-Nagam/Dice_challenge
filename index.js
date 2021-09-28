
// for first dice

var randomNumber1=Math.floor(Math.random()*6)+1; // 1-6 numbers

var imageSource1="images/dice"+ randomNumber1 +".png"; // images/dice1.png - images.dice6.png

var image1= document.querySelectorAll("img")[0].setAttribute("src",imageSource1);

// for second dice

var randomNumber2= Math.floor(Math.random()*6)+1; // 1-6 numbers

var imageSource2="images/dice"+randomNumber2+".png";

var image2= document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

// who wins

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML=" 🎉player1 wins...!";
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML=" 🎉player2 wins...!";
}
else
{
  document.querySelector("h1").innerHTML=" Draw...! 😕 ";
}
