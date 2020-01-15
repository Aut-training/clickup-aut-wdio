class BasePage{

  open(url) {
    browser.maximizeWindow();
    browser.url(url);
  }
}

module.exports = BasePage;