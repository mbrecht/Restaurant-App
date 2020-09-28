# Devlog for Spectrum front end coding challenge

### Setting up

Looking over the user stories and stretch goals, it will actually be a little easier for me to begin with the stretch goals before implementing any user stories. Setting up CI/CD and a TDD environment is part of my normal routine, so it's worthwhile to implement first.

I will be using AWS's EBS to host the server, and CodePipeline to populate that server any time there is a GitHub Action event on the master branch of the repo. In order to keep things clean, I'll be using bit.ly to create a usable link to redirect to the EC2 instance.

CI is implemented using GitHub Actions to run the testing suite whenever a pull request is submitted to the master branch.

For TDD, I will be using Jest and Enzyme. Fortunately, I [wrote the guide](https://github.com/I-O-Silver/testing) (okay, *a* guide) for setting this environment up, so the hardest part about this is writing good tests.

