# Chapter 6 Lesson 3
Handling loading states in React.

Learned about the different states data can be in when being fetched from an API.

Loading State: we're fetching the data and but it hasn't come back yet
Success State: we have some data to display.
Error State: if something goes wrong.

These three states are required whenever we asynchronously get data. 

Express these states using useState hooks. Initialize then in our app, then set them in useEffect.

Make fetch more robust by adding another .then() to set the setLoading to false. 
Add a .catch() to a .then chain to catch an error, and setError