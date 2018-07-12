/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
		/* This is our first test suite - a test suite just contains
		* a related set of tests. This suite is all about the RSS
		* feeds definitions, the allFeeds variable in our application.
		*/
		describe('RSS Feeds', () => {
				/* This is our first test - it tests to make sure that the
				 * allFeeds variable has been defined and that it is not
				 * empty. Experiment with this before you get started on
				 * the rest of this project. What happens when you change
				 * allFeeds in app.js to be an empty array and refresh the
				 * page?
				 */
				it('are defined', () => {
						expect(allFeeds).toBeDefined();
						expect(allFeeds.length).not.toBe(0);
				});


				/* TODO: Write a test that loops through each feed
				 * in the allFeeds object and ensures it has a URL defined
				 * and that the URL is not empty.
				 */

				/*
				 * Remark: The basic code for this test was taken from the study jam
				 * with Mohamed Riaad: https://www.youtube.com/watch?v=Ut_L8YUImbw
				 * Mohamed's code helped me to grasp the basic ES6 pattern for tests.
				 * I simplified his code a bit to avoid the use of regular expressions.
				 */
				it('feed URL is not empty', () => {
						allFeeds.forEach((feed) => {
								// Check if the URL is defined
								expect(feed.url).toBeDefined();
								// Make sure that the length of the URL string is > 0
								expect(feed.url.length).not.toBe(0);
								// When the URL contains "http", it can include "https", too
								expect(feed.url).toMatch("http");
						});
				});


				/* TODO: Write a test that loops through each feed
				 * in the allFeeds object and ensures it has a name defined
				 * and that the name is not empty.
				 */
				it('feed name is not empty', () => {
						allFeeds.forEach((feed) => {
								// Check if the name is defined
								expect(feed.name).toBeDefined();
								// Make sure that the length of the name string is > 0
								expect(feed.name.length).not.toBe(0);
								// Check if the feed name is a string
								expect(feed.name).toEqual(jasmine.any(String));
						});
				});

		});


		/* TODO: Write a new test suite named "The menu" */
		describe('The menu', () => {
				const menuIcon = document.querySelector(".menu-icon-link");

				/* TODO: Write a test that ensures the menu element is
				 * hidden by default. You'll have to analyze the HTML and
				 * the CSS to determine how we're performing the
				 * hiding/showing of the menu element.
				 */
				it('is hidden by default', () => {
						// Check if the class name is exactly "menu-hidden"
						expect(document.body.className).toEqual("menu-hidden");
				});

				 /* TODO: Write a test that ensures the menu changes
					* visibility when the menu icon is clicked. This test
					* should have two expectations: does the menu display when
					* clicked and does it hide when clicked again.
					*/
				it('changes visibility when the menu icon is clicked', () => {
						/* When the menu icon is clicked, the class name has to be exactly
						 * "menu-hidden".
						 */
						menuIcon.click();
						expect(document.body.className).not.toEqual("menu-hidden");
						/* When the menu icon is clicked again, the class name "menu-hidden"
						 * should be removed.
						 */
						menuIcon.click();
						expect(document.body.className).toEqual("menu-hidden");
				});

		});

		/* TODO: Write a new test suite named "Initial Entries" */
		describe('Initial Entries', () => {

				/* TODO: Write a test that ensures when the loadFeed
				 * function is called and completes its work, there is at least
				 * a single .entry element within the .feed container.
				 * Remember, loadFeed() is asynchronous so this test will require
				 * the use of Jasmine's beforeEach and asynchronous done() function.
				 */

				/**
				 * @description: The beforeEach-function with the parameter done is run
				 * before all of the asynchronous tests. It is called within the async
				 * tests to tell the tests when they should stop. loadFeed(0) loads the
				 * first feed. After that is done, the tests can begin. To complete this
				 * test, I coded along with Mohamed Riaad's Study Jam:
				 * https://www.youtube.com/watch?v=Ut_L8YUImbw
				 * I got rid of the regular expressions and tried to simplify the code
				 * as much as possbile.
				 */
				beforeEach((done) => {
						loadFeed(0, () => {
								done();
						});
				});

				/**
				 * @description Pass done as a parameter to the funciton to tell it that
				 * it has to rely on the asynchronous testing. Call the done()-function
				 * when the test is done.
				 */
				it("contain at least a single .entry element within .feed after loadFeed() is called", ((done) => {
						let entries = document.querySelector(".feed").getElementsByClassName("entry");
						let numberOfEntries = entries.length;
						// Make sure that there are more than 0 entries
						expect(numberOfEntries).not.toBe(0);
						done();
				}));


				it("contain a link starting with 'http(s)://'", ((done) => {
						let entries = document.querySelector(".feed").getElementsByClassName("entry-link");
						for (var i = 0; i < entries.length; i++) {
								expect(entries[i].href).toMatch('http://'|'https://');
						}
						done();
				}));
		});

		/* TODO: Write a new test suite named "New Feed Selection" */
		describe('New Feed Selection', () => {

				/* TODO: Write a test that ensures when a new feed is loaded
				 * by the loadFeed function that the content actually changes.
				 * Remember, loadFeed() is asynchronous.
				 */
				let firstFeedSelection;
				beforeEach((done) => {
					/**
					 * @description: Before the tests are started, the first feed
					 * loads; its content is stored in firstFeedSelection so that it
					 * can be later compared to the new, updated feed. After this is
					 * finished, the new, updated feed load(1) is loaded.
					 */
						loadFeed(0, () => {
								let firstFeedSelection = document.querySelector(".feed").innerHTML;

								loadFeed(1, () => {
										done();
								});
						});
				});

				/**
				 * @description: The innerHTML of the first feed is compared to that of
				 * the new feed. When they are different, the feed's content has changed
				 * properly.
				 */
				it("gets its content changed with loadFeed()", ((done) => {
						let newFeedSelection = document.querySelector(".feed").innerHTML;
						expect(firstFeedSelection).not.toBe(newFeedSelection);
						done();
				}));
		});

}());
