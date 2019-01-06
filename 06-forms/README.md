## dealing with forms

In this lesson we will learn how to deal with forms with react

### Lesson Plan

- forms are hard
- login form email and password and validation
- controled form
- uncontroled form
- Formik
- validation with Yup
- render prop

### EX.

In this ex. we will practice creating form with react and also component communications.

* Create the following 2 components: 
  * TodoForm
  * TodoList

* TodoForm is a component with a form created with Formik. The form is to create a todo task according to the json structure of a todo task

```ts
    {id: number, title: string, description: string, group: string, when: Date}
```

* you should add validation to to the inputs
  * title - required, minlength(5), maxlength(100), alphanumeric
  * group - required, minlength(2), alphanumeric
  * when - required, valid date string

* design the form using bootstrap

* when submitting the form successfully you should add the task to a TodoService class.

* The TodoService class can have a single instance. 
* The service will contain a BehaviourSubject containing the list of todo items.
* This service is use to communicate between the TodoForm and the TodoList

* The TodoList contains will display the list of todo items taken from the todo service.





