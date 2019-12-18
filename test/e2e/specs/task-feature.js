const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const Context = require('../../data/Context');
const Utils = require('../common/Utils');

describe('New Task', () => {

  beforeEach(() => {
    LoginPage.open(Context.page.endpoints.login);
    LoginPage.setEmailInput(Context.login.user.email);
    LoginPage.setPasswordInput(Context.login.user.password);
    LoginPage.submitButton.click();
  });

  it('should create a task', () => {
    DashboardPage.open(Context.page.endpoints.base);
    DashboardPage.addListButton.click();
    DashboardPage.newListButton.click();
    DashboardPage.setNewListInput(Utils.generateID() + '\n');
    DashboardPage.setTaskName(Utils.generateID());
    DashboardPage.saveTaskButton.click();
  });
});
