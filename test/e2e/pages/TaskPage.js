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

  get taskDescription() {
    return $('//div[@data-placeholder="Description or type \'/\' for commands"]');
  }

  get closeWindows() {
    return $('//div[@cutooltip="Close window"]');
  }

  get taskSettingsButton() {
    return $('.cu-task-header__control');
  }

  get deleteButton() {
    return $('.nav-menu-item__icon_remove');
  }

  getTaskTitle(title) {
    return $(`//span/div[text()='${title}']`);
  }

  setTaskNameInput(taskName) {
    this.taskNameInput.setValue(taskName);
  }
  
  setTaskDescription(description) {
    this.taskDescription.setValue(description);
  }
}

module.exports = new TaskPage();
