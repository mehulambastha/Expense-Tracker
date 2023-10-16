# Expense Tracker App

## Introduction

Welcome to the Expense Tracker app! This application is designed to help you create, manage, and track your expenses efficiently. It comes with a user-friendly interface and a secure login and authentication system to ensure that you have control over your own transactions.

## Features

- **User Registration**: You can register as a new user to access the app.

- **User Login**: Securely log in to your account with your credentials.

- **User Profile**: View your own profile to manage your account details.

- **Expense Management**: Create, modify, and delete expenses as you need.

- **Personalized Transactions**: The app ensures that you can only change and view your own expenses, adding a layer of security.

## Directory Structure
```
├── backend
|  ├── controllers
|  |  ├── expenseController.js
|  |  └── userController.js
|  ├── database
|  |  └── dbCnx.js
|  ├── middleware
|  |  └── validateToken.js
|  ├── models
|  |  ├── expenseModel.js
|  |  └── userModel.js
|  ├── routes
|  |  ├── expenses
|  |  |  └── expenseRoutes.js
|  |  └── users
|  |     └── userRoutes.js
|  └── server.js
├── package-lock.json
└── package.json
```

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/mehulambastha/Expense-Tracker.git
   ```
2. Navigate to the project directory
   ```bash
   cd Expense-Tracker
   ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Install nodemon
   ```bash
   npm install -g nodemon
   ```
5. Off we go!
   ```bash
   cd backend
   nodemon server.js
   ```
The server will be running at http://localhost:5001. ( or 5002, if 5001 is not working )


## API Endpoints

1. **Register a New User**

   - Endpoint: `POST /register`
   - Description: Register a new user with a unique username and password.

2. **User Login**

   - Endpoint: `POST /login`
   - Description: Log in with your credentials to access your account.

3. **View Current User**

   - Endpoint: `GET /current`
   - Description: View the details of the currently logged-in user.

4. **View User Expenses**

   - Endpoint: `GET /user/expense`
   - Description: Retrieve all expenses for the logged-in user.

5. **Add a New Expense**

   - Endpoint: `POST /user/expense`
   - Description: Add a new expense for the logged-in user.


## Dependencies

- [Express](https://expressjs.com/): A web application framework for building robust web applications.
- [Mongoose](https://mongoosejs.com/): An elegant MongoDB object modeling tool for Node.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): A library for creating and verifying JSON Web Tokens (JWTs) for user authentication.


## Contributors

- Mehul Ambastha (mehul.213amb@gmail.com)

## License

This project is licensed under the [MIT License](LICENSE).


Thank you for using the Expense Tracker app! If you encounter any issues or have suggestions for improvements, please feel free to reach out to the contributors. Enjoy managing your expenses with ease and security!
