# qnamaker-client
QnA Maker client for Node.js


###Getting Started:

```
npm install --save git+https://git@github.com/CatalystCode/qnamaker-client.git
```


###Example:

```javascript
var QnAClient = require('qnamaker-client').Client;

var qnaClient = new QnAClient({
    serviceUrl: 'QnA service Url'
});

// using cb pattern
qnaClient.get({ question: question }, function(err, result) {
    if (err) return console.error('error from callback:', err);
    console.log('got result (using callback):', result);
});

// using promises
qnaClient.get({ question: question }).then(function(result) {
    console.log('got result (using promises):', result);
})
.catch((err) => {
    console.log('error from promis:', err);
})
```


# License
[MIT](LICENSE)
