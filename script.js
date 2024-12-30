// Navigation
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navigation-list");

const scrollFn = () => {
  menuIcon.classList.add("show-menu-icon");
  navbar.classList.add("hide-navbar");

  if (window.scrollY === 0) {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
  }
};

document.addEventListener("scroll", scrollFn);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("show-menu-icon");
  navbar.classList.remove("hide-navbar");
});
// End of Navigation


const aboutMeText = document.querySelector(".about-me");
const aboutMeTextContent =
  "I am a Designer & I create beautiful websites with great user experience. Want to connect? Just contact me. :)";
Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  aboutMeText.appendChild(span);

  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutMeTextAnim 10s infinite";
  });
})

// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project-img");

projects.forEach((project, i) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });

  project.addEventListener("mouseleave", () => {
    project.firstElementChild.style.top = "2rem";
  });
});

// section - skills
// My-skill sets

document.querySelectorAll(".skill-heading").forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault();

    const serviceText = service.nextElementSibling;
    serviceText.classList.toggle("change");

    const rightPosition = serviceText.classList.contains("change")
      ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
      : 0;

    service.firstElementChild.style.right = rightPosition;
  });
});
