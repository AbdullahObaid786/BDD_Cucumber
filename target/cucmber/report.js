$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "TechFios billing Login Functionality Validation",
  "description": "",
  "id": "techfios-billing-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to login with credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@TechfiosLogin1"
    },
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 15,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials;;2"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc1234"
      ],
      "line": 16,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3715518100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 124017300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to login with credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@TechfiosLogin1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3147347600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3089521000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_signin_button()"
});
formatter.result({
  "duration": 3997559300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 22407700,
  "status": "passed"
});
formatter.after({
  "duration": 748022300,
  "status": "passed"
});
formatter.before({
  "duration": 2041259800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to login with credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@TechfiosLogin1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo2@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3161214900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3111576700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_signin_button()"
});
formatter.result({
  "duration": 3999207600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 16174200,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.LoginStepDefinition.user_should_land_on_dashboard_page(LoginStepDefinition.java:46)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 751954500,
  "status": "passed"
});
});