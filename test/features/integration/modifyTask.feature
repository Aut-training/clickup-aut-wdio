Feature: Modify task
  Modification of a task

  @loginHook @createList @deleteList
  Scenario: User modifies values of fields of a task
    Given user is in home page
    When user creates a task
      | name        | Task 1     |
      | status      | TO DO      |
      | description | First Task |
      | priority    | Normal     |
    And user modifies "Task 1" fields
      | name        | Edited task       |
      | description | First edited Task |
    Then "Task 1" values should be
      | name        | Edited task       |
      | description | First edited Task |
