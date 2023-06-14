// adding  two number 
const args = process.argv.slice(2);
let total = 0;

args.forEach(n => total += Number(n));

console.log(total)