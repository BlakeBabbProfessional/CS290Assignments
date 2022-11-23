# Assignment 2

**Assignment and Code Blog Entry due at 11:59pm on Monday 10/25/2021**<br/>
**Demo due by 11:59pm on Monday 11/8/2021**

The goals of this assignment are to exercise your CSS skills and to give you practice at making a coded page match a set of provided mocks, which is a common task for a web developer.

Here, you are provided with an un-styled `index.html` file, an empty `style.css` file, and a set of mocks (actually screenshots/captures) in the `mocks/` directory.  Your task is to add styles to `style.css` to make your rendered `index.html` page matches the mocks as closely as possible.  Below are listed some of the things you must accomplish.

## Text styling

* There are two different fonts used in this page: [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) (for the site title) and [Roboto](https://fonts.google.com/specimen/Roboto).  A third-party stylesheet is included in `index.html` to import these fonts from Google Fonts.

* Note the different font weights used across the page in the mocks.  The font weight in the header is different than the font weight of the each post's text, and there are various font weights in the filters sidebar.

* Pay attention to text alignment in the various elements of the page.

## Filters sidebar

* There should be appropriate spacing around all of the elements in the filters sidebar.

* The filter label (e.g. "Text") should appear on the same line as its corresponding input element (e.g. the text input box for the "Text" filter).  The exception to this is the "Condition" filter, where the label appears above the collection of checkboxes.

* Both text input boxes for the "Price" filter should appear on the same line.

* When the user hovers over the "Update" button, its appearance should change as depicted in the mocks.

* The styling of the actual `<select>` element for the "City" filter and of the actual `<input type="checkbox">` elements for the "Condition" filter are the browser defaults, and if you're using a different OS/browser combination than the one where the mocks were created, these may appear slightly different for you than they do in the mocks.  That's OK.  You don't need to apply styles to these.

## Posts

* The post layout should be somewhat responsive to the size of the browser viewport, in that columns should be added and removed as the size of the browser viewport changes.  Note that there should be equal space between all posts, both vertically and horizontally.

* Try to style your page so all posts in the same row have the same height.

* Pay attention to the alignment of elements within a single post.  The image should be centered within the post, and the post title, price, and location should all be on one line (if there's room) below the image, with space between them.

* The post price should be in a "pill" that has a slightly rounded border and a light gray background.  The text in this pill is slightly smaller than the rest of the text in the post.

* Each post should have a subtle border to help it stand out from the background.

* The post title is a link, and when the user hovers over it, it should become underlined.

## New post button

* The location of the "add post" button should not change relative to the viewport, even as the page is scrolled.

* The add post button itself should be a perfect circle.

* The add post button should have a subtle shadow behind it, to make it appear to be elevated slightly above the rest of the page.

* When the user hovers over the add post button, it should grow slightly to indicate its interactivity.  The mouse cursor should change to a pointing hand.  When implementing CSS to make the add twit button grow on hover, try to make it grow from the center instead of from the corner.

## Other notes on styling

Again, your goal is to match the mocks as closely as possible.  I'll show some tools in class that will help you do this.  Don't worry, however, if you don't get things like padding, margins, etc. exactly right.  Also, note that many style effects can be achieved in different ways using CSS.  However you implement various style features, the important thing is that they match the mocks as closely as possible.

One other thing to note is that the page incorporates several icons from the [Font Awesome icon library](https://fontawesome.com/icons?d=gallery).  This library is incorporated as a 3rd-party CSS file, and the icons are placed into the page using `<i>` elements whose HTML classes indicate which icon to display what icon style to use (e.g. `fas`, `fa-plus`).  Do not use these classes to apply styles to the page or apply styles directly to the `<i>` elements.  You should be apply styles to other elements to match the appearance of the mocks.

## Code Blog

Add an entry to your Code Blog reflecting on your experience with this assignment and publish the new entry.  Here are some questions you could answer (though these aren't the only ones):

* What was challenging about the assignment, and what specific kinds of problems did you have.  How did you solve those problems?

* What did you learn from the assignment?  Were there any special insights you had?  What did you find that you already knew?

* What kinds of resources were helpful for completing the assignment?  Specific websites?  Lectures?  The class Piazza forum?  The TAs?  How did you use each of these resources?

* What are one or two things you had to Google to complete the assignment?

## Submission

As always, we'll be using GitHub Classroom for this assignment, and you will submit your assignment via GitHub.  Just make sure your completed files are committed and pushed by the assignment's deadline to the main/master branch of the GitHub repo that was created for you by GitHub Classroom.  A good way to check whether your files are safely submitted is to look at the master branch your assignment repo on the github.com website (i.e. https://github.com/osu-cs290-f21/assignment-2-YourGitHubUsername/). If your changes show up there, you can consider your files submitted.

In addition to submitting your assignment via GitHub, you must submit the URL to your code blog entry (e.g. http://web.engr.oregonstate.edu/~YOUR_ONID_ID/cs290/blog.html) via Canvas by the due date specified above.  Make sure to submit your code blog URL on Canvas even if it hasn't changed from the one you submitted for previous assignments.

## Grading criteria

Note that only changes to `style.css` will be considered when grading this assignment.  Any changes you make to `index.html` will be ignored.

The assignment is worth 100 points total:

* Color: 15 points
  * 15 points: colors for all elements match the mocks

* Text: 15 points
  * 5 points: font faces for all parts of the page (approximately) match the mocks
  * 5 points: text alignment and indentation matches the mocks
  * 5 points: all text sizes and weights match the mocks

* Layout: 25 points
  * 10 points: sizes of major components (header, sidebar, buttons, posts, etc.) (approximately) match the mocks
  * 10 points: box sizes (margins, padding, borders) (approximately) match the mocks
  * 5 points: relative locations of components (buttons, posts, etc.) (approximately) match the mocks

* Details: 35 points
  * 15 points: grid of posts properly displays in columns, and the number of columns decreases as the viewport shrinks
  * 15 points: hover effects for links, buttons, etc. match the mocks and the description above
  * 5 points: static appearance (excluding interaction) of the "add post" button matches the mocks

* Code style: 10 points
  * 5 points: white space and new lines are used appropriately for CSS readability
  * 5 points: CSS selectors maintain low complexity (i.e. they're only as specific as they need to be)

In addition to your programming assignment grade, you will receive a pass/fail grade for your code blog entry, included in the code blog portion of your grade.
