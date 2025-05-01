function loadHTML(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("nav-placeholder", "nav.html");
  loadHTML("footer-placeholder", "footer.html");
});
