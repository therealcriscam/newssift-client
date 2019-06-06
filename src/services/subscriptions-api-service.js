import config from '../config'
import TokenService from './token-service'

const SubscriptionsApiService = {
  postSubscription(source_id, source_name) {
    return fetch(`${config.API_ENDPOINT}/subscriptions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorizaton': `bearer ${TokenService.getAuthToken()}`
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

  },
}

export default SubscriptionsApiService;