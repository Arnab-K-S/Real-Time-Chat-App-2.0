


// Configuration

const firebaseConfig = {
    apiKey: "AIzaSyBWOVdpXI4Xbo0Me2uSDfpQL24VnJbd05w",
    authDomain: "arnab-codding-website.firebaseapp.com",
    databaseURL: "https://arnab-codding-website-default-rtdb.firebaseio.com",
    projectId: "arnab-codding-website",
    storageBucket: "arnab-codding-website.appspot.com",
    messagingSenderId: "409678714305",
    appId: "1:409678714305:web:b70e44805e0dad240d8b40"
};

firebase.initializeApp(firebaseConfig);

let login_status=false;

login();
function login(){
    console.log("Loging in");
    firebase.database().ref("User").on("child_added", function (snapshot) {
    console.log("Firebase Executed");
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (snapshot.val().name == name && snapshot.val().password==password )
    {
        login=true;
        window.location.replace("chat.html");
        
    }
});
}
document.getElementById("join").addEventListener("click", function () {
    if (document.getElementById("name").value != '' && document.getElementById("password").value != '') {
        login();
        var name = document.getElementById("name").value;
        sessionStorage.setItem("username", name);
        if (login_status==false){
            document.getElementById("name").value='';
            document.getElementById("password").value='';
            alert("Invalid User ID or Password");
            document.getElementById("name").focus=true;
        }

        //         var contact = document.getElementById("contact").value;
        //         sessionStorage.setItem("contact", contact);
     
    }
    else
    alert("Enter the required fields");  
})