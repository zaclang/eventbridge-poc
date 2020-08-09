
module.exports.params = {
  Entries: [
    {
      // Event envelope fields
      Source: 'custom.myATMapp',
      EventBusName: 'acloudguru-gdpr',
      DetailType: 'transaction',
      Time: new Date(),

      // Main event body
      Detail: JSON.stringify({
        action: 'withdrawal',
        location: 'MA-BOS-01',
        amount: 300,
        result: 'approved',
        transactionId: '123456',
        cardPresent: true,
        partnerBank: 'Example Bank',
        remainingFunds: 722.34
      })
    },
    {
      // Event envelope fields
      Source: 'custom.myATMapp',
      EventBusName: 'default',
      DetailType: 'transaction',
      Time: new Date(),

      // Main event body
      Detail: JSON.stringify({
        action: 'withdrawal',
        location: 'NY-NYC-001',
        amount: 20,
        result: 'approved',
        transactionId: '123457',
        cardPresent: true,
        partnerBank: 'Example Bank',
        remainingFunds: 212.52
      })
    }
  ]
}