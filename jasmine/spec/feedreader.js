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

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    });

}());
