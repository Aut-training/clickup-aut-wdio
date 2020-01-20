class LoginPage {

  get emailInput() { return $('#email-input');}

  get passwordInput() { return $('#password-input');}

  get errorMessage() { return $('.cu-form__error-text');}

  get submitButton() { return $('#login-submit');}

  get profileButton() { return $('cu-user-settings-menu > div > .cu-dropdown__toggle'); }

  get logoutLink() { return $('//a[contains(text(), \'Log out\')]'); }

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
