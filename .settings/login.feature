Feature: Logging into UKR.NET

In order to check mails
As an customer
I want to log in into my account

@login
Scenario Outline: Logging in UKR.NET

Given Runmode is "<Runmode>"
Given I go to the "loginurl" on "<Browser>"
And I enter "username" as "<userlogin>"
And I enter "password" as "<userpassword>"
And I click on "loginButton" 
Then logging in should be "failed"

Examples:
|Runmode| Browser | userlogin             | userpassword          | 
| N     | Chrome  | fsfsdfsfsdfsdf        | sfsdfsffsfsfsfs       |
| Y     | Mozilla | qa_account@ukr.net    |   0123456789          |
| N     | Mozilla | bla-bla-bla           |  fgdfgdfgdddgfdg      |     
