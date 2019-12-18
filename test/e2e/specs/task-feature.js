const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const Context = require('../../data/Context');
const Utils = require('../common/Utils');
const TaskAssert = require('../asserts/Task.assert');

describe('New Task', () => {

  beforeEach(() => {
    LoginPage.open(Context.page.endpoints.login);
    LoginPage.setEmailInput(Context.login.user.email);
    LoginPage.setPasswordInput(Context.login.user.password);
    LoginPage.submitButton.click();
  });

  it('should create a task', () => {
    DashboardPage.addListButton.click();
    DashboardPage.newListButton.click();
    DashboardPage.setNewListInput(Utils.generateID() + '\n');
    DashboardPage.setTaskName(Context.task.title);
    DashboardPage.saveTaskButton.click();
    TaskAssert.assertTask();
  });
});
