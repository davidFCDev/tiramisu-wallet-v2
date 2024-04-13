// Show/Hide Sections BUTTONS
let currentSection = "currency-section";
let buttons = document.querySelectorAll(".btn-container button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let showId = this.getAttribute("data-show");
    let hideIds = this.getAttribute("data-hide").split(",");

    toggleSection(showId, hideIds);

    buttons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add("btn");
        btn.classList.remove("outline-btn");
      } else {
        btn.classList.remove("btn");
        btn.classList.add("outline-btn");
      }
    });
  });
});

function toggleSection(showId, hideIds) {
  const showSection = document.getElementById(showId);
  const hideSections = hideIds.map((id) => document.getElementById(id));

  hideSections.forEach((section) => {
    section.classList.add("fade-out");
    setTimeout(() => {
      section.style.display = "none";
      section.classList.remove("fade-out");
    }, 200);
  });

  setTimeout(() => {
    currentSection = showId;
    showSection.style.display = "flex";
  }, 200);
}

// Show/Hide Sections SELECT

const sectionSelector = document.getElementById("sectionSelector");

sectionSelector.addEventListener("change", function () {
  const showId = this.value;

  const sections = ["currency-section", "nft-section", "collection-section"];

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = "none";
    }
  });

  const showSection = document.getElementById(showId);
  if (showSection) {
    showSection.style.display = "flex";
  }
});
