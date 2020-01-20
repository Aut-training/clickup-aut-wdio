const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/LoginPage');
const Context = require('../../data/Context');
const DashboardPage = require('../../e2e/pages/DashboardPage');
const TaskPage = require('../pages/TaskPage');
const TaskAsserts = require('../asserts/Task.assert');

Given(/^user is in home page$/, function () {
  LoginPage.open(Context.page.endpoints.base);
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

When(/^user clicks in "([^"]*)" tab$/, function (tabName) {
  DashboardPage.dashboardTab(tabName).waitForExist();
  DashboardPage.dashboardTab(tabName).click();
});

When(/^user clicks "([^"]*)" option in the view list header$/, function (buttonName) {
  TaskPage.newTaskButton(buttonName).waitForExist();
  TaskPage.newTaskButton(buttonName).click();
});

When(/^user creates the given task$/, function (dataTable) {
  let task = dataTable.rowsHash();
  TaskPage.setTaskNameInput(task.name);
  TaskPage.setPriorityButton.click();
  TaskPage.priorityOption(task.priority.toLowerCase()).click();
  TaskPage.saveTaskButton.click();
});

Then(/^"([^"]*)" should be shown$/, function (taskName) {
  TaskPage.getTaskTitle(taskName).waitForExist();
  TaskAsserts.assertTaskExist(taskName);
});
