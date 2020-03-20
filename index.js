function dwarfRollCall(dwarves) {
  var message = ""
 for (let i = 0; dwarves.length > i; i++){message +=`${i+1}. ${dwarves[i]} `}
 return message
}

function summonCaptainPlanet(fruits){
  fruits = fruits.map(function(x){ return x.toUpperCase() })
  var call = []
  
  for(let i=0; fruits.length > i; i++){call.push(`${fruits[i]}!`)
  }
  return call
}

function longPlaneteerCalls(words) {
  if (words.length > 3){return true}
  else {return false}
}

function findTheCheese (foods) {
  var cheese = [ 'cheddar', 'gouda','camembert']
    
    for(let i = 0; i < foods.length; i++){
    if(foods.includes(`${cheese[i]}`)){return `${cheese[i]}`}
    else {return 'no cheese!'}
    }
}