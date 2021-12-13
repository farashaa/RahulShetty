class DropDown {
    get dropDown() {
        return $("#dropdown-class-example")
    }
    async selectDropDown() {
        await this.dropDown.selectByVisibleText("Option1")
    }
}
export default new DropDown()