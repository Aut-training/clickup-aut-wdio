const assert = require('chai').assert;
const DashboardPage = require('../pages/DashboardPage');
const SystemLabels = require('../constants/SystemLabels.constant');
const SystemMessages = require('../constants/SystemMessages.constatnt');

class LoginAssert {
  assertTask() {
    assert.equal(
      DashboardPage.taskName.getText(),
      SystemLabels.TASK_NAME);
  }
  confirmationMessage() {
    assert.equal(
      DashboardPage.snackbarMesssage.getText(),
      SystemMessages.CREATED_TASK_MESSAGE);
  }
}

module.exports = new LoginAssert();
