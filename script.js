//change button text after submission
let submitButton = document.querySelector(".button-div");

submitButton.addEventListener("click", buttonText);

function buttonText() {
    event.preventDefault();
    document.getElementById("submit").innerHTML = "Thanks!";
};
