class DashboardPage {

  open(url) {
    browser.url(url);
  }
  
  get sidebarHeader() {
    return $('.sidebar-section__name-link');
  }
}
  
module.exports = new DashboardPage();
