// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCizeod35OnkR0QadJD2-Ixy9SUYYtJEo",
    authDomain: "kwitter-c883e.firebaseapp.com",
    databaseURL: "https://kwitter-c883e-default-rtdb.firebaseio.com",
    projectId: "kwitter-c883e",
    storageBucket: "kwitter-c883e.appspot.com",
    messagingSenderId: "208201068314",
    appId: "1:208201068314:web:6f14fdf1d17b89b57a46a3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").ariaValueMax;
      firebase.database(),ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document,getElementById("msg").value="";
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
} }); });}
getData();