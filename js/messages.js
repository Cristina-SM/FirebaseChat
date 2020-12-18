window.onload = initialize;

var refChat;

function initialize() {
    downloadMessages();

    var formMessages = document.getElementById("form-messages");
    formMessages.addEventListener("submit", addMessage);
}

function addMessage(event) {
    event.preventDefault();

    refChat.push({
        text: "Soy Tiburcito",
        user: "Tiburciorrrrrrr"
    })
}

function downloadMessages() {
    refChat = firebase.database().ref().child("chat");

    refChat.on("value", showMessages);
}

function showMessages(snap) {
    var divMessages = document.getElementById("messages");
    var data = snap.val();

    for (var key in data) {
        divMessages.innerHTML = "<p>" + data[key].user + ": " + data[key].text + "</p>" + divMessages.innerHTML;
    }
}