document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  if (!btn) return;

  // Load saved theme
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    root.classList.add("dark");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }

  // Toggle theme
  btn.addEventListener("click", () => {
    root.classList.toggle("light");
    const isDark = root.classList.contains("blue");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️" : "🌙";
  });
});


emailjs.send("SERVICE_ID","TEMPLATE_ID",{
  name:"Test",
  email:"test@email.com",
  message:"Test message"
});
