const myMod=require('../Modules/myModule');


const ticket=myMod.FlightTicket;

const myTicket = new ticket("B1", "AB12", "A", "B", "2024-05-01");


//----------info Ticket----------------

myTicket.displayInfo();

//---------get specific information-------
console.log(`----Flight Number----
${myTicket.flightNum}`);

// ----------update Ticket------------

myTicket.updateInfo("A4","AB32","C","D")

console.log("----i-----Information after update---------");
myTicket.displayInfo();




