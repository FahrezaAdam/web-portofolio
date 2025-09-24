document.querySelectorAll("header .navbar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (!this.classList.contains("logo")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header .navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      current = sections[sections.length - 1].getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

document.querySelector(".logo").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo(0, 0);
  location.href = window.location.pathname;
});
