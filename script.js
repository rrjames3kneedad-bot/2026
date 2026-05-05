// 🎯 Start button → go to story
function scrollToStory() {
  document.getElementById("story").classList.add("show");
  document.getElementById("letter").classList.add("show");
  document.getElementById("surprise").classList.add("show");

  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });
}

// 🎁 Surprise function
function showSurprise() {
  const music = document.getElementById("bgMusic");
  music.play();

  const msg = document.getElementById("finalMessage");
  msg.classList.remove("hidden");

  typeEffect();

  for (let i = 0; i < 25; i++) {
    createHeart();
  }
}

// ✨ Typing effect
const text = "Thank you for loving me... I will always choose you. Happy Anniversary, my love 💖";
let index = 0;

function typeEffect() {
  const el = document.getElementById("typingText");

  if (index === 0) el.innerHTML = "";

  if (index < text.length) {
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

// 💖 Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100%";
  heart.style.fontSize = "22px";
  heart.style.zIndex = "999";

  document.body.appendChild(heart);

  let move = setInterval(() => {
    heart.style.top = heart.offsetTop - 2 + "px";

    if (heart.offsetTop < -50) {
      clearInterval(move);
      heart.remove();
    }
  }, 20);
}