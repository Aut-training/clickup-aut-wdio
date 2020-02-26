const assert = require('chai').assert;
const DashboardPage = require('../pages/DashboardPage');

class LoginAssert {
  assertLogin(space) {
    assert.strictEqual(
      DashboardPage.sidebarHeader.getText(),
      space);
  }
}

module.exports = new LoginAssert();
