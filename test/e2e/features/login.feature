Feature: Login
  ClickUp's Login page

  Scenario: User Logs to ClickUp with valid credentials
    Given user navigates to "/login"
    When user fills the fields with the following information
      | mail                      | password     |
      | kebose7552@eigoemail.com  | 1234Qwert    |
      | invalid@gmail.com         | demoPassword |
    Then user should be redirected to ClickUp's dashboard
