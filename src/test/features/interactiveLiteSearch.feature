Feature: Verify interactiveLite search functionality

@InteractiveSearch
    Scenario: Verify case submit case in interactiveLite search
    When User navigates to the security application
    Given User enter the username in security Manager
    Given User enter the password in security Manager
    When User click on the login button in security Manager
    When Click on interactiveLite search link
    When select a site if the user has permission to access the page
    When Fill the details
    When Click on submit button
    When Confirm validation message

@InteractiveSearch
    Scenario: Verify case is created in Oracle
    When User navigates to the oracle application
    When User enter the username
    When User enter the password
    When User click on the login button
    When click on Service Request Icon
    When Select All Open Service Requests from the list
    When Verify SR is created after submit Interactive Lite search