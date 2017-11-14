JSX allows writing of XML in JavaScript files
-This is already an ability but JSX is where JS and XML/HTML meet to create very special and extreme union
-Also allows writing of components that is very similar to end result seen in the browser and much faster


REACT COMPONENT WRITTEN IN JSX
class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet_avatar"/>
        <div className="tweet_body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    )
  }
}

-Very readable, literally HTML but in JS
-JSX is not a string, not in between quotes, it's like another type of JavaScript
-The () containing JSX is entirely Optional but recommended by
-Some developers believe mixing languages like this (JS and HTML) should never be in practice
-Most component code is tightly intertwined so it's convenient to house them together
-JSX use is also entirely optional
-In order to use JSX code, we need to transpile the code down into working JS (ES5 code) that all browsers
can handle


GOTCHAS
-JSX always has one and only one element that may have children, etc
return (
  <p>I am the first paragraph</p>
  <p>I am the second paragraph</p>
);
^^this will not run, we must wrap the paragraphs into a div element

return (
  <div>
    <p>I am the first paragraph</p>
    <p>I am the second paragraph</p>
  </div>
);
^^this will work and return both paragraphs, it's conceptually impossible to return two values in JS


BABEL AND WEBPACK
-Babel allows the use of new JS features before they are standardized and implemented in the browser
-Meaning writing the most modern code is possible without worrying of browser support

-Webpack can provide modules using Node's version of the CommonJS module system
-When compiling with Webpack, it will check every file for things that need to import and include the code
-Webpack wraps every module in an IIFE(immediately invoked function expression) to ensure no variable is
global
-Also transforms the code we're bundling


WRITING MODULAR CODE
-Create components directory in the `src` directory and add file with export content
`/src/components/foo.js`
*code in `foo.js`*
export const message = 'I am a component!'

-Import the component in the `index.js` file
-files are always referred to using a relative path(even if they're in the same directory)
*code in `ndex.js`*
import {message} from './components/foo'


NAMED EXPORTS
-Named exports allows exporting of several things at once, done by exporting an object
-We can choose to either import entire thing then reference they keys or import one specific key

// In a file called `fruits.js`
export default {
  apple: 'red',
  banana: 'yellow',
};

// In a file in the same directory
import fruit from './fruits';
console.log(fruit.apple); // prints 'red'

// In another file, also in the same directory
import { apple } from './fruits';
console.log(apple); // prints 'red'


DEFAULT EXPORT
-Exporting just one thing, useful for exporting components in their own file
-Done by exporting a reference to export or inline the value you want to export
-This method is used often

// In a file called `Tweet.js`
import React from 'react';

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}

export default Tweet;

// In a file in the same directory
import Tweet from './Tweet';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Tweet />,
  document.getElementById('root')
);
