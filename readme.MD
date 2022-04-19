[![CodeSnip](https://img.shields.io/website?label=CodeSnip&style=for-the-badge&url=https://snipacode.netlify.app/)](https://snipacode.netlify.app/)

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

- To handle the 404 routes which you have doesn't specified in the url of routes in your application is by No Match Routes.
- For that you have to specified a special route by using a asterisk(\*) symbol.
- It's handle your page not found(404) Routes

```ruby
       <Route path="*" element={<NoMatch/>}></Route>
```
