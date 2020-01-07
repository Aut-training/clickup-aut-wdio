class LoginPage {

  open(url: string) {
    browser.maximizeWindow();
    browser.url(url);
  }

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

  setEmailInput(emailInput: string) {
    this.emailInput.setValue(emailInput);
  }

  setPasswordInput(passwordInput: string) {
    this.passwordInput.setValue(passwordInput);
  }
}

module.exports = new LoginPage();
