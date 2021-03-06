<!-- [![CodeSnip](https://img.shields.io/website?label=CodeSnip&style=for-the-badge&url=https://snipacode.netlify.app/)](https://snipacode.netlify.app/) -->

# React Router Dom

<!-- Your Instgram for CodeSnippets

<a href="https://snipacode.netlify.app/" target="_blank">
<img src="https://github.com/singhkunal2050/CodeSnip/blob/master/docs/SnipACode.png?raw=true" alt=singhkunal2050-cover style="margin-bottom: 5px;" />
</a> -->

<!-- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) -->

- Covering all the points of react-router-dom and Many More stuffs
- Added some remote changes

## Topic which is covered

- Introduction
- Installation
- Configuring Routes
- Links
- Active Links
- Navigating Programmatically
- No Match Route
- Nested Route
- Index Route
- Dynamic Route
- URL Params
- Relative Link
- Lazy Loading
- Authentication and Protected Routes

## Introduction

- It is a fully-featured and server-side routing library for react.
- It's help create and navigate between different URLs that make up your web application
- Provide different URLs for different Components in the application.

## Installation

- npm install react-router-dom@6(@6 is the version specification)
- yarn add react-router-dom.

## Configuring Routes

- Added a BrowserRouter in main.jsx for including main parent component
- Added Routes and Route for adding a routes in the components.

```ruby
import {BrowserRouter, Routes, Route} from 'react-router-dom
```

## Link

- A <Link> component is used to navigate to an <indexentry content=" component:about"> existing route that is defined using the <Route> component.
- To navigate to a route, specify the pathname used in the route as a value to the to prop.

```ruby
import {Link} from 'react-router-dom
```

## Active Link (NavLink)

- The <NavLink> component is similar to the <Link> component, except that several props can be specified that help you to conditionally add styling attributes to the rendered element.
- More used for active link like breadcrumb, for Navbar and etc. Where you especially needed to provide a more styling to the active current tab link.

```ruby
import {NavLink} from 'react-router-dom
```

### Different Props excepting is :-

- activeClassName props :- The class nameactive is applied to the active<NavLink>component/
- activeStyle props:- The activeStyle prop is also used to style the selected <NavLink>
- active props:- The exact prop can be used to apply the active class or activeStyle only when the path matches the browser's URL.
- strict props:- The <NavLink> component also supports the strict prop, which can be used to match the trailing slash specified in the to prop:
- isActive prop:- The isActive prop is used to determine whether the <NavLink> component should have the active class applied

## Navigating Programmtically

- For Navigate a url programmatically after click to the button. we are using a useNavigate hooks from react-router-dom.
- In useNavigate hooks from react-router-dom just pass the url name it will re-direct to the route to the url which you specified on the useNavigate hooks.

```ruby
import {useNavigate} from 'react-router-dom';

let navigate = useNavigate();
navigate('path-name')
```

## No Match Route

- When no other route matches the URL, you can render a "not found" route using path="\*"
- This route will match any URL, but will have the weakest precedence so the router will only pick it if no other routes match.

```ruby
<Route path="*" element={<NoMatch/>}></Route>
```

## Nested Route

- Nested Routes are Routes is required when you want to routes to the child components from the parent components.
- Routes can be nested inside one another, and their paths will nest too (child inheriting the parent)
- To rendering to the child components. It will required to wrap your child components routes inside the parent components routes. check the below example.

```ruby
<Route path"parent-routes" element={<parentComponent />}>
       <Route path="child-01" element={<ChildComponent />}></Route>
       <Route path="child-02" element={<ChildComponent />}></Route>
</Route>
```

- we are also using Outlet from react-router-dom to matching your child component. If you miss to add a Outlet it will not redirect to the child components.
- The Outlet component renders the matching child route with its respective component. Take a below example to include your Outlet

```ruby
import {Outlet} from 'react-router-dom'
<Outlet />
```

## Index Route

- Index routes can be thought of as "default child routes"
- When a parent route has multiple children, but the URL is just at the parent's path, you probably want to render something into the outlet.

```ruby
<Route>
       <Route index element={<ChildComponent />} />
</Route>
```

## Dynamic Route

- we can create a dynamic routes by just passing users/:id where id is anything. It's number and string. Take a below example

```ruby
<Route path="/users/:id" elements={<UserDetails />}></Route>
```

## URL Params

- For getting a id from the urls we are using a URL params.
- By using useParams(). We can extract a id from the specific domain.
- To use a useParams(). We need to import a useParams from react-router-dom. Consider the below example

```ruby
import {useParam} from 'react-router-dom'
let {id} = useParams();
```

## Lazy Loading

- To prevent the entire loading of the application at once, we use the concept of lazy loading to decrease the DOM load time and to increase the speed of the application. Take down a below example
- for use a lazy component we have to use a Lazy componenet from react. Take down a below cases.

```ruby
import {Suspense} from 'react'
const LazyLoading = React.lazy(() => import('component-url'))

return (
       <React.Suspense fallback="Loading ...">
              <Component />
       </React.Suspense>
)
```
