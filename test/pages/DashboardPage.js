class DashboardPage {

  get sidebarHeader() { return $('.sidebar-section__name-link'); }

  get addListButton() { return $('.sidebar-section__plus-icon'); }

  get newListButton() { return $('div=New List'); }

  get newListInput() { return $('.nav-section-maker__input'); }

  get taskInput() { return $('.cu-task-row-new__input'); }

  get saveTaskButton() { return $('.cu-task-row-new__button.ng-star-inserted'); }

  get taskName() { return $('.cu-task-row-main__link-text > span'); }

  get snackbarMesssage() { return $('//span/span[@class="toast__name-link"]'); }

  get listSettingsButton() { return $('cu-nav-section > div > div > cu2-list-details-menu'); }

  get deleteButton() { return $('//a[@cutooltip=\'Delete\']'); }

  get confirmDeleteButton() { return $('.cu-btn.cu-btn_danger'); }

  get boardTab() { return $('//a/div[contains(., "Board")]'); }

  get addStatusButton() { return $('//div/section[contains(., "Add Status")]'); }

  get confirmNewStatus() { return $('//div[contains(text(),\'Save\')]'); }

  get newListIcon() { return $('.cu-dropdown-list-item__icon_new-list'); }

  get listNameInSpace() { return $('.cu-nav-section'); }

  get folderNameInput() { return $('.cu-form__input'); }

  get floatingMenuButton() { return $('.cu-float-button__toggle'); }

  get listViewHeader() { return $('cu-nav-menu>div>div>div>cu-editable'); }

  get modalDialog() { return $('.cu-modal__dialog'); }

  get toastText() { return $('.toast__name-link-text'); }

  floatingButton(index) { return $(`//cu-float-button-item[div/div[contains(text(), "${index}")]]`); }

  get settingIcon() { return $('[icon = "cu2-cog"]'); }

  get layoutStyleIcon() { return $('[icon = cu2-layout-style]'); }

  get cleanStyle() { return $('//div[contains(text(), \'Clean, separated\')] '); }

  get doneButton() { return $('.cu-btn'); }

  get favoriteIcon() { return $('.cu2-spaces-bar__compact-btn_favorites'); }

  get renameIcon() { return $('[cutooltip = Rename]'); }

  get settingSpaceIcon() { return $('.cu-dropdown__toggle > .nav-menu__toggle'); }

  get settingSpacePanelIcon() { return $('.nav-menu-item__icon_settings'); }

  get deletePanelOption() { return $('[icon = remove]'); }

  get addSpaceIcon() { return $('.cu2-project-list-bar__add-icon'); }

  get nextButon() { return $('.cu-btn_m'); }

  get folderSettingsButton() { return $('cu-category-menu'); }

  get folderDeleteButton() { return $('a[cutooltip="Delete"]'); }

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
