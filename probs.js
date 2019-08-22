/*
Good Dice
A = ability
B = boost
P = proficiency

D = difficulty
S = setback
C = challenge
*/
var probs = [];
probs["B"] = [0, 0, 1, 1, 0, 0];
probs["S"] = [0, 0, -1, -1, 0, 0];
probs["A"] = [0, 1, 1, 2, 0, 0, 1, 0];
probs["D"] = [0, -1, -2, 0, 0, 0, 0, -1];
probs["P"] = [0, 1, 1, 2, 2, 0, 1, 1, 1, 0, 0, 1];
probs["C"] = [0, -1, -1, -2, -2, 0, 0, -1, -1, 0, 0, -1];

function roll_dice(die) {
  return probs[die][Math.floor(Math.random() * probs[die].length)];
}
function eval_roll(str) {
  var i = str.length;
  var res = 0;
  while (i--) {
    res += roll_dice(str.charAt(i));
  }
  return res > 0;
}
function get_prob(str, rolls = 10000) {
  var suc = 0;
  for (i = 0; i < rolls; i++) {
    if (eval_roll(str)) {
      suc++;
    }
  }
  return parseInt((parseFloat(suc) / parseFloat(rolls)) * 100);
}
