const Context = require('../../data/Context');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
var { Before, After } = require('cucumber');
const Utils = require('../common/Utils');

Before('@loginHook', function () {
  LoginPage.open(Context.page.endpoints.login);
  LoginPage.setEmailInput(Context.login.user.email);
  LoginPage.setPasswordInput(Context.login.user.password);
  LoginPage.submitButton.click();
  DashboardPage.addListButton.waitForExist(5000);
});

Before('@createList', function () {
  DashboardPage.addListButton.moveTo();
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(Utils.generateID());
  DashboardPage.addListButton.click();
});

After('@deleteList', function () {
  DashboardPage.listSettingsButton.moveTo();
  DashboardPage.listSettingsButton.click();
  DashboardPage.deleteButton.click();
  DashboardPage.confirmDeleteButton.waitForClickable(5000);
  DashboardPage.confirmDeleteButton.click();
});
