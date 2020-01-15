class BoardPage {
  get boardTitle() { return $('.cu-panel-board__main-title');}

  get completeDoBoardTask() { return $('//div[@data-status="complete"]/section/cu-dashboard-board-card');}

  get toDoBoard() { return $('div[data-status="to do"]');}

  get completeDoBoard() { return $('div[data-status="complete"]');}

  get taskTitle() { return $('.cu-panel-board__clickable-name');}

  get toDoTaskTitle() { return $('(//div[@class=\'cu-panel-board__clickable-name\'])[1]');}

  get completeTaskTitle() { return $('(//div[@class=\'cu-panel-board__clickable-name\'])[2]');}

  get statusNameInput() { return $('//input[@placeholder=\'STATUS NAME\']');}
  
  createTaskButton(index) { return $(`(//div[contains(@class, 'cu-panel-board__plus')])[${index}]`);}

  setStatusNameInput(statusName) {
    this.statusNameInput.setValue(statusName);
  }

}

module.exports = new BoardPage();
