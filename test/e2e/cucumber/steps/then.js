const { Then } = require('cucumber');
const LoginAssert = require('../../asserts/Login.assert');
const TaskAsserts = require('../../asserts/Task.assert');

Then('user should be redirected to ClickUp\'s home page', function () {
  LoginAssert.assertLogin();
});

Then('{string} should be in TO DO board and {string} in COMPLETE board',
  function (taskName1, taskName2) {
    TaskAsserts.taskInBoard(taskName1, taskName2);
  });

Then('the following tasks should be created:', function (dataTable) {
  let tasks = dataTable.hashes();
  browser.pause(1000);
  for(let i = 0; i < tasks.length; i++) {
    TaskAsserts.assertTaskExist(tasks[i].TO_DO);
    TaskAsserts.assertTaskExist(tasks[i].IN_PROGRESS);
    TaskAsserts.assertTaskExist(tasks[i].COMPLETE);
  }
});
