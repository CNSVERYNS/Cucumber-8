@Regression @HtmlElements
Feature: Interaction with the TechGlobal Training Frontend

    Description

    
    Background:
        Given user navigates to 'https://techglobal-training.com/frontend'
        When user clicks on the "Html Elements" card
        Then user should see the "Html Elements" page heading
        Then the URL should contain "elements"

    @Smoke
    Scenario: Validate HTML Elements card, Register and Sign In Buttons
        When user clicks on the "Register" button
        Then the text under it should be 'You clicked on “Register”'
        When user clicks on the "Sign in" button
        Then the text under it should be 'You clicked on “Sign in”'

    Scenario: Validate HTML Elements card, Interact with text inputs - Choose options from dropdown menus
        When user selects "Apple" from the first dropdown menu
        And user selects "Microsoft" from the second dropdown menu
        Then "Apple" should be the selected option in the first dropdown
        And "Microsoft" should be the selected option in the second dropdown

    @Smoke
    Scenario: Validate HTML Elements card, Interact with text inputs
        When user enters "test input" into the first text input field
        And user enters "another test input" into the second text input field
        Then the first text input field should contain "test input"
        And the second text input field should contain "another test input"

    Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state
        When user selects the "Microsoft" checkbox
        And user deselects the "Microsoft" checkbox
        Then the "Microsoft" checkbox should not be checked
        When user selects the "Apple" and "Tesla" checkboxes
        Then both "Apple" and "Tesla" checkboxes should be checked
        And the "Microsoft" checkbox remains unchecked
