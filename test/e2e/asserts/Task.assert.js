const assert = require('chai').assert;
const TaskPage = require('../pages/TaskPage');
const DashboardPage = require('../pages/DashboardPage');
const BoardPage = require('../pages/BoardPage');

class LoginAssert {
  assertTask(taskName) {
    assert.equal(
      DashboardPage.taskName.getText(),
      taskName);
  }

  taskInBoard(taskName1, taskName2) {
    BoardPage.completeDoBoardTask.waitForExist(3000);
    assert.equal(BoardPage.toDoTaskTitle.getText(), taskName1);
    assert.equal(BoardPage.completeTaskTitle.getText(), taskName2);
  }

  assertTaskExist(title) {
    assert.isTrue(
      TaskPage.getTaskTitle(title).isExisting(),
      `Task: ${title} was not created.`);
  }

  assertName(name) {
    assert.equal(
      TaskPage.modalNameField.getText(),
      name
    );
  }

  assertTaskInList(title) {
    assert.isTrue(
      TaskPage.getTaskInList(title).isExisting(),
      `Task: ${title} was not created.`);
  }

  assertDescription(description) {
    assert.equal(
      TaskPage.modalDescription.getText(),
      description
    );
  }

  toastMessage(message) {
    assert.equal(
      DashboardPage.toastText.getText(),
      message
    );
  }

  taskDoesNotExist(title) {
    assert.isNotTrue(
      TaskPage.getTaskTitle(title).isExisting(),
      `Task: ${title} was not deleted.`);
  }
}

module.exports = new LoginAssert();
