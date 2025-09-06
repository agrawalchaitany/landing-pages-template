document.getElementById("lead-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = { email: e.target.email.value };

  const res = await fetch("https://landing-pages-template.pages.dev/pages/promo1/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Thanks! We'll be in touch.");
    e.target.reset();
  } else {
    alert("Something went wrong.");
  }
});