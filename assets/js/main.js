document.getElementById("lead-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = { email: e.target.email.value };

  const res = await fetch("https://landing-pages-worker.agrawalchaitany.workers.dev/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const text = await res.text();
  console.log("Worker response:", text);

  if (res.ok) {
    alert("Thanks! We'll be in touch.");
    e.target.reset();
  } else {
    alert("Something went wrong: see console");
  }

});