$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Featrures/Login.feature");
formatter.feature({
  "name": "Application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User login into application with \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_login_into_application_with_something_and_password_something(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.cards_displayed_are(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login in to application with \u003cUsername\u003e and password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "pass1"
      ]
    },
    {
      "cells": [
        "user2",
        "pass2"
      ]
    },
    {
      "cells": [
        "user3",
        "pass3"
      ]
    },
    {
      "cells": [
        "user4",
        "pass4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User login in to application with user1 and password pass1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_login_into_application_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.cards_displayed_are(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User login in to application with user2 and password pass2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_login_into_application_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.cards_displayed_are(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User login in to application with user3 and password pass3",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_login_into_application_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.cards_displayed_are(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Home page default login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@WebTest"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User login in to application with user4 and password pass4",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.user_login_into_application_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.stepDefinitions.cards_displayed_are(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});