# Backbone Review

Review what we have learned so far with Backbone by digging into the completed Backbone application version of Trek, included in this repo.

**Fork and clone this repository to follow along.**

***

## 1) Review Components
Below are the Backbone components we have focused on to build our single page applications.

- [Model](#models)
- [Collection](#collections)
- [View](#views)
- [Events](#events)

### Model
Models are ... blah blah. Brief info on what we've covered so far

[Backbone.model Documentation](http://backbonejs.org/#Model)

### Collection

[Backbone.collection Documenation](http://backbonejs.org/#Collection)

### View

**.el**
A view's .el property is it's DOM element. Every view has one and by default, unless otherwise defined, is a div element.

**$el**
A cached jquery object so that you
It gives you access to jquery methods like `.show()`, `.hide()` and `.addClass()`

[Backbone.view Documenation](http://backbonejs.org/#View)

### Events
Defined inside of Backbone.views,  a view listens to the model "change" events, and react or re-render themselves appropriately.



[Backbone.events Documenation](http://backbonejs.org/#Events)

**Activity:** List all the components of Trek
List all of the components

***

## 2) Review How the Components Interact with Each Other

- [Rendering Views](#rendering-views)
- [Tracing Events](#tracing-events)
- [Initial Page Load](#initial-page-load)

### Rendering Views

**HTML has hierarchy** When an HTML element is nested inside of another element, the outer-most element has a higher hierarchy.

With Backbone Views, some views will be responsible for other views and act as a container with hierarchy over

For example, in the Rolodex project, the Rolodex view was responsible for rendering many contact views


With our application, a single page will likely have many different Backbone views rendering as once.


**Activity:** Views Responsibility

With this activity, we will get more comfortable recognizing the code that is

Each of the following views should correspond to a color. ex: trip view is yellow, trip_lis view is blue and app view is red. Use that color to draw a square around all the code that corresponds to that view, including view files, html


- trip view
- trip_list view
- app view



### Tracing Events

**Activity:**
Use the worksheet that corresponds to all the
Cut out the squares and put the segments of code in order in which they are ran, based on that event happening

- When Button, 'See All Trips', is clicked
- When button, 'Make Reservation', is clicked

### Initial Page Load
When the page initially loads, there is a lot of code in various parts of our application that are depended on to make sure it all comes together.

- On page load
