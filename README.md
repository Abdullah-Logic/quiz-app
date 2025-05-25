# Quiz Application

## Overview

Welcome to the **Quiz Application!** This React and Redux-powered quiz app offers **real-time state management** and **dynamic data rendering**, ensuring a smooth and interactive user experience. It fetches questions from a local database, tracks user attempts, and calculates **earned points and results** dynamically. **Redux Toolkit** efficiently manages state, while React Router handles seamless navigation. Users can **start, attempt, and restart quizzes**, with results displayed in a structured table. The project follows **clean and modular code practices**, making it **scalable and easy to maintain**. Enjoy the quiz!

## Getting Started

To explore or modify the project, follow these steps:

**Step 1:** Clone the repository:

```bash
git clone https://github.com/Abdullah-Logic/quiz-app.git
```

**Step 2:** Navigate into the project folder:

```bash
cd quiz-app
```

**Step 3:** Install the dependencies:

```bash
npm install
```

**Step 4:** Run the project:

```bash
npm start
```

## Technical Documentation

**Core Technologies:**

- React.js
- Node.js
- Express.js
- Redux
- MongoDb
- Axios

## Structure

```bash
/client
  /public
    /index.html
  /src
    /components
        App.jsx
        Main.jsx
        Questions.jsx
        Quiz.jsx
        Result.jsx
        ResultTable.jsx
    /helper
        Help.jsx
    /hooks
        fetchQuestion.jsx
        setResult.jsx
    /redux
        questionReducer.jsx
        resultReducer.jsx
        store.jsx
    /styles
        App.css
        Index.css
        Main.css
        Result.css
    index.js
  .gitignore
  .env
  package.json
/server
  /controllers
    controller.js
  /database
    conn.js
    data.js
  /models
    questionSchema.js
    resultSchema.js
  /router
    route.js
  .env
  .gitignore
  package.json
  server.js
.env
.gitignore
README.md



```
