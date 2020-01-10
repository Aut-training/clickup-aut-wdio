const BoardPage = require('../pages/BoardPage');

function generateID() {
  return (new Date().getTime() / 1000 | 0).toString(16) +
  'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}

function tasksFromTable(hashedTable, key) {
  BoardPage.createTaskButton(1).click();
  for(let i = 0; i < hashedTable.length; i++) {
    key == 'TO_DO' ? browser.keys(hashedTable[i].TO_DO) :
      browser.keys(hashedTable[i].IN_PROGRESS);
    browser.keys('\uE007');
  }
}

module.exports = {
  generateID: generateID,
  tasksFromTable: tasksFromTable
};
