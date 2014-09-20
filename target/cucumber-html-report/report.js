$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/testlink/testcases/b-FixingIssue.feature");
formatter.feature({
  "id": "fixing-an-issue-in-mantis-project",
  "description": "\r\nIn order to manage issue lifecycle\r\nAs developer\r\nI want to fix an issue in a project.",
  "name": "Fixing an issue in Mantis project",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project",
  "tags": [
    {
      "name": "@fixingIssue",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fixing an issue in Mantis project",
  "keyword": "Scenario Outline",
  "line": 8,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I go to \"mantisURL\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I type \"\u003cDev_Login\u003e\" in \"m_loginField\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I type \"\u003cDev_Pass\u003e\" in \"m_passwordField\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "I click \"m_loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click \"assignedToMe\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I select status closed",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I click \"changeStatusToButton\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click \"closeIssueButton\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I type \"\u003cNote\u003e\" in \"addNoteField\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "I click \"ResolveIssueButton\"",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click \"logoutLink\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I close browser",
  "keyword": "And ",
  "line": 22
});
formatter.examples({
  "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 24,
  "rows": [
    {
      "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project;;1",
      "cells": [
        "Runmode",
        "Browser",
        "Dev_Login",
        "Dev_Pass",
        "Result",
        "Note"
      ],
      "line": 25
    },
    {
      "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project;;2",
      "cells": [
        "Y",
        "Mozilla",
        "J_GOSLING",
        "0123456789",
        "PASS",
        "Fixed"
      ],
      "line": 26
    },
    {
      "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project;;3",
      "cells": [
        "N",
        "Chrome",
        "J_GOSLING",
        "0123456789",
        "PASS",
        "Fixed"
      ],
      "line": 27
    }
  ]
});
formatter.scenario({
  "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project;;2",
  "tags": [
    {
      "name": "@fixingIssue",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fixing an issue in Mantis project",
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
  "name": "I go to \"mantisURL\" on \"Mozilla\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I type \"J_GOSLING\" in \"m_loginField\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I type \"0123456789\" in \"m_passwordField\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click \"m_loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click \"assignedToMe\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I select status closed",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I click \"changeStatusToButton\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click \"closeIssueButton\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I type \"Fixed\" in \"addNoteField\"",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "I click \"ResolveIssueButton\"",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click \"logoutLink\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I close browser",
  "keyword": "And ",
  "line": 22
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
  "duration": 1875720162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mantisURL",
      "offset": 9
    },
    {
      "val": "Mozilla",
      "offset": 24
    }
  ],
  "location": "CommonUtil.openWebPage(String,String)"
});
formatter.result({
  "duration": 76308118463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J_GOSLING",
      "offset": 8
    },
    {
      "val": "m_loginField",
      "offset": 23
    }
  ],
  "location": "CommonUtil.type(String,String)"
});
formatter.result({
  "duration": 1191591323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 8
    },
    {
      "val": "m_passwordField",
      "offset": 24
    }
  ],
  "location": "CommonUtil.type(String,String)"
});
formatter.result({
  "duration": 371653009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "m_loginButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "duration": 4948162486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assignedToMe",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "duration": 20167854135,
  "status": "passed"
});
formatter.match({
  "location": "FixingIssue.selectingStatus()"
});
formatter.result({
  "duration": 20160021908,
  "status": "failed",
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[PASS]\u003e but was:\u003c[FAIL]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.testlink.testcases.FixingIssue.selectingStatus(FixingIssue.java:16)\r\n\tat ✽.And I select status closed(main/resources/com/testlink/testcases/b-FixingIssue.feature:16)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "changeStatusToButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "closeIssueButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fixed",
      "offset": 8
    },
    {
      "val": "addNoteField",
      "offset": 19
    }
  ],
  "location": "CommonUtil.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ResolveIssueButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "logoutLink",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonUtil.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "fixing-an-issue-in-mantis-project;fixing-an-issue-in-mantis-project;;3",
  "tags": [
    {
      "name": "@fixingIssue",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fixing an issue in Mantis project",
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
  "name": "I go to \"mantisURL\" on \"Chrome\"",
  "keyword": "Given ",
  "line": 11,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I type \"J_GOSLING\" in \"m_loginField\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I type \"0123456789\" in \"m_passwordField\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "I click \"m_loginButton\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I click \"assignedToMe\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I select status closed",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I click \"changeStatusToButton\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click \"closeIssueButton\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I type \"Fixed\" in \"addNoteField\"",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "I click \"ResolveIssueButton\"",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I click \"logoutLink\"",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "I close browser",
  "keyword": "And ",
  "line": 22
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
  "duration": 2603260,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: Scipping the test as runmode is \u0027NO\u0027 \r\n\tat com.testlink.testcases.CommonUtil.checkRunmode(CommonUtil.java:21)\r\n\tat ✽.Given Runmode is \"N\"(main/resources/com/testlink/testcases/b-FixingIssue.feature:10)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "mantisURL",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 24
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
      "val": "J_GOSLING",
      "offset": 8
    },
    {
      "val": "m_loginField",
      "offset": 23
    }
  ],
  "location": "CommonUtil.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 8
    },
    {
      "val": "m_passwordField",
      "offset": 24
    }
  ],
  "location": "CommonUtil.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "m_loginButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "assignedToMe",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FixingIssue.selectingStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "changeStatusToButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "closeIssueButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fixed",
      "offset": 8
    },
    {
      "val": "addNoteField",
      "offset": 19
    }
  ],
  "location": "CommonUtil.type(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ResolveIssueButton",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "logoutLink",
      "offset": 9
    }
  ],
  "location": "CommonUtil.click(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonUtil.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});