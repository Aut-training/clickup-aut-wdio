const assert = require('assert');

describe('ClickUp login', () => {
  it('logs the user to clickUp with an invalid', () => {
    browser.url('https://app.clickup.com/login');

    $('#email-input').setValue('t3st.4cc0unt987@gmail.com');
    $('#password-input').setValue('demouser');
    $('#login-submit').click();

    const errorMsg = $('.cu-form__error-text').getText();
    assert.strictEqual(errorMsg, 'Incorrect password for this email.');
  });

  it('logs the user to clickUp', () => {
    browser.url('https://app.clickup.com/login');

    $('#email-input').setValue('t3st.4cc0unt987@gmail.com');
    $('#password-input').setValue('T3st123456');
    $('#login-submit').click();

    const sideNavHeader = $('.sidebar-section__name-link').getText();
    assert.strictEqual(sideNavHeader, 'test\'s Space');
  });
});