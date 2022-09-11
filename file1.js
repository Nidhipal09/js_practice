
function ascending(){
   var value1=document.getElementById("input1").value;
   var value2=document.getElementById("input2").value;
   var value3=document.getElementById("input3").value;
   var value4=document.getElementById("input4").value;
   var value5=document.getElementById("input5").value;
   
   let array=[value1,value2,value3,value4,value5];
   array.sort(function(a,b){return a-b});
   document.getElementById("p1").innerHTML=array;
}

function descending(){
   var value1=document.getElementById("input1").value;
   var value2=document.getElementById("input2").value;
   var value3=document.getElementById("input3").value;
   var value4=document.getElementById("input4").value;
   var value5=document.getElementById("input5").value;
   
   let array=[value1,value2,value3,value4,value5];
   array.sort(function(a,b){return b-a});
   document.getElementById("p1").innerHTML=array;
}