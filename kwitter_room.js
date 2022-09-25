var firebaseConfig = {
      apiKey: "AIzaSyDFwlMePVtRKP3YzHfX3c0B0AZKKO725K8",
      authDomain: "kwitter-e8f20.firebaseapp.com",
      databaseURL: "https://kwitter-e8f20-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8f20",
      storageBucket: "kwitter-e8f20.appspot.com",
      messagingSenderId: "726193370278",
      appId: "1:726193370278:web:2e44599d9d130abbd4f067"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+" " +user_name+" " + "!";

function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"room name to be added "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}