Feature: Fixing an issue in Mantis project

In order to manage issue lifecycle
As developer
I want to fix an issue in a project.

@fixingIssue
Scenario Outline: Fixing an issue in Mantis project 

Given Runmode is "<Runmode>"
Given I go to "mantisURL" on "<Browser>"
And I type "<Dev_Login>" in "m_loginField"
And I type "<Dev_Pass>" in "m_passwordField"
And I click "m_loginButton"
And I click "assignedToMe"
And I select status closed
And I click "changeStatusToButton"
And I click "closeIssueButton"
And I type "<Note>" in "addNoteField"
And I click "ResolveIssueButton"
And I click "logoutLink"
And I close browser

Examples:
|Runmode| Browser | Dev_Login    |Dev_Pass   | Result | Note |
|   Y   | Mozilla | J_GOSLING    |0123456789 | PASS   |Fixed |
|   N   | Chrome  | J_GOSLING    |0123456789 | PASS   |Fixed |
