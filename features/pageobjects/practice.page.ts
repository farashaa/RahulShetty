class PracticePage{
get pageHeader(){
    return $("//h1")
}
get radioButton(){
    return $(".radioButton")
}
get checkBox(){
    return $("#checkBoxOption2")
}
get dropDown(){
    return $("#dropdown-class-example")
}
async clickRadioButton(){
    await this.radioButton.click()
}
async clickCheckBox(){
    await this.checkBox.click()
}
async selectDropDown(){
    await this.dropDown.selectByVisibleText("Option1")
}
get openWindow(){
    return $("#openwindow")
}
async clickOpenWindow(){
    await this.openWindow.click()
}
get windowHeader(){
    return $("//h3[text()='An Academy to learn Everything about Testing']")
}
get openTab(){
    return $(".btn-style.class1.class2")
}
async clickOpenTab(){
    await this.openTab.click()
}
get tabHeader(){
    return $("//strong[text()=' Learn Earn & Shine']")
}
get name(){
    return $("#name")
}
async setName(){
await this.name.setValue("abc")
}
get confirm(){
    return $("#confirmbtn")
}
async clickConfirm(){
    await this.confirm.click()
}
get show(){
    return $("#show-textbox")
}
async clickShow(){
    await this.show.click()
}
get text(){
    return $("#displayed-text")
}
async setText(){
    await this.text.setValue("xyz")
}
get mouseHover(){
    return $("#mousehover")
}
get reload(){
    return $("//div[@class='mouse-hover-content']//a//following-sibling::a")
}
async clickReload(){
    await this.reload.click()
}

}
export default new PracticePage()
