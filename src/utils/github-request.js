const reqUrl = 'https://api.github.com/users/jtschams/repos';

const repoRequest = async () => {
  const result = await fetch(reqUrl);
  const userRepos  = result.map((repo) => {
    const nameParts = repo.name.split('-');
    const name = nameParts.map((part) => {
      const splitPart = part.toLowerCase().split();
      splitPart[0] = splitPart[0].toUpperCase();
      return splitPart.join();
    }).join(' ');
    return {
      name,
      description: repo.description,
      website: repo.homepage,
      github: repo.html_url
    }
  })
}

export default repoRequest;