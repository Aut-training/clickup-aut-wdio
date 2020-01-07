class BasePage{

  open(url: string) {
    browser.maximizeWindow();
    browser.url(url);
  }
  
}

module.exports = BasePage;
