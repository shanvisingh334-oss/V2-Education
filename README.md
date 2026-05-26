# V2 Education

An all-in-one educational platform designed for Class 10 CBSE Board students.

## Overview
V2 Education offers comprehensive learning resources, chapterwise quizzes, a doubt-solving forum, and a full admin panel. Inspired by top apps like Next Toppers, V2 Education is available on Web and Mobile platforms.

## Key Features
- **Subject Coverage**: All subjects for CBSE Class 10 (Maths, Science, SST, English, Hindi...)
- **Video Lessons & Notes**: Easy-access learning resources per chapter
- **Quizzes & Tests**: Practice with chapterwise quizzes and mock exams
- **Doubt Forum**: Post doubts, get expert answers; solved and managed by admins
- **Progress Tracker**: Dashboard for students to monitor their learning
- **Notifications**: Updates on new material, activities, and deadlines
- **User Management**: Registration, login, profile pages
- **Admin Panel**:
  - User CRUD (Create, Read, Update, Delete)
  - Doubt resolution (answer/close questions)
  - Content upload & organization

## Project Structure
```
V2-Education/
├── web/         # React.js web client
├── mobile/      # React Native mobile client
├── backend/     # Node.js Express backend
└── README.md    # Project instructions
```

## Getting Started

### 1. Web App
- Located in `web/`
- Run: `npm install && npm start`
- Built with React.js (expand with proper routes and pages)

### 2. Mobile App
- Located in `mobile/`
- Run: `npm install && npm run android` (or `npm run ios` for iOS)
- Built with React Native (link to shared backend APIs)

### 3. Backend
- Located in `backend/`
- Run: `npm install && npm start`
- Built with Node.js (Express, MongoDB or Firebase)
- Handles authentication, user/content CRUD, quiz and doubt logic

### 4. Admin Panel
- Initially, basic functionality will be part of web client
- Plans for a standalone `admin/` dashboard (to be added)

## Next Steps
- Scaffolding for each app (web/mobile/backend) to be committed
- Connect backend APIs with web & mobile clients
- Expand features: quizzes, admin dashboard, doubt forum, etc.

---

**Contributions are welcome!**
