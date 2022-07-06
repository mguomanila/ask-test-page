const URL = {
  api: 'https://deep-index.moralis.io/api/v2',
  transaction: 'transaction',
}

interface Config {
  get_param: string
  method: string
  wallet: string
}

export async function ajax(key: string, config: Config) {
  let url = key.includes('transaction')
    ? URL.api + '/' + URL.transaction
    : key.includes('api')
      ? URL.api
    : ''
  url += `/${config.wallet}/${config.get_param}`
  console.log(`url:${url}`)
  const response = await fetch(
    url,
    {
      method: config.method,
      headers: {
        accept: 'application/json',
        'X-API-Key': process.env.X_API_KEY
      }
    }
  )

  return await response.json()
}
