const btn = document.getElementById("startBtn");
const container = document.getElementById("container");
const introPage = document.getElementById("intro-page");
const message = document.getElementById("message");

// --- API YouTube ---
let player;
let apiReady = false;

// Charger l'API YouTube
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// Fonction appelée automatiquement par l'API YouTube
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player("player", {
    videoId: "1JltlSJH5bY",
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: "1JltlSJH5bY",
      enablejsapi: 1
    },
    events: {
      onReady: (event) => { 
        apiReady = true;
        console.log("YouTube player ready");
      }
    }
  });
};

// --- Animation des cœurs améliorée ---
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  
  // Varier les émojis de cœur
  const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝"];
  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  
  // Position aléatoire
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 30 + "px";
  
  // Durée d'animation variable
  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = duration + "s";
  
  document.body.appendChild(heart);
  
  // Retirer le cœur après l'animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// --- Effet de particules scintillantes ---
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.fontSize = 10 + Math.random() * 20 + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "1";
  sparkle.style.animation = "sparkleFade 2s ease-out forwards";
  
  document.body.appendChild(sparkle);
  
  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

// Animation CSS pour les étincelles (ajoutée dynamiquement)
if (!document.querySelector('#sparkle-style')) {
  const style = document.createElement('style');
  style.id = 'sparkle-style';
  style.textContent = `
    @keyframes sparkleFade {
      0% {
        opacity: 0;
        transform: scale(0) rotate(0deg);
      }
      50% {
        opacity: 1;
        transform: scale(1.5) rotate(180deg);
      }
      100% {
        opacity: 0;
        transform: scale(0) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}

// --- Action au clic sur le bouton ---
btn.addEventListener("click", () => {
  // Animation de disparition du bouton
  btn.style.transform = "scale(0)";
  btn.style.opacity = "0";
  
  setTimeout(() => {
    btn.style.display = "none";
    
    // Masquer la page d'intro avec animation
    introPage.style.opacity = "0";
    introPage.style.transform = "scale(0.9)";
    
    setTimeout(() => {
      introPage.style.display = "none";
      
      // Activer le mode romantique
      document.body.classList.add("active");
      container.classList.remove("neutre");
      container.classList.add("romantique");
      
      // Afficher le message avec animation
      message.style.display = "block";
      
      // Lancer la musique - Méthode améliorée
      setTimeout(() => {
        if (player && player.playVideo) {
          try {
            player.setVolume(60);
            player.playVideo();
            console.log("Musique lancée");
          } catch (e) {
            console.error("Erreur lecture musique:", e);
          }
        } else {
          console.log("Player pas encore prêt, nouvelle tentative...");
          // Réessayer après 500ms si le player n'est pas prêt
          setTimeout(() => {
            if (player && player.playVideo) {
              player.setVolume(60);
              player.playVideo();
            }
          }, 500);
        }
      }, 100);
      
      // Démarrer les animations
      // Pluie de cœurs continue
      const heartInterval = setInterval(createHeart, 250);
      
      // Étincelles occasionnelles
      const sparkleInterval = setInterval(createSparkle, 800);
      
      // Créer quelques cœurs et étincelles immédiatement
      for (let i = 0; i < 10; i++) {
        setTimeout(() => createHeart(), i * 100);
      }
      
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createSparkle(), i * 200);
      }
      
    }, 600); // Délai pour l'animation de sortie
  }, 400); // Délai pour l'animation du bouton
});

// Animation d'apparition au chargement
window.addEventListener('load', () => {
  container.style.opacity = "0";
  container.style.transform = "scale(0.95)";
  
  setTimeout(() => {
    container.style.transition = "opacity 1s ease, transform 1s ease";
    container.style.opacity = "1";
    container.style.transform = "scale(1)";
  }, 100);
});

// Effet au survol du bouton
btn.addEventListener('mouseenter', () => {
  // Créer quelques cœurs au survol
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const miniHeart = document.createElement('span');
      miniHeart.innerHTML = '💕';
      miniHeart.style.position = 'fixed';
      miniHeart.style.left = btn.offsetLeft + btn.offsetWidth / 2 + 'px';
      miniHeart.style.top = btn.offsetTop + 'px';
      miniHeart.style.fontSize = '20px';
      miniHeart.style.pointerEvents = 'none';
      miniHeart.style.zIndex = '10';
      miniHeart.style.animation = 'floatAway 1s ease-out forwards';
      
      const angle = (Math.random() - 0.5) * Math.PI;
      miniHeart.style.setProperty('--angle', angle + 'rad');
      
      document.body.appendChild(miniHeart);
      
      setTimeout(() => miniHeart.remove(), 1000);
    }, i * 100);
  }
});

// Animation pour les mini-cœurs au survol
if (!document.querySelector('#hover-heart-style')) {
  const style = document.createElement('style');
  style.id = 'hover-heart-style';
  style.textContent = `
    @keyframes floatAway {
      0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(
          calc(cos(var(--angle, 0)) * 100px),
          calc(sin(var(--angle, 0)) * 100px - 50px)
        ) scale(0);
      }
    }
  `;
  document.head.appendChild(style);
}
