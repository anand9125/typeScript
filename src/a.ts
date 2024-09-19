function greet(firstName: string){
   console.log("Hello " + firstName);
   
}
greet("anand")


//type interfarance we have ti tell what they type return 

function sum(a:number,b :number) : number{
return a+b;
}
 console.log(sum(1,2));

//function that call another function as an arguments

function runAfter1s(fn:()=>void){  //function expext nothing as input and return type is void
setTimeout(fn,1000)
}
runAfter1s(function(){
    console.log("hi there");
    
})

