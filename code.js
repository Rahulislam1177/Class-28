function add(num1,num2=0){
    
 return num1 + num2;
}

const add1 =(num1,num2)=>{
    return num1 + num2;

}
const result =add(9,5);
//console.log(result);

const add3 =(num1,num2,num3)=>{
const plus =num1 + num2;
const minus = plus - num3;
const total = plus + minus;
return total;

}

const results =add3(5,67,9);
//console.log(results);



const number3 =[45,67,1,4,2,67,5,78,3,76,32,,8,57,476,56,567,];

const nan =Math.max(...number3);
console.log(nan);
//console.log(number.sort());


const num =['Abir','Babul','Abbu','Babi'];
//console.log(num.sort());