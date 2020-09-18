// Pump up the inflatables for the festival: Each are made up of a combo of cones, spheres, and prisms
// The duck is made up of two spheres and one cone
// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  // V = 4/3(pi)(radius^3)
  return 4 / 3 * (PI * (Math.pow(radius, 3)));
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  // V = 1/3(pi)(radius^2)(height)
  return 1 / 3 * (PI * (Math.pow(radius, 2) * height));
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  // V = (width * depth)(height)
  return (width * depth) * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  if (solids["type"] === 'sphere') {
    return sphereVolume(solids["radius"]);
  } else if (solids["type"] === 'cone') {
    return coneVolume(solids["radius"], solids["height"]);
  } else if (solids["type"] === 'prism') {
    return prismVolume(solids["height"], solids["width"], solids["depth"]);
  } else {
    return totalVolume(largeSphere) + totalVolume(smallSphere) + totalVolume(cone);
  }
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
