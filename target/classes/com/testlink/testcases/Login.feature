Feature: Logging into Mantis

In order to work with Mantis
As a user
I want to log in into my account

@login
Scenario Outline: 

Given Runmode is "<Runmode>"
Given I go to "mantisURL" on "<Browser>"
And I type "<Login>" in "m_loginField"
And I type "<Password>" in "m_passwordField"
And I click "m_loginButton"
Then "<Login>" should appear and test result is "<Result>" 
And I clear cookies

Examples:
|Runmode| Browser |      Login                                                    | Password                | Result |
| Y     | Mozilla | administrator                                                 | rootpa$$                | PASS   |
| Y     | Mozilla | administrator                                                 | 0123456789              | FAIL   |
| Y     | Mozilla | qaaccount@@ukr.net                                            | !@#$%^&*(               | FAIL   |
| Y     | Mozilla |                                                               | rootpa$$                | FAIL   |
| Y     | Mozilla | administrator                                                 |                         | FAIL   |
| Y     | Mozilla |                                                               |                         | FAIL   |
| Y     | Mozilla | root                                                          | administrator           | FAIL   |
| Y     | Mozilla | <form action=”http://live.hh.ru”><input type=”submit”></form> | rootpa$$                | FAIL   |
| Y     | Mozilla | “♣☺♂” , “”‘~!@#$%^&*()?>,./\<][ /*<!–””, “${code}”;–>         | rootpa$$                | FAIL   |
| Y     | Mozilla | ADMINISTRATOR                                                 | rootpa$$                | FAIL   |
| Y     | Mozilla | Aa!@#$%^&*()-_+=`~/\,.?>< /                                   | !@#$%^&*()-_+=`~/\,.?>< | FAIL   |
| Y     | Mozilla | ksjdksbdshdoueywfgjwevflwjeyfvowyecsydcvsldc                  |                         | FAIL   |
| Y     | Mozilla | Адміністратор                                                 | Пароль                  | FAIL   |
#| Y     | Mozilla | <script>alert(123)</script>                                   | rootpa$$                | FAIL   |