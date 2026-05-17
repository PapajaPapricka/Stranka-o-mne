
document.addEventListener("DOMContentLoaded", () => {

  // ============ ELEMENTY ============
  const navLinks = document.querySelectorAll('.nav-link');
  const heroTitle = document.getElementById('heroTitle');
  const heroDesc = document.getElementById('heroDesc');
  const pageSections = document.querySelectorAll('.page-section');
  const navLinksEl = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  const modeToggle = document.getElementById('modeToggle');
  const ipBtn = document.getElementById('ipBtn');
  const shopBtn = document.getElementById('shopBtn');
  const logoHome = document.getElementById('logoHome');
  const navbar = document.querySelector(".navbar");

  // ============ STRÁNKY ============
  const pages = {
    home: {
      title: "Proč vznikla tato stránka?",
      desc: "Protože to byl domácí úkol..."
    },
    features: {
      title: "Kontakt mezi mnou a tebou!",
      desc: "(Preferuji osobní kontakt v reálném světě...)"
    },
    pravidla: {
      title: "Kdo se moc ptá...",
      desc: "...moc se dozví."
    },
    tym: {
      title: "Vzdělání není vše,",
      desc: "čeho na světě chci dokázat..."
    },
  };

  // ============ PAGE SWITCH ============
  function showPage(name) {
    if (!pages[name]) return;

    navLinks.forEach(l =>
      l.classList.toggle('active', l.dataset.page === name)
    );

    pageSections.forEach(sec =>
      sec.classList.toggle('active', sec.dataset.page === name)
    );

    heroTitle.textContent = pages[name].title;
    heroDesc.textContent = pages[name].desc;

    document.title =
      

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (name === "home") setTimeout(animateCounters, 150);
  }

  // default stránka
  showPage("home");

  // ============ NAV ============
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(link.dataset.page);
      navLinksEl.classList.remove("open");
    });
  });

  logoHome?.addEventListener("click", () => showPage("home"));

  // ============ BURGER ============
  menuToggle?.addEventListener("click", () => {
    navLinksEl.classList.toggle("open");
  });


  // ============ SHOP ============
  shopBtn?.addEventListener("click", () => {
    window.open("https://shop.aetheria.cz/", "_blank");
  });

  // ============ DARK MODE ============
  if (localStorage.getItem("dark") === "1") {
    document.body.classList.add("dark");
  }

  modeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "dark",
      document.body.classList.contains("dark") ? "1" : "0"
    );
  });

  // ============ NAVBAR SCROLL ============
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // ============ COUNTERS ============
  function animateCounters() {
    document.querySelectorAll(".stat-number[data-count]").forEach(el => {
      const target = parseInt(el.dataset.count);
      let current = 0;

      const step = () => {
        current += target / 60;

        if (current >= target) {
          el.textContent = target + "+";
        } else {
          el.textContent = Math.floor(current) + "+";
          requestAnimationFrame(step);
        }
      };

      step();
    });
  }

document.querySelectorAll(".rule-header").forEach(header => {
  header.addEventListener("click", () => {
    const current = header.parentElement;

    document.querySelectorAll(".rule-header").forEach(header => {
  header.addEventListener("click", () => {
    const current = header.parentElement;
    current.classList.toggle("open");
  });
});

    current.classList.toggle("open");
  });
});


  // ============ FOOTER LINKY ============
  document.querySelectorAll(".footer-links a[data-page]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(link.dataset.page);
    });
  });

  // scroll nahoře
  window.scrollTo({ top: 0, behavior: "smooth" });
});
