var firebaseConfig = {
    apiKey: "AIzaSyBLaLnAvTHsZgxTAMM1ky43IEt3ElLPeYo",
    authDomain: "fir-project-44ab0.firebaseapp.com",
    databaseURL: "https://fir-project-44ab0-default-rtdb.firebaseio.com",
    projectId: "fir-project-44ab0",
    storageBucket: "fir-project-44ab0.appspot.com",
    messagingSenderId: "379164471869",
    appId: "1:379164471869:web:a549b25d8abc6d1a59f054"
  };
firebase.initializeApp(firebaseConfig);
var username = localStorage.getItem("userId");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("outputIsAwesome").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            var childKey  = childSnapshot.key;
            var Room_names = childKey;
            console.log(Room_names);
            var row = "<div style='cursor:crosshair;' class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>" + Room_names + "</div><hr>";
            document.getElementById("outputIsAwesome").innerHTML += row;
        });
    });
}

getData();

function room(){
    var roomName = document.getElementById("roomName").value;
    localStorage.setItem("roomName", roomName)

    firebase.database().ref("/").child(roomName).update({
        purpose: "addRoom"
    });
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomName", name)
    window.location = "kwitter_page.html"
}

function logOut(){
    localStorage.removeItem("roomName");
    localStorage.removeItem("userId");
    window.location = "index.html";
}
