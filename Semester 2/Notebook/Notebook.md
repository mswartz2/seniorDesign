## Project Goals Synopsis
	
The goal of our project was to create a site that combines event data from numerous different sites online all into one place. The concept is similar to what Trivago does for hotels but with events instead. The user will be able to choose a location (city and state) with some other selection criteria (type of event, date range, price, etc.); then, they will see a results page with information about all the events going on in that city from different websites. After the user gets the results, they may filter them more to focus on a more specific date range or a different category. Clicking "Buy Tickets" link will take them to the specific website that is advertising the event. We also used Google Maps so that the user can click on the location to easily get directions to the event.

In addition to the basic website, we are also wanted to create user profiles. If the user decides that they would like to create a profile, they sign in with an email address. Then, they are asked to pick their location along with their various interests from a list that we provide. Some possible interests include the following: hockey, comedy, music festivals, golf, family, and more. We will send our users an email with a list of upcoming events in their area that fit within their interests once a week. Users can also save upcoming events that they are interested in on their profile.

To implement our website, we planed on using ASP.NET Framework for both front-end and back-end. We planned on pulling data from TicketMaster and Eventful by using their APIs. Eventful removed their API at the end of 2020, so we changed our plan to use StubHub instead. We created stored procedures that we could run for each city in our database to pull the correct API data. We also planned on using a virtual machine (VM) to run these stored procedures. The VM was quickly becoming expensive, so we decided to manually run the stored procedures locally instead of using a VM. While this is not the ideal setup, it saved us a lot of money.


## Status Updates
All finalized written status updates can be found in the “Notebook” folder.
	
Here are the links to the status update videos:
- Status 1: https://youtu.be/Cx1q0d0sHgI
- Status 2: https://www.youtube.com/watch?v=kk_Hk4CHM1w
- Status 3: https://youtu.be/mgc2J6nNpIc
- Status 4: https://www.youtube.com/watch?v=3hQ9josHoSY

- Here is the link to our final project video : 


## Project Planning Documents
1.	Design Requirements and Specifications
	
2 versions of the UML database design (one from the end of the fall semester and the final version from the spring semester) can be found in the “Notebook” folder. They are titled "UML_planned" and "UML_actual". Our project has a couple of other models that we created to make the backend and UI connect better and to help with sending emails, but they are not important for overall design of the site and database.

2.	Finalized Plan of Work (expected vs actual)

As a group we were able to accomplish most of our goals, including aggregating event data, filtering and presenting events to site users, and publishing our site. We had also hoped to further test our site using a beta test group. While the relatively recent publishing of our site has delayed this, we are confidant we will be able to beta test our site before the final presentation. We also have had some setbacks with our notification and recommendation emails, though recently have had success in generating recommendation emails. As such we are confidant that we will be able to complete these emails and possibly others before the final presentation. One feature that was planned but will likely remain uncompleted is live API call for locations and date searches outside of our database records. During development, some setbacks and unforeseen complexities delayed development of this feature until it was deemed no longer prudent. We also had several stretch goal involving security, UI improvements and site features. Among these Yikai was  able to improve the site theme and Maria was able to implement a basic Google Maps integration.


## Summary of Final Implementation

1.	Design

We developed an ASP.NET web application for event filtering. You can see the basic design setup in the "UML_actual" document in the "Notebook" folder. The site has numerous stored procedures that use the StubHub and TicketMaster APIs to get data about the latest events. When the stored procedure runs, it deletes any events that have passed from the database and loads in the new data. For each event, it also checks that we don't already have it loaded into the database. For example, a TicketMaster event would check that we haven't loaded the same TicketMaster event AND that we haven't loaded a StubHub event with the same information. It will also delete any events from user profiles if the date of the saved event has passed.

We created a ViewModel for the event filtering page. The user can filter an event by location, a date range, a maximum price, and/or a general category. Each event that fits the user's filtering criteria is displayed in a card view. The card shows the event name, city, state, location, category, price range, and date. It also has a link to purchase tickets (on StubHub or TicketMaster) and a link to save events to the user's profile. The location of the event is also a link to the Google Maps location. The filtering creates a LINQ query that is based on the data that the user entered. We also implemented paging for the data display. The site displays 15 events on each page. This took a bit of time to implement because we had to rewrite some data in our controller and html files so that we could replicate the same search when the user switched pages (we needed to pass the user filters to the updated controller method).

