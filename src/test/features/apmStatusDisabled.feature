 Feature: Verify whether the contact is updated  properly when the APM checkbox is disabled.


@APMDisEnabled
  Scenario: Delete one contact from BoldNet
    When User navigates to the BoldNet application
    When User enter the username in BoldNet
    When User enter the password in BoldNet
    When User click on the login button in BoldNet
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on contact menu
    When Delete an account containing the text Code To Assign 041


@APMDisEnabled
  Scenario: Uncheck the apm status checkbox in oracle
    When User navigates to the oracle application
    When User enter the username
    When User enter the password
    When User click on the login button
    When Search Interface security Account Sytems
    When Click on Profile Tab
    When Uncheck on APM checkbox
    When Click on Save
    
@APMDisEnabled
  Scenario: Update a contact in Security Manager
    When User navigates to the security application
    Given User enter the username in security Manager
    Given User enter the password in security Manager
    When User click on the login button in security Manager
    When Click Home link
    When Click on a test panel 
    When Create new row and add details or udate existing details
    When Click on contact button
    When Verify success message

@APMDisEnabled
    Scenario: Verify new contact is created in BoldNet
    When User navigates to the BoldNet application
    When User enter the username in BoldNet
    When User enter the password in BoldNet
    When User click on the login button in BoldNet
    When Click on search button in home page
    When Enter search text
    When Click on search icon
    When Click on search Result
    When Click on contact menu
    # When select contact Code To Assign041
    When Verify new contact is created in BoldNet

@APMDisEnabled
  Scenario: Check whether a SR is created in oracle
    When User navigates to the oracle application
    When User enter the username
    When User enter the password
    When User click on the login button
    When Search Interface security Account Sytems
    When Click on Service Request Tab
    When Check whether the SR is created
