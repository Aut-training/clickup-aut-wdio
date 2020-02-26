const { When, Then } = require('cucumber');
const DashboardPage = require('../../pages/DashboardPage');
const TaskPage = require('../../pages/TaskPage');
const TaskAsserts = require('../../asserts/Task.assert');

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

Then(/^"([^"]*)" should be shown$/, function (taskName) {
  TaskPage.getTaskInList(taskName).waitForExist();
  TaskAsserts.assertTaskInList(taskName);
});