The user profile allows the user to save events that they are thinking about attending to reference later. It also allows users to enter interests. We use the interests for all users to send them an email each week about an upcoming event in their area that fits this interest. To send these weekly emails, we used the Hangfire job scheduler. We also used SendGrid to create some of the basic templating for the emails.


2.	Limitations
	-	The team had originally planned to use an Azure virtual machine to host the SQL database, but we were eventually unable to do this as the cost of this feature would have been too expensive for this project. We had the VM up for about a week, and it had already gotten too expensive.
	-	The team did not have the knowledge of making live API calls directly through the web application which could have been a useful way to make the API calls. The team was able to make the API calls directly from SQL though. (The live API calls also may have caused us to exceed our daily API call limits.)

3.	Future Direction

For future direction, we have found more APIs that one might be interested in using, for example, the Meetup API allows one to create, find, delete and update events and the Google calendar API allows users to add an event to their calendar. There are a lot more options with a charge that could be fun to add. On the other side, for Azure, Azure Virtual Machines allows one to have high-performance and durable block storage, which could be useful for future projects if live API calls are being considered. 

4.	Statement of Work

- Statement of Work – Brent

	- Helped in a small part to create the event filtering and search mechanism. 
	- Chiefly responsible for the development of our email sending flow. This required researching which email service provider would be most suitable for our needs as well as how to dynamically assemble our email content from information in our database. 
	- Largely responsible for setting up our job handling server and service, Hangfire.

- Statement of Work – Maria

		- Set up general database layout
		- Set up user profiles and registration
		- Set up user interests
		- Set up event saving/deleting for users
		- Used LINQ queries and created a view model to allow users to filter events
		- Set up cards to show events (instead of a table)
		- Added Google Maps link to each event card
		- Added paging to events page
		- General application testing
		- Merged everyone's individual sections (fixed typos, removed duplicate information, made wording clearer, etc.) for all status documents and videos
		- General team leadership

- Statement of Work – Yikai

		- Worked on the filtering by date range and city features using C# and LINQ – this allows users to only get the events with desired date and city
		- Worked on UI design and development of the home page and the events filter page background using HTML and CSS
		- Created the user recommendation stored procedure using SQL, which creates a table that only stores one event that an user might be interested based on his/her city and interest, so Brent can generated an event recommendation email to send. 
		- Used a variety of resources and help from team members to resolve all issues encountered and finish tasks assigned. 

- Statement of Work – Kyle

		- Kyle worked on creating various stored procedures to receive and parse the API data from both TicketMaster and StubHub. Once the API data was parsed it was then placed into several relational tables. The stored procedures use Microsoft’s built OACreate & OAMethod to make the API call. The data was then returned and put into a json variable where it was then parsed and put into a temp table. It was then extracted from the temp table and stored in several different tables depending on what data it was. The location information was stored in the Locations table. The genres and category information was stored in their respective table along with the event’s specific genre and/or category. Each data element within the table was then given an ID (primary key) which was then referenced by the main events tables where it stored it as a foreign key. 
		-	Kyle also helped Yikai develop a user recommendation table and stored procedure which suggests upcoming events to saved users based on their saved interests and location. If the user does not have any saved interests, then it recommends an events just based on their location. 
		-	Kyle created a stored procedure that deletes any old events, and it also deletes the corresponding information from the other related tables (Location, event genres, event categories, …).
		-	In total there were 19 stored procedures created.
		-	Kyle also participated in weekly team meetings and helped other team members when he could.


## Reflection on your team’s ability to design, implement, and evaluate a solution
1.	Lessons Learned
-	Development can sometimes be nonlinear. It involves making guesses at what will be best and then checking to see if those ideas were correct. Sometimes you try something only to find out that it doesn't work. So you go back and see what is broken and then a step back to think of alternatives.
-	Some weeks, it may seem like you haven't made any progress because you are fixing a lot of errors. This is a normal part of the development process. Improving the logic of your site is still progress even if you can't "see" the changes.
-	Everyone learned that using source control is a vital part of project development. Using GIT via Visual Studios can be confusing at times and that it was good to be able to problem solve these issues with team members.
-	Building a skilled team with each team member having different strengths was important to the project’s success.


