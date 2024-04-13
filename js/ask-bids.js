// Show/Hide Sections
let currentSection = "ask-section";
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

// Ask asset list

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("ask-container");

  for (let i = 0; i < 6; i++) {
    const newAssetItem = document.createElement("div");
    newAssetItem.className = "asset-item";

    newAssetItem.innerHTML = `
      <div class="first-detail">
        <img src="/images/Transaction.svg" alt="Transaction" width="50" />
        <div class="name-text">
          <h3>Asset Name</h3>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <button class="btn action-btn">BUY</button>
      <div class="second-detail">
        <h4>Name</h4>
        <p>Asset Name</p>
      </div>
      <div class="third-detail">
        <h4>Name</h4>
        <p>Asset Name</p>
      </div>
    `;

    container.appendChild(newAssetItem);
  }
});

// Responsive Ask asset list

document.addEventListener("DOMContentLoaded", () => {
  const responsiveContainer = document.getElementById(
    "responsive-ask-container"
  );

  for (let i = 0; i < 6; i++) {
    const newAssetItem = document.createElement("div");
    newAssetItem.className = "responsive-asset-item";

    newAssetItem.innerHTML = `
    <div class="responsive-asset-details">
    <div class="responsive-asset-detail">
      <h3>Asset Name</h3>
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
    <div class="responsive-asset-detail">
      <h4>Name</h4>
      <p>Asset Name</p>
    </div>
    <div class="responsive-asset-detail">
      <h4>Name</h4>
      <p>Asset Name</p>
    </div>
  </div>
  <div class="responsive-asset-actions">
    <img
      src="/images/BlueArrows.svg"
      alt="Transaction"
      width="60px"
    />
    <button class="btn action-btn">BUY</button>
  </div>
    `;

    responsiveContainer.appendChild(newAssetItem);
  }
});

// Bids asset list

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("bids-container");

  for (let i = 0; i < 6; i++) {
    const newAssetItem = document.createElement("div");
    newAssetItem.className = "asset-item";

    newAssetItem.innerHTML = `
      <div class="first-detail">
        <img src="/images/Transaction.svg" alt="Transaction" width="50" />
        <div class="name-text">
          <h3>Asset Name</h3>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <button class="btn action-btn">SELL</button>
      <div class="second-detail">
        <h4>Name</h4>
        <p>Asset Name</p>
      </div>
      <div class="third-detail">
        <h4>Name</h4>
        <p>Asset Name</p>
      </div>
    `;

    container.appendChild(newAssetItem);
  }
});

// Responsive Bids asset list

document.addEventListener("DOMContentLoaded", () => {
  const responsiveContainer = document.getElementById(
    "responsive-bids-container"
  );

  for (let i = 0; i < 6; i++) {
    const newAssetItem = document.createElement("div");
    newAssetItem.className = "responsive-asset-item";

    newAssetItem.innerHTML = `
    <div class="responsive-asset-details">
    <div class="responsive-asset-detail">
      <h3>Asset Name</h3>
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
    <div class="responsive-asset-detail">
      <h4>Name</h4>
      <p>Asset Name</p>
    </div>
    <div class="responsive-asset-detail">
      <h4>Name</h4>
      <p>Asset Name</p>
    </div>
  </div>
  <div class="responsive-asset-actions">
    <img
      src="/images/BlueArrows.svg"
      alt="Transaction"
      width="60px"
    />
    <button class="btn action-btn">SELL</button>
  </div>
    `;

    responsiveContainer.appendChild(newAssetItem);
  }
});

// Show/hide confirmation modal

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
