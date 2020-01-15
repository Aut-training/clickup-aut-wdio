const LoginAssert = require('../../asserts/Login.assert');
const TaskAsserts = require('../../asserts/Task.assert');
import { assert} from 'chai';
import { Given, When, Then } from 'cucumber';

Then('user should be redirected to ClickUp\'s home page', function () {
  LoginAssert.assertLogin();
});

Then('{string} should be in TO DO board and {string} in COMPLETE board',
  function (taskName1, taskName2) {
    TaskAsserts.taskInBoard(taskName1, taskName2);
  });

Then('the following tasks should be visible:', function (dataTable) {
  let tasks = dataTable.raw();
  tasks.forEach(elm => TaskAsserts.assertTaskExist(elm));
});
