let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

let attempt = 5;

function Guess() {
  const guess = document.querySelector(".inputBox").value;
  const msg = document.querySelector(".message");
  const attemptCount = document.querySelector(".attempt");
  if (!guess || guess < 1 || guess > 100) {
    msg.textContent = "Enter a valid number within 1–100.";
    return;
  }
  if  (parseInt(guess) === number) {
    msg.textContent = "Congratulation You Guessed it ";
    disableInputButton();
    return;
  } else {
    attempt--;
    attemptCount.textContent = `Attempts left: ${attempt}`;
  }
  if (attempt > 0) {
    msg.textContent =
      guess > number ? "My Guess is Low!" : " My Guess is High!";
    attemptCount.textContent = `Attempts left: ${attempt}`;
  }
  else {
    msg.textContent = `Game Over! The number was ${number}`;
    attemptCount.textContent = `Attempts left: 0`;
    disableInputButton();
    resetBtn();
  }
}
Guess();
function disableInputButton() {
  document.querySelector(".inputBox").disabled = true;
}

function resetBtn() {
  number = Math.floor(Math.random() * 100) + 1;
  attempt = 5;
  document.querySelector(".inputBox").disabled = false;
  document.querySelector(".message").textContent = "";
  document.querySelector(".inputBox").value = "";
  document.querySelector(".attempt").textContent = `Attempts left: ${attempt}`;
  Guess()
}
