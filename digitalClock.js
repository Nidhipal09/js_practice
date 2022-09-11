function startTime(){
    const today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    s=setTimeout(startTime,1000);
    
    document.getElementById("p1").innerHTML=h+" : "+m+" : "+s;
}

