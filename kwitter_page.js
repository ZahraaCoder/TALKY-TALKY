//YOUR FIREBASE LINKS
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
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
Name = message_data['name'];
message= message_data['message'];
like = message_data['like'];
name_with_tag="<h4>"+ Name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>"+ message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function send()
{
      document.getElementById("send").play();
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      document.getElementById("logout").play();
      setTimeout(()=>{
            window.location="index.html";
          },1500);
}

function back() {
      localStorage.removeItem("room_name");
            window.location="kwitter_room.html";
}


function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      document.getElementById("like").play();
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}