const { Then } = require('cucumber');
const LoginAssert = require('../../asserts/Login.assert');

Then('user should be redirected to ClickUp\'s home page', function () {
  LoginAssert.assertLogin();
});