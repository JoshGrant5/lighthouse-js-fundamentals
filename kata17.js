// Determine how far away a destination is based on the directions given
// Return object of coordinates - the car always starts bottom southwest, so coordinates returned are east and north relative of starting ponit {east: 1, north: 3}
const blocksAway = function(directions) {
  let x = 0; // x-axis for position (west - or east +)
  let y = 0; // y-axis for position (north + or south -)
  let compass = ''; // condition for direction moving
  let turns = []; // placeholder for directions
  let blocks = []; // placeholder for number of blocks travelled
  let coordinates = {}; // return value

  for (let i = 0; i < directions.length; i++) {
    if (i % 2 === 0) {
      turns.push(directions[i]);
    } else {
      blocks.push(directions[i]);
    }
  }
  
  // Determine what the first direction is to set the compass
  if (turns[0] === 'right') {
    x += blocks[0];
    compass = 'east';
  } else if (turns[0] === 'left') {
    x -= blocks[0];
    compass = 'west';
  }
  // Iterate through the rest, based on the first direction
  for (let i = 1; i < turns.length; i++) {
    if (turns[i] === 'right' && compass === 'east') {
      y -= blocks[i];
      compass = 'south';
    } else if (turns[i] === 'right' && compass === 'west') {
      y += blocks[i];
      compass = 'north';
    } else if (turns[i] === 'right' && compass === 'north') {
      x += blocks[i];
      compass = 'east';
    } else if (turns[i] === 'right' && compass === 'south') {
      x -= blocks[i];
      compass = 'west';
    } else if (turns[i] === 'left' && compass === 'east') {
      y += blocks[i];
      compass = 'north';
    } else if (turns[i] === 'left' && compass === 'west') {
      y -= blocks[i];
      compass = 'south';
    } else if (turns[i] === 'left' && compass === 'north') {
      x -= blocks[i];
      compass = 'west';
    } else if (turns[i] === 'left' && compass === 'south') {
      x += blocks[i];
      compass = 'east';
    }
  }
  coordinates['east'] = Math.abs(x);
  coordinates['north'] = Math.abs(y);
  
  return coordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));