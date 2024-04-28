const toggle_btn = document.querySelector(".toggle_btn");
const dropdown = document.querySelector(".dropdown");
const toggleicon = document.querySelector(".gg-format-justify");
if (toggle_btn != null) {
  toggle_btn.onclick = () => {
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
      toggleicon.className = "gg-close";
    } else {
      dropdown.style.display = "none";
      toggleicon.className = "gg-format-justify";
    }
  };
}
