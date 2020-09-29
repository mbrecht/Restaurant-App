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

#### Finishing Up

The filter bar has been created and filters by either a single state or genre. The default value is set to show all, and that is done automatically or when the user decides to unfilter.

I made the decision to make filtered version of the array within state because filtering the original array removes the ability to remove any filters without performing another query to get a fresh set of restaurants.

Styling still needs to be implemented, but the functionality is coming along very nicely.


### Search

*A user should be able to enter text into a search field. When hitting the enter key or clicking on a  search button, the table should search results. Search results should match either the name, city, or  genre*

*A user should be able to clear the search by clearing the text value in the search input*

*A user should be able to combine filters and search. The user should be able to turn filters on and off  while a search value is present*

The search component should almost be a functional duplicate of the filter component, expect that users should be able to enter their own strings. The results can be "searched" with the search component, then those filtered results can be sent to the filter component, which will be able to filter them more if a user has chosen to do so.

#### Finishing Up

This component was fairly straightforward to implement. Just as I expected, it wasn't much more than filtering results through a search keyword before sending them to the filtered component to be further filtered.

One of the things I like about my solution is that there exist several iterations of the original list of restaurants. This helps maintain the original data while being able to manipulate it temporarily.


### Pagination

I took a little break before coming back to this, and have been trying to come up with a creative solution for the problem. The main issue is that I want to abstract the pagination out from Table.jsx, but I don't think that is possible due to the structure of Table. If I try to abstract my pagination out, I am going to run into an issue where I am trying to either render divs inside of a tbody element, or I will be trying to render a td element inside of a div element. Neither way works, so I may have to shove everything into my Table component in order to keep it all separate.

Fortunately, the pagination function shouldn't be much more complicated than splitting our restaurant array from (currentPage * countPerPage) to (currentPage * countPerPage + countPerPage). Because of the way everything is already set up, I should be able to just add that line in to my chain that displays my restaurants.

#### Finishing up

I ultimately ended up shoving everything into Table. The side-effect of that is that my file was getting too big for my comfort, so I ended up moving all of my styled components to their own files. This separates my view and control code, which, admittedly, shouldn't be mixed together anyways.


### Finishing up the project

The current page isn't looking so hot. It has all the functionality, and is deployed to AWS, but it pretty much looks like a bunch of unstyled HTML elements on a page.

The great thing about styled-components is that I already have everything abstracted out and set up to be styled, and I don't have to worry about any name collisions or weird styling rules getting passed around or overwritten. These make styling pretty straightforward and should be pretty easy to implement.