$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "login functionality",
  "description": "\r\nAs user / Tutor login with credentaials using email and password.",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 6248550100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user navigates to the Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user can see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.enter_the_url()"
});
formatter.result({
  "duration": 16358251300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_can_see_home_page()"
});
formatter.result({
  "duration": 125700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify if user will able to login with valid credentials",
  "description": "",
  "id": "login-functionality;verify-if-user-will-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "On Home page click on Sign In",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User login with email id \"ktsanthosh08@gmail.com\" and valid password \"1@Sathish\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "On success User login to the application",
  "keyword": "And "
});
formatter.match({
  "location": "Login.on_home_page_click_on_sign_in()"
});
formatter.result({
  "duration": 3185353500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ktsanthosh08@gmail.com",
      "offset": 26
    },
    {
      "val": "1@Sathish",
      "offset": 70
    }
  ],
  "location": "Login.user_login_with_email_id_something_and_valid_password_something(String,String)"
});
formatter.result({
  "duration": 233583900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 71312500,
  "status": "passed"
});
formatter.match({
  "location": "Login.on_success_user_login_to_the_application()"
});
formatter.result({
  "duration": 32322007700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1423420300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": ": Verify if user will able to login with valid credentials",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@parameterizeTesting"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "On Home page click on Sign In",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login with email id \"\u003cEmailID\u003e\" and valid password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "On success User login to the application",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "EmailID",
        "Password"
      ],
      "line": 26,
      "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ktsanthofgsh08@gmail.com",
        "1@Sathish"
      ],
      "line": 27,
      "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5536201000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user navigates to the Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user can see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.enter_the_url()"
});
formatter.result({
  "duration": 14822635000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_can_see_home_page()"
});
formatter.result({
  "duration": 140900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": Verify if user will able to login with valid credentials",
  "description": "",
  "id": "login-functionality;:-verify-if-user-will-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@parameterizeTesting"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "On Home page click on Sign In",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User login with email id \"ktsanthofgsh08@gmail.com\" and valid password \"1@Sathish\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "On success User login to the application",
  "keyword": "And "
});
formatter.match({
  "location": "Login.on_home_page_click_on_sign_in()"
});
formatter.result({
  "duration": 1735068300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ktsanthofgsh08@gmail.com",
      "offset": 26
    },
    {
      "val": "1@Sathish",
      "offset": 72
    }
  ],
  "location": "Login.user_login_with_email_id_something_and_valid_password_something(String,String)"
});
formatter.result({
  "duration": 214240700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 59742900,
  "status": "passed"
});
formatter.match({
  "location": "Login.on_success_user_login_to_the_application()"
});
formatter.result({
  "duration": 5139556100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//li[@id\u003d\u0027childTab\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.SwitchED.Generics.FileUtilities.verifyTextMessage(FileUtilities.java:111)\r\n\tat com.SwitchED.PageObjects.VerificationMessage.verifyafterlogintxt(VerificationMessage.java:25)\r\n\tat StepDefinitions.Login.on_success_user_login_to_the_application(Login.java:65)\r\n\tat ✽.And On success User login to the application(Login.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 822614200,
  "status": "passed"
});
});