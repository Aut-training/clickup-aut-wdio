const DashboardPage = require('../pages/DashboardPage');
const StyleAssert = require('../asserts/Style.assert');
const { When, Then } = require('cucumber');

When(/^the user enters to Size-Style panel$/, function () {
  DashboardPage.settingIcon.moveTo();
  DashboardPage.settingIcon.click();
  DashboardPage.layoutStyleIcon.moveTo();
  DashboardPage.layoutStyleIcon.click();
});

When(/^the user selects Clean option in style section$/, function () {
  DashboardPage.cleanStyle.click();
  DashboardPage.doneButton.click();
});

Then(/^favorite icon should be displayed$/, function () {
  StyleAssert.assertCleanStyle();
});
