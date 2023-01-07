function addUser(){
    document.getElementById("welcome").play();
    setTimeout(()=>{
        user_name=document.getElementById("user_name").value;
        localStorage.setItem("user_name", user_name);
        window.location="kwitter_room.html";    
    },1500);
   
}