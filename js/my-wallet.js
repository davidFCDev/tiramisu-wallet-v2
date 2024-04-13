// Section show/hide
let currentSection = "currency-section";
let currencyBtn = document.getElementById("currencyBtn");
let nftBtn = document.getElementById("nftBtn");

function toggleSection(showId, hideId) {
  const showSection = document.getElementById(showId);
  const hideSection = document.getElementById(hideId);

  hideSection.classList.add("fade-out");

  setTimeout(function () {
    currentSection = showId;

    showSection.style.display = "flex";

    hideSection.style.display = "none";

    hideSection.classList.remove("fade-out");

    // Swap button styles
    currencyBtn.classList.toggle("btn");
    currencyBtn.classList.toggle("outline-btn");
    nftBtn.classList.toggle("btn");
    nftBtn.classList.toggle("outline-btn");
  }, 200);
}

// My Wallet Currency Data

const currencyData = [
  {
    name: "Name 1",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 2",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 3",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 4",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 5",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 6",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 7",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 8",
    description: "Lorem ipsum dolor",
    contract: "Lorem ipsum dolor",
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
      <p>${currency.description}</p>
    </div>
    <div class="card-actions">
      <div class="card-contract">
        <span>${currency.contract}</span>
        <img src="/images/Copy.svg" alt="Copy" width="16" />
      </div>
      <div class="card-buttons">
        <button id="withdraw-btn">
          <img src="/images/Up.svg" alt="Up" width="12" />
          <span>Send</span>
        </button>
        <button id="deposit-btn">
          <img src="/images/Down.svg" alt="Down" width="12" />
          <span>Receive</span>
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

// My Wallet Collections Data

const nftData = [
  {
    name: "Name 1",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 2",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 3",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 4",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 5",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 6",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 7",
    contract: "Lorem ipsum dolor",
  },
  {
    name: "Name 8",
    contract: "Lorem ipsum dolor",
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
      <span>00</span>
      <img src="/images/Diamond.svg" alt="diamond" width="22" />
    </div>
    <div class="card-actions">
      <div class="card-contract">
        <span>${nft.contract}</span>
        <img src="/images/Copy.svg" alt="Copy" width="16" />
      </div>
      <div class="card-buttons">
        <button>
          <img src="/images/Up.svg" alt="Up" width="12" />
          <span>Send</span>
        </button>
        <button>
          <img src="/images/Down.svg" alt="Down" width="12" />
          <span>Receive</span>
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

// Redirect functions

const withdrawButton = document.getElementById('withdraw-btn');
const depositButton = document.getElementById('deposit-btn');

withdrawButton.addEventListener('click', function() {
  window.location.href = '/withdraw-asset.html';
});

depositButton.addEventListener('click', function() {
  window.location.href = '/deposit-assets.html';
});