var num=Math.floor(Math.random()*6)+1;
var num1=Math.floor(Math.random()*6)+1;
if(num>num1)
{
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(num<num1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
if(num===num1)
{
  document.querySelector("h1").innerHTML="🚩Draw!🚩";
}

document.querySelectorAll(".img")[0].setAttribute("src","images/dice"+num+".png");
document.querySelectorAll(".img")[1].setAttribute("src","images/dice"+num1+".png");
