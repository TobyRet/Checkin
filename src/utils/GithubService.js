
function fetchCommits(url) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, headers)
    .then(response => response.json())
}

module.exports = {fetchCommits}
