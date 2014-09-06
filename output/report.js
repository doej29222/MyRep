$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/testlink/testcases/Login.feature");
formatter.feature({
  "id": "logging-into-ukr.net",
  "description": "\r\nIn order to check mails\r\nAs an customer\r\nI want to log in into my account",
  "name": "Logging into UKR.NET",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "logging-into-ukr.net;logging-in-ukr.net;;2",
  "tags": [
    {
      "name": "@login",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in UKR.NET",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"N\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to the \"loginurl\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "\"\" is present at \"autoXpath\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "I enter \"username\" as \"fsfsdfsfsdfsdf\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "in \"username\" appears \"fsfsdfsfsdfsdf\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"password\" as \"sfsdfsffsfsfsfs\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "in \"password\" appears \"sfsdfsffsfsfsfs\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "button text \"submit\" is \"\"",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "I click on \"submit\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "\"logoutLink\" equals to \"\"",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "I go to the \"mailRu\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 20,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I choose \"\" from \"dropdownList\"",
  "keyword": "And ",
  "line": 21,
  "matchedColumns": [
    7
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "CommonUtil.checkRunmode(String)"
});
formatter.result({
  "duration": 617155633,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: Scipping the test as runmode is \u0027NO\u0027 \r\n\tat com.testlink.testcases.CommonUtil.checkRunmode(CommonUtil.java:46)\r\n\tat ✽.Given Runmode is \"N\"(com/testlink/testcases/Login.feature:10)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "loginurl",
      "offset": 13
    },
    {
      "val": "Chrome",
      "offset": 27
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 1
    },
    {
      "val": "autoXpath",
      "offset": 18
    }
  ],
  "location": "Login.verifyText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "fsfsdfsfsdfsdf",
      "offset": 23
    }
  ],
  "location": "CommonUtil.typingCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 4
    },
    {
      "val": "fsfsdfsfsdfsdf",
      "offset": 23
    }
  ],
  "location": "Login.verifyTextInput(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "sfsdfsffsfsfsfs",
      "offset": 23
    }
  ],
  "location": "CommonUtil.typingCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 4
    },
    {
      "val": "sfsdfsffsfsfsfs",
      "offset": 23
    }
  ],
  "location": "Login.verifyTextInput(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 13
    },
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "Login.verifyButtonText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "CommonUtil.click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "logoutLink",
      "offset": 1
    },
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Login.verifyLinktext(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mailRu",
      "offset": 13
    },
    {
      "val": "Chrome",
      "offset": 25
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    },
    {
      "val": "dropdownList",
      "offset": 18
    }
  ],
  "location": "Login.selectFromList(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "logging-into-ukr.net;logging-in-ukr.net;;3",
  "tags": [
    {
      "name": "@login",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in UKR.NET",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"Y\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to the \"loginurl\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "\"Авто\" is present at \"autoXpath\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "I enter \"username\" as \"qa_account@ukr.net\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "in \"username\" appears \"qa_account@ukr.net\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"password\" as \"0123456789\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "in \"password\" appears \"0123456789\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "button text \"submit\" is \"Увійти\"",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "I click on \"submit\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "\"logoutLink\" equals to \"Вийти\"",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "I go to the \"mailRu\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 20,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I choose \"@bk.ru\" from \"dropdownList\"",
  "keyword": "And ",
  "line": 21,
  "matchedColumns": [
    7
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "CommonUtil.checkRunmode(String)"
});
formatter.result({
  "duration": 293097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginurl",
      "offset": 13
    },
    {
      "val": "Mozilla",
      "offset": 27
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "duration": 35077622101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Авто",
      "offset": 1
    },
    {
      "val": "autoXpath",
      "offset": 22
    }
  ],
  "location": "Login.verifyText(String,String)"
});
formatter.result({
  "duration": 877086316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "qa_account@ukr.net",
      "offset": 23
    }
  ],
  "location": "CommonUtil.typingCredentials(String,String)"
});
formatter.result({
  "duration": 630532295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 4
    },
    {
      "val": "qa_account@ukr.net",
      "offset": 23
    }
  ],
  "location": "Login.verifyTextInput(String,String)"
});
formatter.result({
  "duration": 195263877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "0123456789",
      "offset": 23
    }
  ],
  "location": "CommonUtil.typingCredentials(String,String)"
});
formatter.result({
  "duration": 238416555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 4
    },
    {
      "val": "0123456789",
      "offset": 23
    }
  ],
  "location": "Login.verifyTextInput(String,String)"
});
formatter.result({
  "duration": 97821458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 13
    },
    {
      "val": "Увійти",
      "offset": 25
    }
  ],
  "location": "Login.verifyButtonText(String,String)"
});
formatter.result({
  "duration": 312386802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "CommonUtil.click_on(String)"
});
formatter.result({
  "duration": 358353728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logoutLink",
      "offset": 1
    },
    {
      "val": "Вийти",
      "offset": 24
    }
  ],
  "location": "Login.verifyLinktext(String,String)"
});
formatter.result({
  "duration": 553627227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mailRu",
      "offset": 13
    },
    {
      "val": "Mozilla",
      "offset": 25
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "duration": 7538057142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@bk.ru",
      "offset": 10
    },
    {
      "val": "dropdownList",
      "offset": 24
    }
  ],
  "location": "Login.selectFromList(String,String)"
});
formatter.result({
  "duration": 486275083,
  "status": "passed"
});
formatter.scenario({
  "id": "logging-into-ukr.net;logging-in-ukr.net;;4",
  "tags": [
    {
      "name": "@login",
      "line": 7
    }
  ],
  "description": "",
  "name": "Logging in UKR.NET",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "Runmode is \"N\"",
  "keyword": "Given ",
  "line": 10,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I go to the \"loginurl\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "\"\" is present at \"autoXpath\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "I enter \"username\" as \"qa_account@ukr.net\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "in \"username\" appears \"qa_account@ukr.net\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I enter \"password\" as \"0123456789\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "in \"password\" appears \"0123456789\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "button text \"submit\" is \"\"",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "I click on \"submit\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "\"logoutLink\" equals to \"DSFSD\"",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "I go to the \"mailRu\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 20,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I choose \"\" from \"dropdownList\"",
  "keyword": "And ",
  "line": 21,
  "matchedColumns": [
    7
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "N",
      "offset": 12
    }
  ],
  "location": "CommonUtil.checkRunmode(String)"
});
formatter.result({
  "duration": 658668,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: Scipping the test as runmode is \u0027NO\u0027 \r\n\tat com.testlink.testcases.CommonUtil.checkRunmode(CommonUtil.java:46)\r\n\tat ✽.Given Runmode is \"N\"(com/testlink/testcases/Login.feature:10)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "loginurl",
      "offset": 13
    },
    {
      "val": "Mozilla",
      "offset": 27
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 1
    },
    {
      "val": "autoXpath",
      "offset": 18
    }
  ],
  "location": "Login.verifyText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "qa_account@ukr.net",
      "offset": 23
    }
  ],
  "location": "CommonUtil.typingCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 4
    },
    {
      "val": "qa_account@ukr.net",
      "offset": 23
    }
  ],
  "location": "Login.verifyTextInput(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "0123456789",
      "offset": 23
    }
  ],
  "location": "CommonUtil.typingCredentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 4
    },
    {
      "val": "0123456789",
      "offset": 23
    }
  ],
  "location": "Login.verifyTextInput(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 13
    },
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "Login.verifyButtonText(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "CommonUtil.click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "logoutLink",
      "offset": 1
    },
    {
      "val": "DSFSD",
      "offset": 24
    }
  ],
  "location": "Login.verifyLinktext(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mailRu",
      "offset": 13
    },
    {
      "val": "Mozilla",
      "offset": 25
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    },
    {
      "val": "dropdownList",
      "offset": 18
    }
  ],
  "location": "Login.selectFromList(String,String)"
});
formatter.result({
  "status": "skipped"
});
});