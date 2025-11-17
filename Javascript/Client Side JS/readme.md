## DOM Manipulation
1. Section Intro
2. Intro To The DOM
3. Document Element Properties
4. DOM Selectors - Single Elements
5. DOM Selectors - Multiple Elements
6. Traversing The DOM - Elements
7. Traversing The DOM - All Nodes
8. Create & Append Elements
9. InnerHTML vs createElement()
10. Refactor To Multiple Functions
11. Insert Elements, Text & HTML
12. Custom insertAfter() Challenge
13. Replace Elements
14. Remove Elements
15. Manipulating Styles & Classes
## Events
1. Section Intro
2. Event Listeners
3. Mouse Events
4. The Event Object
5. Keyboard Events & Key Properties
6. KeyCode Mini-Project
7. Input Events
8. Form Submission & FormData Object
9. Event Bubbling
10. Event Delegation & Multiple Events
11. Page Loading & Window Events
## ToDo List Project
1. Section Intro
2. Add Items To List (DOM Only)
3. Setting Up Git & Github (Optional)
4. Remove & Clear Items
5. Clear UI State
6. Filter Items
7. Local Storage Crash Course
8. Add Items To Local Storage
9. Display Items From Local Storage
10. Remove Items From Local Storage
11. Set Item To Edit
12. Update Item & Reset State
13. Prevent Duplicate Items
14. Deploy To Netlify
## Asynchronous JavaScript
1. Section Intro
2. Under The Hood: Thread Of Execution
3. Under The Hood: How Async JS Works
4. setTimeout & clearTimeout Functions
5. setInterval & clearInterval Functions
6. Callbacks
7. Crash Course On HTTP Requests
8. DevTools Network Tab
9. AJAX & XHR Object
10. Joke Generator Project Challenge
11. Callback Hell
12. Promises
13. Callback To Promise Refactor
14. Promise Chaining
15. Promises vs Callback Hell
16. Handling Multiple Promises with promise.all()
## Fetch API & Async Await
1. Section Intro
2. Fetch Basics
3. Random User Mini-Project
4. Fetch Options - Method, Body Headers
5. Typicode Todos Mini-Project - Part 1
6. Typicode Todos Mini-Project - Part 2
7. Fetch API Error Handling
8. Async & Await
9. Try...Catch Statements
10. Error Handling With Async & Await
11. Multiple Promises With Async & Await
## Library App Project
1. Section Intro
2. Theme Overview & Prep
3. API Overview & API Key
4. Page Router & Active Link
5. Display Popular Books
6. Spinner & Popular Authors
7. Book Details Page
8. Details Page Backdrop
9. Author Details Page
10. Swiper Slider
11. Search Functionality
12. Display Search Results
13. Add Pagination For Search
## Web Browser APIs
1. Section Intro
2. GeoLocation API
3. Show Location on a Map
4. Canvas Element & API
5. requestAnimationFrame() Method
6. Animated Clock - Part 1
7. Animated Clock - Part 2
8. Web Audio API
9. Music Player Project
10. Drum Machine Project
11. Video API
12. Video Player Project
13. Web Animations API - Ball Project
14. Speech Recognition API - Color Say Project
15. Speech Synthesis API - Text To Speech
## OOP - Constructors & Prototypes
1. Section Intro
2. What Is OOP?
3. Basic Principles of OOP
4. More on Object Literals & this Keyword
5. Constructor Functions
6. Literals vs Built-in Constructors
7. Working With Object Properties
8. Prototypes & The Prototype Chain
9. Adding Methods to the Prototype
10. Using Object.create()
11. Prototypical Inheritance & call()
12. OOP Game Challenge
## OOP - Classes, Getters, Setters & Private Properties
1. Classes
2. Class Inheritance
3. Static Methods
4. bind() & Defining this
5. Getters & Setters with Classes
6. Getters & Setters with defineProperty()
7. Private Property Underscore Convention
8. ES2022 Private Class Fields
9. Property Flags & Descriptors
10. Sealing & Freezing Objects
## Expense Tracker App (OOP Project)
1. Project Intro
2. UI Theme Setup
3. Project Planning & Diagram
4. Base Tracker, Income & Expense Class
5. Display Tracker Stats
6. Progress Bar & Balance Alert
7. App Class, New Income & Expense
8. Refactor to Single _newItem Method
9. Display New Income & Expense
10. Remove Income & Expense
11. Filter & Reset
12. Set Budget Limit
13. Storage Class & Budget Limit Persist
14. Persist Total Balance To Local Storage
15. Save Incomes To Local Storage
16. Save Expenses To Local Storage
17. Remove Incomes & Expenses From LocalStorage
18. Clear Storage Items
## Modules & Tooling
1. Project Intro
2. What Are Modules?
3. Installing & Using Node.js
4. CommonJS Modules
5. NPM Packages/Modules
6. ES Modules
7. Module Bundlers
8. Webpack Basic Setup
9. CSS & Style Loaders
10. HTML Webpack Plugin
11. Webpack DevServer Plugin
12. Babel Setup
13. CSS Minify Extract Plugin
14. Expense Tracker Refactor To Use Webpack
15. Deploy Expense Tracker To Netlify
## Iterators, Generators & Data Structures
1. Section Intro
2. Symbols
3. Iterators
4. Generators
5. Profile Scroller Project
6. Sets
7. Maps
8. Poll Project
9. Stacks
10. Queues
11. Linked Lists
## Unit Testing Algorithms
1. Intro & What Are Algorithms?
2. What is Unit Testing?
3. Getting Started with Jest
4. Grouping Tests Together
5. Reverse String Algorithm
6. Palindrome Algorithm
7. Array Chunking
8. Anagram Algorithm
9. Get Elements By Tag - jsdom
10. Has Duplicate IDs - jsdom
## Node.js Modules (Bonus Module)
1. Section Intro
2. fs (filesystem) Module
3. path Module
4. os Module
5. url & querystring Modules
6. http Module

## Reference
- DOM
  - window.document
  - document.body
  - document.body.innetHTML
  - document.body.innertText
  - DOCUMENT.links, document.links[i] -> an array
  - document.write()
  - document.all, document.all[i] -> an array
  - document.documentElement
  - document.head.children
  - document.body.children
  - document.doctype
  - document.domain
  - document.URL
  - document.characterSet
  - document.contentType
  - document.forms[i], document.forms[i].id, document.forms[i].method, document.forms[i].action...
  - document.forms[i].className, document.forms[i].classList
- Selecting
  - document.getElementById()
  - document.querySelector()
  - document.querySelectorAll()
  - document.getElementById().title -> getAttribute
  - document.getElementById().setAttribute('class', 'title') -> setAttribute
- DOM Element Relationship
  - document.querySelector().children, document.querySelector().children[i] -> an array
  - firstElementChild
  - parentElement
  - nextElementSibling
  - previousElementSibling
- DOM Node Relationships
  - document.querySelector().childNodes, document.querySelector().childNodes[i] -> an array
  - childeNodes[i].nodeName
  - childeNodes[i].textContent
  - childeNodes[i].outerHTML
  - childeNodes[i].innerText
  - parentNode vs parentElement
- Create Elements
  - document.createElement('tagname')
  - document.createTextNode()
  - document.appendChild()
- Inserting Elements
  -  insertAdjacentElement
  -  insertAdjacentText
  -  insertAdjacentHTML
     -  beforeBegin
     -  afterBegin
     -  beforeEnd
     -  afterEnd
  -  insertBefore -> Similar to appendChild but a little bit different
- Replace Elements
- Remove Elements
- Adding/Removing CSS Classes