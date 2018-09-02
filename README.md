# udemyReactCourse
react redux with es6 and unit testing

## creating react app
* create-react-app is a npm module which is installed globally.
* `create-react-app <appname>`

## readme
* this project consist of two readme file
  * at root level: this dscribe my learing of react.
  * ./udemy-react-course: this gives details of create-react-app details.

## develop 
1. `cd udemy-react-course`
2. `yarn start`
> note: build tools(eslint, babel and webpack etc) are configured in `react-script` module.

## my documentation - React library
React provides few API to create application. These are set of tools to be used for creating a react app
### React
> refer: https://reactjs.org/docs/react-api.html
* this package provides an entry point to react library.
* methods and classes exposed with React:
  1. Class React.Component: 
  2. Class React.PureComponent:
  3. methods createElement()
    * this method is not used directly if we use JSX.
  4. methods createFactory()
    * this method is not used directly if we use JSX.
### ReactDOM
> refer: https://reactjs.org/docs/react-dom.html
* this package provides api's(methods), which are related to DOM. This used at top level of your app.
* in other words, this provides an interface between react and dom(HTML)
* most of the react component do not/should not use this module.
* methods exposed with reactDom
  1. render(element/component, container [, callback]):
    * render a react element/ component into the DOM.
    * container is the DOM element on which the element/component is loaded. container element is not modified only the inner elements will be.
    * incase the element/component is already loaded then it will compare and update the DOM as necessary.
    * hence when render() is called for the first time, it will replace all the inner DOM elements and from next time it will call react's diffing algorithm to compare and do an efficient update.
    * optional callback function will be executed only after the component is rendered or updated.
  2. hydrate(element, container[, callback]):
   * same as render(), but is used while rendering components rendered by ReactDOMServer.
  3. unmountComponentAtNode(container):
    * simple method to unmount already rendered react component from the container.
    * return true if successful, and false if there was no component to unmount.
  4. findDOMNode(component):
    * use of this method is discourged.
    * if the component is loaded in the DOM, it returns the DOm element it self.
    * when the component is not found it returns null.
    * do not work on functional component.
    * expception is thrown when findDOMNode() is used in render().
  5. createPortal(child, container):
    * renders children into a DOM node that exists outside the hierarchy of DOM component.
### ReactDOMServer
> refer: https://reactjs.org/docs/react-dom-server.html
### DOM Elementes
> refer: https://reactjs.org/docs/dom-elements.html


## Notes:
### React:
react is basically a library which
allow us to create a hierarchy of
components keeping root as App.
#### general structure of react app:
1. there will be an HTML with an id where
the entire app is rendered.
2. index.js generally loads the entire
app into the html using ReactDOM.render()
method. 
> Note: ReactDOM API is used only in this
part of the application.
3. app.js combines all the component that
is required by the app.
4. the component should be exported if
other module requires that.

#### type of components:
1. functional(stateless) component:
* this are simple function which
returns JSX.
* this component do not have state
management capabilities.
* but it can call handler if it is
passed from container component as 
refererence.
* react should be imported in the
file where these are written.
* props are passed as a argument and 
can be accessed as 'props.<attributeName>'
2. class-based(container/stateful) component:
* these are class which extends
Componets obj from React API.
* these can contain functional
components and hence called as 
container components.
* props are assessed using 'this.props.<attributeName>'

#### general component do's:
1. every(any type of) component should
have a return statement, which returns
a JSX.
2. every component name, file name,
folder name should start with capital
letter to indicate that it contains
react components
3. dynamic content should be wrapped
inside single curly braces.
4. naming convention of argument in 
functional component should be as
'props'

#### state
* state is managed from inside a
component.
* when a state changes it re-renders
the DOM.
* state property cant be mutated
directly
(react/no-direct-mutation-state),
instead it should be changed
using setState() method.
* setState() method is defined by 
React API and can be called using
this.setState().
* setState() takes an object and merge
with the exiting state object.

#### props
* props is managed from outside a component.
* when a prop changes it also re-renders the DOM.
* props allow you to pass value/function from 
parent to child(embedded) component.

#### even handler
* react supported events are 
https://reactjs.org/docs/events.html#supported-events
* event handler method should end with
a name Handler. eg
`switchNameHandler`. This is to
identify that this function is not
called intentionally from the code,
but called by a event handler.

#### DOM Elements
* most used event handler in HTML or
normal java script is onclick(),
however, in React it is renamed as
'onClick()'.
is 
* only pass a reference of the 
function and dont use bracket in the
attribute. bracket will execute the 
function as soon as component is
rendered. eg use {this.fucntionName}
instead of {this.functionName()}