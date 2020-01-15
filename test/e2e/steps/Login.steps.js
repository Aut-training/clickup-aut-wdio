const LoginAssert = require('../../asserts/Login.assert');
const TaskAsserts = require('../../asserts/Task.assert');
import { assert} from 'chai';
import { Given, When, Then } from 'cucumber';

Given(/^user navigates to "([^"]*)"$/, (endpoint) => {
  LoginPage.open(endpoint);
});

When(/^user fills the fields with the following information$/, (dataTable) => {
  let userData = dataTable.hashes();
  LoginPage.setEmailInput(userData[0].mail);
  LoginPage.setPasswordInput(userData[0].password);
  LoginPage.submitButton.click();
});

Then(/^user should be redirected to ClickUp\'s home page$/, () => {
  LoginAssert.assertLogin();
});
