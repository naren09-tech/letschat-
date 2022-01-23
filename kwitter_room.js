//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDCizeod35OnkR0QadJD2-Ixy9SUYYtJEo",
      authDomain: "kwitter-c883e.firebaseapp.com",
      databaseURL: "https://kwitter-c883e-default-rtdb.firebaseio.com",
      projectId: "kwitter-c883e",
      storageBucket: "kwitter-c883e.appspot.com",
      messagingSenderId: "208201068314",
      appId: "1:208201068314:web:6f14fdf1d17b89b57a46a3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
       }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}