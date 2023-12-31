
 function changebg(){
        document.body.style.background="darkslategray";
        alert("Theme Changed Succesfully");
    }
   setInterval(() =>{
    let a=new Date();
    let time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    let ampm=document.getElementById('ampm');
    if(a.getHours()>12)
    ampm.innerHTML='PM';
 else
    ampm.innerHTML='AM';

    document.getElementById('time').innerHTML=time;

   },1000);

   