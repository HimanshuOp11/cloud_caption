# 📸 caption_cloud

caption_cloud is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to upload posts with captions. The application supports creating, viewing posts with a clean and responsive user interface.

---

## 🚀 Features

- 📝 Create posts with captions
- 📂 Upload and display posts
- 🌐 RESTful API integration

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- CSS 
- Axios

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB
- Mongoose

---

## 📂 Project Structure

caption_cloud/
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/
│ ├── node_modules/
│ ├── src/
│ ├── .env/
│ ├── package-lock/
│ ├── server.js
│ └── package.json
│
├── .gitignore
└── README.md

2️⃣ Backend Setup
cd backend
npm install
npx nodemon server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


🔑 Environment Variables

Create a .env file inside the backend folder and add:

MONGO\_URI=your\_mongodb\_connection\_string
PORT=5000


📌 Future Improvements

User authentication (JWT)
Like and comment system
User profile page


👨‍💻 Author

Himanshu Patra
MERN Stack Developer
