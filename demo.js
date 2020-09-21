/* If you are younger than 18
		you can not enter the venue
   if you are between 18 and 21 
   		you can enter but cannot drink
   	Otherwise 
   		you can enter and drink*/

var age = Number(prompt("How old are you?")); // JS a str ar purbe Number likhe khub sohojei str k number a rupantor kara jai

if(age < 18){
	console.log("Sorry you can not enter the venue");
}
else if(age > 18 && age < 21){
	console.log("You can enter, but cannot drink");	
}
else{
	console.log("You can enter and drink");
}
