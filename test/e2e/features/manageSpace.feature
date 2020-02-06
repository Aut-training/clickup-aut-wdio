Feature: Manage a space
  Create, update the name of the space and delete the space

  @loginHook
  Scenario: The user creates a space
    Given the user is at Dashboard page
    When the user clicks on New Space icon
    And the user creates a new space: "Space for testing"
    Then "Space for testing" space should be displayed

  Scenario: The user updates the name of the space
    Given the user is at Dashboard page
    When the user clicks on Space settings
    And the user updates the name of the space to "Updated Space"
    Then "Updated Space" space should be displayed

  Scenario: The user deletes a space
    Given the user is at Dashboard page
    When the user clicks on Delete option
    And the user confirms to remove the space filling-up "delete"
    Then space should not be displayed
    