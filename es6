sum of arrays --------------------------------
let vab =(...bxd)=>{
console.log(bxd);
let sum=0;
	for(let value of bxd ){
  		sum+=value;
  	}
  console.log(sum);
}
vab(2,3,5,6,7);
--------------------------------------------------
let vab =(bxd)=>{
console.log(bxd);
let sum=0;
	for(let value of bxd ){
  		sum+=value;
  	}
  console.log(sum);
}
vab([2,3,5,6,7]);
-----------------------------------------------

const numbers = [10, 20, 30, 40] 
const add = (a, b) =>
  a + b
const sum = numbers.reduce(add);
console.log(sum);//this example remove mutation present in code.
----------------------------------
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(sum);
--------------------------------------------------
find,filter,reduce,map are important
----------------------------------------------------
Generator example
function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

for (let i of range(0, 10, 2)) {
  console.log(i);
}
------------------------------------------
Template literals example
let person = {name: 'John Smith'};
let tpl = `My name is ${person.name}.`;

console.log(tpl);
--------------------
let pi = () => 3.1415;
console.log(pi()); // 3.1415
-----------------------------------
Higher order function---Not important for interview
const add = x => y => y + x;
console.log(add(2)(3));
-------------------------------
sorting of numbers
var numbers = [4, 2, 5, 1, 3];
numbers.sort((b,a) =>
 	 b-a
);
console.log(numbers);
--------------------------
fibonacci series in es5
function fibonacci(number) {

    var previous_first = 0, previous_second = 1, next = 1;
    console.log(previous_first);
    console.log(previous_second);
    
    

    for(var i = 2; i <= number-1; i++) {
        next = previous_first + previous_second;
        console.log(next);
				previous_first = previous_second;
        previous_second = next;
    }
   
}
fibonacci(10);
----------------------------------------------

