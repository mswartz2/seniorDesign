<b>Status video link:</b> https://youtu.be/KHzvBnqvFRQ

Note: The code repo for this project is at: https://dev.azure.com/SeniorDesignTeamYotta/Demo_V5
(Maria added the instructors as members of the Azure project. Please let us know if the links need resent or anything.) 


## Recap of what was planned for the last 3 weeks
- Create stored procedures to pull API data from TicketMaster, populate relational database, delete old records and update web application.
- Investigate Hangfire (third party software for sending emails)
- Set up user profiles and store information in user database
- General database setup
- Set up user interests
- Set up general UI

## What was done during the last 3 weeks (by whom):

<b>Description of Tasks Completed:</b>

Kyle: 

    - Created three stored procedures to populate TicketMaster API data to the web application. 
      The first stored procedure populates the record amount for how many records to pull.
    - The second stored procedure pulls the data from the TicketMaster API and populates the database.
    - The third stored procedure deletes any old records from the database.
    - Updated the URL link for the events page to make it a clickable link that the user can click that 
      takes them to buy tickets for that event.
Maria:


    - Finished setting up general database layout.
    - Setup the profile and registration pages.
    - Enabled user to add interests to their profile page.
    - Setup the Semester2 section of the GitHub repo with all the documents that we 
      anticipate needing for the semester with general layouts and descriptions for each file.
Yikai:

    - Chose a new bootstrap theme and started figured out how to implement it with our current codebase.
    - Worked with Maria on the City and State aspects of the registration page.
Brent: 

    - Partially implemented an email library for use in our web application using Mailjets API to send emails.
	- Learned about how to create and host a private Nuget package on Azure-DevOps.
	- Began unit testing methods that send Emails to ensure methods successfully sent emails and emails 
	  are properly formatted.
	- Gained a better understanding C# and the .NET Framework.
	
<b>Quantifiable  Metric Choosen: Hours worked</b>

    - Kyle: worked about 6 hours for weeks 1 and 2. Worked 6-8 hours for week 3.
    - Maria: worked about 6 hours a week for weeks 1 and 2. Worked 6 hours on code for week 3 plus additional 
      time for adding eveyone's sections to the status doc, editing status doc, and editing and uploading the video.
    - Yikai: worked about 6 hours each week.
    - Brent: worked about 6 hours each week.
    
## Successes        

- Created stored procedures to populate API data to database.
- TicketMaster data is successfully loading in the database and displaying on the webpage.
- Created URL link to allow users to buy tickets to the events.
- Investigating Hangfire as a procedure to produce recommendation engine emails to users.
- Got a very basic email to send.
- Picked a new bootstrap theme.
- Setup user profile in the database and pages for user to view and edit information.
- Got editing interests from the profile page to work.

## Roadblocks/Challenges

- To store city and state entries from the registration page, whenever the user types in something, it is always added to the database, which is not a idea as it increases storage usage. For example, there would be a "Laramie, WY" location for each different user who's hometown is Laramie. Yikai is currently working with the team to come up with a better solution. We are considering having a set of city/state pairs that the user can choose from instead of having them type in their information.
- In Hangfire, the background job scheduling and proccessing framework we decided to use still isn't working. It seems like we are having difficulties getting our database or possibly server to communicate with our web application. To overcome this challenege, we are going to do more research about Hangfire. If this doesn't work, we will use a different way to send automatic emails.
- Brent has little experiance with C# and the .NET Framework. He is learning a lot but feels like there is still a lot for him to learn. To overcome this challenge, he has been reading lots of documentation.
- Maria is having a bit of trouble saving the user interests on the registration page. She is going to try looking over the code and some documentation more to solve this probelm. If she still cannot solve this problem, she is going to change the flow of the registration page because she already got the adding/editing interests section working on the profile page.
- We were having a problem with the virtual machine quickly costing a lot. We overcame this by changing our design plan to use the free version of SQL server within the web application itself.

At this point in time, we don't need mentor help on anything.
    
## Changes/Deviation from Plan (if applicable)
 
- We are considering about getting rid of the option to link a Google account to the site. Users will still have to enter a lot of other information about their interests even with an account, so linking with Google won't really change the user's sign-up efficiency or time. It also makes the overall registration process a lot more complicated.
- Kyle and Maria discussed the stored procedure for loading events into the database. Originally, we had planned on leaving an event in the database if it was already loaded. We have decided to change this so that the old version of the event will be deleted, and the new version will be added. The events will likely have identical information, but if the price, address, or other information has changed, it wouldn't be reflected if we just kept the original event information in the database.
- Maria and Kyle added a Genre model to the database. This is similar to the Categories item. TicketMaster returns an event's genre and classification/category, so we want this reflected in our database. Users' interests will still only be linked to categories (no genres).
- We originally planned to use a virtual machine with an SQL server on it to use as are database and send emails from. We discovered that the pricing on Azure was going to be too much for us to afford for the semester, so we switched to the free version of SQL server within the web application itself.


## Details Description of Goals/ Plan for Next 3 Weeks(in final summary discuss where your project could go from here)

Kyle:

    - Finish Evenful API and filtering of data within the web application.
    - Make sure we're following all of the Terms & Conditions for the APIs.
    - Add deleting events on the user profile to the stored procedure that deletes events, if time permits
Maria:

    - Fix adding interests on registration page.
    - Start working on filtering results. This includes implementing at least one view model and a lot of LINQ queries.
    - Allow user to save an event to their profile. From a programming standpoint, this should be similar to how we allowed the user to add interests to their profile
    
Yikai:

    - Set up user with saved events with Maria.
    - Create stored procedures between API calls with Kyle for the Eventful API.
    - Work with Kyle on the delete stored procedure.
Brent:
    
    - Finish implementing the automatic emails. This includes finishing:
		- Creating helper methods to wrap the email body in Html.
		- Implementing helper methods to ease creating multiple emails containing varying numbers of events.
		- Debugging issues with Hangfire and/or possibly trying other task scheduling frameworks.
	- Working with Maria to enable users to search the database for events and to filter their search results.


## Confidence on completion from each team member + team average. Scale of 1-5; 1 = unconfident;  3 = toss-up; 5 = confident

- Kyle's Score: 5
- Brent's Score: 4
- Yikai's Score: 5
- Maria's Score: 5

Team Average: 4.75
