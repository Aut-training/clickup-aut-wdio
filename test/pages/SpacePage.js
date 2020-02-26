class SpacePage {

  get spaceName() { return $('//div[contains(text(), \'Space name\')]'); }
  
  get inputNameSpace() { return $('.cu-form__input'); }

  get saveSettingButton() { return $('.cu-create-project-modal__next'); }
  
  get inputDelete() { return $('.cu-dc__input[placeholder="delete"]'); }

  get deleteButton() { return $('//div[contains(@class, \'cu-btn__text\') and contains(text(), \'Delete\')]'); }  
}

module.exports = new SpacePage();
