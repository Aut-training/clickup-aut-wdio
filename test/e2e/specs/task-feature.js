const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const Context = require('../../data/Context');
const Utils = require('../common/Utils');
const TaskAssert = require('../asserts/Task.assert');
const ApiActions = require('../common/ApiActions');

describe('New Task', () => {

  before(() => {
    LoginPage.open(Context.page.endpoints.login);
    LoginPage.setEmailInput(Context.login.user.email);
    LoginPage.setPasswordInput(Context.login.user.password);
    LoginPage.submitButton.click();
  });

  after(() => {
    DashboardPage.listSettingsButton.click();
    DashboardPage.deleteButton.click();
    DashboardPage.confirmDeleteButton.waitForExist(3000);
    browser.pause(1000);
    DashboardPage.confirmDeleteButton.click();
    browser.pause(1000);
  });

  it('should create a task', () => {
    DashboardPage.addListButton.click();
    DashboardPage.newListButton.click();
    DashboardPage.setNewListInput(Utils.generateID() + '\n');
    DashboardPage.setTaskName(Context.task.title);
    DashboardPage.saveTaskButton.click();
    TaskAssert.assertTask();
    TaskAssert.confirmationMessage();
  });

  it('should drag and drop a task', () => {
    DashboardPage.boardTab.click();
    DashboardPage.taskCard.waitForExist(3000);
    DashboardPage.taskCard.click();
    ApiActions.moveToComplete(browser.getUrl());
    DashboardPage.taskCloseIcon.waitForExist(3000);
    DashboardPage.taskCloseIcon.click();
    browser.pause(7000);
  });
});
