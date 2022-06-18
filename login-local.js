

document.getElementById("join").addEventListener("click", function () {
    if (document.getElementById("name").value != '' && document.getElementById("contact").value!='') {
        document.getElementById("login").style.display = "none";
        var name = document.getElementById("name").value;
        sessionStorage.setItem("username", name);
        var contact = document.getElementById("contact").value;
        sessionStorage.setItem("contact", contact);
        window.location.replace("chat.html");
    }
    else
        alert("Enter the required names");

})
document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("options").style.display = "flex";
})

document.getElementById("menu2").addEventListener("click", function () {
    document.getElementById("options").style.display = "none";

})
