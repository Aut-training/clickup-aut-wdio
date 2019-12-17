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

  get submitButton() {
    return $('#login-submit');
  }
}

module.exports = new LoginPage();
