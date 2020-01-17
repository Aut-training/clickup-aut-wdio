const Context = require('../../data/Context');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
const Utils = require('../common/Utils');
const SystemInteractions = require('../../e2e/constants/SystemInteractions');
var { Before, After } = require('cucumber');

Before('@loginHook', function () {
  LoginPage.open(Context.page.endpoints.login);
  LoginPage.setEmailInput(Context.login.user.email);
  LoginPage.setPasswordInput(Context.login.user.password);
  LoginPage.submitButton.click();
});

Before('@createListHook', function () {
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(Utils.generateID);
  browser.keys(SystemInteractions.ENTER_KEY_PRESS);
});

After('@deleteList', function () {
  DashboardPage.listSettingsButton.click();
  DashboardPage.deleteButton.click();
  DashboardPage.confirmDeleteButton.waitForExist(3000);
  DashboardPage.confirmDeleteButton.click();
});
