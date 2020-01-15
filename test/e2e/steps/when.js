const { When } = require('cucumber');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const TaskPage = require('../pages/TaskPage');
const BoardPage = require('../pages/BoardPage');
const Utils = require('../common/Utils');
const SystemInteractions = require('../constants/SystemInteractions');

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
  browser.keys(SystemInteractions.ENTER_KEY_PRESS);
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
});

When('user creates {string} board', function (boardName) {
  DashboardPage.setTaskName('      ');
  DashboardPage.boardTab.click();
  DashboardPage.addStatusButton.click();
  BoardPage.setStatusNameInput(boardName);
  browser.keys(SystemInteractions.ENTER_KEY_PRESS);
  DashboardPage.modalText.click();
  DashboardPage.confirmNewStatus.click();
});

When('user creates tasks in the following order:', function (dataTable) {
  let tasks = dataTable.hashes();
  for(let i = 0; i < tasks.length; i++) {
    BoardPage.createTaskButton(1).click();
    TaskPage.setTaskNameInput(tasks[i].COMPLETE);
    browser.keys(SystemInteractions.ENTER_KEY_PRESS);
    TaskPage.taskTitle.waitForExist(3000);
    TaskPage.taskTitle.moveTo();
    TaskPage.closeTaskIcon.click();
  }
  Utils.tasksFromTable(tasks, 'TO_DO');
  Utils.tasksFromTable(tasks, 'IN_PROGRESS');
});

When('user adds description to a given card:', function (dataTable) {
  let desc = dataTable.hashes();
  desc.forEach(elm => {
    TaskPage.getTaskTitle(elm.CARD).click();
    TaskPage.taskDescription.click();
    TaskPage.setTaskDescription(elm.DESCRIPTION);
    TaskPage.closeWindows.click();
  });
});

When('user deletes the following cards:', function (dataTable) {
  let tasks = dataTable.raw();
  tasks.forEach(elm => {
    TaskPage.getTaskTitle(elm).click();
    TaskPage.taskSettingsButton.click();
    TaskPage.deleteButton.click();
  });
});
