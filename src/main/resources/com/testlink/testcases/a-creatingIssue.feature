Feature: Creating an issue in Mantis project

In order to manage development process
As administrator
I want to create an issue in a project.

@creatingIssue
Scenario Outline: Creating an issue in Mantis project 

Given Runmode is "<Runmode>"
Given I go to "mantisURL" on "<Browser>"
And I type "<QA_Login>" in "m_loginField"
And I type "<QA_Pass>" in "m_passwordField"
And I click "m_loginButton"
And I click "reportIssueLink"
And I select "CALIPSO" from the project list
And I click "selectProjectButton"
And I select GeneralProjectCategory from the project list
And I select reproducibility always
And I select severity major
And I select priority high
And I select assignee
And I type summary
And I type description
And I type steps to reproduce
And I click "submitReportButton"
And I click "logoutLink"
And I close browser

Examples:
|Runmode| Browser | QA_Login |QA_Pass   | Result | 
|   Y   | Mozilla | J_BACH   |0123456789| PASS   |
|   N   | Chrome  | J_BACH   |0123456789| PASS   | 
