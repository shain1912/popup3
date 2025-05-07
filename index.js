const modal = document.getElementById("modal");
const modalCloseButton = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});

modalCloseButton.addEventListener("click", function () {
  console.log("hi");
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  //   const email = consentFormData.get("email");

  modalText.innerHTML = `<div class="modal-inner-loading">
   <img src="images/loading.svg" class="loading">
   <p id="upload-text">Uploading your data to the dark web...</p>
 </div>`;
  setTimeout(function () {
    const uploadText = document.getElementById("upload-text");
    uploadText.innerText = "Making the sale...";
  }, 1500);

  setTimeout(function () {
    const modalInner = document.getElementById("modal-inner");
    modalInner.innerHTML = `<h2>고맙습니다 ${name}</h2>
  <p>개인정보를 모두 팔아넘겼습니다</p>
  <div class="idiot-gif"> <img src="images/pirate.gif"></div>`;
    modalCloseButton.disabled = false;
  }, 3000);
});
