const username = "m86dosti";
const apiUrl = `https://api.github.com/users/${username}/repos`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const projectsContainer =
      document.getElementById("github-projects");

    const starredRepos = data.filter(
      (repo) => repo.stargazers_count > 0
    );

    starredRepos.forEach((repo) => {
      const repoCard = `
                <div class="github-card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "بدون توضیحات"}</p>
                    <div class="repo-stats">
                        <span><i class="fas fa-star"></i> ${
                          repo.stargazers_count
                        }</span>
                        <span><i class="fas fa-code-branch"></i> ${
                          repo.forks_count
                        }</span>
                        <span><i class="fas fa-circle"></i> ${
                          repo.language || "نامشخص"
                        }</span>
                    </div>
                    <a href="${
                      repo.html_url
                    }" target="_blank">مشاهده در گیت‌هاب</a>
                </div>
            `;
      projectsContainer.innerHTML += repoCard;
    });
  })
  .catch((error) => {
    console.error("خطا در دریافت اطلاعات گیت‌هاب:", error);
  });