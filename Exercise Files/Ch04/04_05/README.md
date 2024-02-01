# Chapter 4 Lesson 5
Working with useEffect in React

Learned that useEffect is typically used to manage side effects that aren't related to a components render. Things like console messages, loading data, etc can use useEffect.

A side effect = something that happens alongside the render.

UseEffect takes in two arguments, the first is the function and the second is when the effect is being called. 

Start by setting it as an empty list (the second argument). Call this the dependency array! Because we can use this to define when this should be called. Pass in a property to listen for any changes in this array, like the state from useState!