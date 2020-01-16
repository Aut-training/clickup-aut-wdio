Feature: Create task
  Creation of tasks in a list

  Scenario: User creates a task using the floating button
    Given user is in home page
    When user clicks "New task" option in the floating button
    And user creates a task with the following information
    |name       |Task 1     |
    |status     |TO DO      |
    |description|First Task |
    |priority   |Normal     |
    Then a card should be shown
    |name       |Task 1     |
    |status     |TO DO      |
    |description|First Task |
    |priority   |Normal     |

  Scenario: User creates a task using the list view
    Given user is in home page
    When user clicks in "List" tab
    And user clicks "+ New task" option in the view list header
    And user creates a task with the following information
    |name       |Task 1     |
    |status     |TO DO      |
    |priority   |Normal     |
    Then there should be a card in "List" view
    |name       |Task 1     |
    |status     |TO DO      |
    |priority   |Normal     |

  Scenario: User creates a task using the board view
    Given user is in home page
    When user clicks in "Board" tab
    And user clicks "+ New task" option in the view list header
    And user creates a task with the following information
    |name       |Task 1     |
    |status     |TO DO      |
    |priority   |Normal     |
    Then there should be a card in "Board" view
    |name       |Task 1     |
    |status     |TO DO      |
    |priority   |Normal     |
