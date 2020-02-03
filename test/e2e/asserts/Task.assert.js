const assert = require('chai').assert;
const TaskPage = require('../pages/TaskPage');
const DashboardPage = require('../pages/DashboardPage');
const SystemLabels = require('../constants/SystemLabels.constant');
const SystemMessages = require('../constants/SystemMessages.constatnt');
const BoardPage = require('../pages/BoardPage');

class LoginAssert {
  assertTask() {
    assert.equal(
      DashboardPage.taskName.getText(),
      SystemLabels.TASK_NAME);
  }

  taskInBoard(taskName1, taskName2) {
    BoardPage.completeDoBoardTask.waitForExist(3000);
    assert.equal(BoardPage.toDoTaskTitle.getText(), taskName1);
    assert.equal(BoardPage.completeTaskTitle.getText(), taskName2);
  }

  confirmationMessage() {
    assert.equal(
      DashboardPage.snackbarMesssage.getText(),
      SystemMessages.CREATED_TASK_MESSAGE);
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
