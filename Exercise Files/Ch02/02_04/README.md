# Chapter 2 Lesson 4
Uses babel to compile jsx as it comes to the browser by setting the type of script to "text/babel".

Learned JSX is not supported in the browser. Need to use a tool as a compiler.
Go to babeljs.io and paste jsx code to compile readable output.

The fastest way to get Babel to work in your react app is to add it as a CDN linked script.

Learned that .min.js means the javascript has been minified for the browser so that it will work a little bit more quickly.

Next, you must replace "text/javascript" with "text/babel" in the script tag with react in it.

Received a warning in the browser that using in-browser Babel transformer is recommends precompiling your scripts for production. This is because using Babel from the CDN, while quick and efficient, is not the most optimal way to use it. Later in the course we will use other tools before the code even gets to the browser.