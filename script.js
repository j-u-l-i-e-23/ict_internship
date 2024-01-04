console.log('Hello');
//variables
a=10; //non declared variable
console.log(a);
var a=10;           //Variable declaration (global declaration)
console.log(a);
{
    var a=90;
    console.log(a);
}
console.log(a);

let b=24;
console.log(b);

{
    let b=23;
    console.log(b);
}
console.log(b);

const v=30;
console.log(v);

{
    const v=80;
    console.log(v);
}

console.log(v);

//Datatypes
console.log(typeof(v));  //number

let FirstName="Juliya";
console.log(typeof(FirstName));   //string

let t=true;
console.log(typeof(t));          //boolean

var n;
console.log(typeof(n));        //undefined when no values are assigned

let arr1=[1,2,3,4,'aaa'];
console.log(typeof(arr1));            //in javascript,array is considered as an object

//object
let person={
    name:'Juliya',
    age:25,
    place:'EKM'
}
console.log(person.place);

//using new keyword
let car=new Object();
car.brand='hyundai';
car.model='i10';
car.color='black';
console.log(car);

//Array of Objects
var arr2=[{name:"Maya",loc:'tvm'},{name:'hnj',loc:'ty'}];
console.log(arr2[1].loc);

// Operators
let ac=4;
console.log(ac+=5);   //assignment operator along with addition operator

//Prefix and postfix increment
let j=5;
let k=j++;           //postfix    
                    //in postfix first the value is assigned then its value will be either inc or dec base don the op used.

console.log(k);      
console.log(++k);    //prefix
                    //in prefix its value will be either inc or dec base don the op used and then the value will be assigned.


//comparison
if (j == k) {
    console.log("Same Values");
} else {
    console.log("Not Same Values");
}


let num1=8;
let num2=13;
if (num1 == num2) {
    console.log("Both are equal");
} else if (num1 > num2) {
    console.log("num1 is greater than num2");
}else {
    console.log("num2 is greater than num1");

}


//functions used to put the repeated codes in a single frame for better reusability.
function addval(num3,num4) {
    var s=num3 + num4 ;
    console.log("Total Sum ="+ s);
    
}
addval(34,24);


//second type
function addval(num3,num4) {
    var s=num3 + num4 ;
    return s;
    
}
var result= addval(34,24);
console.log("Total Sum ="+ result);



//Substraction
function subval(num3,num4) {
    var sub=num3 - num4 ;
    return sub;
    
}
var result2= subval(34,24);
console.log("Difference ="+ result2);


//Multiplication
function mulval(num3,num4) {
    var mul=num3 * num4 ;
    return mul;
    
}
var result3= mulval(34,24);
console.log("Product ="+ result3);


//Division
function divval(num3,num4) {
    var div=num3 / num4 ;
    return div;
    
}
var result4= divval(34,2);
console.log("Quotient ="+ result4);


//looping Statements

for (let i = 0 ;i< 10; i++) {
    console.log( i + 1);
    
}

for (let i = 1 ;i <= 10; i++) {
    console.log( i );
    
}



//create an array with 5 elements and print all the elements in the array

let array1=['apple','orange','grapes','watermelon','Strawberry'];
let loop=0;
while(loop<array1.length){
    console.log(array1[loop]);
    loop++;
}




// for (let index = 0 ; index < array1.length; index++) {
//     console.log(array1[index]);
    
// }

// for(x of array1){
//     console.log(x);
// }


// var arr3=[{name:"Maya",loc:'tvm'}];
// for (x in arr3){
//     console.log(arr3[x]);
// }



// //while loop checks the condition

// let lo=0;
// while(lo < 10){
//     console.log(lo+1);
//     lo++;
// }


let g=1;
do{
    
    console.log(g);
    g++;
    
}while(g<=10);


