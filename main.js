const notification = document.querySelectorAll(".notification");
const badge = document.querySelector(".badge");
const dot = document.querySelectorAll(".unread-dot");
const read = document.querySelector(".read-activation");

read.addEventListener("click", () => {
  notification.forEach((notification) =>
    notification.classList.remove("unread")
  );
  dot.forEach((dot) => (dot.style.display = "none"));
  badge.innerHTML = "0";
});
