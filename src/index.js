const showButton = document.querySelector("#show-register");
showButton.addEventListener("click", function () {
  const registerDialog = document.querySelector("#register-plant");
  registerDialog.style = "display: flex";
  registerDialog.showModal();
});
