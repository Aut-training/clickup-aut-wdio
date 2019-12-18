const assert = require('chai').assert;
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const SystemMessages = require('../constants/SystemMessages.constatnt');
const SystemLabels = require('../constants/SystemLabels.constant');

class LoginAssert {
  assertPasswordError() {
    assert.strictEqual(
      LoginPage.errorMessage.getText(),
      SystemMessages.PASSWORD_ERROR_MESSAGE);
  }

  assertEmailError() {
    assert.strictEqual(
      LoginPage.errorMessage.getText(),
      SystemMessages.EMAIL_ERROR_MESSAGE);
  }

  assertLogin() {
    assert.strictEqual(
      DashboardPage.sidebarHeader.getText(),
      SystemLabels.SIDENAV_HEADER);
  }
}

module.exports = new LoginAssert();
