const BoardPage = require('../pages/BoardPage');
const TaskPage = require('../pages/TaskPage');
const SystemInteractions = require('../constants/SystemInteractions');

function generateID() {
  return (new Date().getTime() / 1000 | 0).toString(16) +
  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}

function tasksFromTable(hashedTable, key) {
  BoardPage.createTaskButton(1).click();
  hashedTable.forEach(elm => {
    TaskPage.setTaskNameInput(elm[key]);
    browser.keys(SystemInteractions.ENTER_KEY_PRESS);
  });
}

module.exports = {
  generateID: generateID,
  tasksFromTable: tasksFromTable
};
