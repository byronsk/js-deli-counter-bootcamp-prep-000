
var katzDeliLine = [];
var number = 20;
number++; 
function takeANumber(katzDeliLine) {
 katzDeliLine.push(number);
  return (`You are number ${number} in line.`);
}



function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return (`Currently serving ${katzDeliLine.shift()}.`)
} else {
   (katzDeliLine.length === 0);
   return "There is nobody waiting to be served!";
 }
}


function currentLine(katzDeliLine) {
var line=[]; 
 if(katzDeliLine>[]) {
   for (var i=0; 
       i < katzDeliLine.length; 
       i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`); 
} 
  return "The line is currently:" + line; 
} else {
   (katzDeliLine.length === 0 );
    return "The line is currently empty." }
}