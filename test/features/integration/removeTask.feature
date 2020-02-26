Feature: Remove task
  Remove a specific task from a list

  @loginHook @createList @deleteList
  Scenario: User removes a task by its name
    Given user is in home page
    And user creates a task
      |name       |Task 1     |
      |status     |TO DO      |
      |description|First Task |
      |priority   |Normal     |
    When user removes "Task 1"
    Then user should not see "Task 1" in the list
