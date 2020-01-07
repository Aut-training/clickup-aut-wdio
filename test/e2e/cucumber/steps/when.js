const { When } = require('cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const TaskPage = require('../../pages/TaskPage');

When('user fills the fields with the following information:', function (dataTable) {
  let userData = dataTable.hashes();
  LoginPage.setEmailInput(userData[0].mail);
  LoginPage.setPasswordInput(userData[0].password);
  LoginPage.submitButton.click();
});

When('user creates {string} list', function (listName) {
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(listName + '\n');
});

When('user creates tasks with the following information:', function (dataTable) {
  let task = dataTable.hashes();
  for(let i = 0; i < task.length; i++) {
    DashboardPage.setTaskName(task[i].taskName);
    DashboardPage.saveTaskButton.click();
  }
});

When('user clicks on BOARD tab', function () {
  DashboardPage.boardTab.click();
});

When('user closes the first task', function () {
  TaskPage.taskTitle.waitForExist(3000);
  TaskPage.taskTitle.moveTo();
  TaskPage.closeTaskIcon.click();
  browser.pause(2000);
});
