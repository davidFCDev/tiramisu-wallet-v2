// Function: Display the transaction details on the transaction details page
function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  const paramObj = {};
  for (const [key, value] of params) {
    paramObj[key] = value;
  }
  return paramObj;
}

// Show the transaction details
function displayTransactionDetails() {
  const params = getURLParams();
  // Insert the transaction details
  document.getElementById("assetName").textContent = params.assetName || "";
  document.getElementById("note").textContent = params.note || "";
  document.getElementById("date").textContent = params.date || "";
  document.getElementById("amount").textContent = params.amount || "";
}

displayTransactionDetails();

// Simulate the transaction
function startTransaction() {
  document.getElementById("transaction-start").style.display = "none";
  document.getElementById("transaction-loading").style.display = "flex";

  setTimeout(function () {
    document.getElementById("transaction-loading").style.display = "none";
    document.getElementById("transaction-completed").style.display = "flex";
  }, 2000);
}
