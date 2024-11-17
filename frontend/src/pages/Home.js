import React, { useState, useEffect } from "react";
import '../styles/Home.css'; // Assuming CSS is in the same directory

// Array of image paths and descriptions
const images = [
    { image: "i1.jpg", description: "This is the first image description." },
    { image: "i2.jpg", description: "This is the second image description." },
    { image: "i3.jpg", description: "This is the third image description." },
    { image: "i4.jpg", description: "This is the fourth image description." },
    { image: "i5.jpg", description: "This is the fifth image description." },
    { image: "i6.jpg", description: "This is the sixth image description." },
    { image: "i7.jpg", description: "This is the seventh image description." },
    { image: "i8.jpg", description: "This is the eighth image description." },
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 60000); // Change image every 60 seconds (adjust if needed)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="home-container">
            {/* Introductory Text About the Art Sphere Web App */}
            <div className="intro-text">
                <h1>Welcome to Art Sphere</h1>
                <p>
                As passionate students of Computer Science and Art, we are driven by the desire to merge
                 our skills and passions to celebrate cultural appreciation. This vision inspired the creation 
                 of Art Sphere, an innovative platform designed to showcase a diverse collection of art pieces, 
                 that finds pieces of art around the user, so if the user wants to go and see they can. Art Sphere
                  empowers users to build a personalized history of previously viewed art while curating a bucket 
                  list of pieces they aspire to explore. By blending technology with creativity, Art Sphere delivers
                   an engaging and dynamic experience that fosters a deeper connection with art and culture.
                </p>
            </div>

            {/* Display the current image */}
            <div className="images-container">
                <img
                    src={images[currentImageIndex].image}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="image"
                />
            </div>

            {/* Display the description */}
            <p className="image-description">
                {images[currentImageIndex].description}
            </p>
        </div>
    );
}

export default Home;
