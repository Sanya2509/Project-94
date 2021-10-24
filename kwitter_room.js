var firebaseConfig = {
  apiKey: "AIzaSyClcPvECmG4BmLviDdMLfMP9MYh9Htkj7E",
  authDomain: "sanya-shah-project-94-final.firebaseapp.com",
  projectId: "sanya-shah-project-94-final",
  storageBucket: "sanya-shah-project-94-final.appspot.com",
  messagingSenderId: "369013521487",
  appId: "1:369013521487:web:43f5ed2e1966c3d474fe3a",
  measurementId: "G-K11FN59MC1"
};


const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}