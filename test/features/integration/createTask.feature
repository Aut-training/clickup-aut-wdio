Feature: Create task
  Creation of tasks in a list

  @loginHook @createList @deleteList
  Scenario: User creates a task using the floating button
    Given user is in home page
    When user clicks "New task (t)" option in the floating button
    And user creates a task with the following information
    |name       |Task 1     |
    |status     |TO DO      |
    |description|First Task |
    |priority   |Normal     |
    Then "Task 1" should be shown
