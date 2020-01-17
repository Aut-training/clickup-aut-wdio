class DashboardPage {

  get sidebarHeader() { return $('.sidebar-section__name-link'); }

  get addListButton() { return $('.sidebar-section__plus-icon'); }

  get newListButton() { return $('div=New List'); }

  get newListInput() { return $('.nav-section-maker__input'); }

  get listHeader() { return $('.cu-list-group__name').$('.cu-editable'); }

  get newTaskButton() { return $('//div[@class="cu-list-group__add ng-star-inserted"]'); }

  get taskInput() { return $('.cu-task-row-new__input'); }

  get saveTaskButton() { return $('.cu-task-row-new__button.ng-star-inserted'); }

  get taskName() { return $('.cu-task-row-main__link-text > span'); }

  get snackbarMesssage() { return $('//span/span[@class="toast__name-link"]'); }

  get listSettingsButton() { return $('cu-nav-section > div > div > cu2-list-details-menu'); }

  get deleteButton() { return $('//a[@cutooltip=\'Delete\']'); }

  get confirmDeleteButton() { return $('.cu-btn.cu-btn_danger'); }

  get boardTab() { return $('//a/div[contains(., "Board")]'); }

  get taskCard() { return $('.cu-panel-board__clickable-name'); }

  get completeColum() { return $('div[data-status="complete"]'); }

  get taskCloseIcon() { return $('.task-close'); }

  get addStatusButton() { return $('//div/section[contains(., "Add Status")]'); }

  get confirmNewStatus() { return $('//div[contains(text(),\'Save\')]'); }

  get modalText() { return $('.cu-dc__title'); }

  get newListIcon() { return $('.cu-dropdown-list-item__icon_new-list'); }

  get nameListInFolder() { return $('.cu-list-group__name'); }

  get listNameInSpace() { return $('.cu-nav-section'); }

  get folderNameInput() { return $('.cu-form__input'); }

  get openFolderIcon() { return $('.nav-category__toggle'); }

  setNewListInput(listName) {
    this.newListInput.setValue(listName);
  }

  setTaskName(taskName) {
    this.taskInput.setValue(taskName);
  }

  setFolderInput(listName) {
    this.folderNameInput.setValue(listName);
  }
}

module.exports = new DashboardPage();
