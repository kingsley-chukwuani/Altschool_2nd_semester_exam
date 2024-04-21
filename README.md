# BLOGGING API

This project serves as a backend for a blogging platform, allowing users to manage and read blogs with various features.

## Features 

- User authentication (sign up, sign in)
- JWT authentication with token expiration
- CRUD operations for blog posts
- Blog states management (draft and published)
- Pagination, search, and sorting for blog listings
- Auto-calculated reading time for blogs
- Update read count upon blog viewing

## Tech Stack

- Node.js: Server-side JavaScript Runtime environment
- Express.js: Web application framework for Node.js
- MongoDB: NoSQL Database
- Mongoose: MongoDB object modeling tool
- JWT: For token-based authentication
- Winston: Logging
- Jest/Supertest: For unit and integration testing.
- Render: Hosting and deployment platform.

## Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/Kingsley-chukwuani /blogging-api.git
cd blogging-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory and fill it with the following environment variables:
     ```
     Database _URI=mongodb
     JWT_SECRET_KEY=your_jwt_secret
     PORT=9000
     ```

4. Run the server:

```bash
npm start
```

## API Endpoints

| Methods | Endpoint                  | Protected | Description                          |
| ------- | ------------------------- | --------- | ------------------------------------ |
| POST    | /api/auth/register       | No        | Registers a new user                 |
| POST    | /api/auth/login          | No        | Logs in a user                       |
| GET     | /api/blogs/:id           | No        | Retrieves a specific blog            |
| GET     | /api/blogs               | No        | Retrieves all published blogs       |
| POST    | /api/blogs               | Yes       | Create a new blog                    |
| PATCH   | /api/blogs/:id           | Yes       | Edit a specific blog                 |
| DELETE  | /api/blogs/:id           | Yes       | Deletes a specific blog              |


## Running the Tests

```bash
npm test
```

## Live Base URL



## Author

Kingsley Chukwuani 
