const { Given } = require('cucumber');
const LoginPage = require('../../pages/LoginPage');
const Context = require('../../../data/Context');
var {Before} = require('cucumber');

Before('@loginHook', function () {
  LoginPage.open(Context.page.endpoints.login);
  LoginPage.setEmailInput(Context.login.user.email);
  LoginPage.setPasswordInput(Context.login.user.password);
  LoginPage.submitButton.click();
});

Given('user navigates to {string}', function (endpoint) {
  LoginPage.open(endpoint);
});

Given('user is in the main page', function () {
  LoginPage.open('/');
});
