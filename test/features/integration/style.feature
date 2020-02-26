Feature: Change the style
  Change the style of view of the space

  @loginHook
  Scenario: The user changes the style of the space to clean
    Given the user is at Dashboard page
    When the user enters to Size-Style panel
    And the user selects Clean option in style section
    Then favorite icon should be displayed
