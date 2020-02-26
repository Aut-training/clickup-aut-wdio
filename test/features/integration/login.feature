Feature: Login
  ClickUp's Login page

  Scenario: User Logs to ClickUp with valid credentials
    Given user navigates to "/login"
    When user fills the fields with the following information
      | mail                  | password  |
      | nexefeb197@4tmail.com | 1234Qwert |
    Then user should be redirected to ClickUp's dashboard in "test's Space"
