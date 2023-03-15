// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR6j96ksd5SCRmecKGsAORU3ieasr92p8",
  authDomain: "chat-2c094.firebaseapp.com",
  projectId: "chat-2c094",
  storageBucket: "chat-2c094.appspot.com",
  messagingSenderId: "175998713571",
  appId: "1:175998713571:web:d8747547d87b3766710fd6",
  measurementId: "G-QMQ3DWGMFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  const starCountRef1 = ref(database, 'test');
onValue(starCountRef1, (snapshot) => {
  snapshot.forEach(childSnapshot => {
      console.log(childSnapshot.val());
      const data = childSnapshot.val();
      const key = childSnapshot.key;
      let para = document.createElement("p");
      para.innerHTML = data + " " + key;
      para.id = "id" + key;
      document.querySelector('.data').appendChild(para);
  })
})
let button = document.getElementById('button');
let userName = document.getElementById('user');
let userPassword = document.getElementById('password');
let text = document.getElementById('text');
let logOut = document.getElementById('logOut')
let counter = 0
let div = document.getElementById('logIn')
let divChat = document.getElementById('chat') 

let getUserName = localStorage.getItem('UserName');
let getUserPassword = localStorage.getItem('UserPassword');

button.addEventListener('click', click)
logOut.addEventListener('click', click1)

function iff(){
    if(localStorage.getItem('counter') == 1){
        text.style.display = 'block';
        text.textContent = 'your account name:' + localStorage.getItem('UserName');
        divChat.style.display = 'block';
        div.style.display = 'none';
        } else{
        div.style.display = 'block';
        divChat.style.display = 'none';
        }
}
function click() {
localStorage.setItem('UserName', userName.value)
localStorage.setItem('UserPassword', userPassword.value)
counter = 1;
localStorage.setItem('counter', counter)

iff();
}
function click1(){
localStorage.clear('UserName')
localStorage.clear('UserPassword')
counter = 0
iff();
}

iff();