const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation.classList.toggle("is-open", willOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuButton.focus();
  }
});

const demos = {
  game: {
    prompt: "Make a space game where I collect lost stars.",
    title: "Star Catcher",
    copy: "Collect the stars. Beat your best time.",
    icon: "★",
    action: "Play",
    accent: "#51d6ca",
  },
  story: {
    prompt: "Tell an interactive story about a shy dragon.",
    title: "Ember's Big Hello",
    copy: "Choose what Ember does next.",
    icon: "♢",
    action: "Begin",
    accent: "#bd9bff",
  },
  data: {
    prompt: "Show how my garden changes through the year.",
    title: "Garden Seasons",
    copy: "See the year bloom, month by month.",
    icon: "▥",
    action: "Explore",
    accent: "#ffd34e",
  },
  world: {
    prompt: "Build a tiny 3D museum for strange planets.",
    title: "Pocket Cosmos",
    copy: "Walk through worlds nobody has named.",
    icon: "◉",
    action: "Enter",
    accent: "#ff6b52",
  },
};

const demoPreview = document.querySelector("[data-demo-preview]");
const demoPrompt = document.querySelector("[data-demo-prompt]");
const demoTitle = document.querySelector("[data-demo-title]");
const demoCopy = document.querySelector("[data-demo-copy]");
const demoIcon = document.querySelector("[data-demo-icon]");
const demoAction = document.querySelector(".mini-app__button");
const demoButtons = document.querySelectorAll("[data-demo-choice]");

function setDemo(name) {
  const demo = demos[name];
  if (!demo) return;

  demoPreview.classList.add("is-switching");
  demoPreview.dataset.demo = name;
  demoPreview.style.setProperty("--demo-accent", demo.accent);

  window.setTimeout(() => {
    demoPrompt.textContent = demo.prompt;
    demoTitle.textContent = demo.title;
    demoCopy.textContent = demo.copy;
    demoIcon.textContent = demo.icon;
    demoAction.textContent = demo.action;
    demoPreview.classList.remove("is-switching");
  }, reducedMotion.matches ? 0 : 150);

  for (const button of demoButtons) {
    const selected = button.dataset.demoChoice === name;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  }
}

for (const button of demoButtons) {
  button.addEventListener("click", () => setDemo(button.dataset.demoChoice));
}

const copyButton = document.querySelector("[data-copy-button]");
const copyText = document.querySelector("[data-copy-text]");
const copyStatus = document.querySelector(".copy-status");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyText.textContent.trim());
    copyButton.querySelector("span").textContent = "Copied";
    copyStatus.textContent = "Prompt copied to your clipboard.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(copyText);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.querySelector("span").textContent = "Selected";
    copyStatus.textContent = "Prompt selected. Use your browser's copy command.";
  }

  window.setTimeout(() => {
    copyButton.querySelector("span").textContent = "Copy";
    copyStatus.textContent = "";
  }, 2500);
});

const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  for (const element of revealElements) {
    element.classList.add("is-visible");
  }
} else {
  for (const element of revealElements) {
    element.classList.add("reveal-ready");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
  );

  for (const element of revealElements) {
    observer.observe(element);
  }
}

const parallaxSurface = document.querySelector("[data-parallax]");

if (!reducedMotion.matches && matchMedia("(pointer: fine)").matches) {
  parallaxSurface.addEventListener("pointermove", (event) => {
    const bounds = parallaxSurface.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    parallaxSurface.style.setProperty("--move-x", `${x * 8}px`);
    parallaxSurface.style.setProperty("--move-y", `${y * 8}px`);
  });

  parallaxSurface.addEventListener("pointerleave", () => {
    parallaxSurface.style.setProperty("--move-x", "0px");
    parallaxSurface.style.setProperty("--move-y", "0px");
  });
}
