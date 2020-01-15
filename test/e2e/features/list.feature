Feature: The user create a list in several ways to create a list
    The user creates a list in several ways

    Scenario: The user creates a list
        Given the user is at "/login" page
        When the user clicks on New list option
        And the user fills-up the name of list with "New List"
        Then "New List" list should be created

    Scenario: The user creates a list since creation of tasks
        Given the user is at "/login" page
        When the user clicks on New task button
        And the user create a new list "List since task"
        Then "List since task" list should be created

    Scenario: The user creates a list within a folder
        Given the user is at "/login" page
        When the user clicks on the link of List tab
        And the user creates a new folder "List within folder"
        Then "List within folder" list should be created
