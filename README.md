# Intern Management System

This project is a simple web application for managing a list of interns. It allows users to:

- View a paginated list of interns
- Add new interns
- Edit intern details
- Delete interns

The project uses `json-server` to simulate a RESTful API with the data stored in `interns.json`.

## Technologies Used

- **Vue.js** for building the frontend user interface
- **Pinia** for state management
- **vue-router** for handling navigation between pages
- **axios** for making HTTP requests
- **concurrently** for running the frontend and backend servers simultaneously
- **json-server** for simulating a RESTful API

## Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/perquis/ft-rt.git
cd ft-rt
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development servers**
   The project uses `concurrently` to run both the Vue development server and the json-server for the API simultaneously.

```bash
npm run dev
```

4. **Access the application**
   Once the servers are running, you can access the application in your browser at `http://localhost:5173`.

The `json-server` will be running at `http://localhost:3000` and serves the data from the `interns.json` file.

## Scripts

- `npm run dev` - Runs both the Vue development server and json-server.
- `npm run server` - Runs only the json-server.
- `npm run start` - Starts the Vue application.
