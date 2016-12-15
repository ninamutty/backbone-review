

## Tracing Events

It can be difficult to figure out when functions get called when we're listening to events and there's not one line of execution to follow.  Now you and your partner will be diving into the events and the functions listening to those events in this Trek App.  

### DOM Events

Using a whiteboard make a list of the DOM events each of the views are listening to and draw arrows to functions that the events trigger.  

-  When Button, 'See All Trips', is clicked
-  When button, 'Make Reservation', is clicked

![image of a DOM Event linked to a function](images/diagramEvents.png)

Now look at the event handler functions, do they invoke other events or functions?  Diagram those as well.

### Backbone Events

Look at the listener initialize functions.  Are any of the views listening to events on other objects, such as Models, Collections or Views?

Diagram those events as well.

### Check your work

Now cause the events to trigger, for example click on a trip, or add a reservation.  

-  Put a console log message in each Event Listener printing out the function name.  Then 'trigger' the event.  
-  Did they print? Were they in the expected order?  Why or why not?
-  How many events did you identify?  Check with a neighbor to see if they have the same.  