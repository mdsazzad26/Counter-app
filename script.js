
let count = 1;

const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const message = document.getElementById("message");

// Plus Button
plus.addEventListener("click", function() {

    if (count < 10) {
        count++;
        message.innerText = "Keep counting!";
    } else {
        message.innerText = "Maximum value is 10!";
    }

    number.innerText = count;
});

// Minus Button
minus.addEventListener("click", function() {

    if (count > 1) {
        count--;
        message.innerText = "Keep counting!";
    } else {
        message.innerText = "Minimum value is 1!";
    }

    number.innerText = count;
});

// Reset Button
reset.addEventListener("click", function() {

    count = 1;
    number.innerText = count;
    message.innerText = "Counter reset successfully!";
});
