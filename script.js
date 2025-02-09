const messages = [
    "You sure?",
    "Pakkaa??",
    "Soch lo???",
    "Ache se sochoo...",
    "Ek baar fir socho!",
    "ok if you say no, then...",
    "I won't accept it...",
    "Isliye yes dabao jaldi...",
    "Dabao dabaoo...",
    "Bolne lagiiiiii! ❤️"
];

let messageIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noButton && yesButton) {
        noButton.addEventListener("click", handleNoClick);
        yesButton.addEventListener("click", handleYesClick);
    }
});

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".section first").classList.add("fade-up");
});

///



