# Feed Reader Testing with Jasmine

## Table of Contents

* [Project Overview](#project-overview)
* [Instructions](#instructions)
* [Installation](#installation)
* [Tests in this Project](#tests-in-this-project)
* [Credits](#credits)
* [External Code Used in this Project](#external-code-used-in-this-project)
* [Acknowledgements](#acknowledgements)
* [Contributing](#contributing)
* [License](#license)

## Project Overview

The Udacity overview for this project states:
"In this project you are given a web-based application that reads RSS feeds.
The original developer of this application clearly saw the value in testing,
they've already included [Jasmine](http://jasmine.github.io/) and even started
writing their first test suite! Unfortunately, they decided to move on to start
their own company and we're now left with an application with an incomplete test
suite. That's where you come in."

## Instructions

To run the feed reader tests, scroll down to the bottom of the page and click on
the test that you would like to perform. You can also choose to run all tests
at once.

## Installation

Feel free to download the Feed Reader project to your PC.
1. Download the repository as a zip-file, extract it and open the index.html to
run the Feed Reader Testing. Jasmine is there already included and installed.
2. Clone the repository with Git Bash: ```$ git clone https://danielakuester.github.io/Udacity-Project05-Feed-Reader/```
and open the index.html to run the Feed Reader Tests.

## Tests in this Project

1. A test that ensures that all `allFeeds` objects are defined.
2. A test that ensures that all `allFeeds` objects have a URL defined and that the URL is not empty.
3. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
4. A test that ensures the menu element is hidden by default.
5. A test that ensures the menu changes visibility when the menu icon is clicked. Two expectations: does the menu display when clicked and does it hide when clicked again?
6. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
7. A test that ensures that the `.entry-links` start with "http://" or with "https://"
8. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Credits

* The [Study Jam by Mohamed Riaad](https://www.youtube.com/watch?v=Ut_L8YUImbw)
helped me to get a basic understanding of the feed reader project. It also
helped me to understand arrow functions better. His explanations helped me to
understand asynchronous testing better.
* The [JavaScript Testing course](https://www.udacity.com/course/ud549) gives
a solid introduction into testing with Jasmine.
* The [Jasmine Documentation](https://jasmine.github.io/tutorials/your_first_suite)
* An overview over [Jasmine's default matchers](https://medium.com/backticks-tildes/how-to-test-javascript-with-jasmine-framework-2e2b8dfa7a9e)
* A comprehensive [list of Jasmine's matchers](https://github.com/JamieMason/Jasmine-Matchers#jasmines-default-matchers)


## External Code Used in this Project

* The starter code for this project comes from the following [Udacity Frontend Feed Reader repository](http://github.com/udacity/frontend-nanodegree-feedreader). I downloaded it directly as a ZIP-file from my Udacity classroom instead of forking or cloning it. That is why you don't see a connection between the starter code and mine.
* The basic functions were taken from [Mohamed Riaad's Feed Reader Project](https://github.com/MOhammedRiaad/Feed-Test/blob/master/jasmine/spec/feedreader.js). I simplified most of the tests. For example, I got rid of the regular expressions.
* I also coded along to [Mohamed Riaad's Study Jam](https://www.youtube.com/watch?v=Ut_L8YUImbw).


## Acknowledgements
Big thanks go to my friends and family who support me during all of my projects.
I also thank the turtle squad on the Udacity/Google Scholarship Slack workspace.
and all of my study groups! But my biggest "Thank you for being there for us!"
goes to Mohamed Riaad and his fantastic study jam in which he explained
patiently why unit tests are important for becoming a good developer!

## Contributing

This repository is one of my projects as a Udacity student. I am planning to update the project later to document my learning progress and my growing
programming skills. Therefore, I most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

(c) Daniela Küster 2018.

This repository is licensed under the [MIT license](https://opensource.org/licenses/MIT).
For further information see [LICENSE](LICENSE)
