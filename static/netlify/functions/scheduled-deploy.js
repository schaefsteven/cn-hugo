const fetch = require('node-fetch')
import { Handler, HandlerEvent, HandlerContext, schedule } from '@netlify/functions'

// This is sample build hook
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/64305f80fd33ef0994ae0437'

const myHandler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then((response) => {
    console.log('Build hook response:', response.json())
  })

    return {
        statusCode: 200,
    };
};

const handler = schedule("* * * * *", myHandler)

export {
  handler
}
