# Task Management App

## Short Description
This is a Task Management App that allows users to add, edit, delete, and reorder tasks in real-time using a clean, minimalistic UI. Tasks are categorized into "To-Do", "In Progress", and "Done" columns, and changes are synchronized instantly with a MongoDB backend via an Express.js API.

## Live Links
- **Live App:** [https://emaol-firebase-auth.web.app/](https://emaol-firebase-auth.web.app/)
- **Backend Repo:** [https://github.com/yourusername/task-management-backend](https://github.com/yourusername/task-management-backend)
- **Frontend Repo:** [https://github.com/yourusername/task-management-frontend](https://github.com/yourusername/task-management-frontend)

## Dependencies
- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - DaisyUI
  - axios
  - react-beautiful-dnd
  - @tanstack/react-query
- **Backend:**
  - Express.js
  - MongoDB
  - Mongoose
  - dotenv
  - cors

## Installation Steps

### Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-frontend.git
   cd task-management-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add necessary environment variables (if required).
4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-backend.git
   cd task-management-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your MongoDB connection string and any other required environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm run start
   ```
   Or, if you're using nodemon:
   ```bash
   npx nodemon server.js
   ```

## Technologies Used
- **Frontend:**
  - **React**: Library for building user interfaces.
  - **Vite**: Fast frontend build tool.
  - **Tailwind CSS**: Utility-first CSS framework.
  - **DaisyUI**: Component library for Tailwind CSS.
  - **React Query**: Data-fetching library for React.
  - **Axios**: Promise-based HTTP client.
  - **react-beautiful-dnd**: Library for drag-and-drop interactions.
- **Backend:**
  - **Express.js**: Fast, unopinionated web framework for Node.js.
  - **MongoDB & Mongoose**: NoSQL database and object modeling tool.
  - **dotenv**: Loads environment variables from a `.env` file.
  - **cors**: Middleware for handling Cross-Origin Resource Sharing.
