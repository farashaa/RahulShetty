class Show {
    get show() {
        return $("#show-textbox")
    }
    async clickShow() {
        await this.show.click()
    }
    get text() {
        return $("#displayed-text")
    }
    async setText() {
        await this.text.setValue("xyz")
    }
}
export default new Show()