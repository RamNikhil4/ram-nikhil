document.addEventListener("DOMContentLoaded", () => {
  initSystemBoot(); // Added
  initCustomCursor(); // Added
  initParticles();
  initGlitchTyping();
  initScrollObs();
  initStats();
  initUplink();
  initPrint();
  initMobileMenu();
  initSwiper();
  lucide.createIcons();
});

// --- 0. System Boot Sequence ---
function initSystemBoot() {
  const bootText = document.getElementById("boot-text");
  const bootProgress = document.getElementById("boot-progress");
  const bootPercent = document.getElementById("boot-percent");
  const systemBoot = document.getElementById("system-boot");
  const mainInterface = document.getElementById("main-interface");

  if (!bootText || !systemBoot) return;

  const messages = [
    "INITIALIZING_CORE_SYSTEMS...",
    "LOADING_KERNEL_MODULES [OK]",
    "MOUNTING_VIRTUAL_FILE_SYSTEM...",
    "CHECKING_MEMORY_INTEGRITY... 100%",
    "ESTABLISHING_SECURE_CONNECTION...",
    "LOADING_INTERFACE_ASSETS...",
    "DECRYPTING_USER_PROFILE...",
    "ACCESS_GRANTED.",
  ];

  let step = 0;

  function nextMessage() {
    if (step < messages.length) {
      const p = document.createElement("div");
      p.textContent = `> ${messages[step]}`;
      p.className = "text-cyan/80";
      if (step === messages.length - 1) p.className = "text-green font-bold";
      bootText.appendChild(p);

      // Auto scroll
      bootText.scrollTop = bootText.scrollHeight;

      // Update Progress
      const progress = ((step + 1) / messages.length) * 100;
      bootProgress.style.width = `${progress}%`;
      bootPercent.textContent = `${Math.round(progress)}%`;

      step++;
      setTimeout(nextMessage, Math.random() * 300 + 100);
    } else {
      setTimeout(completeBoot, 500);
    }
  }

  function completeBoot() {
    systemBoot.style.transition = "opacity 0.5s ease-out";
    systemBoot.style.opacity = "0";
    setTimeout(() => {
      systemBoot.remove();
      mainInterface.classList.remove("opacity-0");
      // Trigger other animations after boot
    }, 500);
  }

  // Start boot sequence
  setTimeout(nextMessage, 500);
}

// --- 0.1 Custom Cursor ---
function initCustomCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");

  if (!cursor || !follower) return;

  let posX = 0,
    posY = 0;
  let mouseX = 0,
    mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Immediate update for dot
    cursor.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
  });

  // Smooth follower
  function animate() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    follower.style.transform = `translate(${posX - 16}px, ${posY - 16}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Hover effects
  const links = document.querySelectorAll("a, button, .cyber-card");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("scale-150", "bg-cyan/20");
      follower.classList.add("scale-150", "border-cyan");
      follower.classList.remove("border-pink/50");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("scale-150", "bg-cyan/20");
      follower.classList.remove("scale-150", "border-cyan");
      follower.classList.add("border-pink/50");
    });
  });
}

// --- 1. Canvas Particles Network ---
function initParticles() {
  const canvas = document.getElementById("bgCanvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = 60;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener("resize", resize);
  resize();

  // Mouse Interaction
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2;
      this.baseX = this.x;
      this.baseY = this.y;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Mouse repulsion
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 150;
      const force = (maxDistance - distance) / maxDistance;

      if (distance < maxDistance) {
        this.x -= forceDirectionX * force * 2; // Repel
        this.y -= forceDirectionY * force * 2;
      }

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      ctx.fillStyle = "rgba(0, 243, 255, 0.5)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, index) => {
      p.update();
      p.draw();

      // Link particles
      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 243, 255, ${1 - dist / 150})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// --- 2. Advanced Glitch & Typing ---
function initGlitchTyping() {
  const el = document.getElementById("typed-output");
  const text = "SYSTEM_INITIALIZED... ACCESSING_CORE_DATA...";
  let i = 0;

  // Clear and start fresh
  if (el) {
    el.textContent = "";
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        // Add random glitch char occasionally
        if (Math.random() > 0.9) {
          el.textContent += String.fromCharCode(33 + Math.random() * 30);
          setTimeout(() => (el.textContent = el.textContent.slice(0, -1)), 50);
        }
        setTimeout(type, 50);
      }
    }
    setTimeout(type, 1000);
  }

  // Glitch title hover effect
  const title = document.querySelector(".hero-name");
  if (title) {
    title.addEventListener("mouseover", () => {
      title.style.animation = "none";
      // Trigger a reflow
      void title.offsetWidth;
      title.style.animation = null;
    });
  }
}

// --- 3. Animating Stats ---
function initStats() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const valueEl = entry.target.querySelector(".stat-value");
          const fillEl = entry.target.querySelector(".stat-fill");
          const target = parseInt(valueEl.getAttribute("data-target"));

          // Animate Numbers
          let current = 0;
          const timer = setInterval(() => {
            if (current >= target) clearInterval(timer);
            else {
              current++;
              valueEl.textContent = current + "%";
            }
          }, 20);

          // Animate Bar
          // Trigger transition via class or direct style if needed
          // (Already handled by CSS transition on width, just ensuring it's set)
        }
      });
    },
    { threshold: 0.5 },
  );

  document
    .querySelectorAll(".stat-box")
    .forEach((box) => observer.observe(box));
}

// --- 4. Scroll & Nav ---
function initScrollObs() {
  const navLinks = document.querySelectorAll(".hud-link");
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

// --- 10. Mobile Menu ---
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("closeMobileBtn");
  const links = document.querySelectorAll(".mobile-link");

  if (!btn || !menu) return;

  const toggleMenu = () => {
    // Toggle the translate class to show/hide
    menu.classList.toggle("translate-x-full");
  };

  btn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("translate-x-full"); // Hide sidebar
    });
  });
}

// --- 5. Secure Uplink (Form) ---
function initUplink() {
  const form = document.getElementById("contactForm");
  const overlay = document.getElementById("transmissionOverlay");
  const btn = form ? form.querySelector("button") : null;

  if (!form || !btn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const originalText = btn.innerHTML;
    btn.innerHTML = `TRANSMITTING...`;
    btn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setTimeout(() => {
      overlay.classList.add("active");
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;

      setTimeout(() => {
        overlay.classList.remove("active");
      }, 3500);
    }, 2000);
  });
}

// --- 6. Print ---
function initPrint() {
  const btn = document.getElementById("printBtn");
  if (btn) {
    btn.addEventListener("click", () => window.print());
  }
}

// --- 9. Swiper Initialization ---
function initSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Tablet
      768: {
        slidesPerView: 2,
      },
      // Desktop
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
