# TRINIT_7IQ_DEV02

> Team Members:
1. Abhishek Chavan
2. Akshaya Bistagond
3. Mansi Singh

> Technologies used
1. Database: MongoDB Atlas
2. Backend: Express.js (Node.js)
3. Frontend: ReactJS
4. State-management library: react-redux
5. UI design: Canva

> Stakeholders
1. Organizers
2. Employee (4 levels)
3. Users
 
> Key Features
1. **Authorization** An organization and users can register into the web application, and then login to access all functunalities. Passwords are hashed and only then stored in the database for users' security.
2. **Dashboard**  User specific dashboards are rendered whenever a user logs into the application.
3. **Raising a bug** Bugs can be raised by any user through the user dashboard
4. **CRUD apis for bug module** APIs for creating, reading, updating (threat levels and lifecycle), and deleting, bugs have been prepared. Only authorized employees can update the life cycle and threat level of a bug.

> Video Prototype
> https://drive.google.com/drive/folders/1eXkQ548TJR6U7o3hNzmc-jlR5kApePwB?usp=sharing

>To run application:
```
npm i
cd client
npm i
```
Create a .env file to store environmental variables
```
PORT = 5000
NODE_ENV = development
MONGO_URI = {mongodb atlas uri}
JWT_SECRET = {}
```
Create a .env.local file inside client directory to store environmental variables
```
REACT_APP_SERVER_BASE_URL = http://localhost:5000
```

