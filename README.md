# Indeed Clone

An **Indeed Clone** application designed to replicate core functionalities of the popular job-seeking platform, including job listings, user authentication, and job applications.

## Features
- **User Authentication**
  - Secure sign-up and login functionality.
  - Role-based access for Job Seekers and Employers.

- **Job Listings**
  - View jobs by category, location, and salary range.
  - Search and filter jobs with advanced options.

- **Job Applications**
  - Apply for jobs with uploaded resumes.
  - Track application status.

- **Employer Dashboard**
  - Post new jobs and manage job postings.
  - View applicant details and resumes.

## Tech Stack

- **Frontend**: React, Material-UI (MUI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed.
- MongoDB installed or access to MongoDB Atlas.

### Clone the Repository
```bash
git clone https://github.com/your-username/indeed-clone.git
cd indeed-clone
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variables:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up as a Job Seeker or Employer.
3. Explore the features and workflows.

## Future Enhancements

- Integrate payment gateways for premium job postings.
- Add analytics for employers to track job posting performance.
- Implement AI-based job recommendations.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


### Contact

For any queries or support, feel free to reach out:

- Email: jonnes400@gmail.com

---
Thank you for exploring the Indeed Clone!
