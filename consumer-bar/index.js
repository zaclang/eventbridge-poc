exports.handler = async (event) => {
  console.log('--- Consumer Bar Received: ---')
  console.log(JSON.stringify(event, null, 2))
}