# TaskDuty — Full Stack Task Manager

A connected full-stack app with a React frontend (TaskManager) and an Express + MongoDB backend (TaskManager Server).

## Project Structure


TaskDuty/
  server/          ← Express + MongoDB API
 Server.js
 .env
 Controllers/Taskcontroller.js
│Models/Taskschema.js
 Routes/Taskroutes.js
 Middlewares/Taskmiddleware.js
 package.json
client/          ← React + Vite frontend
    vite.config.js
    src/
        Context/Taskcontext.jsx  ← API-connected (replaces localStorage)
         Pages/
        Homepage.jsx
        MyTask.jsx
         NewTask.jsx
        Components/
            TaskForm.jsx
            


## API Endpoints

Method Route            Description    

 GET     /api/tasks        Get all tasks      
 GET     /api/tasks/:id    Get single task    
 POST    /api/tasks        Create a task      
 PUT     /api/tasks/:id    Update a task      
 DELETE  /api/tasks/:id    Delete a task      

## Setup & Run

### 1. Start the backend server

bash
cd server
npm install
npm run dev       # uses nodemon
# or: npm start


Server runs on http://localhost:5000

### 2. Start the frontend

bash
cd client
npm install
npm run dev


Frontend runs on http://localhost:5173

The Vite dev server proxies `/api` requests to the backend automatically.

## Environment Variables (server/.env)


PORT=5000
MONGO_URL=mongodb+srv://ltimi856_db_user:<Password>.mongodb.net/taskduty
# APP_SECRET=your_secret   (optional — auth middleware is skipped in dev when not set)


## Task Schema

js
{
  title:       String  (required)
  description: String  (required)
  tag:         "urgent" | "important" | "normal"  (default: normal)
  createdAt:   Date    (auto)
  updatedAt:   Date    (auto)
}

