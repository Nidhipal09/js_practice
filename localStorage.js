


function submit(){
    let pname = document.getElementById("name").value;
    let pemail=document.getElementById("email").value;
    let pphone=document.getElementById("phone").value;
    let pcity=document.getElementById("city").value;
    let pgender=document.getElementById("gender").value;

    let pinfo = {'Name':pname, 'Email':pemail, 'Phone':pphone, 'City':pcity, 'Gender':pgender};

   
    localStorage.setItem('pinfo',JSON.stringify(pinfo));

    let recStr=localStorage.getItem('pinfo');
    let recobj=JSON.parse(recStr);
    document.getElementById("p1").innerHTML= recobj.Name+" | "+recobj.Email+" | "+recobj.Phone+" | "+recobj.City+" | "+recobj.Gender ;

}
