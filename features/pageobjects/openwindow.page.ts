class OpenWindow {
    get openWindow() {
        return $("#openwindow")
    }
    async clickOpenWindow() {
        await this.openWindow.click()
    }
    get windowHeader() {
        return $("//h3[text()='An Academy to learn Everything about Testing']")
    }
}
export default new OpenWindow()