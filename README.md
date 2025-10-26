📂 Project Structure

React-Node-Auth/
│
├── client/           # React frontend
└── server/           # Node.js backend

🚀 Getting Started

1. Clone the repository
   git clone https://github.com/nooraalam1/React-Node-Auth.git
2. Frontend Setup
   cd React-Node-Auth/client
   npm install
   npm run dev

The frontend will run on a specific port (e.g., https://localhost:5173).

Available routes:

/login → localhost:5173/login

/register → localhost:5173/register

3. Backend Setup
   cd ../server
   npm install
   npm start
The backend server will run on a port like 8081.

4. Database Setup
   Open your MySQL client.
   Create the database: CREATE DATABASE react_node_auth;
   Use the database and create the users table:
   USE react_node_auth;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

💻 Usage

Run frontend and backend.

Open your browser and go to:

localhost:5173/register → Create a new account

localhost:5173/login → Login with an existing account

On successful login, backend will respond with user information or token (if implemented later).
