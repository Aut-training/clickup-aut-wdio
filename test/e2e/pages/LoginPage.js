const BasePage = require('./BasePage');

class LoginPage extends BasePage {

  get emailInput() {
    return $('#email-input');
  }

  get passwordInput() {
    return $('#password-input');
  }

  get errorMessage() {
    return $('.cu-form__error-text');
  }

  get submitButton() {
    return $('#login-submit');
  }

  setEmailInput(emailInput) {
    this.emailInput.setValue(emailInput);
  }

  setPasswordInput(passwordInput) {
    this.passwordInput.setValue(passwordInput);
  }
}

module.exports = new LoginPage();
