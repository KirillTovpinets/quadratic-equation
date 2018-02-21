module.exports = function solveEquation(equation) {
  let result = equation.replace(/\s/g, '');

  let x2Index = result.search(/\*x\^/);
  let a = Number(result.slice(0, x2Index));
  let xIndex = result.search(/\*x[+ -]/);
  let b = Number(result.slice(x2Index+4, xIndex));
  let c = Number(result.slice(xIndex+2));

  if (b[0] === '+') {
  	b = b.slice(1);
  }
  if (c[0] === '+') {
  	c = c.slice(1);
  }

  let descreminant = (b*b) - (4 * a * c);

  let x1 = (-b + Math.sqrt(descreminant)) / (2 * a);
  let x2 = (-b - Math.sqrt(descreminant)) / (2 * a);

  let solution = new Array();
  if (x1 > x2) {
  	solution.push(Math.round(x2));
  	solution.push(Math.round(x1));
  }else{
  	solution.push(Math.round(x1));
  	solution.push(Math.round(x2));
  }

  return solution;
}
