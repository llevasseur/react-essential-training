# Chapter 5 Lesson 1
Working with uncontrolled components

Learned one of the most important things to think about when making a website is how are we going to handle form inputs. Learned how to use the useRef hook. A reference is a way that we can reach out to an individual element and check in with what its value is.

Learned to use e.preventDefault() to prevent the page from refreshing in a function that is used as an event handler.

The useRef object has a key called current, which is linked to the value of the thing it is referencing.

Use the useRef reference using the ref method in an input tag of a form! This is how you can set a variable from the users input.

Use alert to send a message to the user in the browser native dialog window.

Unlike useState that will rerender when there is a change, useRef is not going to rerender. We are always going to have to reach out to the current element value to see what it is.