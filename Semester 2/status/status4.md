<b>Status video link:</b> https://www.youtube.com/watch?v=3hQ9josHoSY

Note: The code repo for this project is at: https://dev.azure.com/SeniorDesignTeamYotta/Demo_V5
(Maria added the instructors as members of the Azure project. Please let us know if the links need resent or anything.) 

## Recap of what was planned for the last 3 weeks

- Finish the user recommendation stored procedure
- Set up stored procedures for StubHub API calls.
- Help develop recommendation emails.
- Create master stored proc for all the API call stored procedures.
- General testing
- Fix errors found in testing
- Get email sending to work with sending actual information from the database
- Improve the html and general formatting in the emails

## What was done during the last 3 weeks (by whom):

<b>Description of Tasks Completed:</b>

Kyle:
    
    - Created several stored procedures to use StubHub API.
    - Updated deletion stored procedure to include StubHub data and new user tables
    - Created new table for user recommendation emails.
    - Created a master stored procedure that calls all the API stored procedures and deletion stored procedures.

Maria:
    
    - Changed user interests to genres instead of categories\
    - General testing and error correction of all paths on the site
    - Fixed some formatting on the site
        - Changed the saved events list to have consistnent formatting with the event filtering page
        - Changed the link to save events on the event filtering page to be dynamic (if user is logged in and they have that event saved, it will say delete from saved events instead)
        - Changed the paging so that the filters are filled in correctly when the user goes to the next page in the list
        - Created a message if no events display to tell the user to enter broader search criteria.
    - Changed GoogleMaps to look up by city, state, and event location name instead of lat/long.
    - Worked on edge cases for user recomendation stored procedure with Yikai.

Yikai:
    
    - Worked on the stored procedure for user recommendation. It adds to the user recommendation table with info like first name, last name, email, if they have interests chosen, and event name and  date of an event that they user might like (based on their interests). Brent can use this table as a base and send registered users with events recommendation. The stored procedure will be run each week to generate new suggested events for users.

Brent: 

    - Brent was able to research different Template Engines and sucessfully choose one that would allow for easy implementation and efficient rendering.
    - Brent was able to create an cshtml template file and render this using RazorEngine. This allowed him to easily build strings containing HTML that could be concatenated and then passed to SendGrid's API for use in a template.
    - Brent was able to build upon existing functions to allow him to develop a method to send as many events as wanted in an email to a given user.
	
<b>Quantifiable  Metric Choosen: Hours worked</b>

    - Kyle: worked 20 hours total
    - Maria: worked about 6 hours for week 1 and 8 hours for week 2 and 9 hours for week 3 (plus additional time for adding eveyone's 
      sections to the status doc, editing status doc, and editing and uploading the video in week 3).
    - Yikai: worked 5 hours a week
    - Brent: worked 27 hours total
    
## Successes        

- Yikai finished the UserRecommendation stored procedure and table. 
- Able to get StubHub data to come over correctly.
- StubHub data is displaying correctly on the web application.
- Configured the API table to hold both TicketMaster and StubHub data.
- Help with the creation of a recommendation stored proc that gathers
  users interests and recommends an event to them based on their interests
  and location.
- Fixed bugs with the stored procedures that were causing duplicates.
- Fixed issue with EventCategory and EventGenre tables to allow those
  to display correctly on the web application.
- Improved user interests to allow more specific interests (with genres instead of categories)
- Found and fixed a lot of UI elements
- Improved the GoogleMaps lookup
- Got email formatting fixed
-Brent was able to research different Template Engines and sucessfully choose one that would allow for easy implementation and efficient rendering.
- Brent was able to create an cshtml template file and render this using RazorEngine. This allowed him to easily build strings containing HTML that could be concatenated and then passed to SendGrid's API for use in a template.
- Brent was able to build upon existing functions to allow him to develop a method to send as many events as wanted in an email to a given user.


## Roadblocks/Challenges
 
- There were a couple of edge cases for the user recommendations: a user with no interests or a user with an interest but no matching results. Yikai was able to get this resolved with Kyle and Maria's help. 
- The GoogleMaps link would sometimes show a location a couple of blocks away from where the event actually was. To fix this, Maria changed the query to be based on city, state, and location name instead of based on the longitude and latitude.
- For Brent again a challenging factor was his inexperiance with C#. Tasks seemed like they should have been simple were sometimes tricky becuase of unfimiliarity with the language. This was especailly frustrating given his prior experiance with Java which is quite similar but different enough.
- Brent also found it difficult to convert the formatted Event list into json objects to be uploaded to SendGrid's API. This challenge was overcome with some trial and error testing.
- Brent also found formatting the Eamils to be difficult. While most of it was created visually using a design tool hosted by SendGrid some of it required manual tweaking the formatting and layout. This often involved a long process of a little research mixed with a lot of trial and error.

## Changes/Deviation from Plan (if applicable)
 
- We changed the user interests so that they are genres instead of categories. For example, now the user can be interested in football or hockey instead of just being interested in sports.

## Details Description of Goals/ Plan for Next 3 Weeks(in final summary discuss where your project could go from here)

What we want to finish before the final presentation:
- Possibly update the UI of the search events page. 
- Publish the site.
- Modify TicketMaster API to use 500 records at a time instead of 25 for performance.
- Implement a method to use data from the stored procedure created by Yikai that sends each user their cooresponding event recommendation.
- Schedule the method to run a specified interval using hangfire.


Where the project could go from here:
- Add more APIs (especially some of the nicer paid ones)
- Do live API calls
- Enhance the event recomendations (possibly based on the type of events that the user has viewed or saved in the past)
- Add pictures related to the events in the emails


Confidence on completion from each team member + team average. Scale of 1-5; 1 = unconfident;  3 = toss-up; 5 = confident

    Kyle's Score: 5
    Brent's Score: 5
    Yikai's Score: 5
    Maria's Score: 5

    Team Average: 5
