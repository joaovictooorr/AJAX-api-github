document.addEventListener("DOMContentLoaded", () => {
    const githubUsername = "joaovictooorr"; 
    
    fetch(`https://api.github.com/users/${githubUsername}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").textContent = data.name;
            document.getElementById("username").textContent = `@${data.login}`;
            document.getElementById("repos").textContent = data.public_repos;
            document.getElementById("followers").textContent = data.followers;
            document.getElementById("following").textContent = data.following;
            document.getElementById("link").href = data.html_url;
            document.querySelector(".profile-avatar").src = data.avatar_url;
        })
        .catch(error => console.error('Erro ao buscar dados do GitHub:', error));
});