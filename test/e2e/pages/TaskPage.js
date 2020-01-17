class TaskPage {
  
  get closeTaskIcon() { return $('//div[@cutooltip=\'Close task\']');}

  get taskTitle() { return $('.cu-panel-board__clickable');}

  get taskNameInput() { return $('.cu-panel-board__input');}

  get taskDescription() { return $('//div[@data-placeholder="Description or type \'/\' for commands"]');}

  get closeWindows() { return $('//div[@cutooltip="Close window"]');}

  get taskSettingsButton() { return $('.cu-task-header__control');}

  get deleteButton() { return $('.nav-menu-item__icon_remove');}

  get floatingNameInput() { return $('.cu-form__input'); }

  get floatingStatusButton() { return $('.lv-task__status'); }

  get floatingDecriptionInput() { return $('.ql-editor'); }

  get setPriorityButton() { return $('.cu-priorities-view__icon-select'); }

  get createTaskButton() { return $('.cu-draft-view__submit-btn'); }

  get howClosedButton() { return $('.cu-dashboard-table__show-closed'); }

  floatingTaskStatus(status) {
    return $(`//div[@class='status-list__status'][contains(text(), '${status}')]`);
  }

  priorityOption(priority) { return $(`//div[contains(text(), '${priority}')]`); }

  getTaskTitle(title) { return $(`//span/div[text()='${title}']`);}

  getListViewName(title) { return $(`//span[contains(text(), '${title}')]`); }

  setTaskNameInput(taskName) {
    this.taskNameInput.setValue(taskName);
  }
  
  setTaskDescription(description) {
    this.taskDescription.setValue(description);
  }

  setFloatingName(taskName) {
    this.floatingNameInput.setValue(taskName);
  }

  setFloatingDescription(description) {
    this.floatingDecriptionInput.setValue(description);
  }

}

module.exports = new TaskPage();
