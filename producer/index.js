const AWS = require('aws-sdk')
AWS.config.region = process.env.AWS_REGION || 'us-east-1'
const eventbridge = new AWS.EventBridge()

exports.handler = async (event, context) => {
  // Do some work...
  // And now create the event...

  const { params } = require('./events.js')

  console.log('--- Params ---')
  console.log(params)
  const result = await eventbridge.putEvents(params).promise()

  console.log('--- Response ---')
  console.log(result)
}