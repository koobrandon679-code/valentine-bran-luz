const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const invite = document.getElementById("invite");

yesBtn.addEventListener("click", () => {
  message.textContent = "Yay!! 💕 I’m so happy! 💖";
  invite.style.display = "block";

  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
