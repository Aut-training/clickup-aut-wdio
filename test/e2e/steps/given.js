const { Given } = require('cucumber');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const Context = require('../../data/Context');
var { Before, After } = require('cucumber');

Before('@loginHook', function () {
  LoginPage.open(Context.page.endpoints.login);
  LoginPage.setEmailInput(Context.login.user.email);
  LoginPage.setPasswordInput(Context.login.user.password);
  LoginPage.submitButton.click();
});

After('@deleteList', function () {
  DashboardPage.listSettingsButton.click();
  DashboardPage.deleteButton.click();
  DashboardPage.confirmDeleteButton.waitForExist(3000);
  DashboardPage.confirmDeleteButton.click();
});

Given('user navigates to {string}', function (endpoint) {
  LoginPage.open(endpoint);
});

Given('user is in the main page', function () {
  LoginPage.open(Context.page.endpoints.base);
  browser.deleteCookies();
});
