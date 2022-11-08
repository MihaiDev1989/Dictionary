let addWordBtn = document.getElementById("add-word");
let searchWordBtn = document.getElementById("search-word");
let inputElement = document.getElementById("word");
let word = inputElement.value;
let listOfWords = [];

function messageAlert(messageElement) {
    if (!messageElement[0].classList.contains("succes-alert-message")) {
        messageElement[0].style.display = "block";
        setTimeout(function () {
            messageElement[0].style.display = "none";
        }, 1000);
    } else {
        messageElement[0].style.display = "none";
    }
}

addWordBtn.addEventListener('click', function () {
    if (inputElement.value !== "") {
        let messageElement = document.getElementsByClassName("succes-submited-message");
        messageAlert(messageElement);
        listOfWords.push(word);
    } else {
        let messageElement = document.getElementsByClassName("danger-submited-message");
        messageAlert(messageElement);
    }
});

searchWordBtn.addEventListener('click', function () {
    word.toLowerCase();
    let exists = false;
    listOfWords.forEach(function (item) {
        if (item === word) {
            exists = true;
        }
    });
    if (exists) {
        document.getElementById("existing-text-message-content").innerHTML = '<p class="alert alert-success">Your word is in the list!</p>';
    } else {
        document.getElementById("existing-text-message-content").innerHTML = '<p class="alert alert-danger">Your word is not in the list!</p>';
    }
});