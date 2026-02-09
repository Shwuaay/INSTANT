const btn = document.getElementById("startBtn");
const container = document.getElementById("container");
const message = document.getElementById("message");

// --- API YouTube ---
let player;
let apiReady = false;

// Charger l'API YouTube
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "wT5472vOXdo",
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: "wT5472vOXdo"
    },
    events: {
      onReady: () => { apiReady = true; }
    }
  });
}

// --- Animation des cœurs ---
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 10 + Math.random() * 25 + "px";
  heart.style.duration = 3 + Math.random() * 4 + "s";
  heart.style.animationDuration = heart.style.duration;
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// --- Action au clic ---
btn.addEventListener("click", () => {
  btn.style.display = "none";
  document.body.classList.add("active");
  container.classList.remove("neutre");
  container.classList.add("romantique");
  message.style.display = "block";

  // Lancer la musique si prête
  if (apiReady && player) {
    player.playVideo();
  }

  // Lancer la pluie de cœurs
  setInterval(createHeart, 300);
});