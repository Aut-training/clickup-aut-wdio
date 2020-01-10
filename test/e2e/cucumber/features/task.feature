Feature: Create Task
  Creation of tasks in ClickUp

  @loginHook @deleteList
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

  @deleteList
  Scenario: User creates two tasks
    Given user is in the main page
    When user creates "sample project" list
    And user creates "IN PROGRESS" board
    And user creates tasks in the following order:
    |TO_DO    |IN_PROGRESS  |COMPLETE |
    |card1TD  |card1IP      |card1C   |
    |card2TD  |card2IP      |card2C   |
    |card3TD  |card3IP      |card3C   |
    |card4TD  |card4IP      |card4C   |
    |card5TD  |card5IP      |card5C   |
