# Chapter 4 Lesson 2
Touring a Create React App project

Learned about the different dependencies in the project in the project.json file.

Learned about the main source files:
 - index.js : the entry point to the application, main javascript file we use to render app to dom.
    - App is wrapped in React.StrictMode to check if any code is malfunctioning, this will not be ran in production; only in development.
 - public/index.html : where we will inject our react code
 - App.js : The app component, components will be kept in their own files and exported. 
 - App.css : style for App component, imported into App.js

Create-React-App will reload you file whenever you save!
