@Login 
Feature: login functionality 

	As user / Tutor login with credentaials using email and password.

Background: user navigates to the Application 
	Given Enter the URL 
	Then user can see home page 
	
@sanity 
Scenario: Verify if user will able to login with valid credentials 
	Given On Home page click on Sign In 
	When User login with email id "ktsanthosh08@gmail.com" and valid password "1@Sathish" 
	Then User clicks on sign in button 
	And On success User login to the application 
	
@parameterizeTesting 
Scenario Outline: : Verify if user will able to login with invalid credentials 
	Given On Home page click on Sign In 
	When User login with email id "<EmailID>" and valid password "<Password>" 
	Then User clicks on sign in button 
	And On success User login to the application 
	
	Examples: 
	
		|EmailID                 | Password   |
		|ktsanthofgsh08@gmail.com| 1@Sathish  |
		
		
		
		
		
