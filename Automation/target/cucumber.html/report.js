$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Featrures/search.feature");
formatter.feature({
  "name": "Search and place the order for vegatables",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search for items and validate results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "user is on Greencart Landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.searchSteps.user_is_on_greencart_landing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user searched for \"cucumber\" Vegetable",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.searchSteps.user_searched_for_Vegetable(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.searchSteps.something_results_are_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});