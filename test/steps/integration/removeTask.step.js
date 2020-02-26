const TaskAsserts = require('../../asserts/Task.assert');
const { When, Then } = require('cucumber');
const TaskPage = require('../../pages/TaskPage');

When(/^user removes "([^"]*)"$/, function (taskName) {
  browser.pause(1000);
  TaskPage.getTaskInList(taskName).click();
  TaskPage.taskSettingsButton.click();
  TaskPage.deleteButton.click();
});

Then(/^user should not see "([^"]*)" in the list$/, function (taskName) {
  TaskAsserts.toastMessage(taskName);
  TaskAsserts.taskDoesNotExist(taskName);
});
