const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'

// This is sample build hook
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/64305f80fd33ef0994ae0437'

// Schedule the handler function to run daily
const handler = schedule('* * * * *', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then((response) => {
    console.log('Build hook response:', response.json())
  })

  return {
    statusCode: 200
  }
}

export {
  handler
}
