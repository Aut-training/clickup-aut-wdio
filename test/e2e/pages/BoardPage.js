class BoardPage {
  get boardTitle() {
    return $('.cu-panel-board__main-title');
  }

  get toDoBoard() {
    return $('div[data-status="to do"]');
  }

  get completeDoBoard() {
    return $('div[data-status="complete"]');
  }

  get taskTitle() {
    return $('.cu-panel-board__clickable-name');
  }

  get toDoTaskTitle() {
    return $('(//div[@class=\'cu-panel-board__clickable-name\'])[1]');
  }

  get completeTaskTitle() {
    return $('(//div[@class=\'cu-panel-board__clickable-name\'])[2]');
  }

}

module.exports = new BoardPage();
