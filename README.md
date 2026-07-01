# Online Veternairy Consultancy Platform

Introducing Vetcare, the ultimate healthcare app for animal lovers! Vetcare is a comprehensive platform that connects pet owners with veterinary professionals from all around the country. This project is developed using the MERN stack technology, and various functionalities have been implemented to make it a professional website.In addition, Vetcare features an admin panel that allows for easy management of doctors and appointments, making it simple to keep track of your pet's healthcare needs. With its sleek and user-friendly interface, Vetcare is the one-stop solution for all your pet care needs.

##Setting up this MERN project on your local machine typically involves the following steps:
###The front-end and Express code are in the same directory, with the Express API located at ./api
1. Clone or download the project source code to your local machine.
2. Install dependencies. This can be done using a package manager such as npm (Node Package Manager) or yarn.
3. Run the development server. This can be done using a command line tool such as the terminal, where you can run the command npm start or yarn start.
4. Access the project in your web browser by navigating to `http://localhost:3000` or another specified URL.

##To set up an Express API in the "./api" directory of a project, you can follow these steps:
1. Install the required dependencies. You can do this by running npm install or yarn install in the terminal and including the express module as a dependency.
2. Set up the server and configure middleware in a file such as index.js within the "./api" directory. You can do this by importing the express module and creating an instance of an express application, setting up routes for handling HTTP requests, and configuring middleware for handling requests and responses.
3. Set up environment variables for the project. This can be done by creating a file such as .env in the root directory and specifying key-value pairs for any environment-specific variables, such as a port number or database credentials.
For Example: create a file called .env and inside write.

```
MONGO=here will be your mongodb value      
JWT= Here will be your jason web token (Generate random number for secured your api).
```
3. Start the server by running a command such as node index.js or nodemon index.js in the terminal.
4. Test the API by sending HTTP requests to the server using tools such as Postman or cURL.

Note: These are general instructions for setting up an Express API, and the specific implementation details may vary depending on your project's requirements. Before starting, make sure to read the project's documentation or readme file to obtain any specific instructions or requirements.

## What Features Will You Find Here?
- Dynamic home page, serving as the landing page for all users.
- Admin and user dashboards.
- User login page with professional handling of all kinds of validations.
- Ability for a patient to select an appointment and view doctor information, as well as their own appointment information.
- Option to select a doctor and view appointment date.
- CRUD operations and additional features.
- Responsive design with a dynamic header and preloader.


#### What Technology are Using In This Projects

**Front End :** 
- React
- JavaScript(ES6)
- React-Bootstrap
- Html
- css5
- Meterail UI
- React Animation
- Preloader
- Alert
- Validation

**Back-End:** 
- MongoDb
- Express
- Cors
- Body-Parse
- Nodemon
- ImageUploader 
 
# Sign In Page (In this component Especial for me becaouse i have did everthing functionaliy via vanila Javascript and Make this strong Pass and Validation )
![Sign in and SignUp](https://user-images.githubusercontent.com/49386888/128677862-6609539f-822a-40d1-aa46-743ed1071b73.png)

# Sign Up (In this component Especial for me becaouse i have did everthing functionaliy via vanila Javascript and Make this strong Pass and Validation )
![Signup](https://user-images.githubusercontent.com/49386888/128677874-cac290d9-a75f-4dee-9312-d6542162be0f.png)

# Landing Page
![0 home page](https://user-images.githubusercontent.com/102970380/232577942-fac3c970-7a73-49a7-8552-bf6669a7771a.png)

# User Have to Logged in and Add his Appointment
![2 add appointment](https://user-images.githubusercontent.com/102970380/232580335-84528a71-17f5-4b18-baf9-bb175fcab7f8.png)

# Get AppointMenet
![1 appointment](https://user-images.githubusercontent.com/102970380/232580818-bc5ab94d-a12d-434e-84da-b8fe662daa2b.png)

# Daashboard (as i have left few functionality here for admin only )
![4 dashboard](https://user-images.githubusercontent.com/102970380/232581485-453fa0da-d2fd-4af8-87a1-7bbbaf4cb1bf.png)

# All Patient List (this feature only visible for doctor's and admin )
![5 all patients](https://user-images.githubusercontent.com/102970380/232582127-097c2244-ae55-40fb-a705-52c006766262.png)
