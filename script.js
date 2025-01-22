/* Back-To-Top & Progress Start */
const btt = document.querySelector(".back-to-top");
const progress = document.getElementById("progress");

const at_top_mode = () => {
  btt.style.display = "none";
};
at_top_mode();

const scroll_mode = () => {
  btt.style.display = "block";
};

const scroll_progress = () => {
  if (progress) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  }
};

window.addEventListener("load", scroll_progress, true);

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY === 0) {
      at_top_mode();
    } else {
      scroll_mode();
    }
    scroll_progress();
  },
  true
);
/* Back-To-Top & Progress End */

// theme switch
document.getElementById("themeSwitch").addEventListener("click", (e) => {
  const isDark = e.target.classList.toggle("dark");
  e.target.parentElement.style.setProperty(
    "--bg-col",
    isDark ? "#333" : "#eee"
  );
});
