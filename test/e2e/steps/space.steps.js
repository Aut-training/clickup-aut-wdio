const DashboardPage = require('../pages/DashboardPage');
const SpacePage = require('../pages/SpacePage');
const SystemInteractions = require('../constants/SystemInteractions');
const SpaceAssert = require('../asserts/Space.assert');
const { When, Then } = require('cucumber');
let spaceName;

When(/^the user clicks on Space settings$/, function () {
  DashboardPage.sidebarHeader.moveTo();
  DashboardPage.settingSpaceIcon.click();
  DashboardPage.settingSpacePanelIcon.click();
});

When(/^the user updates the name of the space to "([^"]*)"$/, { timeout: 60000 }, function (nameList) {
  SpacePage.spaceName.waitForClickable(5000);
  SpacePage.spaceName.waitForExist(5000);
  SpacePage.spaceName.click();
  SpacePage.inputNameSpace.click();
  browser.keys([SystemInteractions.CONTROL_KEY_PRESS, 'a']);
  browser.keys(nameList);
  browser.keys([SystemInteractions.ENTER_KEY_PRESS]);
  browser.keys([SystemInteractions.ENTER_KEY_PRESS]);
  DashboardPage.sidebarHeader.waitForClickable(3000);
});

When(/^the user clicks on Delete option$/, function () {
  spaceName = DashboardPage.sidebarHeader.getText();
  DashboardPage.sidebarHeader.moveTo();
  DashboardPage.settingSpaceIcon.click();
  DashboardPage.deletePanelOption.click();
});

When(/^the user confirms to remove the space filling-up "([^"]*)"$/, function (deleteConfirm) {
  SpacePage.inputDelete.click({ y: 3 });
  browser.keys(deleteConfirm);
  SpacePage.deleteButton.click();
});

When(/^the user clicks on New Space icon$/, function () {
  DashboardPage.addSpaceIcon.click();
});

When(/^the user creates a new space: "([^"]*)"$/, function (nameSpace) {
  browser.keys(nameSpace);
  for (let i = 0; i < 7; i++) {
    switch (i) {
    case 5:
    case 6:
      DashboardPage.nextButon.click({ y: -2 });
      break;
    default:
      DashboardPage.nextButon.click();
    }
  }
});

Then(/^"([^"]*)" space should be displayed$/, function (nameSpace) {
  DashboardPage.sidebarHeader.waitForClickable(3000);
  SpaceAssert.assertUpdateName(nameSpace);
});

Then(/^space should not be displayed$/, function () {
  DashboardPage.sidebarHeader.waitForClickable(3000);
  SpaceAssert.assertNotExists(spaceName);
});
