### clickup-aut-wdio

![N|Solid](https://wp.static-cdn-shsp.com/wp-content/uploads/2018/06/On_white_hor.png)

Install all the dependencies:
```sh
$ npm install
```

To run the tests execute the following command:
```sh
$ npm run test
```

In order to run the tests in Microsoft Edge set `browserName` property to `browserName: 'MicrosoftEdge',` in `wdio.conf.js` and then execute the following commands:
```sh
$ npm run start-edgedriver
$ npm run test
$ npm run stop-edgedriver
```
