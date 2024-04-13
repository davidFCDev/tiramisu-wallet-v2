// Currencies Cards Data
const currenciesData = [
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

const currenciesCardContainer = document.getElementById(
  "currenciesCardContainer"
);

currenciesData.forEach((data) => {
  const cardHTML = `
        <div class="card">
          <div class="image-container">
            <img src="/images/no-image.svg" alt="No image" />
          </div>
          <div class="card-text">
            <h4>${data.name}</h4>
            <p>${data.description}</p>
          </div>
          <div class="card-description">
            <div class="card-chart">
              <p class="card-percent">${data.percent}</p>
              <img src="/images/Chart.png" alt="chart" width="26" />
            </div>
            <div class="card-mc">
              <p>Current market price</p>
              <span>${data.mc}</span>
            </div>
          </div>
          <div class="card-features">
            <div class="card-feature">
              <p>00</p>
              <img src="/images/User.svg" alt="User" width="14" />
            </div>
            <div class="card-feature">
              <p>00</p>
              <img src="/images/Light.svg" alt="Light"  width="12" />
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
      `;
  currenciesCardContainer.innerHTML += cardHTML;
});

// Responsive Currency Cards

const responsiveCurrenciesCardContainer = document.getElementById(
  "responsiveCurrenciesCardContainer"
);

currenciesData.forEach((data) => {
  const cardHTML = `
  <div class="responsive-card">
  <div class="image-container">
    <img src="/images/no-image.svg" alt="No image" />
  </div>
  <div class="first-row">
    <div class="card-text">
      <h4>${data.name}</h4>
      <p>${data.description}</p>
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
  <hr class="line" />
  <div class="card-description">
    <div class="card-chart">
      <p class="card-percent">${data.percent}</p>
      <img src="/images/Chart.png" alt="chart" />
    </div>
    <div class="card-mc">
      <p>Current market price</p>
      <span>${data.mc}</span>
    </div>
  </div>
  <hr class="line" />
  <div class="card-features">
    <div class="card-feature">
      <p>00</p>
      <img src="/images/User.svg" alt="User" width="12" />
    </div>
    <div class="card-feature">
      <p>00</p>
      <img src="/images/Light.svg" alt="Light" width="12" />
    </div>
    <div class="card-feature">
      <p>00</p>
      <img src="/images/Contract.svg" alt="Contract" width="12" />
    </div>
  </div>
</div>
        `;
  responsiveCurrenciesCardContainer.innerHTML += cardHTML;
});
