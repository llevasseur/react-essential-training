# Chapter 3 Lesson 4
Adding keys to list items.

Learned that each item in a list should have a unique key property. The reason is, it is possible things will get out of sync when rendering occurs, particularly if something is added at the front or in the middle of the list.

Learned that whenever we are returning an object from an arrow function, we need to point that arrow function at a set of parentheses, instead of just pointing it directly at curly braces.

Easy Solutions: add index to iterator in map: ( (dish, i) => key={i} ) 
React does not recommend this, as there still could be errors when rendering.

Solution: perform a data transformation. Create an object (dictionary) for the list before passing it as a property, that way you can confirm everything has a consistent unique id.

Got a warning that says children with the same key, '{dish.id}', ah it's because I was using a string for the value, when I should have been using the int. 