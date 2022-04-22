Feature: TechFios billing Login Functionality Validation

Background: 
Given User is on Techfios login page

@TechfiosLogin1 @smoke
Scenario Outline: User should be able to login with credentials 
When User enters username as "<username>"
When User enters password as "<password>"
When User click signin button
Then User should land on dashboard page

Examples: 
|username						|	password	|
|demo@techfios.com	|	abc123	  |
|demo2@techfios.com	|	abc1234   |


