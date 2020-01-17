const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/LoginPage');
const Context = require('../../data/Context');
const DashboardPage = require('../../e2e/pages/DashboardPage');
const Utils = require('../common/Utils');
const TaskPage = require('../pages/TaskPage');
const SystemInteractions = require('../constants/SystemInteractions');

Given(/^user is in home page$/, function () {
  LoginPage.open(Context.page.endpoints.base);
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(Utils.generateID());
  DashboardPage.boardTab.click();
});

When(/^user clicks "([^"]*)" option in the floating button$/, function (option) {
  DashboardPage.listViewHeader.waitForExist();
  DashboardPage.floatingMenuButton.moveTo();
  DashboardPage.floatingButton(option).click();
});

When(/^user creates a task with the following information$/, function (dataTable) {
  let task = dataTable.rowsHash();
  TaskPage.setFloatingName(task.name);
  browser.pause(500);
  TaskPage.floatingStatusButton.click();
  TaskPage.floatingTaskStatus(task.status.toLowerCase()).click();
  TaskPage.setFloatingDescription(task.description);
  TaskPage.setPriorityButton.click();
  TaskPage.priorityOption(task.priority.toLowerCase()).click();
  TaskPage.createTaskButton.click();
});

Then(/^a card should be shown$/, function (dataTable) {
  browser.pause(5000);
});
