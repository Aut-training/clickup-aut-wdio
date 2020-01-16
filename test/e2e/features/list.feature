Feature: List creation
    Forms to create a list

    Scenario: The user creates a list from user's space
        Given the user is at Dashboard page
        When the user clicks on New list option
        And the user fills-up the name of list with "New List"
        Then "New List" list should be created

    Scenario: The user creates a list from creation of tasks
        Given the user is at Dashboard page
        When the user clicks on New task button
        And the user create a new list "List from task options"
        Then "List from task options" list should be created

    Scenario: The user creates a list from creation of a folder
        Given the user is at Dashboard page
        When the user clicks on List tab link
        And the user creates a new folder "List within folder"
        Then "List within folder" list should be created
