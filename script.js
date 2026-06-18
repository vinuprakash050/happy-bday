const relationshipStart = new Date("2024-05-24T00:00:00");

const letterParagraphs = [
  "Happy Birthday, Pattu.",
  "It still feels magical that everything started on May 24, 2024. The day I proposed to you en valkaiye maathi pota tharunam",
  "And now, getting to celebrate your third birthday together with you makes this day feel even more special to me.",
  "athula irnthey ena orey jolli than enaku",
  "Some days are ordinary, But most of the days we do something and make it memorable.",
  "Thank you for being patient with me, enaya oru aala mathiichu enkooda irkathelam periya vishiyam.",
  "I may not always find the perfect words, but unaku theriyum unaya enaku evolo pudikumnu.",
  "On your birthday, I just want you to smile, feel loved, and remember how important you are to me.",
  "koodiya seekrama veedu katra valiya papom , ena solra ",
  "Happy Birthday, my alagis.",
  "I love you Like i love my shawarma. ❤️",
];

const loader = document.getElementById("loader");
const openHeartButton = document.getElementById("open-heart");
const musicToggle = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
const typewriter = document.getElementById("typewriter");
const gift = document.getElementById("gift");
const surpriseMessage = document.getElementById("surprise-message");
const confettiLayer = document.getElementById("confetti-layer");
const floatingHearts = document.getElementById("floating-hearts");
const sparkles = document.getElementById("sparkles");
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const galleryItems = [...document.querySelectorAll(".gallery__item")];
const revealItems = [...document.querySelectorAll(".reveal")];
const counterParts = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

let letterStarted = false;
let surpriseOpened = false;

openHeartButton.addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
});

musicToggle.addEventListener("click", async () => {
  const hasSource = bgMusic.querySelector("source")?.getAttribute("src");

  if (!hasSource) {
    musicToggle.querySelector(".music-toggle__text").textContent = "Add Music File";
    return;
  }

  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicToggle.classList.add("is-active");
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.querySelector(".music-toggle__text").textContent = "Pause Music";
    } catch (error) {
      musicToggle.querySelector(".music-toggle__text").textContent = "Tap Again";
    }
  } else {
    bgMusic.pause();
    musicToggle.classList.remove("is-active");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.querySelector(".music-toggle__text").textContent = "Play Music";
  }
});

function pad(value, size = 2) {
  return String(value).padStart(size, "0");
}

function updateCounter() {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - relationshipStart.getTime());

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  counterParts.days.textContent = pad(days, 3);
  counterParts.hours.textContent = pad(hours);
  counterParts.minutes.textContent = pad(minutes);
  counterParts.seconds.textContent = pad(seconds);
}

function createAmbientDecor() {
  for (let index = 0; index < 16; index += 1) {
    const heart = document.createElement("span");
    heart.className = "ambient-heart";
    heart.textContent = "❤";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${0.7 + Math.random() * 1.4}rem`;
    heart.style.animationDuration = `${10 + Math.random() * 10}s`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    floatingHearts.appendChild(heart);
  }

  for (let index = 0; index < 22; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    sparkles.appendChild(sparkle);
  }
}

function typeLetter() {
  if (letterStarted) return;
  letterStarted = true;

  let paragraphIndex = 0;
  let charIndex = 0;
  let paragraphNode = document.createElement("p");
  let cursor = document.createElement("span");
  cursor.className = "typewriter__cursor";
  cursor.textContent = "|";

  typewriter.innerHTML = "";
  typewriter.append(paragraphNode, cursor);

  const step = () => {
    const currentParagraph = letterParagraphs[paragraphIndex];

    if (!currentParagraph) {
      cursor.remove();
      return;
    }

    paragraphNode.textContent = currentParagraph.slice(0, charIndex + 1);
    charIndex += 1;

    if (charIndex < currentParagraph.length) {
      window.setTimeout(step, 24);
      return;
    }

    paragraphIndex += 1;
    charIndex = 0;

    if (paragraphIndex < letterParagraphs.length) {
      paragraphNode = document.createElement("p");
      typewriter.insertBefore(paragraphNode, cursor);
      window.setTimeout(step, 280);
      return;
    }

    cursor.remove();
  };

  step();
}

function launchSurprise() {
  if (surpriseOpened) return;
  surpriseOpened = true;

  gift.classList.add("is-open");
  gift.setAttribute("aria-expanded", "true");
  surpriseMessage.hidden = false;

  const palette = ["#f58bb0", "#d9c3f5", "#dcb675", "#ffffff", "#ffc6db"];

  for (let index = 0; index < 32; index += 1) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.style.left = "50%";
    confetti.style.top = "45%";
    confetti.style.background = palette[index % palette.length];
    confetti.style.setProperty("--x", `${-180 + Math.random() * 360}px`);
    confetti.style.setProperty("--y", `${-220 - Math.random() * 160}px`);
    confetti.style.setProperty("--r", `${Math.random() * 640 - 320}deg`);
    confettiLayer.appendChild(confetti);
    window.setTimeout(() => confetti.remove(), 2200);
  }

  for (let index = 0; index < 12; index += 1) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = "❤";
    heart.style.left = `${44 + Math.random() * 12}%`;
    heart.style.bottom = "3rem";
    heart.style.setProperty("--hx", `${-90 + Math.random() * 180}px`);
    confettiLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 3200);
  }
}

function openLightbox(title, image) {
  lightbox.hidden = false;
  lightboxTitle.textContent = title;
  if (image) {
    lightboxImage.src = encodeURI(image);
    lightboxImage.alt = title;
    lightboxImage.hidden = false;
  } else {
    lightboxImage.removeAttribute("src");
    lightboxImage.hidden = true;
  }
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("lightbox-open");
}

gift.addEventListener("click", launchSurprise);
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () =>
    openLightbox(item.dataset.title || "Memory", item.dataset.image || "")
  );
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");

      if (entry.target.id === "typewriter") {
        typeLetter();
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));
revealObserver.observe(typewriter);

window.addEventListener("load", () => {
  updateCounter();
  createAmbientDecor();
  window.setTimeout(() => loader.classList.add("is-hidden"), 1200);
});

updateCounter();
window.setInterval(updateCounter, 1000);
