const loginPage = require('../pages/LoginPage');
const Context = require('../../data/Context');
const LoginAssert = require('../asserts/Login.assert');

describe('ClickUp login', () => {

  beforeEach(() => {
    loginPage.open(Context.page.endpoints.login);
  });

  it('should\'t log user to clickUp with an invalid password', () => {
    loginPage.setEmailInput(Context.login.user.email);
    loginPage.setPasswordInput(Context.login.voidUser.password);
    loginPage.submitButton.click();
    LoginAssert.assertPasswordError();
  });

  it('should\'t log user to clickUp with an invalid email', () => {
    loginPage.setEmailInput(Context.login.voidUser.email);
    loginPage.setPasswordInput(Context.login.voidUser.password);
    loginPage.submitButton.click();
    LoginAssert.assertEmailError();
  });

  it('should log user to clickUp', () => {
    loginPage.setEmailInput(Context.login.user.email);
    loginPage.setPasswordInput(Context.login.user.password);
    loginPage.submitButton.click();
    LoginAssert.assertLogin();
  });
});
