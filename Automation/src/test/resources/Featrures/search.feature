Feature: Search and place the order for vegatables
@SeleniumTest
Scenario: Search for items and validate results
Given user is on Greencart Landing page
When  user searched for "cucumber" Vegetable
Then "Cucumber" results are displayed

@SeleniumTest1
Scenario: Search for items and then move to checkout page
Given User is on Greencart Landing page
When User searched for "Brinjal" Vegetables
And Added items to cart
And User proceeded to Checkout page for purchase
Then verify selected  "Brinjal"  items are displayed in Check out page


