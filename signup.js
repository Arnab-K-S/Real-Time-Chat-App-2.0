


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
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
let coderesult;
// function for send message
function phoneAuth() {
    var number = "+91"
    number+=document.getElementById('phone').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        document.getElementById("join").disabled = true;
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        console.log(coderesult);
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
        sessionStorage.setItem("login", "yes");
        firebase.auth().signInWithCredential(credential);
        window.location.replace("chat.html");
    }).catch(function (error) {
        alert(error.message);
    });
}
// function for code verify
function codeverify() {
    document.getElementById("verify").disabled = true;
    var code = document.getElementById('verify').value;
    coderesult.confirm(code).then(function () {
        alert("logged in")
    }).catch(function () {
        alert("error")
    })
}



function register() {
    console.log("Function executed");
        firebase.database().ref("User").push().set({
            "name": document.getElementById("name").value,
            "password": document.getElementById("password").value,
        });
    return false;
}

document.getElementById("join").addEventListener("click", function () {
    if (document.getElementById("name").value != ''&& document.getElementById("phone").value != '') {
        var name = document.getElementById("name").value;
        sessionStorage.setItem("username", name);
        phoneAuth();
        //         var contact = document.getElementById("contact").value;
        //         sessionStorage.setItem("contact", contact);
     
    }
    else
    alert("Enter the required names");
    
})
document.getElementById("verify").addEventListener("click",codeverify);