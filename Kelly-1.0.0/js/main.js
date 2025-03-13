fetch("data/main.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("sitename").textContent = data.sitename;
  })
  .catch(error => console.error("Error loading data:", error));
