

Screens on the app - 

Debitcard.js and SpendingLimit.js

The business logic is, that I have created a mockapi, that returns me the user data.
I am using redux for state management and fetching the userdata. 
The data returned in the response is being displayed on the debitCard screen. 

When a user clicks on weekly spending limit page, the user is navigated to the 
spendingLimit screen, where he can enter the amount and click save. 

Progressbar to show the limit amount is a component, which is used on the 
debitcard screen. 

These two screens are wrapped inside a homeNavigator and get called on App.js 
