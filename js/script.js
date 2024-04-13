// Routes
function redirectToPage(select) {
  var selectedOption = select.options[select.selectedIndex];
  var selectedValue = selectedOption.value;

  if (selectedValue === "currencies") {
    window.location.href = "/currencies.html";
  } else if (selectedValue === "collections") {
    window.location.href = "/collections.html";
  } else if (selectedValue === "nfts") {
    window.location.href = "/nfts.html";
  } else {
    window.location.href = "/index.html";
  }
}

/** Register */

function register() {
  window.location.href = "/dashboard.html";
}

/** Login */

function login() {
  window.location.href = "/dashboard.html";
}

/** Route select */

document.addEventListener("DOMContentLoaded", function () {
  const assetsDropdown = document.querySelector(".assets-dropdown");

  const routeModal = assetsDropdown.querySelector(".route-modal");

  assetsDropdown.addEventListener("click", function () {
    if (
      routeModal.style.display === "" ||
      routeModal.style.display === "none"
    ) {
      routeModal.style.display = "flex";
    } else {
      routeModal.style.display = "none";
    }
  });
});

/** Notifications modal */

document.addEventListener("DOMContentLoaded", function () {
  const notificationIcons = document.querySelectorAll(".notification-icon");

  const modal = document.querySelector(".notifications-modal");

  notificationIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      if (modal.style.display === "flex") {
        modal.style.display = "none";
      } else {
        modal.style.display = "flex";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const notificationIcons = document.querySelectorAll(
    ".responsive-notification-icon"
  );

  const modal = document.querySelector(".responsive-notifications-modal");

  notificationIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      if (modal.style.display === "flex") {
        modal.style.display = "none";
      } else {
        modal.style.display = "flex";
      }
    });
  });
});

/** Profile modal */

document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.getElementById("dropDown");
  const profileModal = document.querySelector(".user-modal");

  profileIcon.addEventListener("click", function () {
    if (
      profileModal.style.display === "" ||
      profileModal.style.display === "none"
    ) {
      profileModal.style.display = "flex";
    } else {
      profileModal.style.display = "none";
    }
  });
});

/** QR modal */

document.addEventListener("DOMContentLoaded", function () {
  const qrButtons = document.querySelectorAll(".qr-btn");
  const qrModal = document.querySelector(".qr-box");

  qrButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      qrModal.style.display = "flex";
    });
  });

  const qrCloseButton = document.getElementById("closeIcon");

  qrCloseButton.addEventListener("click", function () {
    qrModal.style.display = "none";
  });

  const closeButton = document.querySelectorAll(".btn-close");

  closeButton.forEach(function (button) {
    button.addEventListener("click", function () {
      qrModal.style.display = "none";
    });
  });
});

/** Confirmation modal */

document.addEventListener("DOMContentLoaded", function () {
  const actionButtons = document.querySelectorAll(".action-btn");
  const confirmationModal = document.querySelector(".asset-modal");

  actionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      confirmationModal.style.display = "flex";
    });
  });

  const confirmationCloseBtn = document.getElementById("closeIcon");

  confirmationCloseBtn.addEventListener("click", function () {
    confirmationModal.style.display = "none";
  });
});

/** Menu modal */

document.addEventListener("DOMContentLoaded", function () {
  const actionButtons = document.querySelectorAll(".menu-btn");
  const confirmationModal = document.querySelector(".menu-modal");

  actionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const isModalVisible = confirmationModal.style.display === "flex";

      if (isModalVisible) {
        confirmationModal.style.display = "none";
      } else {
        confirmationModal.style.display = "flex";
      }
    });
  });
});

/** Responsive Menu modal */

document.addEventListener("DOMContentLoaded", function () {
  const actionButtons = document.querySelectorAll(".responsive-menu-btn");
  const confirmationModal = document.querySelector(".responsive-menu-modal");

  actionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const isModalVisible = confirmationModal.style.display === "flex";

      if (isModalVisible) {
        confirmationModal.style.display = "none";
        button.querySelector("img").src = "/images/Menu.svg"; 
      } else {
        confirmationModal.style.display = "flex";
        button.querySelector("img").src = "/images/BlueMenu.svg";
      }
    });
  });
});
