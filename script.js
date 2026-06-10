const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const siteHeader = document.querySelector(".site-header");
const menuToggleLabel = menuToggle.querySelector(".sr-only");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const brand = document.querySelector(".brand");
const mainContent = document.querySelector("main");
const siteFooter = document.querySelector(".site-footer");

function setPageInert(isInert) {
  brand.inert = isInert;
  mainContent.inert = isInert;
  siteFooter.inert = isInert;
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggleLabel.textContent = "Open navigation";
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
  setPageInert(false);
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggleLabel.textContent = isOpen ? "Open navigation" : "Close navigation";
  navigation.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
  setPageInert(!isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu();
    menuToggle.focus();
  }
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const revealElements = document.querySelectorAll(".reveal");

if (reducedMotionQuery.matches) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const pageSections = [...document.querySelectorAll("main section[id]")];
let scrollFrame;

function updateNavigationState() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);

  const marker = window.scrollY + siteHeader.offsetHeight + window.innerHeight * 0.28;
  let activeSection = null;

  pageSections.forEach((section) => {
    if (section.offsetTop <= marker) {
      activeSection = section;
    }
  });

  sectionLinks.forEach((link) => {
    const isActive = activeSection && link.getAttribute("href") === `#${activeSection.id}`;
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  scrollFrame = null;
}

function requestNavigationUpdate() {
  if (!scrollFrame) {
    scrollFrame = window.requestAnimationFrame(updateNavigationState);
  }
}

window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
window.addEventListener("resize", requestNavigationUpdate);
updateNavigationState();

const emailLink = document.querySelector("#contact-email");
const emailAddress = `${"nosliw.y.notneb".split("").reverse().join("")}@${"moc.liamg".split("").reverse().join("")}`;
emailLink.href = `mailto:${emailAddress}`;
emailLink.setAttribute("aria-label", `Email Benton J. Wilson at ${emailAddress}`);

document.querySelector("#year").textContent = new Date().getFullYear();