-	While working on this project Kyle felt like he was able to learn new and useful skills related to database development. He also learned more about using APIs to access data and writing stored procedures that can be easily rerun.
-	Brent felt like he learned a lot about programming in C# and about using Hangfire for job scheduling. He also learned a lot about email templating.
-	During the implementation of the program, Yikai developed her programming skills on C#, LINQ and SQL, as well as ability to use the cloud service platform Azure and the version control tool GitHub. As more and more company migrate their resources and data to cloud services, it is an important skill for people in the work force, such as software engineers, to master it. Additionally, she has also built team working skills, which is another significant ability to have as a software engineer. She worked with three other team members who have strong programming skills, so communicating when needed could fasten the whole process.
-	Maria learned a lot about how to build a website. She learned how to publish a website and about the intricacies behind publishing a site that is linked to a database. She learned a lot about accessing AspNetUser data and how to make modifications to them. She also picked up a lot of best practices for database managament while talking with Kyle about the design of the databae. She also learned more about working with SQL and LINQ to modify the database.


2.	“If you had to do it over again”
-	If Brent had to do it again he would spend more time thinking about and researching the best options to suit the need of the project. He spent a good deal of time working on developing a helper library only to replace part of it with SendGrids helper library and to decide that using razor templates would be more efficient. A significant amount of development could have been saved by more carefully considering possible options. 
-	We would also have liked to use more API sources. (We were only able to have two (StubHub and TicketMaster) because they are free, and with the time permitted, they seemed like the best options.)
-	We could have also devoted more time perfecting the mobile structure for the web application. (We used Bootstrap, so the site works decently on mobile devices, but the functionality could be improved.)
-	We would have liked to have continued to try and use a virtual machine to host the SQL database, but this would have been too costly for us.
-	We also would have liked to make live API calls, but this would require the VM which would have been expensive. Additionally, because of the free versions of the APIs that we are using, we wouldn't want to excede our API call limit by doing live calls.
-	It would also have been nice to have a couple of backup APIs planned. At the end of 2020, Eventful discontinued their API, so we had to scramble to find another API. It would have saved some time to have a list of alternative APIs.


3.	Advice for future teams
-	You will likely face setbacks that you didn't originally anticipate. This is a normal part of development, and you can learn a lot from your setbacks and mistakes.
-	Think about what you really want to do. This class is designed for you to work on things that you like, for example, making a game, making a mobile app or using technology like AI, machine learning or 3D graphics. You will find it more interesting when you are working on projects that you are passionate about. 
-	Consider how much time you have to dedicate to the course. While a project to develop an AI assistant with an mobile and web application might sound cool, will you realistically have time for all three? You also want to be on a team with people who have the same idea about how big the project should be. If it feels like you should be able to finish a little early (excluding any time for setbacks) then that is probably about the right amount of work and difficulty.
-	It is beneficial to leave a little bit of "padding" at the end of the semester to fix errors and work on polishing the documentation. You don't want to have a week left and discover a bunch of errors. Having some buffer time before our final presentation allowed us to do more testing and implement some of our stretch goals instead of worrying about if we could finish the basic product.
-	Stay on top of your work. It might seem like you have a long time to implement your plan, but the semester goes by quickly. It's a lot less stressful to do a little bit of the project each week than to have to do the whole thing the last month.
-	It's also a good idea to work on the project a bit over winter break. You don't need to do as much work as you plan on doing in the spring, but it's good to keep the concepts fresh in your mind. You also might be able to solve a couple planning errors while you are thinking about the project which can save you a lot of time in the spring.
-	Have a backup plan for when things do not go the way you had planned. We had to change a couple of items throughout the project. Having a plan in place allows you to stay on track and keep you focused when things do not go right.
-	Build a good relationship with you team. Having a good relationship with your team will be very important to your project’s success. From our experience having a good relationship allows everyone to be open and communicate well with each other.
-	Identify each team members strengths and weaknesses up front. This will allow you to assign work to the right team members to ensure the project can be completed on time. Team members can still branch out and learn new items, but it helps to have team members focus on what they are skilled at.
-	Planning is an essential part of your senior design project. We all have great ideas, but we need to think about what is the best for our project and what needs to be done first.
-	Think about using an online task management/assignment tool (we used Trello) so that everyone can be held accountable for their work. We found that an online tool is the best because it allows team members to mark items off and add new tasks as necessary.
-	Communication is another important thing to keep in mind. When you have trouble, and you have done all the research you can but still could not find any solutions, then talking to your team member should be your next step. You can talk about your problem and get help from your team members.
