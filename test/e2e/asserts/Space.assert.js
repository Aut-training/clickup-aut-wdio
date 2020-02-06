const assert = require('chai').assert;
const DashboardPage = require('../pages/DashboardPage');

class SpaceAssert {
  assertUpdateName(nameList) {
    assert.strictEqual(
      DashboardPage.sidebarHeader.getText(),
      nameList);
  } 

  assertNotExists(nameList) {
    assert.notEqual(
      DashboardPage.sidebarHeader.getText(),
      nameList);
  } 
}

module.exports = new SpaceAssert();
