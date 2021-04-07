<b>Status video link:</b> https://youtu.be/mgc2J6nNpIc

Note: The code repo for this project is at: https://dev.azure.com/SeniorDesignTeamYotta/Demo_V5
(Maria added the instructors as members of the Azure project. Please let us know if the links need resent or anything.) 

## Recap of what was planned for the last 3 weeks
- Get familiar with StubHub API.
- Build stored procedures for StubHub API.
- Merge StubHub and TicketMaster API data.
- UI design and develop for the filtering page
- City selection bug fixed
- Get an email to send with Hangfire
- Integrate email library into project
- Look into Sendgrid (suggested in the comments of the last status update) and see if it provides better email templates and functionality
- Fix all of the LINQ queries for data filtering


## What was done during the last 3 weeks (by whom):

<b>Description of Tasks Completed:</b>


Kyle:
    
    - Research/Investigated StubHub API and got familiar with the format.
    - Created stored procedure to grab StubHub API data.
    - Fixed issue with TicketMaster API stored procs where it was not adding catgories, genres and locations correctly.
    - Fixed issue with deleting old TicketMaster API data.
	- We were missing deleting the locations, genres and categories for the specific event we were deleting.
    - Fixed issue with TicketMaster tables where we were not able to correctly identify a specific event within the genre 
      and categories table because there was no unique look up column for the sepcific event.
    - Fixed issue with TicketMaster API stored procedure timing out for max API calls within a certain time period.
	- We added a 0.05 second delay between the while loop so that we don't hit the max API limit.   

Maria:
    
    - Fixed all of the LINQ queries for data filtering
    - Added paging to event filtering page
    - Implemented Google Maps link in address
    - Changed the view of the events filtering page to have event "cards" instead of a table

Yikai:
    
    - Worked on enhancement of the event filtering page. 
    - Fixed the city selection dropdown list. Before, there were duplicates, but she found a way to remove the repeating ones, and now 
      they are also ordered from a to z.
    - Created the filtering box. Used the boostrap column to acheive this.

Brent: 
	
    - Found cleaner API with SendGrid as opposed to Mailjet. SendGrid also has helper libraries that will better implement 
      some of the Email Library he was working on.
    - Finnally got Hangfire working for everyone. Previously it would only work on Brent's laptop. 
    - Brent found the StringTemplate library that should enable creating the emails content much more easily, quickly and in 
      a cleaner way than using string concatenation.
	
<b>Quantifiable  Metric Choosen: Hours worked</b>

    - Kyle: worked 15 hours total
    - Maria: worked about 6 hour for week 1 and 8 hours for weeks 2 and 3 (plus additional time for adding eveyone's 
      sections to the status doc, editing status doc, and editing and uploading the video in week 3).
    - Yikai: worked about 5 hours each week.
    - Brent: worked 16 hours total    

## Successes        

- We were able to enhance the UI of event filtering page.
- Successully fixed the bug we had for the drop down list of selecting a city.
- Created the filter box so now all selections look more organized.
- Implemented GoogleMaps
- Implemented paging
- Fixed LINQ queries for filtering
- Found cleaner API with SendGrid as opposed to Mailjet. SendGrid also has helper libraries that will better implement some of the Email Library he was working on.
- Finnally got Hangfire working for everyone. Previously it would only work on Brent's laptop. 
- Brent found the StringTemplate library that should enable creating the emails content much more easily, quickly and in a cleaner way than using string concatenation.
- Research/Investigated StubHub API and got familiar with the format.
- Created stored procedure to grab StubHub API data.
- Fixed issue with TicketMaster API stored procs where it was not adding catgories, genres and locations correctly.
- Fixed issue with deleting old TicketMaster API data.
- Fixed issue with TicketMaster tables where we were not able to correctly identify a specific event within the genre and categories table because there was no unique look up column for the sepcific event.
- We added a 0.05 second delay between the while loop to call TicketMaster API so that we don't hit the max API call limit.  

## Roadblocks/Challenges

- The boostrap grid is a 12-cloumn grid but we have 5 columns of selection. If I give it split like 3, 3 and 2, 2, 2, that's 12 but some of them are sticking together. So I came up with the solution by just creating two rows, this way it is clean and it looks nicer.
- Brent couldn't get Mailjet's templating language to work. This meant that none of our personilization in our email would be displayed.
- Brent couldn't figure out how to convert the EmailHelper library has been working into a nuget package. While this seemed like it was going be simple it proved evasive.
- Maria was struggling with getting paging implemented. She could get it to work on a page with IEnumerable objects but not on the filtering page (which was an EventFilterViewModel object). This tutorial was helpful for the general implementation: https://www.youtube.com/watch?v=srN56uxw76s&list=RDCMUCCTVrRB5KpIiK6V2GGVsR1Q
- Maria eventually go paging to work by switching AssociatedEvents to an IPagedList and tinkering around with the different paging setting avaliable. She also had to rewrite part of the controller so that there was only one Index method. When the user clicked the next page, the controller always ran the default method instead of the one with all the filter paramaters. Now, since there is only one Index method, it is called correctly.
    

## Changes/Deviation from Plan (if applicable)
 
- We are going to use SendGrid for formatting emails now (instead of MailJet)
- Switched from Eventful to Stubhub API.

## Details Description of Goals/ Plan for Next 3 Weeks(in final summary discuss where your project could go from here)

Kyle:
    
    - Create unique identifiers between StubHub and TicketMaster data.
    - Create StubHub stored procs for the specific cities.
    - Create stored procs to delete old StubHub data.
    - Create query to insert StubHub data into Event category, location, and genre tables.

Maria
    
    - General site testing and debugging
    - Polishing and UI
    - Help with sending emails and anything else as needed
    - Start planning for presentation
    - Make sure the general flow and logic of the site make sense

Yikai

    - Continue on design and develop of event filtering page UI, maybe add a background image so it looks more interesting
    - Match the user's hometown and interests to find matching event so we can send out email recommendation.
    - Publish site.

Brent
    
    -Create functions in the project to create the email HTML and text bodies. This will probably use the String Template library and should be easier than previously as SendGrid has better helper classes than Mailjet did.
    -Work with Kyle and Yikai to create automactic emails that suggest events to users

Confidence on completion from each team member + team average. Scale of 1-5; 1 = unconfident;  3 = toss-up; 5 = confident

    Kyle's Score: 5
    Brent's Score: 5
    Yikai's Score: 5
    Maria's Score: 4

    Team Average: 4.75
