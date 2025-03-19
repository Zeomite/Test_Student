# Student Module - School Management System

This project is a Student Module for a School Management System. It provides a RESTful API to manage student records, including creating, retrieving, updating, and soft deleting students. The API is built with Node.js, Express.js, and Prisma ORM, connecting to a MongoDB database.

## Features

- **CRUD Operations:** Create, Read, Update, and Soft Delete student records.
- **Input Validations:** Ensures required fields are provided and valid.
- **Unique Constraints:** Validates unique registration numbers and class-specific roll numbers.
- **Pagination:** Support for paginated results when retrieving student records.
- **Error Handling:** Centralized error management with detailed error messages.

## Technologies Used

- **Node.js & Express.js:** Server and API endpoints.
- **Prisma ORM:** Database modeling and queries.
- **MongoDB:** NoSQL database for storing student records.
- **Nodemon:** Development tool for automatic server restarts.
- **JavaScript:** Core programming language.

## Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Zeomite/Test_Student.git
   cd Test_Student
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the project root with your MongoDB connection string:

   ```
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority"
   ```

4. **Set up Prisma:**

   Generate the Prisma client and push the schema to your MongoDB database usingg Custom made npm comman

   ```bash
   npm run schema-update   

5. **Run the Application:**

   - For development (with auto-restart using Nodemon):

     ```bash
     npm run dev
     ```

   - For production:

     ```bash
     npm start
     ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

All API endpoints are prefixed with `/api`.

### 1. Create Student

- **Method:** `POST`
- **Endpoint:** `/api/students`
- **Description:** Adds a new student record.
- **Request Body:**

  ```json
  {
    "registrationNumber": "REG12345",
    "name": "John Doe",
    "class": "10-A",
    "rollNo": 1,
    "contactNumber": "1234567890"
  }
  ```

### 2. Get All Students

- **Method:** `GET`
- **Endpoint:** `/api/students`
- **Description:** Retrieves all student records.
- **Query Parameters (Optional):**
  - `skip`: Number of records to skip.
  - `take`: Number of records to retrieve.

### 3. Get Student by Registration Number

- **Method:** `GET`
- **Endpoint:** `/api/students/:regNo`
- **Description:** Retrieves details for a student by registration number.

### 4. Update Student

- **Method:** `PUT`
- **Endpoint:** `/api/students/:regNo`
- **Description:** Updates an existing student's record.
- **Request Body:** (Include fields to update)

### 5. Delete Student (Soft Delete)

- **Method:** `DELETE`
- **Endpoint:** `/api/students/:regNo`
- **Description:** Soft deletes a student by updating their status to `false`.

## Error Handling

- **Global Error Middleware:** Catches exceptions and returns a `500 Internal Server Error` along with the error message.
- **Validation Errors:** Returns `400 Bad Request` if required fields are missing or invalid.
- **Not Found:** Returns `404 Not Found` if a student does not exist.
