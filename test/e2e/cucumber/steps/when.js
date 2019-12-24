const { When } = require('cucumber');
const LoginPage = require('../../pages/LoginPage');

When('user fills the fields with the following information:', function (dataTable) {
  let userData = dataTable.hashes();
  LoginPage.setEmailInput(userData[0].mail);
  LoginPage.setPasswordInput(userData[0].password);
  LoginPage.submitButton.click();
});