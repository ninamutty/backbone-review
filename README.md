# Backbone Review

(add) INTENTION: think about bigger picture, not about just making a backbone app

Review what we have learned so far with Backbone by going over the essential components and

This repo includes a completed Backbone application version of Trek that we will refer to for the activities.

**Fork and clone this repository to follow along.**

***

## 1) Review Components
Below are the Backbone components we have focused on to build our single page applications. Each component has a brief explanation along with a link to it's documentation.

- [Model](#model)
- [Collection](#collection)
- [View](#view)
- [Events](#events)

### Model
Models are

The model will hold our applications business logic code.
[Backbone.model Documentation](http://backbonejs.org/#Model)

### Collection
Handles a group of related models.

[Backbone.collection Documenation](http://backbonejs.org/#Collection)

### View

**Notes on el and $el:**
- **el:** A view's .el property is it's DOM element. Every view has one and by default, unless otherwise defined, is a div element.
- **$el:** A cached jquery object so that you
It gives you access to jquery methods like `.show()`, `.hide()` and `.addClass()`

[Backbone.view Documenation](http://backbonejs.org/#View)

### Events
Defined inside of Backbone.views

[Backbone.events Documenation](http://backbonejs.org/#Events)

**Activity:** List all the components of Trek
List all of the components


***

## 2) How we have structured our Backbone applications
The point of backbone is to provide a very intentional structure to our front-end code, so that we know where to find the code that is handling the specific functionality of our application.

With Backbone being a less opinionated library/framework, it also has less rules and conventions on


### App.js


### Views
- **application_view** was the most arbitrary. Why is it there?
- **contact_view**
- **rolodex_view**


### Models

Right now our models have done very little. We have used them to set defaults.

Then can also...

We will utilize them a lot more with Tic-Tac-Toe, and that lesson will come on Monday.

### Collections


### That Other stuff
Because our Backbone application relies on a few other libraries to get it's gear'a'grinding, we have a json file that keeps track of those libraries and will include them into our project when we run `npm install`.

To add more libraries, or to see which ones are already included, open the `package.json` file and look under `"devDependencies": {}`

If this process sounds familiar, it's because it's basically the same as having a gem file in rails and running *'bundle install'*.

- **Webpack**

- **Underscore**

- **JQuery** Anytime you see that money sign, you're working with a Jquery object. That Jquery object is set by referring to a

***

## 3) Review How the Components Interact with Each Other
Each component is responsible for specific functionality of our application. These components rely on each other, which can quickly complicate how data flows through our application.

The below activities practice understanding how the components interact with each other.

- [Rendering Views](#rendering-views)
- [Tracing Events](#tracing-events)
- [Initial Page Load](#initial-page-load)

### Rendering Views

**The structure of our HTML has hierarchy** When an HTML element is nested inside of another element, the outer-most element has a higher hierarchy. That outer-element acts as a container for it's inner-elements.

Some backbone views will be responsible for other views and act as a container with hierarchy over the inner-elements that are generated from the views.

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
**Activity:**
When the page initially loads, there is a lot of code in various parts of our application that are depended on to make sure it all comes together. To help understand how this all fits together, let's leave ourselves a trail of breadcrumbs to follow.

To do so, we'll add a log line to the top of every function in our TREK app. Each line should be of form

```javascript
console.log(">>> BREADCRUMBS: #");
```

Where `#` is the order in which the log line appears when the app is started. If the function shouldn't be called when the page is first loaded, replace `#` with `does not print`.

Did things appear in the order you expected? Did you get any `does not print`s? Check in with the person next to you and verify, then revise your numbering if needed.

Now change your numbering to reflect the order that functions are called when various buttons are pressed.


## 4) Would this be a backbone app?


Soundcloud.com
HTML5zombo.com
