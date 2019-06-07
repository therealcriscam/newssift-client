import config from '../config'
import TokenService from './token-service'

const SubscriptionsApiService = {
  postSubscription(source_id, source_name) {
    return fetch(`${config.API_ENDPOINT}/subscriptions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        source_id,
        source_name
      }),
    })
      .then(res => 
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getUserSubscriptions() {
    return fetch(`${config.API_ENDPOINT}/subscriptions`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default SubscriptionsApiService;