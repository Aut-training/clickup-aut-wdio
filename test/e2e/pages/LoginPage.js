class LoginPage {

  get emailInput() { return $('#email-input'); }

  get passwordInput() { return $('#password-input'); }

  get submitButton() { return $('#login-submit'); }

  open(url) {
    browser.maximizeWindow();
    browser.url(url);
  }

  setEmailInput(emailInput) {
    this.emailInput.setValue(emailInput);
  }

  setPasswordInput(passwordInput) {
    this.passwordInput.setValue(passwordInput);
  }
}

module.exports = new LoginPage();
