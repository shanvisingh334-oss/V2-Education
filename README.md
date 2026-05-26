# V2 Education

An all-in-one educational platform designed for Class 10 CBSE Board students.

## Overview
V2 Education offers comprehensive learning resources, chapterwise quizzes, a doubt-solving forum, and a full admin panel. Inspired by top apps like Next Toppers, V2 Education is available on Web and Mobile platforms.

## Key Features
- **Subject Coverage**: All subjects for CBSE Class 10 (Maths, Science, SST, English, Hindi)
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
├── web/              # React.js web client
├── mobile/           # React Native mobile client
├── backend/          # Node.js Express backend
├── CONTRIBUTING.md   # Contribution guidelines
└── README.md         # Project documentation
```

## Technology Stack

### Frontend (Web)
- React.js 18.2
- React Router v6
- Axios for API calls
- Material-UI for components

### Frontend (Mobile)
- React Native 0.72
- React Navigation 6
- AsyncStorage
- Native Components

### Backend
- Node.js + Express
- MongoDB (Mongoose ODM)
- JWT Authentication
- Bcryptjs for password hashing
- Multer for file uploads

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### 1. Web App Setup
```bash
cd web
npm install
npm start
```

The web app will run on `http://localhost:3000`

### 2. Mobile App Setup
```bash
cd mobile
npm install
npm run android  # for Android emulator
# or
npm run ios      # for iOS simulator (macOS only)
```

### 3. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and other configs
npm run dev
```

The backend API will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Subjects
- `GET /api/subjects` - Get all subjects
- `GET /api/subjects/:id` - Get subject by ID
- `POST /api/subjects` - Create subject (admin only)
- `PUT /api/subjects/:id` - Update subject (admin only)
- `DELETE /api/subjects/:id` - Delete subject (admin only)

### Quizzes
- `GET /api/quizzes` - Get all quizzes (with filters)
- `GET /api/quizzes/:id` - Get quiz by ID
- `POST /api/quizzes` - Create quiz (admin only)
- `PUT /api/quizzes/:id` - Update quiz (admin only)
- `DELETE /api/quizzes/:id` - Delete quiz (admin only)

### Doubts Forum
- `GET /api/doubts` - Get all doubts (with filters)
- `GET /api/doubts/:id` - Get doubt by ID
- `POST /api/doubts` - Create a doubt (requires auth)
- `PUT /api/doubts/:id/answer` - Answer a doubt (admin only)
- `PUT /api/doubts/:id/close` - Close a doubt
- `PUT /api/doubts/:id/upvote` - Upvote a doubt

## Project Architecture

### Backend Structure
```
backend/
├── models/           # Database schemas
├── controllers/      # Business logic
├── routes/           # API routes
├── middleware/       # Custom middleware
├── config/           # Configuration files
├── server.js         # Main app file
└── package.json
```

### Web Structure
```
web/
├── src/
│   ├── pages/        # React page components
│   ├── components/   # Reusable components
│   ├── styles/       # CSS files
│   ├── App.js        # Main component
│   └── index.js      # Entry point
├── public/
└── package.json
```

### Mobile Structure
```
mobile/
├── screens/          # App screens
├── navigation/       # Navigation config
├── App.js            # Main component
├── index.js          # Entry point
└── package.json
```

## Features Implemented

### Core Features
- ✅ User Authentication (Register/Login)
- ✅ User Profile Management
- ✅ Subject browsing and organization
- ✅ Quiz creation and management
- ✅ Doubt Forum with answer functionality
- ✅ Progress tracking
- ✅ Admin Dashboard

### Database Models
- User (with roles: student/admin)
- Subject (with chapters)
- Quiz (with questions)
- Doubt (with answers and upvotes)

## Development Guidelines

### Code Style
- Use ES6+ JavaScript
- Follow naming conventions (camelCase for variables, PascalCase for components)
- Comment complex logic
- Keep functions small and focused

### Commits
- Use meaningful commit messages
- Format: `[type]: description` (e.g., `feat: add quiz creation`)
- Types: feat, fix, style, refactor, docs, test

### Testing
- Unit tests for backend (Jest)
- Component tests for React
- End-to-end tests recommended

## Environment Variables

Create a `.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/v2-education
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

## Troubleshooting

### Backend won't connect to MongoDB
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- Verify network connection

### Port already in use
- Change PORT in .env or use: `PORT=5001 npm run dev`
- Or kill the process: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

### Module not found errors
- Run `npm install` again
- Clear node_modules: `rm -rf node_modules && npm install`

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is open source and available under the MIT License.

## Support

For support, email support@v2education.com or create an issue on GitHub.

---

**Built with ❤️ for CBSE Class 10 students**
