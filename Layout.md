
# Nav bar
<ul>
  <li>Search</li>
  <li>About</li>
  <li>Contact</li>
  <li>My Profile</li>
  <li>Register</li>
  <li>Login</li>
  </ul>


# Main page (Search):
<ul>
  <li>Welcome message and search bar</li>
  <li>Users can type a city into the search bar or a zip code</li>
  <li>Maybe have an option for advanced search which would include:</li>
  <ul>
    <li> Date range </li>
    <li> Location range </li>
    <li> Event category inclusion/exclusion </li>
    <li> Price </li>
  </ul>

  </ul>

# Results page:
Shown in a list. Each event item would have:
<ul>
  <li>Date</li>
  <li>Time</li>
  <li>Location</li>
  <li>Name</li>
  <li>Login</li>
  </ul>
  
Results should be sorted by date (w/ soonest events listed first)
We also might include a side bar that allows users to filter the event results


# About page:
Includes info about the project such as:

<ul>
  <li>Course & Year</li>
  <li>University</li>
  <li>General Descrition and Motive</li>
  <li>Goals</li>
  <li>How we would expand given more time/money</li>
  </ul>
  
 # Register page
 Allows user to set up an account (they don't need an account to browse websites, but they need it to set preferences)
 
 They can sign up with their gmail or other service.
 
 After a successful signup, they will be directed to the My Profile page
  
 # Login page
 User can log in using their gmail or other service (maybe FB and something else) or
 they can log in with a username and password
 
 After a successful login, they will be directed to the My Profile page
 
 # My Profile page
 User can see and change info about their profile. This inclues:
 <ul>
  <li>Username</li>
  <li>Email</li>
  <li>Password (can't see but can change)</li>
  <li>Interests</li>
  <li>City of Residence</li>
  <li>(Saved events if possible)</li>
  </ul>


# Questions

<ul>
  <li>Would it be better to include the date range when selecting a location or to filter by it after? <- default to the next week </li>
  <li>Can users save an event they are interested in (or would this break the API rules)? -> save future events but delete past events</li>
  <li>Can users sign in with FB and other platforms or only email? (I think only email would be best if 
    we want to send them any reminders or other info) -> only email</li>
  <li>Will we need to do a confirmation email? -> maybe</li>
  <li>Do we want to do anything with Google Maps? -> just do for one event (directions to place)</li>
  </ul>





