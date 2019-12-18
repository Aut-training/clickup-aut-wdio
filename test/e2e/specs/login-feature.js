const LoginPage = require('../pages/LoginPage');
const Context = require('../../data/Context');
const LoginAssert = require('../asserts/Login.assert');

describe('ClickUp login', () => {

  beforeEach(() => {
    LoginPage.open(Context.page.endpoints.login);
  });

  it('should\'t log user to clickUp with an invalid password', () => {
    LoginPage.setEmailInput(Context.login.user.email);
    LoginPage.setPasswordInput(Context.login.voidUser.password);
    LoginPage.submitButton.click();
    LoginAssert.assertPasswordError();
  });

  it('should\'t log user to clickUp with an invalid email', () => {
    LoginPage.setEmailInput(Context.login.voidUser.email);
    LoginPage.setPasswordInput(Context.login.voidUser.password);
    LoginPage.submitButton.click();
    LoginAssert.assertEmailError();
  });

  it('should log user to clickUp', () => {
    LoginPage.setEmailInput(Context.login.user.email);
    LoginPage.setPasswordInput(Context.login.user.password);
    LoginPage.submitButton.click();
    LoginAssert.assertLogin();
  });
});
