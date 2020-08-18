// Check collection of air samples (array of strings with clean or dirty air, highest acceptable amount of dirty samples)
// Threshold of o.4 means there must be less than 40% of total samples dirty for air to be considered clean
const checkAir = function (samples, threshold) {
  let dirty = 0; // placeholder for number of dirty samples
  for (let test of samples) {
    if (test === 'dirty') {
      dirty++;
    }
  }
  let verdict = dirty / samples.length;
  if (verdict < threshold) {
    return 'Clean';
  } else {
    return 'Polluted';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))