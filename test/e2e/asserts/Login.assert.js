const chaiAssert = require('chai');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const SystemMessages = require('../constants/SystemMessages.constatnt');
const SystemLabels = require('../constants/SystemLabels.constant');

class LoginAssert {
  assertPasswordError() {
    chaiAssert.assert(
      LoginPage.passwordErroMessage.getText(),
      SystemMessages.PASSWORD_ERROR_MESSAGE);
  }

  assertEmailError() {
    chaiAssert.assert(
      LoginPage.passwordErroMessage.getText(),
      SystemMessages.EMAIL_ERROR_MESSAGE);
  }

  assertLogin() {
    chaiAssert.assert(
      DashboardPage.sidebarHeader.getText(),
      SystemLabels.SIDENAV_HEADER);
  }
}

module.exports = new LoginAssert();