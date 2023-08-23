1. JSX?
JSX is the HTML like syntax for creating React element.

2. React.createElement vs JSX?
-> React.createElement is the way of creating React element using core react. where as jsx is html like syntax for creating react element.
-> In React.createElement we define class as class:"title" where as in jsx we define className="title"

3. Benefits of jsx?
-> In jsx we can write javascript code in {}
-> It avoids cross-site scripting attacks. means when data is coming from bad api if it is malicious then jsx wont allow. because it will sacn the data

4. Behind the scenes of jsx?
->jsx code is not understand by the js engine.But still we are getting output in browser this is because jsx is transpiled before it reaches the js engine.
-> Transpiled is nothing but converting jsx into the code in which browser understands.

5. Babel and parcel role in jsx?
-> jsx will be transpiled before it reaches the js engine. this is done by the parcel.Not only parecl can do this it takes help of other dependencies and one of that is Babel. 
-> Babel will transpiles the jsx into the code in which browser understands.

6. Components?
-> everything in React is a component. like when we build app header, button, nav, footer, input box everything is component.
-> Components are two types
1. class based components
2. functional based components

7. Functional Components?
functional components is nothing but a normal javascript function that returns the jsx piece of code react element.
-> Component composition:
if we keep one component inside other component that is know as component composition.
