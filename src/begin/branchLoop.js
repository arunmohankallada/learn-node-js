console.log("Begin");
var rollaDie = function(dieSize){
  return Math.ceil(dieSize*Math.random());
}
var roll=rollaDie(6);


// *** IF ELSE Loops
if (roll == 6){
  console.log("Jackpot!!");
}
else if ( roll >=5 ){
  console.log("Great Roll!");
}
else if (roll >=2 && roll<=4 ){
  console.log("Good Roll.");
}
else {
  console.log("Better Luck Next Time");
}

while (roll > 5){
  console.log("Roll is not 6");
  roll = rollaDie(6);
}


console.log("Your Roll is "+roll);


console.log("End");
