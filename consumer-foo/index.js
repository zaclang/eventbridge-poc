exports.handler = async (event) => {
  console.log('--- Consumer Foo Received: ---')
  console.log(JSON.stringify(event, null, 2))
}