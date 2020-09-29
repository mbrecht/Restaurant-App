# Devlog for Spectrum front end coding challenge

### Setting up

Looking over the user stories and stretch goals, it will actually be a little easier for me to begin with the stretch goals before implementing any user stories. Setting up CI/CD and a TDD environment is part of my normal routine, so it's worthwhile to implement first.

I will be using AWS's EBS to host the server, and CodePipeline to populate that server any time there is a GitHub Action event on the master branch of the repo. In order to keep things clean, I'll be using bit.ly to create a usable link to redirect to the EC2 instance.

CI is implemented using GitHub Actions to run the testing suite whenever a pull request is submitted to the master branch.

For TDD, I will be using Jest and Enzyme. Fortunately, I [wrote the guide](https://github.com/I-O-Silver/testing) (okay, *a* guide) for setting this environment up, so the hardest part about this is writing good tests.


#### Finishing Up

An EC2 environment has been created for this app, and lives at ec2-52-37-53-234.us-west-2.compute.amazonaws.com. A bit.ly link has been made to clean this up: bit.ly/Spectrum-Challenge

The testing environment has been set up, and tests are automatically performed upon a pull request to the master branch. After the test completes and the code merges, AWS will grab the code and deploy it to the EC2 instance.

### Table

*A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant*

*A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet*


The first step in implementing this user story is laying the groundwork. I'm going to install styled-components, which will allow me to create custom React components and style them easily and quickly. 

The next step is to create a table component which will display the table of restaurants. The Table component will define the layout, and map over each entry to populate the rows. This data will be passed as a prop from the main App component, which will be doing most of the state management.

#### Finishing Up

A table component has been created, and has the capability to sort and display the relevant information from the array of restaurants. The main app component grabs the restaurant data and passes it in to the table component as a prop. Looking forward, keeping this data at the top level helps me implement the filter component, which is coming up next.

I still need to add styling, but that will probably be the final thing I do in this challenge project. Implementing the functionality is more important to me at the moment than having nice aesthetics.

### Filter

*A user should be able to filter restaurants by state. If a state is selected that does not contain any  restaurants, there should be something that indicates no restaurants were found for that state*

*A user should be able to filter by genre*

*State and Genre filters should default to “All” and take effect instantaneously*

This filter component will be a filter bar that will initially allow the users to select a filter for the state, then the genre. If I have time, I want to loop around and implement the functionality to add multiple filters to include restaurants from a vareity of genres or states.

This bar should be able to take the restaurants array, filter it by the selected filters, then send that back to the main app to update the state. 