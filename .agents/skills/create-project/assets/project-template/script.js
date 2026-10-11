const button = document.querySelector("#action-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = button.dataset.message;
});
