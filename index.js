 //intialize count to 0
 //count clikcs to increment 
 //increment count vaeriable when buttoon is clicked
 //change the count-el in htnml to reflect change
 // this is to Increse the counts 


//camelCase-captialise the second first letter
 let countEl=document.getElementById("count-el");   //count-el is the argument passed.   ///both are functions hooked on to the document object
console.log(countEl) 
 let count =0;
let saveEl=document.getElementById("save-el");
 function increment(){
    count+=1;
    countEl.textContent=count;
 }

 function save(){
    let countStr = count+" -"
    saveEl.textContent += countStr
    count=0;
 }