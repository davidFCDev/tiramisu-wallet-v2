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

  let hideIds;
  if (showId === "currency-section") {
    hideIds = ["nft-section", "all-section"];
  } else if (showId === "nft-section") {
    hideIds = ["currency-section", "all-section"];
  } else if (showId === "all-section") {
    hideIds = ["currency-section", "nft-section"];
  }

  toggleSection(showId, hideIds);
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

// Redirect button

function redirectToAssetDetail() {
  window.location.href = "asset-detail.html";
}

function redirectToNftDetail() {
  window.location.href = "nfts-detail.html";
}

// Assets Currency Data

const currencyData = [
  {
    name: "Name 1",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 2",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 3",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 4",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 5",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 6",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 7",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 8",
    description: "Lorem ipsum dolor",
  },
];

function createCurrencyCard(currency) {
  const currencyCard = document.createElement("div");
  currencyCard.classList.add("card");

  currencyCard.innerHTML = `
    <div class="img-container">
      <img src="/images/no-image2.svg" alt="no-image" width="50" />
    </div>
    <div class="card-description">
      <h3>${currency.name}</h3>
       <div class="card-features">
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Chart.svg" alt="Chart"  width="16" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/User.svg" alt="User"  width="16" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Light.svg" alt="Light"  width="13" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Contract.svg" alt="Contract"  width="13" />
            </div>
        </div>
        <h4>${currency.description}</h4>
    </div>
    <div class="card-actions">
      <div class="card-buttons">
        <button>
          <h3>Add Wallet</h3>
        </button>
        <button onclick="redirectToAssetDetail()">
          <h3>Detail</h3>
        </button>
      </div>
    </div>
  `;

  return currencyCard;
}

const currenciesContainer = document.getElementById("currenciesCardContainer");

currencyData.forEach((currency) => {
  const currencyCard = createCurrencyCard(currency);
  currenciesContainer.appendChild(currencyCard);
});

// Assets NFT Collections Data

const nftData = [
  {
    name: "Name 1",
  },
  {
    name: "Name 2",
  },
  {
    name: "Name 3",
  },
  {
    name: "Name 4",
  },
  {
    name: "Name 5",
  },
  {
    name: "Name 6",
  },
  {
    name: "Name 7",
  },
  {
    name: "Name 8",
  },
];

function createNftCard(nft) {
  const nftCard = document.createElement("div");
  nftCard.classList.add("card");

  nftCard.innerHTML = `
  <div class="img-container">
    <img src="/images/no-image2.svg" alt="no-image" width="50" />
    </div>
    <div class="card-description">
    <h3>${nft.name}</h3>
    <div class="card-features">
            <div class="card-feature">
                <p>00</p>
                <img src="/images/User.svg" alt="User" width="26" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Light.svg" alt="Light" width="20" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Contract.svg" alt="Contract" width="20" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Swap.svg" alt="Swap" width="26" />
            </div>
        </div>
    </div>
    <div class="card-actions">
        <div class="card-buttons">
            <button onclick="redirectToNftDetail()">
                <h3>Details</h3>
            </button>
        </div>
    </div>
  `;

  return nftCard;
}

const nftsContainer = document.getElementById("nftsCardContainer");

nftData.forEach((nft) => {
  const nftCard = createNftCard(nft);
  nftsContainer.appendChild(nftCard);
});

// Assets All NFTs Data

const allData = [
  {
    name: "Name 1",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 2",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 3",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 4",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 5",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 6",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 7",
    description: "Lorem ipsum dolor",
  },
  {
    name: "Name 8",
    description: "Lorem ipsum dolor",
  },
];

function createAllNftCard(nft) {
  const allNftCard = document.createElement("div");
  allNftCard.classList.add("card");

  allNftCard.innerHTML = `
    <div class="img-container">
      <img src="/images/no-image2.svg" alt="no-image" width="50" />
      </div>
      <div class="card-description">
      <h3>${nft.name}</h3>
       <div class="card-features-all">
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Light.svg" alt="Light"  width="13" />
            </div>
            <div class="card-feature">
                <p>00</p>
                <img src="/images/Contract.svg" alt="Contract"  width="13" />
            </div>
        </div>
        <h4>${nft.description}</h4>
    </div>
      <div class="card-actions">
      <div class="card-buttons">
        <button>
          <h3>Add Wallet</h3>
        </button>
        <button onclick="redirectToNftDetail()">
          <h3>Detail</h3>
        </button>
      </div>
    </div>
    `;

  return allNftCard;
}

const allNftsCardContainer = document.getElementById("allNftsCardContainer");

allData.forEach((nft) => {
  const allNftCard = createAllNftCard(nft);
  allNftsCardContainer.appendChild(allNftCard);
});
