import config from '../config'

const NewsApiService = {
  getTopHeadlines(sources) {
    return fetch(`${config.NEWS_API_ENDPOINT}/top-headlines?sources=${sources}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${config.NEWS_API_KEY}`
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getSearchResults(searchTerm, sources) {
    return fetch(`${config.NEWS_API_ENDPOINT}/everything?q=${searchTerm}&sources=${sources}&language=en`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${config.NEWS_API_KEY}`
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json.then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default NewsApiService;