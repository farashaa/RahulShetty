class Name {
    get name() {
        return $("#name")
    }
    async setName() {
        await this.name.setValue("abc")
    }
    get confirm() {
        return $("#confirmbtn")
    }
    async clickConfirm() {
        await this.confirm.click()
    }
}
export default new Name()