const BoardPage = require('../pages/BoardPage');
const Context = require('../../data/Context');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');
const SystemInteractions = require('../constants/SystemInteractions');
const TaskAsserts = require('../asserts/Task.assert');
const TaskPage = require('../pages/TaskPage');
const Utils = require('../common/Utils');
const { Given, When, Then } = require('cucumber');

Given(/^user is in the main page$/, function () {
  LoginPage.open(Context.page.endpoints.base);
  browser.deleteCookies();
});

When(/^user creates "([^"]*)" list$/, function (listName) {
  DashboardPage.addListButton.waitForExist(3000);
  DashboardPage.addListButton.click();
  DashboardPage.newListButton.click();
  DashboardPage.setNewListInput(listName);
  browser.keys(SystemInteractions.ENTER_KEY_PRESS);
});

When(/^user creates "([^"]*)" board$/, function (boardName) {
    DashboardPage.setTaskName('      ');
    DashboardPage.boardTab.click();
    DashboardPage.addStatusButton.click();
    BoardPage.setStatusNameInput(boardName);
    browser.keys(SystemInteractions.ENTER_KEY_PRESS);
    DashboardPage.modalText.click();
    DashboardPage.confirmNewStatus.click();
});
    
When(/^user creates tasks with the following information$/, function (dataTable) {
  let task = dataTable.hashes();
  for(let i = 0; i < task.length; i++) {
    DashboardPage.setTaskName(task[i].taskName);
    DashboardPage.saveTaskButton.click();
  }
});
When(/^user clicks on BOARD tab$/, function () {
  DashboardPage.boardTab.waitForExist(3000);
  DashboardPage.boardTab.click();
});
  
When(/^user closes the first task$/, function () {
  TaskPage.taskTitle.waitForExist(3000);
  TaskPage.taskTitle.moveTo();
  TaskPage.closeTaskIcon.click();
});
  
Then(/^"([^"]*)" should be in TO DO board and "([^"]*)" in COMPLETE board$/, function (taskName1, taskName2) {
  TaskAsserts.taskInBoard(taskName1, taskName2);
});

When(/^user creates tasks in the following order$/, function (dataTable) {
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

When(/^user adds description to a given card$/, function (dataTable) {
  let desc = dataTable.hashes();
  desc.forEach(elm => {
    TaskPage.getTaskTitle(elm.CARD).click();
    TaskPage.taskDescription.click();
    TaskPage.setTaskDescription(elm.DESCRIPTION);
    TaskPage.closeWindows.click();
  });
});

When(/^user deletes the following cards$/, function (dataTable) {
  let tasks = dataTable.raw();
  tasks.forEach(elm => {
    TaskPage.getTaskTitle(elm).click();
    TaskPage.taskSettingsButton.click();
    TaskPage.deleteButton.click();
  });
});

Then(/^the following tasks should be visible$/, function (dataTable) {
  let tasks = dataTable.raw();
  tasks.forEach(elm => TaskAsserts.assertTaskExist(elm));
});
