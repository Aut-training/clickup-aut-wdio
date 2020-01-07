Feature: Create Task
  Creation of tasks in ClickUp

  @loginHook
  Scenario: User creates two tasks
    Given user is in the main page
    When user creates "sample project" list
    And user creates tasks with the following information:
    |taskName   |
    |Task 1     |
    |Task 2     |
    And user clicks on BOARD tab
    And user closes the first task
    Then user should "Task 2" in TO DO board and "Task 1" in COMPLETE board
