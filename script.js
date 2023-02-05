AOS.init({
  duration: 600,
  easing: "ease-in-sine",
  delay: 500,
  useClassNames: false,
  once: true,
});

for (const section of Array.from(document.getElementById("frame").children)) {
  let prevDelay = 0;
  for (const element of Array.from(section.children)) {
    element.setAttribute("data-aos", "fade-up");
    element.setAttribute("data-aos-delay", `${(prevDelay += 50)}`);
  }
}
AOS.refreshHard();

// Toggle burger menu
document.getElementById("hamburger-button").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
  document.body.classList.toggle("blur");
  document.getElementById("ham-box-inner").classList.toggle("open");
});

// Close sidebar on nav click
document.getElementById("nav-list").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("open");
  document.body.classList.remove("blur");
  document.getElementById("ham-box-inner").classList.remove("open");
});

// Tab functionality
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and tab contents
    tabs.forEach((t) => t.classList.remove("tab-active"));
    tabContents.forEach((tc) => {
      tc.classList.remove("tab-content-active");
    });

    // Add active class to current tab and corresponding tab content
    tab.classList.add("tab-active");

    document
      .getElementById(`${tab.id}-content`)
      .classList.add("tab-content-active");

    const tabNumber = tab.id.charAt(tab.id.search("-") + 1);

    const underlineLength = document.getElementById("tab-1").offsetWidth;

    document.getElementById("active-underline").style[
      "transform"
    ] = `translateX(calc(${tabNumber - 1} * ${underlineLength}px))`;

    document.getElementById("article-flex").style[
      "transform"
    ] = `translateX(calc(${tabNumber - 1} * -330px))`;
  });
});

// Nav bar scroll behaviour
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  if (document.getElementById("sidebar").classList.contains("open")) {
    return;
  }

  let currentScrollPos = window.scrollY;
  let header = document.getElementById("header");
  let navHeight = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height")
    .slice(0, -2);

  if (currentScrollPos === 0) {
    header.classList.remove("visible");
    header.classList.remove("hidden");
  } else if (prevScrollPos > currentScrollPos) {
    header.classList.add("visible");
    header.classList.remove("hidden");
  } else if (prevScrollPos < currentScrollPos && currentScrollPos > navHeight) {
    header.classList.remove("visible");
    header.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
});
