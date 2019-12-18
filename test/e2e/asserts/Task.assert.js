const assert = require('assert');
const DashboardPage = require('../pages/DashboardPage');
const SystemLabels = require('../constants/SystemLabels.constant');

class LoginAssert {
  assertTask() {
    assert.strictEqual(
      DashboardPage.taskName.getText(),
      SystemLabels.TASK_NAME);
  }
}

module.exports = new LoginAssert();
