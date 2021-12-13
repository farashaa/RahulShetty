import { Given, When, Then } from '@wdio/cucumber-framework';
import checkboxPage from '../pageobjects/checkbox.page';
import dropdownPage from '../pageobjects/dropdown.page';
import mousehoverPage from '../pageobjects/mousehover.page';
import namePage from '../pageobjects/name.page';
import opentabPage from '../pageobjects/opentab.page';
import openwindowPage from '../pageobjects/openwindow.page';
import practicePage from '../pageobjects/practice.page';
import radiobuttonPage from '../pageobjects/radiobutton.page';
import showPage from '../pageobjects/show.page';
Given(/^I am on landing page$/, async()=> {
await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
await browser.maximizeWindow()
});

Then(/^I must see the header as \"([^\"]*)\"$/, async (practicepage) => {
await expect(practicePage.pageHeader).toHaveText(practicepage)
});

When(/^I click on radio button, checkbox and select from drop down$/, async () => {
await radiobuttonPage.clickRadioButton()
await checkboxPage.clickCheckBox()
await dropdownPage.selectDropDown()
});

When(/^I click on open window$/, async () => {
await openwindowPage.clickOpenWindow()
});


Then(/^I must be navigated to qa click academy page$/, async () => {
const windowsId= await browser.getWindowHandles()
await browser.switchToWindow(windowsId[1])
});

Then(/^I see the header should be \"([^\"]*)\"$/, async (anacademytolearneverythingabouttesting) => {
await expect(openwindowPage.windowHeader).toHaveText(anacademytolearneverythingabouttesting)
});

When(/^I close and navigate to previous window$/, async () => {
    const windowsId= await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(windowsId[0])
});

When(/^I click on open tab$/, async () => {
await opentabPage.clickOpenTab()
});

Then(/^I should be navigated to rahul shetty academy page$/, async () => {
const windowId= await browser.getWindowHandles()
await browser.switchToWindow(windowId[1])
});

Then(/^The header must be contains \"([^\"]*)\"$/, async (learnearnshine) => {
await expect(opentabPage.tabHeader).toHaveText(learnearnshine)
});


When(/^I close the window and navigate to practice page$/, async () => {
    const windowId= await browser.getWindowHandles()
    await browser.closeWindow()
    await browser.switchToWindow(windowId[0])
});

When(/^I enter name and click confirm$/, async () => {
await namePage.setName()
await namePage.clickConfirm()
});

When(/^I click on show and enter some text$/, async () => {
await showPage.clickShow()
await showPage.setText()
});

When(/^I hover on mouse and click on reload$/, async () => {
await mousehoverPage.mouseHover.scrollIntoView()
await mousehoverPage.mouseHover.moveTo()
await mousehoverPage.reload.waitForClickable()
await mousehoverPage.clickReload()
});

Then(/^the page reloads and the header will be \"([^\"]*)\"$/, async (practicepage) => {
await expect(practicePage.pageHeader).toHaveText(practicepage)
});










