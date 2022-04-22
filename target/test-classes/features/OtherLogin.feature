@OtherLoginFeature @Regression
Feature: Other Login Functionality Validation

Background: 
Given User is on Techfios login page

@OtherLogin1	
Scenario Outline: User should be able to login with credentials 
When User enters username as "<username>"
When User enters password as "<password>"
When User click signin button
Then User should land on dashboard page

Examples: 
|username					 | password |
|demo2@techfios.com| abc123 |
|demo@techfios.com | abc124 |
|demo2@techfios.com| abc124 |
