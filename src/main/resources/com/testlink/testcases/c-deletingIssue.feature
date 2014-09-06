Feature: Deleting a fixed issue from Mantis project

In order to clear a project
As a project manager
I want to delete a fixed issues.

@deletingIssue
Scenario Outline: Deleting a fixed issue from Mantis project 

Given Runmode is "<Runmode>"
Given I go to "mantisURL" on "<Browser>"
And I type "<Dev_Login>" in "m_loginField"
And I type "<Dev_Pass>" in "m_passwordField"
And I click "m_loginButton"
And I click "resolvedIssue"
And I click "deleteIssueButton"
And I click "confirmDeleteIssueButton"
And I click "logoutLink"
And I close browser

Examples:
|Runmode| Browser | Dev_Login    |Dev_Pass   | Result | Note |
|   Y   | Mozilla | J_GOSLING    |0123456789 | PASS   |Fixed |
|   N   | Chrome  | J_GOSLING    |0123456789 | PASS   |Fixed |
