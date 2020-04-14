function dwarfRollCall(dwarves) {
  var message = ""
 for (let i = 0; dwarves.length/2 > i; i++){message +=`${i+1}. ${dwarves[i]} `}
 return message
}

function summonCaptainPlanet(fruits){
  fruits = fruits.map(function(fruits){ return fruits.toUpperCase() })
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
  var cheese = [  'gouda','camembert','cheddar']
    
    for(let i = 0; i < foods.length; i++){
      for(let n = 0; n < cheese.length; n++){
    if(foods[i] === cheese[n]){return foods[i]}
    }
  }
    return 'no cheese!'
}