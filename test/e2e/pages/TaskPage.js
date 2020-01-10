class TaskPage {
  
  get closeTaskIcon() {
    return $('//div[@cutooltip=\'Close task\']');
  }

  get taskTitle() {
    return $('.cu-panel-board__clickable');
  }

  get taskNameInput() {
    return $('.cu-panel-board__input');
  }

  getTaskTitle(title) {
    return $(`//span/div[text()='${title}']`);
  }

  setTaskNameInput(taskName) {
    this.taskNameInput.setValue(taskName);
  }
}

module.exports = new TaskPage();
