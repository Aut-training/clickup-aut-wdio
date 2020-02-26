const assert = require('chai').assert;
const DashboardPage = require('../pages/DashboardPage');

class ListAssert {
  assertListCreation(nameList) {
    assert.strictEqual(
      DashboardPage.listNameInSpace.getText(),
      nameList);
  }
}

module.exports = new ListAssert();
