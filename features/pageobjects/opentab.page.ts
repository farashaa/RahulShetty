class OpenTab {
    get openTab() {
        return $(".btn-style.class1.class2")
    }
    async clickOpenTab() {
        await this.openTab.click()
    }
    get tabHeader() {
        return $("//strong[text()=' Learn Earn & Shine']")
    }
}
export default new OpenTab()