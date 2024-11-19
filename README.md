# ArtSphere (2nd Place WesHack🥳)

Welcome to the repository for **ArtSphere**! This project demonstrates the integration of API data handling, in-memory operations, CRUD functionality, and cart management for an art collection. It showcases advanced skills in Flask development, data management, and seamless integration with a React-based frontend.

## ✨ Inspiration
We noticed that when visiting museums, it’s easy to forget the art pieces you’ve seen before or struggle to find a specific piece you want to see. That’s why we created Art Sphere—an app designed to help you keep track of the art you’ve explored, create a wishlist of pieces you want to see in the future, and access detailed information about any particular artwork. Art Sphere is your personal guide to making the most of your art experiences, whether past, present, or future.

## 🚀 How we built it
We built ArtSphere using a structured approach that combines practical technologies and a well-organized development process. For the backend, we utilized Flask, a lightweight Python-based micro-framework, to create RESTful API endpoints for managing art data. We leveraged Pandas for efficient data manipulation and handling, allowing us to load, store, and query art collection data from CSV files in-memory. Additionally, we implemented data scraping techniques to gather detailed information about art pieces, enabling a rich and diverse collection of data for our platform.

The frontend was built with Create React App using JavaScript and CSS, providing a dynamic and interactive user interface that seamlessly communicates with the backend using APIs. To ensure robust functionality, we implemented CRUD operations for managing art pieces, along with features like search, filtering, and cart management. The project was developed iteratively, focusing on seamless integration between the backend and frontend, resulting in a platform that combines the power of technology and user-centric design to enhance art exploration and engagement.

## 💢 Challenges we ran into
We encountered several challenges throughout the development of ArtSphere. On the backend, one of the initial hurdles was deciding on the right database to use for efficiently managing art data. For the frontend, the developer started learning CSS and JavaScript from scratch, which added a steep learning curve. Later, we faced significant "integration hell," as connecting the backend and frontend seamlessly proved to be more complex than anticipated. Debugging and ensuring smooth communication between the two systems took considerable time and effort, but ultimately, these challenges helped us learn and grow as developers.

## 🎉 Accomplishments that we're proud of
We take immense pride in our successful implementation of web scraping, which allowed us to gather and process valuable art data efficiently. Additionally, we're especially proud of overcoming the challenges of integrating the backend and frontend. After dedicating significant time and effort to making them work seamlessly together, achieving this milestone was a rewarding accomplishment that demonstrated our perseverance and technical growth.

## 💫 What we learned
Throughout the development of ArtSphere, we acquired a wide range of valuable skills. On the technical side, we gained proficiency in the Python Flask environment, leveraging its capabilities for building a robust backend. We also learned to utilize Pandas for data manipulation and storage, as well as web scraping techniques to gather and process art data. For the frontend, we expanded our expertise by learning new coding languages like CSS and JavaScript, enabling us to build an interactive user interface. Additionally, we mastered the integration of Flask with React, bridging the gap between backend and frontend development to create a seamless and functional platform.

## 🌎 What's next for Art Sphere
Our vision for Art Sphere includes exciting future developments to enhance its capabilities and user experience. We aim to implement a more robust database system capable of handling a larger, global collection of art pieces. This will enable users to discover art from anywhere in the world, no matter where they are. Additionally, we plan to incorporate location data for each piece, allowing users to know exactly where to find the artworks they love.

One of our most innovative goals is to provide live notifications: if a user is near an art piece on their list, the app will notify them in real-time, ensuring they never miss an opportunity to experience art they are passionate about. These features will make Art Sphere a truly immersive and globally connected platform for art exploration.


## 🔧 Technologies Used

- **Flask** – Python-based micro-framework for developing the backend.
- **Pandas** – Data manipulation library for managing art collection data.
- **React** – Frontend framework for creating a dynamic user interface.


## 💫 Features

- **API Integration:** Seamless integration with a React frontend using RESTful API endpoints.
- **CRUD Operations:** Full control over the art collection, with endpoints for creating, reading, updating, and deleting art pieces.
- **Cart Management:** API endpoints for managing a cart of selected art pieces, including adding and removing items.
- **Search Functionality:** Powerful search and filter functionality to explore the art collection by various attributes.
- **Profile Views:** Dedicated endpoints for fetching detailed profiles of individual art pieces.
- **Frontend Compatibility:** Designed for easy integration with a React-based frontend, offering a seamless user experience.

## 📁 Project Structure

```bash
├── Backend/
│   ├── app/
│   │   ├── __init__.py          # Flask app factory
│   │   ├── controllers/
│   │   │   ├── art_controller.py  # Art-specific API endpoints
│   │   ├── services/
│   │   │   ├── data_handler.py    # Load and save data logic
│   │   ├── models.py            # Data models for the art collection
│   │   ├── routes.py            # Centralized route management
│   │   └── test.py              # Unit tests for API endpoints
│   ├── Met_Museum_Collection.csv  # Art collection data
│   ├── Brooklyn Museumfull.csv    # Additional dataset
│   ├── Wadsworth Atheneum Collection.csv  # Additional dataset
│   ├── requirements.txt         # Python dependencies
│   ├── app.py                   # Main Flask application entry point
│   └── README.md                # Backend documentation
├── Frontend/
│   ├── public/
│   │   ├── index.html           # Main HTML template
│   │   └── favicon.ico          # Favicon for the app
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/
│   │   │   ├── Cart.js          # Page for cart management
│   │   │   ├── Home.js          # Homepage with carousel and intro
│   │   │   ├── Login.js         # Login page with authentication logic
│   │   │   ├── Search.js        # Search page for art pieces
│   │   │   └── Suggest.js       # Suggest page 
│   │   ├── styles/              # CSS files for styling
│   │   │   ├── Home.css         # Styles for the Home page
│   │   │   ├── Search.css       # Styles for the Search page
│   │   ├── App.js               # Main React component
│   │   ├── App.css              # Global styles for the app
│   │   ├── App.test.js          # Tests for the App component
│   │   ├── index.js             # React entry point
│   │   ├── index.css            # Global CSS
│   │   ├── reportWebVitals.js   # Performance measurement
│   │   └── setupTests.js        # Test setup file
│   ├── package.json             # Frontend dependencies and scripts
│   ├── package-lock.json        # Locked dependency versions
│   └── README.md                # Frontend documentation
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation

