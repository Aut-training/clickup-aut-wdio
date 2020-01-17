class BoardPage {
  get boardTitle() { return $('.cu-panel-board__main-title');}

  get completeDoBoardTask() { return $('//div[@data-status="complete"]/section/cu-dashboard-board-card');}

  get toDoBoard() { return $('div[data-status="to do"]');}

  get completeDoBoard() { return $('div[data-status="complete"]');}

  get taskTitle() { return $('.cu-panel-board__clickable-name');}

  get toDoTaskTitle() { return $('(//div[@class=\'cu-panel-board__clickable-name\'])[1]');}

  get completeTaskTitle() { return $('(//div[@class=\'cu-panel-board__clickable-name\'])[2]');}

  get statusNameInput() { return $('//input[@placeholder=\'STATUS NAME\']');}
  
  get addTaskButton() { return $('.cu-float-button__toggle'); }

  get searchList() { return $('.cu-dropdown__toggle-text'); }

  get newListLink() { return $('.category-list__add-category-link'); }

  get listBySearchInput() { return $('.category-list-input__input'); }
  
  get listNameInSpace() { return $('.cu-nav-section'); }

  get listTab() { return $('div=List'); }

  get templateLink() { return $('.lv-empty_link'); }

  get newFolderTab() { return $('//div[contains(text(),\'New\')]'); }

  get folderNameInput() { return $('.cu-form__input'); }


  createTaskButton(index) { return $(`(//div[contains(@class, 'cu-panel-board__plus')])[${index}]`);}

  setStatusNameInput(statusName) {
    this.statusNameInput.setValue(statusName);
  }

  setNewListbySearchInput(listName) {
    this.listBySearchInput.setValue(listName);
  }

  setFolderInput(listName) {
    this.folderNameInput.setValue(listName);
  }

}

module.exports = new BoardPage();
