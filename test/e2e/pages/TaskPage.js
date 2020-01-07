class TaskPage {
  
  get closeTaskIcon() {
    return $('//div[@cutooltip=\'Close task\']');
  }

  get taskTitle() {
    return $('.cu-panel-board__clickable');
  }
}

module.exports = new TaskPage();
