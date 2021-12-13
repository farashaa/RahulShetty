import { Given, When, Then } from '@wdio/cucumber-framework';
import practicePage from '../pageobjects/practice.page';
Given(/^I am on landing page$/, async()=> {
await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
await browser.maximizeWindow()
});

Then(/^I must see the header as \"([^\"]*)\"$/, async (practicepage) => {
await expect(practicePage.pageHeader).toHaveText(practicepage)
});

When(/^I click on radio button, checkbox and select from drop down$/, async () => {
await practicePage.clickRadioButton()
await practicePage.clickCheckBox()
await practicePage.selectDropDown()
});

When(/^I click on open window$/, async () => {
await practicePage.clickOpenWindow()
});


Then(/^I must be navigated to qa click academy page$/, async () => {
const windowsId= await browser.getWindowHandles()
await browser.switchToWindow(windowsId[1])
});

Then(/^I see the header should be \"([^\"]*)\"$/, async (anacademytolearneverythingabouttesting) => {
await expect(practicePage.windowHeader).toHaveText(anacademytolearneverythingabouttesting)
});

When(/^I close and navigate to previous window$/, async () => {
    const windowsId= await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(windowsId[0])
});

When(/^I click on open tab$/, async () => {
await practicePage.clickOpenTab()
});

Then(/^I should be navigated to rahul shetty academy page$/, async () => {
const windowId= await browser.getWindowHandles()
await browser.switchToWindow(windowId[1])
});

Then(/^The header must be contains \"([^\"]*)\"$/, async (learnearnshine) => {
await expect(practicePage.tabHeader).toHaveText(learnearnshine)
});


When(/^I close the window and navigate to practice page$/, async () => {
    const windowId= await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(windowId[0])
});

When(/^I enter name and click confirm$/, async () => {
await practicePage.setName()
await practicePage.clickConfirm()
});

When(/^I click on show and enter some text$/, async () => {
await practicePage.clickShow()
await practicePage.setText()
});

When(/^I hover on mouse and click on reload$/, async () => {
await practicePage.mouseHover.scrollIntoView()
await practicePage.mouseHover.moveTo()
await practicePage.reload.waitForClickable()
await practicePage.clickReload()
});

Then(/^the page reloads and the header will be \"([^\"]*)\"$/, async (practicepage) => {
await expect(practicePage.pageHeader).toHaveText(practicepage)
});










