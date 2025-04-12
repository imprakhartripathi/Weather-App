Sure! Here's a well-structured README for your project:

---

# Weather Dashboard with User Profile Management

A React-based Weather Dashboard with user authentication and profile management. This project allows users to fetch weather data for various locations, manage their profile details, and store their saved locations.

## Features

- **Weather Dashboard**: Fetch real-time weather data for any city.
- **User Authentication**: User signup and login for authentication.
- **Profile Management**: Users can edit their profile details and add saved locations.
- **Error Handling**: Provides error messages if something goes wrong while fetching weather data or updating user profile.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - CSS (for styling)
  - React Router
  - Fetch API (for making HTTP requests)

- **Backend**:
  - Express.js
  - Node.js
  - MongoDB (for storing user and location data)
  - JWT (for user authentication)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (for local development, or use a cloud service like MongoDB Atlas)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Frontend Setup**:

   - Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. **Backend Setup**:

   - Navigate to the `backend` directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

4. **Environment Variables**:

   - Set up the environment variables. Create a `.env` file in the `backend` directory and add your MongoDB URI and any other necessary configuration.

   Example `.env`:

   ```
   MONGO_URI=mongodb://localhost:27017/weather-dashboard
   JWT_SECRET=your-jwt-secret
   ```

5. **Start the Application**:

   - In the `backend` directory, run the following to start the Express server:

   ```bash
   npm start
   ```

   - In the `frontend` directory, run:

   ```bash
   npm start
   ```

   This will launch the frontend on `http://localhost:3000` and the backend on `http://localhost:4000`.

### API Endpoints

- **POST `/signup`**: Sign up a new user
- **POST `/login`**: Log in an existing user and receive a JWT token
- **POST `/add-location`**: Add a saved location for the logged-in user
- **PUT `/edit-user`**: Update the user's profile information
- **GET `/weather`**: Fetch weather data for a specified city

### Example Request

```bash
curl -X POST http://localhost:4000/weather \
  -H "Content-Type: application/json" \
  -d '{"city": "London"}'
```

### Authentication

The project uses JWT (JSON Web Token) for authentication. After a successful login, the backend will issue a JWT token that should be included in the Authorization header for protected routes.

### Folder Structure

```
/weather-dashboard
  /frontend
    - Contains all the React-related files (UI components, styles, etc.)
  /backend
    - Contains the Express backend logic (routes, controllers, etc.)
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License.
