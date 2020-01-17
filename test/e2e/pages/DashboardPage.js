class DashboardPage {
  
  get sidebarHeader() { return $('.sidebar-section__name-link');}

  get addListButton() { return $('.sidebar-section__plus-icon');}

  get newListButton() { return $('div=New List');}

  get newListInput() { return $('.nav-section-maker__input');}

  get listHader() { return $('.cu-list-group__name').$('.cu-editable');}

  get newTaskButton() { return $('//div[@class="cu-list-group__add ng-star-inserted"]');}

  get taskInput() { return $('.cu-task-row-new__input');}

  get saveTaskButton() { return $('.cu-task-row-new__button.ng-star-inserted');}

  get taskName() { return $('.cu-task-row-main__link-text > span');}

  get snackbarMesssage() { return $('//span/span[@class="toast__name-link"]');}

  get listSettingsButton() { return $('cu-nav-section > div > div > cu2-list-details-menu');}

  get deleteButton() { return $('//a[@cutooltip=\'Delete\']');}

  get confirmDeleteButton() { return $('.cu-btn.cu-btn_danger');}

  get boardTab() { return $('//a/div[contains(., "Board")]');}

  get taskCard() { return $('.cu-panel-board__clickable-name');}

  get completeColum() { return $('div[data-status="complete"]');}

  get taskCloseIcon() { return $('.task-close');}

  get addStatusButton() { return $('//div/section[contains(., "Add Status")]');}

  get confirmNewStatus() { return $('//div[contains(text(),\'Save\')]');}

  get modalText() { return $('.cu-dc__title');}

  get floatingMenuButton() { return $('.cu-float-button__toggle'); }

  get listViewHeader() { return $('cu-nav-menu>div>div>div>cu-editable'); }

  // floatingButton(index) { return $(`div > .cu-float-button-item:nth-child(${index})`); }
  floatingButton(index) { return $(`//cu-float-button-item[div/div[contains(text(), "${index}")]]`); }

  setNewListInput(listName) {
    this.newListInput.setValue(listName);
  }
  setTaskName(taskName) {
    this.taskInput.setValue(taskName);
  }
}

module.exports = new DashboardPage();
