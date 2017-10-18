// // let a = "Hello";
// // let b = "World";
// // let x=10;
// // let y=20;
// // let z=20.89;
// // let variable=false;
// // let variableTwo=true;
// //
// // document.getElementById('test').innerHTML = a+b;
// // document.write(x+y);
// //
// // document.write(typeof a);
// // document.write(typeof b);
// // document.write(typeof x);
// // document.write(typeof y);
// // document.write(typeof z);
// // document.write(typeof alert);
// // document.write(typeof variable);
// // document.write(typeof variableTwo);
//
// // let a=10;
// // function firstFunc () {
// //
// //   document.write(typeof a);
// //
// // }
// // firstFunc();
//
//
// // function firstFunc(){
// //   let a="First Function";
// //   return a;
// // }
// // document.write(firstFunc());
// // document.getElementById('test').innerHTML=firstFunc();
//
//
// // function Jam (x,y){
// //   z=x+y;
// //   document.write(z);
// // }
// // function Tafrig (x,y){
// //   z=x-y;
// //   document.write(z);
// // }
// // function Zarb (x,y){
// //   z=x*y;
// //   document.write(z);
// // }
// //
// // Jam(2,3);
// // document.write("<hr />");
// // Tafrig(2,3);
// // document.write("<hr />");
// // Zarb(2,3);
// function jam(x,y){
//   z=x+y;
//   return z;
// }
//   document.getElementById('test').innerHTML=jam(2,4);


function jam() {
let a=document.getElementById("myTextOne").value;
let b=document.getElementById("myTextTwo").value;
document.getElementById("myTextResultOne").value=Number(a)+Number(b);
}
function tafrig() {
let a=document.getElementById("myTextOne").value;
let b=document.getElementById("myTextTwo").value;
document.getElementById("myTextResultTwo").value=Number(a)-Number(b);
}
function zarb() {
let a=document.getElementById("myTextOne").value;
let b=document.getElementById("myTextTwo").value;
document.getElementById("myTextResultThree").value=Number(a)*Number(b);
}
function tagsim() {
let a=document.getElementById("myTextOne").value;
let b=document.getElementById("myTextTwo").value;
document.getElementById("myTextResultFour").value=Number(a)/Number(b);
}
