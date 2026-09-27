document.querySelectorAll(".theme-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    if (dark) {
      delete document.documentElement.dataset.theme;
      localStorage.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
      localStorage.theme = "dark";
    }
  });
});
