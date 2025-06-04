document.addEventListener("DOMContentLoaded", function () {
    const username = "wasif-exe"; 
    const repoContainer = document.getElementById("project-cards");

    fetch(`https://api.github.com/users/${username}/repos?sort=stargazers_count&direction=desc`)
        .then(response => response.json())
        .then(repos => {
            repoContainer.innerHTML = "";
            repos.forEach((repo, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.style.backgroundColor = index % 2 === 0 ? "#3b82f6" : "#22c55e"; 
                card.innerHTML = `
                    <p class="tip">${repo.name}</p>
                    <p class="second-text">${repo.description || "No description available."}</p>
                `;
                card.onclick = () => window.open(repo.html_url, "_blank");
                repoContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching repositories:", error);
            repoContainer.innerHTML = "<p>Error loading projects.</p>";
        });
});
