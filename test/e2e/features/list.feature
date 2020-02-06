Feature: List creation
  Forms to create a list

  @loginHook @deleteList
  Scenario: The user creates a list from user's space
    Given the user is at Dashboard page
    When the user clicks on New list option
    And the user fills-up the name of list with "New List"
    Then "New List" list should be created

  @deleteList
  Scenario: The user creates a list from creation of tasks
    Given the user is at Dashboard page
    When the user clicks on New task button
    And the user creates a new list "List from task options"
    Then "List from task options" list should be created

  @createList @deleteList
  Scenario: The user updates the name of the list
    Given the user is at Dashboard page
    When the user clicks on Rename option
    And the user fills-up the new name of the list with "Updated List"
    Then "Updated List" list should be created

  Scenario: The user creates a list from creation of a folder
    Given the user is at Dashboard page
    When the user creates a new folder "List-within-folder"
    Then "List" list should be created within the folder List-within-folder
