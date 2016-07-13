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

// using callback pattern
qnaClient.get({ question: question }, function(err, result){
    console.log('got result:', result);
});

// using promises
qnaClient.get({ question: question }).then(function(result) {
    console.log('got result:', result);
    return getQuestion();
});
```


# License
[MIT](LICENSE)
