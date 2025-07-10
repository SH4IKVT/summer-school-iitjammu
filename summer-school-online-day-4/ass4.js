//1
let a = "shaikat"
let b = 20;
let c = true;
let d = null;
let e ;
console.log(a,b,c,d,e);
//2nd 
//2
//cout<<f;  error
//3
function greet(name,age){
  if(age<18)
    alert(`Hello ${name} you are teen`);
  else if(age>18&&age<60)
    alert(`hello ${name} you are adult`);
  else{
    alert(`hello you are seniour citizen`);
  }
}
greet("shaikat",21);
greet("shaikat",5);
greet("shaikat",30);
greet("shaikat",70);
//4
var i;
for( i=0;i<10;i++){
  console.log(i+1);
}
var i=2
while(i<21){
  console.log(i);
}
i=10
do{
  console.log(i);
  i--;
}while(i>0)
//5
greet("kamal",22);
console.log(greet);
function sum(a,b){
  return a+b;
}
function square(a){
  return a*a;
}
const Greet = (name)=>{
  console.log("hello "+name+"how are you ");
}
//6 
//unioperation
function sqr(num){
  return num*num;
}
function double(num){
  return num*2;
}

function operation(num,callback){
  return callback(num);
}
var value=operation(6,sqr);

