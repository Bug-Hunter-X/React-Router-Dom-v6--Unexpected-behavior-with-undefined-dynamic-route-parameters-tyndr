# React Router v6 Undefined Dynamic Route Parameters

This repository demonstrates a potential issue in React Router v6 when navigating to routes with dynamic segments without providing the necessary parameters.  In versions prior to v6, this often resulted in a 404 error.  V6 instead renders the component with undefined parameters, which can lead to runtime errors if not properly handled.

The `bug.js` file showcases the problem.  The `bugSolution.js` provides a solution involving proper error handling and input validation.

## Steps to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the behavior when navigating between routes.