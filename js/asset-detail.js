// Asset list
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".list-assets");

  for (let i = 0; i < 4; i++) {
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
        <button class="btn">BUY</button>
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

// Responsive Asset List

document.addEventListener("DOMContentLoaded", () => {
  const responsiveContainer = document.querySelector(".responsive-list-assets");

  for (let i = 0; i < 4; i++) {
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
        <button class="btn">BUY</button>
      </div>
      `;

    responsiveContainer.appendChild(newAssetItem);
  }
});
