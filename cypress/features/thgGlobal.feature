Feature: Interaction with the TechGlobal Training Frontend


    Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state

        Given user navigates to 'https://techglobal-training.com/frontend'
        When I click on the "Html Elements" card
        Then I should see the "Html Elements" page heading
        Then the URL should contain "elements"
        When I select the "Microsoft" checkbox
        And I deselect the "Microsoft" checkbox
        Then the "Microsoft" checkbox should not be checked
        When I select the "Apple" and "Tesla" checkboxes
        Then both "Apple" and "Tesla" checkboxes should be checked
        And the "Microsoft" checkbox remains unchecked

    Scenario: Validate dynamic tables pop-up window
        Given user navigates to 'https://techglobal-training.com/frontend'
        When I click on the "Project - Dynamic Tables" card
        Then I should see the "Dynamic Tables" page heading
        When I click on the "ADD PRODUCT" button
        Then I should see "Add New Product" pop-up
        When I click on the "CLOSE" button
        Then I should not see "Add New Product" pop-up