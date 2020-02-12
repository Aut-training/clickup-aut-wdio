const assert = require('chai').assert;
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
//const SystemMessages = require('../constants/SystemMessages.constatnt');

class LoginAssert {
  assertPasswordError(passwordErrorMessage) {
    assert.strictEqual(
      LoginPage.errorMessage.getText(),
      passwordErrorMessage);
  }

  assertEmailError(emailErrorMessage) {
    assert.strictEqual(
      LoginPage.errorMessage.getText(),
      emailErrorMessage);
  }

  assertLogin(space) {
    assert.strictEqual(
      DashboardPage.sidebarHeader.getText(),
      space);
  }
}

module.exports = new LoginAssert();
