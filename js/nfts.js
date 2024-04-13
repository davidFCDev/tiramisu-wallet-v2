// NFTs Cards Data
const nftsData = [
  {
    name: "Name 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
  {
    name: "Name 12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    percent: "00%",
    mc: "1125.9455539205 SAT / 1 AC",
  },
];

const nftsCardContainer = document.getElementById("nftsCardContainer");

nftsData.forEach((data) => {
  const cardHTML = `
        <div class="card">
          <div class="image-container">
            <img src="/images/no-image2.svg" alt="No image" />
          </div>
          <div class="card-content">
            <div class="card-text">
                <h4>${data.name}</h4>
                <p>${data.description}</p>
            </div>
            <div class="card-features">
                <div class="card-feature">
                <p>00</p>
                <img src="/images/Light.svg" alt="Light" width="12" />
                </div>
                <div class="card-feature">
                <p>00</p>
                <img src="/images/Contract.svg" alt="Contract" width="12" />
                </div>
            </div>
            <button class="card-btn">
                <img src="/images/Buy.svg" alt="Buy" width="12" />
                <h2>BUY</h2>
            </button>
          </div>
        </div>
      `;
  nftsCardContainer.innerHTML += cardHTML;
});

// NFTs Responsive Cards

const responsiveNftsCardContainer = document.getElementById(
  "responsiveNftsCardContainer"
);

nftsData.forEach((data) => {
  const cardHTML = `
  <div class="responsive-card">
  <div class="image-container">
    <img src="/images/no-image.svg" alt="No image" />
  </div>
  <div class="text-container">
    <div class="card-text">
      <h4>${data.name}</h4>
      <p>${data.description}</p>
    </div>
    <div class="card-content">
      <div class="card-features">
        <div class="card-feature">
          <p>00</p>
          <img src="/images/Light.svg" alt="Light" width="12" />
        </div>
        <div class="card-feature">
          <p>00</p>
          <img src="/images/Contract.svg" alt="Contract" width="12" />
        </div>
      </div>
      <button class="card-btn">
        <h3>
          <img
            src="/images/DarkBlueWallet.svg"
            alt="Wallet"
            width="14"
          />
          BUY
        </h3>
      </button>
    </div>
  </div>
</div>
      `;
  responsiveNftsCardContainer.innerHTML += cardHTML;
});
