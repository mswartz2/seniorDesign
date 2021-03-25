<b>Status video link:</b> https://www.youtube.com/watch?v=kk_Hk4CHM1w

Note: The code repo for this project is at: https://dev.azure.com/SeniorDesignTeamYotta/Demo_V5
(Maria added the instructors as members of the Azure project. Please let us know if the links need resent or anything.) 

## Recap of what was planned for the last 3 weeks
- Start loading Eventful data (this goal was changed to search possible suiters for other event data APIs).
- Set up saved user events
- Fix the registration page
- Improve UI
- Start basic event filtering
- Work with Hangfire and sending emails to users

## What was done during the last 3 weeks (by whom):

<b>Description of Tasks Completed:</b>

Kyle:
    
    - Researched second event API to use for data loading
    - Started implementing Stubhub's API for a second event data source.

Maria:
    
    - Finished the registration page and fixed all of the errors there.
    - Set up user with saved evented (ability to save events, view saved events, and delete saved events)
    - Set up filtering by category and helped Yikai and Brent with LINQ queries and other trouble shooting for their filtering.
    -Set up events page differently to only display necessary information to users

Yikai:
    
    -Finshed setting up the user profile page with Maria.
    -Set up the UI for the home page
    -Added event filtering for date and location

Brent: 
	
    - Made further progress on email library. This included:
        - Creating an HTML string builder.
        - Finding and modifying a template for our welcome eamil.
	- Created two dropdown menus to filter events by minimum and maximum price.
    - Set up Hangfire to enque and process very basic jobs
	- Gained a better understanding of the ASP.NET Framework and the MVC design pattern it uses.

	
<b>Quantifiable  Metric Choosen: Hours worked</b>

    - Kyle: worked 9 hours total
    - Maria: worked about 6 hours a week for weeks 1 and 2. Worked 8 hours on code for week 3 plus additional time for adding eveyone's sections to the status doc, editing status doc, and editing and uploading the video.
    - Yikai: worked about 6 hours each week
    - Brent: worked 18 hours total
    
## Successes        

 - We were able to finish user profile set up, now users can enter their first name, last name, email, and hometown to their profile page.
- Successully created a drop down menu for selecting a state (in profile set up), and a drop down menu to select where users would like their event location to be.
- Added saving events functionality.
- Added deleting save events functionality.
- Found a good API for our second events source
- Started implementing a nice email template
- Basic Hangfire setup
- Made a lot of progress on event filtering.

## Roadblocks/Challenges
 
- There is an issue with the dropdown list in the event filtering which it is showing the same city twice. To fix this, we are going to investigate the table that this data is pulled from and possibly redesign the dropdown.
- Eventful discontinued their event API. This was going to be are second source of event data. Once we found out it was discontinued, we needed to research and find an alternative. After looking into a number of different options we finally chose Stubhub's API.
- Brent had some difficulties formatting the dropdown menus. Eventually though after better understanding the underlying structure, he was able to find a comprimise that allowed for a nice user experiance.
- We also haven't been able to make the Welcome email more personalized. This probably has something to do with not understanding the templating language that mailjet uses or possibly issues with the way the library interacts with the client object. The group plans on further investigating how to get the email to display the user's first name in the email during the third milestone.
- Since everyone was working on a separate part of the event filtering, the LINQ queries got slightly messed up when they got merged together. During the third milestone, we will have to restructure the queries a bit.
- At this point, we don't need any outside help to overcome these challeneges.

## Changes/Deviation from Plan (if applicable)

- The Eventful API was discontinued, so we had to find a new event API. After some research, we switched to StubHub
- We decided on a drop-down menu for event locations. Since we aren't doing live API calls, users can only search for events in some of the biggest cities in the States.


## Details Description of Goals/ Plan for Next 3 Weeks(in final summary discuss where your project could go from here)

Kyle:
    
    - Create API stored procedure to get Stubhub data.
    - Create stored procedure to delete old Stubhub events.
    - Create stored procedure to send recommendation emails.

Maria
    
    - Fix all of the LINQ queries for data filtering
    - Make sure that the links in the site have a logical flow.
    - Help with general site polishing and UI
    - Possibly look into adding GoogleMaps if time permits

Yikai
    
    - Help Kyle with the StubHub API
    - Set up UI and design for the rest of the pages
    - Start planning for publishing the site during the 4th milestone

Brent
    
    - Finish and integrate the Email Library in our project. This will include:
        - Troubleshoot welcome eamil personalization.
        - Creating a function that given a list of users and thier saved events
          sends an email to each user containing their events
        - Converting the email Library to a Nuget package.
    - Assist in polishing the site as requested.

Confidence on completion from each team member + team average. Scale of 1-5; 1 = unconfident;  3 = toss-up; 5 = confident

    Kyle's Score: 5
    Brent's Score: 5
    Yikai's Score: 5
    Maria's Score: 5

    Team Average: 5
