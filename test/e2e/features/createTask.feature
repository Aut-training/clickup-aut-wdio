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

  @createList @deleteList
  Scenario: User creates a task using the list view
    Given user is in home page
    When user clicks in "List" tab
    And user clicks "+ New task" option in the view list header
    And user creates the given task
    |name       |Task 2     |
    |priority   |Normal     |
    Then "Task 2" should be shown

  @createList @deleteList
  Scenario: User creates a task using the board view
    Given user is in home page
    When user clicks in "Board" tab
    And user clicks "+ NEW TASK" option in the view list header
    And user creates the given task
    |name       |Task 3     |
    |priority   |Normal     |
    Then "Task 3" should be shown
