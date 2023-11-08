const nums = [1, 5, 2, 4, 3];

for (var contador = 1; contador <= 10; contador++) {
  console.log("itens " + contador);
}

let i = 1;
while (i <= 10) {
  console.log("itens " + i);
  i++;
}

var soma = nums.reduce(function (soma, i) {
  return soma + i;
});
console.log(soma);

let sum = 0;
for (let x of nums) {
  sum += x;
}
console.log(sum);

var m = Math.min(...nums);
console.log(m);

var max = Math.max(...nums);
console.log(max);

nums.reverse();
console.log(nums);

const par = (x) => x % 2 === 0;
let pares = [];
for (i = 0; i < nums.length; i++) {
  if (par(nums[i])) {
    pares.push(nums[i]);
  }
}
console.log(pares);
