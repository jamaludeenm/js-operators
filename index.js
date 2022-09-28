

{//js operators

{//assingnment operators
let x = 10;}

{//Aritmetic Operators
let x = 5;
let y = 2;
//addition
let z = x + y;
//Multiplying
let A= x * y;
//subraction
let B= x - y;
//division
let C= x / y;}

{//comparision operators
//strict equality operator(datatype + value)
console.log(1 ==+ 1);
//equal to
console.log(1 == 1);
//not equal to
console.log(1 != 1);  
//ternary operator(condition ? 'value 1':'value 2'
let a=19;
let type=a>18 ? "adult ticket":"child ticket"
console.log (type);
}
{//logical operators
//logical and (&&)
//returns true if both operands are true

let highincome=false;
let CIBILscore=false;
let eligible=highincome&&CIBILscore
console.log(eligible);

//logical or (||)
//returns true if any one operands are true
 
let Highincome=false;
let cIBILscore=true;
let Eligible=Highincome||cIBILscore
console.log(Eligible);

//non-boolean-values
//falsey[undefined,null,0,false,"",NaN]
let usercolor="red";
let defaultcolor="blue";

let currentcolor=usercolor||defaultcolor
console.log(currentcolor);

//truthy [anything that is not falsy]
let Usercolor="";
let Defaultcolor="blue";

let Currentcolor=Usercolor || Defaultcolor
console.log(Currentcolor);
}
{//logical not
//The NOT operator (!) returns true for false statements and false for true statements
let x = 6;
let y = 3;
console.log(!(x === y))  +"<br>"
console.log(!(x > y)); 
}
{
//BitWise Operators
//HUman code ->machine code(0,1)
// 1-> 00000001 ->1
// 2-> 00000010 ->2
// 3-> 00000011 ->3	

console.log(1|2);
console.log(5&1);
}
}