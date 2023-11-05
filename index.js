

const btn = document.getElementById("btn-submit")
btn.addEventListener("click", getValue)

function getValue(event) {
    event.preventDefault();
    var valueEmail = document.getElementById("email").value
    var valueMessage = document.getElementById("message").value
    var valueName = document.getElementById("ten").value
    console.log("getValue ~ valueEmail:", valueEmail)
    console.log(" getValue ~ valueMessage:", valueMessage)
    console.log(" getValue ~ valueName:", valueName)
    window.location.href = "index.html"
}

document.getElementById("btn-submit").addEventListener("click", function () {
    const ten = document.getElementById("ten").value;
    const email = "quocdat732@gmail.com";
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:${email}?subject=Chủ đề email&body=Mật khẩu của bạn là: ${message}`;

    window.location.href = mailtoLink;
});