# Hire Me - Full Stack Job Portal
![image](https://github.com/user-attachments/assets/be77c903-df41-409b-b998-9f55387fbff9)


## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project
**Hire Me** is a full-stack job portal where job seekers can search and apply for job openings, upload their resumes, and manage their profiles. Recruiters can post jobs, manage applications, and accept/reject candidates. The platform uses **Clerk** for authentication and **Sentry** for error tracking and performance monitoring.

## Features
- 🏢 **Job Seekers:**
  - Search and apply for jobs
  - Upload and manage resumes
  - View application status

- 🎯 **Recruiters:**
  - Post and manage job listings
  - View, accept, or reject job applications
  - Access applicant resumes

- 🔧 **Additional Features:**
  - User authentication via Clerk
  - Sentry integration for performance monitoring
  - MongoDB query optimization using Sentry
  - Full deployment on **Vercel**

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Clerk
- **Monitoring:** Sentry
- **Deployment:** Vercel

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/TuShArBhArDwA/HireMe.git
   cd HireMe
Install dependencies:

npm install
Set up environment variables (see Environment Variables).

Start the development server:

npm run dev
Environment Variables
Create a .env file in the root directory and add the following:

MONGODB_URI=your_mongodb_connection_string
CLERK_API_KEY=your_clerk_api_key
SENTRY_DSN=your_sentry_dsn

## Usage
1. **Run the development server**  
   ```sh
   npm run dev
The application will be available at http://localhost:3000.

2. **Sign up or log in**
  - Job Seekers:
    - Search and apply for jobs.
    - Upload and manage resumes.
    - Track application status.
  - Recruiters:
    - Post and manage job listings.
    - View, accept, or reject applications.
    - Access applicant resumes.
3. **Manage applications**
- Recruiters can accept or reject applications.
- Job seekers can track the status of their applications.
4. **Monitor performance (Admins/Developers)**
- Use Sentry to track errors and optimize MongoDB queries.


## Deployment
- The project is deployed on **Vercel** for seamless hosting.
- To deploy the frontend and backend, use the following command:

  ```sh
  vercel
- Ensure your Vercel CLI is installed and logged in before running the command.
- Configure environment variables on Vercel to match your local `.env` file.
- After deployment, access the live application via the provided Vercel URL.

## Contributing
Contributions are welcome! If you'd like to contribute, follow these steps:

1. **Fork the repository**  
   Click the "Fork" button on the top-right corner of the repository page.

2. **Clone your forked repository**  
   ```sh
   git clone https://github.com/TuShArBhArDwA/HireMe.git
   cd HireMe

3. **Create a new branch**
   ```sh
   git checkout -b feature-name

4. **Make your changes and commit them**
   ```sh
   git add .
   git commit -m "Add feature: description of changes"

5. **Push your changes to your forked repository**
   ```sh
   git push origin feature-name

6. **Create a Pull Request (PR)**
- Go to the original repository on GitHub.
- Click on "Compare & pull request."
- Add a meaningful title and description.
- Submit the PR for review.

### Guidelines
- Follow best coding practices.
- Write clear and concise commit messages.
- Ensure the code is properly formatted and linted.
- Test your changes before submitting a PR.


## License
- Distributed under the MIT License. See LICENSE for details.

## Contact
- **Tushar Bhardwaj** - [Portfolio](https://tushar-bhardwaj.vercel.app/)
- **Connect 1:1** - [Topmate](https://topmate.io/tusharbhardwaj)
- **GitHub:** [TuShArBhArDwA](https://github.com/TuShArBhArDwA)
- **LinkedIn:** [Tushar Bhardwaj](https://www.linkedin.com/in/bhardwajtushar2004/)
- **Email:** [tusharbhardwaj2617@example.com](mailto:tusharbhardwaj2617@example.com)


