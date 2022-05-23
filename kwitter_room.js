
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDCl1FvcNGs_bbaH_EGLHbO3OpajDUtDAs",
      authDomain: "kwittery-3c29e.firebaseapp.com",
      databaseURL: "https://kwittery-3c29e-default-rtdb.firebaseio.com",
      projectId: "kwittery-3c29e",
      storageBucket: "kwittery-3c29e.appspot.com",
      messagingSenderId: "203279756745",
      appId: "1:203279756745:web:4795952ec16577b0448c18"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
