class Checkbox {
    get checkBox() {
        return $("#checkBoxOption2")
    }
    async clickCheckBox() {
        await this.checkBox.click()
    }
}
export default new Checkbox()