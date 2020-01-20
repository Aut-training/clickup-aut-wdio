const Context = require('../../data/Context');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
const Utils = require('../common/Utils');
var { Before, After } = require('cucumber');

Before('@loginHook', function () {
  LoginPage.open(Context.page.endpoints.login);
  LoginPage.setEmailInput(Context.login.user.email);
  LoginPage.setPasswordInput(Context.login.user.password);
  LoginPage.submitButton.click();
});

After('@logoutHook', function () {
  LoginPage.profileButton.click();
  LoginPage.logoutLink.click();
});

Before('@createList', function () {
  DashboardPage.addListButton.moveTo();
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(Utils.generateID());
  DashboardPage.boardTab.click();
});

After('@deleteList', function () {
  DashboardPage.listSettingsButton.moveTo();
  DashboardPage.listSettingsButton.click();
  DashboardPage.deleteButton.click();
  browser.pause(1000);
  DashboardPage.confirmDeleteButton.click();
});
