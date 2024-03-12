# Crowdfunding Front-End
## Sandra Lopez
![]( public/images/GrassrootsLogo.png )

## Planning:
### Grassroots Goals

Deployed site: https://65f00e79b349f5898998c4e5--voluble-smakager-701865.netlify.app/

Grassroots Goals is a crowdfunding application designed to support local sports clubs in raising funds for various needs within grassroots sports. This platform enables clubs to initiate campaigns for scholarships, registration fees, uniforms, equipment, and coaching/training expenses. Through Grassroots Goals, communities can come together to contribute and help foster the growth and development of sport at the grassroots level.

### Intended Audience/User Stories
1. Local Sports Clubs:
Grassroots sports clubs looking to secure financial support for their various needs, such as scholarships, registration fees, uniforms, equipment, and coaching/training expenses.

2. Players and Athletes:
Individuals involved in grassroots sports who may benefit from the financial assistance provided by crowdfunding campaigns on the platform.

3. Parents and Families:
Families of young players who seek support for the costs associated with their children's participation in sports, including registration fees and equipment.

1. Community Members:
Local community members interested in supporting and contributing to the development of grassroots sports within their area.

1. Sponsors and Donors:
Potential sponsors and donors who are passionate about supporting youth sports and may want to contribute to specific campaigns or initiatives on the platform.

1. Coaches and Trainers:
Coaches and trainers involved in grassroots sports who may benefit from crowdfunding campaigns to secure resources for coaching, training programs, and equipment.

By targeting this diverse audience, the Grassroots Goals app aims to create a supportive and engaged community around grassroots sports, fostering financial assistance and collaboration among local stakeholders.

### Front End Pages/Functionality
- Index/Home Page
    - Log In/Create Account
    - Homepage - View Featured Projects
    - All projects page with sport category filtering
- Project Pages
    - Project Description
    - Project Image
    - Project Pledges
    - Total Raised
- User Profile
    - Update profile 
    - Associated Club
    - All users campaigns

### HomePage
![]( relative_link_to_screenshot )


### Project Creation Page
![]( relative_link_to_screenshot )


### Project Creation Form
![]( relative_link_to_screenshot )


### Project with Pledges
![]( relative_link_to_screenshot )


### Unauthorised User access
![]( relative_link_to_screenshot )



### Project Requirements

 - [x] Be separated into two distinct projects: an API built using the Django Rest Framework and a website built using React.
 - [x] Have a cool name, bonus points if it includes a pun and/or missing vowels. See https://namelix.com/ for inspiration. (Bonus Points are meaningless)
 - [x] Have a clear target audience.
 - [x] Have user accounts. A user should have at least the following attributes: 
   - [x] Username
   - [x] Email address
   - [x] Password
 - [x] Ability to create a “project” to be crowdfunded which will include at least the following attributes:
   - [x] Title
   - [x] Owner (a user)
   - [x] Description
   - [x] Image
   - [x] Target amount to fundraise
   - [x] Whether it is currently open to accepting new supporters or not 
   - [x] When the project was created
 - [x] Ability to “pledge” to a project. A pledge should include at least the following attributes:
   - [x] An amount
   - [x] The project the pledge is for
   - [x] The supporter/user (i.e. who created the pledge) 
   - [x] Whether the pledge is anonymous or not
   - [x] A comment to go along with the pledge
 - [ ] Implement suitable update/delete functionality, e.g. should a project owner be allowed to update a project description?
 - [ ] Implement suitable permissions, e.g. who is allowed to delete a pledge?
 - [x] Return the relevant status codes for both successful and unsuccessful requests to the API.
 - [x] Handle failed requests gracefully (e.g. you should have a custom 404 page rather than the default error page).
  
 - [x] Use Token Authentication.
 - [ ] Implement responsive design [Front end - REACT]

### Submission

 - [x] A link to the deployed project.
 - [ ] A screenshot of the homepage.
 - [ ] A screenshot of the project creation page.
 - [ ] A screenshot of the pledge creation form
 - [ ] A screenshot of a project with pledges.
 - [ ] A screenshot of the resulting page when an unauthorized user attempts to edit a project (optional, depending on whether or not this functionality makes sense in your app!)