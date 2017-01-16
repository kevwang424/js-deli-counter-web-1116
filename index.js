var katzDeli = [];

function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}


function nowServing(currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${currentLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  var line = "The line is currently:";
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    var i = 0;
    while (i < katzDeliLine.length){
      line = line + ` ${i+1}. ${katzDeliLine[i]}`;
      i++;
    }
  }
  return line;
}
