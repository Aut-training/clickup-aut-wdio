const assert = require('chai').assert;
const DashboardPage = require('../pages/DashboardPage');
const SystemLabels = require('../constants/SystemLabels.constant');

class LoginAssert {
  assertTask() {
    assert.equal(
      DashboardPage.taskName.getText(),
      SystemLabels.TASK_NAME);
  }
}

module.exports = new LoginAssert();
