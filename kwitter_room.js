
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCuKhMERKDMthiIKbMAs8IKmX3NclvRHm0",
      authDomain: "letschat-web-app---1-dba9b.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-dba9b-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-dba9b",
      storageBucket: "letschat-web-app---1-dba9b.appspot.com",
      messagingSenderId: "682548629786",
      appId: "1:682548629786:web:174274c58021f2737d9ca3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

      user_name = localStorage.getItem("username");
      document.getElementById("username").innerHTML = "welcome "+user_name+"!";

      function add_room() {
            room_name = document.getElementById("roomname").ariaValueMax;

            localStorage.setItem("roomname",room_name);
        
            window.location="kwitter_page.html";

            firebase.database().rel("/").child(room_name).update({
                   purpose: "Adding Room Name"
            });
      }  
      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
