const assert = require('chai').assert;
const DashboardPage = require('../pages/DashboardPage');

class StyleAssert {
  assertCleanStyle() {
    assert.exists(
      DashboardPage.favoriteIcon, 'Favorite icon is not displayed in Clean style');
  }
}

module.exports = new StyleAssert();
