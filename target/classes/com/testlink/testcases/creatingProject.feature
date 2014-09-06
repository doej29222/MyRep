Feature: Creating Mantis project

In order to manage development
As administrator
I want to create a project.

@creatingProject
Scenario Outline: Creating Mantis project

Given Runmode is "<Runmode>"
Given I go to "mantisURL" on "<Browser>"
And I type "<Login>" in "m_loginField"
And I type "<Password>" in "m_passwordField"
And I click "m_loginButton"
And I click "manageLink"
And I click "manageProjectsLink"
And I click "createNewProjectButton"
And I type "<ProjectName>" in "newProjectNameField"
And I type "<ProjectDescription>" in "newProjectDescriptionField"
And I click "addProjectButton"
And I verify project creation in "projectsTable"
And I clear cookies

Examples:
|Runmode| Browser | Login         |Password  | Result | ProjectName  | ProjectDescription |
|   Y   | Mozilla | administrator | rootPa$$ | PASS   | RANDOM_NAME  | DEMO PROJECT       |
