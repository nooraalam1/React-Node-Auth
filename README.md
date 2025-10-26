## 📂 Project Structure

```
React-Node-Auth/
│
├── client/           # React frontend
└── server/           # Node.js backend
```

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nooraalam1/React-Node-Auth.git
cd React-Node-Auth
```

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

The frontend will run on a port like `https://localhost:5173`.

**Available routes:**

* `/login` → `localhost:5173/login`
* `/register` → `localhost:5173/register`

### 3. Backend Setup

```bash
cd ../server
npm install
npm start
```

The backend server will run on this port  `http://localhost:8081`.

### 4. Database Setup

1. Create the database:

```sql
CREATE DATABASE react_node_auth;
```

2. Use the database and create the `users` table:

```sql
USE react_node_auth;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```


## 💻 Usage

1. Run both the **frontend** and **backend** servers.
2. Open your browser and navigate to:

* `localhost:5173/register` → Create a new account
* `localhost:5173/login` → Login with an existing account


