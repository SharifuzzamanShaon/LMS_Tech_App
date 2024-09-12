# Learning Management App

A modern learning management system built with Node.js, Next.js, MongoDB, and Redis. This application provides a comprehensive platform for managing and delivering educational content, featuring real-time notifications, efficient data caching, and a user-friendly interface.

## Features

- **User Management:** Handles user roles, authentication, and authorization.
- **Course Management:** Create, update, and manage courses and content.
- **Real-time Notifications:** Keeps users updated with the latest information.
- **Efficient Caching:** Utilizes Redis for improved performance and scalability.
- **Modern UI:** Built with Next.js for a responsive and engaging user experience.

## Installation
   ### Backend
1. **Clone the Repository**

   ```bash
   git clone https://github.com/SharifuzzamanShaon/LMS_Tech_App.git
   cd learning-management-app


2. **Install npm**

   ```bash
   npm install

3. **ENV file in root dir**
    ```
    MONGO_URI=your_mongodb_connection_string
    REDIS_URL=your_redis_connection_string
    JWT_SECRET=your_jwt_secret

   
    SMTP_HOST = smtp-relay.brevo.com
    SMTP_USER = mdshaon2200@gmail.com
    SMTP_PASSWORD = hbfz wasz ykcv irla

    FROM_EMAIL = md********@gmail.com
    CLIENT_URL = http://*******

    CLOUD_NAME = daaxwtbba
    API_KEY = 416624678919151
    API_SECRET = CT9o3mEVvEQ0Dp1kbNNMFfg-BMI
    REDIS_URL = 'redis://   default:Ab****YzZmJlMmVkYzQ0ZjNlYjMyZjFiM2I4N2FmMzdhYXAxMA@strong-rabbit-***805.upstash.io:6379'

    ACC_ACTIVATION_SECRETKEY = 'MmVkYzQ0ZjNl'

    ACCESS_TOKEN_KEY= '***************'
    REFRESH_TOKEN_KEY = '**************'

    ACCESS_TOKEN_EXPIRE = 5 # define the hours
    REFRESH_TOKEN_EXPIRE = 3 # define the day

  ### Frontend
**Start the Frontend Application**

    
    cd client/my-app
    npm run dev

