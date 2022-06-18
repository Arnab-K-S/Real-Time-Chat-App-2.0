
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

let login=false;
// document.getElementById("name").value
let name_value = sessionStorage.getItem("username");
console.log(name_value);
let contact = sessionStorage.getItem("contact");
console.log(contact);
document.getElementById("container").style.display = "block";
login = sessionStorage.getItem("login");

//  ---------Login System-------------

if (login==true){

//-----------------------Sending Messsage-------------------------

function sendmessage() {
    console.log("Function executed");
    let name = name_value;
    if (document.getElementById("message").value != '') {
        firebase.database().ref("messages").push().set({
            "name": name+contact,
            "message": document.getElementById("message").value,
        });
        document.getElementById("message").value = '';
    }
    return false;
}

document.getElementById("sub").addEventListener("click", sendmessage);

// ----------------------Reading Messages----------------------

firebase.database().ref("messages").on("child_added", function (snapshot) {
        var html = "";
        html += "<li>";
        let name = name_value;
        if (snapshot.val().name == name+contact)
            html += "<div class=\"me\">" + snapshot.val().message;
        else if (snapshot.val().name ==  contact+name)
        // "<h4>" + snapshot.val().name + "</h4>" +
            html += "<div class=\"you\">" +  snapshot.val().message;
        html += "</div>";
    document.getElementById("cd").innerHTML += html;
    var myDiv = document.getElementById("cd");
    myDiv.scrollTop = myDiv.scrollHeight;

});

// ----------- Enter Key for Send ------------
var input = document.getElementById("message");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sub").click();
        var myDiv = document.getElementById("cd");
        myDiv.scrollTop = myDiv.scrollHeight;

    }
});
}
else{
    document.body.style.backgroundColor="black";
    document.getElementById("all").style.display="none";
    document.getElementById("notlogged").innerHTML=`<h1> Please Login First </h1><br>
    <a href="login-local.html">Go to Login Page</a>`;
}