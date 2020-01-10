const { Then } = require('cucumber');
const assert = require('chai').assert;
const LoginAssert = require('../../asserts/Login.assert');
const BoardPage = require('../../pages/BoardPage');
const TaskAsserts = require('../../asserts/Task.assert');

Then('user should be redirected to ClickUp\'s home page', function () {
  LoginAssert.assertLogin();
});

Then('{string} should be in TO DO board and {string} in COMPLETE board',
  function (taskName1, taskName2) {
    assert.equal(BoardPage.toDoTaskTitle.getText(), taskName1);
    assert.equal(BoardPage.completeTaskTitle.getText(), taskName2);
  });

Then('the following tasks should be created:', function (dataTable) {
  let tasks = dataTable.hashes();
  browser.pause(2000);
  for(let i = 0; i < tasks.length; i++) {
    TaskAsserts.assertTaskExist(tasks[i].TO_DO);
    TaskAsserts.assertTaskExist(tasks[i].IN_PROGRESS);
    TaskAsserts.assertTaskExist(tasks[i].COMPLETE);
  }
});
