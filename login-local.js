

// document.getElementById("join").addEventListener("click", function () {
//     if (document.getElementById("name").value != '' && document.getElementById("contact").value!='') {
//         document.getElementById("login").style.display = "none";
//         var name = document.getElementById("name").value;
//         sessionStorage.setItem("username", name);
//         var contact = document.getElementById("contact").value;
//         sessionStorage.setItem("contact", contact);
//         sessionStorage.setItem("login", "yes");
//         window.location.replace("chat.html");
//     }
//     else
//         alert("Enter the required names");

// })


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
// function for send message
function phoneAuth() {
    var number = "+91"
    number+=document.getElementById('phone').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        document.getElementById("join").disabled = true;
        window.confirmationResult = confirmationResult;
        let coderesult = confirmationResult;
        console.log(coderesult);
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
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

document.getElementById("join").addEventListener("click",phoneAuth);
document.getElementById("verify").addEventListener("click",codeverify);