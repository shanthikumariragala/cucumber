$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:test/test.feature");
formatter.feature({
  "name": "purchase products in Online",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "display welcome message",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "application displaying welcome message",
  "keyword": "Given "
});
formatter.match({
  "location": "test.application_displaying_welcome_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validate login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens login application",
  "keyword": "When "
});
formatter.match({
  "location": "test.user_opens_login_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entering username as \"mercury\"",
  "keyword": "And "
});
formatter.match({
  "location": "test.entering_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entering password as \"mercury\"",
  "keyword": "And "
});
formatter.match({
  "location": "test.entering_password_as(String)"
});
formatter.result({
  "status": "passed"
});
});