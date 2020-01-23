const TaskAsserts = require('../asserts/Task.assert');
const Context = require('../../data/Context');
const LoginPage = require('../pages/LoginPage');
const { Given, When, Then } = require('cucumber');
const TaskPage = require('../pages/TaskPage');
const DashboardPage = require('../pages/DashboardPage');

Given(/^user is in home page$/, function () {
  LoginPage.open(Context.page.endpoints.base);
  DashboardPage.listViewHeader.waitForExist();
});

When(/^user creates a task$/, function (dataTable) {
  let task = dataTable.rowsHash();
  DashboardPage.floatingMenuButton.click();
  TaskPage.setFloatingName(task.name);
  TaskPage.setFloatingDescription(task.description);
  TaskPage.setPriorityButton.click();
  TaskPage.priorityOption(task.priority.toLowerCase()).click();
  TaskPage.floatingStatusButton.click();
  TaskPage.floatingTaskStatus(task.status.toLowerCase()).click();
  TaskPage.createTaskButton.click();
});

When(/^user removes "([^"]*)"$/, function (taskName) {
  browser.pause(1000);
  TaskPage.getTaskInList(taskName).click();
  TaskPage.taskSettingsButton.click();
  TaskPage.deleteButton.click();
});

Then(/^user should not see "([^"]*)" in the list$/, function (taskName) {
  TaskAsserts.toastMessage(taskName);
});
