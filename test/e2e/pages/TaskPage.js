class TaskPage {
  
  get closeTaskIcon() {
    return $('//div[@cutooltip=\'Close task\']');
  }

  get taskTitle() {
    return $('.cu-panel-board__clickable');
  }

  getTaskTitle(title) {
    return $(`//span/div[text()='${title}']`);
  }
}

module.exports = new TaskPage();
