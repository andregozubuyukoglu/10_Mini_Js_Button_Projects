function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 300 + "vw";

  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💜";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.removeChild();
  }, 3000);
}

setInterval(createHeart, "100");
