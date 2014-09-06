Feature: Creating Mantis user

In order to assign tickets
As administrator
I want to create a user.

@creatingUser
Scenario Outline: Creating Mantis user

Given Runmode is "<Runmode>"
Given I go to "mantisURL" on "<Browser>"
And I type "<Login>" in "m_loginField"
And I type "<Password>" in "m_passwordField"
And I click "m_loginButton"
And I click "manageLink"
And I click "manageUsersLink"
And I click "createNewAccountButton"
And I type "<newUserName>" in "newUserNameField"
And I type "<RealName>" in "newUserRealNameField"
And I type "<newUserEmail>" in "newUserEmailField"
And I click "createUserButton"
And I click "logoutButton"
And I clear cookies
And I go to "yandexURL" on "<Browser>"
And I wait for page to load completely
And I type "<newUserEmail>" in "ya_LoginField"
And I type "<ya_Password>" in "ya_PasswordField"
And I click "ya_LoginButton"
And I wait for page to load completely
And I click "freshLetter"
And I click "activationAccountLink"
And I pass control to another window
And I wait for page to load completely
And I type "<newUserPassword>" in "setPasswordField"
And I type "<newUserPassword>" in "confirmPasswordField"
And I click "updateUserButton"
And I click "logoutButton"
And I type "<newUserName>" in "m_loginField"
And I type "<newUserPassword>" in "m_passwordField"
And I click "m_loginButton"
Then "<newUserName>" should appear and test result is "<Result>"
And I clear cookies

Examples:
|Runmode| Browser | Login         |Password  | Result | newUserName  | RealName | newUserEmail           | ya_Password    | newUserPassword   |
|   Y   | Mozilla | administrator | rootpa$$ | PASS   | NEW_USER02   | JOHN DOE | qa.account02@yandex.ru | 0123456789Pass | secretPASSWORD-yo |
