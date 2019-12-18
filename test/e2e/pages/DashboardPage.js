const BasePage = require('./BasePage');

class DashboardPage extends BasePage {
  
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

  get newTaskButton() {
    return $('//div[@class="cu-list-group__add ng-star-inserted"]');
  }

  get taskInput() {
    return $('.cu-task-row-new__input');
  }

  get saveTaskButton() {
    return $('.cu-task-row-new__button.ng-star-inserted');
  }

  get taskName() {
    return $('div.cu-task-row-main__link-text > span');
  }

  setNewListInput(listName) {
    this.newListInput.setValue(listName);
  }
  setTaskName(taskName) {
    this.taskInput.setValue(taskName);
  }
}

module.exports = new DashboardPage();
