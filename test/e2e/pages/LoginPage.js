class LoginPage {

  open(url) {
    browser.url(url);
  }

  get emailInput() {
    return $('#email-input');
  }

  get passwordInput() {
    return $('#password-input');
  }

  get passwordErroMessage() {
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
