const cate=["spades", "diamonds", "clubs", "hearts"];
const values=[
    "ace",
    "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];

let cards=[];
for(let i=0; i<cate.length; i++){
    for(let j=0; j<values.length; j++){
       let card={cate:cate[i], value:values[j]};
       cards.push(card);
    }   
}

//shuffle
for(let i=1; i<cards.length; i++){
    let x=Math.floor((Math.random()*i));  
     
    let temp=cards[x];
    cards[x]=cards[i];
    cards[i]=temp;
}

let text="";
for(let i=0; i<5; i++){
   text += cards[i].value+" of "+cards[i].cate+"<br>";
}
 
document.getElementById("p1").innerHTML=text;