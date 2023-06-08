Trulia Landing Returns

In this exercise, we'll be adding some interactivity and responsiveness to the trulia site.  There are four mocks that have been prepared

The Featured Item
* Create the styles for a featured item. When the class 'trulia-featured-grid-item' is added to to 'trulia-grid-item' it should grow to twice the width and height (**DONE**)
* Review the design mocks for the visual changes
* You will likely need to adjust the sizes and ratios of the various parts of the trulia-grid-item when it is featured (**DONE - need help with the address styling, though**)
* Create a script that attaches a click event to each trulia-grid-item that expands it to being featured AND removes featured from every other item (**DONE**)
* There should be an animation for the transition (suggest making it short, such as 0.15s, and use an easing function) (**DONE**)
* Add the code to the interactive-style. (**DONE**)
* The user should have a visual queue that they can click on an trulia-grid-item. What is the usual behavior when the cursor hovers over links? (**DONE**)

The Grid: Responsive Issues (**DONE**)
* The grid of properties looks odd at both very large and small sizes. 
* At sizes above 1600px, make it 6 across (**DONE**)
* At sizes above 1200px, make it 4 across (**DONE**)
* At less than 768px, make it 2 across (**DONE**)

The Header (**DONE**)
* The header should show a hamburger at 1024px and below (**DONE**)
* The navs should stack and display similar to the mock. (**DONE**)
* Clicking on the hamburger should allow the menu to open and close (**DONE**)
* There is a class on the UL's in the navigation called "trulia-nav-mobilehide".  Use it to show/hide the navigation (**DONE**)




Hints:
* trulia-grid uses CSS grid.  Can you span multiple grids?
* trulia-grid-item and/or trulia-grid-featured-item use flexbox
* CSS transition timing can be controlled by https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
* The method querySelectorAll() will return an array of objects that match (whereas querySelector() only returns the first one)
* The method getElementsByClassName will return an array of objects that match the class name


