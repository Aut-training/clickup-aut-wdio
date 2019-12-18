class DashboardPage {

  open(url) {
    browser.url(url);
  }
  
  get sidebarHeader() {
    return $('.sidebar-section__name-link');
  }

  get addListButton() {
    return $('.sidebar-section__plus-icon');
  }

  get newListButton() {
    return $('div=New List');
  }

  get newListInput() {
    return $('.nav-section-maker__input');
  }

  get listHader() {
    return $('.cu-list-group__name').$('.cu-editable');
  }

  get taskInput() {
    return $('.cu-task-row-new__input');
  }

  get saveTaskButton() {
    return $('div=Save');
  }

  setNewListInput(listName) {
    this.newListInput.setValue(listName);
  }
  setTaskName(taskName) {
    this.taskInput.setValue(taskName);
  }
}

module.exports = new DashboardPage();
