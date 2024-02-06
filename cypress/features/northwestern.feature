@Regression
Feature: Northwestern Test


    @Northwestern
    Scenario: Northwestern Navbar
        Given user navigates to "https://www.northwestern.edu/"
        Then user should see below navbar items
            | About | Academics | Admissions | Campus Experience | Research | Giving |
        # | About2 | Academics2 | Admissions2 | Campus Experience2 | Research2 | Giving2 |


        # Then user should fill the Form
        #     | label      | input      |
        #     | First name | TechGlobal |
        #     | Last Name  | School     |
        #     | From       | U.S        |
        #     | Live       | Chicago    |


        Then user should fill the Form as key-value pairs
            | First name | TechGlobal |
            | Last Name  | School     |
            | From       | U.S        |
            | Live       | Chicago    |


        Then user should validate the each row in the table
            | 1 | Amazon    | 1,523,000 | USA      |
            | 2 | Alibaba   | 245,700   | China    |
            | 3 | Microsoft | 221,000   | USA      |
            | 4 | Apple     | 154,000   | USA      |
            | 5 | Samsung   | 116,915   | S. Korea |



# Then user should handle another type
#     | label      | input      | section    |
#     | First name | TechGlobal | Personal   |
#     | Last Name  | School     | Individual |
#     | From       | U.S        | Country    |
#     | Live       | Chicago    | Living     |