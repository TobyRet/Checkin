require('es6-promise').polyfill()
require('isomorphic-fetch')

function getPullRequests() {
  return [
    {
      'id': '1234',
      'createdAt': '12 Jan 2017',
      'html_url': 'http://github.com/mergermarket/inte-search-service/pull/1347',
      'title': 'First New Feature'
    },
    {
      'id': '1235',
      'createdAt': '12 Jan 2017',
      'html_url': 'http://github.com/mergermarket/inte-search-indexer/pull/1234',
      'title': 'Fix for bug'
    }
  ]
}

module.exports = {getPullRequests}
