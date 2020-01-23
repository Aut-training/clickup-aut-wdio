const TaskAsserts = require('../asserts/Task.assert');
const Context = require('../../data/Context');
const LoginPage = require('../pages/LoginPage');
const { Given, When, Then } = require('cucumber');
const TaskPage = require('../pages/TaskPage');
const DashboardPage = require('../pages/DashboardPage');
const SystemInteractions = require('../constants/SystemInteractions');

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

When(/^user modifies "([^"]*)" fields$/, function (taskName, dataTable) {
  let task = dataTable.rowsHash();
  TaskPage.getTaskInList(taskName).waitForExist(3000);
  TaskPage.getTaskInList(taskName).click();
  let elm = $('.task-name__overlay').getText().length;
  TaskPage.modalName.click();
  for(let i = 0; i < elm; i++) {
    browser.keys(SystemInteractions.BACKSPACE_KEY_PRESS);
  }
  TaskPage.setModalName(task.name);
  TaskPage.modalDescription.click();
  TaskPage.setModalDescription(task.description);
  TaskPage.closeTaskModal.click();
});

Then(/^"([^"]*)" values should be$/, function (taskName, dataTable) {
  let task = dataTable.rowsHash();
  TaskPage.getTaskInList(taskName).waitForExist(3000);
  TaskPage.getTaskInList(taskName).click();
  TaskAsserts.assertName(task.name);
  TaskAsserts.assertDescription(task.description);
  TaskPage.closeTaskModal.click();
});
