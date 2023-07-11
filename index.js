var dice01 = Math.random();
dice01*=6;
dice01 = Math.floor(dice01) + 1;

var dice02 = Math.random();
dice02*=6;
dice02 = Math.floor(dice02) + 1;


if(dice01==1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
} else if(dice01 == 2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
} else if (dice01 == 3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
} else if (dice01 == 4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
} else if (dice01 == 5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
} else if(dice01 == 6){
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
} if(dice02==1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
} else if(dice02 == 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
} else if (dice02 == 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
} else if (dice02 == 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
} else if (dice02 == 5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
} else if (dice02 == 6){
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
} else{
    console.log("error");
}

if(dice01>dice02){
    document.querySelector("h1").innerHTML = "🚩 Player 1 WINS!";
} else if (dice01<dice02){
    document.querySelector("h1").innerHTML = "🚩 Player 2 WINS!"
} else {
    document.querySelector("h1").innerHTML = "It's a DRAW! "
}