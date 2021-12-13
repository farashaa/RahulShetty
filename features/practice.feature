Feature: Automate rahul shetty page

    Scenario: check every element of rahul shetty page
        Given I am on landing page
        Then I must see the header as "Practice Page"
        When I click on radio button, checkbox and select from drop down
        When I click on open window
        Then I must be navigated to qa click academy page
        Then I see the header should be "AN ACADEMY TO LEARN EVERYTHING ABOUT TESTING"
        When I close and navigate to previous window
        When I click on open tab
        Then I should be navigated to rahul shetty academy page
        Then The header must be contains "Learn Earn & Shine"
        When I close the window and navigate to practice page
        When I enter name and click confirm
        When I click on show and enter some text
        When I hover on mouse and click on reload
        Then the page reloads and the header will be "Practice Page"

