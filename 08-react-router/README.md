## react router

In this lesson we will learn how navigate from page to page in a react application

### Lesson Plan

- url as user experiance
- url for seo
- url for passing data
- reload should keep in the same page
- transfering data through the url convensions
- about react router
- installing react router
- Choosing a Router
- render a component based on path
- props sent from the router
- Switch 
- navigation bar
- Link
- Navigating by code
- lazy loading

### EX.

In this task we will create an entire todo application.

* The application we will create contains two pages.
* First page displays a list of todo items, a search list, and a delete button in each list item.
* You will need to create in this page the following components
  * TodoListPage - wrapper component for the entire page
  * TodoList - contains the list of TodoItem taken from the server: https://nztodo.herokuapp.com/api/task/?format=json
  * TodoItem - represents a single todo task contains also a delete button that will remove the item from the list as well as send a delete request to the url: https://nztodo.herokuapp.com/api/task/:id/
  * Search - represents a search form that will change the url: /todo?search=some-search 
  Also this will send a request to the url:  https://nztodo.herokuapp.com/api/task/?format=json&search=some-search and will repopulate the list of items.
  * CreateTodo - will contain a form to create a new todo task
  * the url for this page is: /todo
* Second page you will create will contain details about a single todo task as well as a form to update that todo task.
  * the url for this page is: /todo/:id
* combine bootstrap to design your app.

