const { Given } = require('cucumber');
const LoginPage = require('../../pages/LoginPage');

Given('user navigates to {string}', function (endpoint) {
  LoginPage.open(endpoint);
});