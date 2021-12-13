class MouseHover {
    get mouseHover() {
        return $("#mousehover")
    }
    get reload() {
        return $("//div[@class='mouse-hover-content']//a//following-sibling::a")
    }
    async clickReload() {
        await this.reload.click()
    }
}
export default new MouseHover()