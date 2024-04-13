document.addEventListener("DOMContentLoaded", function () {
    const depositButton = document.getElementById("depositButton");
    const withdrawButton = document.getElementById("withdrawButton");
  
    depositButton.addEventListener("click", function () {
      window.location.href = "deposit-assets.html"; // Redirige a deposit-assets.html
    });
  
    withdrawButton.addEventListener("click", function () {
      window.location.href = "withdraw-asset.html"; // Redirige a withdraw-asset.html
    });
  });
  