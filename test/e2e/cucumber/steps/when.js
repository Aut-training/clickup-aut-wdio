const { When } = require('cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const TaskPage = require('../../pages/TaskPage');
const BoardPage = require('../../pages/BoardPage');
const Utils = require('../../common/Utils');

When('user fills the fields with the following information:', function (dataTable) {
  let userData = dataTable.hashes();
  LoginPage.setEmailInput(userData[0].mail);
  LoginPage.setPasswordInput(userData[0].password);
  LoginPage.submitButton.click();
});

When('user creates {string} list', function (listName) {
  DashboardPage.addListButton.waitForExist(3000);
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(listName);
  browser.keys('\uE007');
});

When('user creates tasks with the following information:', function (dataTable) {
  let task = dataTable.hashes();
  for(let i = 0; i < task.length; i++) {
    DashboardPage.setTaskName(task[i].taskName);
    DashboardPage.saveTaskButton.click();
  }
});

When('user clicks on BOARD tab', function () {
  DashboardPage.boardTab.waitForExist(3000);
  DashboardPage.boardTab.click();
});

When('user closes the first task', function () {
  TaskPage.taskTitle.waitForExist(3000);
  TaskPage.taskTitle.moveTo();
  TaskPage.closeTaskIcon.click();
  browser.pause(2000);
});

When('user creates {string} board', function (boardName) {
  DashboardPage.setTaskName('      ');
  DashboardPage.boardTab.click();
  DashboardPage.addStatusButton.waitForExist(3000);
  DashboardPage.addStatusButton.click();
  browser.keys(boardName);
  browser.keys('\uE007');
  DashboardPage.confirmNewStatus.click();
});

When('user creates tasks in the following order:', function (dataTable) {
  let tasks = dataTable.hashes();
  for(let i = 0; i < tasks.length; i++) {
    BoardPage.createTaskButton(1).click();
    browser.keys(tasks[i].COMPLETE);
    browser.keys('\uE007');

    TaskPage.taskTitle.waitForExist(3000);
    TaskPage.taskTitle.moveTo();
    TaskPage.closeTaskIcon.click();
  }
  Utils.tasksFromTable(tasks, 'TO_DO');
  Utils.tasksFromTable(tasks, 'IN_PROGRESS');
  browser.pause(3000);
});
