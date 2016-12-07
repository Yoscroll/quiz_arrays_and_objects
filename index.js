/*
  Quiz: Array and Object

  Ian Acosta
  12/7/2016
*/

var myArray = ["hi","bye",10,true];

console.log(myArray[2]);

function myFun(par){
  if (par[3] == true){
    console.log("I said "+par[0]+". Then I said "+par[1]+". See you in "+par[2]+" years!");
  }
  else{
    console.log("You shall not pass!");
  }
}

myFun(myArray);

var batman={
  man: true,
  utilityBelt: ["sword","gun","staff"],
  vehicle: "batmobile",
  sidekick: "robin"
};
function bat(par){
  if (par.man==true){
    console.log("He equiped a "+par.utilityBelt[0]+" and rode his "+batman.vehicle+" with "+batman.sidekick);
  }
  else{
    console.log("No, I'm the bat");
  }
}

bat(batman);
