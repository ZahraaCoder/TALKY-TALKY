
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDzRTK3BzztYmC_NEYPuLK3VmWM7n--H6U",
      authDomain: "talky-4a4d5.firebaseapp.com",
      databaseURL: "https://talky-4a4d5-default-rtdb.firebaseio.com",
      projectId: "talky-4a4d5",
      storageBucket: "talky-4a4d5.appspot.com",
      messagingSenderId: "739285021228",
      appId: "1:739285021228:web:c31f16ea9818ff77d95789"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


   var user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+" 😊 "



function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      document.getElementById("logout").play();
      setTimeout(()=>{
        window.location="index.html";
      },1500);
     
}