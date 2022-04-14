console.log("working");


//Q1.


function uniqueLetter(str){

  let str1 = str.split("");
  let mySet = new Set(str1);
  let str2 = [...mySet];
  console.log(str1.join(''))
  console.log(str2.join(''));

}

uniqueLetter("asasshdhdttwt");




//Q2.
let myMap = new Map();

function lettercount(str){
    let count = 0;
   str.split("").forEach(element => {
    
       
if(myMap.has(element)==true){
    
   count = myMap.get(element)+1;
    myMap.set(element,count);
}
else{
    myMap.set(element,1);
}
   
      
           
   });
}

lettercount("aaaghhtdfaaaagggttt");

for(let [key,val] of myMap.entries()){
    console.log(`${key}${val}`);
}