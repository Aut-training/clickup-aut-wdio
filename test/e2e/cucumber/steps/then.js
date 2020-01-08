const { Then } = require('cucumber');
const assert = require('chai').assert;
const LoginAssert = require('../../asserts/Login.assert');
const BoardPage = require('../../pages/BoardPage');

Then('user should be redirected to ClickUp\'s home page', function () {
  LoginAssert.assertLogin();
});

Then('user should {string} in TO DO board and {string} in COMPLETE board',
  function (taskName1, taskName2) {
    assert.equal(BoardPage.toDoTaskTitle.getText(), taskName1);
    assert.equal(BoardPage.completeTaskTitle.getText(), taskName2);
  });
