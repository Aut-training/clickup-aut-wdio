const assert = require('chai').assert;
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const SystemMessages = require('../constants/SystemMessages.constatnt');
const SystemLabels = require('../constants/SystemLabels.constant');

class ListAssert {
  assertListCreation(nameList) {
    assert.strictEqual(
      DashboardPage.listNameInSpace.getText(),
      nameList);
  } 
}

module.exports = new ListAssert();
