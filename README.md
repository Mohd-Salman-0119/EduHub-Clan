# EduHub 🎓

EduHub is a comprehensive Learning Management System (LMS) designed to facilitate interactive online learning by connecting instructors (admins) and students through courses and live lectures. The platform emphasizes personalized learning experiences, allowing students to select courses that match their interests and engage deeply with the course content and fellow learners. 📚

## Core Functionalities ⚙️

### Authentication
*Details about how authentication is handled*

### Authorization with RBAC
- **Role Definition**: *Details about different roles*
- **Admin Permissions**: *Details about admin permissions*
- **Student Permissions**: *Details about student permissions*

### Admin Side
- **Course Creation**: *Details about course creation*
- **Lecture Management**: *Details about lecture management*
- **Student and Course Management**: *Details about student and course management*

### Student Side
- **Course Selection**: *Details about course selection*
- **Lecture Access and Engagement**: *Details about lecture access and engagement*
- **Profile Management**: *Details about profile management*

## Interaction and Experience 💻
- **Search and Filter**: *Details about search and filter functionality*

## Tech Stack 🔧

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- GraphQL
- Apollo Server

**Frontend**
- React.js
- Redux
- Apollo Client
- Tailwind CSS
- Ant Design

## Installation 💾

To get started with the project, follow these steps:

1. Clone the repository.

```bash
https://github.com/Raghavbhati/EduHub-IdeaClan.git
```

2. cd folder.

```bash
cd backend/frontend
```

3. Install the dependencies using.

```bash
npm install & yarn install
```

3. Start the application by running.

```bash
npm run dev
```

## API Endpoints 🛰️

Our API is built with GraphQL. Here are some of the main queries and mutations:

**Queries**
- `users`: Get all users
- `user`: Get a single user profile
- `courses`: Get all courses
- `course`: Get a single course
- `lectures`: Get all lectures
- `lecture`: Get a single lecture

**Mutations**
- `createUser`: Register a new user
- `loginUser`: Login a user
- `passwordChange`: Change a user's password
- `deleteUser`: Delete a user
- `enrollCourse`: Enroll a user in a course
- `createCourse`: Create a new course
- `updateCourse`: Update a course
- `deleteCourse`: Delete a course
- `createLecture`: Create a new lecture
- `updateLecture`: Update a lecture
- `deleteLecture`: Delete a lecture

> Note: Only admins can perform certain actions such as creating, updating, and deleting courses and lectures.

## Frontend 🎨

Our frontend is designed to be intuitive and user-friendly. Here are some screenshots of our main pages:

*Add screenshots here*

## Important links 🔗

- **Portfolio** https://mohd-salman-0119.github.io/
- **LinkedIn** https://www.linkedin.com/in/mohd-salman-044599218/
- **Github** https://github.com/Mohd-Salman-0119/

---

Made with ❤️ by **Mohd Salman**
