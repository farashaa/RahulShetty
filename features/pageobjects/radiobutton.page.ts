class RadioButton {
    get radioButton() {
        return $(".radioButton")
    }
    async clickRadioButton() {
        await this.radioButton.click()
    }
}
export default new RadioButton()