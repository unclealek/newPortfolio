export async function getGithubProjects() {
  const username = 'unclealek'; // Replace with your GitHub username
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const projects = await response.json();
  
  return projects.map((project: any) => ({
    name: project.name,
    description: project.description,
    url: project.html_url,
    stars: project.stargazers_count,
    language: project.language
  }));
}