const Context = require('../../data/Context');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
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
  DashboardPage.confirmDeleteButton.waitForClickable(5000);
  DashboardPage.confirmDeleteButton.click();
});
