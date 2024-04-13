// Transactions DATA
const transactionsData = [
  {
    assetName: "Asset 1",
    note: "Lorem Ipsum",
    date: "Asset Name",
    amount: "100 SAT",
  },
  {
    assetName: "Asset 2",
    note: "Lorem Ipsum",
    date: "Asset Name",
    amount: "200 SAT",
  },
  {
    assetName: "Asset 3",
    note: "Lorem Ipsum",
    date: "Asset Name",
    amount: "300 SAT",
  },
  {
    assetName: "Asset 4",
    note: "Lorem Ipsum",
    date: "Asset Name",
    amount: "400 SAT",
  },
];

const container = document.querySelector(".transactions-container");

transactionsData.forEach((data, index) => {
  const transaction = document.createElement("div");
  transaction.classList.add("transaction");

  transaction.innerHTML = `
    <div class="transaction-name">
      <img src="/images/Transaction.svg" alt="Transaction" width="50" />
      <div class="name-text">
        <div>
          <h3>${data.assetName}</h3>
          <span>SAT</span>
        </div>
        <div>
          <h3>Note:</h3>
          <span>${data.note}</span>
        </div>
      </div>
    </div>
    <div class="transaction-detail">
      <h4>Date</h4>
      <p>${data.date}</p>
    </div>
    <button class="btn" onclick="redirectToDetailPage(${index})">DETAIL</button>
    <div class="transaction-detail">
      <h4>Amount</h4>
      <p>${data.amount}</p>
    </div>
  `;

  container.appendChild(transaction);
});

// Responsive Transaction

const responsiveContainer = document.querySelector(".responsive-transactions-container");

transactionsData.forEach((data, index) => {
  const transaction = document.createElement("div");
  transaction.classList.add("responsive-transaction");

  transaction.innerHTML = `
    <div class="responsive-transaction-details">
      <div class="responsive-transaction-detail">
        <h3>${data.assetName}</h3>
        <span>SAT</span>
      </div>
      <div class="responsive-transaction-detail">
        <h4>Date</h4>
        <p>${data.date}</p>
      </div>
      <div class="responsive-transaction-detail">
        <h4>Amount</h4>
        <p>${data.amount}</p>
      </div>
      <div class="responsive-transaction-detail">
        <h4>Note:</h4>
        <p>${data.note}</p>
      </div>
    </div>
    <div class="responsive-transaction-actions">
      <img src="/images/BlueArrows.svg" alt="Transaction" width="100px"/>
      <button class="btn" onclick="redirectToDetailPage(${index})">DETAIL</button>
    </div>
  `;

  responsiveContainer.appendChild(transaction);
});

// Redirect to transaction detail page

function redirectToDetailPage(index) {
  const selectedTransaction = transactionsData[index];
  const queryParams = new URLSearchParams();
  queryParams.append("assetName", selectedTransaction.assetName);
  queryParams.append("note", selectedTransaction.note);
  queryParams.append("date", selectedTransaction.date);
  queryParams.append("amount", selectedTransaction.amount);
  window.location.href = "transaction-detail.html?" + queryParams.toString();
}
