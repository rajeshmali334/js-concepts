// js data type two type
// Primitive there 7 =>
// 1. Number, 2. String, 3. Boolean, 4. Null, 5. Undefined, 6. BigInt,
let a=4;
let name = "rajesh";
let isLogin= true;
let range = null;
let age;
let num1= 23256468984854848n;


// Reference (Non - Primitive)=>
    // 1. Array , 2. Object

let fruits=["apple", "banana", "mango" , "kiwi"]
//console.log(fruits);

let obj={
    name:"rajesh",
    roll:2563,
    age:32,
    course:"B.tech"
}

//console.log(obj);

let functionName= function(){
    //console.log("This is a function");
}

//console.log(typeof functionName);


// Stack(Primitive)  and  Heap(Non-Primitive)

let detailStr="this is memory";
let second = detailStr;
second = "ram is good boy";

// console.log(second);
// console.log(detailStr);

let user1 ={
    name : "rajesh",
    email:"rajesh@gmail.com",
    age:32,
    salary: 22000
}

let user2 = user1;

user1.name= "sona";

console.log(user1.name);
console.log(user2.name);

// note => primitive data change the only copy data
//         non -primitive data change the orignal data

