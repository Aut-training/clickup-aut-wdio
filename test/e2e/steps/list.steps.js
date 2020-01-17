const BoardPage = require('../pages/BoardPage');
const Context = require('../../data/Context');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
const SystemInteractions = require('../constants/SystemInteractions');
const ListAssert = require('../asserts/List.assert');
const TaskPage = require('../pages/TaskPage');
const Utils = require('../common/Utils');
const { Given, When, Then } = require('cucumber');

Given(/^the user is at Dashboard page$/, function () {
    LoginPage.open(Context.page.endpoints.base);
    browser.deleteCookies();
});

When(/^the user clicks on New list option$/, function () {
    DashboardPage.addListButton.waitForExist(2000);
    DashboardPage.addListButton.click();
    DashboardPage.newListIcon.click();
});

When(/^the user fills-up the name of list with "([^"]*)"$/, function (nameList) {
    DashboardPage.setNewListInput(nameList);
    browser.keys(SystemInteractions.ENTER_KEY_PRESS);
});

When(/^the user clicks on New task button$/, function () {
    BoardPage.addTaskButton.click();
});

When(/^the user creates a new list "([^"]*)"$/, function (nameList) {
    BoardPage.searchList.click();
    BoardPage.newListLink.waitForExist(3000);
    BoardPage.newListLink.click();
    BoardPage.setNewListbySearchInput(nameList);
    browser.keys(SystemInteractions.ENTER_KEY_PRESS);
});

When(/^the user creates a new folder "([^"]*)"$/, function (nameList) {
    BoardPage.templateLink.click();
    //Wait for 'New' button
    browser.pause(3000);
    BoardPage.newFolderTab.click();
    BoardPage.setFolderInput(nameList);
    browser.keys(SystemInteractions.ENTER_KEY_PRESS);
});

Then(/^"([^"]*)" list should be created$/, function (nameList) {
    ListAssert.assertListCreation(nameList);
});

Then(/^"([^"]*)" list should be created within the folder$/, function (nameList) {   
    ListAssert.assertListCreation(nameList);
});
