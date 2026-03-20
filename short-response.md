# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use exact terms and concepts from the lesson.

Your responses will each be evaluated out of 3 points for writing quality and 3 points for technical accuracy (6 points per question, 30 points total).

---

## Question 1 — REST Principles

The Todo Tracker API is a **RESTful** API. Identify at least **3 specific design decisions** in the API that make it RESTful, and explain what each one communicates to a client developer. Consider the URL structure, HTTP methods, and status codes used.

**Your answer here**: One thing that makes the Todo Tracker API RESTful is the URL structure because it uses nouns like `/todos` and `/todos/:id` instead of action words. That tells the client developer that the URL represents a resource, and the HTTP method is what explains the action. Another RESTful part is using the correct HTTP methods like `GET` to read todos, `POST` to create one, `PATCH` to update part of one, and `DELETE` to remove one. That helps the client know exactly what kind of request to send. It is also RESTful because it uses clear status codes like `200`, `201`, `400`, and `404`, which communicate whether the request worked, created something new, had bad input, or could not find the resource.

---

## Question 2 — Separation of Concerns

What problem is caused by mixing data logic and request/response logic in a single file? What does separating them into a model and controller enable? Be specific about what gets harder and what gets easier.

**Your answer here**: When data logic and request/response logic are mixed in one file, the code gets messy fast and each part becomes harder to understand, test, and change. For example, if you need to update how todos are stored, you might accidentally break HTTP response behavior too because everything is tied together. Separating them into a model and controller makes the model handle the data work and the controller handle `req` and `res`. That makes debugging easier, code reuse easier, and it becomes much simpler to update either the business logic or the API behavior without touching everything else.

---

## Question 3 — Request Lifecycle

Walk through what happens, step by step, when the user clicks a checkbox to toggle a todo's `isDone` field. Name each file and function in your MVC structure that gets involved, in the order it runs, and describe what it does.

**Your answer here**: When the user clicks the checkbox, the frontend sends a request to the server to update that todo's `isDone` value, usually with the todo id in the URL and the new value in the request body. In the MVC structure, the request first hits the route file, which matches the correct route and passes the request to the controller function, usually something like `updateTodo` or `toggleTodo`. Then the controller reads `req.params.id` and `req.body`, validates the request, and calls the model function to actually update the todo data. After that, the model finds the todo, changes the `isDone` field, returns the updated todo, and the controller sends the final response back with the proper status code and JSON.

---

## Question 4 — Code Sorting

Below is a `createTodo` function that does everything in one place. For each numbered line, identify whether it belongs in the **model** or the **controller**, and explain why.

```js
const createTodo = (req, res) => {
  /* 1 */ const { task } = req.body;
  /* 2 */ if (!task) return res.status(400).send({ message: 'task is required' });
  /* 3 */ const newTodo = { id: getId(), task, isDone: false };
  /* 4 */ todos.push(newTodo);
  /* 5 */ res.status(201).send(newTodo);
};
```

**Your answer here**: Line 1 belongs in the controller because it reads data from `req.body`, which is part of the HTTP request. Line 2 also belongs in the controller because it validates the request and sends a `400` response, which is request/response logic. Lines 3 and 4 belong in the model because they create the todo object and store it in the `todos` array, which is data logic. Line 5 belongs in the controller because sending `res.status(201).send(newTodo)` is part of building the HTTP response for the client.