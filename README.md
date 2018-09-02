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

## my documentation
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