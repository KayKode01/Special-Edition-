let pdfOpened = false;

function openPDF() {
  window.open("Special Edition.pdf", "_blank");
  pdfOpened = true;
}

// Trigger ONLY when user comes back
window.onfocus = function () {
  if (pdfOpened) {
    showQuestion();
    pdfOpened = false;
  }
};

function showQuestion() {
  document.getElementById("introSection").style.display = "none";
  document.getElementById("questionSection").classList.remove("hidden");
}

function sayYes() {
  document.getElementById("response").textContent =
    "Oh You Thought, Its not Opposite Day🙂";
  launchConfetti();
}

function sayYes() {
  document.getElementById("response").textContent =
   "Had No Choice! 🙂💖";
  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.background =
      ["#ffb6c1", "#ff69b4", "#ffc0cb", "#ff8fab"][
        Math.floor(Math.random() * 4)
      ];

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}
